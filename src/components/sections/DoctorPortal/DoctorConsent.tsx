import React from 'react';
import { motion } from "motion/react";
import { Lock, Fingerprint, Link2, ShieldCheck } from "lucide-react";
import { FadeIn } from "@/components/common/FadeIn";

const CARDS = [
  {
    Icon: Lock,
    heading: "The records you create are yours.",
    bullets: [
      "FettleMed stores and structures your records, nothing more",
      "You leave with everything you created, always",
    ],
  },
  {
    Icon: Fingerprint,
    heading: "Patients decide what they share with you.",
    bullets: [
      "Share for one consultation, a fixed period, or ongoing",
      "You never have unauthorised access. That protects you as much as it protects them.",
    ],
  },
  {
    Icon: Link2,
    heading: "Practicing without blind spots.",
    bullets: [
      "Full medication history without asking",
      "No repeating a test from three weeks ago",
    ],
  },
  {
    Icon: ShieldCheck,
    heading: "Every access is logged. For both of you.",
    bullets: [
      "If a complaint arises, what you had access to is documented",
      "Visible to you and the patient, always",
    ],
  },
];

export function DoctorConsent() {
  return (
    <section className="py-12 md:py-16 bg-white border-y border-stone-100">
      <div className="container mx-auto px-6 max-w-5xl">
        <FadeIn className="mb-10">
          <h2 className="text-3xl md:text-4xl font-medium text-pine-900 tracking-tight text-balance">
            Who owns what.
          </h2>
          <p className="text-dim text-base leading-relaxed mt-3 max-w-2xl">
            You keep everything you create. Patients control what they share beyond that. Every access is visible to both of you.
          </p>
        </FadeIn>

        {/* Ledger: a centre thread with entries alternating sides on desktop.
            The layout itself argues the point: clean separation of ownership. */}
        <div className="relative">
          <div className="hidden md:block absolute left-1/2 top-2 bottom-2 w-px bg-stone-200 -translate-x-1/2" aria-hidden="true">
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1.4, ease: [0.23, 1, 0.32, 1] }}
              style={{ transformOrigin: 'top' }}
              className="absolute inset-0 bg-pine-300"
            />
          </div>

          <div className="space-y-4 md:space-y-8">
            {CARDS.map(({ Icon, heading, bullets }, i) => {
              const left = i % 2 === 0;
              return (
                <motion.div
                  key={heading}
                  initial={{ opacity: 0, x: 0, y: 16 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: 0.05, duration: 0.45, ease: [0.23, 1, 0.32, 1] }}
                  className={`md:w-[calc(50%-2rem)] ${left ? "md:mr-auto" : "md:ml-auto"}`}
                >
                  <div className="relative flex flex-col gap-3 p-6 rounded-2xl bg-surface-50 border border-stone-200 shadow-sm">
                    {/* Node on the thread */}
                    <span
                      className={`hidden md:block absolute top-8 w-3 h-3 rounded-full bg-pine-600 border-2 border-white shadow ${
                        left ? "-right-[2.45rem]" : "-left-[2.45rem]"
                      }`}
                      aria-hidden="true"
                    />
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-pine-50 rounded-xl flex items-center justify-center shrink-0 border border-pine-100">
                        <Icon className="w-4 h-4 text-pine-600" />
                      </div>
                      <h3 className="text-base font-semibold text-pine-900 tracking-tight leading-snug">{heading}</h3>
                    </div>
                    <ul className="space-y-1.5">
                      {bullets.map((b) => (
                        <li key={b} className="flex items-start gap-2 text-dim-2 text-sm">
                          <span className="w-1.5 h-1.5 rounded-full bg-pine-500 mt-1.5 shrink-0" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
