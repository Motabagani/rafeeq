# رفيق · Rafeeq

**A bilingual (Arabic / English, RTL-aware) concept simulator of the Saudi scholarship "boarding journey."**

Rafeeq walks an applicant through the full arc of going abroad on a government scholarship — preparation → academic placement → visa & travel → arrival — as a single, polished, self-contained web app. It's a design concept: everything runs in the browser, no server, no real data.

**Live demo:** https://www.motabagani.com/en/rafeeq (or `/ar/rafeeq` for Arabic)

> **Disclaimer:** Independent design concept — not affiliated with the Ministry of Education or any cultural mission. No real data is collected or stored; all records live only in your own browser.

## Highlights

- **Arabic-first, fully bilingual** — every string is keyed in one dictionary (`i18n/strings.js`); the whole UI mirrors between RTL/LTR using CSS logical properties, and numbers render in Arabic-Indic digits in Arabic.
- **Multi-phase journey** — preparation, academic, visa/travel, and arrival phases, each its own deep-linkable page with working browser back/forward.
- **Realistic flows** — a mock Nafath-style sign-in, document uploads, requests/tickets with statuses, generated PDFs (via `jspdf`), profile, and a files vault.
- **Local persistence** — records are stored in the browser (IndexedDB) behind a small storage adapter; a session token and theme/language preferences live in `localStorage`.
- **Light/dark themes** and a mobile-aware chrome.

## Run it locally

```bash
npm install
npm run dev
```

Then open the printed local URL. To try the flow, sign in with any 10-digit ID (demo ID `1102345678`, password `demo1234`), or use the Nafath / create-account paths.

```bash
npm run build     # production build
npm run preview   # preview the build
```

## Tech

React 19 + Vite, CSS-in-JS (no UI framework), IndexedDB for persistence, `jspdf` for document generation. No backend.

## Project shape

```
src/
  main.jsx            # standalone entry — mounts <RafeeqApp/>
  lib/router.js       # tiny History-API navigation helper
  rafeeq/
    App.jsx           # router (phase pages), intro, providers
    RafeeqContext.jsx # app state, storage wiring, i18n/theme
    pages/            # one file per screen (login, home, phases, files, requests, profile)
    phases/           # step definitions for each journey phase
    data/             # domain data (documents, countries, airports, banks, semester…)
    ui/               # small presentational atoms (DateField, Combo, Icon, drawings…)
    i18n/             # keyed string dictionary + t() hook
    lib/              # dates, money, passport, pdf, refs, mail helpers
    storage/          # IndexedDB adapter
    styles/           # CSS-in-JS
```

This repository is the standalone extraction of Rafeeq, which is also embedded inside the [motabagani.com](https://www.motabagani.com) portfolio.

© Hashim Motabagani.
