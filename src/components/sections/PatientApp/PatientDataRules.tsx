import React from 'react';
import { ShieldCheck, FolderSync, EyeOff } from "lucide-react";
import { FadeIn } from "@/components/common/FadeIn";

export function PatientDataRules() {
  return (
    <section className="py-24 bg-white border-b border-stone-100">
       <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <FadeIn className="text-center mb-16">
             <h2 className="text-3xl md:text-5xl font-medium text-pine-900 tracking-tight text-balance">Your data, your rules</h2>
          </FadeIn>

          <div className="grid gap-6">
             <FadeIn delay={0.1} className="p-8 md:p-10 rounded-3xl bg-surface-50 border border-stone-100 flex flex-col md:flex-row gap-8 items-center md:items-start text-center md:text-left">
                <div className="w-16 h-16 bg-white shrink-0 rounded-2xl shadow-sm border border-stone-200 flex items-center justify-center">
                   <ShieldCheck className="w-8 h-8 text-pine-600" />
                </div>
                <div>
                   <h3 className="text-2xl font-medium text-pine-900 mb-3 tracking-tight">Fettlemed never sells your data</h3>
                   <p className="text-stone-600 font-medium text-lg leading-relaxed">Your health records are never used for advertising, never sold to insurers, never shared with your employer. Ever.</p>
                </div>
             </FadeIn>

             <FadeIn delay={0.2} className="p-8 md:p-10 rounded-3xl bg-surface-50 border border-stone-100 flex flex-col md:flex-row gap-8 items-center md:items-start text-center md:text-left">
                <div className="w-16 h-16 bg-white shrink-0 rounded-2xl shadow-sm border border-stone-200 flex items-center justify-center">
                   <FolderSync className="w-8 h-8 text-pine-600" />
                </div>
                <div>
                   <h3 className="text-2xl font-medium text-pine-900 mb-3 tracking-tight">You control who sees what</h3>
                   <p className="text-stone-600 font-medium text-lg leading-relaxed">Every doctor sees only what you choose to share. You can revoke access anytime, from the app, in seconds.</p>
                </div>
             </FadeIn>

             <FadeIn delay={0.3} className="p-8 md:p-10 rounded-3xl bg-surface-50 border border-stone-100 flex flex-col md:flex-row gap-8 items-center md:items-start text-center md:text-left">
                <div className="w-16 h-16 bg-white shrink-0 rounded-2xl shadow-sm border border-stone-200 flex items-center justify-center">
                   <EyeOff className="w-8 h-8 text-pine-600" />
                </div>
                <div>
                   <h3 className="text-2xl font-medium text-pine-900 mb-3 tracking-tight">You can see who accessed your records</h3>
                   <p className="text-stone-600 font-medium text-lg leading-relaxed">Fettlemed keeps a full log of every time your records were accessed and by whom. You are never in the dark.</p>
                </div>
             </FadeIn>
          </div>
       </div>
    </section>
  );
}
