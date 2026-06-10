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

/* Comparison against the software doctors and clinic owners already know.
   Lives on the audience pages, where "EMR / HIS" means something. */
export const ComparisonTable = ({ heading = "How FettleMed compares" }: { heading?: string }) => {
  return (
    <section className="py-12 md:py-16 bg-surface-50 border-t border-stone-100 overflow-hidden">
      <div className="container mx-auto px-6 max-w-4xl">
        <FadeIn>
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-pine-900 text-balance">
              {heading}
            </h2>
          </div>
        </FadeIn>

        <div className="overflow-x-auto">
            <table className="w-full min-w-full sm:min-w-[560px] border-separate border-spacing-0 table-fixed sm:table-auto">
              <thead>
                <tr className="bg-white">
                  <th className="text-left py-3 pl-4 pr-4 w-[34%] rounded-tl-xl border-b border-stone-100" />
                  <th className="text-center py-3 w-[22%] border-b border-stone-100">
                    <span className="text-[10px] font-semibold tracking-normal uppercase text-stone-400 whitespace-nowrap">EMR / HIS</span>
                  </th>
                  <th className="text-center py-3 w-[22%] border-b border-stone-100">
                    <span className="text-[10px] font-semibold tracking-normal uppercase text-stone-400 whitespace-nowrap">Health App</span>
                  </th>
                  <th className="text-center py-3 w-[22%] bg-pine-50/60 border-l border-r border-t border-b border-pine-100 rounded-tr-xl">
                    <span className="text-[10px] font-semibold tracking-normal uppercase text-pine-700 whitespace-nowrap">FettleMed</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {rows.map(({ label, emr, app, fm }, i) => (
                  <tr key={label} className={i % 2 === 0 ? "bg-white" : "bg-surface-50"}>
                    <td className={`text-sm font-medium text-ink px-4 py-3.5 ${i === rows.length - 1 ? "rounded-bl-xl" : ""}`}>
                      {label}
                    </td>
                    <td className="text-center px-3 py-3.5">
                      <span className="inline-flex justify-center"><StatusIcon value={emr} /></span>
                    </td>
                    <td className="text-center px-3 py-3.5">
                      <span className="inline-flex justify-center"><StatusIcon value={app} /></span>
                    </td>
                    <td className={`text-center px-3 py-3.5 bg-pine-50/60 border-l border-r border-pine-100 ${i === rows.length - 1 ? "border-b rounded-br-xl" : ""}`}>
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
      </div>
    </section>
  );
};
