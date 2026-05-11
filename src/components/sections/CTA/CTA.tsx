import React, { useState } from 'react';
import { FadeIn } from "@/components/common/FadeIn";
import { Button } from "@/components/common/Button";
import { WaitlistModal } from "@/components/common/WaitlistModal";

export const CTA = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section className="py-24 md:py-32 bg-surface-50 border-t border-stone-100">
       <WaitlistModal open={modalOpen} onClose={() => setModalOpen(false)} />
       <div className="container mx-auto px-6 max-w-4xl text-center">
          <FadeIn>
             <h2 className="text-4xl md:text-6xl font-bold text-pine-900 tracking-tight mb-6">Shape the future of health data.</h2>
             <p className="text-lg md:text-xl font-medium text-stone-500 mb-10 max-w-2xl mx-auto">
               Join our waitlist to get early access and help direct our product roadmap. We only need your name, role, and phone number to get started.
             </p>
             <Button variant="animated" size="lg" onClick={() => setModalOpen(true)} className="h-16 px-12 text-xl bg-accent-600 hover:bg-accent-700 text-white rounded-2xl font-bold shadow-xl shadow-accent-600/20">
               Join Waitlist
             </Button>
          </FadeIn>
       </div>
    </section>
  );
};
