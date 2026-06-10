import React from 'react';
import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";
import { FadeIn } from "@/components/common/FadeIn";
import { DarkTexture } from "@/components/common/Texture/DarkTexture";
import { VisualOnView, BillingRevenueVisual } from "@/components/sections/RoleVisuals";

const items = [
  {
    heading: "Daily collections",
    body: "what came in today, broken down by doctor. Without asking anyone.",
  },
  {
    heading: "Billing versus collections",
    body: "what was invoiced and what was actually received, in the same view.",
  },
  {
    heading: "Appointment utilisation",
    body: "which hours fill consistently, which don't.",
  },
  {
    heading: "Patient volume",
    body: "today, this week, this month.",
  },
  {
    heading: "No-show rates",
    body: "tracked automatically, so you can adjust reminders or slots.",
  },
];

export function ClinicOwnerView() {
  return (
    <section className="py-12 md:py-16 bg-pine-900 text-white relative overflow-hidden flex flex-col items-center">
       <DarkTexture />
       <div className="container mx-auto px-4 md:px-8 max-w-5xl relative z-10">
          <FadeIn className="text-center mb-4">
             <h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight text-balance">Right now, you're running the clinic from memory.</h2>
          </FadeIn>
          <FadeIn className="text-center mb-12">
             <p className="text-pine-200 text-lg leading-relaxed max-w-2xl mx-auto">The whole picture, on your phone. Updated as the day moves.</p>
          </FadeIn>

          <div className="bg-pine-800/50 border border-pine-700/50 rounded-3xl p-8 md:p-10 backdrop-blur-sm flex flex-col md:flex-row items-center gap-10">
             <ul className="flex-1 text-base leading-relaxed space-y-5">
                {items.map(({ heading, body }, i) => (
                   <li key={i} className="flex gap-3">
                      <motion.span
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ delay: 0.15 + i * 0.12, type: 'spring', stiffness: 340, damping: 18 }}
                        className="shrink-0 mt-0.5"
                      >
                        <CheckCircle2 className="w-5 h-5 text-pine-400" />
                      </motion.span>
                      <span><span className="text-white font-medium">{heading}:</span> <span className="text-pine-100">{body}</span></span>
                   </li>
                ))}
             </ul>

             {/* The dashboard itself, not a paragraph about it */}
             <VisualOnView className="flex items-center justify-center shrink-0 w-full md:w-auto">
                <BillingRevenueVisual />
             </VisualOnView>
          </div>
       </div>
    </section>
  );
}
