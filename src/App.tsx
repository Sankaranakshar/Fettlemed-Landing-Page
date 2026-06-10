import React, { Suspense } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { MotionConfig } from "motion/react";
import { Layout } from "@/components/common/Layout";
import { HelmetProvider } from "react-helmet-async";
import { AnimatedRoutes } from "./AnimatedRoutes";
import { ErrorBoundary } from "@/components/common/ErrorBoundary/ErrorBoundary";
import { WaitlistProvider } from "@/contexts/WaitlistContext";

const PageLoader = () => (
  <div className="flex h-[80vh] w-full items-center justify-center">
    <div className="flex flex-row gap-2 justify-center items-center">
      <div className="w-2.5 h-2.5 rounded-full bg-accent-400 motion-safe:animate-bounce [animation-delay:.7s]" />
      <div className="w-2.5 h-2.5 rounded-full bg-accent-500 motion-safe:animate-bounce [animation-delay:.3s]" />
      <div className="w-2.5 h-2.5 rounded-full bg-accent-600 motion-safe:animate-bounce [animation-delay:.7s]" />
    </div>
  </div>
);

export default function App() {
  return (
    <HelmetProvider>
      {/* reducedMotion="user" makes every Motion animation respect prefers-reduced-motion */}
      <MotionConfig reducedMotion="user">
        <Router>
          <WaitlistProvider>
            <Layout>
              <ErrorBoundary>
                <Suspense fallback={<PageLoader />}>
                  <AnimatedRoutes />
                </Suspense>
              </ErrorBoundary>
            </Layout>
          </WaitlistProvider>
        </Router>
      </MotionConfig>
    </HelmetProvider>
  );
}
