# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

## [Unreleased]

### Added
- FAQ content centralised into `src/config/faqs.ts` — removed inline arrays from all page components
- `FAQSection` type exported from FAQ component index
- `aria-controls` on FAQ accordion buttons; answer panels get `id`, `role="region"`, `aria-labelledby`, and `visible/invisible` transition

### Changed
- Waitlist form submission switched from `FormData` to `URLSearchParams` to satisfy Google Forms' `application/x-www-form-urlencoded` requirement
- Role values mapped to match Google Form radio options exactly: `"Patients & Caregivers"` → `"Patient"`, `"Clinic"` → `"Clinic / Practice Owner"`
- Patient App "How It Works" rewritten: removed scroll-driven sticky phone logic; each step is now a static row with phone animation playing on viewport entry
- Data residency copy corrected across FAQ and Privacy Policy to remove absolute "India only" claim

## [0.2.0] - 2026-05-12

### Added
- Animated mockup components for Home, Doctor, Clinic, and Patient sections
- Shared `WaitlistModal` + `WaitlistForm` with role toggle and honeypot spam guard
- Security page with compliance FAQ
- Cookie consent banner with GA4 gating

### Changed
- All waitlist CTAs open the modal instead of navigating to `/waitlist`
- Copy revisions across all pages: role-specific language and positioning alignment
- About page philosophy section rewritten; founder bios expanded

## [0.1.0] - 2026-04-26

### Added
- Role-based content sections for Patient, Doctor, and Clinic audiences
- Motion animations on scroll-triggered section entry

## [0.0.0] - 2026-04-26

### Added
- Initial project scaffold: React 19, TypeScript, Vite 6, Tailwind CSS v4
- Core landing page: Hero, Problem, Features, Trust sections
- Navigation, layout, and SEO component foundation
