import React from 'react';
import { Lock, Fingerprint, Link2, ShieldCheck } from "lucide-react";
import { FadeIn } from "@/components/common/FadeIn";

export function DoctorConsent() {
  return (
    <section className="py-24 bg-pine-900 text-white relative overflow-hidden">
       <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-pine-800/40 rounded-full blur-[120px] pointer-events-none opacity-50 transform translate-x-1/3 -translate-y-1/3"></div>
       <div className="container mx-auto px-4 md:px-8 max-w-6xl relative z-10">
          <FadeIn className="mb-16">
             <h2 className="text-3xl md:text-5xl font-medium text-white tracking-tight text-balance">The consent model</h2>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
             <FadeIn delay={0.1} className="flex flex-col gap-6 p-8 rounded-3xl bg-pine-800/50 border border-pine-700 backdrop-blur-sm">
                <div className="w-12 h-12 bg-pine-700/80 rounded-full flex items-center justify-center">
                   <Lock className="w-5 h-5 text-pine-200" />
                </div>
                <div>
                   <h3 className="text-xl font-medium text-white mb-3 tracking-tight">1. What you keep</h3>
                   <p className="text-pine-200 leading-relaxed font-medium">Every record you create belongs to you. Your consultation notes, your prescriptions, your clinical observations — these are yours regardless of what the patient does with their account. This is legally grounded in the Indian Medical Council Regulations 2002.</p>
                </div>
             </FadeIn>

             <FadeIn delay={0.2} className="flex flex-col gap-6 p-8 rounded-3xl bg-pine-800/50 border border-pine-700 backdrop-blur-sm">
                <div className="w-12 h-12 bg-pine-700/80 rounded-full flex items-center justify-center">
                   <Fingerprint className="w-5 h-5 text-pine-200" />
                </div>
                <div>
                   <h3 className="text-xl font-medium text-white mb-3 tracking-tight">2. What the patient controls</h3>
                   <p className="text-pine-200 leading-relaxed font-medium">Patients decide whether to share their broader health profile with you — records from other doctors, uploaded lab reports, their history outside your clinic. They can grant per consultation access, for a set period, or indefinitely. They can revoke access anytime.</p>
                </div>
             </FadeIn>

             <FadeIn delay={0.3} className="flex flex-col gap-6 p-8 rounded-3xl bg-pine-800/50 border border-pine-700 backdrop-blur-sm">
                <div className="w-12 h-12 bg-pine-700/80 rounded-full flex items-center justify-center">
                   <Link2 className="w-5 h-5 text-pine-200" />
                </div>
                <div>
                   <h3 className="text-xl font-medium text-white mb-3 tracking-tight">3. Why this is better for you</h3>
                   <p className="text-pine-200 leading-relaxed font-medium">When a patient shares their full profile with you, you make better decisions. You see the full picture — not just the fragment they remembered to mention. You never have to ask a patient to bring reports again.</p>
                </div>
             </FadeIn>

             <FadeIn delay={0.4} className="flex flex-col gap-6 p-8 rounded-3xl bg-pine-800/50 border border-pine-700 backdrop-blur-sm">
                <div className="w-12 h-12 bg-pine-700/80 rounded-full flex items-center justify-center">
                   <ShieldCheck className="w-5 h-5 text-pine-200" />
                </div>
                <div>
                   <h3 className="text-xl font-medium text-white mb-3 tracking-tight">4. The audit trail</h3>
                   <p className="text-pine-200 leading-relaxed font-medium">Every access to a patient's records is logged. You and the patient can both see who accessed what and when. This protects you as much as it protects the patient.</p>
                </div>
             </FadeIn>
          </div>
       </div>
    </section>
  );
}
