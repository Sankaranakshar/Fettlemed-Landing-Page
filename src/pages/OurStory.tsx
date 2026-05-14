import React, { useState } from "react";
import { SEO } from '@/components/common/SEO';
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { ArrowLeft } from "lucide-react";
import { FadeIn } from "@/components/common/FadeIn";
import { WaitlistModal } from "@/components/common/WaitlistModal";

export default function OurStory() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <WaitlistModal open={modalOpen} onClose={() => setModalOpen(false)} />
      <SEO title="Our Story" description="The story behind Fettlemed." />
      <div className="flex flex-col w-full bg-stone-50 pt-24 pb-32 min-h-screen">
      <div className="container mx-auto px-4 max-w-5xl flex flex-col lg:flex-row gap-16 relative">
        
        {/* Sticky Sidebar */}
        <div className="lg:w-1/4 hidden lg:block">
           <div className="sticky top-32">
              <Breadcrumbs />
              <div className="h-[1px] w-12 bg-stone-200 mb-6" />
              <p className="text-sm font-semibold text-stone-400 uppercase tracking-widest leading-relaxed">
                The origin story of Fettlemed and why we believe health information must remain connected.
              </p>
           </div>
        </div>

        {/* Main Content Constrained width for reading */}
        <div className="lg:w-3/4 max-w-2xl">
          <FadeIn>
            <div className="lg:hidden">
              <Breadcrumbs />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-stone-900 mb-12 tracking-tight leading-[1.1]">
              Every family deserves better.
            </h1>
            
            <div className="prose prose-lg prose-slate text-stone-700 leading-relaxed font-serif space-y-6">
              <p className="text-xl md:text-2xl text-stone-500 font-sans tracking-tight mb-10 leading-snug">
                Healthcare in India is fragmented, and it shouldn't be.
              </p>
              
              <p>For too long, patients have been the silent couriers of their own medical data. Carrying heavy physical folders of lab reports and prescriptions from one clinic to another, hoping the next doctor can piece together the puzzle of their history.</p>
              <p>When a patient visits a new doctor, there is often no record of their previous medications or test results. This leads to repeated tests, potential diagnostic errors, and care that is reactive instead of preventive. The problem isn't the quality of medical talent — it's the lack of connected information.</p>
              
              <blockquote className="border-l-4 border-pine-500 pl-6 my-10 text-2xl font-medium text-stone-900 italic font-sans">
                 "The problem isn't money or access to doctors. It's the fragmentation of information."
              </blockquote>

              <p>We realized that while healthcare records were scattered, the technology to connect them was already in everyone's pocket. Most of India now has a smartphone, providing the perfect infrastructure for a truly patient-centric health record system.</p>
              
              <div className="bg-pine-50 rounded-2xl p-8 my-12 border border-pine-100">
                 <p className="font-sans text-pine-900 font-medium mb-0">Fettlemed was born from a simple mission: to ensure that every person's health history lives permanently on their own device — structured, searchable, and shareable with any doctor in seconds.</p>
              </div>

              <p>We're building the missing layer that connects patients, doctors, and clinics. Our platform ensures that doctors can see the full picture before they prescribe, and patients remain in full control of who sees their data and for how long.</p>
              <p>Today, Fettlemed is a commitment to making sure that no family ever has to start their healthcare journey from scratch again. We are building the infrastructure for a healthier, more connected India, one record at a time.</p>
              
              <div className="pt-8">
                <button onClick={() => setModalOpen(true)} className="inline-flex items-center gap-2 text-pine-600 font-bold hover:text-pine-700 transition-colors">
                  Join us on this journey <ArrowLeft className="w-5 h-5 rotate-180" />
                </button>
              </div>
            </div>
          </FadeIn>
        </div>

      </div>
    </div>
      </>
  );
}
