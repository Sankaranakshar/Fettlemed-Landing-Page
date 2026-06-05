import React from 'react';
import { Link } from "react-router-dom";
import { Button } from "@/components/common/Button";
import { FadeIn } from "@/components/common/FadeIn";
import { useWaitlist } from "@/contexts/WaitlistContext";

export function DoctorPilot() {
  const { openWaitlist } = useWaitlist();

  return (
    <section className="py-14 md:py-20 bg-pine-900 text-white relative overflow-hidden border-b border-stone-100">
       <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-pine-800/40 rounded-full blur-[120px] pointer-events-none opacity-50 transform translate-x-1/3 -translate-y-1/3"></div>
       <div className="container mx-auto px-4 md:px-8 max-w-4xl text-center relative z-10">
          <FadeIn>
             <h2 className="text-3xl md:text-5xl font-medium text-white tracking-tight leading-tight mb-8">
                You'll talk to the founders. Not a support team.
             </h2>

             <p className="text-lg text-pine-100 font-medium leading-relaxed mb-10 max-w-2xl mx-auto text-center">
               Joining means a conversation with the people writing the code, not a feedback form.
             </p>

             {/* Timeline */}
             <div className="relative mb-10 max-w-3xl mx-auto">
               {/* Connecting line — desktop only */}
               <div className="hidden md:block absolute top-5 left-[12.5%] right-[12.5%] h-px bg-pine-700" />
               <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                 {[
                   { step: "1", title: "Apply",            desc: "2-minute form, no paperwork",                               selected: false },
                   { step: "2", title: "We review",        desc: "Each application is reviewed by the founding team",          selected: true  },
                   { step: "3", title: "Go live",          desc: "Selected doctors set up in one session",                    selected: false },
                   { step: "4", title: "Build with us",    desc: "Your feedback goes to the people writing the code.",        selected: false },
                 ].map(({ step, title, desc, selected }) => (
                   <div key={step} className="flex flex-col items-center text-center relative">
                     <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-3 text-sm z-10 relative border-2 font-semibold ${
                       selected
                         ? "bg-white text-pine-900 border-white"
                         : "bg-pine-700 text-white border-pine-500"
                     }`}>
                       {step}
                     </div>
                     <p className="font-semibold text-sm mb-1 text-white">{title}</p>
                     <p className={`text-xs font-medium leading-relaxed ${selected ? "text-pine-200" : "text-pine-300"}`}>{desc}</p>
                   </div>
                 ))}
               </div>
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
