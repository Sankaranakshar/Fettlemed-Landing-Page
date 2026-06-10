import React from 'react';
import { motion } from "motion/react";
import { FadeIn } from "@/components/common/FadeIn";

const COLUMNS = [
  {
    barCls: "bg-pine-200",
    heading: "No one can see the full day at once",
    body: "Appointments, walk-ins, calls, and billing all land at once, on different people.",
    close: "The day falls behind before the first consultation begins.",
  },
  {
    barCls: "bg-pine-400",
    heading: "The numbers only make sense at month end",
    body: "Volumes, collections, and cancellations spread across registers and spreadsheets.",
    close: "You're running the clinic from memory.",
  },
  {
    barCls: "bg-pine-900",
    heading: "The same patient registered twice. Again.",
    body: "Returning patients re-registered from scratch. Records take time to find.",
    close: "One mistake at registration adds ten minutes to every patient behind them.",
  },
];

export function ClinicProblem() {
  return (
    <section className="py-12 md:py-16 bg-white border-b border-stone-100">
      <div className="container mx-auto px-6 max-w-6xl">

        <FadeIn className="mb-10">
          <h2 className="text-3xl md:text-4xl font-medium text-pine-900 tracking-tight text-balance">
            Running a clinic shouldn't mean fighting the system.
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-14">
          {COLUMNS.map(({ barCls, heading, body, close }, i) => (
            <FadeIn key={i} delay={i * 0.1} className="flex flex-col">
              {/* Accent bar draws itself in */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.12, duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
                style={{ transformOrigin: 'left' }}
                className={`h-0.5 ${barCls} mb-6`}
                aria-hidden="true"
              />
              <p className="text-xs font-semibold text-pine-500 uppercase tracking-widest mb-4">{heading}</p>
              <p className="text-lg text-dim-2 leading-relaxed mb-4 flex-1">
                {body}
              </p>
              <p className="text-pine-900 text-lg font-semibold leading-snug">
                {close}
              </p>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
}
