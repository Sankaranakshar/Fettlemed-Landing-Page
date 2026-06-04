import React from 'react';
import { FadeIn } from "@/components/common/FadeIn";

export function PatientHowItWorks() {
  return (
    <section className="py-16 md:py-20 bg-surface-50 border-b border-stone-100">
      <div className="container mx-auto px-6 max-w-4xl">
        <FadeIn className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-medium text-pine-900 tracking-tight text-balance">What actually happens when you join</h2>
        </FadeIn>

        <div className="space-y-6">
          {/* Step 1 */}
          <FadeIn delay={0.1} className="flex flex-col md:flex-row gap-6 items-start">
            <div className="w-14 h-14 bg-white border border-stone-200 shadow-sm rounded-full flex items-center justify-center text-xl font-medium text-pine-900 shrink-0">1</div>
            <div>
              <h3 className="text-xl font-medium text-pine-900 mb-2 tracking-tight">Upload what you already have</h3>
              <p className="text-dim-2 text-base font-medium leading-relaxed">Sign up and upload any reports, prescriptions, or scans you already have. Paper documents, PDFs, photos of old prescriptions. All of it. Your history doesn't start at zero.</p>
            </div>
          </FadeIn>

          {/* Step 2 */}
          <FadeIn delay={0.2} className="flex flex-col md:flex-row gap-6 items-start">
            <div className="w-14 h-14 bg-white border border-stone-200 shadow-sm rounded-full flex items-center justify-center text-xl font-medium text-pine-900 shrink-0">2</div>
            <div>
              <h3 className="text-xl font-medium text-pine-900 mb-2 tracking-tight">Records grow with every visit</h3>
              <p className="text-dim-2 text-base font-medium leading-relaxed">At a FettleMed clinic, show your QR code at check-in. Your app confirms consent. The doctor gets access. After the consultation, their notes and prescription sync directly to your profile. You triggered it. Nothing happens without that confirmation.</p>
            </div>
          </FadeIn>

          {/* Step 3 */}
          <FadeIn delay={0.3} className="flex flex-col md:flex-row gap-6 items-start">
            <div className="w-14 h-14 bg-white border border-stone-200 shadow-sm rounded-full flex items-center justify-center text-xl font-medium text-pine-900 shrink-0">3</div>
            <div>
              <h3 className="text-xl font-medium text-pine-900 mb-2 tracking-tight">Walk into your next appointment ready</h3>
              <p className="text-dim-2 text-base font-medium leading-relaxed">At your next appointment, share your full history in two taps. Set it to expire after the visit, or keep it open for ongoing care. You can revoke it the moment the consultation ends.</p>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.5} className="mt-8 p-5 md:p-6 bg-pine-50 border border-pine-100 rounded-2xl shadow-sm text-center">
          <p className="text-pine-900 font-medium text-base md:text-lg leading-relaxed">
            Start building your profile on day one. Upload existing records and your history is ready before your first appointment.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
