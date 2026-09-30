# 🐍 Ouroboros Hosting Guide

This document provides instructions on how to host the Ouroboros multiplayer game. Since the project consists of a **React frontend** (Vite) and a **Node.js backend** (Socket.io), we recommend a split hosting strategy for the best performance and reliability.

## 1. Push to GitHub
I have already initialized a Git repository and made the initial commit for you. To sync it with your GitHub account:

1. Create a new **empty repository** on [GitHub](https://github.com/new) named `Ouroboros`.
2. Copy the **HTTPS URL** (e.g., `https://github.com/YOUR_USERNAME/Ouroboros.git`).
3. Run the following commands in your terminal:
   ```powershell
   git remote add origin https://github.com/YOUR_USERNAME/Ouroboros.git
   git push -u origin main
   ```

---

## 2. Host the Backend (Server)
The backend handles real-time multiplayer logic using WebSockets.

**Recommended Platform:** [Render](https://render.com/) (Web Service)

1. Sign up/Log in to Render and click **New > Web Service**.
2. Connect your GitHub repository.
3. **Configuration:**
   - **Name:** `ouroboros-server`
   - **Root Directory:** `server`
   - **Runtime:** `Node`
   - **Build Command:** `npm install`
   - **Start Command:** `node index.js`
4. **Environment Variables:**
   - Add `PORT` = `3001` (or leave as default, Render provides it).
5. Once deployed, copy your service URL (e.g., `https://ouroboros-server.onrender.com`).

---

## 3. Host the Frontend (Client)
The frontend is a Vite/React application.

**Recommended Platform:** [Vercel](https://vercel.com/) or [Render (Static Site)](https://render.com/)

### If using Netlify (Frontend Only):
1. Sign up/Log in to [Netlify](https://app.netlify.com/).
2. Click **Add new site > Import from an existing project**.
3. Connect your GitHub and select the `Ouroboros` repo.
4. **Build Settings:**
   - **Base directory:** `client`
   - **Build command:** `npm run build`
   - **Publish directory:** `client/dist`
5. Click **Deploy**.

---

## ⚠️ Important Note on Backend Hosting
Netlify is a **Serverless** platform. While it is perfect for the frontend (Client), it **cannot host the Backend (Server)** because:
1. **WebSockets:** Netlify Functions do not support the persistent connections required by Socket.io.
2. **State:** The backend uses an in-memory `Map` to store players. Serverless functions are "stateless," meaning they forget everyone as soon as the function finishes.

**Solution:** Host your **Frontend on Netlify** and your **Backend on Render** (or Railway). They work together perfectly as long as you update the connection URL in your client code.

---

## Event Day (≈1000 players)

The server has been load-tested with 1000 and 2000 simulated players (steady ~120-160 MB RAM, sub-5 ms response). To keep it that way on the day:

1. **Use a paid Render instance for the event** (Starter or above). The free tier sleeps after 15 minutes idle and only gets 0.1 CPU; 1000 players use about 0.07 CPU on a fast machine, which leaves no headroom on free. You can drop back to free afterwards.
2. **Set `ADMIN_CODE`** in the Render environment. The admin code is now checked by the server, not shipped to every browser. If it is not set, the old code still works.
3. **Wake the server 5 minutes before start**: open `https://<your-server>.onrender.com/health`. It returns player and connection counts, which is also handy to watch during the event.
4. **Press RESET ALL** on the admin dashboard before letting players in, so test runs don't linger on the board.
5. **Don't redeploy the server during the event.** Standings live in memory. If it does restart, players' browsers re-register their progress automatically on reconnect, but the time-based tiebreak restarts.
6. Deploy the client and server from the same commit (they share a new message format), and have anyone who opened the site earlier refresh.

Optional server environment variables: `BOARD_INTERVAL_MS` (leaderboard push interval, default 2000), `MAX_PLAYERS` (default 5000), `CLIENT_ORIGIN` (comma-separated list to restrict CORS to your Netlify domain).

**Cheat strikes (CHEAT column on the admin board).** A strike is added when a player pastes into the answer box (including keyboard clipboard chips), tries to copy the riddle, or leaves the game for more than 1.5s mid-riddle, which is what Circle to Search, switching to ChatGPT/Google or another window looks like. A web page cannot block Circle to Search, screenshots or a second phone outright, so strikes are evidence for you to act on with DQ. Pulling down the notification shade also counts as leaving, so treat a single strike as a warning and a pile of them as a cheater.

If the admin mistypes the code 5 times, that tab stops accepting admin logins; reload the page to try again.

---

## 4. Local Testing
To run both locally for testing:
1. **Terminal 1 (Server):**
   ```powershell
   cd server
   npm install
   node index.js
   ```
2. **Terminal 2 (Client):**
   ```powershell
   cd client
   npm install
   npm run dev
   ```

---

## ⚡ Deployment Checklist
- [ ] Backend deployed and reachable.
- [ ] Frontend updated with the Backend's production URL.
- [ ] CORS settings in `server/index.js` updated to include your frontend domain (for security).
