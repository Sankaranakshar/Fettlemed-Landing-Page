import React from 'react';
import { Button } from "@/components/common/Button";
import { FadeIn } from "@/components/common/FadeIn";
import { useWaitlist } from "@/contexts/WaitlistContext";

export function PatientCTA() {
  const { openWaitlist } = useWaitlist();

  return (
    <section className="py-12 md:py-16 bg-surface-50 border-b border-stone-100">
       <div className="container mx-auto px-4 md:px-8 max-w-4xl text-center">
          <FadeIn>
             <h2 className="text-3xl md:text-5xl font-medium text-pine-900 leading-[1.1] mb-6 tracking-tight text-balance">
                One place for everything.<br className="hidden md:block"/> Finally.
             </h2>
             <p className="text-xl text-dim mb-10 font-medium max-w-2xl mx-auto leading-relaxed">
                Join now. We'll reach out when your spot opens.
             </p>

             <div className="flex flex-col items-center justify-center gap-6">
               <Button variant="animated" size="lg" onClick={() => openWaitlist('Patients & Caregivers')} className="bg-pine-900 hover:bg-pine-800 text-white h-14 px-12 text-lg rounded-xl font-medium shadow-lg focus-visible:ring-2 focus-visible:ring-pine-600 focus-visible:ring-offset-2">
                 Join the Pilot
               </Button>

               <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 text-sm font-medium text-dim">
                  <span>Free for patients during the pilot</span>
                  <span className="hidden sm:inline w-1 h-1 rounded-full bg-pine-200"></span>
                  <span>No credit card. No commitment.</span>
               </div>

             </div>
          </FadeIn>
       </div>
    </section>
  );
}
