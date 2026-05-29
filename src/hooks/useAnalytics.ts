import { useCallback } from 'react';
import { trackEvent as gaTrackEvent, trackPageView as gaTrackPageView } from '@/lib/analytics';
import type { AnalyticsEvent } from '@/types';

export const useAnalytics = () => {
  const trackEvent = useCallback((event: AnalyticsEvent) => {
    gaTrackEvent(event);
  }, []);

  const trackPageView = useCallback((path: string) => {
    gaTrackPageView(path);
  }, []);

  return {
    trackEvent,
    trackPageView,
  };
};
