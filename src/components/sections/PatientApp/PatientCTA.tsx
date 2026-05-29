import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Button } from "@/components/common/Button";
import { FadeIn } from "@/components/common/FadeIn";
import { WaitlistModal } from "@/components/common/WaitlistModal";

export function PatientCTA() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section className="py-16 md:py-20 bg-surface-50 border-b border-stone-100">
       <WaitlistModal open={modalOpen} onClose={() => setModalOpen(false)} />
       <div className="container mx-auto px-4 md:px-8 max-w-4xl text-center">
          <FadeIn>
             <h2 className="text-3xl md:text-5xl font-medium text-pine-900 leading-[1.1] mb-6 tracking-tight text-balance">
                One place for everything.<br className="hidden md:block"/> Finally.
             </h2>
             <p className="text-xl text-dim mb-10 font-medium max-w-2xl mx-auto leading-relaxed">
                Join now and we'll reach out with your onboarding date.
             </p>

             <div className="flex flex-col items-center justify-center gap-6">
               <Button variant="animated" size="lg" onClick={() => setModalOpen(true)} className="bg-pine-900 hover:bg-pine-800 text-white h-14 px-12 text-lg rounded-xl font-medium shadow-lg focus-visible:ring-2 focus-visible:ring-pine-600 focus-visible:ring-offset-2">
                 Join the Waitlist
               </Button>

               <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 text-sm font-medium text-dim">
                  <span>Free for patients, always</span>
                  <span className="hidden sm:inline w-1 h-1 rounded-full bg-pine-200"></span>
                  <span>No credit card. No commitment.</span>
                  <span className="hidden sm:inline w-1 h-1 rounded-full bg-pine-200"></span>
                  <span>We'll only contact you about your FettleMed access.</span>
               </div>

               <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6 text-sm font-medium text-dim mt-4 pt-4 border-t border-stone-100 w-full justify-center">
                  <span>Are you a doctor? <Link to="/doctor-portal" className="text-pine-600 hover:text-pine-700 transition-colors">Join the doctor pilot →</Link></span>
                  <span className="hidden sm:inline w-1 h-1 rounded-full bg-pine-200"></span>
                  <span>Do you run a clinic? <Link to="/clinic-management" className="text-pine-600 hover:text-pine-700 transition-colors">Join the clinic pilot →</Link></span>
               </div>
             </div>
          </FadeIn>
       </div>
    </section>
  );
}
