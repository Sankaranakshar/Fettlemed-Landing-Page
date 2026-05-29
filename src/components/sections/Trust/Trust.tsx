import React from 'react';
import { Link } from "react-router-dom";
import { ShieldCheck, Stethoscope, FileCheck2, ArrowRight, User } from "lucide-react";
import { FadeIn } from "@/components/common/FadeIn";

export const Trust = () => {
  return (
    <>
      {/* Screen 1: Trust pillars */}
      <section className="h-[calc(100vh-80px)] min-h-[600px] flex flex-col bg-surface-50 border-t border-stone-100 overflow-hidden">
        <div className="container mx-auto px-6 max-w-5xl flex flex-col flex-1 min-h-0 py-12 md:py-16">
          <FadeIn className="flex flex-col flex-1 min-h-0">
            <div className="mb-8 text-center">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-pine-900 tracking-tight">Built for trust, from the ground up.</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-5 text-left flex-1 min-h-0 content-stretch">
               <div className="bg-white border border-stone-200 p-7 rounded-2xl flex flex-col gap-4 shadow-sm hover:shadow-md transition-shadow h-full">
                 <div className="flex items-center gap-3">
                   <div className="w-11 h-11 bg-pine-50 rounded-xl flex items-center justify-center shrink-0 border border-pine-100">
                     <ShieldCheck className="w-5 h-5 text-pine-700" />
                   </div>
                   <h3 className="text-lg font-medium text-pine-900">2-Tap Consent</h3>
                 </div>
                 <p className="text-dim-2 leading-relaxed font-medium text-base flex-1">Grant a doctor access to your records in two taps. Revoke it in one. Set it to expire after a single consultation or keep it open. You decide, every time, from the app.</p>
               </div>
               <div className="bg-white border border-stone-200 p-7 rounded-2xl flex flex-col gap-4 shadow-sm hover:shadow-md transition-shadow h-full">
                 <div className="flex items-center gap-3">
                   <div className="w-11 h-11 bg-pine-50 rounded-xl flex items-center justify-center shrink-0 border border-pine-100">
                     <Stethoscope className="w-5 h-5 text-pine-700" />
                   </div>
                   <h3 className="text-lg font-medium text-pine-900">Co-developed with Clinicians</h3>
                 </div>
                 <p className="text-dim-2 leading-relaxed font-medium text-base flex-1">Developed alongside clinicians watching how doctors actually work. Every feature passes one test: does this reduce a step for the doctor, or add one?</p>
               </div>
               <div className="bg-white border border-stone-200 p-7 rounded-2xl flex flex-col gap-4 shadow-sm hover:shadow-md transition-shadow h-full">
                 <div className="flex items-center gap-3">
                   <div className="w-11 h-11 bg-pine-50 rounded-xl flex items-center justify-center shrink-0 border border-pine-100">
                     <FileCheck2 className="w-5 h-5 text-pine-700" />
                   </div>
                   <h3 className="text-lg font-medium text-pine-900">Your data is yours. Always.</h3>
                 </div>
                 <p className="text-dim-2 leading-relaxed font-medium text-base flex-1">We do not sell your health data. No advertising. Your records are encrypted and stored in India. Access is controlled through the consent you give.</p>
               </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Screen 2: Co-founders */}
      <section className="h-[calc(100vh-80px)] min-h-[600px] flex flex-col bg-surface-50 border-t border-stone-100 overflow-hidden">
        <div className="container mx-auto px-6 max-w-5xl flex flex-col flex-1 min-h-0 py-12 md:py-16">
          <FadeIn className="flex flex-col flex-1 min-h-0">
            {/* Co-build with Doctors block */}
            <div className="bg-pine-900 rounded-2xl p-8 md:p-10 text-left flex-1 flex flex-col justify-center mb-6">
               <p className="text-sm font-medium text-pine-400 uppercase tracking-widest mb-3">The clinical co-founders behind FettleMed</p>
               <h2 className="text-2xl md:text-3xl font-medium text-white mb-8 tracking-tight">Co-built with Doctors</h2>
               <div className="grid md:grid-cols-2 gap-8">
                  {/* Dr. Sriram Shankar */}
                  <div className="flex gap-5 items-start">
                     <div className="w-16 h-16 rounded-2xl bg-pine-700 border border-pine-600 flex items-center justify-center shrink-0">
                        <User className="w-8 h-8 text-pine-300" />
                     </div>
                     <div>
                        <p className="text-white font-medium text-lg mb-1">Dr. Sriram Shankar</p>
                        <p className="text-pine-400 text-xs font-medium mb-3 uppercase tracking-widest">MBBS, FRCS (England), FAMS (Singapore)</p>
                        <p className="text-pine-200 leading-relaxed text-base font-medium">Senior Consultant Cardio-thoracic surgeon with nearly four decades of experience. Developed less invasive procedures and helped establish the pediatric heart surgery program at KK Women's and Children's Hospital.</p>
                     </div>
                  </div>
                  {/* Dr. Bhavani Sriram */}
                  <div className="flex gap-5 items-start">
                     <div className="w-16 h-16 rounded-2xl bg-pine-700 border border-pine-600 flex items-center justify-center shrink-0">
                        <User className="w-8 h-8 text-pine-300" />
                     </div>
                     <div>
                        <p className="text-white font-medium text-lg mb-1">Dr. Bhavani Sriram</p>
                        <p className="text-pine-400 text-xs font-medium mb-3 uppercase tracking-widest">MBBS, MRCP (UK) (Paediatrics)</p>
                        <p className="text-pine-200 leading-relaxed text-base font-medium">Honoured as a 'Singapore Silent Hero' for dedication to community health. Fierce advocate for making healthcare accessible for all, pioneering care for adults with intellectual disabilities.</p>
                     </div>
                  </div>
               </div>
               <p className="text-pine-300 text-base font-medium mt-8 text-center">They built this because they've lived the problem. Join the pilot they're personally overseeing.</p>
            </div>

            <div className="text-center">
              <Link to="/security" className="inline-flex items-center gap-2 font-medium text-pine-700 hover:text-pine-900 text-sm border border-pine-200 bg-white hover:bg-pine-50 px-5 py-3 rounded-xl transition-colors shadow-sm">
                 Learn more about our security practices <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
};
