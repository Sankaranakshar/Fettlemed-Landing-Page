import React from 'react';
import { Lock, ShieldCheck, BadgeCheck } from "lucide-react";
import { FadeIn } from "@/components/common/FadeIn";
import { Button } from "@/components/common/Button";
import { HomeFlowMockup } from "@/components/sections/Mockups";
import { FoundedByDoctors } from "@/components/sections/Hero/FoundedByDoctors";
import { useWaitlist } from "@/contexts/WaitlistContext";

export const Hero = () => {
  const { openWaitlist } = useWaitlist();

  return (
    <section className="relative overflow-hidden flex flex-col bg-surface-50 h-[calc(100vh-80px)] min-h-[600px]">
      {/* Main content — grows to fill space above the strip, centered vertically */}
      <div className="flex-1 min-h-0 flex items-center px-6 pt-12 pb-4 md:pt-14 lg:pt-6 md:pb-4 relative z-10">
        <div className="container mx-auto max-w-7xl w-full">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-8 lg:gap-10">
          <div className="w-full md:w-1/2 text-center md:text-left">
            <FadeIn noYOffset eager>
              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-medium leading-[1.08] tracking-tight mb-4 md:mb-5 lg:mb-4 text-ink drop-shadow-sm">
                Own Your Health Records. <span className="text-pine-600">Share them with any FettleMed doctor, instantly.</span>
              </h1>
              <p className="text-lg md:text-xl text-dim mb-5 md:mb-5 lg:mb-4 max-w-xl mx-auto md:mx-0 leading-relaxed font-medium text-balance">
                FettleMed connects patients, doctors, and clinics on one unified, secure platform.
              </p>

              <div className="flex flex-wrap gap-2 justify-center md:justify-start mb-4 md:mb-5 lg:mb-4">
                <span className="flex items-center gap-1.5 text-xs lg:text-sm font-medium text-dim bg-white px-3 py-1.5 lg:px-4 lg:py-2 rounded-full border border-pine-100 shadow-sm"><ShieldCheck className="w-3.5 h-3.5 lg:w-4 lg:h-4 text-pine-600"/> Consent-first access</span>
                <span className="flex items-center gap-1.5 text-xs lg:text-sm font-medium text-dim bg-white px-3 py-1.5 lg:px-4 lg:py-2 rounded-full border border-pine-100 shadow-sm"><Lock className="w-3.5 h-3.5 lg:w-4 lg:h-4 text-pine-600"/> Encrypted at rest and in transit</span>
                <span className="flex items-center gap-1.5 text-xs lg:text-sm font-medium text-dim bg-white px-3 py-1.5 lg:px-4 lg:py-2 rounded-full border border-pine-100 shadow-sm"><BadgeCheck className="w-3.5 h-3.5 lg:w-4 lg:h-4 text-pine-600"/> ABDM-aligned</span>
              </div>

              <div className="flex flex-col items-center md:items-start gap-4 justify-center md:justify-start">
                <Button
                  variant="animated"
                  size="lg"
                  onClick={() => openWaitlist()}
                  className="w-full sm:w-auto h-14 px-10 text-lg bg-pine-900 hover:bg-pine-800 text-white rounded-xl font-medium shadow-lg focus-visible:ring-2 focus-visible:ring-pine-600 focus-visible:ring-offset-2"
                >
                  Join the Waitlist
                </Button>
              </div>
            </FadeIn>
          </div>

          <div className="w-full md:w-1/2 hidden md:block">
            <FadeIn delay={0.2}>
              <HomeFlowMockup />
            </FadeIn>
          </div>
        </div>
        </div>
      </div>
      {/* FoundedByDoctors pinned to bottom of the hero viewport */}
      <FoundedByDoctors />
    </section>
  );
};
