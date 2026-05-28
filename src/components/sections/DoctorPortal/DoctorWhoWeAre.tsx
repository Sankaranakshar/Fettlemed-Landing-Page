import React from 'react';
import { FadeIn } from "@/components/common/FadeIn";

export function DoctorWhoWeAre() {
  return (
    <section className="py-16 md:py-20 bg-surface-50 border-b border-stone-100">
       <div className="container mx-auto px-4 md:px-8 max-w-4xl text-center">
          <FadeIn>
             <h2 className="text-3xl font-medium text-pine-900 tracking-tight mb-8">Who we are</h2>
             <div className="space-y-6 text-lg text-dim-2 font-medium leading-relaxed text-left md:text-center">
                <p>FettleMed is built by a team that has worked in Indian clinical environments — not a team that read about them.</p>
                <p>Every feature goes through clinical validation with Dr. Bhavani Sriram and Dr. Sriram Shankar before it ships. Not a checkbox — an active check against how a real consultation runs.</p>
                <p>If it adds a step to the doctor's workflow rather than removing one, it doesn't go live.</p>
                <p className="text-pine-900 font-medium text-xl mt-8">"We are not building for the doctor of the future. We are building for the doctor practicing in India today."</p>
                <p className="text-dim text-base mt-6">Dr. Sriram Shankar (MBBS, FRCS England, FAMS Singapore, Senior Consultant Cardiothoracic Surgeon) and Dr. Bhavani Sriram (MBBS, MRCP UK, Community Health Advocate) are available to speak with pilot doctors directly.</p>
             </div>
          </FadeIn>
       </div>
    </section>
  );
}
