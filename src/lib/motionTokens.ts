/**
 * Site-wide motion language. One vocabulary, used by every new
 * animated component so the whole site moves the same way.
 *
 * Rules enforced by convention:
 * - animate only transform and opacity
 * - entrances run once (viewport: { once: true })
 * - max two infinite animations per viewport, both gated by useInView
 */

/** Standard easing: fast start, long settle (matches FadeIn) */
export const EASE_OUT_STRONG: [number, number, number, number] = [0.23, 1, 0.32, 1];

/** Hero / large-surface easing */
export const EASE_HERO: [number, number, number, number] = [0.22, 1, 0.36, 1];

export const DUR = {
  /** tap feedback, toggles */
  instant: 0.12,
  /** hovers, chips, accordions */
  quick: 0.2,
  /** scroll reveals, card entrances */
  standard: 0.45,
  /** hero entrances, section transitions */
  slow: 0.7,
} as const;

/** Checkmarks, badges, dots */
export const SPRING_POP = { type: "spring", stiffness: 340, damping: 18 } as const;

/** Stagger between sibling cards (s) */
export const STAGGER = 0.07;

/** Shared viewport config for run-once scroll reveals */
export const VIEWPORT_ONCE = { once: true, margin: "-50px" } as const;
