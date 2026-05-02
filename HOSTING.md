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
