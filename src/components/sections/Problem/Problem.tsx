import React from 'react';
import { FadeIn } from "@/components/common/FadeIn";

export const Problem = () => {
  return (
    <section id="insight" className="h-[calc(100vh-80px)] min-h-[600px] flex flex-col bg-white text-pine-900 border-y border-stone-100 overflow-hidden">
      <div className="container mx-auto px-6 max-w-5xl flex flex-col flex-1 min-h-0 py-12 md:py-16">
        <div className="grid lg:grid-cols-2 gap-8 items-stretch flex-1 min-h-0">

          <FadeIn className="flex flex-col justify-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-[1.08] mb-8">
              Two people in the same room. <span className="text-pine-600 underline decoration-pine-600/30 underline-offset-8">Neither has the full picture.</span>
            </h2>
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="w-9 h-9 rounded-full bg-pine-50 flex items-center justify-center flex-shrink-0 mt-1"><span className="text-pine-600 font-medium">1</span></div>
                <div>
                  <p className="text-xl font-medium text-ink mb-2">The Consultation Crisis</p>
                  <p className="text-lg text-dim leading-relaxed font-medium">Clinicians spend valuable consultation time hunting for records that should already be in front of them. Diagnosing takes a back seat to detective work.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-9 h-9 rounded-full bg-pine-50 flex items-center justify-center flex-shrink-0 mt-1"><span className="text-pine-600 font-medium">2</span></div>
                <div>
                  <p className="text-xl font-medium text-ink mb-2">The Patient's Struggle</p>
                  <p className="text-lg text-dim leading-relaxed font-medium">Most patients walk into a new consultation carrying nothing but memory and a bag of paper. Critical history gets lost. The same tests get ordered again. Care starts from zero.</p>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2} className="bg-surface-50 p-8 md:p-10 rounded-2xl border border-stone-200 flex flex-col justify-center h-full">
            <h2 className="text-2xl md:text-3xl font-medium text-ink mb-5">When your history doesn't show up, your care starts from zero.</h2>
            <p className="text-lg text-dim-2 leading-relaxed mb-5 font-medium">Health data is scattered across hospitals, labs, and paper slips, invisible to the clinician who needs it most. FettleMed closes that gap.</p>
            <p className="text-lg text-dim-2 leading-relaxed font-medium">FettleMed connects everything into one continuous record that <span className="font-medium text-pine-600 border-b border-pine-600">follows you</span> wherever you go.</p>
          </FadeIn>

        </div>
      </div>
    </section>
  );
};
