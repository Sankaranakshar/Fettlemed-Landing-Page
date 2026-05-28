import React from 'react';
import { CheckCircle2 } from "lucide-react";
import { FadeIn } from "@/components/common/FadeIn";

const items = [
  {
    heading: "Patient volume",
    body: "today, this week, this month, broken down by doctor. Know exactly how the clinic is performing without asking anyone.",
  },
  {
    heading: "Billing versus collections",
    body: "see what was invoiced and what was actually received, in the same view. No end-of-month reconciliation surprises.",
  },
  {
    heading: "Appointment slot performance",
    body: "which hours are consistently full, which are consistently empty. Make scheduling decisions based on your own data, not guesswork.",
  },
  {
    heading: "No-show rates",
    body: "tracked automatically. Use the data to adjust reminder timing, overbooking policy, or slot allocation.",
  },
  {
    heading: "Full interaction records",
    body: "every patient visit documented. If a complaint ever arises, the record of what happened, when, and by whom is complete and verifiable.",
  },
];

export function ClinicOwnerView() {
  return (
    <section className="py-16 md:py-20 bg-pine-900 text-white relative overflow-hidden flex flex-col items-center">
       <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-pine-800/40 rounded-full blur-[120px] pointer-events-none opacity-50 transform translate-x-1/3 -translate-y-1/3"></div>
       <div className="container mx-auto px-4 md:px-8 max-w-4xl relative z-10">
          <FadeIn className="text-center mb-6">
             <h2 className="text-3xl md:text-5xl font-medium text-white tracking-tight text-balance">What you see, from anywhere, at any time.</h2>
          </FadeIn>
          <FadeIn className="text-center mb-12">
             <p className="text-pine-200 text-lg font-medium leading-relaxed max-w-2xl mx-auto">Every number you currently have to compile manually, available in one dashboard, updated in real time.</p>
          </FadeIn>

          <div className="bg-pine-800/50 border border-pine-700/50 rounded-3xl p-8 md:p-12 backdrop-blur-sm">
             <ul className="text-lg font-medium leading-relaxed space-y-6">
                {items.map(({ heading, body }, i) => (
                   <li key={i} className="flex gap-4">
                      <CheckCircle2 className="w-6 h-6 text-pine-400 shrink-0 mt-0.5" />
                      <span><span className="text-white">{heading} —</span> <span className="text-pine-100">{body}</span></span>
                   </li>
                ))}
             </ul>

             <div className="mt-12 p-6 bg-white border border-stone-200 rounded-2xl text-center">
                <p className="text-pine-900 font-medium text-xl md:text-2xl">Every metric above lives in one dashboard. No spreadsheets. No asking the front desk. No waiting until month end.</p>
             </div>
          </div>
       </div>
    </section>
  );
}
