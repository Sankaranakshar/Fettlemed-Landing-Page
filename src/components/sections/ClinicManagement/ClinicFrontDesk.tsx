import React from 'react';
import { Laptop2 } from "lucide-react";
import { FadeIn } from "@/components/common/FadeIn";

export function ClinicFrontDesk() {
  return (
    <section className="py-24 bg-white border-b border-stone-100">
       <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <FadeIn className="text-center mb-16">
             <h2 className="text-3xl md:text-5xl font-bold text-pine-900 tracking-tight text-balance">For whoever runs the front desk</h2>
          </FadeIn>

          <div className="grid gap-6">
             <FadeIn delay={0.1} className="p-8 md:p-10 rounded-3xl bg-surface-50 border border-stone-100 flex flex-col md:flex-row gap-8 items-center md:items-start text-center md:text-left">
                <div className="w-16 h-16 bg-white shrink-0 rounded-2xl shadow-sm border border-stone-200 flex items-center justify-center">
                   <Laptop2 className="w-8 h-8 text-pine-600" />
                </div>
                <div className="space-y-4 text-lg text-stone-600 font-medium leading-relaxed">
                   <p>FettleMed is built for staff who have never used clinic software before — not for teams with tech training. The most common front desk tasks take fewer steps than the paper process they currently use.</p>
                   <p>Works on the tablet or computer already at the front desk — no new hardware. Staff can be onboarded in one session without disrupting the clinic's day.</p>
                   <p>Errors can be corrected. Nothing is permanent and irreversible. Works for clinics with one front desk person and clinics with five.</p>
                </div>
             </FadeIn>
          </div>
       </div>
    </section>
  );
}
