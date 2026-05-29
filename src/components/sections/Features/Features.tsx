import React, { useState } from 'react';
import { Smartphone, Stethoscope, Building2, CheckCircle2, ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/common/FadeIn";
import { Button } from "@/components/common/Button";
import { WaitlistModal } from "@/components/common/WaitlistModal";

export const Features = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section className="h-[calc(100vh-80px)] min-h-[600px] flex flex-col bg-pine-900 text-white overflow-hidden relative">
       <WaitlistModal open={modalOpen} onClose={() => setModalOpen(false)} />
       <div className="absolute top-0 right-0 w-96 h-96 bg-pine-800 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
       <div className="container mx-auto px-6 max-w-6xl relative z-10 flex flex-col flex-1 min-h-0 py-12 md:py-16">
          <FadeIn className="flex flex-col flex-1 min-h-0">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight mb-8 text-balance text-center">One place for your complete health record.</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 flex-1 min-h-0 content-stretch">
               {/* For Patients */}
               <div className="bg-white/5 border border-white/10 rounded-2xl p-7 relative overflow-hidden lg:col-span-1 md:col-span-2 flex flex-col h-full">
                  <div className="absolute top-0 left-0 w-full h-1 bg-pine-500"></div>
                  <h3 className="text-xl font-medium mb-5 flex items-center gap-2"><Smartphone className="w-5 h-5 text-pine-300" /> Patient Empowerment</h3>
                  <ul className="space-y-4 font-medium text-pine-100 flex-1">
                    <li className="flex gap-3 items-start"><CheckCircle2 className="w-5 h-5 text-pine-400 shrink-0 mt-0.5" /> <span><span className="text-white font-medium">You control</span> who sees your data</span></li>
                    <li className="flex gap-3 items-start"><CheckCircle2 className="w-5 h-5 text-pine-400 shrink-0 mt-0.5" /> <span>Own your complete medical history</span></li>
                    <li className="flex gap-3 items-start"><CheckCircle2 className="w-5 h-5 text-pine-400 shrink-0 mt-0.5" /> <span>Understand your health, not just the jargon</span></li>
                  </ul>
               </div>

               {/* For Doctors */}
               <div className="bg-white/5 border border-white/10 rounded-2xl p-7 relative overflow-hidden flex flex-col h-full">
                  <div className="absolute top-0 left-0 w-full h-1 bg-pine-600"></div>
                  <h3 className="text-xl font-medium mb-5 flex items-center gap-2"><Stethoscope className="w-5 h-5 text-pine-400" /> Clinical Efficiency</h3>
                  <ul className="space-y-4 font-medium text-pine-100 flex-1">
                    <li className="flex gap-3 items-start"><CheckCircle2 className="w-5 h-5 text-pine-500 shrink-0 mt-0.5" /> <span>Complete patient history before the consultation starts</span></li>
                    <li className="flex gap-3 items-start"><CheckCircle2 className="w-5 h-5 text-pine-500 shrink-0 mt-0.5" /> <span>Digital prescriptions generated in seconds</span></li>
                    <li className="flex gap-3 items-start"><CheckCircle2 className="w-5 h-5 text-pine-500 shrink-0 mt-0.5" /> <span>Structured notes, searchable, not in a register</span></li>
                  </ul>
               </div>

               {/* For Clinics */}
               <div className="bg-white/5 border border-white/10 rounded-2xl p-7 relative overflow-hidden flex flex-col h-full">
                  <div className="absolute top-0 left-0 w-full h-1 bg-pine-700"></div>
                  <h3 className="text-xl font-medium mb-5 flex items-center gap-2"><Building2 className="w-5 h-5 text-pine-400" /> Practice Management</h3>
                  <ul className="space-y-4 font-medium text-pine-100 flex-1">
                    <li className="flex gap-3 items-start"><CheckCircle2 className="w-5 h-5 text-pine-600 shrink-0 mt-0.5" /> <span>ABHA ID verification and patient registration in one flow</span></li>
                    <li className="flex gap-3 items-start"><CheckCircle2 className="w-5 h-5 text-pine-600 shrink-0 mt-0.5" /> <span>Appointments, billing, and queues managed from one screen</span></li>
                    <li className="flex gap-3 items-start"><CheckCircle2 className="w-5 h-5 text-pine-600 shrink-0 mt-0.5" /> <span>Owner dashboard: your clinic's performance at a glance</span></li>
                  </ul>
               </div>
            </div>

            <div className="flex justify-center items-center gap-8 mt-8">
              <Button variant="animated" size="lg" onClick={() => setModalOpen(true)} className="h-12 px-10 text-base bg-white hover:bg-pine-50 text-pine-900 rounded-xl font-medium shadow-lg focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-pine-900">
                Join the Waitlist
              </Button>
              <button onClick={() => { document.getElementById('roles')?.scrollIntoView({ behavior: 'smooth' }) }} className="inline-flex items-center gap-2 p-3 -m-3 text-base font-medium text-pine-300 hover:text-white transition-colors">
                See how it works for your role <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </FadeIn>
       </div>
    </section>
  );
};
