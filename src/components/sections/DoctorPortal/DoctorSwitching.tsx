import React from 'react';
import { FadeIn } from "@/components/common/FadeIn";

const POINTS = [
  {
    n: "1",
    heading: "You don't migrate anything.",
    body: "FettleMed starts from your next consultation, not from your filing cabinet. Historical records stay where they are. New records build from today.",
  },
  {
    n: "2",
    heading: "Your patients don't need to download anything, at first.",
    body: "You can create digital records for any patient on FettleMed, whether or not they have the app. When they do join, their records are already waiting for them.",
  },
  {
    n: "3",
    heading: "Setup takes one session.",
    body: "You can see your first patient on FettleMed on the same day you sign up. No IT onboarding, no training week. If you can use WhatsApp, you can use FettleMed.",
  },
  {
    n: "4",
    heading: "If FettleMed isn't right for you, you leave with everything.",
    body: "All records you've created are exportable in full. Nothing is locked to our platform. We would rather you leave with your data than stay without confidence in the product.",
  },
];

export function DoctorSwitching() {
  return (
    <section className="h-[calc(100vh-80px)] min-h-[600px] flex flex-col bg-white border-b border-stone-100 overflow-hidden">
      <div className="container mx-auto px-6 max-w-4xl flex flex-col flex-1 min-h-0 py-8 md:py-10 justify-center">
        <FadeIn className="mb-8">
          <h2 className="text-3xl md:text-4xl font-medium text-pine-900 tracking-tight text-balance">
            Switching from paper
          </h2>
          <p className="text-lg text-dim mt-3 font-medium leading-relaxed max-w-2xl">
            FettleMed is built for doctors on paper or Excel. Every concern about switching has a specific answer below.
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
                <p className="text-dim-2 text-base font-medium leading-relaxed">{body}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn className="mt-8 bg-amber-50 border border-amber-200 rounded-xl px-5 py-4 text-amber-900 text-sm font-medium">
          <strong>Language note:</strong> FettleMed currently operates in English. Regional language support is on the roadmap — doctors who join the pilot will have direct input into which languages are prioritised first.
        </FadeIn>
      </div>
    </section>
  );
}
