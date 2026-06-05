import React from 'react';
import { Users, FolderOpen, Zap } from "lucide-react";
import { FadeIn } from "@/components/common/FadeIn";

const CARDS = [
  {
    icon: Users,
    heading: "One login. Every family member.",
    body: "All under one login, each record separate.",
  },
  {
    icon: FolderOpen,
    heading: "Organised by person, private by default.",
    body: "Private by default. You manage access.",
  },
  {
    icon: Zap,
    heading: "Emergency appointment. New specialist. Their record is already in your pocket.",
    body: "Their full history, already in your pocket.",
  },
];

export function PatientForWho() {
  return (
    <section className="py-12 md:py-16 bg-white border-b border-stone-100">
      <div className="container mx-auto px-6 max-w-6xl">
        <FadeIn className="mb-2">
          <h2 className="text-3xl md:text-4xl font-medium text-pine-900 tracking-tight text-balance">One person tracks everyone's health. That's you.</h2>
        </FadeIn>
        <FadeIn className="mb-10">
          <p className="text-dim text-lg font-medium mt-3 max-w-2xl">You didn't sign up for it. You deserve a proper tool anyway.</p>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-5">
          {CARDS.map(({ icon: Icon, heading, body }, i) => (
            <FadeIn key={i} delay={0.1 + i * 0.1} className="flex flex-col gap-4 p-6 rounded-2xl bg-surface-50 border border-stone-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-11 h-11 bg-pine-50 rounded-xl flex items-center justify-center shrink-0 border border-pine-100">
                <Icon className="w-5 h-5 text-pine-700" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-pine-900 mb-2 tracking-tight">{heading}</h3>
                <p className="text-dim-2 text-sm leading-relaxed font-medium">{body}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
