import React from 'react';
import { motion } from "motion/react";
import { FadeIn } from "@/components/common/FadeIn";
import { SPRING_POP, VIEWPORT_ONCE } from "@/lib/motionTokens";

interface FoundersSectionProps {
  heading: string;
  sub: string;
  /** Role-specific framing for each founder. Intentionally different per
      audience page (founder decision 2026-06-05): pass copy, not structure. */
  sriram: string;
  bhavani: string;
  quote: string;
  quoteSub: string;
}

const FOUNDERS = [
  { monogram: "SS", name: "Dr. Sriram Shankar", creds: "MBBS · FRCS (England) · FAMS (Singapore)" },
  { monogram: "BS", name: "Dr. Bhavani Sriram", creds: "MBBS · MRCP (UK) · Singapore Silent Hero" },
] as const;

export function FoundersSection({ heading, sub, sriram, bhavani, quote, quoteSub }: FoundersSectionProps) {
  const bodies = [sriram, bhavani];

  return (
    <section className="py-12 md:py-16 bg-surface-50 border-b border-stone-100">
      <div className="container mx-auto px-6 max-w-5xl">
        <FadeIn className="mb-8 text-center">
          <p className="text-xs font-semibold text-pine-500 uppercase tracking-widest mb-3">The team behind FettleMed</p>
          <h2 className="text-3xl md:text-4xl font-medium text-pine-900 tracking-tight">{heading}</h2>
          <p className="text-dim text-base mt-3 max-w-xl mx-auto leading-relaxed">{sub}</p>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-5 mb-8">
          {FOUNDERS.map(({ monogram, name, creds }, i) => (
            <FadeIn key={name} delay={0.1 + i * 0.1} className="bg-white border border-stone-200 p-6 rounded-2xl flex flex-col gap-4 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3">
                <motion.div
                  initial={{ scale: 0.5, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={VIEWPORT_ONCE}
                  transition={{ delay: i * 0.08, ...SPRING_POP }}
                  className="w-11 h-11 bg-pine-900 rounded-xl flex items-center justify-center shrink-0"
                >
                  <span className="text-xs font-semibold text-pine-100 tracking-wide">{monogram}</span>
                </motion.div>
                <div>
                  <h3 className="text-base font-semibold text-pine-900">{name}</h3>
                  <p className="text-pine-500 text-xs font-medium uppercase tracking-wide mt-0.5">{creds}</p>
                </div>
              </div>
              <p className="text-dim-2 text-sm leading-relaxed">{bodies[i]}</p>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.3} className="bg-pine-900 rounded-2xl px-7 py-5 text-center">
          <p className="text-pine-100 font-medium text-base md:text-lg leading-relaxed">"{quote}"</p>
          <p className="text-pine-300 text-sm font-medium mt-3">{quoteSub}</p>
        </FadeIn>
      </div>
    </section>
  );
}
