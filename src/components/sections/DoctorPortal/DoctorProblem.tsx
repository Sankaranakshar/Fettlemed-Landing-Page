import React from 'react';
import { History, PenLine, CheckCircle2 } from "lucide-react";
import { FadeIn } from "@/components/common/FadeIn";

export function DoctorProblem() {
  return (
    <section className="py-16 md:py-20 bg-white border-b border-stone-100 relative">
       <div className="absolute inset-0 bg-stone-50/50" />
       <div className="container mx-auto px-4 md:px-8 max-w-6xl relative z-10">
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
             {/* Column 1 — primary pain: face not history */}
             <FadeIn delay={0.1} className="flex flex-col flex-1">
                <div className="w-12 h-12 bg-red-50 text-red-500 rounded-2xl flex items-center justify-center mb-6 border border-red-100/50 shadow-sm">
                   <History className="w-6 h-6" />
                </div>
                <div className="space-y-4 text-lg text-dim-2 font-medium leading-relaxed">
                   <p>A patient sits down. You know the face, not the history. You start from scratch, ask the same questions, hope they remember what they were prescribed.</p>
                   <p>This is not an edge case. This is Tuesday.</p>
                </div>
             </FadeIn>

             {/* Column 2 — secondary pain: administrative burden */}
             <FadeIn delay={0.2} className="flex flex-col flex-1">
                <div className="w-12 h-12 bg-red-50 text-red-500 rounded-2xl flex items-center justify-center mb-6 border border-red-100/50 shadow-sm">
                   <PenLine className="w-6 h-6" />
                </div>
                <div className="space-y-4 text-lg text-dim-2 font-medium leading-relaxed">
                   <p>Between consultations: prescriptions to write by hand, notes in a register, referral letters from memory. None of it is medical work. All of it is time that belongs to the next patient.</p>
                   <p>By end of day, paperwork has outrun your degree.</p>
                </div>
             </FadeIn>

             {/* Column 3 — solution preview */}
             <FadeIn delay={0.3} className="flex flex-col flex-1">
                <div className="w-12 h-12 bg-pine-50 text-pine-600 rounded-2xl flex items-center justify-center mb-6 border border-pine-100 shadow-sm">
                   <CheckCircle2 className="w-6 h-6" />
                </div>
                <div className="space-y-4 text-lg text-dim-2 font-medium leading-relaxed">
                   <p>The patient's history, in front of you before they sit down. The prescription, on their phone the moment you generate it. Follow-up results, without scheduling another visit.</p>
                   <p className="text-pine-900 font-medium">FettleMed is not a workaround. It's how the consultation should have been designed from the start.</p>
                </div>
             </FadeIn>
          </div>
       </div>
    </section>
  );
}
