import React from 'react';
import { Laptop2 } from "lucide-react";
import { FadeIn } from "@/components/common/FadeIn";

export function ClinicFrontDesk() {
  return (
    <section className="py-16 md:py-20 bg-white border-b border-stone-100">
       <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <FadeIn className="text-center mb-10">
             <h2 className="text-3xl md:text-5xl font-medium text-pine-900 tracking-tight text-balance">Ready on day one. No software experience needed.</h2>
          </FadeIn>

          <div className="grid gap-6">
             <FadeIn delay={0.1} className="p-8 md:p-10 rounded-3xl bg-surface-50 border border-stone-100 flex flex-col md:flex-row gap-8 items-start text-left">
                <div className="w-16 h-16 bg-white shrink-0 rounded-2xl shadow-sm border border-stone-200 flex items-center justify-center">
                   <Laptop2 className="w-8 h-8 text-pine-600" />
                </div>
                <div className="space-y-6 text-lg text-dim-2 font-medium leading-relaxed">
                   <div>
                      <p className="text-pine-900 font-medium mb-1">No tech background required.</p>
                      <p>FettleMed is built for staff who have never used clinic software. The most common front desk tasks take fewer steps on FettleMed than the paper process they're already using.</p>
                   </div>
                   <div>
                      <p className="text-pine-900 font-medium mb-1">Works on what's already there.</p>
                      <p>No new hardware. No new devices. Works on the tablet or computer already at the front desk. Setup doesn't require a technician, or a day off.</p>
                   </div>
                   <div>
                      <p className="text-pine-900 font-medium mb-1">Mistakes are easy to correct.</p>
                      <p>Nothing is irreversible. Errors can be fixed, records updated. No one is one wrong click away from a permanent problem.</p>
                   </div>
                   <p className="text-dim font-medium">Works for a clinic with one front desk person. Works for a clinic with five.</p>
                </div>
             </FadeIn>
          </div>
       </div>
    </section>
  );
}
