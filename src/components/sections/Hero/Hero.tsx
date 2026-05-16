import React, { useState } from 'react';
import { Lock, ShieldCheck } from "lucide-react";
import { FadeIn } from "@/components/common/FadeIn";
import { Button } from "@/components/common/Button";
import { HomeFlowMockup } from "@/components/sections/Mockups";
import { WaitlistModal } from "@/components/common/WaitlistModal";

export const Hero = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section className="relative px-6 pt-20 pb-24 md:pt-32 md:pb-40 overflow-hidden flex items-center bg-surface-50 min-h-[90vh]">
      <WaitlistModal open={modalOpen} onClose={() => setModalOpen(false)} />
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-8">
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <FadeIn noYOffset eager>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.08] tracking-tight mb-8 text-pine-950 drop-shadow-sm">
                Own Your Health Records. <span className="text-pine-700/80">Connect Your Care Network.</span>
              </h1>
              <p className="text-lg md:text-xl text-stone-500 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium text-balance">
                Fettlemed connects patients, doctors, and clinics on one unified, secure platform.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center lg:justify-start flex-wrap mb-10">
                <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-bold text-stone-600 bg-surface-50 px-5 py-3 rounded-2xl border border-stone-200 shadow-sm w-full sm:w-auto justify-center">
                   <span className="flex items-center gap-1.5"><Lock className="w-4 h-4 text-pine-600"/> Secure & Private</span>
                   <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-pine-600"/> You own your records</span>
                   <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-pine-600"/> No data selling</span>
                </div>
              </div>

              <div className="flex flex-col items-center lg:items-start gap-4 justify-center lg:justify-start">
                <Button
                  variant="animated"
                  size="lg"
                  onClick={() => setModalOpen(true)}
                  className="w-full sm:w-auto h-14 px-10 text-lg bg-accent-600 hover:bg-accent-700 text-white rounded-xl font-bold shadow-lg shadow-accent-600/20"
                >
                  Join Waitlist
                </Button>
              </div>
            </FadeIn>
          </div>

          <div className="w-full lg:w-1/2">
            <FadeIn delay={0.2}>
              <HomeFlowMockup />
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};
