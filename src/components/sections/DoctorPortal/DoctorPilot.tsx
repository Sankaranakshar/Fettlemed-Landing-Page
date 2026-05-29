import React from 'react';
import { Link } from "react-router-dom";
import { Button } from "@/components/common/Button";
import { FadeIn } from "@/components/common/FadeIn";
import { useWaitlist } from "@/contexts/WaitlistContext";

export function DoctorPilot() {
  const { openWaitlist } = useWaitlist();

  return (
    <section className="py-16 md:py-20 bg-pine-900 text-white relative overflow-hidden border-b border-stone-100">
       <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-pine-800/40 rounded-full blur-[120px] pointer-events-none opacity-50 transform translate-x-1/3 -translate-y-1/3"></div>
       <div className="container mx-auto px-4 md:px-8 max-w-4xl text-center relative z-10">
          <FadeIn>
             <h2 className="text-3xl md:text-5xl font-medium text-white tracking-tight leading-tight mb-8">
                What the pilot means for you
             </h2>

             <div className="text-lg text-pine-100 font-medium leading-relaxed text-left md:text-center mb-10 max-w-2xl mx-auto">
                <p className="mb-6">Joining means direct access to the people building this, not a feedback form.</p>
                <ul className="space-y-3 text-left max-w-sm mx-auto">
                   <li className="flex items-start gap-2"><span className="text-pine-400 mt-1 shrink-0">•</span>Pilot doctors speak directly with the founding team</li>
                   <li className="flex items-start gap-2"><span className="text-pine-400 mt-1 shrink-0">•</span>We're looking for doctors who want to build this right, not just use it when it's done</li>
                </ul>
             </div>

             <div className="flex flex-col items-center gap-3">
                <Button variant="animated" size="lg" onClick={() => openWaitlist('Doctor')} className="bg-white hover:bg-pine-50 text-pine-900 h-14 px-12 text-lg rounded-xl font-medium shadow-lg">
                  Join the Clinical Pilot
                </Button>
                <p className="text-pine-300 text-sm font-medium">For your practice. Limited spots available.</p>
                <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 text-sm font-medium text-pine-300 mt-3">
                   <span>No complex setup. Works on the device you already have.</span>
                   <span className="hidden sm:inline w-1 h-1 rounded-full bg-pine-600"></span>
                   <span>Your records are yours, exportable in full, anytime.</span>
                   <span className="hidden sm:inline w-1 h-1 rounded-full bg-pine-600"></span>
                   <span>We'll be hands on during onboarding, actively helping digitise your clinic.</span>
                </div>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-sm font-medium text-pine-400 mt-8 pt-6 border-t border-pine-800">
                   <span>Do you run a clinic? <Link to="/clinic-management" className="text-pine-200 hover:text-white transition-colors">See the clinic platform →</Link></span>
                   <span className="hidden sm:inline w-1 h-1 rounded-full bg-pine-700"></span>
                   <span>Looking for the patient app? <Link to="/patient-app" className="text-pine-200 hover:text-white transition-colors">See FettleMed for patients →</Link></span>
                </div>
             </div>
          </FadeIn>
       </div>
    </section>
  );
}
