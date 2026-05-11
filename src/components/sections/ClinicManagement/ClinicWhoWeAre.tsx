import React from 'react';
import { FadeIn } from "@/components/common/FadeIn";

export function ClinicWhoWeAre() {
  return (
    <section className="py-24 bg-surface-50 border-b border-stone-100">
       <div className="container mx-auto px-4 md:px-8 max-w-4xl text-center">
          <FadeIn>
             <h2 className="text-3xl font-bold text-pine-900 tracking-tight mb-8">Who we are</h2>
             <div className="space-y-6 text-lg text-stone-600 font-medium leading-relaxed text-left md:text-center">
                <p>FettleMed is built by a team that has spent time in Indian clinics — not just studied them.</p>
                <p>Every clinic management feature was designed around one question: does this reduce a task for the clinic or add one? Clinical and operational advisors validate every feature before it ships.</p>
                <p>We are piloting from June 2026 — clinics that join the pilot shape what gets built next.</p>
                <p className="text-pine-900 font-bold text-2xl mt-8">"A clinic runs on people. FettleMed handles the paperwork so yours can focus on patients."</p>
             </div>
          </FadeIn>
       </div>
    </section>
  );
}
