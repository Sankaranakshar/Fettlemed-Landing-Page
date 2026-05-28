import React from 'react';
import { Users2, LineChart, FileX } from "lucide-react";
import { FadeIn } from "@/components/common/FadeIn";

export function ClinicProblem() {
  return (
    <section className="py-16 md:py-20 bg-white border-b border-stone-100 relative">
       <div className="absolute inset-0 bg-stone-50/50" />
       <div className="container mx-auto px-4 md:px-8 max-w-6xl relative z-10">
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
             {/* Moment One — operational chaos */}
             <FadeIn delay={0.1} className="flex flex-col flex-1">
                <div className="w-12 h-12 bg-amber-50 text-amber-600 rounded-2xl flex items-center justify-center mb-6 border border-amber-100/50 shadow-sm">
                   <Users2 className="w-6 h-6" />
                </div>
                <div className="space-y-4 text-lg text-dim-2 font-medium leading-relaxed">
                   <p>9:15 AM. Three patients waiting. Two unconfirmed. One booking clash. The front desk is managing the queue, a phone call, and a billing question at once.</p>
                   <p>The first consultation hasn't started. The day is already behind.</p>
                </div>
             </FadeIn>

             {/* Moment Two — financial blindness */}
             <FadeIn delay={0.2} className="flex flex-col flex-1">
                <div className="w-12 h-12 bg-amber-50 text-amber-600 rounded-2xl flex items-center justify-center mb-6 border border-amber-100/50 shadow-sm">
                   <LineChart className="w-6 h-6" />
                </div>
                <div className="space-y-4 text-lg text-dim-2 font-medium leading-relaxed">
                   <p>End of month. Compile the numbers: patients seen, billed, collected, no-show rate. The answers are split across a register, a spreadsheet, and receipts nobody reconciled.</p>
                   <p>By the time you have the picture, it's already next month.</p>
                </div>
             </FadeIn>

             {/* Moment Three — patient friction */}
             <FadeIn delay={0.3} className="flex flex-col flex-1">
                <div className="w-12 h-12 bg-amber-50 text-amber-600 rounded-2xl flex items-center justify-center mb-6 border border-amber-100/50 shadow-sm">
                   <FileX className="w-6 h-6" />
                </div>
                <div className="space-y-4 text-lg text-dim-2 font-medium leading-relaxed">
                   <p>A returning patient walks in. The front desk isn't sure they've been before. They register again. Their file takes time to locate. The consultation starts late.</p>
                   <p>Three, four, five times a day. Every delay is time the doctor doesn't get back.</p>
                </div>
             </FadeIn>
          </div>
       </div>
    </section>
  );
}
