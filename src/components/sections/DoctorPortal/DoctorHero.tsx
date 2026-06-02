import React from 'react';
import { Button } from "@/components/common/Button";
import { FadeIn } from "@/components/common/FadeIn";
import { DoctorConsultationMockup } from "@/components/sections/Mockups";
import { useWaitlist } from "@/contexts/WaitlistContext";

export function DoctorHero() {
  const { openWaitlist } = useWaitlist();

  return (
    <section className="h-[calc(100vh-80px)] min-h-[600px] flex flex-col bg-surface-50 border-b border-stone-100 overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl flex flex-col flex-1 min-h-0 justify-center py-8 md:py-10">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-12">
          {/* Text column */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <FadeIn eager>
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-pine-200 bg-pine-50 shadow-sm text-xs font-medium text-pine-700 uppercase tracking-widest mb-6">
                For Doctors
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-pine-900 leading-[1.05] mb-5 tracking-tight text-balance">
                More clinical thinking, <span className="text-dim">less paperwork.</span>
              </h1>
              <p className="text-xl text-dim mb-8 font-medium leading-relaxed max-w-2xl text-balance">
                Built for the GP seeing 40 patients a day, not for the hospital with an IT department.
              </p>
              <div className="flex flex-col items-center lg:items-start gap-3">
                <Button
                  variant="animated"
                  size="lg"
                  onClick={() => openWaitlist('Doctor')}
                  className="bg-pine-900 hover:bg-pine-800 text-white h-14 px-12 text-lg rounded-xl font-medium shadow-lg focus-visible:ring-2 focus-visible:ring-pine-600 focus-visible:ring-offset-2"
                >
                  Join the Clinical Pilot
                </Button>
                <p className="text-dim text-sm font-medium">No IT team. No specialised hardware. Setup in one session.</p>
                <a
                  href="#day-one"
                  className="inline-flex items-center p-3 -m-3 text-pine-600 hover:text-pine-700 text-sm font-medium transition-colors mt-1"
                >
                  See what changes on day one →
                </a>
              </div>
            </FadeIn>
          </div>

          {/* Mockup column */}
          <div className="w-full lg:w-1/2 hidden lg:block">
            <FadeIn delay={0.2}>
              <DoctorConsultationMockup />
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
