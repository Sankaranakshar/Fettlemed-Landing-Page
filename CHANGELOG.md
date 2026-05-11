# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [0.2.0] - 2026-05-12

### Added
- Animated mockup components for Home, Doctor, Clinic, and Patient sections.
- Shared `WaitlistModal` + `WaitlistForm` with role toggle (Individual / Doctor / Clinic) and math CAPTCHA.
- `FamilyHealth`, `OurStory`, `ClinicPricing`, and `Security` pages.
- Snap scroll scoped to Home page only.
- Breadcrumb navigation on inner pages.
- Founding member pricing section on `ClinicPricing`.

### Changed
- Restructured all hero sections to 2-column layout with inline mockups.
- All waitlist CTAs now open the modal instead of navigating to `/waitlist`.
- Patient page renamed to "For Everyone" throughout nav, badges, and SEO titles.
- Copy revisions across all pages: em-dash sweep, role-specific language, and positioning alignment.
- About page philosophy section rewritten; founder bios expanded.

## [0.1.0] - 2026-04-26

### Added
- Professional repository structure and documentation.
- Integrated `motion` for smoother UI transitions.
- Enhanced Patient, Doctor, and Clinic role-based content sections.

### Fixed
- `ReferenceError: FileCheck2 is not defined` in `TargetedRoles.tsx`.
- Resolved path alias issues in several page components.

## [0.0.0] - 2026-04-26

### Added
- Initial project scaffold with React, TypeScript, and Vite.
- Core landing page Hero, Problem, Features, and Trust sections.
- Basic navigation and layout components.
