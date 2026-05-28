import React, { useState } from 'react';
import { Lock, ShieldCheck, BadgeCheck } from "lucide-react";
import { FadeIn } from "@/components/common/FadeIn";
import { Button } from "@/components/common/Button";
import { HomeFlowMockup } from "@/components/sections/Mockups";
import { WaitlistModal } from "@/components/common/WaitlistModal";
import { FoundedByDoctors } from "@/components/sections/Hero/FoundedByDoctors";

export const Hero = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section className="relative overflow-hidden flex flex-col bg-surface-50 min-h-[calc(100vh-80px)]">
      <WaitlistModal open={modalOpen} onClose={() => setModalOpen(false)} />
      {/* Main content — grows to fill space above the strip, centered vertically */}
      <div className="flex-1 flex items-center px-6 pt-16 pb-4 md:pt-20 md:pb-4 relative z-10">
        <div className="container mx-auto max-w-7xl w-full">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-8">
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <FadeIn noYOffset eager>
              <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-medium leading-[1.08] tracking-tight mb-4 md:mb-8 text-ink drop-shadow-sm">
                Own Your Health Records. <span className="text-pine-600">Share them with any doctor, instantly.</span>
              </h1>
              <p className="text-lg md:text-xl text-dim mb-5 md:mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium text-balance">
                FettleMed connects patients, doctors, and clinics on one unified, secure platform.
              </p>

              <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-4 lg:mb-6">
                <span className="flex items-center gap-1.5 text-sm font-medium text-dim bg-white px-4 py-2 rounded-full border border-pine-100 shadow-sm"><Lock className="w-4 h-4 text-pine-600"/> Secure & Private</span>
                <span className="flex items-center gap-1.5 text-sm font-medium text-dim bg-white px-4 py-2 rounded-full border border-pine-100 shadow-sm"><ShieldCheck className="w-4 h-4 text-pine-600"/> You own your records</span>
                <span className="flex items-center gap-1.5 text-sm font-medium text-dim bg-white px-4 py-2 rounded-full border border-pine-100 shadow-sm"><BadgeCheck className="w-4 h-4 text-pine-600"/> Your data stays yours</span>
              </div>

              <div className="flex flex-col items-center lg:items-start gap-4 justify-center lg:justify-start">
                <Button
                  variant="animated"
                  size="lg"
                  onClick={() => setModalOpen(true)}
                  className="w-full sm:w-auto h-14 px-10 text-lg bg-pine-900 hover:bg-pine-800 text-white rounded-xl font-medium shadow-lg focus-visible:ring-2 focus-visible:ring-pine-600 focus-visible:ring-offset-2"
                >
                  Join the Waitlist
                </Button>
              </div>
            </FadeIn>
          </div>

          <div className="w-full lg:w-1/2 hidden lg:block">
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
