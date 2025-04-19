# YouTube Ad FastForward 🚀

A lightweight Chrome content script that doesn't block YouTube ads — it **fast-forwards** them.

### 📌 What It Does

When a YouTube ad starts playing, this script:
- Detects the ad using YouTube's internal `.ad-showing` class
- Boosts the playback speed to **14x**
- Automatically resets the speed back to **1x** once the ad ends

This way, the ad plays fully — just a lot faster.

---

### ⚙️ How It Works

- Uses `document.querySelector("video")` to access the video element
- Checks for `.ad-showing` class on the `<html>` or video container
- Adjusts `video.playbackRate` accordingly
- Periodically checks and also watches for DOM changes using `MutationObserver`

---

### 🧠 Why It's Different from Ad Blockers

This is **not an ad blocker**. It:
- **Doesn't block network requests**
- **Doesn't remove or hide DOM elements**
- **Doesn't interfere with YouTube's internal scripts**

Most ad blockers are detectable because they interfere with ad loading or the DOM. This script plays the ad as-is, just quickly — reducing the risk of being flagged.

---

### 🔧 How to Use It

#### Option 1: Run as a simple content script (temporary)

1. Go to `chrome://extensions`
2. Enable "Developer mode"
3. Click "Load unpacked" and select this project folder
4. Refresh YouTube and you're good to go

#### Option 2: Add it as a user script (via Tampermonkey)

- Copy the contents of `content.js` and create a new user script in Tampermonkey
- Set the match URL to `*://*.youtube.com/*`

---

### 📁 Files

- `content.js` – The main logic
- `manifest.json` – Chrome extension configuration
- `README.md` – You're reading it

---

### ⚠️ Disclaimer

This is a personal learning project intended for fun and exploration.  
It's not affiliated with or endorsed by YouTube or Google.  
Use responsibly and at your own risk.

---

### 📬 Contributions & Feedback

Open to suggestions and improvements! Feel free to open issues or PRs.

