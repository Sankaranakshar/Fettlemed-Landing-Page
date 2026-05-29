import React from 'react';
import { FadeIn } from "@/components/common/FadeIn";

export function DoctorDayOne() {
  return (
    <section id="day-one" className="py-16 md:py-20 bg-surface-50 border-b border-stone-100 scroll-mt-24">
       <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <FadeIn className="text-center mb-10 max-w-3xl mx-auto">
             <h2 className="text-3xl md:text-5xl font-medium text-pine-900 tracking-tight mb-6 text-balance">What changes on day one</h2>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 auto-rows-fr">
             <FadeIn delay={0.1} className="bg-white border border-stone-200 rounded-3xl p-8 shadow-sm flex flex-col h-full hover:shadow-md transition-shadow">
                <h3 className="text-2xl font-medium text-pine-900 mb-4 tracking-tight text-balance">Consultations without the paperwork</h3>
                <ul className="text-dim-2 leading-relaxed font-medium text-lg space-y-3">
                   <li className="flex items-start gap-2"><span className="text-pine-600 font-bold mt-1 shrink-0">•</span>E-prescription generated and sent to the patient's phone before they leave the chair.</li>
                   <li className="flex items-start gap-2"><span className="text-pine-600 font-bold mt-1 shrink-0">•</span>Consultation notes structured, dated, and searchable, not buried in a register.</li>
                   <li className="flex items-start gap-2"><span className="text-pine-600 font-bold mt-1 shrink-0">•</span>Referral letters drafted in the time it used to take to find the letterhead.</li>
                </ul>
             </FadeIn>

             <FadeIn delay={0.2} className="bg-white border border-stone-200 rounded-3xl p-8 shadow-sm flex flex-col h-full hover:shadow-md transition-shadow">
                <h3 className="text-2xl font-medium text-pine-900 mb-4 tracking-tight text-balance">The full picture. Before they sit down.</h3>
                <ul className="text-dim-2 leading-relaxed font-medium text-lg space-y-3">
                   <li className="flex items-start gap-2"><span className="text-pine-600 font-bold mt-1 shrink-0">•</span>Diagnoses, prescriptions, lab results, without asking, without searching.</li>
                   <li className="flex items-start gap-2"><span className="text-pine-600 font-bold mt-1 shrink-0">•</span>Consented records from other doctors, available in the same view.</li>
                   <li className="flex items-start gap-2"><span className="text-pine-600 font-bold mt-1 shrink-0">•</span>Allergies, current medications, chronic conditions, flagged before the consultation starts.</li>
                </ul>
             </FadeIn>

             <FadeIn delay={0.3} className="bg-white border border-stone-200 rounded-3xl p-8 shadow-sm flex flex-col h-full hover:shadow-md transition-shadow">
                <h3 className="text-2xl font-medium text-pine-900 mb-4 tracking-tight text-balance">You know what happens after they leave</h3>
                <ul className="text-dim-2 leading-relaxed font-medium text-lg space-y-3">
                   <li className="flex items-start gap-2"><span className="text-pine-600 font-bold mt-1 shrink-0">•</span>Prescriptions reach the patient's app the moment you generate them, no printout, no pharmacy confusion.</li>
                   <li className="flex items-start gap-2"><span className="text-pine-600 font-bold mt-1 shrink-0">•</span>Patients upload follow-up test results directly. You see them without scheduling another visit.</li>
                   <li className="flex items-start gap-2"><span className="text-pine-600 font-bold mt-1 shrink-0">•</span>That freed slot goes to someone who actually needs to be there.</li>
                </ul>
             </FadeIn>
          </div>
       </div>
    </section>
  );
}
