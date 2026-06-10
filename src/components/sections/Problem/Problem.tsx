import React, { useRef } from 'react';
import { motion, useInView, useScroll } from 'motion/react';
import { FadeIn } from "@/components/common/FadeIn";
import { DarkTexture } from "@/components/common/Texture/DarkTexture";

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

const headline = (
  <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-[1.08]">
    Care without{' '}
    <span className="text-pine-600 underline decoration-pine-600/30 underline-offset-8">
      context.
    </span>
  </h2>
);

const resolution = (
  <div className="relative overflow-hidden bg-pine-900 text-white rounded-2xl px-8 py-10 md:px-12 md:py-12">
    <DarkTexture glow="top-left" />
    <div className="relative z-10">
      <h3 className="text-2xl md:text-3xl font-medium leading-snug mb-4">
        FettleMed changes what the doctor sees before you walk in.
      </h3>
      <p className="text-pine-100 text-lg leading-relaxed">
        One record. Every provider. Every visit.{' '}
        <span className="text-white font-medium">Your history arrives with you.</span>
      </p>
    </div>
  </div>
);

export const Problem = () => {
  // Desktop scroll story: each step reports when it crosses the viewport
  // centre band; the one in focus is fully opaque, the rest recede.
  const refs = [useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null)];
  const inView = [
    useInView(refs[0], { margin: "-42% 0px -42% 0px" }),
    useInView(refs[1], { margin: "-42% 0px -42% 0px" }),
    useInView(refs[2], { margin: "-42% 0px -42% 0px" }),
    useInView(refs[3], { margin: "-42% 0px -42% 0px" }),
  ];
  const focused = inView.lastIndexOf(true);

  const railRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: railRef, offset: ["start 0.62", "end 0.5"] });

  return (
    <section id="insight" className="bg-white text-pine-900 border-y border-stone-100">
      <div className="container mx-auto px-6 max-w-5xl py-12 md:py-16">

        {/* ── Mobile: compact grid (no pinning on small screens) ───────── */}
        <div className="md:hidden">
          <FadeIn>
            <div className="mb-12 max-w-3xl">{headline}</div>
          </FadeIn>

          <div className="grid grid-cols-2 gap-px bg-stone-100 rounded-2xl overflow-hidden mb-12">
            {steps.map((step, i) => (
              <FadeIn key={step.number} delay={i * 0.08}>
                <div className="bg-white p-6 h-full flex flex-col gap-4">
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

          <FadeIn delay={0.2}>{resolution}</FadeIn>
        </div>

        {/* ── Desktop: pinned headline, steps walk past it ──────────────── */}
        <div className="hidden md:block">
          <div className="grid grid-cols-[1fr_1.15fr] gap-16 mb-16">
            {/* Sticky headline column */}
            <div className="sticky top-36 self-start">
              <FadeIn>
                {headline}
                <p className="text-lg text-dim mt-6 max-w-sm leading-relaxed">
                  Ten minutes per consultation. This is where they go.
                </p>
              </FadeIn>
            </div>

            {/* Steps with a filling thread */}
            <div ref={railRef} className="relative py-10 space-y-28">
              <div className="absolute left-[7px] top-14 bottom-14 w-px bg-stone-200" aria-hidden="true">
                <motion.div
                  style={{ scaleY: scrollYProgress, transformOrigin: 'top' }}
                  className="absolute inset-0 bg-pine-500"
                />
              </div>
              {steps.map((step, i) => (
                <div
                  key={step.number}
                  ref={refs[i]}
                  className={`relative pl-10 transition-opacity duration-300 ${
                    i === (focused === -1 ? 0 : focused) ? "opacity-100" : "opacity-35"
                  }`}
                >
                  <span
                    className={`absolute left-0 top-1.5 w-[15px] h-[15px] rounded-full border-2 transition-colors duration-300 ${
                      i <= focused ? "bg-pine-600 border-pine-600" : "bg-white border-stone-300"
                    }`}
                    aria-hidden="true"
                  />
                  <span className="font-mono text-sm font-medium text-pine-600 tracking-widest">
                    {step.number}
                  </span>
                  <p className="text-2xl font-medium text-pine-900 leading-snug mt-2 mb-3 tracking-tight">
                    {step.label}
                  </p>
                  <p className="text-base text-dim leading-relaxed max-w-md">
                    {step.body}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <FadeIn delay={0.1}>{resolution}</FadeIn>
        </div>

      </div>
    </section>
  );
};
