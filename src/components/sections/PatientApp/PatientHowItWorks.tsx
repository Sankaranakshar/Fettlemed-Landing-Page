import React from 'react';
import { FadeIn } from "@/components/common/FadeIn";

export function PatientHowItWorks() {
  return (
    <section className="py-12 md:py-16 bg-surface-50 border-b border-stone-100">
      <div className="container mx-auto px-6 max-w-4xl">
        <FadeIn className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-medium text-pine-900 tracking-tight text-balance">How it works.</h2>
        </FadeIn>

        <div className="space-y-6">
          {/* Step 1 */}
          <FadeIn delay={0.1} className="flex flex-col md:flex-row gap-6 items-start">
            <div className="w-14 h-14 bg-white border border-stone-200 shadow-sm rounded-full flex items-center justify-center text-xl font-medium text-pine-900 shrink-0">1</div>
            <div>
              <h3 className="text-xl font-medium text-pine-900 mb-2 tracking-tight">Upload what you already have</h3>
              <p className="text-dim-2 text-base font-medium leading-relaxed">Upload what you have. Old reports, PDFs, photos. Your history doesn't start at zero.</p>
            </div>
          </FadeIn>

          {/* Step 2 */}
          <FadeIn delay={0.2} className="flex flex-col md:flex-row gap-6 items-start">
            <div className="w-14 h-14 bg-white border border-stone-200 shadow-sm rounded-full flex items-center justify-center text-xl font-medium text-pine-900 shrink-0">2</div>
            <div>
              <h3 className="text-xl font-medium text-pine-900 mb-2 tracking-tight">Records grow with every visit</h3>
              <p className="text-dim-2 text-base font-medium leading-relaxed">Show your QR at a FettleMed clinic. You approve. Notes and prescriptions sync to you.</p>
            </div>
          </FadeIn>

          {/* Step 3 */}
          <FadeIn delay={0.3} className="flex flex-col md:flex-row gap-6 items-start">
            <div className="w-14 h-14 bg-white border border-stone-200 shadow-sm rounded-full flex items-center justify-center text-xl font-medium text-pine-900 shrink-0">3</div>
            <div>
              <h3 className="text-xl font-medium text-pine-900 mb-2 tracking-tight">Walk into your next appointment ready</h3>
              <p className="text-dim-2 text-base font-medium leading-relaxed">Share in two taps at your next visit. Expire it or keep it open. Revoke anytime.</p>
            </div>
          </FadeIn>
        </div>

      </div>
    </section>
  );
}
