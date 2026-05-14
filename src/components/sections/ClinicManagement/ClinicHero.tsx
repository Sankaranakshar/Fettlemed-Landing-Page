import React, { useState } from 'react';
import { Button } from "@/components/common/Button";
import { FadeIn } from "@/components/common/FadeIn";
import { ClinicShuffleMockup } from "@/components/sections/Mockups";
import { WaitlistModal } from "@/components/common/WaitlistModal";

export function ClinicHero() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section className="relative pt-24 pb-20 md:pt-32 md:pb-32 border-b border-stone-100 bg-surface-50 overflow-hidden">
      <WaitlistModal open={modalOpen} onClose={() => setModalOpen(false)} />
      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-12">
          {/* Text column */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <FadeIn eager>
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-pine-200 bg-pine-50 shadow-sm text-xs font-bold text-pine-700 uppercase tracking-widest mb-8">
                For Clinics
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-pine-900 leading-[1.05] mb-6 tracking-tight text-balance">
                You handle the patients. <span className="text-stone-500">We handle everything else.</span>
              </h1>
              <p className="text-xl md:text-2xl text-stone-500 mb-10 font-medium leading-relaxed max-w-2xl text-balance">
                Fettlemed handles the operations, so you can focus on excellence in healthcare.
              </p>
              <div className="flex flex-col items-center lg:items-start gap-4">
                <Button
                  variant="animated"
                  size="lg"
                  onClick={() => setModalOpen(true)}
                  className="bg-accent-600 hover:bg-accent-700 text-white h-14 px-12 text-lg rounded-xl font-bold shadow-lg shadow-accent-600/20"
                >
                  Join the clinic pilot
                </Button>
                <p className="text-stone-500 text-sm font-medium">Works for solo clinics and polyclinics. No IT team. No hardware. No long setup.</p>
              </div>
            </FadeIn>
          </div>

          {/* Mockup column */}
          <div className="w-full lg:w-1/2">
            <FadeIn delay={0.2}>
              <ClinicShuffleMockup />
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
