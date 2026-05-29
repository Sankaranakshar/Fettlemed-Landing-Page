export const ANALYTICS = {
  gaTrackingId: import.meta.env.VITE_GA_TRACKING_ID || '',
  events: {
    hero_cta_click: 'hero_cta_click',
    demo_request: 'demo_request',
    waitlist_submit: 'waitlist_submit',
  },
} as const;
