import React from 'react';
import { FadeIn } from "@/components/common/FadeIn";

const COLUMNS = [
  {
    borderCls: "border-pine-200",
    body: "A patient sits down. You know the face, not the history. You start from scratch, ask the same questions, hope they remember what they were last prescribed — and build your diagnosis on fragments.",
    close: "This is not an edge case. This is Tuesday.",
  },
  {
    borderCls: "border-pine-400",
    body: "Between consultations: prescriptions by hand, notes in a register, referral letters drafted from memory. None of it is medical work. All of it is time that belongs to the next patient.",
    close: "By end of day, paperwork has outrun your degree.",
  },
  {
    borderCls: "border-pine-900",
    body: "The patient's history, in front of you before they sit down. The prescription, on their phone the moment you generate it. Follow-up results, without scheduling another visit.",
    close: "FettleMed is not a workaround. It's how the consultation should have been designed from the start.",
  },
];

export function DoctorProblem() {
  return (
    <section className="h-[calc(100vh-80px)] min-h-[600px] flex flex-col bg-white border-b border-stone-100 overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl flex flex-col flex-1 min-h-0 py-10 md:py-14 justify-center">

        <FadeIn className="mb-10">
          <h2 className="text-3xl md:text-4xl font-medium text-pine-900 tracking-tight text-balance">
            This is what practice looks like today.
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-14">
          {COLUMNS.map(({ borderCls, body, close }, i) => (
            <FadeIn key={i} delay={i * 0.1} className={`flex flex-col border-t-2 ${borderCls} pt-6`}>
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
