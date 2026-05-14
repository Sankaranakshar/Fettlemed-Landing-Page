import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Button } from "@/components/common/Button";
import { FadeIn } from "@/components/common/FadeIn";
import { WaitlistModal } from "@/components/common/WaitlistModal";

export function PatientCTA() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section className="py-24 bg-surface-50 border-b border-stone-100">
       <WaitlistModal open={modalOpen} onClose={() => setModalOpen(false)} />
       <div className="container mx-auto px-4 md:px-8 max-w-4xl text-center">
          <FadeIn>
             <h2 className="text-3xl md:text-5xl font-bold text-pine-900 leading-[1.1] mb-6 tracking-tight text-balance">
                One place for everything.<br className="hidden md:block"/> Finally.
             </h2>
             <p className="text-xl text-stone-500 mb-10 font-medium max-w-2xl mx-auto leading-relaxed">
                We are piloting with doctors and clinics from June 2026. The patient app follows shortly after. Get early access and we'll reach out directly.
             </p>

             <div className="flex flex-col items-center justify-center gap-6">
               <Button variant="animated" size="lg" onClick={() => setModalOpen(true)} className="bg-accent-600 hover:bg-accent-700 text-white h-14 px-12 text-lg rounded-xl font-bold shadow-lg shadow-accent-600/20">
                 Get early access
               </Button>

               <div className="flex items-center gap-4 text-sm font-bold text-stone-500 mt-4">
                  <Link to="/doctor-portal" className="hover:text-pine-600 transition-colors">Already a doctor?</Link>
                  <span className="w-1 h-1 rounded-full bg-stone-300"></span>
                  <Link to="/clinic-management" className="hover:text-pine-600 transition-colors">Run a clinic?</Link>
               </div>
             </div>
          </FadeIn>
       </div>
    </section>
  );
}
