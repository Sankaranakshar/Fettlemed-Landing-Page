import React from 'react';
import { FadeIn } from "@/components/common/FadeIn";

export const Problem = () => {
  return (
    <section id="insight" className="h-[calc(100vh-80px)] min-h-[600px] flex flex-col justify-center bg-white text-pine-900 border-y border-stone-100 overflow-hidden">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <FadeIn>
             <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight leading-[1.1] mb-5">
               Two people in the same room. <span className="text-pine-600 underline decoration-pine-600/30 underline-offset-8">Neither has the full picture.</span>
             </h2>
             <div className="space-y-4 mt-6">
               <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full bg-pine-50 flex items-center justify-center flex-shrink-0 mt-1"><span className="text-pine-600 font-medium">1</span></div>
                  <div>
                    <p className="text-lg md:text-xl font-medium text-ink mb-1.5">The Consultation Crisis</p>
                    <p className="text-base md:text-lg text-dim leading-relaxed font-medium">Clinicians spend valuable consultation time hunting for records that should already be in front of them. Diagnosing takes a back seat to detective work.</p>
                  </div>
               </div>
               <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full bg-pine-50 flex items-center justify-center flex-shrink-0 mt-1"><span className="text-pine-600 font-medium">2</span></div>
                  <div>
                    <p className="text-lg md:text-xl font-medium text-ink mb-1.5">The Patient's Struggle</p>
                    <p className="text-base md:text-lg text-dim leading-relaxed font-medium">Most patients walk into a new consultation carrying nothing but memory and a bag of paper. Critical history gets lost. The same tests get ordered again. Care starts from zero.</p>
                  </div>
               </div>
             </div>
          </FadeIn>

          <FadeIn delay={0.2} className="bg-surface-50 p-6 rounded-2xl border border-stone-200">
             <h2 className="text-xl md:text-2xl font-medium text-ink mb-4">Disconnected data delays healthcare.</h2>
             <p className="text-base md:text-lg text-dim-2 leading-relaxed mb-4 font-medium">Health data is scattered across hospitals, labs, and paper slips, invisible to the clinician who needs it most. FettleMed closes that gap.</p>
             <p className="text-base md:text-lg text-dim-2 leading-relaxed font-medium">FettleMed connects everything into one continuous record that <span className="font-medium text-pine-600 border-b border-pine-600">follows you</span> wherever you go.</p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
