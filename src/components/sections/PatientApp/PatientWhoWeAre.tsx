import React from 'react';
import { User } from "lucide-react";
import { FadeIn } from "@/components/common/FadeIn";

export function PatientWhoWeAre() {
  return (
    <section className="py-12 md:py-16 bg-surface-50 border-b border-stone-100">
      <div className="container mx-auto px-6 max-w-5xl">
        <FadeIn className="mb-8 text-center">
          <p className="text-xs font-semibold text-pine-500 uppercase tracking-widest mb-3">The team behind FettleMed</p>
          <h2 className="text-3xl md:text-4xl font-medium text-pine-900 tracking-tight">
            Built by people who've sat on both sides of the consultation.
          </h2>
          <p className="text-dim text-base font-medium mt-3 max-w-xl mx-auto leading-relaxed">
            The founders have spent decades as clinicians. Which means they've spent decades watching patients arrive clutching paper bags of old reports, recalling medications from memory, and starting over at every new clinic. They built FettleMed for that patient.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-5 mb-8">
          <FadeIn delay={0.1} className="bg-white border border-stone-200 p-6 rounded-2xl flex flex-col gap-4 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 bg-pine-50 rounded-xl flex items-center justify-center shrink-0 border border-pine-100">
                <User className="w-5 h-5 text-pine-700" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-pine-900">Dr. Sriram Shankar</h3>
                <p className="text-pine-500 text-xs font-medium uppercase tracking-wide mt-0.5">MBBS · FRCS (England) · FAMS (Singapore)</p>
              </div>
            </div>
            <p className="text-dim-2 text-sm font-medium leading-relaxed">
              After nearly four decades seeing patients, the same pattern never changed: critical history lost in transit, tests repeated unnecessarily, decisions made without the full picture. FettleMed is built so that every patient who walks into a consultation arrives with everything they need. Not just what they could remember.
            </p>
          </FadeIn>

          <FadeIn delay={0.2} className="bg-white border border-stone-200 p-6 rounded-2xl flex flex-col gap-4 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 bg-pine-50 rounded-xl flex items-center justify-center shrink-0 border border-pine-100">
                <User className="w-5 h-5 text-pine-700" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-pine-900">Dr. Bhavani Sriram</h3>
                <p className="text-pine-500 text-xs font-medium uppercase tracking-wide mt-0.5">MBBS · MRCP (UK) · Singapore Silent Hero</p>
              </div>
            </div>
            <p className="text-dim-2 text-sm font-medium leading-relaxed">
              A career caring for patients with complex, long-term conditions showed her exactly what happens when records don't travel with the patient. History scattered across hospitals, WhatsApp screenshots, and paper folders. She built FettleMed's patient record model around the family managing care for someone who needs it most.
            </p>
          </FadeIn>
        </div>

        <FadeIn delay={0.3} className="bg-pine-900 rounded-2xl px-7 py-5 text-center">
          <p className="text-pine-100 font-medium text-base md:text-lg leading-relaxed">
            "Every feature in the patient app came from a real moment in a consultation where the patient didn't have what they needed. And shouldn't have had to."
          </p>
          <p className="text-pine-400 text-sm font-medium mt-3">
            We are available to speak with patients and families directly. Write to us at hello@fettlemed.com.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
