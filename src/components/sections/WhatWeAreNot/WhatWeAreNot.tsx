import React from 'react';
import { FadeIn } from "@/components/common/FadeIn";
import { BookOpen, Layers, Network } from "lucide-react";

export const WhatWeAreNot = () => {
  return (
    <section className="h-[calc(100vh-80px)] min-h-[600px] flex flex-col bg-surface-50 border-t border-stone-100 overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl flex flex-col flex-1 min-h-0 py-12 md:py-16">
        <FadeIn>
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-pine-900 mb-4">
              Not another EMR. Not another health app. <span className="text-pine-600">The layer that connects them.</span>
            </h2>
            <p className="text-lg text-dim-2 max-w-2xl mx-auto font-medium">
              FettleMed is the shared layer between patient, doctor, and clinic — so a prescription written in the room appears on the patient's phone before they leave the building.
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 flex-1 min-h-0 content-stretch">
          <FadeIn delay={0.1} className="h-full">
            <div className="bg-white p-7 rounded-2xl border border-stone-200 h-full shadow-sm hover:shadow-md transition-shadow flex flex-col">
              <div className="w-10 h-10 bg-pine-50 text-pine-700 rounded-xl flex items-center justify-center mb-5 border border-pine-100">
                <BookOpen className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-medium text-pine-900 mb-4 tracking-tight">Living Health Timeline</h3>
              <ul className="space-y-3 text-dim-2 font-medium text-base flex-1">
                <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-pine-500 mt-2 shrink-0"></span>No digging through WhatsApp forwards, paper folders, or memory</li>
                <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-pine-500 mt-2 shrink-0"></span>Every result, diagnosis, and prescription in one place, in order</li>
                <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-pine-500 mt-2 shrink-0"></span>Walk into any consultation with your full history already there</li>
              </ul>
            </div>
          </FadeIn>

          <FadeIn delay={0.2} className="h-full">
            <div className="bg-white p-7 rounded-2xl border border-stone-200 h-full shadow-sm hover:shadow-md transition-shadow flex flex-col">
              <div className="w-10 h-10 bg-pine-50 text-pine-700 rounded-xl flex items-center justify-center mb-5 border border-pine-100">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-medium text-pine-900 mb-4 tracking-tight">Built on National Standards</h3>
              <ul className="space-y-3 text-dim-2 font-medium text-base flex-1">
                <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-pine-500 mt-2 shrink-0"></span>Built on the ABDM framework and ABHA ID infrastructure</li>
                <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-pine-500 mt-2 shrink-0"></span>The same national standards India's healthcare system is moving toward</li>
                <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-pine-500 mt-2 shrink-0"></span>Compliance considerations are built into our design, not added on top.</li>
              </ul>
            </div>
          </FadeIn>

          <FadeIn delay={0.3} className="h-full md:col-span-2 lg:col-span-1">
            <div className="bg-white p-7 rounded-2xl border border-stone-200 h-full shadow-sm hover:shadow-md transition-shadow flex flex-col">
              <div className="w-10 h-10 bg-pine-50 text-pine-700 rounded-xl flex items-center justify-center mb-5 border border-pine-100">
                <Network className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-medium text-pine-900 mb-4 tracking-tight">Connected at Every Step</h3>
              <ul className="space-y-3 text-dim-2 font-medium text-base flex-1">
                <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-pine-500 mt-2 shrink-0"></span>One record that travels with the patient — not locked to a single clinic or system</li>
                <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 rounded-full bg-pine-500 mt-2 shrink-0"></span>The same consent and access model whether the patient is in Chennai or Singapore</li>
              </ul>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
