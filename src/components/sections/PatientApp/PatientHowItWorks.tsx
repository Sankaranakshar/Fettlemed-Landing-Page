import React, { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { HowItWorksPhone } from "./HowItWorksPhone";

const STEPS = [
  {
    n: "01",
    heading: "Upload what you already have",
    body: "Old reports, PDFs, photos of prescriptions. Your history doesn't start at zero. It starts where you are.",
  },
  {
    n: "02",
    heading: "Records grow with every visit",
    body: "Show your QR at a FettleMed clinic. You approve. Notes and prescriptions sync to you. No typing, no follow-up.",
  },
  {
    n: "03",
    heading: "Walk into your next appointment ready",
    body: "Share in two taps. Set it to expire after the visit or keep it open. Revoke access anytime.",
  },
];

function StepRow({ n, heading, body, index }: { n: string; heading: string; body: string; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-12%" });
  const reversed = index % 2 === 1;

  return (
    <div
      ref={ref}
      className={`flex flex-col ${reversed ? "md:flex-row-reverse" : "md:flex-row"} items-center gap-10 md:gap-20 py-14 md:py-20 border-b border-stone-100 last:border-b-0`}
    >
      {/* Text */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
        className="flex-1 max-w-lg"
      >
        <span className="font-mono text-sm font-medium text-pine-500 tracking-widest">{n}</span>
        <h3 className="text-2xl md:text-3xl font-medium text-pine-900 tracking-tight mt-3 mb-4 text-balance">
          {heading}
        </h3>
        <p className="text-dim-2 text-lg leading-relaxed">{body}</p>
      </motion.div>

      {/* Phone — mounts on enter so the screen animation plays from the start */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
        className="w-[268px] shrink-0"
      >
        {inView && <HowItWorksPhone step={index} />}
      </motion.div>
    </div>
  );
}

export function PatientHowItWorks() {
  return (
    <section className="py-12 md:py-16 bg-surface-50 border-b border-stone-100">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-4">
          <h2 className="text-3xl md:text-4xl font-medium text-pine-900 tracking-tight">How it works.</h2>
        </div>

        <div>
          {STEPS.map((s, i) => (
            <React.Fragment key={s.n}>
              <StepRow n={s.n} heading={s.heading} body={s.body} index={i} />
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
