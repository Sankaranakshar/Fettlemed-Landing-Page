import React from 'react';
import { FadeIn } from "@/components/common/FadeIn";

export function PatientHowItWorks() {
  return (
    <section className="py-16 md:py-20 bg-surface-50 border-b border-stone-100">
       <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <FadeIn className="text-center mb-10">
             <h2 className="text-3xl md:text-5xl font-medium text-pine-900 tracking-tight text-balance">How it works</h2>
          </FadeIn>

          <div className="space-y-12">
             {/* Step 1 */}
             <FadeIn delay={0.1} className="flex flex-col md:flex-row gap-8 items-start">
                <div className="w-16 h-16 bg-white border border-stone-200 shadow-sm rounded-full flex items-center justify-center text-2xl font-medium text-pine-900 shrink-0">1</div>
                <div>
                   <h3 className="text-2xl font-medium text-pine-900 mb-3 tracking-tight">Create your health profile</h3>
                   <p className="text-dim-2 text-lg font-medium leading-relaxed">Sign up and start building your profile. Upload any reports, prescriptions, or scans you already have. Your health history begins the moment you join.</p>
                </div>
             </FadeIn>

             {/* Step 2 */}
             <FadeIn delay={0.2} className="flex flex-col md:flex-row gap-8 items-start">
                <div className="w-16 h-16 bg-white border border-stone-200 shadow-sm rounded-full flex items-center justify-center text-2xl font-medium text-pine-900 shrink-0">2</div>
                <div>
                   <h3 className="text-2xl font-medium text-pine-900 mb-3 tracking-tight">Records grow with every visit</h3>
                   <p className="text-dim-2 text-lg font-medium leading-relaxed">Visit a FettleMed doctor and notes and prescriptions appear automatically. No uploads needed.</p>
                </div>
             </FadeIn>

             {/* Step 3 */}
             <FadeIn delay={0.3} className="flex flex-col md:flex-row gap-8 items-start">
                <div className="w-16 h-16 bg-white border border-stone-200 shadow-sm rounded-full flex items-center justify-center text-2xl font-medium text-pine-900 shrink-0">3</div>
                <div>
                   <h3 className="text-2xl font-medium text-pine-900 mb-3 tracking-tight">Share with confidence</h3>
                   <p className="text-dim-2 text-lg font-medium leading-relaxed">At your next appointment, share your full history in two taps. Access expires after that visit, or stays open. You stay in control.</p>
                </div>
             </FadeIn>
          </div>

          <FadeIn delay={0.5} className="mt-16 p-6 md:p-8 bg-pine-50 border border-pine-100 rounded-3xl shadow-sm text-center">
             <p className="text-pine-900 font-medium text-lg md:text-xl leading-relaxed">
                Start building your profile on day one. Upload existing records — your history is ready before your first appointment.
             </p>
          </FadeIn>
       </div>
    </section>
  );
}
