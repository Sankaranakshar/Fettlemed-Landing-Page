import React from 'react';
import { CheckCircle2, Stethoscope, ShieldCheck, Lock } from "lucide-react";
import { motion } from "motion/react";

export const FoundedByDoctors = () => {
  return (
    <div className="bg-surface-50 border-t border-stone-200 py-4 relative z-20">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap items-center justify-center md:justify-between gap-x-8 gap-y-3"
        >
          {/* Main badge */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-pine-900 rounded-xl flex items-center justify-center text-white shrink-0">
              <Stethoscope className="w-4 h-4" />
            </div>
            <p className="font-medium text-pine-950 text-base leading-tight">Built by physicians.</p>
          </div>

          {/* Trust markers - short, honest, no tooltips */}
          <div className="flex flex-wrap items-center justify-center gap-x-7 gap-y-2">
            {[
              { icon: CheckCircle2, text: "Consent-first sharing" },
              { icon: Lock,         text: "End-to-end encrypted" },
              { icon: ShieldCheck,  text: "DPDPA-aligned controls" },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-2 font-medium text-dim text-[13px] md:text-sm">
                <item.icon className="w-4 h-4 text-pine-600 shrink-0" />
                <span className="leading-tight">{item.text}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};
