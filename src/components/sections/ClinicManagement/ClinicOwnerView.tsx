import React from 'react';
import { CheckCircle2 } from "lucide-react";
import { FadeIn } from "@/components/common/FadeIn";

export function ClinicOwnerView() {
  return (
    <section className="py-24 bg-pine-900 text-white relative overflow-hidden flex flex-col items-center">
       <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-pine-800/40 rounded-full blur-[120px] pointer-events-none opacity-50 transform translate-x-1/3 -translate-y-1/3"></div>
       <div className="container mx-auto px-4 md:px-8 max-w-4xl relative z-10">
          <FadeIn className="text-center mb-16">
             <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight text-balance">What the owner sees</h2>
          </FadeIn>
          
          <div className="bg-pine-800/50 border border-pine-700/50 rounded-3xl p-8 md:p-12 backdrop-blur-sm">
             <ul className="text-lg text-pine-100 font-medium leading-relaxed space-y-6">
                <li className="flex gap-4"><CheckCircle2 className="w-6 h-6 text-pine-400 shrink-0 mt-0.5" /> <span>Patient volume for today, this week, and this month, broken down by doctor if the clinic has more than one.</span></li>
                <li className="flex gap-4"><CheckCircle2 className="w-6 h-6 text-pine-400 shrink-0 mt-0.5" /> <span>Billing versus collections, with no more end-of-month surprises.</span></li>
                <li className="flex gap-4"><CheckCircle2 className="w-6 h-6 text-pine-400 shrink-0 mt-0.5" /> <span>Appointment slot performance showing which times are full and which are consistently empty.</span></li>
                <li className="flex gap-4"><CheckCircle2 className="w-6 h-6 text-pine-400 shrink-0 mt-0.5" /> <span>No-show rates, so decisions about reminders and scheduling can be made on data.</span></li>
                <li className="flex gap-4"><CheckCircle2 className="w-6 h-6 text-pine-400 shrink-0 mt-0.5" /> <span>A full record of every patient interaction — documentation that protects the clinic if a complaint arises.</span></li>
             </ul>
             
             <div className="mt-12 p-6 bg-white border border-stone-200 rounded-2xl text-center">
                <p className="text-pine-900 font-bold text-xl md:text-2xl">Make decisions based on your clinic's data, available to you in one click.</p>
             </div>
          </div>
       </div>
    </section>
  );
}
