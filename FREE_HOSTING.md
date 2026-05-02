# 💸 Truly Free Hosting Guide (No Credit Card Required)

Vercel and Netlify are free for the **Frontend**, but they don't support the **Backend** (WebSockets) for free. Here is the best way to host Ouroboros 100% free without a credit card.

---

## 1. The Strategy
We will split the app into two parts:
- **Frontend (Client):** Hosted on **Netlify** (Free, fast, no "sleeping").
- **Backend (Server):** Hosted on **Render** (Free, supports WebSockets).

---

## 2. Deploy the Backend (Server) first
Render has a free tier that supports Node.js servers with WebSockets.

1.  Go to [Render.com](https://render.com/) and sign up with your GitHub.
2.  Click **New +** > **Web Service**.
3.  Connect your `Ouroboros` GitHub repository.
4.  **Configure the settings:**
    - **Name:** `ouroboros-server`
    - **Environment:** `Node`
    - **Root Directory:** `server`
    - **Build Command:** `npm install`
    - **Start Command:** `node index.js`
    - **Instance Type:** Select **Free** ($0/month).
5.  Click **Deploy Web Service**.
6.  **Wait for it to finish.** Once done, you will see a URL at the top like `https://ouroboros-server.onrender.com`. **Copy this URL.**

---

## 3. Deploy the Frontend (Client)
Netlify is perfect for the frontend and is extremely easy to use for free.

1.  Go to [Netlify.com](https://www.netlify.com/) and sign up with GitHub.
2.  Click **Add new site** > **Import from an existing project**.
3.  Select your `Ouroboros` repository.
4.  **Configure the settings:**
    - **Base directory:** `client`
    - **Build command:** `npm run build`
    - **Publish directory:** `client/dist`
5.  **Add the Environment Variable (CRITICAL):**
    - Click **Environment variables** (or scroll down to variables).
    - Add a new variable:
        - **Key:** `VITE_SOCKET_URL`
        - **Value:** (Paste your Render URL here, e.g., `https://ouroboros-server.onrender.com`)
6.  Click **Deploy site**.

---

## ❓ Why did Vercel/Netlify ask for money?
- **Vercel:** Sometimes asks for a credit card for "Hobby" users in certain countries to prevent spam. If you don't have a card, use **Netlify** or **Render Static Site**.
- **Netlify:** If you accidentally selected "Pro" or "Team" during signup, it will ask for money. Make sure you are on the **Starter** plan.
- **Serverless Limits:** If you tried to deploy the *Server* to Vercel/Netlify, it might have failed because they only support "Serverless Functions" which cannot handle the real-time multiplayer logic of Ouroboros.

---

## ⚡ Important Note on Render Free Tier
Render's free tier "goes to sleep" after 15 minutes of no activity. 
- When someone visits your site, the first time might take **30-60 seconds** for the backend to "wake up."
- This is normal for free hosting! Once it's awake, it works perfectly.

---

## 🚀 Alternative: Koyeb (No Sleep)
If you want a backend that **never sleeps** for free, try [Koyeb](https://www.koyeb.com/).
1. Sign up for the **Nano** instance ($0).
2. It works just like Render but stays online 24/7.
