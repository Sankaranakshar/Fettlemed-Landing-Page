import React from 'react';
import { FileText, Upload, User } from "lucide-react";
import { FadeIn } from "@/components/common/FadeIn";

const scenarios = [
  {
    icon: FileText,
    heading: "Prescription → patient's phone, before they leave.",
    body: "No printout, no front-desk queries.",
  },
  {
    icon: Upload,
    heading: "Patient uploads results from home. Doctor sees them same day.",
    body: "No visit scheduled just to hand over a report.",
  },
  {
    icon: User,
    heading: "Returning FettleMed patient. Registration in seconds.",
    body: "Diagnoses, meds, allergies — available with consent before the consultation begins.",
  },
];

export function ClinicConnectedLayer() {
  return (
    <section className="py-12 md:py-16 bg-surface-50 border-b border-stone-100">
       <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <FadeIn className="text-center mb-4">
             <h2 className="text-3xl md:text-5xl font-medium text-pine-900 tracking-tight text-balance">Not a digital filing cabinet. A connected layer.</h2>
          </FadeIn>
          <FadeIn className="text-center mb-10">
             <p className="text-lg text-dim font-medium leading-relaxed max-w-2xl mx-auto">A live layer between clinic, doctors, and patients. In practice:</p>
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
