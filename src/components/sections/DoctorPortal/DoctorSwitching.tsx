import React from 'react';
import { FadeIn } from "@/components/common/FadeIn";

const POINTS = [
  {
    n: "1",
    heading: "You don't migrate anything.",
    body: "FettleMed starts at your next consultation. Nothing to migrate.",
  },
  {
    n: "2",
    heading: "Your patients don't need to download anything, at first.",
    body: "Create records for patients with or without the app.",
  },
  {
    n: "3",
    heading: "Setup takes one session.",
    body: "First patient on FettleMed the same day. No training manual, no dedicated setup team.",
  },
  {
    n: "4",
    heading: "If FettleMed isn't right for you, you leave with everything.",
    body: "Leave anytime with a full export. Nothing locked in.",
  },
];

export function DoctorSwitching() {
  return (
    <section className="py-12 md:py-16 bg-white border-b border-stone-100">
      <div className="container mx-auto px-6 max-w-4xl">
        <FadeIn className="mb-8">
          <h2 className="text-3xl md:text-4xl font-medium text-pine-900 tracking-tight text-balance">
            Switching from paper
          </h2>
          <p className="text-lg text-dim mt-3 leading-relaxed max-w-2xl">
            Easy enough to switch from paper and Excel. Every switching worry, answered.
          </p>
        </FadeIn>

        <div className="space-y-6">
          {POINTS.map(({ n, heading, body }, i) => (
            <FadeIn key={n} delay={i * 0.08} className="flex gap-5 items-start">
              <div className="w-9 h-9 bg-pine-50 border border-pine-100 rounded-full flex items-center justify-center text-sm font-semibold text-pine-700 shrink-0 mt-0.5">
                {n}
              </div>
              <div>
                <p className="text-pine-900 text-base font-semibold mb-1">{heading}</p>
                <p className="text-dim-2 text-base leading-relaxed">{body}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn className="mt-8 bg-amber-50 border border-amber-200 rounded-xl px-5 py-4 text-amber-900 text-sm font-medium">
          <strong>Language note:</strong> FettleMed currently operates in English. Regional language support is on the roadmap. Doctors who join the pilot will have direct input into which languages are prioritised first.
        </FadeIn>
      </div>
    </section>
  );
}
