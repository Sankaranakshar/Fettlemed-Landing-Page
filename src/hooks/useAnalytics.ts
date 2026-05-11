import { useCallback } from 'react';
import { trackEvent as gaTrackEvent } from '@/lib/analytics';
import type { AnalyticsEvent } from '@/types';

export const useAnalytics = () => {
  const trackEvent = useCallback((event: AnalyticsEvent) => {
    gaTrackEvent(event);
  }, []);

  const trackPageView = useCallback((path: string) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', import.meta.env.VITE_GA_TRACKING_ID, {
        page_path: path,
      });
    }
  }, []);

  return {
    trackEvent,
    trackPageView,
  };
};
