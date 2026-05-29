import React from 'react';
import { FadeIn } from "@/components/common/FadeIn";

export function ClinicWhoWeAre() {
  return (
    <section className="py-16 md:py-20 bg-surface-50 border-b border-stone-100">
       <div className="container mx-auto px-4 md:px-8 max-w-4xl text-center">
          <FadeIn>
             <h2 className="text-3xl md:text-4xl font-medium text-pine-900 tracking-tight mb-8">Who we are</h2>
             <div className="space-y-6 text-lg text-dim-2 font-medium leading-relaxed text-left md:text-center">
                <p>FettleMed is built by a team that has spent time in Indian clinics, not just studied them.</p>
                <p>Every clinic management feature starts with one question: does this reduce a task for the clinic, or add one? If the answer is "adds one," it doesn't ship.</p>
                <p>Clinical and operational advisors validate every feature before it reaches a clinic. Dr. Bhavani Sriram and Dr. Sriram Shankar review clinical workflow implications. Operational input comes from people who have run Indian clinic administration, not studied it in theory.</p>
                <p>Clinics that join the pilot now shape which features are prioritised first.</p>
                <p className="text-pine-900 font-medium text-2xl mt-8">"A clinic runs on people. FettleMed handles the paperwork, so yours can focus entirely on the ones who walked through the door."</p>
             </div>
          </FadeIn>
       </div>
    </section>
  );
}
