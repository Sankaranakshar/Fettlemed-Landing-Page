import React from 'react';
import { CalendarDays, Users2, WalletCards, ShieldCheck } from "lucide-react";
import { FadeIn } from "@/components/common/FadeIn";

export function ClinicFeatures() {
  return (
    <section id="platform" className="py-16 md:py-20 bg-surface-50 border-b border-stone-100 scroll-mt-24">
       <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <FadeIn className="text-center mb-10 max-w-3xl mx-auto">
             <h2 className="text-3xl md:text-5xl font-medium text-pine-900 tracking-tight mb-6 text-balance">What changes on day one.</h2>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 auto-rows-fr">
             <FadeIn delay={0.1} className="bg-white border border-stone-200 rounded-3xl p-8 lg:p-10 shadow-sm flex flex-col h-full hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-pine-50 rounded-2xl flex items-center justify-center mb-6 border border-pine-100">
                   <CalendarDays className="w-7 h-7 text-pine-700" />
                </div>
                <h3 className="text-2xl font-medium text-pine-900 mb-3 tracking-tight text-balance">No double-bookings. No queue confusion. No phone calls to confirm.</h3>
                <p className="text-dim text-base font-medium leading-relaxed mb-5">Appointments are managed in one place. Front desk walk-ins and online bookings land in the same queue, with no conflicts.</p>
                <ul className="text-dim-2 font-medium text-base space-y-3">
                   <li className="flex items-start gap-2"><span className="text-pine-600 font-bold mt-1 shrink-0">•</span>Online booking or front-desk scheduling, the slot is confirmed either way</li>
                   <li className="flex items-start gap-2"><span className="text-pine-600 font-bold mt-1 shrink-0">•</span>Automated reminders sent before every appointment</li>
                   <li className="flex items-start gap-2"><span className="text-pine-600 font-bold mt-1 shrink-0">•</span>Real-time queue view from any screen in the clinic</li>
                </ul>
             </FadeIn>

             <FadeIn delay={0.2} className="bg-white border border-stone-200 rounded-3xl p-8 lg:p-10 shadow-sm flex flex-col h-full hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-pine-50 rounded-2xl flex items-center justify-center mb-6 border border-pine-100">
                   <Users2 className="w-7 h-7 text-pine-700" />
                </div>
                <h3 className="text-2xl font-medium text-pine-900 mb-3 tracking-tight text-balance">Every patient registered once. Their full history attached, not scattered.</h3>
                <p className="text-dim text-base font-medium leading-relaxed mb-5">Returning patients are pulled up in seconds: name, history, last visit, current medications. No re-entering. No starting from scratch.</p>
                <ul className="text-dim-2 font-medium text-base space-y-3">
                   <li className="flex items-start gap-2"><span className="text-pine-600 font-bold mt-1 shrink-0">•</span>Digital registration with full patient profile from the first visit</li>
                   <li className="flex items-start gap-2"><span className="text-pine-600 font-bold mt-1 shrink-0">•</span>Diagnoses, medications, allergies. Visible before the consultation begins.</li>
                   <li className="flex items-start gap-2"><span className="text-pine-600 font-bold mt-1 shrink-0">•</span>ABHA ID linked at registration</li>
                </ul>
             </FadeIn>

             <FadeIn delay={0.3} className="bg-white border border-stone-200 rounded-3xl p-8 lg:p-10 shadow-sm flex flex-col h-full hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-pine-50 rounded-2xl flex items-center justify-center mb-6 border border-pine-100">
                   <WalletCards className="w-7 h-7 text-pine-700" />
                </div>
                <h3 className="text-2xl font-medium text-pine-900 mb-3 tracking-tight text-balance">Invoices at the point of care, not compiled at the end of the day.</h3>
                <p className="text-dim text-base font-medium leading-relaxed mb-5">Billing happens during or right after the consultation. Collections are tracked in real time. No spreadsheets, no month-end surprises.</p>
                <ul className="text-dim-2 font-medium text-base space-y-3">
                   <li className="flex items-start gap-2"><span className="text-pine-600 font-bold mt-1 shrink-0">•</span>GST-compliant invoicing, arriving during the pilot</li>
                   <li className="flex items-start gap-2"><span className="text-pine-600 font-bold mt-1 shrink-0">•</span>Billing versus collections in the same view</li>
                   <li className="flex items-start gap-2"><span className="text-pine-600 font-bold mt-1 shrink-0">•</span>Daily and monthly revenue reports without any manual input</li>
                </ul>
             </FadeIn>

             <FadeIn delay={0.4} className="bg-white border border-stone-200 rounded-3xl p-8 lg:p-10 shadow-sm flex flex-col h-full hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-pine-50 rounded-2xl flex items-center justify-center mb-6 border border-pine-100">
                   <ShieldCheck className="w-7 h-7 text-pine-700" />
                </div>
                <h3 className="text-2xl font-medium text-pine-900 mb-3 tracking-tight text-balance">Everyone sees exactly what they should. Nothing more.</h3>
                <p className="text-dim text-base font-medium leading-relaxed mb-5">Clinical notes are visible only to doctors. Billing staff see financial records. The owner sees everything across all staff and all days.</p>
                <ul className="text-dim-2 font-medium text-base space-y-3">
                   <li className="flex items-start gap-2"><span className="text-pine-600 font-bold mt-1 shrink-0">•</span>Role-based access: front desk, billing, doctor, and owner each see their own view</li>
                   <li className="flex items-start gap-2"><span className="text-pine-600 font-bold mt-1 shrink-0">•</span>Adjust permissions on the fly as your team changes</li>
                   <li className="flex items-start gap-2"><span className="text-pine-600 font-bold mt-1 shrink-0">•</span>Every access logged with a timestamp</li>
                </ul>
             </FadeIn>
          </div>
       </div>
    </section>
  );
}
