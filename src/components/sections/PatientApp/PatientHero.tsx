import React from 'react';
import { Button } from "@/components/common/Button";
import { FadeIn } from "@/components/common/FadeIn";
import { PatientMobileMockup } from "@/components/sections/Mockups";
import { useWaitlist } from "@/contexts/WaitlistContext";

export function PatientHero() {
  const { openWaitlist } = useWaitlist();

  return (
    <section className="relative pt-12 pb-10 md:pt-14 md:pb-12 border-b border-stone-100 bg-surface-50 overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-10">
          {/* Text column */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <FadeIn eager>
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-pine-200 bg-pine-50 shadow-sm text-xs font-medium text-pine-700 uppercase tracking-widest mb-5">
                For Patients &amp; Families
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-pine-900 leading-[1.05] mb-4 tracking-tight text-balance">
                Every prescription. Every result. <span className="text-pine-600">One place.</span>
              </h1>
              <p className="text-lg md:text-xl text-dim mb-6 leading-relaxed max-w-2xl text-balance">
                Every record in one place. You decide who sees it. Take it back anytime.
              </p>
              <div className="flex flex-col items-center lg:items-start gap-3">
                <Button
                  variant="animated"
                  size="lg"
                  onClick={() => openWaitlist('Patients & Caregivers')}
                  className="bg-pine-900 hover:bg-pine-800 text-white h-12 px-10 text-base rounded-xl font-medium shadow-lg focus-visible:ring-2 focus-visible:ring-pine-600 focus-visible:ring-offset-2"
                >
                  Join the Waitlist
                </Button>
                <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-xl bg-amber-50 border border-amber-200 text-amber-800 text-sm font-medium">
                  <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse flex-shrink-0" />
                  Coming soon. We'll reach out when your spot opens.
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Mockup column */}
          <div className="flex w-full lg:w-1/2 justify-center mt-6 lg:mt-0">
            <FadeIn delay={0.2}>
              <PatientMobileMockup />
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
