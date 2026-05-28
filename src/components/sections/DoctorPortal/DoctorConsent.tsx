import React from 'react';
import { Lock, Fingerprint, Link2, ShieldCheck } from "lucide-react";
import { FadeIn } from "@/components/common/FadeIn";

export function DoctorConsent() {
  return (
    <section className="py-16 md:py-20 bg-pine-900 text-white relative overflow-hidden">
       <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-pine-800/40 rounded-full blur-[120px] pointer-events-none opacity-50 transform translate-x-1/3 -translate-y-1/3"></div>
       <div className="container mx-auto px-4 md:px-8 max-w-6xl relative z-10">
          <FadeIn className="mb-6">
             <h2 className="text-3xl md:text-5xl font-medium text-white tracking-tight text-balance">Who owns what, and why it matters for you.</h2>
          </FadeIn>
          <FadeIn className="mb-10">
             <p className="text-pine-200 text-lg font-medium leading-relaxed max-w-3xl">You keep everything you create. Patients control what they share beyond that. Both of you can see every access, every time.</p>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
             <FadeIn delay={0.1} className="flex flex-col gap-6 p-8 rounded-3xl bg-pine-800/50 border border-pine-700 backdrop-blur-sm">
                <div className="w-12 h-12 bg-pine-700/80 rounded-full flex items-center justify-center">
                   <Lock className="w-5 h-5 text-pine-200" />
                </div>
                <div>
                   <h3 className="text-xl font-medium text-white mb-3 tracking-tight">1. The records you create are yours.</h3>
                   <p className="text-pine-200 leading-relaxed font-medium mb-4">Your notes, prescriptions, and observations belong to you — as they always have. Consistent with Indian Medical Council Regulations 2002.</p>
                   <ul className="space-y-2 text-pine-200 font-medium">
                      <li className="flex items-start gap-2.5"><span className="w-1.5 h-1.5 rounded-full bg-pine-400 mt-2 shrink-0"></span>FettleMed stores and structures your records, nothing more</li>
                      <li className="flex items-start gap-2.5"><span className="w-1.5 h-1.5 rounded-full bg-pine-400 mt-2 shrink-0"></span>Nothing changes about who your documentation belongs to</li>
                      <li className="flex items-start gap-2.5"><span className="w-1.5 h-1.5 rounded-full bg-pine-400 mt-2 shrink-0"></span>You leave with everything you created, always</li>
                   </ul>
                </div>
             </FadeIn>

             <FadeIn delay={0.2} className="flex flex-col gap-6 p-8 rounded-3xl bg-pine-800/50 border border-pine-700 backdrop-blur-sm">
                <div className="w-12 h-12 bg-pine-700/80 rounded-full flex items-center justify-center">
                   <Fingerprint className="w-5 h-5 text-pine-200" />
                </div>
                <div>
                   <h3 className="text-xl font-medium text-white mb-3 tracking-tight">2. Patients decide what they share with you.</h3>
                   <p className="text-pine-200 leading-relaxed font-medium mb-4">Patients control whether you see records from other doctors, previous clinics, or their full history.</p>
                   <ul className="space-y-2 text-pine-200 font-medium">
                      <li className="flex items-start gap-2.5"><span className="w-1.5 h-1.5 rounded-full bg-pine-400 mt-2 shrink-0"></span>Share for one consultation, a fixed period, or ongoing</li>
                      <li className="flex items-start gap-2.5"><span className="w-1.5 h-1.5 rounded-full bg-pine-400 mt-2 shrink-0"></span>They can revoke at any time — you'll be notified immediately</li>
                      <li className="flex items-start gap-2.5"><span className="w-1.5 h-1.5 rounded-full bg-pine-400 mt-2 shrink-0"></span>You never have unauthorised access. That protects you as much as them.</li>
                   </ul>
                </div>
             </FadeIn>

             <FadeIn delay={0.3} className="flex flex-col gap-6 p-8 rounded-3xl bg-pine-800/50 border border-pine-700 backdrop-blur-sm">
                <div className="w-12 h-12 bg-pine-700/80 rounded-full flex items-center justify-center">
                   <Link2 className="w-5 h-5 text-pine-200" />
                </div>
                <div>
                   <h3 className="text-xl font-medium text-white mb-3 tracking-tight">3. Unified clinical context: practicing without blind spots.</h3>
                   <p className="text-pine-200 leading-relaxed font-medium mb-4">When a patient shares their full profile, you see what every other doctor who treated them saw — no gaps, no guessing.</p>
                   <ul className="space-y-2 text-pine-200 font-medium">
                      <li className="flex items-start gap-2.5"><span className="w-1.5 h-1.5 rounded-full bg-pine-400 mt-2 shrink-0"></span>No asking what they were prescribed six months ago</li>
                      <li className="flex items-start gap-2.5"><span className="w-1.5 h-1.5 rounded-full bg-pine-400 mt-2 shrink-0"></span>No guessing at drug interactions from another clinic</li>
                      <li className="flex items-start gap-2.5"><span className="w-1.5 h-1.5 rounded-full bg-pine-400 mt-2 shrink-0"></span>No repeating a test from three weeks ago</li>
                   </ul>
                </div>
             </FadeIn>

             <FadeIn delay={0.4} className="flex flex-col gap-6 p-8 rounded-3xl bg-pine-800/50 border border-pine-700 backdrop-blur-sm">
                <div className="w-12 h-12 bg-pine-700/80 rounded-full flex items-center justify-center">
                   <ShieldCheck className="w-5 h-5 text-pine-200" />
                </div>
                <div>
                   <h3 className="text-xl font-medium text-white mb-3 tracking-tight">4. Every access is logged. For both of you.</h3>
                   <p className="text-pine-200 leading-relaxed font-medium mb-4">Every access is recorded with a timestamp and user identifier. You can see the full audit trail. So can the patient.</p>
                   <ul className="space-y-2 text-pine-200 font-medium mb-4">
                      <li className="flex items-start gap-2.5"><span className="w-1.5 h-1.5 rounded-full bg-pine-400 mt-2 shrink-0"></span>Logged each time records are accessed, by anyone</li>
                      <li className="flex items-start gap-2.5"><span className="w-1.5 h-1.5 rounded-full bg-pine-400 mt-2 shrink-0"></span>If a complaint arises, what you had access to is documented and verifiable</li>
                      <li className="flex items-start gap-2.5"><span className="w-1.5 h-1.5 rounded-full bg-pine-400 mt-2 shrink-0"></span>Visible to you and to the patient, always</li>
                   </ul>
                   <p className="text-pine-100 font-medium">This is not just a privacy feature. It is professional protection.</p>
                </div>
             </FadeIn>
          </div>
       </div>
    </section>
  );
}
