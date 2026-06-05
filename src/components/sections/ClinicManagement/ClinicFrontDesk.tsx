import React from 'react';
import { Laptop2, ShieldOff, RotateCcw } from "lucide-react";
import { FadeIn } from "@/components/common/FadeIn";

export function ClinicFrontDesk() {
  return (
    <section className="py-12 md:py-16 bg-white border-b border-stone-100">
       <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <FadeIn className="text-center mb-4">
             <h2 className="text-3xl md:text-5xl font-medium text-pine-900 tracking-tight text-balance">If they can use a smartphone, they can use FettleMed.</h2>
          </FadeIn>
          <FadeIn className="text-center mb-10">
             <p className="text-lg text-dim font-medium leading-relaxed max-w-2xl mx-auto">Built for staff who've never touched clinic software. Fewer steps than paper.</p>
          </FadeIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
             <FadeIn delay={0.1} className="p-8 rounded-3xl bg-surface-50 border border-stone-100 flex flex-col gap-5 hover:shadow-sm transition-shadow">
                <div className="w-12 h-12 bg-white rounded-2xl shadow-sm border border-stone-200 flex items-center justify-center shrink-0">
                   <Laptop2 className="w-6 h-6 text-pine-600" />
                </div>
                <div>
                   <p className="text-pine-900 text-base font-semibold mb-2">Ready the same day setup finishes.</p>
                   <p className="text-dim-2 text-base font-medium leading-relaxed">Most front-desk tasks learned in one session. We stay until they're comfortable.</p>
                </div>
             </FadeIn>

             <FadeIn delay={0.2} className="p-8 rounded-3xl bg-surface-50 border border-stone-100 flex flex-col gap-5 hover:shadow-sm transition-shadow">
                <div className="w-12 h-12 bg-white rounded-2xl shadow-sm border border-stone-200 flex items-center justify-center shrink-0">
                   <ShieldOff className="w-6 h-6 text-pine-600" />
                </div>
                <div>
                   <p className="text-pine-900 text-base font-semibold mb-2">No new hardware. Not a single device.</p>
                   <p className="text-dim-2 text-base font-medium leading-relaxed">Runs on the tablet or laptop you already have.</p>
                </div>
             </FadeIn>

             <FadeIn delay={0.3} className="p-8 rounded-3xl bg-surface-50 border border-stone-100 flex flex-col gap-5 hover:shadow-sm transition-shadow">
                <div className="w-12 h-12 bg-white rounded-2xl shadow-sm border border-stone-200 flex items-center justify-center shrink-0">
                   <RotateCcw className="w-6 h-6 text-pine-600" />
                </div>
                <div>
                   <p className="text-pine-900 text-base font-semibold mb-2">Nothing is permanent until you decide it is.</p>
                   <p className="text-dim-2 text-base font-medium leading-relaxed">Mistakes are fixable. Nothing is one click from disaster.</p>
                </div>
             </FadeIn>
          </div>
       </div>
    </section>
  );
}
