import React from 'react';
import { FadeIn } from "@/components/common/FadeIn";

const COLUMNS = [
  {
    borderCls: "border-pine-200",
    heading: "Incomplete Information",
    body: "A patient sits down. The history is incomplete, scattered, or missing entirely. Previous prescriptions, investigations, and diagnoses are locked in paper files, WhatsApp messages, or another clinic's records.",
    close: "Clinical decisions are often made without the full picture.",
  },
  {
    borderCls: "border-pine-400",
    heading: "Administrative Burden",
    body: "Every consultation generates more administration. Prescriptions, notes, referrals, certificates, and follow-ups all compete for the same limited time.",
    close: "The workload around the patient is growing faster than the time available to treat them.",
  },
  {
    borderCls: "border-pine-900",
    heading: "Disconnected Care",
    body: "Patients move between clinics, hospitals, laboratories, and pharmacies, but their information rarely moves with them. Important details are repeated, forgotten, or lost between visits.",
    close: "Healthcare remains fragmented long after the consultation ends.",
  },
];

export function DoctorProblem() {
  return (
    <section className="py-16 md:py-20 bg-white border-b border-stone-100">
      <div className="container mx-auto px-6 max-w-6xl">

        <FadeIn className="mb-10">
          <h2 className="text-3xl md:text-4xl font-medium text-pine-900 tracking-tight text-balance">
            The consultation was supposed to be about the patient.
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-14">
          {COLUMNS.map(({ borderCls, heading, body, close }, i) => (
            <FadeIn key={i} delay={i * 0.1} className={`flex flex-col border-t-2 ${borderCls} pt-6`}>
              <p className="text-xs font-semibold text-pine-500 uppercase tracking-widest mb-4">{heading}</p>
              <p className="text-lg text-dim-2 font-medium leading-relaxed mb-4 flex-1">
                {body}
              </p>
              <p className="text-pine-900 text-lg font-semibold leading-snug">
                {close}
              </p>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
}
