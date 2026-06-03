import React from 'react';
import { FileText, Upload, User } from "lucide-react";
import { FadeIn } from "@/components/common/FadeIn";

const scenarios = [
  {
    icon: FileText,
    heading: "A doctor generates a prescription. It reaches the patient's phone before they leave the building.",
    body: "No printout. No front-desk queries. The pharmacy gets a legible digital record instead of handwriting they have to interpret.",
  },
  {
    icon: Upload,
    heading: "A patient uploads their follow-up result from home. The doctor sees it the same day.",
    body: "No visit scheduled just to hand over a report. The result is attached to the consultation record it belongs to.",
  },
  {
    icon: User,
    heading: "A first-time patient who's already on FettleMed. Registration takes seconds.",
    body: "Diagnoses, medications, allergies — available with their consent. The doctor walks in knowing who they're treating. Not a blank form.",
  },
];

export function ClinicConnectedLayer() {
  return (
    <section className="py-16 md:py-20 bg-surface-50 border-b border-stone-100">
       <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <FadeIn className="text-center mb-4">
             <h2 className="text-3xl md:text-5xl font-medium text-pine-900 tracking-tight text-balance">FettleMed is not a digital version of your paper system.</h2>
          </FadeIn>
          <FadeIn className="text-center mb-10">
             <p className="text-lg text-dim font-medium leading-relaxed max-w-2xl mx-auto">It's a connected layer between your clinic, your doctors, and your patients. Here's what that looks like in practice.</p>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-6">
             {scenarios.map(({ icon: Icon, heading, body }, i) => (
                <FadeIn key={i} delay={i * 0.1} className="p-8 rounded-3xl bg-white border border-stone-100 shadow-sm flex flex-col gap-5 hover:shadow-md transition-shadow">
                   <div className="w-12 h-12 bg-pine-50 rounded-2xl border border-pine-100 flex items-center justify-center shrink-0">
                      <Icon className="w-6 h-6 text-pine-600" />
                   </div>
                   <div>
                      <p className="text-pine-900 text-base font-semibold mb-3 leading-snug">{heading}</p>
                      <p className="text-dim-2 text-base font-medium leading-relaxed">{body}</p>
                   </div>
                </FadeIn>
             ))}
          </div>
       </div>
    </section>
  );
}
