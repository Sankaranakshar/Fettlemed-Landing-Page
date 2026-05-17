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
                <h3 className="text-2xl md:text-3xl font-medium text-pine-900 mb-6 tracking-tight text-balance">The Memory Burden</h3>
                <div className="space-y-4 text-lg text-stone-600 font-medium leading-relaxed">
                   <p>A growing stack of reports, prescriptions, scans, and discharge summaries can quickly become difficult to organise and understand. Important details get buried, papers go missing, and keeping track of your medical history turns into a task of its own.</p>
                   <p>With every new appointment, you're expected to carry everything along, remember past treatments, and explain your history again. As the paperwork grows, so does the confusion.</p>
                </div>
             </FadeIn>

             {/* Moment Two */}
             <FadeIn delay={0.2} className="flex flex-col flex-1">
                <div className="w-12 h-12 bg-red-50 text-red-500 rounded-2xl flex items-center justify-center mb-6 border border-red-100/50 shadow-sm">
                   <EyeOff className="w-6 h-6" />
                </div>
                <h3 className="text-2xl md:text-3xl font-medium text-pine-900 mb-6 tracking-tight text-balance">The Comprehension Gap</h3>
                <div className="space-y-4 text-lg text-stone-600 font-medium leading-relaxed">
                   <p>Medical information is often difficult to interpret without clinical knowledge. Reports contain unfamiliar terms, prescriptions can feel unclear, and understanding what actually matters to your health becomes challenging.</p>
                   <p>As appointments become shorter and healthcare becomes more complex, many people are left trying to piece everything together on their own. Fettlemed helps make your health information clearer, simpler, and easier to follow.</p>
                </div>
             </FadeIn>
          </div>
       </div>
    </section>
  );
}
