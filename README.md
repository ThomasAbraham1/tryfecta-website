# Tryfecta Management — Website

> **Company-Owned. Company-Managed. Fully Accountable.**

Premium Integrated Corporate Services BPO website built with **React + Vite + Tailwind CSS**.

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
tryfecta-app/
├── public/
│   └── images/         # Template assets (shapes, icons from Gratech template)
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Hero.jsx        # Auto-sliding banner with background images
│   │   ├── About.jsx       # Split-image layout with counter strip
│   │   ├── Services.jsx    # 7 BPO service pillars with photo cards
│   │   ├── WhyUs.jsx       # The Integrated Advantage section
│   │   ├── CTA.jsx
│   │   ├── Contact.jsx     # Contact form with service selector
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── tailwind.config.js
└── vite.config.js
```

## 🎨 Tech Stack

- **Vite** — build tooling & dev server
- **React 19** — component framework
- **Tailwind CSS v3** — utility-first styling
- **Font Awesome 6** — icons (CDN)
- **Google Fonts** — Inter typeface

## 🌐 Deployment

This project is compatible with:
- **Vercel** — connect repo, auto-deploys on push
- **Netlify** — drag & drop `dist/` folder or connect repo
- **GitHub Pages** — using `vite-plugin-gh-pages`

## ✏️ Customization

| What to change | Where |
|---|---|
| Colors & fonts | `tailwind.config.js` |
| Logo | `Header.jsx` |
| Hero content | `Hero.jsx` |
| Contact info | `Header.jsx`, `Contact.jsx`, `Footer.jsx` |
| Services copy | `Services.jsx` |

## 📄 License

Based on the **Gratech HTML Template** by [Gramentheme](https://themeforest.net/user/gramentheme) (Envato Elements).
