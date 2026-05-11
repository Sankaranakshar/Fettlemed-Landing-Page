import React from 'react';
import { FadeIn } from "@/components/common/FadeIn";

export function DoctorDayOne() {
  return (
    <section className="py-24 bg-surface-50 border-b border-stone-100">
       <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <FadeIn className="text-center mb-16 max-w-3xl mx-auto">
             <h2 className="text-3xl md:text-5xl font-bold text-pine-900 tracking-tight mb-6 text-balance">What changes on day one</h2>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 auto-rows-fr">
             <FadeIn delay={0.1} className="bg-white border border-stone-200 rounded-3xl p-8 shadow-sm flex flex-col h-full hover:shadow-md transition-shadow">
                <h3 className="text-2xl font-bold text-pine-900 mb-4 tracking-tight text-balance">Consultations without the paperwork</h3>
                <ul className="text-stone-600 leading-relaxed font-medium text-lg space-y-3 list-disc pl-5">
                   <li>E-prescriptions generated in seconds, sent directly to your patient's phone.</li>
                   <li>Consultation notes that are structured and searchable, not buried in a register.</li>
                   <li>Referral letters drafted in moments.</li>
                </ul>
             </FadeIn>

             <FadeIn delay={0.2} className="bg-white border border-stone-200 rounded-3xl p-8 shadow-sm flex flex-col h-full hover:shadow-md transition-shadow">
                <h3 className="text-2xl font-bold text-pine-900 mb-4 tracking-tight text-balance">Every patient's history before they sit down</h3>
                <ul className="text-stone-600 leading-relaxed font-medium text-lg space-y-3 list-disc pl-5">
                   <li>When a patient opens their file, you see their full history: past diagnoses, prescriptions, and lab results, without searching for anything.</li>
                   <li>If they've consented to share records from other doctors, you see those too.</li>
                   <li>You have all the relevant information in your hand before the patient walks through the door.</li>
                </ul>
             </FadeIn>

             <FadeIn delay={0.3} className="bg-white border border-stone-200 rounded-3xl p-8 shadow-sm flex flex-col h-full hover:shadow-md transition-shadow">
                <h3 className="text-2xl font-bold text-pine-900 mb-4 tracking-tight text-balance">You know what happens after they leave</h3>
                <ul className="text-stone-600 leading-relaxed font-medium text-lg space-y-3 list-disc pl-5">
                   <li>Prescriptions sync to the patient's app the moment you generate them.</li>
                   <li>Patients can upload their follow-up test results directly, and you see them without scheduling another visit.</li>
                   <li>Your clinical relationship with a patient doesn't end at the door.</li>
                </ul>
             </FadeIn>
          </div>
       </div>
    </section>
  );
}
