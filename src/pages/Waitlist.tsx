import React from "react";
import { SEO } from '@/components/common/SEO';
import { CheckCircle2 } from "lucide-react";
import { FadeIn } from "@/components/common/FadeIn";
import { WaitlistForm } from "@/components/common/WaitlistModal";

export default function Waitlist() {
  return (
    <>
      <SEO title="Join the Waitlist" description="Join the FettleMed waitlist for early access. Be among the first patients, doctors, and clinics to use India's connected health record platform." />
      <div className="flex flex-col w-full min-h-screen bg-surface-50 font-sans">
        <section className="pt-20 pb-24 md:pt-32 relative z-10">
          <div className="container mx-auto px-4 max-w-6xl">
            <FadeIn eager>
              <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">

                {/* Left: intro copy */}
                <div className="w-full lg:w-1/2 lg:sticky lg:top-32">
                  <h1 className="text-4xl md:text-5xl font-medium text-pine-900 leading-[1.1] mb-6 tracking-tight text-balance">
                    Get early access to your complete health record.
                  </h1>
                  <p className="text-lg md:text-xl text-dim font-medium leading-relaxed mb-8">
                    Join our waitlist for early access to the patient app, doctor portal, or clinic management system.
                  </p>
                  <div className="flex flex-col gap-3 text-sm font-medium text-dim">
                    <span className="flex items-center gap-2 bg-white px-4 py-3 rounded-2xl shadow-sm border border-stone-200 w-fit">
                      <CheckCircle2 className="w-4 h-4 text-pine-600"/> Early access
                    </span>
                    <span className="flex items-center gap-2 bg-white px-4 py-3 rounded-2xl shadow-sm border border-stone-200 w-fit">
                      <CheckCircle2 className="w-4 h-4 text-pine-600"/> Shape the product from day one
                    </span>
                    <span className="flex items-center gap-2 bg-white px-4 py-3 rounded-2xl shadow-sm border border-stone-200 w-fit">
                      <CheckCircle2 className="w-4 h-4 text-pine-600"/> Limited rollout
                    </span>
                  </div>
                </div>

                {/* Right: form */}
                <div className="w-full lg:w-1/2">
                  <div className="bg-white rounded-[2rem] border border-stone-200 p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                    <WaitlistForm />
                  </div>
                </div>

              </div>
            </FadeIn>
          </div>
        </section>
      </div>
    </>
  );
}
