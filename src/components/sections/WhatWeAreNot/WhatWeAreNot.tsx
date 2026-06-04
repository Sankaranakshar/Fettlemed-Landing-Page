import React from 'react';
import { FadeIn } from "@/components/common/FadeIn";
import { Check, Minus, X } from "lucide-react";

const rows = [
  { label: "Records follow the patient",   emr: false,  app: null,  fm: true  },
  { label: "Doctor access with consent",   emr: null,   app: false, fm: true  },
  { label: "Works for clinics too",        emr: null,   app: false, fm: true  },
  { label: "No IT department needed",      emr: false,  app: true,  fm: true  },
  { label: "Patient controls sharing",     emr: false,  app: null,  fm: true  },
];

function StatusIcon({ value }: { value: boolean | null }) {
  if (value === true)  return <Check  className="w-4 h-4 text-pine-600" />;
  if (value === false) return <X      className="w-4 h-4 text-stone-400" />;
  return                      <Minus  className="w-4 h-4 text-amber-400" />;
}

export const WhatWeAreNot = () => {
  return (
    <section className="py-16 md:py-20 bg-surface-50 border-t border-stone-100 overflow-hidden">
      <div className="container mx-auto px-6 max-w-5xl">
        <FadeIn>
          <div className="text-center mb-10">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-pine-900 mb-4">
              Not another EMR. Not another health app.{" "}
              <span className="text-pine-600">The layer that connects them.</span>
            </h2>
            <p className="text-lg text-dim-2 max-w-2xl mx-auto font-medium">
              FettleMed is the shared layer between patient, doctor, and clinic. A prescription written in the room appears on the patient's phone before they leave the building.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[560px] border-separate border-spacing-0">
              <thead>
                <tr>
                  <th className="text-left text-sm font-medium text-dim pb-4 pr-4 w-[38%]" />
                  <th className="text-center pb-4 px-3 w-[20%]">
                    <span className="text-xs font-semibold tracking-widest uppercase text-stone-400">EMR / HIS</span>
                  </th>
                  <th className="text-center pb-4 px-3 w-[20%]">
                    <span className="text-xs font-semibold tracking-widest uppercase text-stone-400">Health App</span>
                  </th>
                  <th className="text-center pb-4 px-3 w-[22%]">
                    <span className="text-xs font-semibold tracking-widest uppercase text-pine-700 bg-pine-50 border border-pine-200 px-3 py-1 rounded-full">FettleMed</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {rows.map(({ label, emr, app, fm }, i) => (
                  <tr key={label} className={i % 2 === 0 ? "bg-white" : "bg-surface-50"}>
                    <td className={`text-sm font-medium text-ink px-4 py-3.5 ${i === 0 ? "rounded-tl-xl" : ""} ${i === rows.length - 1 ? "rounded-bl-xl" : ""}`}>
                      {label}
                    </td>
                    <td className="text-center px-3 py-3.5">
                      <span className="inline-flex justify-center"><StatusIcon value={emr} /></span>
                    </td>
                    <td className="text-center px-3 py-3.5">
                      <span className="inline-flex justify-center"><StatusIcon value={app} /></span>
                    </td>
                    <td className={`text-center px-3 py-3.5 bg-pine-50/60 border-l border-r border-pine-100 ${i === 0 ? "border-t rounded-tr-xl" : ""} ${i === rows.length - 1 ? "border-b rounded-br-xl" : ""}`}>
                      <span className="inline-flex justify-center"><StatusIcon value={fm} /></span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Legend */}
            <div className="flex items-center gap-5 mt-4 justify-end text-xs font-medium text-dim">
              <span className="flex items-center gap-1.5"><Check className="w-3 h-3 text-pine-600" /> Yes</span>
              <span className="flex items-center gap-1.5"><Minus className="w-3 h-3 text-amber-400" /> Partial</span>
              <span className="flex items-center gap-1.5"><X className="w-3 h-3 text-stone-400" /> No</span>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
