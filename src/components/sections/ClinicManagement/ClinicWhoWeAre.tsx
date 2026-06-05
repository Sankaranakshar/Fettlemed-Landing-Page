import React from 'react';
import { User } from "lucide-react";
import { FadeIn } from "@/components/common/FadeIn";

export function ClinicWhoWeAre() {
  return (
    <section className="py-12 md:py-16 bg-surface-50 border-b border-stone-100">
      <div className="container mx-auto px-4 md:px-8 max-w-5xl">
        <FadeIn className="mb-8 text-center">
          <p className="text-xs font-semibold text-pine-500 uppercase tracking-widest mb-3">The team behind FettleMed</p>
          <h2 className="text-3xl md:text-4xl font-medium text-pine-900 tracking-tight">Built by people who know what a clinic actually runs on.</h2>
          <p className="text-dim text-base font-medium mt-3 max-w-xl mx-auto leading-relaxed">
            Both founders have spent careers across high-volume clinical environments. They know that a clinic's biggest operational problem is not technology. It is time. Every feature we ship has to earn its place in a day where there is no spare minute.
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
              Running a cardiothoracic surgery practice at scale means managing patient flows, staff coordination, and administrative load alongside clinical work. He has watched firsthand how much of a senior clinician's time disappears into tasks that should have been automated years ago. FettleMed is built to give that time back.
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
              Working across institutions that serve complex, high-need patients means relying on clinic staff who are already stretched. She built FettleMed's clinic features around the person managing the front desk, the phone queue, and walk-in registrations. All at the same time.
            </p>
          </FadeIn>
        </div>

        <FadeIn delay={0.3} className="bg-pine-900 rounded-2xl px-7 py-5 text-center">
          <p className="text-pine-100 font-medium text-base md:text-lg leading-relaxed">
            "A clinic runs on people, not software. Our job is to make the software invisible. So your staff can focus on the patients."
          </p>
          <p className="text-pine-400 text-sm font-medium mt-3">
            Both founders are available to speak with pilot clinics directly.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
