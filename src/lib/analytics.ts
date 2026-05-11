import { ANALYTICS } from '@/config/constants';
import type { AnalyticsEvent } from '@/types';

// Declare global gtag function for TypeScript
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

// Initialize Google Analytics
export const initAnalytics = () => {
  if (!ANALYTICS.gaTrackingId) {
    console.warn('GA Tracking ID not found');
    return;
  }

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${ANALYTICS.gaTrackingId}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  function gtag(...args: any[]) {
    window.dataLayer.push(args);
  }
  window.gtag = gtag;

  gtag('js', new Date());
  gtag('config', ANALYTICS.gaTrackingId, {
    send_page_view: false, // We'll handle this manually
  });
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

// Track page views
export const trackPageView = (path: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', ANALYTICS.gaTrackingId, {
      page_path: path,
    });
  }
};
