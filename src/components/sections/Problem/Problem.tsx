import React from 'react';
import { FadeIn } from "@/components/common/FadeIn";

export const Problem = () => {
  return (
    <section id="insight" className="py-24 md:py-32 bg-white text-pine-900 border-y border-stone-100">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <FadeIn>
             <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-[1.1] mb-8">
               Healthcare always <span className="text-accent-600 underline decoration-accent-600/30 underline-offset-8">starts from home.</span>
             </h2>
             <div className="space-y-6 mt-10">
               <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full bg-stone-100 flex items-center justify-center flex-shrink-0 mt-1"><span className="text-stone-500 font-medium">1</span></div>
                  <div>
                    <p className="text-xl md:text-2xl font-medium text-pine-900 mb-2">The Consultation Crisis</p>
                    <p className="text-lg text-stone-500 leading-relaxed font-medium">Clinicians routinely spend a major part of their dedicated patient time acting as data detectives, hunting fragmented records instead of diagnosing.</p>
                  </div>
               </div>
               <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full bg-stone-100 flex items-center justify-center flex-shrink-0 mt-1"><span className="text-stone-500 font-medium">2</span></div>
                  <div>
                    <p className="text-xl md:text-2xl font-medium text-pine-900 mb-2">The Patient's Struggle</p>
                    <p className="text-lg text-stone-500 leading-relaxed font-medium">Vital clinical context is frequently lost when patients are forced to rely entirely on memory to explain complex, multi-year medical histories to a new doctor, leading to missed details and redundant testing.</p>
                  </div>
               </div>
             </div>
          </FadeIn>

          <FadeIn delay={0.2} className="bg-surface-50 p-10 md:p-16 rounded-[2rem] border border-stone-200">
             <h3 className="text-2xl md:text-3xl font-medium text-pine-900 mb-6">Disconnected data delays healthcare.</h3>
             <p className="text-lg text-stone-600 leading-relaxed mb-6 font-medium">Health data is siloed across hospitals, labs, and paper slips, invisible to the clinician who needs it most. FettleMed closes that gap.</p>
             <p className="text-lg text-stone-600 leading-relaxed font-medium">FettleMed connects everything into one continuous record that <span className="font-medium text-pine-900 border-b border-accent-600">follows you</span> wherever you go.</p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
