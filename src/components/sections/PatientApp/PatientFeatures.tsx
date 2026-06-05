import React from 'react';
import { Combine, Activity, Share2 } from "lucide-react";
import { FadeIn } from "@/components/common/FadeIn";

export function PatientFeatures() {
  return (
    <section className="py-12 md:py-16 bg-surface-50 border-b border-stone-100">
      <div className="container mx-auto px-6 max-w-6xl">
        <FadeIn className="text-center mb-6">
          <h2 className="text-3xl md:text-4xl font-medium text-pine-900 tracking-tight text-balance">What changes when your records are finally in one place.</h2>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-4">
          <FadeIn delay={0.1} className="bg-white border border-stone-200 rounded-2xl p-5 lg:p-6 shadow-sm flex flex-col hover:shadow-md transition-shadow">
            <div className="w-10 h-10 bg-pine-50 rounded-xl flex items-center justify-center mb-4 border border-pine-100 shrink-0">
              <Combine className="w-5 h-5 text-pine-700" />
            </div>
            <h3 className="text-lg font-medium text-pine-900 mb-2 tracking-tight">Your full history, not just the last visit</h3>
            <ul className="space-y-1.5 text-dim-2 font-medium text-sm">
              <li className="flex items-start gap-2"><span className="text-pine-500 mt-0.5 shrink-0">•</span>Every prescription, lab report, scan, and consultation note. Uploaded by you or sent from your doctor.</li>
              <li className="flex items-start gap-2"><span className="text-pine-500 mt-0.5 shrink-0">•</span>On your phone. No paper folders to carry to the appointment.</li>
              <li className="flex items-start gap-2 text-pine-600 font-medium"><span className="text-pine-500 mt-0.5 shrink-0">•</span>Core patient features are free. Always.</li>
            </ul>
          </FadeIn>

          <FadeIn delay={0.2} className="bg-white border border-stone-200 rounded-2xl p-5 lg:p-6 shadow-sm flex flex-col hover:shadow-md transition-shadow">
            <div className="w-10 h-10 bg-pine-50 rounded-xl flex items-center justify-center mb-4 border border-pine-100 shrink-0">
              <Activity className="w-5 h-5 text-pine-700" />
            </div>
            <h3 className="text-lg font-medium text-pine-900 mb-2 tracking-tight">Your health, across time</h3>
            <ul className="space-y-1.5 text-dim-2 font-medium text-sm">
              <li className="flex items-start gap-2"><span className="text-pine-500 mt-0.5 shrink-0">•</span>Track how a condition changes across multiple consultations</li>
              <li className="flex items-start gap-2"><span className="text-pine-500 mt-0.5 shrink-0">•</span>Walk into every appointment knowing what your last doctor explained</li>
              <li className="flex items-start gap-2"><span className="text-pine-500 mt-0.5 shrink-0">•</span>See patterns that individual reports can't show</li>
            </ul>
          </FadeIn>

          <FadeIn delay={0.3} className="bg-white border border-stone-200 rounded-2xl p-5 lg:p-6 shadow-sm flex flex-col hover:shadow-md transition-shadow">
            <div className="w-10 h-10 bg-pine-50 rounded-xl flex items-center justify-center mb-4 border border-pine-100 shrink-0">
              <Share2 className="w-5 h-5 text-pine-700" />
            </div>
            <h3 className="text-lg font-medium text-pine-900 mb-2 tracking-tight">Two taps to share, one tap to revoke</h3>
            <ul className="space-y-1.5 text-dim-2 font-medium text-sm">
              <li className="flex items-start gap-2"><span className="text-pine-500 mt-0.5 shrink-0">•</span>Share your full history with any FettleMed doctor in two taps</li>
              <li className="flex items-start gap-2"><span className="text-pine-500 mt-0.5 shrink-0">•</span>Set access to expire after one consultation, or keep it open for ongoing care</li>
              <li className="flex items-start gap-2"><span className="text-pine-500 mt-0.5 shrink-0">•</span>Revoke it in one tap, anytime, from your phone</li>
              <li className="flex items-start gap-2 text-pine-700 font-medium"><span className="text-pine-500 mt-0.5 shrink-0">•</span>You are notified every time someone views your records</li>
            </ul>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
