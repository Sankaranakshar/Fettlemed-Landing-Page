import React from 'react';
import { User } from "lucide-react";
import { FadeIn } from "@/components/common/FadeIn";

export function ClinicWhoWeAre() {
  return (
    <section className="py-16 md:py-20 bg-surface-50 border-b border-stone-100">
       <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <FadeIn className="mb-8 text-center">
             <p className="text-xs font-semibold text-pine-500 uppercase tracking-widest mb-3">The team behind FettleMed</p>
             <h2 className="text-3xl md:text-4xl font-medium text-pine-900 tracking-tight">Who we are</h2>
             <p className="text-dim text-base font-medium mt-3 max-w-xl mx-auto leading-relaxed">
               Built by people who have spent time in Indian clinics — not a team that read about them. Every workflow is reviewed by practising healthcare professionals before it ships.
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
                      <p className="text-pine-500 text-xs font-medium uppercase tracking-wide mt-0.5">MBBS, FRCS (England), FAMS (Singapore)</p>
                   </div>
                </div>
                <p className="text-dim-2 text-sm font-medium leading-relaxed">
                  Senior Consultant Cardiothoracic Surgeon with nearly four decades of experience across leading hospitals in Singapore and Southeast Asia. Pioneer in minimally invasive cardiac surgery and instrumental in establishing paediatric heart surgery programmes.
                </p>
             </FadeIn>

             <FadeIn delay={0.2} className="bg-white border border-stone-200 p-6 rounded-2xl flex flex-col gap-4 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3">
                   <div className="w-11 h-11 bg-pine-50 rounded-xl flex items-center justify-center shrink-0 border border-pine-100">
                      <User className="w-5 h-5 text-pine-700" />
                   </div>
                   <div>
                      <h3 className="text-base font-semibold text-pine-900">Dr. Bhavani Sriram</h3>
                      <p className="text-pine-500 text-xs font-medium uppercase tracking-wide mt-0.5">MBBS, MRCP (UK) (Paediatrics)</p>
                   </div>
                </div>
                <p className="text-dim-2 text-sm font-medium leading-relaxed">
                  Recognised as a Singapore Silent Hero, she is a leading advocate for inclusive healthcare and a pioneer in specialised medical services for people with intellectual and developmental disabilities.
                </p>
             </FadeIn>
          </div>

          <FadeIn delay={0.3} className="bg-pine-900 rounded-2xl px-7 py-5 text-center">
             <p className="text-pine-100 font-medium text-base md:text-lg leading-relaxed">
               "A clinic runs on people. Every feature we build asks one question: does this reduce a task for the clinic, or add one? If the answer is adds one, it doesn't ship."
             </p>
             <p className="text-pine-400 text-sm font-medium mt-3">
               Both founders are available to speak with pilot clinics directly.
             </p>
          </FadeIn>
       </div>
    </section>
  );
}
