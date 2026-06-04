import React from 'react';
import { Lock, Fingerprint, Link2, ShieldCheck } from "lucide-react";
import { FadeIn } from "@/components/common/FadeIn";

const CARDS = [
  {
    Icon: Lock,
    heading: "The records you create are yours.",
    body: "Your notes, prescriptions, and observations belong to you, as they always have. Consistent with Indian Medical Council Regulations 2002.",
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
      "You never have unauthorised access. That protects you as much as it protects them.",
    ],
  },
  {
    Icon: Link2,
    heading: "Practicing without blind spots.",
    body: "When a patient shares their full profile, you see what every other doctor who treated them saw. No gaps, no guessing.",
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
    <section className="py-16 md:py-20 bg-white border-y border-stone-100">
      <div className="container mx-auto px-6 max-w-6xl">
        <FadeIn className="mb-8">
          <h2 className="text-3xl md:text-4xl font-medium text-pine-900 tracking-tight text-balance">
            Who owns what.
          </h2>
          <p className="text-dim text-base font-medium leading-relaxed mt-3 max-w-2xl">
            You keep everything you create. Patients control what they share beyond that. Every access is visible to both of you.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-4">
          {CARDS.map(({ Icon, heading, body, bullets }, i) => (
            <FadeIn
              key={heading}
              delay={i * 0.1}
              className="flex flex-col gap-3 p-6 rounded-2xl bg-surface-50 border border-stone-200 shadow-sm"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-pine-50 rounded-xl flex items-center justify-center shrink-0 border border-pine-100">
                  <Icon className="w-4 h-4 text-pine-600" />
                </div>
                <h3 className="text-base font-semibold text-pine-900 tracking-tight leading-snug">{heading}</h3>
              </div>
              <p className="text-dim text-sm font-medium leading-relaxed">{body}</p>
              <ul className="space-y-1.5">
                {bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-dim-2 text-sm font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-pine-500 mt-1.5 shrink-0" />
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
