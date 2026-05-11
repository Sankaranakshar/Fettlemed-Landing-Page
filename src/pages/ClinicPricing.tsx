import React, { useState } from "react";
import { SEO } from '@/components/common/SEO';
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { Check } from "lucide-react";
import { Button } from "@/components/common/Button";
import { WaitlistModal } from "@/components/common/WaitlistModal";

export default function ClinicPricing() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <WaitlistModal open={modalOpen} onClose={() => setModalOpen(false)} />
      <SEO title="Clinic Pricing" description="Pricing for FettleMed Clinic Management." />
      <div className="flex flex-col w-full bg-white pt-24 pb-32">
      <div className="container mx-auto px-4 max-w-[1200px]">
        <Breadcrumbs />
        <div className="text-center max-w-[800px] mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-stone-900 mb-6 tracking-tight">Plans built for clinics of every size.</h1>
          <p className="text-xl text-stone-600">We believe pricing should scale with your clinic. A solo GP shouldn’t pay what a 10-doctor polyclinic pays. Our tiered model ensures you only pay for what you need, with the ability to add modules as your practice grows.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
           <div className="bg-white border border-stone-200 rounded-3xl p-8 shadow-sm flex flex-col">
             <h3 className="text-2xl font-bold text-stone-900 mb-2">Starter</h3>
             <p className="text-stone-500 mb-6">For solo GP practices.</p>
             <div className="mb-8 font-semibold text-stone-900 border-b pb-6">1 practitioner, up to 2 staff accounts.</div>
             <ul className="space-y-4 mb-8 flex-grow">
               <li className="flex gap-3"><Check className="w-5 h-5 text-pine-500 shrink-0"/> Patient registration</li>
               <li className="flex gap-3"><Check className="w-5 h-5 text-pine-500 shrink-0"/> Appointments</li>
               <li className="flex gap-3"><Check className="w-5 h-5 text-pine-500 shrink-0"/> E-prescriptions</li>
               <li className="flex gap-3"><Check className="w-5 h-5 text-pine-500 shrink-0"/> Basic billing</li>
             </ul>
           </div>

           <div className="bg-stone-900 border border-stone-800 rounded-3xl p-8 shadow-md flex flex-col text-white relative">
             <div className="absolute top-0 left-1/2 transform -transtone-x-1/2 -transtone-y-1/2 bg-pine-500 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">Most Popular</div>
             <h3 className="text-2xl font-bold text-white mb-2">Growth</h3>
             <p className="text-stone-400 mb-6">For single-specialty clinics.</p>
             <div className="mb-8 font-semibold text-stone-200 border-b border-stone-700 pb-6">2-5 doctors.</div>
             <p className="text-pine-400 text-sm font-semibold mb-4 uppercase tracking-wider">All Starter features, plus:</p>
             <ul className="space-y-4 mb-8 flex-grow text-stone-300">
               <li className="flex gap-3"><Check className="w-5 h-5 text-pine-500 shrink-0"/> Lab integration</li>
               <li className="flex gap-3"><Check className="w-5 h-5 text-pine-500 shrink-0"/> Advanced reporting</li>
               <li className="flex gap-3"><Check className="w-5 h-5 text-pine-500 shrink-0"/> Patient queue management</li>
               <li className="flex gap-3"><Check className="w-5 h-5 text-pine-500 shrink-0"/> SMS reminders</li>
             </ul>
           </div>

           <div className="bg-white border border-stone-200 rounded-3xl p-8 shadow-sm flex flex-col">
             <h3 className="text-2xl font-bold text-stone-900 mb-2">Enterprise</h3>
             <p className="text-stone-500 mb-6">For polyclinics and multi-location practices.</p>
             <div className="mb-8 font-semibold text-stone-900 border-b pb-6">Custom sizing.</div>
             <p className="text-stone-900 text-sm font-semibold mb-4 uppercase tracking-wider">All Growth features, plus:</p>
             <ul className="space-y-4 mb-8 flex-grow">
               <li className="flex gap-3"><Check className="w-5 h-5 text-pine-500 shrink-0"/> Multi-location management</li>
               <li className="flex gap-3"><Check className="w-5 h-5 text-pine-500 shrink-0"/> Custom role configurations</li>
               <li className="flex gap-3"><Check className="w-5 h-5 text-pine-500 shrink-0"/> Priority support</li>
               <li className="flex gap-3"><Check className="w-5 h-5 text-pine-500 shrink-0"/> Dedicated onboarding</li>
             </ul>
           </div>
        </div>

        <div className="mt-20 bg-pine-50 border border-pine-100 rounded-3xl p-8 md:p-12 text-center max-w-[800px] mx-auto">
           <h2 className="text-3xl font-bold text-pine-900 mb-4">Founding member pricing</h2>
           <p className="text-lg text-pine-800 mb-8 leading-relaxed">Clinics that join during our early access period (Q3 2026) receive founding member pricing locked in for 24 months. This includes priority onboarding, direct access to our product team for feature requests, and the best price we’ll ever offer.</p>
           <Button variant="animated" size="lg" onClick={() => setModalOpen(true)} className="bg-pine-600 hover:bg-pine-700 text-white h-14 px-10 text-lg rounded-xl shadow-md">Secure founding member pricing</Button>
        </div>
      </div>
    </div>
      </>
  );
}
