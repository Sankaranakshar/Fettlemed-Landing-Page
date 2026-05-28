import React, { useState } from 'react';
import { FadeIn } from "@/components/common/FadeIn";
import { Button } from "@/components/common/Button";
import { WaitlistModal } from "@/components/common/WaitlistModal";

export const CTA = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section className="py-16 md:py-20 bg-surface-50 border-t border-stone-100">
       <WaitlistModal open={modalOpen} onClose={() => setModalOpen(false)} />
       <div className="container mx-auto px-6 max-w-4xl text-center">
          <FadeIn>
             <h2 className="text-4xl md:text-5xl font-medium text-pine-900 tracking-tight mb-6">Get early access. Help us build what matters.</h2>
             <p className="text-lg font-medium text-dim mb-10 max-w-2xl mx-auto">
               Join the waitlist for early access. Your feedback directly shapes which features are built first.
             </p>
             <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
               <Button variant="animated" size="lg" onClick={() => setModalOpen(true)} className="h-14 px-10 text-lg bg-pine-900 hover:bg-pine-800 text-white rounded-xl font-medium shadow-lg focus-visible:ring-2 focus-visible:ring-pine-600 focus-visible:ring-offset-2">Join Waitlist</Button>
               <Button variant="animated" size="lg" onClick={() => setModalOpen(true)} className="h-14 px-10 text-lg border-2 border-pine-900 text-pine-900 hover:bg-pine-50 rounded-xl font-medium focus-visible:ring-2 focus-visible:ring-pine-600 focus-visible:ring-offset-2">Join the Pilot</Button>
             </div>
             <p className="text-xs text-dim font-medium">By joining, you agree to our <a href="/privacy" className="underline hover:text-pine-700">Privacy Policy</a>. We will not share your details with third parties.</p>
          </FadeIn>
       </div>
    </section>
  );
};
