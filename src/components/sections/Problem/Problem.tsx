import React from 'react';
import { FadeIn } from "@/components/common/FadeIn";

export const Problem = () => {
  return (
    <section id="insight" className="bg-white text-pine-900 border-y border-stone-100">
      <div className="container mx-auto px-6 max-w-5xl py-16 md:py-20">
        <div className="grid lg:grid-cols-2 gap-8 items-start">

          <FadeIn className="flex flex-col justify-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-[1.08] mb-8">
              Two people in the same room. <span className="text-pine-600 underline decoration-pine-600/30 underline-offset-8">Neither has the full picture.</span>
            </h2>
            <div className="space-y-6">
              <p className="text-lg text-dim leading-relaxed font-medium">
                The doctor asks. The patient tries to remember. The report is at a different clinic, a folder at home, or gone entirely. The first ten minutes go to rebuilding a history that already exists. Somewhere.
              </p>
              <p className="text-lg text-dim leading-relaxed font-medium">
                A doctor can't treat what they don't know. A patient can't explain what they can't recall. The information is out there, prescriptions, lab reports, consultation notes, scattered across every provider they've ever seen.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.2} className="bg-surface-50 p-8 md:p-10 rounded-2xl border border-stone-200 flex flex-col justify-center">
            <h2 className="text-2xl md:text-3xl font-medium text-ink mb-5">When your history doesn't show up, your care starts from zero.</h2>
            <p className="text-lg text-dim-2 leading-relaxed mb-5 font-medium">Health data is scattered across hospitals, labs, and paper folders. FettleMed puts it in one place.</p>
            <p className="text-lg text-dim-2 leading-relaxed font-medium">One record. Your doctor sees exactly what you've seen, before you walk in.</p>
          </FadeIn>

        </div>
      </div>
    </section>
  );
};
