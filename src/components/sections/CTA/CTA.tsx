import React, { useState } from 'react';
import { FadeIn } from "@/components/common/FadeIn";
import { Button } from "@/components/common/Button";
import { WaitlistModal } from "@/components/common/WaitlistModal";

export const CTA = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section className="h-[calc(100vh-80px)] min-h-[600px] flex flex-col justify-center bg-pine-900 overflow-hidden">
       <WaitlistModal open={modalOpen} onClose={() => setModalOpen(false)} />
       <div className="container mx-auto px-6 max-w-4xl text-center">
          <FadeIn>
             <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium text-white tracking-tight mb-6 text-balance">Get early access. Help us build what matters.</h2>
             <p className="text-lg md:text-xl font-medium text-pine-200 mb-10 max-w-2xl mx-auto">
               Join the waitlist for early access. Your feedback directly shapes which features are built first.
             </p>
             <Button variant="animated" size="lg" onClick={() => setModalOpen(true)} className="h-14 px-12 text-lg bg-white hover:bg-pine-50 text-pine-900 rounded-xl font-medium shadow-lg focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-pine-900">
               Join the Waitlist
             </Button>
             <p className="mt-6 text-sm text-pine-400 font-medium">By joining, you agree to our <a href="/privacy" className="underline hover:text-pine-200">Privacy Policy</a>. We will not share your details with third parties.</p>
          </FadeIn>
       </div>
    </section>
  );
};
