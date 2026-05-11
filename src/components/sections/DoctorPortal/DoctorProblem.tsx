import React from 'react';
import { UserPlus, History, Upload } from "lucide-react";
import { FadeIn } from "@/components/common/FadeIn";

export function DoctorProblem() {
  return (
    <section className="py-24 bg-white border-b border-stone-100 relative">
       <div className="absolute inset-0 bg-stone-50/50" />
       <div className="container mx-auto px-4 md:px-8 max-w-6xl relative z-10">
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
             {/* Moment One */}
             <FadeIn delay={0.1} className="flex flex-col flex-1">
                <div className="w-12 h-12 bg-red-50 text-red-500 rounded-2xl flex items-center justify-center mb-6 border border-red-100/50 shadow-sm">
                   <UserPlus className="w-6 h-6" />
                </div>
                <div className="space-y-4 text-lg text-stone-600 font-medium leading-relaxed">
                   <p>You have all the relevant information in your hand before the patient walks through the door. No searching, no asking them to remember what they were prescribed months ago.</p>
                </div>
             </FadeIn>

             {/* Moment Two */}
             <FadeIn delay={0.2} className="flex flex-col flex-1">
                <div className="w-12 h-12 bg-red-50 text-red-500 rounded-2xl flex items-center justify-center mb-6 border border-red-100/50 shadow-sm">
                   <History className="w-6 h-6" />
                </div>
                <div className="space-y-4 text-lg text-stone-600 font-medium leading-relaxed">
                   <p>A patient sits down. They were here eight months ago. You know the face, not the history. The file is somewhere. Or it isn't. You start from scratch, ask the same questions, hope they remember what they were prescribed.</p>
                </div>
             </FadeIn>

             {/* Moment Three */}
             <FadeIn delay={0.3} className="flex flex-col flex-1">
                <div className="w-12 h-12 bg-red-50 text-red-500 rounded-2xl flex items-center justify-center mb-6 border border-red-100/50 shadow-sm">
                   <Upload className="w-6 h-6" />
                </div>
                <div className="space-y-4 text-lg text-stone-600 font-medium leading-relaxed">
                   <p>Patients can upload their follow-up test results directly, so you see them without scheduling another visit. That slot opens up for someone who needs it.</p>
                </div>
             </FadeIn>
          </div>
       </div>
    </section>
  );
}
