import React, { useState, useEffect, useRef } from 'react';
import { io } from 'socket.io-client';
import LeaderboardDashboard from './components/LeaderboardDashboard';
import { BOOT, THOUGHTS, ROOMS, PZ, WIN_ART, LOSE_ART, WIN_SNAKE, LOSE_SNAKE, SAVAGES, TIMER_INSULTS } from './data';

const PM = {};
PZ.forEach(p => { PM[p.id] = p; });

const socket = io(import.meta.env.VITE_SOCKET_URL || 'http://localhost:3001');

const getSessionId = () => {
  let id = localStorage.getItem('ouro_session_id');
  if (!id) {
    id = crypto.randomUUID();
    localStorage.setItem('ouro_session_id', id);
  }
  return id;
};

const INITIAL_STATE = {
  id: 'PZ-ENG-001', solved: 0, streak: 0, cps: 0, cpData: null, 
  maxLv: 1, score: 0, hintsLeft: 15, hintsUsed: 0, totalFails: 0, 
  path: ['PZ-ENG-001'], waiting: false, hintUsed: false, savageMsg: ''
};

const App = () => {
  const [screen, setScreen] = useState('boot'); // boot, start, game, end
  const [bootLines, setBootLines] = useState([]);
  const [name, setName] = useState('');
  const [S, setS] = useState(INITIAL_STATE);
  
  const [leaderboard, setLeaderboard] = useState({ players: [], totalSouls: 0 });
  const [toast, setToast] = useState(null);
  const [modal, setModal] = useState(null);
  const [cpBanner, setCpBanner] = useState(false);
  const [answerInput, setAnswerInput] = useState('');
  const [accessCode, setAccessCode] = useState('');
  const [failCount, setFailCount] = useState(0);
  const [timeLeft, setTimeLeft] = useState(60);
  const [timerActive, setTimerActive] = useState(false);
  const [feedback, setFeedback] = useState({ msg: '', status: '' });
  const [hintVisible, setHintVisible] = useState(false);
  const [failAnswerOverlay, setFailAnswerOverlay] = useState(null);
  const [roomChoices, setRoomChoices] = useState([]);

  // Persistence: Load initial state from localStorage if available
  useEffect(() => {
    const savedName = localStorage.getItem('ouro_name');
    const savedS = localStorage.getItem('ouro_state');
    const savedScreen = localStorage.getItem('ouro_current_screen');
    const defaultS = {
      id: 'PZ-ENG-001', solved: 0, streak: 0, cps: 0, cpData: null,
      maxLv: 1, hintsLeft: 15, hintsUsed: 0, totalFails: 0, path: ['PZ-ENG-001'],
      waiting: false, hintUsed: false, savageMsg: ''
    };

    if (savedName) setName(savedName);
    if (savedS) {
      try {
        const parsed = JSON.parse(savedS);
        setS({ ...defaultS, ...parsed, waiting: false, streak: 0 });
      } catch (e) {
        console.error("Failed to load state", e);
        setS(defaultS);
      }
    }
    if (savedScreen && (savedScreen === 'game' || savedScreen === 'admin' || savedScreen === 'end')) {
      setScreen(savedScreen);
    }
  }, []);

  // Persistence: Save state whenever S or name changes
  useEffect(() => {
    if (name) localStorage.setItem('ouro_name', name);
    if (S.solved > 0 || S.id !== 'L0-0') {
      localStorage.setItem('ouro_state', JSON.stringify(S));
    }
    localStorage.setItem('ouro_current_screen', screen);
  }, [S, name, screen]);

  // Socket
  useEffect(() => {
    socket.on('leaderboard', (data) => {
      setLeaderboard(data);
    });

    socket.on('sync_state', (state) => {
      setS(prev => ({
        ...prev,
        maxLv: state.maxLv,
        score: state.score,
        solved: state.solved,
        cps: state.cps,
        totalFails: state.totalFails,
        hintsUsed: state.hintsUsed
      }));
    });

    return () => {
      socket.off('leaderboard');
      socket.off('sync_state');
    };
  }, []);

  // Boot Sequence
  useEffect(() => {
    if (screen === 'boot') {
      let index = 0;
      const interval = setInterval(() => {
        if (index < BOOT.length) {
          const item = BOOT[index];
          setBootLines(prev => [...prev, item]);
          index++;
        } else {
          clearInterval(interval);
          setTimeout(() => setScreen('start'), 700);
        }
      }, 100);
      return () => clearInterval(interval);
    }
  }, [screen]);

  // Sync to Server
  useEffect(() => {
    if (screen === 'game') {
      socket.emit('progress', {
        maxLv: S.maxLv,
        score: S.score,
        solved: S.solved,
        cps: S.cps,
        fails: S.totalFails,
        hintsUsed: S.hintsUsed
      });
    }
  }, [S.maxLv, S.score, S.solved, S.cps, S.totalFails, S.hintsUsed, screen]);

  // Socket listeners for Admin actions
  useEffect(() => {
    socket.on('force_dq', (targetSessionId) => {
      // Check if THIS client is the one being DQ'd
      if (getSessionId() === targetSessionId) {
        console.log("!! DISQUALIFIED BY ADMINISTRATOR !!");
        setScreen('end');
        setS(prev => ({ ...prev, status: 'disqualified' }));
      }
    });
    return () => {
      socket.off('force_dq');
    };
  }, []);

  const showToast = (msg, type) => {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 2800);
  };

  const startGame = () => {
    const code = accessCode.trim().toUpperCase();
    if (code === 'FUCK IEEE') {
      setScreen('admin');
      return;
    }

    if (!name.trim()) {
      showToast('X NAME REQUIRED', 'err');
      return;
    }
    
    if (code === 'PLAYER') {
      socket.emit('join', { name, sessionId: getSessionId() });
      setS(INITIAL_STATE);
      setScreen('game');
      setFeedback({ msg: '', status: '' });
      setHintVisible(false);
      setRoomChoices([]);
      setAnswerInput('');
    } else {
      showToast('X INVALID ACCESS CODE', 'err');
    }
  };

  const doSubmit = () => {
    if (S.waiting) return;
    const p = PM[S.id];
    if (!p || !p.a) return;

    const raw = answerInput.trim().toLowerCase();
    
    const normalize = (str) => {
      if (!str) return "";
      // Aggressive normalization: remove all non-alphanumeric characters
      return str.toString().toLowerCase().replace(/[^a-z0-9]/g, '');
    };

    const isMatch = (userInput, targetAnswer) => {
      const u = userInput.trim().toLowerCase();
      const t = targetAnswer.trim().toLowerCase();

      // 1. Exact match (case insensitive)
      if (u === t) return true;

      // 2. Standard punctuation-free match
      const cleanU = u.replace(/[.,!?;:]+$/, "");
      const cleanT = t.replace(/[.,!?;:]+$/, "");
      if (cleanU === cleanT) return true;

      // 3. Aggressive alphanumeric-only match (handles [1,2] vs 1,2 vs 1 2)
      const aggU = normalize(u);
      const aggT = normalize(t);
      if (aggU === aggT && aggU.length > 0) return true;

      // 4. Basic word-to-number mapping (e.g. "three" vs "3")
      const wordMap = { "zero": "0", "one": "1", "two": "2", "three": "3", "four": "4", "five": "5", "six": "6", "seven": "7", "eight": "8", "nine": "9", "ten": "10" };
      if (wordMap[aggU] === aggT || wordMap[aggT] === aggU) return true;

      return false;
    };

    if (p.a.some(ans => isMatch(raw, ans))) {

      setTimerActive(false);
      setFeedback({ msg: '>> TRANSMISSION ACCEPTED. THE CYCLE DEEPENS...', status: 'ok' });
      setFailCount(0);

      let newS = { 
        ...S, 
        solved: S.solved + 1, 
        streak: S.hintUsed ? 0 : S.streak + 1, 
        hintUsed: false 
      };

      if (p.lv > newS.maxLv) newS.maxLv = p.lv;
      
      if (p.lv > 0 && p.lv % 3 === 0) {
        newS.cps += 1;
        newS.cpData = { id: S.id, solved: newS.solved, hintsLeft: newS.hintsLeft, path: [...S.path] };
        setCpBanner(true);
        setTimeout(() => setCpBanner(false), 3500);
      }
      
      setS(newS);

      if (p.lv === 60) {
        setTimeout(() => endGame(true), 1200);
      } else {
        setTimeout(() => {
          const availableLevels = PZ.filter(pz => pz.lv > p.lv).map(pz => pz.lv);
          if (availableLevels.length > 0) {
            const nextLv = Math.min(...availableLevels);
            const nextPuzzles = PZ.filter(pz => pz.lv === nextLv);
            setS(prev => ({ ...prev, waiting: true }));
            
            // Level-based selection logic
            const aptitudePool = nextPuzzles.filter(p => p.type === 'APTITUDE');
            
            let randomPuzzle;
            if (nextLv <= 10) {
              // Enforce 100% Aptitude for the first 10 levels
              if (aptitudePool.length > 0) {
                randomPuzzle = aptitudePool[Math.floor(Math.random() * aptitudePool.length)];
              } else {
                randomPuzzle = nextPuzzles[Math.floor(Math.random() * nextPuzzles.length)];
              }
            } else {
              // After level 10, pick completely randomly from all available puzzles
              randomPuzzle = nextPuzzles[Math.floor(Math.random() * nextPuzzles.length)];
            }

            const roomIdx = Math.floor(nextLv) % ROOMS.length;
            const pool = [ROOMS[roomIdx]];
            const choices = [randomPuzzle];
            setRoomChoices(choices.map((c, i) => ({ cid: c.id, room: pool[i] || ROOMS[0] })));
          } else {
            endGame(true);
          }
        }, 900);
      }
    } else {
      triggerFail('incorrect');
    }
  };

  const triggerFail = (reason = 'incorrect') => {
    setTimerActive(false);
    const insult = SAVAGES[Math.floor(Math.random() * SAVAGES.length)];
    
    if (reason === 'timeout') {
      setFeedback({ msg: `X TIME EXPIRED. ${insult}`, status: 'bad' });
    } else {
      setFeedback({ msg: `X INCORRECT. ${insult}`, status: 'bad' });
    }
    
    setS(prev => ({ ...prev, streak: 0, savageMsg: insult, totalFails: prev.totalFails + 1 }));
    setFailAnswerOverlay(insult);
    showToast(`!! ${insult}`, 'err');
    
    const nextFailCount = failCount + 1;
    setFailCount(nextFailCount);
    
    setTimeout(() => {
      setFailAnswerOverlay(null);
      const getRandId = (lv, excludeId) => {
        let pool = PZ.filter(p => p.lv === lv);
        
        // Requirement: Ensure a different question if returning to checkpoint
        if (excludeId && pool.length > 1) {
          pool = pool.filter(p => p.id !== excludeId);
        }

        const aptitudePool = pool.filter(p => p.type === 'APTITUDE');
        
        if (lv <= 10) {
          // 100% Aptitude for first 10 levels
          if (aptitudePool.length > 0) {
            return aptitudePool[Math.floor(Math.random() * aptitudePool.length)].id;
          } else {
            return pool[Math.floor(Math.random() * pool.length)].id;
          }
        } else {
          // Pure random for subsequent levels
          return pool[Math.floor(Math.random() * pool.length)].id;
        }
      };

      if (nextFailCount >= 2) {
        // PUNISHMENT: RESET TO BEGINNING
        setS({ ...INITIAL_STATE, totalFails: S.totalFails + 1 });
        setFailCount(0);
        showToast('X CONSECUTIVE FAILURE: FULL RESET', 'err');
      } else if (S.cpData) {
        // PUNISHMENT: RETURN TO LAST CHECKPOINT
        const cpPuz = PM[S.cpData.id];
        const newId = getRandId(cpPuz.lv, S.id); // Pass S.id to exclude it
        setS(prev => ({ 
          ...prev, 
          id: newId, 
          solved: prev.cpData.solved, 
          hintsLeft: prev.cpData.hintsLeft, 
          path: [...prev.cpData.path], 
          streak: 0, 
          waiting: false, 
          hintUsed: false, 
          savageMsg: '' 
        }));
        showToast('| CHECKPOINT RESTORED', 'cp');
      } else {
        // PUNISHMENT: NO CHECKPOINT RESET
        setS(prev => ({ ...prev, id: 'L0-0', path: ['L0-0'], streak: 0, waiting: false, savageMsg: insult }));
        showToast('X RETURNED TO THE BEGINNING', 'err');
      }
      setFeedback({ msg: '', status: '' });
      setAnswerInput('');
      setHintVisible(false);
    }, 3000);
  };

  // Timer countdown
  useEffect(() => {
    let interval = null;
    if (timerActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(prev => {
          const next = prev - 1;
          if (next === 20) {
            const insult = TIMER_INSULTS[Math.floor(Math.random() * TIMER_INSULTS.length)];
            setS(s => ({ ...s, savageMsg: insult }));
            showToast(`!! ${insult}`, 'warn');
          }
          return next;
        });
      }, 1000);
    } else if (timeLeft === 0 && timerActive) {
      triggerFail('timeout');
    }
    return () => clearInterval(interval);
  }, [timerActive, timeLeft]);

  // Restart timer on puzzle change
  useEffect(() => {
    if (screen === 'game' && S.id) {
      const p = PM[S.id];
      // Updated Timer Logic: Medium = 45s, Hard = 60s
      let duration = 60;
      if (p.difficulty === 'MEDIUM') duration = 45;
      else if (p.difficulty === 'HARD') duration = 60;
      else duration = 60; // Default for Lore/Easy
      
      setTimeLeft(duration);
      setTimerActive(true);
    } else {
      setTimerActive(false);
    }
  }, [S.id, screen]);

  const endGame = (won) => {
    socket.emit(won ? 'win' : 'die');
    setScreen('end');
  };

  const confirmKill = () => {
    setModal({
      icon: 'X', title: 'SEVER THE CYCLE?',
      body: `AGENT ${name.toUpperCase()} -- ${S.solved} riddles solved. Level ${S.maxLv} reached. Score: ${S.score}. The snake does not forgive abandonment.`,
      btns: [
        { l: 'YES -- SEVER', c: 'btn-r', fn: () => { setModal(null); endGame(false); } },
        { l: 'CONTINUE', c: 'btn-g', fn: () => setModal(null) }
      ]
    });
  };

  const disqualifyPlayer = (id) => {
    console.log(`[ADMIN] Requesting DQ for: ${id}`);
    if (window.confirm("ARE YOU SURE YOU WANT TO DISQUALIFY THIS SOUL?")) {
      socket.emit('disqualify', id);
    }
  };

  const handleRoomSelect = (cid) => {
    setS(prev => ({ ...prev, path: [...prev.path, cid], id: cid, waiting: false, hintUsed: false }));
    setRoomChoices([]);
    setFeedback({ msg: '', status: '' });
    setAnswerInput('');
    setHintVisible(false);
  };

  const showHint = () => {
    if (S.hintUsed) return;
    if (S.hintsLeft <= 0) {
      showToast('X THE WELL OF WISDOM IS DRY. YOU ARE ON YOUR OWN.', 'err');
      return;
    }

    const insult = SAVAGES[Math.floor(Math.random() * SAVAGES.length)];

    setHintVisible(true);
    setS(prev => ({ 
      ...prev, 
      hintsLeft: prev.hintsLeft - 1,
      hintsUsed: prev.hintsUsed + 1,
      streak: 0,
      hintUsed: true,
      savageMsg: insult
    }));
    showToast(`!! ${insult}`, 'err');
  };

  const currPZ = PM[S.id];

  return (
    <>
      <div id="sfx"></div>
      <div id="drip"></div>

      <div className="ticker top">
        <div className="ttag poison">SYS</div>
        <div className="tscroll">--- THE CYCLE IS FEEDING --- SIGNAL INTEGRITY: COLLAPSING --- YOU HAVE BEEN HERE BEFORE AND YOU WILL COME HERE AGAIN ---</div>
      </div>
      <div className="ticker bot">
        <div className="ttag violet">oo</div>
        <div className="tscroll">### IN CAUDA VENENUM ### THE SNAKE BITES ITSELF SO IT CANNOT FEEL THE HUNGER ###</div>
      </div>

      {screen === 'boot' && (
        <div id="boot" className={screen === 'boot' ? '' : 'fade'}>
          <div id="bootlines">
            {bootLines.map((b, i) => (
              b ? <div key={i} className={`bl ${b.c || 'dim'}`}>{b.t || '\u00a0'}</div> : null
            ))}
          </div>
          <div><span className="bcursor"></span></div>
        </div>
      )}

      {(screen === 'game' || screen === 'end') && (
        <div id="hud" style={{ display: 'block' }}>
            <div className="hi">
              <div className="hl" style={{ fontSize: '1.2rem' }}>
                | AGENT: <span style={{ color: 'var(--c1)' }}>{name.toUpperCase() || 'UNKNOWN'}</span> 
                &nbsp;&nbsp;&nbsp;
                | DEPTH: <span style={{ color: 'var(--c5)', fontWeight: 'bold' }}>LV {currPZ ? currPZ.lv : S.maxLv}</span>/60
              </div>
              <div className="hr">
                <div className={`hs ${timeLeft < 10 ? 'blood' : ''}`} style={{ border: '2px solid var(--c4)', padding: '4px 12px', fontSize: '1.3rem' }}>
                  TIME: <b style={{ color: timeLeft < 10 ? 'var(--c2)' : 'var(--c5)', textShadow: timeLeft < 10 ? '0 0 10px var(--c2)' : 'none' }}>{timeLeft}s</b>
                </div>
                <div className="hs" style={{ fontSize: '1.1rem' }}>HINTS: <b style={{ color: (S.hintsLeft || 0) < 5 ? 'var(--c2)' : 'var(--c1)' }}>{S.hintsLeft ?? 15}</b></div>
                <div className="cpr">
                  [<div className={`cpd ${S.streak > 0 ? 'on' : ''}`}></div>
                   <div className={`cpd ${S.streak > 1 ? 'on' : ''}`}></div>
                   <div className={`cpd ${S.streak > 2 ? 'on' : ''}`}></div>]
                </div>
              </div>
            </div>
        </div>
      )}

      {screen === 'start' && (
        <div className="screen" id="startScreen">
          <div className="sw">
            <div className="dl poison">################################################################################################</div>
            <div className="oart poison" style={{fontSize:'13px',letterSpacing:'0.05em'}}>
{`⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣀⣀⣀⣀⣀⣀⣄⣀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⢀⣠⣴⡶⢿⣟⡛⣿⢉⣿⠛⢿⣯⡈⠙⣿⣦⡀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⣠⡾⠻⣧⣬⣿⣿⣿⣿⣿⡟⠉⣠⣾⣿⠿⠿⠿⢿⣿⣦⠀⠀⠀
⠀⠀⠀⠀⣠⣾⡋⣻⣾⣿⣿⣿⠿⠟⠛⠛⠛⠀⢻⣿⡇⢀⣴⡶⡄⠈⠛⠀⠀⠀
⠀⠀⠀⣸⣿⣉⣿⣿⣿⡿⠋⠀⠀⠀⠀⠀⠀⠀⠈⢿⣇⠈⢿⣤⡿⣦⠀⠀⠀⠀
⠀⠀⢰⣿⣉⣿⣿⣿⠏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⠦⠀⢻⣦⠾⣆⠀⠀⠀
⠀⠀⣾⣏⣿⣿⣿⡟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⣿⡶⢾⡀⠀⠀
⠀⠀⣿⠉⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣧⣼⡇⠀⠀
⠀⠀⣿⡛⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣿⣧⣼⡇⠀⠀
⠀⠀⠸⡿⢻⣿⣿⣿⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣼⣿⣥⣽⠁⠀⠀
⠀⠀⠀⢻⡟⢙⣿⣿⣿⣦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⣾⣿⣧⣸⡏⠀⠀⠀
⠀⠀⠀⠀⠻⣿⡋⣻⣿⣿⣿⣦⣤⣀⣀⣀⣀⣀⣠⣴⣿⣿⢿⣥⣼⠟⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠈⠻⣯⣤⣿⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⠛⣷⣴⡿⠋⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠈⠙⠛⠾⣧⣼⣟⣉⣿⣉⣻⣧⡿⠟⠋⠁⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠉⠉⠉⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀`}
            </div>
            <div className="oart blood">
              !! !! !! !! !! !! !! !! !! !! !! !! !! !! !! !! !! !! !! !! !! !! !! !! !! !! !! !!<br/>
              !!            YOU ARE INSIDE THE MOUTH. YOU HAVE ALWAYS BEEN INSIDE.             !!<br/>
              !! !! !! !! !! !! !! !! !! !! !! !! !! !! !! !! !! !! !! !! !! !! !! !! !! !! !! !!
            </div>
            <div className="gtitle">OUROBOROS</div>
            <div className="gsub">-- IN CAUDA VENENUM -- THE POISON IS IN THE TAIL --</div>
            <div className="dl bright">==================================================================================</div>
            
            <div style={{display:'flex',gap:'8px',alignItems:'stretch'}}>
              <div className="oart vio" style={{flex:'0 0 auto',fontSize:'11px',display:'flex',alignItems:'center'}}>
{` ___
/o o\\
| )o(
\\___/
 | |
 +-+`}
              </div>
              <div className="sysbox vio" data-l="[ SYSTEM STATUS ]" style={{flex:1}}>
                <div className="sr">
                  <div className="si"><div className="sd c1"></div><span style={{color:'var(--c1)'}}> CYCLE: ACTIVE</span></div>
                  <div className="si"><div className="sd c2"></div><span style={{color:'var(--c2)'}}> FEEDING: TRUE</span></div>
                  <div className="si"><div className="sd c3"></div><span style={{color:'var(--c3)'}}> LOOP: INFINITE</span></div>
                  <div className="si"><div className="sd c4"></div><span style={{color:'var(--c4)'}}> EXIT: NULL</span></div>
                  <div className="si"><div className="sd c1"></div><span style={{color:'var(--d1)'}}> SIG: </span><span id="sigV" style={{color:'var(--c1)'}}>====.. 64%</span></div>
                </div>
              </div>
              <div className="oart vio" style={{flex:'0 0 auto',fontSize:'11px',display:'flex',alignItems:'center'}}>
{` ___
/o o\\
| )o(
\\___/
 | |
 +-+`}
              </div>
            </div>

            <div className="oart vio" style={{fontSize:'12px'}}>
{`+--[ THE SNAKE DOES NOT DIE. IT DIGESTS ITSELF AND IS REBORN FROM ITS OWN HUNGER ]--+
|  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  |
+------------------------------------------------------------------------------------+`}
            </div>

            <div className="namebox">
              <div className="nlabel">!! IDENTIFY YOURSELF BEFORE YOU ARE CONSUMED !!</div>
              <div className="nwrap">
                <div className="nprompt">C:\&gt;</div>
                <input className="ninput" type="text" maxLength="20" placeholder="TYPE YOUR NAME_" 
                  value={name} onChange={e => setName(e.target.value)} 
                  onKeyDown={e => { if (e.key === 'Enter') startGame(); }} />
                <div className="ncursor"></div>
              </div>
            </div>

            <div className="namebox" style={{ marginTop: '10px' }}>
              <div className="nlabel">!! ENTER ACCESS CODE !!</div>
              <div className="nwrap">
                <div className="nprompt">C:\&gt;</div>
                <input className="ninput" type="password" maxLength="20" placeholder="ACCESS CODE_" 
                  value={accessCode} onChange={e => setAccessCode(e.target.value)} 
                  onKeyDown={e => { if (e.key === 'Enter') startGame(); }} />
                <div className="ncursor"></div>
              </div>
            </div>

            <div className="sysbox" data-l="[ LAWS OF THE ETERNAL CYCLE ]">
              <div className="rp">  <span className="rh">*</span> SOLVE A RIDDLE   -&gt;   THE NEXT CHAMBER OPENS<br/>
  <span className="rh">*</span> FIRST FAILURE    -&gt;   RETRACE TO LAST CHECKPOINT<br/>
  <span className="rh">*</span> SECOND FAILURE   -&gt;   TOTAL COLLAPSE & FULL RESET<br/>
  <span className="rh">*</span> EVERY 3 SOLVED    -&gt;   CHECKPOINT INSCRIBED IN FLESH<br/>
  <span className="rv">*</span> HINT POOL        -&gt;   15 USES TOTAL. ONCE GONE, VOID.<br/>
  <span className="rv">*</span> PERSISTENCE      -&gt;   THE CYCLE IS REMEMBERED ON LOAD<br/>
  <span className="rd">* THE SNAKE ALWAYS FINDS ITS WAY BACK TO ITS OWN MOUTH *</span></div>
            </div>

            <div className="oart dim" style={{fontSize:'12px'}}>
{` [oo][oo][oo][oo][oo][oo][oo][oo][oo][oo][oo][oo][oo][oo][oo][oo][oo][oo][oo][oo]
  ||   ||   ||   ||   ||   ||   ||   ||   ||   ||   ||   ||   ||   ||   ||   ||
  oo   oo   oo   oo   oo   oo   oo   oo   oo   oo   oo   oo   oo   oo   oo   oo`}
            </div>

            <div className="oart vio" style={{fontSize:'12px',textAlign:'center'}}>
              IT HAS BEEN WATCHING SINCE YOU OPENED THIS PAGE.
            </div>

            <div className="dl bright">==================================================================================</div>
            
            <div style={{ textAlign: 'center', marginTop: '20px' }}>
              <button className="btn btn-p" onClick={startGame}>|-- ENTER THE CYCLE --|</button>
            </div>
          </div>
          <LeaderboardDashboard players={leaderboard.players} totalSouls={leaderboard.totalSouls} />
        </div>
      )}

      {screen === 'game' && (
        <div className={`screen ${timeLeft < 10 ? 'unstable' : ''}`} id="gameScreen">
          <div className="gi">
            <div className="dl poison" style={{ fontSize: '12px' }}>--------------------------------------------------------------------------------------------------</div>
            <div className="hud">
              <div className="stat">
                <div className="label">SOLVED</div>
                <div className="value">{S.solved}</div>
              </div>
              <div className="stat">
                <div className="label">STREAK</div>
                <div className="value" style={{ color: S.streak > 4 ? 'var(--c1)' : 'inherit' }}>{S.streak}</div>
              </div>
              <div className="stat">
                <div className="label">HINTS</div>
                <div className="value" style={{ color: S.hintsLeft < 5 ? 'var(--c2)' : 'inherit' }}>{S.hintsLeft}</div>
              </div>
              <div className={`stat ${timeLeft <= 10 ? 'urgent' : timeLeft <= 20 ? 'warning' : ''}`}>
                <div className="label">TIME</div>
                <div className="value-wrap">
                  <div className="value" key={timeLeft}>{timeLeft}s</div>
                  <div className="timer-bar">
                    <div 
                      className="timer-progress" 
                      style={{ width: `${(timeLeft / 60) * 100}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bc" id="bc">
              <span className="bc">ROOT</span>
              {S.path.slice(1).map((p, i) => (
                <React.Fragment key={i}>
                  <span style={{ color: '#330011' }}> &gt; </span>
                  <span className={`bc ${i === S.path.length - 2 ? 'cur' : ''}`}>LV{PM[p].lv}</span>
                </React.Fragment>
              ))}
            </div>

            {roomChoices.length === 0 ? (
              <div className="acard" id="pcard">
                <div className="acard-top">+========================================================================+</div>
                <div className="acard-body">
                  <div className="chdr">
                    <div className="clv">
                      <span className="gtag purple">{currPZ?.difficulty || 'CORE'}</span>
                      <span className="gtag cyan">{currPZ?.type}</span>
                      <span style={{ marginLeft: '10px', color: 'var(--c5)', fontWeight: 'bold' }}>* CHAMBER DEPTH {currPZ?.lv}/60 *</span>
                    </div>
                    <div className="cid">SIG:{currPZ?.id}</div>
                  </div>
                  <div className="dl blood" style={{ fontSize: '12px', marginBottom: '8px' }}>------------------------------------------------------------------------</div>
                  <div className="pq">{currPZ?.q}</div>
                  <div className={`phint ${hintVisible ? 'vis' : ''}`}>
                    <div style={{ color: 'var(--c2)', fontWeight: 'bold', marginBottom: '4px', textDecoration: 'underline' }}>SYSTEM LOG: {S.savageMsg}</div>
                    HINT: {currPZ?.h}
                  </div>
                  <div className="dl vio" style={{ fontSize: '12px', marginBottom: '8px' }}>------------------------------------------------------------------------</div>
                  <div className="aa">
                    <div className="ap">&gt;&gt;&gt;</div>
                    <input className={`ai ${feedback.status}`} type="text" placeholder="TRANSMIT ANSWER" 
                      value={answerInput} onChange={e => setAnswerInput(e.target.value)} 
                      onKeyDown={e => { if (e.key === 'Enter') doSubmit(); }} />
                    <button className="btn btn-p" onClick={doSubmit} style={{ padding: '4px 14px', fontSize: '1.1rem' }} disabled={S.waiting}>SEND&gt;</button>
                  </div>
                  <div className="cftr">
                    <div className={`fb ${feedback.status}`}>{feedback.msg}</div>
                    <button className="hbtn" onClick={showHint}>!! REVEAL HINT [-50]</button>
                  </div>
                </div>
                <div className="acard-bot">+========================================================================+</div>
              </div>
            ) : (
              <div className="rsec" id="rsec" style={{ display: 'flex' }}>
                <div className="dl bright">==================================================================================</div>
                <div className="rhdr">!! ONE NEW CHAMBER OPEN -- [PROCEED WITH CAUTION]</div>
                <div className="rgrid">
                  {roomChoices.map((choice, i) => (
                    <div key={i} className="ropt" onClick={() => handleRoomSelect(choice.cid)} style={{ maxWidth: '400px', margin: '0 auto' }}>
                      <div className="rnum">{i + 1}</div>
                      <div style={{ flex: 1 }}>
                        <div className="rname">{choice.room.name}</div>
                        <div className="rsub">{choice.room.sub}</div>
                      </div>
                      <div className="rico">{choice.room.ico}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="dl poison" style={{ fontSize: '12px', marginTop: '20px' }}>--------------------------------------------------------------------------------------------------</div>
            <div className="dz">
              <div className="dlabel">!! SEVERING THE CYCLE WILL NOT FREE YOU !!</div>
              <button className="btn btn-r" onClick={confirmKill} style={{ fontSize: '.95rem', padding: '5px 12px' }}>X SEVER THE CYCLE</button>
            </div>
            <div className="dl poison" style={{ fontSize: '12px' }}>--------------------------------------------------------------------------------------------------</div>
          </div>
        </div>
      )}

      {screen === 'end' && (
        <div className="screen" id="endScreen">
          <pre className={`eart ${S.status === 'disqualified' ? 'lose' : (socket.connected ? 'win' : 'lose')}`}>
            {S.status === 'disqualified' ? LOSE_ART : (socket.connected ? WIN_ART : LOSE_ART)}
          </pre>
          <div className={`etitle ${S.status === 'disqualified' ? 'lose' : (socket.connected ? 'win' : 'lose')}`}>
            {S.status === 'disqualified' ? 'X DISQUALIFIED X' : (socket.connected ? 'o CYCLE BROKEN o' : 'X CONSUMED X')}
          </div>
          <div className="ebox">
            <div className="erow" style={{ color: 'var(--c2)', fontWeight: 'bold', textAlign: 'center', display: S.status === 'disqualified' ? 'block' : 'none', marginBottom: '10px' }}>
              !!! THE HIGH COMMAND HAS SEVERED YOUR THREAD !!!
            </div>
            <div className="erow"><label>- AGENT ID</label><value>{name.toUpperCase()}</value></div>
            <div className="erow"><label>- DEEPEST LEVEL</label><value>{S.maxLv}/60</value></div>
            <div className="erow"><label>- RIDDLES SOLVED</label><value>{S.solved}</value></div>
            <div className="erow"><label>- HINTS REMAINING</label><value>{S.hintsLeft}</value></div>
            <div className="erow"><label>- CHECKPOINTS</label><value>{S.cps}</value></div>
          </div>
          <pre className="eart">{socket.connected ? WIN_SNAKE : LOSE_SNAKE}</pre>
          <button className="btn btn-p" onClick={() => { 
            socket.emit('join', { name }); 
            setScreen('game'); 
            setS(INITIAL_STATE); 
          }}>&gt; RE-ENTER THE CYCLE &lt;</button>
        </div>
      )}

      {screen === 'admin' && (
        <div className="screen" id="adminScreen" style={{ padding: '20px' }}>
          <div className="gtitle" style={{ textAlign: 'center', marginBottom: '20px' }}>ADMINISTRATOR DASHBOARD</div>
          <div className="dl bright">==================================================================================</div>
          <div style={{ textAlign: 'center', marginBottom: '20px', color: 'var(--c1)' }}>
            OVERSEE THE SOULS CAUGHT IN THE CYCLE
          </div>
          <div style={{ 
            backgroundColor: 'var(--sur)', 
            padding: '20px', 
            border: '1px solid var(--c4)', 
            borderRadius: '4px',
            marginBottom: '20px'
          }}>
            <LeaderboardDashboard 
              players={leaderboard.players} 
              totalSouls={leaderboard.totalSouls} 
              isFullScreen={true} 
              onDisqualify={disqualifyPlayer}
            />
          </div>
          <div className="dl bright">==================================================================================</div>
          <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <button className="btn btn-r" onClick={() => { setScreen('start'); setAccessCode(''); }}>&lt; RETURN TO GATEWAY &lt;</button>
          </div>
        </div>
      )}

      {toast && <div id="toast" className={`show ${toast.type}`}>{toast.msg}</div>}
      <div id="cpbanner" className={cpBanner ? 'show' : ''}>| CHECKPOINT {S.cps} INSCRIBED [+500] |</div>

      {failAnswerOverlay && (
        <div id="failOverlay" className="show">
          <div className="fail-content">
            <div className="fail-label">SYSTEM FAILURE:</div>
            <div className="fail-answer">{failAnswerOverlay.toUpperCase()}</div>
            <div className="fail-sub">RE-CALIBRATING CYCLE...</div>
          </div>
        </div>
      )}

      {modal && (
        <div id="modal" className="show" onClick={() => setModal(null)}>
          <div className="mbox" onClick={e => e.stopPropagation()}>
            <div className="mhdr"><span>### OUROBOROS SYSTEM ###</span><span>{modal.title}</span></div>
            <div className="gsec" id="gsec">
              <div className="ginfo">
                <span className="gtag purple">{currPZ.difficulty || 'CORE'}</span>
                <span className="gtag cyan">{currPZ.type}</span>
                <span className="gtag gold" style={{ border: '1px solid var(--c5)', color: 'var(--c5)', fontWeight: 'bold' }}>CHAMBER LV {currPZ.lv}</span>
              </div>
            </div>
            <div className="mbody">
              <div className="micon">{modal.icon}</div>
              <div className="mtitle">{modal.title}</div>
              <div className="mtext">{modal.body}</div>
              <div className="mbtns">
                {modal.btns.map((b, i) => (
                  <button key={i} className={`btn ${b.c}`} onClick={b.fn}>{b.l}</button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default App;
