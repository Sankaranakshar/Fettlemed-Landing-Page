/**
 * Server-side render entry point — used only during the prerender build step.
 *
 * Key differences from the client entry (App.tsx):
 *  - StaticRouter instead of BrowserRouter (no window.location needed)
 *  - All pages are statically imported — React.lazy + Suspense doesn't work
 *    with renderToString because suspended components render as fallbacks,
 *    which would bake the loading spinner into the HTML instead of content.
 *  - AnimatePresence / motion wrappers are omitted — they add no SEO value
 *    and can produce hydration mismatches.
 */
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter, Routes, Route, Navigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import { Layout } from '@/components/common/Layout';
import { WaitlistProvider } from '@/contexts/WaitlistContext';

// Static imports — every page must be imported synchronously here
import Home from '@/pages/Home';
import PatientApp from '@/pages/PatientApp';
import DoctorPortal from '@/pages/DoctorPortal';
import ClinicManagement from '@/pages/ClinicManagement';
import About from '@/pages/About';
import Security from '@/pages/Security';
import Waitlist from '@/pages/Waitlist';
import TermsOfService from '@/pages/TermsOfService';
import PrivacyPolicy from '@/pages/PrivacyPolicy';
import NotFound from '@/pages/NotFound';

export function render(url: string) {
  const helmetContext: Record<string, unknown> = {};

  const html = renderToString(
    <HelmetProvider context={helmetContext}>
      <StaticRouter location={url}>
        <WaitlistProvider>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/patient-app" element={<PatientApp />} />
              <Route path="/doctor-portal" element={<DoctorPortal />} />
              <Route path="/clinic-management" element={<ClinicManagement />} />
              <Route path="/about" element={<About />} />
              <Route path="/security" element={<Security />} />
              <Route path="/waitlist" element={<Waitlist />} />
              <Route path="/terms-of-service" element={<TermsOfService />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/home" element={<Navigate to="/" replace />} />
              <Route path="/terms" element={<Navigate to="/terms-of-service" replace />} />
              <Route path="/privacy" element={<Navigate to="/privacy-policy" replace />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </WaitlistProvider>
      </StaticRouter>
    </HelmetProvider>
  );

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { helmet } = helmetContext as any;
  return { html, helmet };
}
