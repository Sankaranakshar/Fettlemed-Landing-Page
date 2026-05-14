import React from 'react';
import { FadeIn } from "@/components/common/FadeIn";
import { XCircle, ShieldCheck, Activity, Building2 } from "lucide-react";

export const WhatWeAreNot = () => {
  return (
    <section className="py-24 md:py-32 bg-stone-50 border-t border-stone-100">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-pine-900 mb-6">
              What <span className="text-stone-500">we are not.</span>
            </h2>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto font-medium">
              To understand Fettlemed, it helps to understand what we chose not to be.
            </p>
          </FadeIn>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FadeIn delay={0.1}>
            <div className="bg-white p-8 rounded-[2rem] border border-stone-200 h-full">
              <div className="w-12 h-12 bg-rose-50 text-rose-600 rounded-2xl flex items-center justify-center mb-6">
                <XCircle className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-pine-900 mb-4 tracking-tight">Not an Appointment App</h3>
              <p className="text-stone-600 leading-relaxed font-medium">
                We provide an end-to-end management system for more accessible healthcare.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="bg-white p-8 rounded-[2rem] border border-stone-200 h-full">
              <div className="w-12 h-12 bg-amber-50 text-amber-600 rounded-2xl flex items-center justify-center mb-6">
                <Building2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-pine-900 mb-4 tracking-tight">Not Rigid Hospital Software</h3>
              <p className="text-stone-600 leading-relaxed font-medium">
                Old hospital software locks your data to one clinic. Fettlemed is different. Your data is portable and follows you wherever you go, to any doctor you choose.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="bg-white p-8 rounded-[2rem] border border-stone-200 h-full md:col-span-2 lg:col-span-1">
              <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center mb-6">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-pine-900 mb-4 tracking-tight">Not a Government Portal</h3>
              <p className="text-stone-600 leading-relaxed font-medium">
                We work with the national health system (ABDM), but we are a private, fast platform built for doctors and patients, not just for filing reports.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
