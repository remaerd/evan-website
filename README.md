# Frienday Website

Public-facing website for **Frienday CIC** — a Community Interest Company building social planning technology.

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
frienday-website/
├── index.html
├── privacy.html
├── terms.html
├── whitepaper.html
├── commitment.html
├── css/
│   └── styles.css        # Shared responsive stylesheet (Frienday brand tokens)
├── js/
│   └── main.js           # Nav toggle, active link, smooth scroll
└── assets/
    └── favicon.svg
```

## Development

No build step required — pure HTML/CSS/JS. Open `index.html` directly in a browser, or serve with any static server:

```bash
# Python
python3 -m http.server 8080

# Node (npx)
npx serve .
```

## Deployment

This site is designed to be hosted on any static hosting service (GitHub Pages, Vercel, Netlify, Cloudflare Pages).

### GitHub Pages (quick deploy)

1. Push to the `main` branch of this repo.
2. Go to **Settings → Pages** → Source: `main` branch, root folder `/`.
3. Site will be live at `https://<org>.github.io/frienday-website/`.

## Store Links

Download links in `index.html` currently point to `#` — update with live App Store and Google Play URLs once the apps are published.

## Branding

Design tokens sourced from Figma (updated 2026-04-19):
- Primary green: `#216A4D`
- Brand dark: `#0E3B2E`
- Accent orange: `#FF6B3D`
- Typeface: DM Sans (Google Fonts)

## Legal

All content © 2026 Frienday CIC. Registered in England and Wales as a Community Interest Company.
