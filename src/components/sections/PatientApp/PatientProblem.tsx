import React from 'react';
import { FolderSync, EyeOff } from "lucide-react";
import { FadeIn } from "@/components/common/FadeIn";

export function PatientProblem() {
  return (
    <section className="py-12 md:py-16 bg-pine-900 border-b border-pine-800 relative overflow-hidden">
       <div className="container mx-auto px-4 md:px-8 max-w-6xl relative z-10">

          <FadeIn className="mb-14">
             <h2 className="text-3xl md:text-5xl font-medium text-white tracking-tight text-balance max-w-2xl">You already know this problem.</h2>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-6">
             {/* Card One - Memory Burden */}
             <FadeIn delay={0.1} className="bg-pine-800/50 border border-pine-700/60 rounded-3xl p-8 lg:p-10 flex flex-col ">
                <div className="w-14 h-14 bg-pine-700/60 border border-pine-600 rounded-2xl flex items-center justify-center mb-6 shrink-0">
                   <FolderSync className="w-7 h-7 text-pine-300" />
                </div>
                <h3 className="text-2xl font-medium text-white mb-4 tracking-tight">You can't remember everything</h3>
                <p className="text-pine-50 text-base leading-relaxed mb-6 flex-1">Reports pile up in folders, in WhatsApp forwards, in the memory of whoever tracks these things. Something always goes missing.</p>
                <ul className="space-y-2.5">
                   <li className="flex items-center gap-3 text-pine-50 font-medium text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-pine-400 shrink-0" />
                      Medications from years ago you can't fully recall
                   </li>
                   <li className="flex items-center gap-3 text-pine-50 font-medium text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-pine-400 shrink-0" />
                      A diagnosis you only half understood at the time
                   </li>
                   <li className="flex items-center gap-3 text-pine-50 font-medium text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-pine-400 shrink-0" />
                      A report you're not sure you still have
                   </li>
                   <li className="flex items-center gap-3 text-pine-50 font-medium text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-pine-400 shrink-0" />
                      A new doctor who needs all of it, right now
                   </li>
                </ul>
             </FadeIn>

             {/* Card Two - Comprehension Gap */}
             <FadeIn delay={0.2} className="bg-pine-800/50 border border-pine-700/60 rounded-3xl p-8 lg:p-10 flex flex-col ">
                <div className="w-14 h-14 bg-pine-700/60 border border-pine-600 rounded-2xl flex items-center justify-center mb-6 shrink-0">
                   <EyeOff className="w-7 h-7 text-pine-300" />
                </div>
                <h3 className="text-2xl font-medium text-white mb-4 tracking-tight">The report is hard to act on.</h3>
                <p className="text-pine-50 text-base leading-relaxed mb-6 flex-1">Haemoglobin 10.2 g/dL. Normal? Worrying? Without your earlier results next to it, even your doctor is guessing from memory.</p>
                <ul className="space-y-2.5">
                   <li className="flex items-center gap-3 text-pine-50 font-medium text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-pine-400 shrink-0" />
                      Reports use clinical shorthand patients can't read
                   </li>
                   <li className="flex items-center gap-3 text-pine-50 font-medium text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-pine-400 shrink-0" />
                      Prescriptions list drug names you've never heard of
                   </li>
                   <li className="flex items-center gap-3 text-pine-50 font-medium text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-pine-400 shrink-0" />
                      The doctor had four minutes before the next patient
                   </li>
                   <li className="flex items-center gap-3 text-pine-50 font-medium text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-pine-400 shrink-0" />
                      No plain-language summary, no way to see what changed
                   </li>
                </ul>
             </FadeIn>
          </div>

       </div>
    </section>
  );
}
