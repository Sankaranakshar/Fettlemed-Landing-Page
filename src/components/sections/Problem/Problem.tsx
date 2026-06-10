import React from 'react';
import { FadeIn } from "@/components/common/FadeIn";

const steps = [
  {
    number: '01',
    label: 'The doctor asks.',
    body: 'About your history, your medications, what you\'ve been told before.',
  },
  {
    number: '02',
    label: 'The patient guesses.',
    body: 'The name of the drug, the year of the surgery, which clinic did the scan.',
  },
  {
    number: '03',
    label: 'The records are elsewhere.',
    body: 'A different hospital. A folder at home. A system that doesn\'t talk to this one.',
  },
  {
    number: '04',
    label: 'The clock runs out.',
    body: 'Ten minutes go to rebuilding a history that already exists. Somewhere.',
  },
];

export const Problem = () => {
  return (
    <section id="insight" className="bg-white text-pine-900 border-y border-stone-100">
      <div className="container mx-auto px-6 max-w-5xl py-12 md:py-16">

        {/* Headline */}
        <FadeIn>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-[1.08] mb-14 md:mb-16 max-w-3xl">
            Care without{' '}
            <span className="text-pine-600 underline decoration-pine-600/30 underline-offset-8">
              context.
            </span>
          </h2>
        </FadeIn>

        {/* Scenario Steps */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-stone-100 rounded-2xl overflow-hidden mb-14 md:mb-16">
          {steps.map((step, i) => (
            <FadeIn key={step.number} delay={i * 0.08}>
              <div className="bg-white p-6 md:p-7 h-full flex flex-col gap-4">
                <span className="font-mono text-sm font-medium text-pine-600 tracking-widest">
                  {step.number}
                </span>
                <p className="text-base font-semibold text-pine-900 leading-snug">
                  {step.label}
                </p>
                <p className="text-sm text-dim leading-relaxed mt-auto">
                  {step.body}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Resolution block */}
        <FadeIn delay={0.35}>
          <div className="bg-pine-900 text-white rounded-2xl px-8 py-10 md:px-12 md:py-12">
            <h3 className="text-2xl md:text-3xl font-medium leading-snug mb-4">
              FettleMed changes what the doctor sees before you walk in.
            </h3>
            <p className="text-pine-100 text-lg leading-relaxed">
              One record. Every provider. Every visit.{' '}
              <span className="text-white font-medium">Your history arrives with you.</span>
            </p>
          </div>
        </FadeIn>

      </div>
    </section>
  );
};
