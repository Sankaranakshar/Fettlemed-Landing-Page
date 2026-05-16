import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Stethoscope, FileText, Pill, PenLine, CheckCircle2, Activity, Upload } from "lucide-react";

const tabs = ["Patient Summary", "Prescriptions", "Add Note"] as const;
type Tab = typeof tabs[number];

export function DoctorConsultationMockup() {
  const [active, setActive] = useState<Tab>("Patient Summary");
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setActive((t) => {
        const i = tabs.indexOf(t);
        return tabs[(i + 1) % tabs.length];
      });
    }, 3500);
    return () => clearInterval(id);
  }, [paused]);

  return (
    <div
      className="w-full max-w-[540px] mx-auto select-none"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="bg-white rounded-[1.5rem] border border-stone-200 shadow-xl overflow-hidden">
        {/* Window chrome */}
        <div className="flex items-center gap-2 px-5 py-3 border-b border-stone-100 bg-stone-50">
          <span className="w-3 h-3 rounded-full bg-red-400" />
          <span className="w-3 h-3 rounded-full bg-amber-400" />
          <span className="w-3 h-3 rounded-full bg-green-400" />
          <span className="mx-auto text-xs font-semibold text-stone-400">Doctor Portal — Dr. Sriram</span>
        </div>

        {/* Patient bar */}
        <div className="flex items-center gap-3 px-5 py-3 bg-pine-900 text-white">
          <div className="w-8 h-8 rounded-full bg-pine-700 flex items-center justify-center font-bold text-sm">R</div>
          <div>
            <p className="text-sm font-bold">Rajan Subramaniam</p>
            <p className="text-xs text-pine-300">52 • Male • UHID: FM-00421</p>
          </div>
          <div className="ml-auto flex items-center gap-1.5 bg-accent-600/30 border border-accent-500/30 px-3 py-1 rounded-full">
            <CheckCircle2 className="w-3 h-3 text-accent-400" />
            <span className="text-xs font-bold text-accent-300">Consent granted</span>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-stone-100 bg-white px-4 pt-2">
          {tabs.map((t) => (
            <button
              key={t}
              onClick={() => { setActive(t); setPaused(true); }}
              className={`flex items-center gap-1.5 px-4 py-2.5 text-xs font-bold border-b-2 transition-[border-color,color] duration-150 ease-out ${
                active === t ? "border-pine-700 text-pine-900" : "border-transparent text-stone-400 hover:text-stone-600"
              }`}
            >
              {t === "Patient Summary" && <Stethoscope className="w-3 h-3" />}
              {t === "Prescriptions" && <Pill className="w-3 h-3" />}
              {t === "Add Note" && <PenLine className="w-3 h-3" />}
              {t}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="px-5 py-4 min-h-[230px]">
          <AnimatePresence mode="wait">
            {active === "Patient Summary" && (
              <motion.div key="summary" initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }} transition={{ duration: 0.25 }} className="space-y-3">
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { label: "Blood Pressure", value: "138/88 mmHg", icon: Activity, color: "rose" },
                    { label: "Last Lab", value: "CBC — 5 days ago", icon: FileText, color: "indigo" },
                  ].map(({ label, value, icon: Icon, color }) => (
                    <div key={label} className="bg-stone-50 rounded-xl p-3 flex items-start gap-2">
                      <div className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${color === "rose" ? "bg-rose-50" : "bg-indigo-50"}`}>
                        <Icon className={`w-3.5 h-3.5 ${color === "rose" ? "text-rose-500" : "text-indigo-500"}`} />
                      </div>
                      <div>
                        <p className="text-[10px] text-stone-400 font-semibold">{label}</p>
                        <p className="text-xs font-bold text-pine-900">{value}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="bg-stone-50 rounded-xl p-3">
                  <p className="text-[10px] font-bold text-stone-400 uppercase tracking-wider mb-2">Current Medications</p>
                  {["Amlodipine 5mg — once daily", "Metformin 500mg — twice daily"].map((m) => (
                    <div key={m} className="flex items-center gap-2 py-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-pine-500 shrink-0" />
                      <span className="text-xs font-medium text-stone-700">{m}</span>
                    </div>
                  ))}
                </div>
                <div className="bg-amber-50 border border-amber-100 rounded-xl p-3">
                  <div className="flex items-center gap-2">
                    <Upload className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                    <p className="text-xs font-bold text-amber-700">Patient uploaded new CBC report today</p>
                  </div>
                </div>
              </motion.div>
            )}

            {active === "Prescriptions" && (
              <motion.div key="rx" initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }} transition={{ duration: 0.25 }} className="space-y-3">
                <p className="text-[10px] font-bold text-stone-400 uppercase tracking-wider">Previous prescriptions</p>
                {[
                  { drug: "Amlodipine 5mg", date: "14 Jan 2025", status: "Active" },
                  { drug: "Metformin 500mg", date: "14 Jan 2025", status: "Active" },
                  { drug: "Atorvastatin 10mg", date: "Oct 2024", status: "Completed" },
                ].map(({ drug, date, status }) => (
                  <div key={drug} className="flex items-center justify-between bg-stone-50 rounded-xl px-4 py-3">
                    <div className="flex items-center gap-2">
                      <Pill className="w-4 h-4 text-pine-600 shrink-0" />
                      <div>
                        <p className="text-xs font-bold text-pine-900">{drug}</p>
                        <p className="text-[10px] text-stone-400">{date}</p>
                      </div>
                    </div>
                    <span className={`text-[10px] font-bold px-2 py-1 rounded-full ${status === "Active" ? "bg-green-100 text-green-700" : "bg-stone-200 text-stone-500"}`}>{status}</span>
                  </div>
                ))}
                <motion.button initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="w-full mt-2 py-2.5 rounded-xl border-2 border-dashed border-pine-200 text-pine-700 text-xs font-bold hover:bg-pine-50 transition-colors flex items-center justify-center gap-2">
                  <PenLine className="w-3.5 h-3.5" /> New Prescription
                </motion.button>
              </motion.div>
            )}

            {active === "Add Note" && (
              <motion.div key="note" initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }} transition={{ duration: 0.25 }} className="space-y-3">
                <p className="text-[10px] font-bold text-stone-400 uppercase tracking-wider">Consultation note</p>
                <div className="bg-stone-50 rounded-xl p-4 min-h-[100px] relative">
                  <motion.p className="text-sm text-stone-700 font-medium leading-relaxed" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
                    BP 138/88 — slight improvement. CBC within normal range. No change to medication at this time. Review in 4 weeks. Patient advised on dietary sodium reduction.
                  </motion.p>
                  <motion.span initial={{ opacity: 1 }} animate={{ opacity: [1, 0] }} transition={{ delay: 1.8, repeat: Infinity, duration: 0.7 }} className="inline-block w-0.5 h-4 bg-pine-600 ml-0.5 align-text-bottom" />
                </div>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.0 }} className="flex gap-2">
                  <button className="flex-1 py-2.5 bg-pine-900 text-white rounded-xl text-xs font-bold hover:bg-pine-800 transition-colors">Save Note</button>
                  <button className="px-4 py-2.5 border border-stone-200 text-stone-600 rounded-xl text-xs font-bold hover:bg-stone-50 transition-colors">Cancel</button>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
