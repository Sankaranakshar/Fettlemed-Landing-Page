import React from 'react';
import { Link } from "react-router-dom";
import { ShieldCheck, Lock, FileCheck2, ArrowRight, User } from "lucide-react";
import { FadeIn } from "@/components/common/FadeIn";

export const Trust = () => {
  return (
    <>
      {/* Screen 1: Trust pillars */}
      <section className="h-[calc(100vh-80px)] min-h-[600px] flex flex-col justify-center bg-surface-50 border-t border-stone-100 overflow-hidden">
        <div className="container mx-auto px-6 max-w-5xl text-center">
          <FadeIn>
            <div className="mb-6">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-pine-900 tracking-tight">Built for trust, from the ground up.</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-4 text-left">
               <div className="bg-white border border-stone-200 p-6 rounded-2xl flex flex-col gap-3 shadow-sm hover:shadow-md transition-shadow">
                 <div className="flex items-center gap-3">
                   <div className="w-10 h-10 bg-pine-50 rounded-xl flex items-center justify-center shrink-0 border border-pine-100">
                     <ShieldCheck className="w-5 h-5 text-pine-700" />
                   </div>
                   <h3 className="text-base font-medium text-pine-900">2-Tap Consent</h3>
                 </div>
                 <p className="text-dim-2 leading-relaxed font-medium text-sm">Grant a doctor access to your records in two taps. Revoke it in one. Set it to expire after a single consultation or keep it open. You decide, every time, from the app.</p>
               </div>
               <div className="bg-white border border-stone-200 p-6 rounded-2xl flex flex-col gap-3 shadow-sm hover:shadow-md transition-shadow">
                 <div className="flex items-center gap-3">
                   <div className="w-10 h-10 bg-pine-50 rounded-xl flex items-center justify-center shrink-0 border border-pine-100">
                     <Lock className="w-5 h-5 text-pine-700" />
                   </div>
                   <h3 className="text-base font-medium text-pine-900">Built Inside Real Clinics</h3>
                 </div>
                 <p className="text-dim-2 leading-relaxed font-medium text-sm">Built inside real clinics, watching how doctors actually work. Every feature passes one test: does this reduce a step for the doctor, or add one?</p>
               </div>
               <div className="bg-white border border-stone-200 p-6 rounded-2xl flex flex-col gap-3 shadow-sm hover:shadow-md transition-shadow">
                 <div className="flex items-center gap-3">
                   <div className="w-10 h-10 bg-pine-50 rounded-xl flex items-center justify-center shrink-0 border border-pine-100">
                     <FileCheck2 className="w-5 h-5 text-pine-700" />
                   </div>
                   <h3 className="text-base font-medium text-pine-900">Your data is yours. Always.</h3>
                 </div>
                 <p className="text-dim-2 leading-relaxed font-medium text-sm">FettleMed never sells your data. No ads, no third-party sharing. Your records are encrypted, stored in India, and accessible only to people you explicitly authorise.</p>
               </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Screen 2: Co-founders */}
      <section className="h-[calc(100vh-80px)] min-h-[600px] flex flex-col justify-center bg-surface-50 border-t border-stone-100 overflow-hidden">
        <div className="container mx-auto px-6 max-w-5xl">
          <FadeIn>
            {/* Co-build with Doctors block */}
            <div className="bg-pine-900 rounded-2xl p-7 text-left mb-6">
               <p className="text-sm font-medium text-pine-400 uppercase tracking-widest mb-3">The clinical co-founders behind FettleMed</p>
               <h3 className="text-xl md:text-2xl font-medium text-white mb-6 tracking-tight">Co-built with Doctors</h3>
               <div className="grid md:grid-cols-2 gap-6">
                  {/* Dr. Sriram Shankar */}
                  <div className="flex gap-4 items-start">
                     <div className="w-14 h-14 rounded-2xl bg-pine-700 border border-pine-600 flex items-center justify-center shrink-0">
                        <User className="w-7 h-7 text-pine-300" />
                     </div>
                     <div>
                        <p className="text-white font-medium text-base mb-1">Dr. Sriram Shankar</p>
                        <p className="text-pine-400 text-xs font-medium mb-2 uppercase tracking-widest">MBBS, FRCS (England), FAMS (Singapore)</p>
                        <p className="text-pine-200 leading-relaxed text-sm font-medium">Senior Consultant Cardio-thoracic surgeon with nearly four decades of experience. Developed less invasive procedures and helped establish the pediatric heart surgery program at KK Women's and Children's Hospital.</p>
                     </div>
                  </div>
                  {/* Dr. Bhavani Sriram */}
                  <div className="flex gap-4 items-start">
                     <div className="w-14 h-14 rounded-2xl bg-pine-700 border border-pine-600 flex items-center justify-center shrink-0">
                        <User className="w-7 h-7 text-pine-300" />
                     </div>
                     <div>
                        <p className="text-white font-medium text-base mb-1">Dr. Bhavani Sriram</p>
                        <p className="text-pine-400 text-xs font-medium mb-2 uppercase tracking-widest">MBBS, MRCP (UK) (Paediatrics)</p>
                        <p className="text-pine-200 leading-relaxed text-sm font-medium">Honoured as a 'Singapore Silent Hero' for dedication to community health. Fierce advocate for making healthcare accessible for all, pioneering care for adults with intellectual disabilities.</p>
                     </div>
                  </div>
               </div>
               <p className="text-pine-300 text-sm font-medium mt-6 text-center">They built this because they've lived the problem. Join the pilot they're personally overseeing.</p>
            </div>

            <div className="text-center">
              <Link to="/security" className="inline-flex items-center gap-2 font-medium text-pine-700 hover:text-pine-900 text-sm border border-pine-200 bg-white hover:bg-pine-50 px-5 py-2.5 rounded-xl transition-colors shadow-sm">
                 Learn more about our security practices <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
};
