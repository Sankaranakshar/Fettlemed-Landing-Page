import React from 'react';
import { FadeIn } from "@/components/common/FadeIn";

export function ClinicSwitching() {
  return (
    <section className="py-24 bg-white border-b border-stone-100">
       <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <FadeIn className="text-center mb-16">
             <h2 className="text-3xl md:text-5xl font-bold text-pine-900 tracking-tight text-balance">Switching from paper</h2>
          </FadeIn>

          <div className="space-y-8">
             <FadeIn delay={0.1}>
                <h3 className="text-xl font-bold text-pine-900 mb-2">You do not switch everything at once</h3>
                <p className="text-stone-600 text-lg font-medium leading-relaxed">FettleMed is modular. Start with appointments and patient registration. Add billing when the clinic is ready. Expand features at your own pace. You decide what goes first.</p>
             </FadeIn>
             
             <FadeIn delay={0.2}>
                <h3 className="text-xl font-bold text-pine-900 mb-2">Your existing patients are not disrupted</h3>
                <p className="text-stone-600 text-lg font-medium leading-relaxed">No historical data migration required. The clinic's digital record starts from the first day on FettleMed. Existing patients are registered as they walk in.</p>
             </FadeIn>
             
             <FadeIn delay={0.3}>
                <h3 className="text-xl font-bold text-pine-900 mb-2">Your staff will not have a bad week</h3>
                <p className="text-stone-600 text-lg font-medium leading-relaxed">We support every clinic through onboarding, not just on setup day but through the full transition.</p>
             </FadeIn>
             
             <FadeIn delay={0.4}>
                <h3 className="text-xl font-bold text-pine-900 mb-2">No new hardware</h3>
                <p className="text-stone-600 text-lg font-medium leading-relaxed">FettleMed works on the devices the clinic already has: tablets, laptops, desktops. Whatever the front desk currently uses.</p>
             </FadeIn>
             
             <FadeIn delay={0.5}>
                <h3 className="text-xl font-bold text-pine-900 mb-2">If the clinic changes its mind</h3>
                <p className="text-stone-600 text-lg font-medium leading-relaxed">All data, including patient records, registration history, and billing, can be exported in full. Nothing is locked in.</p>
             </FadeIn>
             
             <FadeIn delay={0.6}>
                <h3 className="text-xl font-bold text-pine-900 mb-2">Branch management</h3>
                <p className="text-stone-600 text-lg font-medium leading-relaxed">Manage multiple branches from one dashboard. Already available.</p>
             </FadeIn>
          </div>
       </div>
    </section>
  );
}
