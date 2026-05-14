import React from 'react';
import { Combine, Activity, Share2, Users } from "lucide-react";
import { FadeIn } from "@/components/common/FadeIn";

export function PatientFeatures() {
  return (
    <section className="py-24 bg-surface-50 border-b border-stone-100">
       <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <FadeIn className="text-center mb-16 max-w-3xl mx-auto">
             <h2 className="text-3xl md:text-5xl font-bold text-pine-900 tracking-tight mb-6 text-balance">What Fettlemed gives you</h2>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 auto-rows-fr">
             <FadeIn delay={0.1} className="bg-white border border-stone-200 rounded-3xl p-8 lg:p-10 shadow-sm flex flex-col h-full hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-pine-50 rounded-2xl flex items-center justify-center mb-6 border border-pine-100">
                   <Combine className="w-7 h-7 text-pine-700" />
                </div>
                <h3 className="text-2xl font-bold text-pine-900 mb-4 tracking-tight text-balance">Everything in one place</h3>
                <p className="text-stone-600 leading-relaxed font-medium text-lg">Every prescription, lab report, scan, and consultation note. Uploaded by you or sent directly from your doctor. Always with you.</p>
             </FadeIn>

             <FadeIn delay={0.2} className="bg-white border border-stone-200 rounded-3xl p-8 lg:p-10 shadow-sm flex flex-col h-full hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-pine-50 rounded-2xl flex items-center justify-center mb-6 border border-pine-100">
                   <Activity className="w-7 h-7 text-pine-700" />
                </div>
                <h3 className="text-2xl font-bold text-pine-900 mb-4 tracking-tight text-balance">Your health journey.</h3>
                <p className="text-stone-600 leading-relaxed font-medium text-lg">See how your health has changed. Track a condition across multiple consultations. Walk into your next visit knowing what your doctor knew at the last one.</p>
             </FadeIn>

             <FadeIn delay={0.3} className="bg-white border border-stone-200 rounded-3xl p-8 lg:p-10 shadow-sm flex flex-col h-full hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-pine-50 rounded-2xl flex items-center justify-center mb-6 border border-pine-100">
                   <Share2 className="w-7 h-7 text-pine-700" />
                </div>
                <h3 className="text-2xl font-bold text-pine-900 mb-4 tracking-tight text-balance">One tap to share,<br/> one tap to revoke</h3>
                <p className="text-stone-600 leading-relaxed font-medium text-lg">Share your full health profile with any doctor in seconds. Set it to expire after one consultation or keep it open. Change your mind anytime.</p>
             </FadeIn>

             <FadeIn delay={0.4} className="bg-white border border-stone-200 rounded-3xl p-8 lg:p-10 shadow-sm flex flex-col h-full hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-pine-50 rounded-2xl flex items-center justify-center mb-6 border border-pine-100">
                   <Users className="w-7 h-7 text-pine-700" />
                </div>
                <h3 className="text-2xl font-bold text-pine-900 mb-4 tracking-tight text-balance">Your whole family, one place</h3>
                <p className="text-stone-600 leading-relaxed font-medium text-lg">Manage health records, track vaccinations, and store documents for your children, parents, and dependents — all under your single login, with your consent controlling everything.</p>
             </FadeIn>
          </div>
       </div>
    </section>
  );
}
