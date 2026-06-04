# Mobile TargetedRoles Redesign

## Problem

On mobile (< md breakpoint), the TargetedRoles section had three compounding issues:

1. **Animation pushed below the fold** — the section header + tab row + chip nav ate so much viewport that users had to scroll to reach the animation. The animation is the primary value communicator; it should appear on first paint.
2. **Clipping and overflow** — visuals authored with `md:max-w-[...]` had no mobile width cap, causing them to stretch unpredictably inside the carousel card.
3. **Chip nav was below the carousel** — tapping a feature chip required scrolling past the animation first, defeating its purpose as a navigation aid.

## Proposed Mobile Structure

```
┌─────────────────────────────────────────────┐
│  See what FettleMed changes for you.        │  ← text-2xl on mobile (was text-3xl)
│  Select your role.                          │
│  [Patients] [Doctors] [Clinics]             │  ← role tab row (unchanged)
├─────────────────────────────────────────────┤
│  [Records] [Consent] [Tracking]             │  ← chip nav ABOVE carousel
├─────────────────────────────────────────────┤
│  ╭─── card (100vw snap item) ─────────────╮ │
│  │  ┌──────────────────────────────────┐  │ │
│  │  │   ANIMATION VIEWPORT             │  │ │  ← min-h-[260px], overflow-hidden
│  │  │   centered, fully visible        │  │ │     all animations fit, no clipping
│  │  └──────────────────────────────────┘  │ │
│  │  [icon]  Heading                        │ │  ← text below animation (by design)
│  │  • bullet                               │ │
│  │  • bullet                               │ │
│  │  • bullet                               │ │
│  ╰─────────────────────────────────────────╯ │
│              ●━ ○ ○   dot pager              │  ← tappable, tracks swipe position
│   [ CTA: See full Patient experience → ]     │
└─────────────────────────────────────────────┘
```

Target: on a 375×667 phone, the header + tabs + chip nav + full animation viewport are visible without scrolling.

## Animations: functionality, not decoration

Every animation directly demonstrates the feature the card describes — they are preserved exactly as authored:

| Card | Animation demonstrates |
|---|---|
| Patient · Health Records | Records arriving from different sources, stacking into one unified view |
| Patient · Consent Control | Doctor requests access → patient approves → shield confirms grant |
| Patient · Health Tracking | Live BP reading, medication reminder pulse, dependent's upcoming checkup |
| Doctor · Full History | Patient timeline (diagnoses, labs) drawing in — history available before the visit |
| Doctor · E-Prescriptions | EMR loads patient record → Rx written → syncs to patient app instantly |
| Doctor · Follow-up Audit | Live access log entries arriving — full audit trail for doctor and patient |
| Clinic · Patient Registration | Queue building, status cycling Waiting → Verified → Consulting |
| Clinic · Billing & Revenue | Revenue counter ticking up, weekly bar chart drawing |
| Clinic · Lab & Diagnostics | Order → Processing → Ready pipeline with result delivered to patient + doctor |

## Changes made

### `TargetedRoles.tsx` — mobile branch only

| Change | Before | After |
|---|---|---|
| Section vertical padding | `py-12 md:py-16` | `py-8 md:py-16` |
| Section heading size | `text-3xl md:text-4xl` | `text-2xl md:text-4xl` |
| Header bottom margin | `mb-5` | `mb-3 md:mb-5` |
| Chip nav position | Below carousel | Above carousel |
| Animation viewport | `py-6 overflow-hidden` (no height floor) | `min-h-[260px] overflow-hidden p-4` |
| Card text spacing | `p-5 space-y-2.5 text-base` | `p-4 space-y-2 text-sm` |
| Dot pager | Absent | 3 dots below carousel, tracks `activeCardIndex`, tappable |

### Visual sub-components — mobile width caps

All visuals that previously used `md:max-w-[...]` (desktop-only cap) now use `max-w-[...]` (effective on all breakpoints). This prevents visuals from stretching to full card width on narrow phones while remaining visually identical on desktop (the values are unchanged, just always active):

- `HealthRecordsVisual` → `max-w-[260px]`
- `ConsentVisual` → `max-w-[256px]`
- `HealthTrackingVisual` → `max-w-[240px]`
- `FullHistoryVisual` → `max-w-[280px]`
- `AuditTrailVisual` → `max-w-[260px]`
- `PatientRegistrationVisual` → `max-w-[260px]`
- `BillingRevenueVisual` → `max-w-[240px]`
- `LabDiagnosticsVisual` → `max-w-[270px]`

### Desktop (`hidden md:flex` block)

**Zero changes.** The cross-fade layout, `min-h-[380px]` card stack, side-by-side text/visual split, and chip nav below the cards are all preserved byte-for-byte.

## Swipe ↔ chip sync

Already wired before this change via `handleCarouselScroll` → `activeCardIndex`. Chip highlight follows swipe position automatically. With chip nav now above the carousel, the active chip is immediately visible when the user swipes — no scroll required to see which card is active.
