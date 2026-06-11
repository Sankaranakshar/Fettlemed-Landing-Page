# FettleMed — Landing Page

Marketing and waitlist site for **FettleMed**, a consent-first health record platform connecting patients, doctors, and clinics in India.

This repository is the **public marketing site only**. No patient health data is stored or processed here.

---

## Tech Stack

| Layer | Library |
|-------|---------|
| UI | React 19 + TypeScript 5.8 |
| Bundler | Vite 6 |
| Styling | Tailwind CSS v4 (CSS-first `@theme` in `src/index.css`) |
| Animation | Motion (Framer Motion v12) |
| Router | React Router v7 (`BrowserRouter`) |
| Forms | react-hook-form + zod |
| Icons | Lucide React |

There is no Tailwind config file (`tailwind.config.js`). All design tokens live in `src/index.css` under `@theme { ... }`.

---

## Architecture

### SSR Prerender Pipeline

The site is statically prerendered at build time. `npm run build` runs three steps in sequence:

```
vite build                  → dist/assets/ (client bundle)
vite build --ssr            → dist/server/entry-server.js (SSR bundle)
node scripts/prerender.mjs  → dist/<route>/index.html for every route
```

The prerender script (`scripts/prerender.mjs`) imports `entry-server.js`, calls `render()` for each route, extracts SEO tags with `react-helmet-async`, injects them into the `<!--app-head-->` placeholder in `index.html`, and writes a fully-formed HTML file per route. The output is a pure static site — no server runtime needed.

At runtime, React hydrates the prerendered HTML on the client. Route transitions are client-side via React Router.

### Waitlist

Submissions go directly to **Google Forms** via `fetch` with `mode: "no-cors"`. There is no backend. Form field IDs are in `src/config/constants.ts` under `WAITLIST_FORM`. The response is always opaque — only genuine network failures throw. The form is submitted as `application/x-www-form-urlencoded` (`URLSearchParams`, not `FormData`).

### Analytics

Google Analytics 4 is loaded via `@gtag/js` after cookie consent is accepted. The measurement ID is set via `VITE_GA_MEASUREMENT_ID`. The GA instance is initialised with `send_page_view: false` — page views must be fired manually on each route change from `AnimatedRoutes.tsx`.

### FAQ Data

All FAQ content is centralised in `src/config/faqs.ts` and imported into page components. Do not inline FAQ data in page files.

---

## Routes

| Path | Page |
|------|------|
| `/` | Home |
| `/patient-app` | Patient App |
| `/doctor-portal` | Doctor Portal |
| `/clinic-management` | Clinic Management |
| `/security` | Security & Compliance |
| `/about` | About |
| `/waitlist` | Waitlist (standalone form page) |
| `/privacy-policy` | Privacy Policy |
| `/terms-of-service` | Terms of Service |
| `/home` | → redirects to `/` |
| `/terms` | → redirects to `/terms-of-service` |
| `/privacy` | → redirects to `/privacy-policy` |

---

## Development

```bash
npm install
npm run dev          # dev server at http://localhost:3000
npm run typecheck    # TypeScript check without emit
```

Path aliases: `@/` maps to `src/`. Configured in both `vite.config.ts` and `tsconfig.json`.

---

## Build

```bash
npm run build        # full prerender pipeline (client → SSR → static HTML)
npm run preview      # serve the dist/ output locally to verify
```

The output in `dist/` is a complete static site. Every route has its own `index.html` with SEO metadata already baked in.

---

## Environment Variables

Copy `.env.example` to `.env` before running locally:

```bash
cp .env.example .env
```

| Variable | Required | Purpose |
|----------|----------|---------|
| `VITE_GA_MEASUREMENT_ID` | No | Google Analytics 4 Measurement ID (e.g. `G-XXXXXXXXXX`). Analytics is disabled if unset. |

All `VITE_` variables are inlined at build time by Vite. Do not add server-side secrets here — they will be visible in the client bundle.

---

## Key Files

```
src/
  config/
    constants.ts        ← WAITLIST_FORM field IDs, nav config, role helpers
    faqs.ts             ← all FAQ content for every page
  lib/
    analytics.ts        ← GA4 init and trackPageView() helper
  AnimatedRoutes.tsx    ← route definitions + page transition animations
  entry-server.tsx      ← SSR render entry point (used by prerender only)
  main.tsx              ← client hydration entry point
  index.css             ← Tailwind v4 @theme tokens (all design tokens here)
scripts/
  prerender.mjs         ← static HTML generation for each route
```

---

## Legal Entity

**NamNalam Health Tech Private Limited**
CIN: U62013TN2026PTC191755
INNOV8 SKCL Tech Square, Guindy, Chennai – 600032, Tamil Nadu, India

---

## Contact

| Purpose | Address |
|---------|---------|
| General | hello@fettlemed.com |
| Data Protection / Privacy (DPDPA) | dpo@namnalamhealth.com |

---

## License

Copyright © 2026 NamNalam Health Tech Private Limited. All rights reserved.
This project is proprietary and confidential. Unauthorised copying, distribution, or use is strictly prohibited.
