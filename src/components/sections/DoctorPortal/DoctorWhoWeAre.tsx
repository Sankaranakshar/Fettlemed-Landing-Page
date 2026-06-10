import React from 'react';
import { FadeIn } from "@/components/common/FadeIn";

export function DoctorWhoWeAre() {
  return (
    <section className="py-12 md:py-16 bg-surface-50 border-b border-stone-100">
      <div className="container mx-auto px-6 max-w-5xl">
        <FadeIn className="mb-8 text-center">
          <p className="text-xs font-semibold text-pine-500 uppercase tracking-widest mb-3">The team behind FettleMed</p>
          <h2 className="text-3xl md:text-4xl font-medium text-pine-900 tracking-tight">
            Built by doctors. For doctors.
          </h2>
          <p className="text-dim text-base font-medium mt-3 max-w-xl mx-auto leading-relaxed">
            Decades in practice across India, the UK, and Singapore. They lived the problem.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-5 mb-8">
          <FadeIn delay={0.1} className="bg-white border border-stone-200 p-6 rounded-2xl flex flex-col gap-4 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 bg-pine-900 rounded-xl flex items-center justify-center shrink-0">
                <span className="text-xs font-semibold text-pine-100 tracking-wide">SS</span>
              </div>
              <div>
                <h3 className="text-base font-semibold text-pine-900">Dr. Sriram Shankar</h3>
                <p className="text-pine-500 text-xs font-medium uppercase tracking-wide mt-0.5">MBBS · FRCS (England) · FAMS (Singapore)</p>
              </div>
            </div>
            <p className="text-dim-2 text-sm leading-relaxed">
              Nearly four decades as a Cardiothoracic Surgeon. Every incomplete file, every repeated test - FettleMed is the platform he wished existed when he was seeing 40 patients a day.
            </p>
          </FadeIn>

          <FadeIn delay={0.2} className="bg-white border border-stone-200 p-6 rounded-2xl flex flex-col gap-4 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 bg-pine-900 rounded-xl flex items-center justify-center shrink-0">
                <span className="text-xs font-semibold text-pine-100 tracking-wide">BS</span>
              </div>
              <div>
                <h3 className="text-base font-semibold text-pine-900">Dr. Bhavani Sriram</h3>
                <p className="text-pine-500 text-xs font-medium uppercase tracking-wide mt-0.5">MBBS · MRCP (UK) · Singapore Silent Hero</p>
              </div>
            </div>
            <p className="text-dim-2 text-sm leading-relaxed">
              A career in paediatrics and specialised care. When records don't travel with the patient, care suffers. She built FettleMed's consent model around the patients who most need continuity.
            </p>
          </FadeIn>
        </div>

        <FadeIn delay={0.3} className="bg-pine-900 rounded-2xl px-7 py-5 text-center">
          <p className="text-pine-100 font-medium text-base md:text-lg leading-relaxed">
            "We built this from inside the consultation room. We were there, watching it fail."
          </p>
          <p className="text-pine-400 text-sm font-medium mt-3">
            Both founders are available to speak with pilot doctors directly.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
