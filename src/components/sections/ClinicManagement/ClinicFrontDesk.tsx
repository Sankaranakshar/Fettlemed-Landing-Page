import React from 'react';
import { Laptop2, ShieldOff, RotateCcw } from "lucide-react";
import { FadeIn } from "@/components/common/FadeIn";

export function ClinicFrontDesk() {
  return (
    <section className="py-16 md:py-20 bg-white border-b border-stone-100">
       <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <FadeIn className="text-center mb-10">
             <h2 className="text-3xl md:text-5xl font-medium text-pine-900 tracking-tight text-balance">Ready on day one. No software experience needed.</h2>
          </FadeIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
             <FadeIn delay={0.1} className="p-8 rounded-3xl bg-surface-50 border border-stone-100 flex flex-col gap-5 hover:shadow-sm transition-shadow">
                <div className="w-12 h-12 bg-white rounded-2xl shadow-sm border border-stone-200 flex items-center justify-center shrink-0">
                   <Laptop2 className="w-6 h-6 text-pine-600" />
                </div>
                <div>
                   <p className="text-xs font-medium text-pine-600 uppercase tracking-widest mb-2">No tech background required</p>
                   <p className="text-dim-2 text-base font-medium leading-relaxed">Built for staff who have never used clinic software. The most common front desk tasks take fewer steps than the paper process they're already using.</p>
                </div>
             </FadeIn>

             <FadeIn delay={0.2} className="p-8 rounded-3xl bg-surface-50 border border-stone-100 flex flex-col gap-5 hover:shadow-sm transition-shadow">
                <div className="w-12 h-12 bg-white rounded-2xl shadow-sm border border-stone-200 flex items-center justify-center shrink-0">
                   <ShieldOff className="w-6 h-6 text-pine-600" />
                </div>
                <div>
                   <p className="text-xs font-medium text-pine-600 uppercase tracking-widest mb-2">Zero hardware dependency</p>
                   <p className="text-dim-2 text-base font-medium leading-relaxed">Works on the tablet or computer already at the front desk. No new devices, no technician, no day off for setup.</p>
                </div>
             </FadeIn>

             <FadeIn delay={0.3} className="p-8 rounded-3xl bg-surface-50 border border-stone-100 flex flex-col gap-5 hover:shadow-sm transition-shadow">
                <div className="w-12 h-12 bg-white rounded-2xl shadow-sm border border-stone-200 flex items-center justify-center shrink-0">
                   <RotateCcw className="w-6 h-6 text-pine-600" />
                </div>
                <div>
                   <p className="text-xs font-medium text-pine-600 uppercase tracking-widest mb-2">Mistakes are easy to correct</p>
                   <p className="text-dim-2 text-base font-medium leading-relaxed">Nothing is irreversible. Errors can be fixed, records updated. No one is one wrong click away from a permanent problem.</p>
                </div>
             </FadeIn>
          </div>

          <FadeIn delay={0.4} className="mt-6">
             <p className="text-center text-dim text-base font-medium">Works for a clinic with one front desk person. Works for a clinic with five.</p>
          </FadeIn>
       </div>
    </section>
  );
}
