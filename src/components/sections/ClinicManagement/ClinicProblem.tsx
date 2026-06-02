import React from 'react';
import { FadeIn } from "@/components/common/FadeIn";

const COLUMNS = [
  {
    borderCls: "border-pine-200",
    heading: "Operational Chaos",
    body: "Appointments, walk-ins, phone calls, billing questions, and last-minute schedule changes all compete for attention at the same time.",
    close: "The day often falls behind before the first consultation begins.",
  },
  {
    borderCls: "border-pine-400",
    heading: "Limited Visibility",
    body: "Patient volumes, collections, outstanding payments, cancellations, and clinic performance are spread across registers, spreadsheets, and disconnected systems.",
    close: "By the time you have the numbers, it's too late to act on them.",
  },
  {
    borderCls: "border-pine-900",
    heading: "Broken Workflows",
    body: "Returning patients are registered again. Records take time to locate. Information has to be re-entered across multiple touchpoints.",
    close: "Small delays compound into lost time across the entire clinic.",
  },
];

export function ClinicProblem() {
  return (
    <section className="h-[calc(100vh-80px)] min-h-[600px] flex flex-col bg-white border-b border-stone-100 overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl flex flex-col flex-1 min-h-0 py-10 md:py-14 justify-center">

        <FadeIn className="mb-10">
          <h2 className="text-3xl md:text-4xl font-medium text-pine-900 tracking-tight text-balance">
            Running a clinic shouldn't mean fighting the system.
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-14">
          {COLUMNS.map(({ borderCls, heading, body, close }, i) => (
            <FadeIn key={i} delay={i * 0.1} className={`flex flex-col border-t-2 ${borderCls} pt-6`}>
              <p className="text-xs font-semibold text-pine-500 uppercase tracking-widest mb-4">{heading}</p>
              <p className="text-lg text-dim-2 font-medium leading-relaxed mb-4 flex-1">
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
