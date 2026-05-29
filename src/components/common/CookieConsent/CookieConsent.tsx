import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { initAnalytics } from '@/lib/analytics';

const CONSENT_KEY = 'fettlemed_cookie_consent';

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(CONSENT_KEY);
    if (stored === 'accepted') {
      initAnalytics();
    } else if (!stored) {
      // Small delay so it doesn't flash immediately on first paint
      const t = setTimeout(() => setVisible(true), 800);
      return () => clearTimeout(t);
    }
    // 'declined' — don't load GA, don't show banner
  }, []);

  const accept = () => {
    localStorage.setItem(CONSENT_KEY, 'accepted');
    initAnalytics();
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem(CONSENT_KEY, 'declined');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      className="fixed bottom-0 left-0 right-0 z-[100] bg-pine-900 border-t border-pine-700 px-4 py-4 md:py-5 shadow-2xl"
    >
      <div className="container mx-auto max-w-6xl flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between">
        <p className="text-pine-200 text-sm font-medium leading-relaxed max-w-2xl">
          We use cookies to understand how visitors use this site and to improve your experience.
          No personal health data is collected. You can decline and still use all features.{' '}
          <Link to="/privacy-policy" className="underline hover:text-white transition-colors">
            Privacy Policy
          </Link>
        </p>
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={decline}
            className="px-4 py-2 text-sm font-medium text-pine-300 hover:text-white border border-pine-700 hover:border-pine-500 rounded-xl transition-colors"
          >
            Decline
          </button>
          <button
            onClick={accept}
            className="px-5 py-2 text-sm font-medium bg-white text-pine-900 hover:bg-pine-50 rounded-xl transition-colors shadow-sm"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
