import React from 'react';
import { Users, FolderOpen, Zap } from "lucide-react";
import { FadeIn } from "@/components/common/FadeIn";

const CARDS = [
  {
    icon: Users,
    heading: "One login. Every family member.",
    body: "Your mother's blood pressure. Your father's medications. Your child's next vaccine. All tracked under one account, each person with their own separate record.",
  },
  {
    icon: FolderOpen,
    heading: "Organised by person, private by default.",
    body: "Each family member's records are kept separately. You manage who can access what. Their health information stays private to them — you handle logistics, not their content.",
  },
  {
    icon: Zap,
    heading: "Ready the moment you need it.",
    body: "Emergency appointment, new specialist, last-minute referral — their full record is already in your pocket. No searching through WhatsApp chats or old paper folders.",
  },
];

export function PatientForWho() {
  return (
    <section className="h-[calc(100vh-80px)] min-h-[600px] flex flex-col bg-white border-b border-stone-100 overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl flex flex-col flex-1 min-h-0 py-8 md:py-10 justify-center">
        <FadeIn className="mb-2">
          <h2 className="text-3xl md:text-4xl font-medium text-pine-900 tracking-tight text-balance">You don't have to be a patient to need this.</h2>
        </FadeIn>
        <FadeIn className="mb-10">
          <p className="text-dim text-lg font-medium mt-3 max-w-2xl">In most families, one person tracks everyone's health. You didn't sign up to be the family health administrator. But since you are, you deserve a proper tool.</p>
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
