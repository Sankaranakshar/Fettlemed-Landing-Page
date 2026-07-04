import React from 'react';
import { CheckCircle2, Stethoscope, ShieldCheck, Lock } from "lucide-react";
import { motion } from "motion/react";

const TRUST_MARKERS = [
  { icon: CheckCircle2, text: "Consent Based Sharing", description: "You control who accesses your records." },
  { icon: Lock,         text: "Encrypted End to End",  description: "Your data stays secure in transit." },
  { icon: ShieldCheck,  text: "DPDP Act Aligned",       description: "Privacy practices follow India's data protection law." },
];

function MarkerTooltip({ children }: { children: React.ReactNode }) {
  return (
    <div
      role="tooltip"
      className="pointer-events-none absolute bottom-full left-1/2 z-30 mb-2 w-max max-w-[220px] -translate-x-1/2 scale-95 rounded-lg bg-pine-900 px-3 py-2 text-center text-xs font-medium text-white opacity-0 shadow-lg transition-all duration-150 group-hover:scale-100 group-hover:opacity-100 group-focus-within:scale-100 group-focus-within:opacity-100"
    >
      {children}
      <span className="absolute left-1/2 top-full -mt-px h-2 w-2 -translate-x-1/2 rotate-45 bg-pine-900" />
    </div>
  );
}

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
          <div className="group relative flex cursor-default items-center gap-3" tabIndex={0}>
            <div className="w-9 h-9 bg-pine-900 rounded-xl flex items-center justify-center text-white shrink-0">
              <Stethoscope className="w-4 h-4" />
            </div>
            <p className="font-medium text-pine-950 text-base leading-tight">Built by Doctors</p>
            <MarkerTooltip>Designed around real clinical workflows.</MarkerTooltip>
          </div>

          {/* Trust markers - hover or focus reveals the explanation */}
          <div className="flex flex-wrap items-center justify-center gap-x-7 gap-y-2">
            {TRUST_MARKERS.map((item) => (
              <div
                key={item.text}
                className="group relative flex cursor-default items-center gap-2 font-medium text-dim text-[13px] md:text-sm"
                tabIndex={0}
              >
                <item.icon className="w-4 h-4 text-pine-600 shrink-0" />
                <span className="leading-tight">{item.text}</span>
                <MarkerTooltip>{item.description}</MarkerTooltip>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};
