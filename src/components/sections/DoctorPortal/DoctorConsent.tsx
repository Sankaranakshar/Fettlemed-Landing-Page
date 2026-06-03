import React from 'react';
import { Lock, Fingerprint, Link2, ShieldCheck } from "lucide-react";
import { FadeIn } from "@/components/common/FadeIn";

const CARDS = [
  {
    Icon: Lock,
    heading: "The records you create are yours.",
    body: "Your notes, prescriptions, and observations belong to you — as they always have. Consistent with Indian Medical Council Regulations 2002.",
    bullets: [
      "FettleMed stores and structures your records, nothing more",
      "You leave with everything you created, always",
    ],
  },
  {
    Icon: Fingerprint,
    heading: "Patients decide what they share with you.",
    body: "Patients control whether you see records from other doctors, previous clinics, or their full history.",
    bullets: [
      "Share for one consultation, a fixed period, or ongoing",
      "You never have unauthorised access — that protects you as much as them",
    ],
  },
  {
    Icon: Link2,
    heading: "Practicing without blind spots.",
    body: "When a patient shares their full profile, you see what every other doctor who treated them saw — no gaps, no guessing.",
    bullets: [
      "Full medication history without asking",
      "No repeating a test from three weeks ago",
    ],
  },
  {
    Icon: ShieldCheck,
    heading: "Every access is logged. For both of you.",
    body: "Every access is recorded with a timestamp and identifier. You can see the full audit trail. So can the patient.",
    bullets: [
      "If a complaint arises, what you had access to is documented",
      "Visible to you and the patient, always",
    ],
  },
];

export function DoctorConsent() {
  return (
    <section className="py-16 md:py-20 bg-pine-900 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-pine-800/40 rounded-full blur-[120px] pointer-events-none opacity-40 translate-x-1/3 -translate-y-1/3" />
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <FadeIn className="mb-6">
          <h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight text-balance">
            Who owns what, and why it matters for you.
          </h2>
          <p className="text-pine-300 text-base font-medium leading-relaxed mt-3 max-w-2xl">
            You keep everything you create. Patients control what they share beyond that. Both of you can see every access, every time.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-4">
          {CARDS.map(({ Icon, heading, body, bullets }, i) => (
            <FadeIn
              key={heading}
              delay={i * 0.1}
              className="flex flex-col gap-3 p-5 rounded-2xl bg-pine-800/50 border border-pine-700 backdrop-blur-sm"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-pine-700/80 rounded-xl flex items-center justify-center shrink-0">
                  <Icon className="w-4 h-4 text-pine-200" />
                </div>
                <h3 className="text-base font-semibold text-white tracking-tight leading-snug">{heading}</h3>
              </div>
              <p className="text-pine-300 text-sm font-medium leading-relaxed">{body}</p>
              <ul className="space-y-1.5">
                {bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-pine-300 text-sm font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-pine-400 mt-1.5 shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
