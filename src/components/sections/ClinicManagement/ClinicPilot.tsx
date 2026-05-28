import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Button } from "@/components/common/Button";
import { FadeIn } from "@/components/common/FadeIn";
import { WaitlistModal } from "@/components/common/WaitlistModal";

export function ClinicPilot() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section className="py-16 md:py-20 bg-pine-900 text-white relative overflow-hidden border-b border-stone-100">
       <WaitlistModal open={modalOpen} onClose={() => setModalOpen(false)} defaultRole="Clinic" />
       <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-pine-800/40 rounded-full blur-[120px] pointer-events-none opacity-50 transform translate-x-1/3 -translate-y-1/3"></div>
       <div className="container mx-auto px-4 md:px-8 max-w-4xl text-center relative z-10">
          <FadeIn>
             <h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight leading-tight mb-8">
                What the pilot means for your clinic
             </h2>

             <div className="space-y-5 text-lg text-pine-100 font-medium leading-relaxed text-left md:text-center mb-10 max-w-2xl mx-auto">
                <p>Joining gives you early access, hands-on onboarding support, and a direct line to the team building the product.</p>
                <p>This is not a mass sign-up. We assess every clinic before onboarding begins, to make sure FettleMed is genuinely the right fit, and to understand your specific workflow before your first session.</p>
                <p>What you tell us in the pilot shapes what ships next. Clinics in the first cohort have more influence over the product than any cohort that follows.</p>
             </div>

             <p className="text-pine-200 text-base font-medium mb-10 max-w-2xl mx-auto">
                Want to talk through whether FettleMed suits your clinic before applying? Write to{" "}
                <a href="mailto:hello@fettlemed.com" className="underline hover:text-white transition-colors">hello@fettlemed.com</a>
                {" "}— someone from the team will respond personally.
             </p>

             <div className="flex flex-col items-center gap-3">
                <Button variant="animated" size="lg" onClick={() => setModalOpen(true)} className="bg-white hover:bg-stone-50 text-pine-900 h-14 px-12 text-lg rounded-xl font-medium shadow-lg">
                  Join the clinic pilot
                </Button>

                <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 text-sm font-medium text-pine-300 mt-3">
                   <span>Solo clinics and polyclinics welcome</span>
                   <span className="hidden sm:inline w-1 h-1 rounded-full bg-pine-600"></span>
                   <span>No hardware. No IT team. Setup in one session.</span>
                   <span className="hidden sm:inline w-1 h-1 rounded-full bg-pine-600"></span>
                   <span>All data exportable in full, nothing locked in</span>
                </div>

                <p className="text-pine-400 text-xs font-medium mt-4">
                   By applying, you agree to our{" "}
                   <Link to="/privacy" className="underline hover:text-pine-200 transition-colors">Privacy Policy</Link>.
                   {" "}Clinic and user data is encrypted and never shared with third parties.
                </p>
             </div>
          </FadeIn>
       </div>
    </section>
  );
}
