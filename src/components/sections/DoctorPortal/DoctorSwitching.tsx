import React from 'react';
import { CheckCircle2 } from "lucide-react";
import { FadeIn } from "@/components/common/FadeIn";

export function DoctorSwitching() {
  return (
    <section className="py-24 bg-white border-b border-stone-100">
       <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <FadeIn className="text-center mb-16">
             <h2 className="text-3xl md:text-5xl font-bold text-pine-900 tracking-tight text-balance">Switching from paper</h2>
             <p className="text-xl text-stone-500 mt-6 font-medium leading-relaxed">
                Fettlemed is built for doctors currently on paper or Excel, not for hospitals with IT departments, and not for tech-forward super-clinics. It goes beyond outdated clinical software: it truly assists you, instead of being a place to dump data.
             </p>
          </FadeIn>

          <div className="space-y-6">
             <FadeIn delay={0.1} className="flex gap-4 items-start">
                <CheckCircle2 className="w-6 h-6 text-pine-600 shrink-0 mt-1" />
                <p className="text-stone-600 text-lg font-medium leading-relaxed">You do not enter historical patient records. You start from the first consultation on Fettlemed and build from there.</p>
             </FadeIn>
             <FadeIn delay={0.2} className="flex gap-4 items-start">
                <CheckCircle2 className="w-6 h-6 text-pine-600 shrink-0 mt-1" />
                <p className="text-stone-600 text-lg font-medium leading-relaxed">Your existing patients do not need to download anything for you to use Fettlemed. You can create digital records for any patient.</p>
             </FadeIn>
             <FadeIn delay={0.3} className="flex gap-4 items-start">
                <CheckCircle2 className="w-6 h-6 text-pine-600 shrink-0 mt-1" />
                <p className="text-stone-600 text-lg font-medium leading-relaxed">Setup takes one session. You can see your first patient on Fettlemed on the same day you sign up.</p>
             </FadeIn>
             <FadeIn delay={0.4} className="flex gap-4 items-start">
                <CheckCircle2 className="w-6 h-6 text-pine-600 shrink-0 mt-1" />
                <p className="text-stone-600 text-lg font-medium leading-relaxed">Regional language support for prescriptions is in development and coming soon.</p>
             </FadeIn>
             <FadeIn delay={0.6} className="flex gap-4 items-start">
                <CheckCircle2 className="w-6 h-6 text-pine-600 shrink-0 mt-1" />
                <p className="text-stone-600 text-lg font-medium leading-relaxed">If you decide Fettlemed is not right for you, you take all your records with you. Nothing is locked in.</p>
             </FadeIn>
          </div>
       </div>
    </section>
  );
}
