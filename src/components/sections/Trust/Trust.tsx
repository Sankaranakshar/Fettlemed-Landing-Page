import React from 'react';
import { Link } from "react-router-dom";
import { ShieldCheck, Lock, FileCheck2, ArrowRight, User } from "lucide-react";
import { FadeIn } from "@/components/common/FadeIn";

export const Trust = () => {
  return (
    <section className="py-16 md:py-24 bg-surface-50 border-t border-stone-100">
      <div className="container mx-auto px-6 max-w-5xl text-center">
        <FadeIn>
           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-left mb-16">
              {/* Larger featured card — spans 2 cols on md */}
              <div className="bg-pine-50 border border-pine-100 p-8 rounded-3xl md:col-span-2 lg:col-span-1 flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="w-7 h-7 text-pine-600 shrink-0" />
                  <h3 className="text-2xl font-bold text-pine-900">2-Tap Consent</h3>
                </div>
                <p className="text-stone-600 leading-relaxed font-medium max-w-[55ch]">Grant access in 2 taps, revoke in 1. When you revoke, the doctor instantly loses access to your past medical reports.</p>
              </div>
              {/* Plain text card — no container box */}
              <div className="p-8 flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <Lock className="w-6 h-6 text-pine-600 shrink-0" />
                  <h3 className="text-xl font-bold text-pine-900">Clinical First</h3>
                </div>
                <p className="text-stone-600 leading-relaxed font-medium">Built from months of sitting with doctors. We learned that simple, fast digital prescriptions matter more than complex software features.</p>
              </div>
              <div className="p-8 flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <FileCheck2 className="w-6 h-6 text-pine-600 shrink-0" />
                  <h3 className="text-xl font-bold text-pine-900">Co-Built with Doctors</h3>
                </div>
                <p className="text-stone-600 leading-relaxed font-medium">Fettlemed is directly shaped by the workflows of practicing clinicians Dr. Bhavani and Dr. Sriram.</p>
              </div>
           </div>

           {/* Co-build with Doctors block */}
           <div className="bg-pine-900 rounded-[2rem] p-10 md:p-14 text-left mb-16">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 tracking-tight">Co-built with Doctors</h3>
              <div className="grid md:grid-cols-2 gap-8">
                 {/* Dr. Sriram Shankar */}
                 <div className="flex gap-5 items-start">
                    <div className="w-16 h-16 rounded-2xl bg-pine-700 border border-pine-600 flex items-center justify-center shrink-0">
                       <User className="w-8 h-8 text-pine-300" />
                    </div>
                    <div>
                       <p className="text-white font-bold text-lg mb-1">Dr. Sriram Shankar</p>
                       <p className="text-pine-400 text-xs font-semibold mb-3 uppercase tracking-widest">MBBS, FRCS (England), FAMS (Singapore)</p>
                       <p className="text-pine-200 leading-relaxed text-sm font-medium">Senior Consultant Cardio-thoracic surgeon with nearly four decades of experience. Developed less invasive procedures and helped establish the pediatric heart surgery program at KK Women's and Children's Hospital.</p>
                    </div>
                 </div>
                 {/* Dr. Bhavani Sriram */}
                 <div className="flex gap-5 items-start">
                    <div className="w-16 h-16 rounded-2xl bg-pine-700 border border-pine-600 flex items-center justify-center shrink-0">
                       <User className="w-8 h-8 text-pine-300" />
                    </div>
                    <div>
                       <p className="text-white font-bold text-lg mb-1">Dr. Bhavani Sriram</p>
                       <p className="text-pine-400 text-xs font-semibold mb-3 uppercase tracking-widest">MBBS, MRCP (UK) (Paediatrics)</p>
                       <p className="text-pine-200 leading-relaxed text-sm font-medium">Honoured as a 'Singapore Silent Hero' for dedication to community health. Fierce advocate for making healthcare accessible for all, pioneering care for adults with intellectual disabilities.</p>
                    </div>
                 </div>
              </div>
           </div>

          <Link to="/security" className="inline-flex items-center gap-2 font-bold text-pine-600 hover:text-pine-700 text-lg">
             Learn more about our security <ArrowRight className="w-5 h-5" />
          </Link>
        </FadeIn>
      </div>
    </section>
  );
};
