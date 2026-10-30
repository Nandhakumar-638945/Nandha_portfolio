# Nandha Kumar - Portfolio Website

A fast, responsive, and lightweight personal portfolio with an interactive terminal and dark mode toggle.

## Project Structure
```
portfolio/
├── index.html        # Entry point and HTML markup
├── style.css         # Styling, themes, responsive layout, animations
├── script.js         # Theme toggle, interactive terminal, copy buttons
└── README.md         # Deployment & hosting guide
```

## How to Host / Deploy

### Option 1: GitHub Pages
1. Create a repository on GitHub (e.g. `nandhakumar-portfolio`).
2. Push all files inside this folder to the `main` branch.
3. In repository **Settings** -> **Pages**, select **Branch: main** and folder **/ (root)**.
4. Click **Save**. Your site will be live at `https://<username>.github.io/<repo-name>/`.

### Option 2: Netlify / Vercel
1. Drag and drop this folder directly into the [Netlify Drop](https://app.netlify.com/drop) or deploy via [Vercel CLI](https://vercel.com).
2. It will build and serve instantly without any build steps required.

### Option 3: Local Testing
Simply double-click `index.html` or run:
```bash
python3 -m http.server 8000
```
Open `http://localhost:8000` in your web browser.
