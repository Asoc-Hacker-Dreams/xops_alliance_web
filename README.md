# X-Ops Alliance Web

Landing page and initial marketing kit for **X-Ops Alliance**.

> Independent communities. Shared impact.

X-Ops Alliance is a neutral coordination layer for technical communities, initiatives, conferences and optional ecosystem infrastructure. It connects the ecosystem without absorbing identities or centralising power.

## Repository structure

```text
.
├── index.html
├── styles.css
├── script.js
├── assets/
│   ├── community-hackbarcelona.svg
│   ├── community-hackerdreams.svg
│   ├── community-valkyrias.svg
│   ├── favicon.svg
│   ├── logo-mark.svg
│   └── xops-alliance-logo.svg
├── docs/
│   ├── brand-guidelines.md
│   ├── founding-text.md
│   ├── governance-principles.md
│   └── marketing-kit.md
├── .github/
│   └── workflows/
│       └── pages.yml
├── .nojekyll
├── robots.txt
├── vercel.json
└── README.md
```

## Current scope

This version includes:

- Bilingual landing page: English and Spanish.
- Static front-end with no build step.
- Member communities section: HackBarcelona, HackerDreams and Valkyrias.
- Conference partners section with visual community-to-conference relationship mapping.
- Optional ecosystem infrastructure section: AgoraPass and Triskell Gate.
- SEO metadata and structured data for AI/search discovery.
- SVG visual assets for the alliance and initial community cards.
- Brand, governance and marketing documentation.
- Vercel configuration.
- GitHub Pages workflow retained as optional fallback.

## Local preview

Open `index.html` directly in a browser, or serve the folder locally:

```bash
python3 -m http.server 8080
```

Then visit:

```text
http://localhost:8080
```

## Deployment

Recommended deployment: **Vercel**.

Suggested Vercel settings:

```text
Framework Preset: Other
Build Command: empty
Output Directory: .
Install Command: empty
Root Directory: ./
```

## Positioning

X-Ops Alliance is not:

- A parent community.
- A vendor programme.
- A commercial funnel.
- A replacement for existing events.
- A mandatory platform layer.

It is a coordination layer designed to help communities and conferences align calendars, share visibility, exchange speakers and build a stronger national ecosystem while preserving autonomy.

## Contact

Primary contact email:

```text
comunicaciones@hsm.foundation
```

## Maintainers

Initial facilitation: HackerDreams / X-Ops ecosystem.

The alliance should be positioned as community-led and ecosystem-owned. HackerDreams may facilitate the initial infrastructure, but it should not be perceived as owning or controlling the alliance.

## Logo note

The community SVGs included here are clean vector web assets prepared for the landing page. Replace them with official final brand files whenever each community provides approved logo assets.
