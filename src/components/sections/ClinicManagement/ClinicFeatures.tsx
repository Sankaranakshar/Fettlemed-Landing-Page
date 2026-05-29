import React from 'react';
import { CalendarDays, Users2, WalletCards, ShieldCheck } from "lucide-react";
import { FadeIn } from "@/components/common/FadeIn";

export function ClinicFeatures() {
  return (
    <section id="platform" className="py-16 md:py-20 bg-surface-50 border-b border-stone-100 scroll-mt-24">
       <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <FadeIn className="text-center mb-10 max-w-3xl mx-auto">
             <h2 className="text-3xl md:text-5xl font-medium text-pine-900 tracking-tight mb-6 text-balance">Your clinic's operations, seamlessly automated on day one.</h2>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 auto-rows-fr">
             <FadeIn delay={0.1} className="bg-white border border-stone-200 rounded-3xl p-8 lg:p-10 shadow-sm flex flex-col h-full hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-pine-50 rounded-2xl flex items-center justify-center mb-6 border border-pine-100">
                   <CalendarDays className="w-7 h-7 text-pine-700" />
                </div>
                <h3 className="text-2xl font-medium text-pine-900 mb-4 tracking-tight text-balance">Appointments &amp; Queues</h3>
                <ul className="text-dim-2 leading-relaxed font-medium text-lg space-y-3 list-disc pl-5">
                   <li>Patients book online or through the front desk, your choice.</li>
                   <li>Automated reminders sent before every appointment, no-shows drop.</li>
                   <li>Booking clashes are impossible, the system prevents them at the point of scheduling.</li>
                   <li>Real-time queue view from any screen. No one has to walk to the waiting room to check.</li>
                </ul>
             </FadeIn>

             <FadeIn delay={0.2} className="bg-white border border-stone-200 rounded-3xl p-8 lg:p-10 shadow-sm flex flex-col h-full hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-pine-50 rounded-2xl flex items-center justify-center mb-6 border border-pine-100">
                   <Users2 className="w-7 h-7 text-pine-700" />
                </div>
                <h3 className="text-2xl font-medium text-pine-900 mb-4 tracking-tight text-balance">Registration &amp; Records</h3>
                <ul className="text-dim-2 leading-relaxed font-medium text-lg space-y-3 list-disc pl-5">
                   <li>Every patient registered once, details, records, and history attached to their profile permanently.</li>
                   <li>Returning patients pulled up in seconds, name, history, last visit, current medications.</li>
                   <li>No duplicate registrations. No missing files. No starting from scratch.</li>
                   <li>ABHA ID verification built into the registration flow.</li>
                </ul>
             </FadeIn>

             <FadeIn delay={0.3} className="bg-white border border-stone-200 rounded-3xl p-8 lg:p-10 shadow-sm flex flex-col h-full hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-pine-50 rounded-2xl flex items-center justify-center mb-6 border border-pine-100">
                   <WalletCards className="w-7 h-7 text-pine-700" />
                </div>
                <h3 className="text-2xl font-medium text-pine-900 mb-4 tracking-tight text-balance">Billing &amp; Financial Visibility</h3>
                <ul className="text-dim-2 leading-relaxed font-medium text-lg space-y-3 list-disc pl-5">
                   <li>Invoices generated at the point of consultation, not compiled at the end of the day.</li>
                   <li>GST-compliant billing built in, no separate accounting step.</li>
                   <li>Owner dashboard: daily collections, monthly summaries, revenue by doctor.</li>
                   <li>No spreadsheets. No end-of-month reconciliation surprises.</li>
                </ul>
             </FadeIn>

             <FadeIn delay={0.4} className="bg-white border border-stone-200 rounded-3xl p-8 lg:p-10 shadow-sm flex flex-col h-full hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-pine-50 rounded-2xl flex items-center justify-center mb-6 border border-pine-100">
                   <ShieldCheck className="w-7 h-7 text-pine-700" />
                </div>
                <h3 className="text-2xl font-medium text-pine-900 mb-4 tracking-tight text-balance">Staff &amp; Access, everyone sees exactly what they should.</h3>
                <ul className="text-dim-2 leading-relaxed font-medium text-lg space-y-3 list-disc pl-5">
                   <li>Front desk: appointments and patient registration.</li>
                   <li>Billing staff: invoices and payment records.</li>
                   <li>Doctors: clinical records and consultation notes.</li>
                   <li>Owner: everything, across all staff, all doctors, all days.</li>
                </ul>
                <div className="bg-pine-50 rounded-xl p-4 mt-5 text-pine-800 text-sm font-medium leading-relaxed border border-pine-100">
                   Role-based, time-bound, and per-clinic access — adjust on the fly as your team changes. No one sees what isn't theirs.
                </div>
             </FadeIn>
          </div>
       </div>
    </section>
  );
}
