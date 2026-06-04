import React from 'react';
import { Link } from "react-router-dom";
import { ShieldCheck, Stethoscope, FileCheck2, ArrowRight, User } from "lucide-react";
import { FadeIn } from "@/components/common/FadeIn";

export const Trust = () => {
  return (
    <section className="py-16 md:py-20 bg-surface-50 border-t border-stone-100">
      <div className="container mx-auto px-6 max-w-5xl">
        <FadeIn>
          <div className="mb-7 text-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-pine-900 tracking-tight">Your health data stays yours.</h2>
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
                 <h3 className="text-lg font-medium text-pine-900">Built with working doctors</h3>
               </div>
               <p className="text-dim-2 leading-relaxed font-medium text-base">Built with doctors who are still in practice. Every feature passes one test: does this save the doctor a step, or add one?</p>
             </div>
             <div className="bg-white border border-stone-200 p-7 rounded-2xl flex flex-col gap-4 shadow-sm hover:shadow-md transition-shadow">
               <div className="flex items-center gap-3">
                 <div className="w-11 h-11 bg-pine-50 rounded-xl flex items-center justify-center shrink-0 border border-pine-100">
                   <FileCheck2 className="w-5 h-5 text-pine-700" />
                 </div>
                 <h3 className="text-lg font-medium text-pine-900">Your data is yours. Always.</h3>
               </div>
               <p className="text-dim-2 leading-relaxed font-medium text-base">We do not sell your health data. No advertising. Encrypted in transit. Stored in India. Access controlled entirely by you.</p>
             </div>
          </div>

          {/* Compact founder strip */}
          <div className="border-t border-stone-100 mt-6 pt-5 grid md:grid-cols-2 gap-3 max-w-2xl mx-auto w-full">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-pine-50 rounded-full flex items-center justify-center border border-pine-100 shrink-0">
                <User className="w-5 h-5 text-pine-300" />
              </div>
              <div>
                <p className="text-sm font-medium text-pine-900">Dr. Sriram Shankar</p>
                <p className="text-xs text-dim font-medium">Co-founder · FRCS (England) · FAMS (Singapore)</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-pine-50 rounded-full flex items-center justify-center border border-pine-100 shrink-0">
                <User className="w-5 h-5 text-pine-300" />
              </div>
              <div>
                <p className="text-sm font-medium text-pine-900">Dr. Bhavani Sriram</p>
                <p className="text-xs text-dim font-medium">Co-founder · MRCP (UK) · Singapore Silent Hero</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center gap-6 mt-5">
            <Link to="/security" className="inline-flex items-center gap-2 font-medium text-pine-700 hover:text-pine-900 text-sm border border-pine-200 bg-white hover:bg-pine-50 px-5 py-3 rounded-xl transition-colors shadow-sm">
              How we protect your data <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/about" className="inline-flex items-center gap-2 font-medium text-pine-700 hover:text-pine-900 text-sm border border-pine-200 bg-white hover:bg-pine-50 px-5 py-3 rounded-xl transition-colors shadow-sm">
              Meet the founders <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
