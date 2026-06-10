import React from 'react';
import { CalendarDays, Users2, WalletCards, ShieldCheck } from "lucide-react";
import { FadeIn } from "@/components/common/FadeIn";

export function ClinicFeatures() {
  return (
    <section id="platform" className="py-12 md:py-16 bg-surface-50 border-b border-stone-100 scroll-mt-24">
       <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <FadeIn className="text-center mb-10 max-w-3xl mx-auto">
             <h2 className="text-3xl md:text-5xl font-medium text-pine-900 tracking-tight mb-6 text-balance">What changes on day one.</h2>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 auto-rows-fr">
             <FadeIn delay={0.1} className="bg-white border border-stone-200 rounded-3xl p-8 lg:p-10 shadow-sm flex flex-col h-full hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-pine-50 rounded-2xl flex items-center justify-center mb-6 border border-pine-100">
                   <CalendarDays className="w-7 h-7 text-pine-700" />
                </div>
                <h3 className="text-2xl font-medium text-pine-900 mb-3 tracking-tight text-balance">No double-bookings.</h3>
                <p className="text-dim text-base leading-relaxed mb-5">Walk-ins and online bookings, one queue, zero conflicts.</p>
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
                <h3 className="text-2xl font-medium text-pine-900 mb-3 tracking-tight text-balance">Registered once.</h3>
                <p className="text-dim text-base leading-relaxed mb-5">Returning patients pulled up in seconds - history attached.</p>
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
                <h3 className="text-2xl font-medium text-pine-900 mb-3 tracking-tight text-balance">Billing at the point of care.</h3>
                <p className="text-dim text-base leading-relaxed mb-5">Invoiced and collected during the visit. No month-end surprises.</p>
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
                <h3 className="text-2xl font-medium text-pine-900 mb-3 tracking-tight text-balance">Everyone sees their lane.</h3>
                <p className="text-dim text-base leading-relaxed mb-5">Front desk, billing, doctor, owner - each sees only their view.</p>
                <ul className="text-dim-2 font-medium text-base space-y-3">
                   <li className="flex items-start gap-2"><span className="text-pine-600 font-bold mt-1 shrink-0">•</span>Role-based access: front desk, billing, doctor, and owner each see their own view</li>
                   <li className="flex items-start gap-2"><span className="text-pine-600 font-bold mt-1 shrink-0">•</span>Adjust permissions on the fly as your team changes</li>
                   <li className="flex items-start gap-2"><span className="text-pine-600 font-bold mt-1 shrink-0">•</span>Every access logged with a timestamp</li>
                </ul>
             </FadeIn>
          </div>

          {/* Staff readiness strip - absorbed from the former front desk section */}
          <FadeIn delay={0.2} className="mt-6 bg-white border border-stone-200 rounded-2xl px-6 py-5 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-8 text-center">
             <p className="text-pine-900 text-base font-medium">If your staff can use a smartphone, they can use FettleMed.</p>
             <div className="hidden sm:block w-px h-6 bg-stone-200" />
             <p className="text-dim text-sm">No new hardware. Most front-desk tasks learned in one session.</p>
          </FadeIn>
       </div>
    </section>
  );
}
