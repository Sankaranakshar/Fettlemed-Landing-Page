import React from 'react';
import { CalendarDays, Users2, WalletCards, ShieldCheck } from "lucide-react";
import { FadeIn } from "@/components/common/FadeIn";

export function ClinicFeatures() {
  return (
    <section className="py-24 bg-surface-50 border-b border-stone-100">
       <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <FadeIn className="text-center mb-16 max-w-3xl mx-auto">
             <h2 className="text-3xl md:text-5xl font-medium text-pine-900 tracking-tight mb-6 text-balance">What the platform handles</h2>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 auto-rows-fr">
             <FadeIn delay={0.1} className="bg-white border border-stone-200 rounded-3xl p-8 lg:p-10 shadow-sm flex flex-col h-full hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-pine-50 rounded-2xl flex items-center justify-center mb-6 border border-pine-100">
                   <CalendarDays className="w-7 h-7 text-pine-700" />
                </div>
                <h3 className="text-2xl font-medium text-pine-900 mb-4 tracking-tight text-balance">Appointments & Queues</h3>
                <p className="text-stone-600 leading-relaxed font-medium text-lg">
                   Patients book online or through the front desk. Automated reminders go out before every appointment. No-shows are flagged. Clashes don't happen. A real-time queue view means anyone managing the clinic can see patient flow without walking to the waiting room.
                </p>
             </FadeIn>

             <FadeIn delay={0.2} className="bg-white border border-stone-200 rounded-3xl p-8 lg:p-10 shadow-sm flex flex-col h-full hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-pine-50 rounded-2xl flex items-center justify-center mb-6 border border-pine-100">
                   <Users2 className="w-7 h-7 text-pine-700" />
                </div>
                <h3 className="text-2xl font-medium text-pine-900 mb-4 tracking-tight text-balance">Registration & Records</h3>
                <p className="text-stone-600 leading-relaxed font-medium text-lg">
                   Every patient is registered once. Their details, their history, their records — all in one place and findable in seconds. Returning patients are pulled up immediately. No duplicate registrations. No missing files.
                </p>
             </FadeIn>

             <FadeIn delay={0.3} className="bg-white border border-stone-200 rounded-3xl p-8 lg:p-10 shadow-sm flex flex-col h-full hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-pine-50 rounded-2xl flex items-center justify-center mb-6 border border-pine-100">
                   <WalletCards className="w-7 h-7 text-pine-700" />
                </div>
                <h3 className="text-2xl font-medium text-pine-900 mb-4 tracking-tight text-balance">Billing & Financial Visibility</h3>
                <p className="text-stone-600 leading-relaxed font-medium text-lg">
                   Invoices generated at the point of consultation, not reconstructed at the end of the day. GST-compliant billing. The owner dashboard shows daily collections, monthly summaries, and billing by doctor — without anyone compiling them manually.
                </p>
             </FadeIn>

             <FadeIn delay={0.4} className="bg-white border border-stone-200 rounded-3xl p-8 lg:p-10 shadow-sm flex flex-col h-full hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-pine-50 rounded-2xl flex items-center justify-center mb-6 border border-pine-100">
                   <ShieldCheck className="w-7 h-7 text-pine-700" />
                </div>
                <h3 className="text-2xl font-medium text-pine-900 mb-4 tracking-tight text-balance">Staff & Access Control</h3>
                <p className="text-stone-600 leading-relaxed font-medium text-lg">
                   Each staff member sees only what their role requires. Front desk sees appointments and registration. Billing staff sees invoices. Doctors see clinical records. The clinic owner sees everything. Set role-based, time-bound, and per-clinic access — adjust on the fly as your team changes.
                </p>
             </FadeIn>
          </div>
       </div>
    </section>
  );
}
