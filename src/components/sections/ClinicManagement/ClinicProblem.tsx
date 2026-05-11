import React from 'react';
import { Users2, LineChart, FileX } from "lucide-react";
import { FadeIn } from "@/components/common/FadeIn";

export function ClinicProblem() {
  return (
    <section className="py-24 bg-white border-b border-stone-100 relative">
       <div className="absolute inset-0 bg-stone-50/50" />
       <div className="container mx-auto px-4 md:px-8 max-w-6xl relative z-10">
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
             {/* Moment One */}
             <FadeIn delay={0.1} className="flex flex-col flex-1">
                <div className="w-12 h-12 bg-red-50 text-red-500 rounded-2xl flex items-center justify-center mb-6 border border-red-100/50 shadow-sm">
                   <Users2 className="w-6 h-6" />
                </div>
                <div className="space-y-4 text-lg text-stone-600 font-medium leading-relaxed">
                   <p>Patients arriving without confirmed appointments. A booking clash no one caught. The front desk managing a queue, a phone call, and a billing question at the same time. All before the first consultation of the day has started.</p>
                </div>
             </FadeIn>
             
             {/* Moment Two */}
             <FadeIn delay={0.2} className="flex flex-col flex-1">
                <div className="w-12 h-12 bg-red-50 text-red-500 rounded-2xl flex items-center justify-center mb-6 border border-red-100/50 shadow-sm">
                   <LineChart className="w-6 h-6" />
                </div>
                <div className="space-y-4 text-lg text-stone-600 font-medium leading-relaxed">
                   <p>How many patients were seen this month? What was billed versus what was actually collected? Which hours are consistently slow? The answers exist somewhere — in a register, a spreadsheet, a stack of invoices — but pulling them together takes time no one has.</p>
                </div>
             </FadeIn>
             
             {/* Moment Three */}
             <FadeIn delay={0.3} className="flex flex-col flex-1">
                <div className="w-12 h-12 bg-red-50 text-red-500 rounded-2xl flex items-center justify-center mb-6 border border-red-100/50 shadow-sm">
                   <FileX className="w-6 h-6" />
                </div>
                <div className="space-y-4 text-lg text-stone-600 font-medium leading-relaxed">
                   <p>A returning patient walks in. The front desk isn't sure if they've been here before. Registration details are taken again. Their file takes time to find. The consultation starts late. This happens multiple times a day, every day.</p>
                </div>
             </FadeIn>
          </div>
       </div>
    </section>
  );
}
