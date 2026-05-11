import React, { useState } from 'react';
import { Button } from "@/components/common/Button";
import { FadeIn } from "@/components/common/FadeIn";
import { WaitlistModal } from "@/components/common/WaitlistModal";

export function ClinicPilot() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section className="py-24 bg-pine-900 text-white relative overflow-hidden border-b border-stone-100">
       <WaitlistModal open={modalOpen} onClose={() => setModalOpen(false)} />
       <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-pine-800/40 rounded-full blur-[120px] pointer-events-none opacity-50 transform translate-x-1/3 -translate-y-1/3"></div>
       <div className="container mx-auto px-4 md:px-8 max-w-4xl text-center relative z-10">
          <FadeIn>
             <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight leading-tight mb-8">
                What the pilot means for your clinic
             </h2>
             <div className="space-y-6 text-lg text-pine-100 font-medium leading-relaxed text-left md:text-center mb-10">
                <p>Pilots begin soon with clinics across India. Joining the pilot gives you early access, direct support through onboarding, and your feedback shapes which features are prioritised.</p>
<p className="font-bold text-white">If you want to talk through whether FettleMed suits your clinic before joining, write to <a href="mailto:hello@fettlemed.com" className="underline hover:text-pine-200">hello@fettlemed.com</a>.</p>
             </div>
             <Button variant="animated" size="lg" onClick={() => setModalOpen(true)} className="bg-white hover:bg-stone-50 text-pine-900 h-14 px-12 text-lg rounded-xl font-bold shadow-lg">
               Join the waitlist
             </Button>
          </FadeIn>
       </div>
    </section>
  );
}
