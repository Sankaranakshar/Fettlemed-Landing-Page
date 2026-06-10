import React from 'react';
import { FadeIn } from "@/components/common/FadeIn";
import {
  VisualOnView,
  FullHistoryVisual,
  EPrescriptionsVisual,
  AuditTrailVisual,
} from "@/components/sections/RoleVisuals";

const CARDS = [
  {
    heading: "The full picture. Before they sit down.",
    bullets: [
      "Diagnoses, prescriptions, labs - no asking, no searching.",
      "Other doctors' records, with consent, same view.",
      "Allergies and meds flagged before the consultation begins.",
    ],
    visual: <FullHistoryVisual />,
  },
  {
    heading: "Consultations without the paperwork",
    bullets: [
      "E-prescription sent before they leave the chair.",
      "Notes structured, dated, searchable.",
      "Referrals drafted in seconds.",
    ],
    visual: <EPrescriptionsVisual />,
  },
  {
    heading: "You know what happens after they leave",
    bullets: [
      "Prescriptions hit the patient's app the moment you generate them.",
      "Patients upload follow-up results directly. You see them without a visit.",
      "The freed slot goes to who needs it.",
    ],
    visual: <AuditTrailVisual />,
  },
];

export function DoctorDayOne() {
  return (
    <section id="day-one" className="py-12 md:py-16 bg-surface-50 border-b border-stone-100 scroll-mt-24">
       <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <FadeIn className="text-center mb-10 max-w-3xl mx-auto">
             <h2 className="text-3xl md:text-4xl font-medium text-pine-900 tracking-tight mb-6 text-balance">What changes on day one</h2>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-6 auto-rows-fr">
             {CARDS.map(({ heading, bullets, visual }, i) => (
                <FadeIn key={heading} delay={0.1 + i * 0.1} className="bg-white border border-stone-200 rounded-3xl overflow-hidden shadow-sm flex flex-col h-full hover:shadow-md transition-shadow">
                   <VisualOnView className="bg-pine-900 border-b border-pine-800 flex items-center justify-center min-h-[240px] p-4">
                      {visual}
                   </VisualOnView>
                   <div className="p-6 flex flex-col flex-1">
                      <h3 className="text-xl font-medium text-pine-900 mb-3 tracking-tight text-balance">{heading}</h3>
                      <ul className="text-dim-2 leading-relaxed text-base space-y-2.5">
                         {bullets.map((b) => (
                            <li key={b} className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-pine-600 mt-2 shrink-0" />{b}</li>
                         ))}
                      </ul>
                   </div>
                </FadeIn>
             ))}
          </div>
       </div>
    </section>
  );
}
