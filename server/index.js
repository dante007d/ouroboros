const express = require('express');
const http = require('http');
const crypto = require('crypto');
const { Server } = require('socket.io');
const cors = require('cors');

// ── TUNABLES (override with environment variables on the host) ──────────────
const PORT = process.env.PORT || 3001;
const ADMIN_CODE = process.env.ADMIN_CODE || 'hitler';
// How often leaderboards / rank updates are pushed. Every change inside this
// window is folded into a single broadcast, so cost no longer grows with the
// number of events.
const TICK_MS = Number(process.env.BOARD_INTERVAL_MS) || 2000;
const MAX_PLAYERS = Number(process.env.MAX_PLAYERS) || 5000;
const LOBBY_ROWS = 25;          // rows sent to the start-screen leaderboard
const MAX_LEVEL = 60;
const TIMER_SYNC_MS = 10000;    // clients count down locally; this just corrects drift
const RATE_BURST = 20;          // per-socket event budget...
const RATE_PER_SEC = 4;         // ...and refill rate

const app = express();
app.disable('x-powered-by');
app.use(cors());

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: process.env.CLIENT_ORIGIN ? process.env.CLIENT_ORIGIN.split(',') : '*',
    methods: ['GET', 'POST']
  },
  serveClient: false,
  maxHttpBufferSize: 16 * 1024, // no legitimate message is anywhere near this
  pingInterval: 25000,
  pingTimeout: 30000            // phones on bad networks get a little more slack
});

// Store player state.
// Map of sessionId -> player. sessionId is a secret held by the client;
// only publicId is ever sent to other clients.
const players = new Map();
const publicToSession = new Map();
let totalSoulsConsumed = 4194303;
let globalTimer = null; // { endTime }
let gameEnded = false;
let lastGameOver = null;
let dirty = true;
let feed = [];
let lobbyCache = null;

// ── HELPERS ─────────────────────────────────────────────────────────────────
const num = (v, min, max) => {
  const n = Number(v);
  return Number.isFinite(n) ? Math.min(max, Math.max(min, n)) : min;
};

const cleanName = (name) =>
  String(name ?? '').replace(/[\u0000-\u001f\u007f]/g, '').trim().slice(0, 20) || 'UNKNOWN';

// Year of study: 1-4 only, anything else is treated as unknown.
const cleanYear = (y) => {
  const n = Number(y);
  return Number.isInteger(n) && n >= 1 && n <= 4 ? n : null;
};

const cleanSession = (id) =>
  typeof id === 'string' && /^[A-Za-z0-9-]{8,64}$/.test(id) ? id : null;

const codeDigest = (code) => crypto.createHash('sha256').update(String(code ?? '').trim().toLowerCase()).digest();
const ADMIN_DIGEST = codeDigest(ADMIN_CODE);

const markDirty = () => { dirty = true; };

const pushFeed = (item) => {
  feed.push(item);
  if (feed.length > 6) feed.shift();
};

const rankTime = (p) => (p.status === 'won' ? p.finishTime : p.levelUpdateTime) - p.startTime;

// Priority ranking:
// 0. The disqualified sink to the bottom (and can never be the victor)
// 1. Highest Level (maxLv) - DESC
// 2. Time taken to reach it (or to finish, if won) - ASC
// 3. Lesser Hints Used - ASC
// 4. Lesser Fails - ASC
const isDQ = (p) => (p.status === 'disqualified' ? 1 : 0);
const byRank = (a, b) =>
  (isDQ(a) - isDQ(b)) ||
  (b.maxLv - a.maxLv) ||
  (rankTime(a) - rankTime(b)) ||
  (a.hintsUsed - b.hintsUsed) ||
  (a.fails - b.fails);

const ranked = () => Array.from(players.values()).sort(byRank);

const lean = (p) => ({ id: p.publicId, name: p.name, maxLv: p.maxLv, status: p.status, online: p.online });

const full = (p) => ({
  ...lean(p),
  solved: p.solved,
  cps: p.cps,
  fails: p.fails,
  hintsUsed: p.hintsUsed,
  year: p.year,
  cheats: p.cheats,
  time: rankTime(p) / 1000
});

const onlineCount = () => {
  let n = 0;
  for (const p of players.values()) if (p.online) n++;
  return n;
};

const boardPayload = (list, rows, mapper) => ({
  players: list.slice(0, rows).map(mapper),
  totalSouls: totalSoulsConsumed,
  total: list.length,
  online: onlineCount()
});

function newPlayer(sessionId, name, year) {
  const now = Date.now();
  let publicId;
  do { publicId = crypto.randomBytes(6).toString('hex'); } while (publicToSession.has(publicId));
  return {
    sessionId,
    publicId,
    name,
    year,
    maxLv: 0,
    score: 0,
    solved: 0,
    cps: 0,
    fails: 0,
    hintsUsed: 0,
    cheats: 0,
    lastCheatFeed: 0,
    startTime: now,
    finishTime: null,
    levelUpdateTime: now,
    status: 'active', // 'active', 'dead', 'won', 'disqualified'
    online: false,
    socketId: null,
    sentRank: null
  };
}

// Client state is the source of truth for its own run; the server only mirrors
// it, clamped to sane values so a bad payload cannot poison the sort.
function applyProgress(player, data, quiet) {
  if (!data || typeof data !== 'object') return;
  // Winners and the disqualified are frozen on the board.
  if (player.status === 'won' || player.status === 'disqualified') return;

  const lv = num(data.maxLv, 0, MAX_LEVEL);
  if (lv > player.maxLv) {
    player.levelUpdateTime = Date.now();
    if (!quiet && lv >= 1 && Number.isInteger(lv)) pushFeed({ t: 'lv', n: player.name, lv });
  } else if (!quiet && lv < player.maxLv && player.maxLv >= 3) {
    pushFeed({ t: 'fall', n: player.name, lv: player.maxLv });
  }
  player.maxLv = lv;
  player.score = num(data.score, 0, 1e9);
  player.solved = num(data.solved, 0, 1e6);
  player.cps = num(data.cps, 0, 1e4);
  player.fails = num(data.fails, 0, 1e6);
  player.hintsUsed = num(data.hintsUsed, 0, 1e6);
  // Strikes only ever go up: a reload can't wash them off.
  player.cheats = Math.max(player.cheats, num(data.cheats, 0, 1e4));
  if (player.status === 'dead') player.status = 'active'; // re-entered the cycle
}

// Make room by forgetting souls that left without solving anything.
function pruneIdle() {
  for (const [sid, p] of players) {
    if (!p.online && p.solved === 0) {
      players.delete(sid);
      publicToSession.delete(p.publicId);
    }
  }
  return players.size < MAX_PLAYERS;
}

function finishGame() {
  if (gameEnded) return;
  gameEnded = true;
  globalTimer = null;

  const top = ranked()[0];
  const winner = top && top.status !== 'disqualified' ? top : null;
  console.log(`[!] Game Over. Winner: ${winner ? winner.name : 'NONE'}`);

  lastGameOver = {
    at: Date.now(),
    winner: winner ? full(winner) : null,
    message: 'THE CYCLE HAS BEEN SEALED. A VICTOR HAS BEEN CHOSEN.'
  };
  io.emit('timer_sync', { remainingMs: null });
  io.emit('game_over', lastGameOver);
}

// ── SOCKETS ─────────────────────────────────────────────────────────────────
io.on('connection', (socket) => {
  socket.data.tokens = RATE_BURST;
  socket.data.last = Date.now();
  socket.data.created = 0;
  socket.data.authFails = 0;

  // Token bucket: a runaway or malicious client just gets its events dropped.
  socket.use((packet, next) => {
    if (socket.data.isAdmin) return next();
    const now = Date.now();
    socket.data.tokens = Math.min(RATE_BURST, socket.data.tokens + ((now - socket.data.last) / 1000) * RATE_PER_SEC);
    socket.data.last = now;
    if (socket.data.tokens < 1) return;
    socket.data.tokens -= 1;
    next();
  });

  // A throwing handler would otherwise take the whole process (and every
  // player's standing) down with it.
  const on = (event, handler) => socket.on(event, (...args) => {
    try { handler(...args); } catch (err) { console.error(`[!] '${event}' handler failed:`, err); }
  });
  const adminOn = (event, handler) => on(event, (...args) => { if (socket.data.isAdmin) handler(...args); });

  const currentPlayer = () => players.get(socket.data.sessionId);

  if (globalTimer && !gameEnded) {
    socket.emit('timer_sync', { remainingMs: Math.max(0, globalTimer.endTime - Date.now()) });
  }

  // Start-screen leaderboard subscription
  on('lobby', (watching) => {
    if (watching) {
      socket.join('lobby');
      socket.emit('leaderboard', lobbyCache || boardPayload(ranked(), LOBBY_ROWS, lean));
    } else {
      socket.leave('lobby');
    }
  });

  on('join', (data) => {
    if (!data || typeof data !== 'object') return;
    const sessionId = cleanSession(data.sessionId);
    if (!sessionId) return;

    let player = players.get(sessionId);
    if (!player) {
      if (++socket.data.created > 5) return; // one tab should not mint endless souls
      if (players.size >= MAX_PLAYERS && !pruneIdle()) {
        socket.emit('server_full');
        return;
      }
      player = newPlayer(sessionId, cleanName(data.name), cleanYear(data.year));
      players.set(sessionId, player);
      publicToSession.set(player.publicId, sessionId);
      totalSoulsConsumed++;
      applyProgress(player, data.progress, true);
    } else {
      player.name = cleanName(data.name || player.name);
      player.year = cleanYear(data.year) ?? player.year;
      applyProgress(player, data.progress, true);
    }

    // Detach whatever session this socket was carrying before
    const prev = players.get(socket.data.sessionId);
    if (prev && prev !== player && prev.socketId === socket.id) {
      prev.online = false;
      prev.socketId = null;
    }

    socket.data.sessionId = sessionId;
    player.socketId = socket.id;
    player.online = true;
    player.sentRank = null;
    socket.join('players');

    socket.emit('joined', { id: player.publicId, status: player.status });
    // Only souls who were in the finished game are shown its end; a fresh
    // player arriving after a forgotten test run can still play.
    if (gameEnded && lastGameOver && player.startTime <= lastGameOver.at) socket.emit('game_over', lastGameOver);
    markDirty();
  });

  // Player updates their progress
  on('progress', (data) => {
    const player = currentPlayer();
    if (!player) return;
    applyProgress(player, data, false);
    markDirty();
  });

  // Caught pasting, copying the riddle or leaving the game mid-riddle
  on('cheat', (data) => {
    const player = currentPlayer();
    if (!player) return;
    player.cheats = Math.min(player.cheats + 1, 1e4);
    const kind = typeof data?.kind === 'string' ? data.kind.slice(0, 12) : 'unknown';
    console.log(`[!] Cheat strike ${player.cheats} for ${player.name}: ${kind}`);
    // Shame them publicly, but not more than once every 10s each
    const now = Date.now();
    if (now - player.lastCheatFeed > 10000) {
      player.lastCheatFeed = now;
      pushFeed({ t: 'cheat', n: player.name });
    }
    markDirty();
  });

  // Player dies or severs
  on('die', (data) => {
    const player = currentPlayer();
    if (player && player.status === 'active') {
      applyProgress(player, data, true);
      player.status = 'dead';
      pushFeed({ t: 'dead', n: player.name });
      markDirty();
    }
  });

  // Player wins (carries a final snapshot in case the last progress update was lost)
  on('win', (data) => {
    const player = currentPlayer();
    if (player && player.status !== 'disqualified' && player.status !== 'won') {
      applyProgress(player, data, true);
      player.status = 'won';
      player.finishTime = Date.now();
      pushFeed({ t: 'won', n: player.name });
      markDirty();
    }
  });

  // ── ADMIN ──
  on('admin_auth', (code, ack) => {
    if (typeof ack !== 'function') return;
    if (socket.data.authFails >= 5) return ack({ ok: false });
    if (crypto.timingSafeEqual(codeDigest(code), ADMIN_DIGEST)) {
      socket.data.isAdmin = true;
      socket.join('admin');
      ack({ ok: true });
      socket.emit('leaderboard', boardPayload(ranked(), Infinity, full));
    } else {
      socket.data.authFails++;
      ack({ ok: false });
    }
  });

  adminOn('admin_leave', () => {
    socket.data.isAdmin = false;
    socket.leave('admin');
  });

  adminOn('disqualify', (publicId) => {
    const target = players.get(publicToSession.get(publicId));
    if (!target) return;
    console.log(`[!] Admin action: Disqualifying ${target.name} (${publicId})`);
    target.status = 'disqualified';
    if (target.socketId) io.to(target.socketId).emit('force_dq');
    pushFeed({ t: 'dq', n: target.name });
    markDirty();
  });

  adminOn('reset_leaderboard', () => {
    console.log(`[!] Admin action: Clearing all players`);
    players.clear();
    publicToSession.clear();
    feed = [];
    gameEnded = false;
    lastGameOver = null;
    markDirty();
  });

  adminOn('start_timer', (durationSeconds) => {
    const seconds = num(durationSeconds, 1, 24 * 3600);
    console.log(`[!] Admin action: Starting global timer for ${seconds}s`);
    globalTimer = { endTime: Date.now() + seconds * 1000 };
    gameEnded = false;
    lastGameOver = null;
    io.emit('timer_sync', { remainingMs: seconds * 1000 });
  });

  adminOn('end_game_manually', () => {
    console.log(`[!] Admin action: Ending game manually`);
    finishGame();
  });

  socket.on('disconnect', () => {
    // Players are kept (marked offline) so a locked phone or a flaky network
    // never costs anyone their place on the board.
    const player = currentPlayer();
    if (player && player.socketId === socket.id) {
      player.online = false;
      player.socketId = null;
      markDirty();
    }
  });
});

// ── BROADCAST LOOP ──────────────────────────────────────────────────────────
// One sort per tick, no matter how many events arrived. Each audience only
// gets what it shows: the lobby a short board, the admin the full one, and
// players a small pulse plus their own rank when it moves.
function tick() {
  if (!dirty) return;
  dirty = false;

  const list = ranked();
  const rooms = io.sockets.adapter.rooms;

  lobbyCache = boardPayload(list, LOBBY_ROWS, lean);
  if (rooms.get('lobby')?.size) io.to('lobby').emit('leaderboard', lobbyCache);
  if (rooms.get('admin')?.size) io.to('admin').emit('leaderboard', boardPayload(list, Infinity, full));

  list.forEach((p, i) => {
    const rank = i + 1;
    if (p.socketId && p.sentRank !== rank) {
      io.sockets.sockets.get(p.socketId)?.emit('rank', rank);
      p.sentRank = rank;
    }
  });

  if (rooms.get('players')?.size) {
    io.to('players').emit('pulse', {
      total: list.length,
      online: lobbyCache.online,
      leader: list[0] ? { n: list[0].name, lv: list[0].maxLv } : null,
      feed
    });
  }
  feed = [];
}

setInterval(() => {
  try { tick(); } catch (err) { console.error('[!] tick failed:', err); }
}, TICK_MS);

// Global timer: checked every second, but clients count down on their own
// and only get a correction every few seconds.
setInterval(() => {
  if (globalTimer && !gameEnded && Date.now() >= globalTimer.endTime) finishGame();
}, 1000);

setInterval(() => {
  if (globalTimer && !gameEnded) {
    io.emit('timer_sync', { remainingMs: Math.max(0, globalTimer.endTime - Date.now()) });
  }
}, TIMER_SYNC_MS);

setInterval(() => {
  const mem = process.memoryUsage();
  console.log(`[stats] players=${players.size} online=${onlineCount()} sockets=${io.engine.clientsCount} rss=${Math.round(mem.rss / 1e6)}MB`);
}, 30000);

// ── HTTP ────────────────────────────────────────────────────────────────────
// Health check for the host and for keeping a free instance awake.
app.get('/health', (req, res) => {
  res.json({ ok: true, players: players.size, online: onlineCount(), sockets: io.engine.clientsCount });
});
app.get('/', (req, res) => res.send('OUROBOROS SERVER ONLINE'));

// Everyone's standing lives in memory, so a stray exception must not end the
// process mid-event. Log it and keep serving.
process.on('uncaughtException', (err) => console.error('[!] Uncaught exception:', err));
process.on('unhandledRejection', (err) => console.error('[!] Unhandled rejection:', err));

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
