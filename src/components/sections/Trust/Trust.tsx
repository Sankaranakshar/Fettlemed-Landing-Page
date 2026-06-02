import React from 'react';
import { Link } from "react-router-dom";
import { ShieldCheck, Stethoscope, FileCheck2, ArrowRight, User } from "lucide-react";
import { FadeIn } from "@/components/common/FadeIn";

export const Trust = () => {
  return (
    <>
      {/* Screen 1: Trust pillars */}
      <section className="h-[calc(100vh-80px)] min-h-[600px] flex flex-col bg-surface-50 border-t border-stone-100 overflow-hidden">
        <div className="container mx-auto px-6 max-w-5xl flex flex-col flex-1 min-h-0 py-12 md:py-16 justify-center">
          <FadeIn>
            <div className="mb-8 text-center">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-pine-900 tracking-tight">Built for trust, from the ground up.</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-5 text-left">
               <div className="bg-white border border-stone-200 p-7 rounded-2xl flex flex-col gap-4 shadow-sm hover:shadow-md transition-shadow">
                 <div className="flex items-center gap-3">
                   <div className="w-11 h-11 bg-pine-50 rounded-xl flex items-center justify-center shrink-0 border border-pine-100">
                     <ShieldCheck className="w-5 h-5 text-pine-700" />
                   </div>
                   <h3 className="text-lg font-medium text-pine-900">2-Tap Consent</h3>
                 </div>
                 <p className="text-dim-2 leading-relaxed font-medium text-base">Grant a doctor access to your records in two taps. Revoke it in one. Set it to expire after a single consultation or keep it open. You decide, every time, from the app.</p>
               </div>
               <div className="bg-white border border-stone-200 p-7 rounded-2xl flex flex-col gap-4 shadow-sm hover:shadow-md transition-shadow">
                 <div className="flex items-center gap-3">
                   <div className="w-11 h-11 bg-pine-50 rounded-xl flex items-center justify-center shrink-0 border border-pine-100">
                     <Stethoscope className="w-5 h-5 text-pine-700" />
                   </div>
                   <h3 className="text-lg font-medium text-pine-900">Co-developed with Clinicians</h3>
                 </div>
                 <p className="text-dim-2 leading-relaxed font-medium text-base">Developed alongside clinicians watching how doctors actually work. Every feature passes one test: does this reduce a step for the doctor, or add one?</p>
               </div>
               <div className="bg-white border border-stone-200 p-7 rounded-2xl flex flex-col gap-4 shadow-sm hover:shadow-md transition-shadow">
                 <div className="flex items-center gap-3">
                   <div className="w-11 h-11 bg-pine-50 rounded-xl flex items-center justify-center shrink-0 border border-pine-100">
                     <FileCheck2 className="w-5 h-5 text-pine-700" />
                   </div>
                   <h3 className="text-lg font-medium text-pine-900">Your data is yours. Always.</h3>
                 </div>
                 <p className="text-dim-2 leading-relaxed font-medium text-base">We do not sell your health data. No advertising. Your records are encrypted and stored in India. Access is controlled through the consent you give.</p>
               </div>
            </div>
            <div className="text-center mt-6">
              <Link to="/security" className="inline-flex items-center gap-2 font-medium text-pine-700 hover:text-pine-900 text-sm border border-pine-200 bg-white hover:bg-pine-50 px-5 py-3 rounded-xl transition-colors shadow-sm">
                How we protect your data <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Screen 2: Co-founders */}
      <section className="h-[calc(100vh-80px)] min-h-[600px] flex flex-col bg-surface-50 border-t border-stone-100 overflow-hidden">
        <div className="container mx-auto px-6 max-w-5xl flex flex-col flex-1 min-h-0 py-12 md:py-16 justify-center">
          <FadeIn>
            <div className="mb-8 text-center">
              <p className="text-sm font-medium text-pine-500 uppercase tracking-widest mb-3">The clinical co-founders behind FettleMed</p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-pine-900 tracking-tight">Co-built with Doctors</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-5 text-left">
              {/* Dr. Sriram Shankar */}
              <div className="bg-white border border-stone-200 p-7 rounded-2xl flex flex-col gap-4 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 bg-pine-50 rounded-xl flex items-center justify-center shrink-0 border border-pine-100">
                    <User className="w-5 h-5 text-pine-700" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-pine-900">Dr. Sriram Shankar</h3>
                    <p className="text-pine-500 text-xs font-medium uppercase tracking-wide mt-0.5">MBBS, FRCS (England), FAMS (Singapore)</p>
                  </div>
                </div>
                <p className="text-dim-2 leading-relaxed font-medium text-base">Senior Consultant Cardiothoracic Surgeon with nearly four decades of experience. Pioneer in minimally invasive cardiac surgery and instrumental in establishing paediatric heart surgery programmes across multiple hospitals in Southeast Asia.</p>
              </div>
              {/* Dr. Bhavani Sriram */}
              <div className="bg-white border border-stone-200 p-7 rounded-2xl flex flex-col gap-4 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 bg-pine-50 rounded-xl flex items-center justify-center shrink-0 border border-pine-100">
                    <User className="w-5 h-5 text-pine-700" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-pine-900">Dr. Bhavani Sriram</h3>
                    <p className="text-pine-500 text-xs font-medium uppercase tracking-wide mt-0.5">MBBS, MRCP (UK) (Paediatrics)</p>
                  </div>
                </div>
                <p className="text-dim-2 leading-relaxed font-medium text-base">Recognised as a Singapore Silent Hero, she is a leading advocate for inclusive healthcare and a pioneer in specialised medical services for people with intellectual and developmental disabilities.</p>
              </div>
            </div>
            <div className="text-center mt-6">
              <Link to="/about" className="inline-flex items-center gap-2 font-medium text-pine-700 hover:text-pine-900 text-sm border border-pine-200 bg-white hover:bg-pine-50 px-5 py-3 rounded-xl transition-colors shadow-sm">
                Meet the team behind FettleMed <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
};
