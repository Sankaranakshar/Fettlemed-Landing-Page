import React from 'react';
import { FolderSync, EyeOff } from "lucide-react";
import { FadeIn } from "@/components/common/FadeIn";

export function PatientProblem() {
  return (
    <section className="py-24 bg-white border-b border-stone-100 relative">
       <div className="absolute inset-0 bg-stone-50/50" />
       <div className="container mx-auto px-4 md:px-8 max-w-6xl relative z-10">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-24">
             {/* Moment One */}
             <FadeIn delay={0.1} className="flex flex-col flex-1">
                <div className="w-12 h-12 bg-red-50 text-red-500 rounded-2xl flex items-center justify-center mb-6 border border-red-100/50 shadow-sm">
                   <FolderSync className="w-6 h-6" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-pine-900 mb-6 tracking-tight text-balance">The physical burden</h3>
                <div className="space-y-4 text-lg text-stone-600 font-medium leading-relaxed">
                   <p>A bag of reports, a drawer of prescriptions, a folder that travels with you to every appointment. It's a lot to keep track of, and it shouldn't be your job to remember every detail.</p>
                   <p>Every new doctor starts from scratch. Every test might get repeated. Every referral means explaining everything again from memory.</p>
                </div>
             </FadeIn>

             {/* Moment Two */}
             <FadeIn delay={0.2} className="flex flex-col flex-1">
                <div className="w-12 h-12 bg-red-50 text-red-500 rounded-2xl flex items-center justify-center mb-6 border border-red-100/50 shadow-sm">
                   <EyeOff className="w-6 h-6" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-pine-900 mb-6 tracking-tight text-balance">The comprehension gap</h3>
                <div className="space-y-4 text-lg text-stone-600 font-medium leading-relaxed">
                   <p>A number on a lab report. A diagnosis in medical terminology. A prescription you filled but weren't sure about.</p>
                   <p>Most people leave a consultation with more questions than answers. Fettlemed helps you stay better informed.</p>
                </div>
             </FadeIn>
          </div>
       </div>
    </section>
  );
}
