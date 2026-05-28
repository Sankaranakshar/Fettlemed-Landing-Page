import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";

// Home is eagerly imported — it's the entry page and must not show a spinner
import Home from "./pages/Home";
const ClinicManagement = React.lazy(() => import("./pages/ClinicManagement"));
const DoctorPortal = React.lazy(() => import("./pages/DoctorPortal"));
const PatientApp = React.lazy(() => import("./pages/PatientApp"));
const About = React.lazy(() => import("./pages/About"));
const Security = React.lazy(() => import("./pages/Security"));
const Waitlist = React.lazy(() => import("./pages/Waitlist"));
const TermsOfService = React.lazy(() => import("./pages/TermsOfService"));
const PrivacyPolicy = React.lazy(() => import("./pages/PrivacyPolicy"));
const NotFound = React.lazy(() => import("./pages/NotFound"));

export function AnimatedRoutes() {
  const location = useLocation();

  // Prefetch the pilot pages in the background after the home page loads
  // so navigation to /doctor-portal and /clinic-management is instant
  useEffect(() => {
    const prefetch = () => {
      import("./pages/DoctorPortal");
      import("./pages/ClinicManagement");
    };
    if ("requestIdleCallback" in window) {
      const id = window.requestIdleCallback(prefetch);
      return () => window.cancelIdleCallback(id);
    } else {
      const id = setTimeout(prefetch, 2000);
      return () => clearTimeout(id);
    }
  }, []);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.1, ease: "easeOut" } }}
        transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
      >
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/clinic-management" element={<ClinicManagement />} />
          <Route path="/doctor-portal" element={<DoctorPortal />} />
          <Route path="/patient-app" element={<PatientApp />} />
          <Route path="/about" element={<About />} />
          <Route path="/security" element={<Security />} />
          <Route path="/waitlist" element={<Waitlist />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}
