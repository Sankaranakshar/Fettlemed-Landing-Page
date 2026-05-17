import React, { useState } from "react";
import { SEO } from '@/components/common/SEO';
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { Button } from "@/components/common/Button";
import { WaitlistModal } from "@/components/common/WaitlistModal";

export default function FamilyHealth() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <SEO title="Family Health" description="Manage your entire family's health records." />
      <WaitlistModal open={modalOpen} onClose={() => setModalOpen(false)} />
      <div className="flex flex-col w-full bg-white">
      <section className="relative overflow-hidden pt-24 pb-16 md:pt-32 md:pb-24 bg-stone-50 border-b border-stone-100">
        <div className="container mx-auto px-4 max-w-[800px]">
          <Breadcrumbs />
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-stone-900 leading-[1.1] mb-6 tracking-tight">
              One app for your whole family’s health.
            </h1>
            <p className="text-xl text-stone-600 mb-10 font-medium leading-relaxed">
              Track appointments, medications, and records for your children, parents, and spouse — all from your account. No more juggling separate folders for each family member.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-32 bg-white">
         <div className="container mx-auto px-4 max-w-[1000px]">
           <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-stone-50 p-8 rounded-2xl border border-stone-100">
                <h3 className="text-xl font-medium text-stone-900 mb-4">For parents with young children</h3>
                <p className="text-stone-600">Keep vaccination schedules, paediatrician notes, and growth records in one place. Share them with a new doctor in seconds when your child falls ill.</p>
              </div>
              <div className="bg-stone-50 p-8 rounded-2xl border border-stone-100">
                <h3 className="text-xl font-medium text-stone-900 mb-4">For caregivers of elderly parents</h3>
                <p className="text-stone-600">Your father’s cardiologist in Chennai and his GP in Coimbatore can both see his medication list. No more phone calls asking ‘what pills does he take?’</p>
              </div>
              <div className="bg-stone-50 p-8 rounded-2xl border border-stone-100">
                <h3 className="text-xl font-medium text-stone-900 mb-4">For spouses</h3>
                <p className="text-stone-600">Manage each other’s records for insurance claims, emergency situations, or routine check-ups.</p>
              </div>
           </div>

           <div className="mt-20">
             <h2 className="text-3xl font-medium text-stone-900 mb-8 border-b pb-4">How it works</h2>
             <div className="flex flex-col md:flex-row items-center gap-6 text-stone-600 font-medium">
               <div className="bg-pine-50 px-6 py-4 rounded-xl border border-pine-100 text-center flex-1">Add a family member</div>
               <span className="text-stone-300 hidden md:block">→</span>
               <div className="bg-pine-50 px-6 py-4 rounded-xl border border-pine-100 text-center flex-1">They verify via OTP or you confirm guardianship</div>
               <span className="text-stone-300 hidden md:block">→</span>
               <div className="bg-pine-50 px-6 py-4 rounded-xl border border-pine-100 text-center flex-1">Their records appear in a separate tab</div>
               <span className="text-stone-300 hidden md:block">→</span>
               <div className="bg-pine-50 px-6 py-4 rounded-xl border border-pine-100 text-center flex-1">Share their records with doctors on their behalf</div>
             </div>
           </div>
         </div>
      </section>

      <section className="py-24 bg-stone-50 text-center">
        <Button variant="animated" size="lg" onClick={() => setModalOpen(true)} className="h-14 px-10 text-lg bg-pine-600 hover:bg-pine-700 text-white rounded-xl">Get early access to Family Health →</Button>
      </section>
    </div>
      </>
  );
}
