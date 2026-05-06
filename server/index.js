const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');

const app = express();
app.use(cors());

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: '*', // For dev
    methods: ['GET', 'POST']
  }
});

// Store player state.
// Map of sessionId -> { sessionId, id, name, maxLv, score, solved, cps, status }
const players = new Map();
const socketToSession = new Map();
const disconnectTimeouts = new Map();
let totalSoulsConsumed = 4194303;

io.on('connection', (socket) => {
  console.log(`[+] Client connected: ${socket.id}`);
  
  // Send initial leaderboard data to the newly connected client
  socket.emit('leaderboard', {
    players: Array.from(players.values()).sort((a, b) => (b.solved - a.solved) || (b.score - a.score)),
    totalSouls: totalSoulsConsumed
  });
  socket.on('join', (data) => {
    const { name, sessionId } = data;
    if (!sessionId) return;

    // Link current socket to this session
    socketToSession.set(socket.id, sessionId);

    // Handle existing session
    if (players.has(sessionId)) {
      console.log(`[~] Player reconnecting: ${name} (${sessionId})`);
      const player = players.get(sessionId);

      // Cancel any pending deletion timeout
      if (disconnectTimeouts.has(sessionId)) {
        clearTimeout(disconnectTimeouts.get(sessionId));
        disconnectTimeouts.delete(sessionId);
      }

      // Sync state back to client
      socket.emit('sync_state', {
        maxLv: player.maxLv,
        score: player.score,
        solved: player.solved,
        cps: player.cps,
        totalFails: player.fails,
        hintsUsed: player.hintsUsed
      });
    } else {
      // New player
      console.log(`[+] New player joining: ${name} (${sessionId})`);
      players.set(sessionId, {
        sessionId: sessionId,
        id: sessionId, // Use sessionId as the stable identifier
        name: name || 'UNKNOWN',
        maxLv: 1,
        score: 0,
        solved: 0,
        cps: 0,
        fails: 0,
        hintsUsed: 0,
        status: 'active' // 'active', 'dead', 'won', 'disqualified'
      });
      totalSoulsConsumed++;
    }

    // Broadcast updated leaderboard
    broadcastLeaderboard();
  });
  
  // Player updates their progress
  socket.on('progress', (data) => {
    const sessionId = socketToSession.get(socket.id);
    const player = players.get(sessionId);
    if (player) {
      player.maxLv = data.maxLv;
      player.score = data.score;
      player.solved = data.solved;
      player.cps = data.cps;
      player.fails = data.fails || 0;
      player.hintsUsed = data.hintsUsed || 0;
      broadcastLeaderboard();
    }
  });
  
  // Admin disqualifies a player
  socket.on('disqualify', (targetSessionId) => {
    console.log(`[!] Admin action: Disqualifying ${targetSessionId}`);

    // Find the current socket associated with this session
    let targetSocketId = null;
    for (let [sId, sessId] of socketToSession.entries()) {
      if (sessId === targetSessionId) {
        targetSocketId = sId;
        break;
      }
    }

    if (targetSocketId) {
      io.to(targetSocketId).emit('force_dq', targetSessionId);
    } else {
      // Even if offline, emit to all so the client can catch it on next join
      io.emit('force_dq', targetSessionId);
    }

    // Update server state status
    const target = players.get(targetSessionId);
    if (target) {
      target.status = 'disqualified';
    }
    broadcastLeaderboard();
  });
  
  // Player dies or severs
  socket.on('die', () => {
    const sessionId = socketToSession.get(socket.id);
    const player = players.get(sessionId);
    if (player) {
      player.status = 'dead';
      broadcastLeaderboard();
    }
  });

  // Player wins
  socket.on('win', () => {
    const sessionId = socketToSession.get(socket.id);
    const player = players.get(sessionId);
    if (player) {
      player.status = 'won';
      broadcastLeaderboard();
    }
  });
  
  socket.on('disconnect', () => {
    const sessionId = socketToSession.get(socket.id);
    console.log(`[-] Client disconnected: ${socket.id} (Session: ${sessionId})`);

    if (sessionId) {
      socketToSession.delete(socket.id);

      // Grace period before deleting player from leaderboard
      const timeout = setTimeout(() => {
        console.log(`[x] Session expired: ${sessionId}`);
        players.delete(sessionId);
        broadcastLeaderboard();
      }, 30000);

      disconnectTimeouts.set(sessionId, timeout);
    }
  });
});

function broadcastLeaderboard() {
  const activePlayers = Array.from(players.values());
  // Sort by solved count (primary) and score (secondary)
  activePlayers.sort((a, b) => (b.solved - a.solved) || (b.score - a.score));
  
  io.emit('leaderboard', {
    players: activePlayers,
    totalSouls: totalSoulsConsumed
  });
  lastBroadcast = Date.now();
}

// Throttle leaderboard broadcasts for background consistency
let lastBroadcast = 0;
setInterval(() => {
  // If no broadcast has happened in the last 5 seconds, force one
  if (Date.now() - lastBroadcast > 5000) {
    broadcastLeaderboard();
  }
}, 5000);

const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
