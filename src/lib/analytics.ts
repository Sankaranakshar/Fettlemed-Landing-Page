import { ANALYTICS, type WaitlistRole } from '@/config/constants';
import type { AnalyticsEvent } from '@/types';

// Declare global gtag function for TypeScript
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

let initialized = false;
let lastTrackedPath: string | null = null;

// Amplify serves /page/ on a direct load but the router navigates to /page,
// so strip the trailing slash to keep one row per page in GA.
const normalizePath = (path: string) => (path.length > 1 ? path.replace(/\/+$/, '') : path);

// Initialize Google Analytics (only ever called after cookie consent)
export const initAnalytics = () => {
  if (initialized) return;
  if (!ANALYTICS.gaTrackingId) {
    console.warn('GA Tracking ID not found');
    return;
  }
  initialized = true;

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${ANALYTICS.gaTrackingId}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  function gtag(...args: any[]) {
    // gtag.js expects the Arguments object, not a plain array
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer.push(arguments);
  }
  window.gtag = gtag;

  gtag('js', new Date());
  gtag('config', ANALYTICS.gaTrackingId, {
    send_page_view: false, // Page views are sent manually on route change
  });

  // The route-change effect may have fired before consent was given,
  // so record the page the visitor is on right now.
  trackPageView(window.location.pathname);
};

// Track custom events
export const trackEvent = ({ category, action, label, value }: AnalyticsEvent) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Track page views (GA4 page_view event). Deduped so consent-time and
// route-change calls for the same page don't double count.
export const trackPageView = (rawPath: string) => {
  const path = normalizePath(rawPath);
  if (typeof window === 'undefined' || !window.gtag || path === lastTrackedPath) return;
  lastTrackedPath = path;
  // Report by path: lazy-loaded pages set document.title a moment after
  // navigation, so a title captured here could still be the previous page's.
  window.gtag('event', 'page_view', {
    page_location: window.location.href,
    page_path: path,
  });
};

const ROLE_PARAM: Record<WaitlistRole, string> = {
  'Doctor': 'doctor',
  'Clinic': 'clinic',
  'Patients & Caregivers': 'patient',
};

// The site's conversion. Mark `waitlist_submit` as a key event in GA4 and
// register `role` and `form` as event-scoped custom dimensions.
export const trackWaitlistSubmit = (role: WaitlistRole | undefined, form: 'full' | 'footer') => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', ANALYTICS.events.waitlist_submit, {
      role: role ? ROLE_PARAM[role] : 'unknown',
      form,
      page_path: normalizePath(window.location.pathname),
    });
  }
};
