import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";

// Lazy load pages
const Home = React.lazy(() => import("./pages/Home"));
const ClinicManagement = React.lazy(() => import("./pages/ClinicManagement"));
const ClinicFeatures = React.lazy(() => import("./pages/ClinicFeatures"));
const ClinicPricing = React.lazy(() => import("./pages/ClinicPricing"));
const DoctorPortal = React.lazy(() => import("./pages/DoctorPortal"));
const DoctorHowItWorks = React.lazy(() => import("./pages/DoctorHowItWorks"));
const DoctorFeatures = React.lazy(() => import("./pages/DoctorFeatures"));
const PatientApp = React.lazy(() => import("./pages/PatientApp"));
const PatientHowItWorks = React.lazy(() => import("./pages/PatientHowItWorks"));
const FamilyHealth = React.lazy(() => import("./pages/FamilyHealth"));
const About = React.lazy(() => import("./pages/About"));
const OurStory = React.lazy(() => import("./pages/OurStory"));
const Security = React.lazy(() => import("./pages/Security"));
const Waitlist = React.lazy(() => import("./pages/Waitlist"));
const TermsOfService = React.lazy(() => import("./pages/TermsOfService"));
const PrivacyPolicy = React.lazy(() => import("./pages/PrivacyPolicy"));
const NotFound = React.lazy(() => import("./pages/NotFound"));

export function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/clinic-management" element={<ClinicManagement />} />
          <Route path="/clinic-management/features" element={<ClinicFeatures />} />
          <Route path="/clinic-management/pricing" element={<ClinicPricing />} />
          <Route path="/doctor-portal" element={<DoctorPortal />} />
          <Route path="/doctor-portal/how-it-works" element={<DoctorHowItWorks />} />
          <Route path="/doctor-portal/features" element={<DoctorFeatures />} />
          <Route path="/patient-app" element={<PatientApp />} />
          <Route path="/patient-app/how-it-works" element={<PatientHowItWorks />} />
          <Route path="/patient-app/family-health" element={<FamilyHealth />} />
          <Route path="/about" element={<About />} />
          <Route path="/about/our-story" element={<OurStory />} />
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
