import React from 'react';
import { FadeIn } from "@/components/common/FadeIn";
import { BookOpen, Layers, Network } from "lucide-react";

export const WhatWeAreNot = () => {
  return (
    <section className="py-24 md:py-32 bg-stone-50 border-t border-stone-100">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-pine-900 mb-6">
              The FettleMed <span className="text-accent-500">Ecosystem.</span>
            </h2>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto font-medium">
              Three integrated layers, built for patients, clinicians, and clinics.
            </p>
          </FadeIn>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FadeIn delay={0.1}>
            <div className="bg-white p-8 rounded-[2rem] border border-stone-200 h-full">
              <div className="w-12 h-12 bg-accent-50 text-accent-600 rounded-2xl flex items-center justify-center mb-6">
                <BookOpen className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-medium text-pine-900 mb-4 tracking-tight">Living Health Timeline</h3>
              <p className="text-stone-600 leading-relaxed font-medium">
                No more digging through chaotic WhatsApp chats or paper folders. FettleMed automatically organizes your medical history into a structured, secure timeline that travels with you.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="bg-white p-8 rounded-[2rem] border border-stone-200 h-full">
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-medium text-pine-900 mb-4 tracking-tight">Seamless Ecosystem Integration</h3>
              <p className="text-stone-600 leading-relaxed font-medium">
                FettleMed embeds ABDM compliance directly into a simple interface, so clinicians clear regulatory hurdles without interrupting their workflow.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="bg-white p-8 rounded-[2rem] border border-stone-200 h-full md:col-span-2 lg:col-span-1">
              <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center mb-6">
                <Network className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-medium text-pine-900 mb-4 tracking-tight">Integrated Care Network</h3>
              <p className="text-stone-600 leading-relaxed font-medium">
                FettleMed goes far beyond basic scheduling and billing. By connecting your front desk directly to real-time, longitudinal patient records, we elevate the standard of care your clinic can deliver.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
