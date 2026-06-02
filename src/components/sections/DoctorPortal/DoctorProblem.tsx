import React from 'react';
import { FadeIn } from "@/components/common/FadeIn";

export function DoctorProblem() {
  return (
    <section className="h-[calc(100vh-80px)] min-h-[600px] flex flex-col bg-white border-b border-stone-100 overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl flex flex-col flex-1 min-h-0 py-10 md:py-14 justify-center">
        <div className="grid md:grid-cols-3 gap-8 lg:gap-14">

          {/* Column 1 */}
          <FadeIn delay={0.1} className="flex flex-col border-t-2 border-pine-200 pt-6">
            <p className="text-xl text-dim-2 font-medium leading-relaxed mb-4">
              A patient sits down. You know the face, not the history. You start from scratch, ask the same questions, hope they remember what they were prescribed.
            </p>
            <p className="text-pine-900 text-xl font-semibold">
              This is not an edge case. This is Tuesday.
            </p>
          </FadeIn>

          {/* Column 2 */}
          <FadeIn delay={0.2} className="flex flex-col border-t-2 border-pine-300 pt-6">
            <p className="text-xl text-dim-2 font-medium leading-relaxed mb-4">
              Between consultations: prescriptions to write by hand, notes in a register, referral letters from memory. None of it is medical work. All of it is time that belongs to the next patient.
            </p>
            <p className="text-pine-900 text-xl font-semibold">
              By end of day, paperwork has outrun your degree.
            </p>
          </FadeIn>

          {/* Column 3 */}
          <FadeIn delay={0.3} className="flex flex-col border-t-2 border-pine-900 pt-6">
            <p className="text-xl text-dim-2 font-medium leading-relaxed mb-4">
              The patient's history, in front of you before they sit down. The prescription, on their phone the moment you generate it. Follow-up results, without scheduling another visit.
            </p>
            <p className="text-pine-900 text-xl font-semibold leading-snug">
              FettleMed is not a workaround. It's how the consultation should have been designed from the start.
            </p>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}
