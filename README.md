# Project Evan Website

Public-facing website for **Project Evan CIC** — a Community Interest Company building social planning technology.

## Pages

| File | Purpose |
|------|---------|
| `index.html` | Splash / landing page with iOS & Android download links |
| `privacy.html` | Privacy Policy (UK GDPR compliant) |
| `terms.html` | Terms of Use |
| `whitepaper.html` | Technical Security Whitepaper (E2EE framework) |
| `commitment.html` | Social Responsibility & CIC Commitment |

## Structure

```
project evan-website/
├── index.html
├── business.html
├── privacy.html
├── terms.html
├── whitepaper.html
├── commitment.html
├── css/
│   └── styles.css        # Shared responsive stylesheet (Project Evan brand tokens)
├── js/
│   └── main.js           # Theme + shared partial loader + nav interactions
├── partials/
│   ├── navbar.html       # Reusable navbar used by all pages
│   └── footer.html       # Reusable footer used by all pages
└── assets/
    └── favicon.svg
```

## Development

Use Vite for local development and preview:

```bash
# install dependencies
npm install

# run local dev server
npm run dev

# production build
npm run build

# preview built output
npm run preview
```

Default Vite dev URL is shown in terminal (typically http://localhost:5173).
The production preview is served with the GitHub Pages project-site base path at `http://localhost:4173/evan-website/`.

## Deployment

This site is designed to be hosted on any static hosting service (GitHub Pages, Vercel, Netlify, Cloudflare Pages).

### GitHub Pages (quick deploy)

1. Push to the `main` branch of this repo.
2. Go to **Settings → Pages** → Source: `main` branch, root folder `/`.
3. Site will be live at `https://<org>.github.io/evan-website/`.

## Store Links

Download links in `index.html` currently point to `#` — update with live App Store and Google Play URLs once the apps are published.

## Branding

Design tokens sourced from Figma (updated 2026-04-21):
- Primary green: `#216A4D`
- Primary container: `#A9F2CC`
- Inverse surface: `#2C322E`
- Typeface: DM Sans (Google Fonts)

## Legal

All content © 2026 Project Evan CIC. Registered in England and Wales as a Community Interest Company.
