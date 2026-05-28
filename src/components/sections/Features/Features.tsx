import React, { useState } from 'react';
import { Smartphone, Stethoscope, Building2, CheckCircle2, ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/common/FadeIn";
import { Button } from "@/components/common/Button";
import { WaitlistModal } from "@/components/common/WaitlistModal";

export const Features = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section className="h-[calc(100vh-80px)] min-h-[600px] flex flex-col justify-center bg-pine-900 text-white overflow-hidden relative">
       <WaitlistModal open={modalOpen} onClose={() => setModalOpen(false)} />
       <div className="absolute top-0 right-0 w-96 h-96 bg-pine-800 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3"></div>
       <div className="container mx-auto px-6 max-w-6xl relative z-10 flex flex-col items-center text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight mb-6 text-balance">One place for your complete health record.</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 justify-center gap-4 mb-6 max-w-5xl mx-auto text-left">
               {/* For Patients */}
               <div className="bg-white/5 border border-white/10 rounded-2xl p-5 relative overflow-hidden lg:col-span-1 md:col-span-2">
                  <div className="absolute top-0 left-0 w-full h-1 bg-pine-500"></div>
                  <h3 className="text-lg font-medium mb-4 flex items-center gap-2"><Smartphone className="w-5 h-5 text-pine-300" /> For Patients</h3>
                  <ul className="space-y-3 font-medium text-pine-100">
                    <li className="flex gap-3 items-start"><CheckCircle2 className="w-5 h-5 text-pine-400 shrink-0 mt-0.5" /> <span><span className="text-white font-medium">You control</span> who sees your data</span></li>
                    <li className="flex gap-3 items-start"><CheckCircle2 className="w-5 h-5 text-pine-400 shrink-0 mt-0.5" /> <span>Own your complete medical history</span></li>
                    <li className="flex gap-3 items-start"><CheckCircle2 className="w-5 h-5 text-pine-400 shrink-0 mt-0.5" /> <span>Understand your health, not just the jargon</span></li>
                  </ul>
               </div>
               
               {/* For Doctors */}
               <div className="bg-white/5 border border-white/10 rounded-2xl p-5 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-pine-600"></div>
                  <h3 className="text-lg font-medium mb-4 flex items-center gap-2"><Stethoscope className="w-5 h-5 text-pine-400" /> For Doctors</h3>
                  <ul className="space-y-3 font-medium text-pine-100">
                    <li className="flex gap-3 items-start"><CheckCircle2 className="w-5 h-5 text-pine-500 shrink-0 mt-0.5" /> <span>Complete patient history before the consultation starts</span></li>
                    <li className="flex gap-3 items-start"><CheckCircle2 className="w-5 h-5 text-pine-500 shrink-0 mt-0.5" /> <span>Digital prescriptions generated in seconds</span></li>
                    <li className="flex gap-3 items-start"><CheckCircle2 className="w-5 h-5 text-pine-500 shrink-0 mt-0.5" /> <span>Structured notes, searchable, not in a register</span></li>
                  </ul>
               </div>
               
               {/* For Clinics */}
               <div className="bg-white/5 border border-white/10 rounded-2xl p-5 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-pine-700"></div>
                  <h3 className="text-lg font-medium mb-4 flex items-center gap-2"><Building2 className="w-5 h-5 text-pine-400" /> For Clinics</h3>
                  <ul className="space-y-3 font-medium text-pine-100">
                    <li className="flex gap-3 items-start"><CheckCircle2 className="w-5 h-5 text-pine-600 shrink-0 mt-0.5" /> <span>ABHA ID verification and patient registration in one flow</span></li>
                    <li className="flex gap-3 items-start"><CheckCircle2 className="w-5 h-5 text-pine-600 shrink-0 mt-0.5" /> <span>Appointments, billing, and queues managed from one screen</span></li>
                    <li className="flex gap-3 items-start"><CheckCircle2 className="w-5 h-5 text-pine-600 shrink-0 mt-0.5" /> <span>Owner dashboard: your clinic's performance at a glance</span></li>
                  </ul>
               </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button variant="animated" size="lg" onClick={() => setModalOpen(true)} className="w-full sm:w-auto h-14 px-10 text-lg bg-white hover:bg-pine-50 text-pine-900 rounded-xl font-medium shadow-lg focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-pine-900">
                Join the pilot
              </Button>
              <button onClick={() => {document.getElementById('roles')?.scrollIntoView({behavior: 'smooth'})}} className="text-lg font-medium text-white hover:text-white flex items-center gap-2 transition-colors">
                See how it works for your role <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </FadeIn>
       </div>
    </section>
  );
};
