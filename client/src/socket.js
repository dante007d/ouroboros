import { io } from 'socket.io-client';

export const socket = io(import.meta.env.VITE_SOCKET_URL || 'http://localhost:3001', {
  // Straight to WebSocket instead of a long-polling warm-up for every player,
  // falling back to polling on networks that block WebSockets.
  transports: ['websocket', 'polling'],
  tryAllTransports: true,
  // Spread reconnects out so a room full of phones doesn't stampede a
  // restarting server all in the same second.
  reconnectionDelay: 1000,
  reconnectionDelayMax: 10000,
  randomizationFactor: 0.5
});

export const getSessionId = () => {
  let id = sessionStorage.getItem('ouro_session_id');
  if (!id) {
    id = crypto.randomUUID();
    sessionStorage.setItem('ouro_session_id', id);
  }
  return id;
};
