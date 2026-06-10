import React from 'react';
import { FadeIn } from "@/components/common/FadeIn";
import { Button } from "@/components/common/Button";
import { DarkTexture } from "@/components/common/Texture/DarkTexture";
import { useWaitlist } from "@/contexts/WaitlistContext";

export const CTA = () => {
  const { openWaitlist } = useWaitlist();

  return (
    <section className="relative overflow-hidden py-14 md:py-20 bg-pine-900">
       <DarkTexture glow="center" />
       <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
          <FadeIn>
             <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium text-white tracking-tight mb-6 text-balance">Join the pilot. Talk to the founders.</h2>
             <p className="text-lg md:text-xl font-medium text-pine-200 mb-10 max-w-2xl mx-auto">
               We reach out personally when your spot opens. Not a newsletter. A conversation.
             </p>
             <Button variant="animated" size="lg" onClick={() => openWaitlist()} className="h-14 px-12 text-lg bg-white hover:bg-pine-50 text-pine-900 rounded-xl font-medium shadow-lg focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-pine-900">
               Join the Waitlist
             </Button>
             <p className="mt-6 text-sm text-pine-300 font-medium">By joining, you agree to our <a href="/privacy-policy" className="underline hover:text-pine-200">Privacy Policy</a>. We will not share your details with third parties.</p>
          </FadeIn>
       </div>
    </section>
  );
};
