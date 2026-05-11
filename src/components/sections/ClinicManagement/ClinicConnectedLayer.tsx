import React from 'react';
import { Network } from "lucide-react";
import { FadeIn } from "@/components/common/FadeIn";

export function ClinicConnectedLayer() {
  return (
    <section className="py-24 bg-surface-50 border-b border-stone-100">
       <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <FadeIn className="text-center mb-16">
             <h2 className="text-3xl md:text-5xl font-bold text-pine-900 tracking-tight text-balance">The connected layer</h2>
          </FadeIn>

          <div className="grid gap-6">
             <FadeIn delay={0.1} className="p-8 md:p-10 rounded-3xl bg-white border border-stone-100 shadow-sm flex flex-col md:flex-row gap-8 items-center md:items-start text-center md:text-left">
                <div className="w-16 h-16 bg-pine-50 shrink-0 rounded-2xl border border-pine-100 flex items-center justify-center">
                   <Network className="w-8 h-8 text-pine-600" />
                </div>
                <div className="space-y-4 text-lg text-stone-600 font-medium leading-relaxed">
                   <p>When a doctor generates a prescription on FettleMed, it goes directly to the patient's app. The patient does not need a printout. The front desk does not handle prescription queries.</p>
                   <p>When a patient uploads a follow-up test result, the doctor sees it without the patient needing another visit just to hand over a report. That visit slot opens up for someone else.</p>
                   <p>When a patient comes to the clinic for the first time and is already on FettleMed, their history is available with their consent — not a blank registration form.</p>
                   <div className="pt-4 border-t border-stone-100 mt-6 !mt-6 text-pine-900 font-bold">
                      <p>Each of these moments removes a task that currently lands on the front desk or the doctor's time. The platform is not a digital version of your paper system. It is a connected layer between the clinic, the doctors, and the patients. Fewer unnecessary touchpoints. Less friction at every step.</p>
                   </div>
                </div>
             </FadeIn>
          </div>
       </div>
    </section>
  );
}
