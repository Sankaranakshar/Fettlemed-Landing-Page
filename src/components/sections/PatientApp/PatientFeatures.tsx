import React from 'react';
import { Combine, Activity, Share2, Users } from "lucide-react";
import { FadeIn } from "@/components/common/FadeIn";

export function PatientFeatures() {
  return (
    <section className="py-16 md:py-20 bg-surface-50 border-b border-stone-100">
       <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <FadeIn className="text-center mb-14 max-w-3xl mx-auto">
             <h2 className="text-3xl md:text-4xl font-medium text-pine-900 tracking-tight mb-4 text-balance">What changes when your records are finally in one place.</h2>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-5 lg:gap-6 auto-rows-fr">
             <FadeIn delay={0.1} className="bg-white border border-stone-200 rounded-3xl p-7 lg:p-8 shadow-sm flex flex-col hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-pine-50 rounded-2xl flex items-center justify-center mb-5 border border-pine-100 shrink-0">
                   <Combine className="w-6 h-6 text-pine-700" />
                </div>
                <h3 className="text-xl font-medium text-pine-900 mb-3 tracking-tight">Everything in one place</h3>
                <ul className="space-y-2 text-dim-2 font-medium text-base">
                   <li className="flex items-start gap-2"><span className="text-pine-500 mt-0.5 shrink-0">•</span>Every prescription, lab report, scan, and consultation note — uploaded by you or sent from your doctor</li>
                   <li className="flex items-start gap-2"><span className="text-pine-500 mt-0.5 shrink-0">•</span>Available on your phone, anytime, anywhere</li>
                   <li className="flex items-start gap-2 text-pine-600 font-medium"><span className="text-pine-500 mt-0.5 shrink-0">•</span>Free for patients. Always.</li>
                </ul>
             </FadeIn>

             <FadeIn delay={0.2} className="bg-white border border-stone-200 rounded-3xl p-7 lg:p-8 shadow-sm flex flex-col hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-pine-50 rounded-2xl flex items-center justify-center mb-5 border border-pine-100 shrink-0">
                   <Activity className="w-6 h-6 text-pine-700" />
                </div>
                <h3 className="text-xl font-medium text-pine-900 mb-3 tracking-tight">Your health, across time</h3>
                <ul className="space-y-2 text-dim-2 font-medium text-base">
                   <li className="flex items-start gap-2"><span className="text-pine-500 mt-0.5 shrink-0">•</span>Track how a condition changes across multiple consultations</li>
                   <li className="flex items-start gap-2"><span className="text-pine-500 mt-0.5 shrink-0">•</span>Walk into every appointment knowing what your last doctor explained</li>
                   <li className="flex items-start gap-2"><span className="text-pine-500 mt-0.5 shrink-0">•</span>See patterns that individual reports can't show</li>
                </ul>
             </FadeIn>

             <FadeIn delay={0.3} className="bg-white border border-stone-200 rounded-3xl p-7 lg:p-8 shadow-sm flex flex-col hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-pine-50 rounded-2xl flex items-center justify-center mb-5 border border-pine-100 shrink-0">
                   <Share2 className="w-6 h-6 text-pine-700" />
                </div>
                <h3 className="text-xl font-medium text-pine-900 mb-3 tracking-tight">One tap to share, one tap to revoke</h3>
                <ul className="space-y-2 text-dim-2 font-medium text-base">
                   <li className="flex items-start gap-2"><span className="text-pine-500 mt-0.5 shrink-0">•</span>Share your full history with any doctor in two taps</li>
                   <li className="flex items-start gap-2"><span className="text-pine-500 mt-0.5 shrink-0">•</span>Set access to expire after one consultation, or keep it open for ongoing care</li>
                   <li className="flex items-start gap-2"><span className="text-pine-500 mt-0.5 shrink-0">•</span>Revoke it in one tap, anytime, from your phone</li>
                   <li className="flex items-start gap-2 text-pine-700 font-medium"><span className="text-pine-500 mt-0.5 shrink-0">•</span>You are notified every time someone views your records</li>
                </ul>
             </FadeIn>

             <FadeIn delay={0.4} className="bg-white border border-stone-200 rounded-3xl p-7 lg:p-8 shadow-sm flex flex-col hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-pine-50 rounded-2xl flex items-center justify-center mb-5 border border-pine-100 shrink-0">
                   <Users className="w-6 h-6 text-pine-700" />
                </div>
                <h3 className="text-xl font-medium text-pine-900 mb-3 tracking-tight">One login. Your whole family's health.</h3>
                <ul className="space-y-2 text-dim-2 font-medium text-base">
                   <li className="flex items-start gap-2"><span className="text-pine-500 mt-0.5 shrink-0">•</span>Manage your whole family's health under one login</li>
                   <li className="flex items-start gap-2"><span className="text-pine-500 mt-0.5 shrink-0">•</span>Each family member's records kept separately and securely</li>
                   <li className="flex items-start gap-2 text-pine-700 font-medium"><span className="text-pine-500 mt-0.5 shrink-0">•</span>Their records stay private to them. You manage access, not content.</li>
                </ul>
             </FadeIn>
          </div>
       </div>
    </section>
  );
}
