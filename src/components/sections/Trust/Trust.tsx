import React from 'react';
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ShieldCheck, Stethoscope, FileCheck2, ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/common/FadeIn";

export const Trust = () => {
  return (
    <section className="py-12 md:py-16 bg-surface-50 border-t border-stone-100">
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
               <p className="text-dim-2 leading-relaxed text-base">Grant a doctor access in two taps, revoke it in one. You decide, every time.</p>
             </div>
             <div className="bg-white border border-stone-200 p-7 rounded-2xl flex flex-col gap-4 shadow-sm hover:shadow-md transition-shadow">
               <div className="flex items-center gap-3">
                 <div className="w-11 h-11 bg-pine-50 rounded-xl flex items-center justify-center shrink-0 border border-pine-100">
                   <Stethoscope className="w-5 h-5 text-pine-700" />
                 </div>
                 <h3 className="text-lg font-medium text-pine-900">Built with working doctors</h3>
               </div>
               <p className="text-dim-2 leading-relaxed text-base">Every feature passes one test: does it save the doctor a step, or add one?</p>
             </div>
             <div className="bg-white border border-stone-200 p-7 rounded-2xl flex flex-col gap-4 shadow-sm hover:shadow-md transition-shadow">
               <div className="flex items-center gap-3">
                 <div className="w-11 h-11 bg-pine-50 rounded-xl flex items-center justify-center shrink-0 border border-pine-100">
                   <FileCheck2 className="w-5 h-5 text-pine-700" />
                 </div>
                 <h3 className="text-lg font-medium text-pine-900">Your data is yours. Always.</h3>
               </div>
               <p className="text-dim-2 leading-relaxed text-base">Never sold, never advertised. Encrypted end to end, data centre in India.</p>
             </div>
          </div>

          {/* Compact founder strip */}
          <div className="border-t border-stone-100 mt-6 pt-5 grid md:grid-cols-2 gap-3 max-w-2xl mx-auto w-full">
            <div className="flex items-center gap-3">
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ type: 'spring', stiffness: 340, damping: 18 }}
                className="w-10 h-10 bg-pine-900 rounded-full flex items-center justify-center shrink-0"
              >
                <span className="text-[11px] font-semibold text-pine-100 tracking-wide">SS</span>
              </motion.div>
              <div>
                <p className="text-sm font-medium text-pine-900">Dr. Sriram Shankar</p>
                <p className="text-xs text-dim font-medium">Co-founder · MBBS · FRCS (England) · FAMS (Singapore)</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: 0.08, type: 'spring', stiffness: 340, damping: 18 }}
                className="w-10 h-10 bg-pine-900 rounded-full flex items-center justify-center shrink-0"
              >
                <span className="text-[11px] font-semibold text-pine-100 tracking-wide">BS</span>
              </motion.div>
              <div>
                <p className="text-sm font-medium text-pine-900">Dr. Bhavani Sriram</p>
                <p className="text-xs text-dim font-medium">Co-founder · MRCP (UK) · Singapore Silent Hero</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-6 mt-5">
            <Link to="/security" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 font-medium text-pine-700 hover:text-pine-900 text-sm border border-pine-200 bg-white hover:bg-pine-50 px-4 sm:px-5 py-3 rounded-xl transition-colors shadow-sm">
              How we protect your data <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/about#team" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 font-medium text-pine-700 hover:text-pine-900 text-sm border border-pine-200 bg-white hover:bg-pine-50 px-4 sm:px-5 py-3 rounded-xl transition-colors shadow-sm">
              Meet the founders <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
