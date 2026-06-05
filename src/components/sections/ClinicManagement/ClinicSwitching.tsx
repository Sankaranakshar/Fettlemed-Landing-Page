import React from 'react';
import { FadeIn } from "@/components/common/FadeIn";

const points = [
  {
    n: "1",
    heading: "You don't have to switch everything at once.",
    body: "Start with appointments. Add billing when you're ready. Each module works independently. Expand at your own pace.",
  },
  {
    n: "2",
    heading: "Your existing patients aren't disrupted.",
    body: "FettleMed starts from your next patient, not your filing cabinet. No migration required. Existing patients are added as they walk in.",
  },
  {
    n: "3",
    heading: "Your staff won't have a bad week.",
    body: "Questions on day three, problems on day seven. We're there. Onboarding doesn't end when we close the laptop.",
  },
  {
    n: "4",
    heading: "If FettleMed isn't right for your clinic, you leave with everything.",
    body: "Your records, billing history, and patient data are exportable in full, any time. We built it this way on purpose.",
  },
  {
    n: "5",
    heading: "Multiple branches - planned for a future release.",
    body: "Multi-location management is on our roadmap and will be available in a future release after the pilot. If you run more than one branch, let us know - your input shapes what we build.",
  },
];

export function ClinicSwitching() {
  return (
    <section className="py-16 md:py-20 bg-white border-b border-stone-100">
       <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <FadeIn className="mb-4">
             <h2 className="text-3xl md:text-5xl font-medium text-pine-900 tracking-tight text-balance">Switching from paper</h2>
          </FadeIn>
          <FadeIn className="mb-10">
             <p className="text-lg text-dim font-medium leading-relaxed">Every concern a clinic owner has about switching has a specific answer here.</p>
          </FadeIn>

          <div className="space-y-6">
             {points.map(({ n, heading, body }) => (
                <FadeIn key={n} className="flex gap-5 items-start">
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
       </div>
    </section>
  );
}
