import React from 'react';
import { FadeIn } from "@/components/common/FadeIn";


const points = [
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
    <section className="py-16 md:py-20 bg-white border-b border-stone-100">
       <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <FadeIn className="text-center mb-10">
             <h2 className="text-3xl md:text-5xl font-medium text-pine-900 tracking-tight text-balance">Switching from paper</h2>
             <p className="text-xl text-dim mt-6 font-medium leading-relaxed">
                FettleMed is built for doctors on paper or Excel, not for hospitals with IT departments. Every anxiety about switching software has a specific answer below.
             </p>
          </FadeIn>

          <div className="space-y-8">
             {points.map(({ n, heading, body }, i) => (
                <React.Fragment key={n}>
                   <FadeIn delay={i * 0.1} className="flex gap-6 items-start">
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

          <FadeIn delay={0.4} className="mt-8">
             <div className="flex gap-4 items-start rounded-2xl border border-amber-200 bg-amber-50/50 p-5">
                <div className="w-5 h-5 rounded-full bg-amber-400 shrink-0 mt-0.5 flex items-center justify-center">
                   <span className="text-white text-xs font-bold leading-none">!</span>
                </div>
                <div>
                   <p className="text-amber-900 text-base font-semibold mb-1">Current limitation: no regional language support at pilot launch.</p>
                   <p className="text-amber-800 text-sm font-medium leading-relaxed">Tamil, Telugu, Hindi, and other regional language prescription support is actively in development and will not be available when the pilot begins. If this is essential for your practice, mention it when you apply — it directly influences our development priority.</p>
                </div>
             </div>
          </FadeIn>
       </div>
    </section>
  );
}
