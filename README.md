# FettleMed

Marketing and waitlist site for **FettleMed** — a consent-first health record platform connecting patients, doctors, and clinics in India.

This repository contains the public landing page only. No patient health data is stored or processed here.

## Tech Stack

- **Frontend**: React 19, TypeScript, Vite 6
- **Styling**: Tailwind CSS v4 (CSS-first `@theme`)
- **Animations**: Motion (formerly Framer Motion)
- **Icons**: Lucide React
- **Router**: React Router v7

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server (localhost:3000)
npm run dev

# Production build
npm run build

# Type check
npm run typecheck
```

## Environment Variables

Copy `.env.example` to `.env`:

```bash
cp .env.example .env
```

Currently only Google Analytics is configurable via env. Analytics loads only after cookie consent is accepted.

## Legal Entity

**NamNalam Health Tech Private Limited**
CIN: U62013TN2026PTC191755
INNOV8 SKCL Tech Square, Guindy, Chennai – 600032, Tamil Nadu, India

## Contact

- General: hello@fettlemed.com
- Privacy / Data: privacy@fettlemed.com

## License

Copyright © 2026 NamNalam Health Tech Private Limited. All rights reserved.
This project is proprietary and confidential. Unauthorised copying, distribution, or use is strictly prohibited.
