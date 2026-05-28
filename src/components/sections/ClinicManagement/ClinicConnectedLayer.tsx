import React from 'react';
import { Network } from "lucide-react";
import { FadeIn } from "@/components/common/FadeIn";

export function ClinicConnectedLayer() {
  return (
    <section className="py-16 md:py-20 bg-surface-50 border-b border-stone-100">
       <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <FadeIn className="text-center mb-10">
             <h2 className="text-3xl md:text-5xl font-medium text-pine-900 tracking-tight text-balance">When everyone is connected, this is what changes.</h2>
          </FadeIn>

          <div className="grid gap-6">
             <FadeIn delay={0.1} className="p-8 md:p-10 rounded-3xl bg-white border border-stone-100 shadow-sm flex flex-col md:flex-row gap-8 items-start text-left">
                <div className="w-16 h-16 bg-pine-50 shrink-0 rounded-2xl border border-pine-100 flex items-center justify-center">
                   <Network className="w-8 h-8 text-pine-600" />
                </div>
                <div className="space-y-8 text-lg text-dim-2 font-medium leading-relaxed">
                   {/* Scenario 1 */}
                   <div className="space-y-3">
                      <p>A doctor generates a prescription. It reaches the patient's phone before they leave the building.</p>
                      <p>The patient doesn't need a printout. The front desk doesn't field prescription queries. The pharmacy gets a clear, legible digital record instead of handwriting they have to interpret.</p>
                   </div>

                   {/* Scenario 2 */}
                   <div className="space-y-3 pt-4 border-t border-stone-100">
                      <p>A patient uploads their follow-up test result from home. The doctor sees it the same day.</p>
                      <p>No visit scheduled just to hand over a report. The doctor has the result in context, attached to the consultation record it belongs to.</p>
                   </div>

                   {/* Scenario 3 */}
                   <div className="space-y-3 pt-4 border-t border-stone-100">
                      <p>A patient arrives for the first time. They're already on FettleMed.</p>
                      <p>Their registration takes seconds. Their history, diagnoses, medications, allergies, previous consultations, is available with their consent. The doctor walks in knowing who they're treating.</p>
                      <p>Not a blank form. Not fifteen minutes of intake questions. A patient whose story is already there.</p>
                   </div>

                   {/* Closing */}
                   <div className="pt-4 border-t border-stone-100 text-pine-900 font-medium">
                      <p>Every one of these moments used to mean a phone call, a printout, a question to the front desk, or a visit that didn't need to happen. The platform is not a digital version of your paper system. It is a connected layer between the clinic, the doctors, and the patients.</p>
                   </div>
                </div>
             </FadeIn>
          </div>
       </div>
    </section>
  );
}
