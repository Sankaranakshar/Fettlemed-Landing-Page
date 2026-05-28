import React from 'react';
import { FadeIn } from "@/components/common/FadeIn";

const points = [
  {
    n: "1",
    heading: "You don't have to switch everything at once.",
    body: "Start with appointments, add billing when ready. Each module works independently. Expand at your own pace — no pressure to go all-in on day one.",
  },
  {
    n: "2",
    heading: "Your existing patients aren't disrupted, and neither is your workflow.",
    body: "Starts from your next patient. No migration required. Existing patients added as they walk in. Staff get hands-on support throughout, not just on setup day.",
  },
  {
    n: "3",
    heading: "Your staff won't have a bad week.",
    body: "Questions on day three, problems on day seven — we're there. Onboarding doesn't end when we close the laptop.",
  },
  {
    n: "4",
    heading: "No new hardware. Not a single device.",
    body: "Works on the tablets, laptops, and desktops the clinic already has. No new hardware, not a single device.",
  },
  {
    n: "5",
    heading: "If FettleMed isn't right for your clinic, you leave with everything.",
    body: "All patient records, billing history, and clinical data can be exported in full at any time. Nothing is locked to our platform. Nothing disappears when you leave. We would rather you export your data and find a better fit than stay on a platform you don't believe in.",
  },
  {
    n: "6",
    heading: "Multiple branches, coming to the pilot.",
    body: "Multi-location management is in active development. Clinics with more than one branch that join the pilot will have direct input into how this feature is built.",
  },
];

export function ClinicSwitching() {
  return (
    <section className="py-16 md:py-20 bg-white border-b border-stone-100">
       <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <FadeIn className="text-center mb-6">
             <h2 className="text-3xl md:text-5xl font-medium text-pine-900 tracking-tight text-balance">Switching from paper</h2>
          </FadeIn>
          <FadeIn className="text-center mb-10">
             <p className="text-xl text-dim font-medium leading-relaxed">Every concern a clinic owner has about switching software has a specific answer below.</p>
          </FadeIn>

          <div className="space-y-8">
             {points.map(({ n, heading, body }) => (
                <React.Fragment key={n}>
                   <FadeIn className="flex gap-6 items-start">
                      <div className="w-10 h-10 bg-pine-50 border border-pine-100 rounded-full flex items-center justify-center text-base font-medium text-pine-700 shrink-0 mt-0.5">
                         {n}
                      </div>
                      <div>
                         <p className="text-pine-900 text-lg font-medium mb-1">{heading}</p>
                         <p className="text-dim-2 text-lg font-medium leading-relaxed">{body}</p>
                      </div>
                   </FadeIn>
                </React.Fragment>
             ))}
          </div>
       </div>
    </section>
  );
}
