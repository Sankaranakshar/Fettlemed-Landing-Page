import React, { useRef } from 'react';
import { motion, useInView, useScroll } from 'motion/react';
import { FadeIn } from "@/components/common/FadeIn";
import { PatientMobileMockup } from "@/components/sections/Mockups";

const STEPS = [
  {
    n: "1",
    tab: "Records" as const,
    heading: "Upload what you already have",
    body: "Old reports, PDFs, photos. Your history doesn't start at zero.",
  },
  {
    n: "2",
    tab: "Home" as const,
    heading: "Records grow with every visit",
    body: "Show your QR at a FettleMed clinic. You approve. Notes and prescriptions sync to you.",
  },
  {
    n: "3",
    tab: "Share" as const,
    heading: "Walk into your next appointment ready",
    body: "Share in two taps at your next visit. Expire it or keep it open. Revoke anytime.",
  },
];

export function PatientHowItWorks() {
  // Each step reports whether it crosses the vertical centre of the viewport;
  // the phone follows the highest step currently in that band.
  const refs = [useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null)];
  const inView = [
    useInView(refs[0], { margin: "-40% 0px -40% 0px" }),
    useInView(refs[1], { margin: "-40% 0px -40% 0px" }),
    useInView(refs[2], { margin: "-40% 0px -40% 0px" }),
  ];
  const activeIndex = inView.lastIndexOf(true);
  const activeTab = STEPS[activeIndex === -1 ? 0 : activeIndex].tab;

  // Vertical rail behind the step numbers, filling as steps cross the viewport centre
  const stepsRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: stepsRef, offset: ["start 0.65", "end 0.55"] });

  return (
    <section className="py-12 md:py-16 bg-surface-50 border-b border-stone-100">
      <div className="container mx-auto px-6 max-w-5xl">
        <FadeIn className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-medium text-pine-900 tracking-tight text-balance">How it works.</h2>
        </FadeIn>

        <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-start">
          {/* Steps */}
          <div ref={stepsRef} className="relative flex-1 md:py-16 space-y-10 md:space-y-32">
            {/* The thread: fills with scroll, connecting the steps */}
            <div className="absolute left-7 top-10 bottom-10 w-px bg-stone-200 -translate-x-1/2" aria-hidden="true">
              <motion.div
                style={{ scaleY: scrollYProgress, transformOrigin: 'top' }}
                className="absolute inset-0 bg-pine-500"
              />
            </div>
            {STEPS.map(({ n, heading, body }, i) => (
              <div
                key={n}
                ref={refs[i]}
                className={`relative flex gap-6 items-start transition-opacity duration-300 ${
                  i === (activeIndex === -1 ? 0 : activeIndex) ? "md:opacity-100" : "md:opacity-40"
                }`}
              >
                <div className="w-14 h-14 bg-white border border-stone-200 shadow-sm rounded-full flex items-center justify-center text-xl font-medium text-pine-900 shrink-0 relative z-10">{n}</div>
                <div>
                  <h3 className="text-xl font-medium text-pine-900 mb-2 tracking-tight">{heading}</h3>
                  <p className="text-dim-2 text-base leading-relaxed">{body}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Sticky phone - follows the active step */}
          <div className="hidden md:block w-[320px] shrink-0 sticky top-28 self-start">
            <PatientMobileMockup activeTab={activeTab} />
          </div>
        </div>
      </div>
    </section>
  );
}
