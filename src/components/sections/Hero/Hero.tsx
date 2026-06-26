import React from 'react';
import { FadeIn } from "@/components/common/FadeIn";
import { Button } from "@/components/common/Button";
import { HeroTilt } from "@/components/common/HeroTilt";
import { HomeFlowMockup } from "@/components/sections/Mockups";
import { FoundedByDoctors } from "@/components/sections/Hero/FoundedByDoctors";
import { useWaitlist } from "@/contexts/WaitlistContext";

export const Hero = () => {
  const { openWaitlist } = useWaitlist();

  return (
    <section className="relative overflow-hidden flex flex-col bg-surface-50 md:h-[calc(100vh-80px)] md:min-h-[600px]">
      {/* Mesh gradient backdrop: two slow-drifting radial layers, static under reduced motion */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="mesh-layer-a absolute -top-1/4 -right-[10%] w-[70%] h-[80%] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(31,122,92,0.10), transparent 65%)' }}
        />
        <div
          className="mesh-layer-b absolute -bottom-1/3 -left-[12%] w-[60%] h-[80%] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(122,174,154,0.12), transparent 65%)' }}
        />
      </div>

      {/* Main content - grows to fill space above the strip, centered vertically */}
      <div className="flex-1 min-h-0 flex md:items-center px-6 pt-12 pb-4 md:pt-14 lg:pt-6 md:pb-4 relative z-10">
        <div className="container mx-auto max-w-7xl w-full">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-8 lg:gap-10">
          <div className="w-full md:w-1/2 text-center md:text-left">
            {/* H1 renders instantly: it is the LCP element and never starts at opacity 0 */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-medium leading-[1.08] tracking-tight mb-4 md:mb-5 lg:mb-4 text-ink drop-shadow-sm">
              The full history, ready <span className="text-pine-600">before the patient says a word.</span>
            </h1>
            <FadeIn noYOffset eager delay={0.05}>
              <p className="text-lg md:text-xl text-dim mb-5 md:mb-5 lg:mb-4 max-w-xl mx-auto md:mx-0 leading-relaxed text-balance">
                One record that follows the patient: every prescription, lab, and visit, shared only with consent.
              </p>

<div className="flex flex-col items-center md:items-start gap-4 justify-center md:justify-start">
                <Button
                  variant="animated"
                  size="lg"
                  onClick={() => openWaitlist()}
                  className="w-full sm:w-auto h-14 px-10 text-lg bg-pine-900 hover:bg-pine-800 text-white rounded-xl font-medium shadow-lg focus-visible:ring-2 focus-visible:ring-pine-600 focus-visible:ring-offset-2"
                >
                  Join the Pilot
                </Button>
              </div>
            </FadeIn>
          </div>

          <div className="w-full md:w-1/2 mt-6 md:mt-0">
            <FadeIn delay={0.2}>
              <HeroTilt>
                <HomeFlowMockup />
              </HeroTilt>
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
