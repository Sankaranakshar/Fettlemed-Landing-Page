import React from 'react';
import { Button } from "@/components/common/Button";
import { FadeIn } from "@/components/common/FadeIn";
import { HeroTilt } from "@/components/common/HeroTilt";
import { ClinicShuffleMockup } from "@/components/sections/Mockups";
import { useWaitlist } from "@/contexts/WaitlistContext";

export function ClinicHero() {
  const { openWaitlist } = useWaitlist();

  return (
    <section className="relative pt-12 pb-10 md:pt-14 md:pb-12 border-b border-stone-100 bg-surface-50 overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Text column */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            {/* Badge + H1 render instantly: the H1 is the LCP element */}
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-pine-200 bg-pine-50 shadow-sm text-xs font-medium text-pine-700 uppercase tracking-widest mb-6">
              For Clinics
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-pine-900 leading-[1.05] mb-5 tracking-tight text-balance">
              You handle the patients. <span className="text-dim">We handle everything else.</span>
            </h1>
            <FadeIn noYOffset eager delay={0.05}>
              <p className="text-lg md:text-xl text-dim mb-8 leading-relaxed max-w-2xl text-balance">
                The front desk handles the queue. Billing closes at the end of each visit. The owner sees everything, from any device.
              </p>
              <div className="flex flex-col items-center lg:items-start gap-3">
                <Button
                  variant="animated"
                  size="lg"
                  onClick={() => openWaitlist('Clinic')}
                  className="bg-pine-900 hover:bg-pine-800 text-white h-13 px-12 text-base rounded-xl font-medium shadow-lg focus-visible:ring-2 focus-visible:ring-pine-600 focus-visible:ring-offset-2"
                >
                  Join the Clinic Pilot
                </Button>
                <p className="text-dim text-sm font-medium">Works on your existing devices. Your staff is ready on day one.</p>
                <a
                  href="#platform"
                  className="inline-flex items-center p-3 -m-3 text-pine-600 hover:text-pine-700 text-sm font-medium transition-colors mt-2"
                >
                  See what the platform handles →
                </a>
              </div>
            </FadeIn>
          </div>

          {/* Mockup column */}
          <div className="w-full lg:w-1/2 mt-6 lg:mt-0">
            <FadeIn delay={0.2}>
              <HeroTilt>
                <ClinicShuffleMockup />
              </HeroTilt>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
