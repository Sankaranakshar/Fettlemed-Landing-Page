import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Upload, FileText, Stethoscope, Smartphone, CheckCircle2, MessageCircle, Pill } from "lucide-react";

const tabs = ["Clinic", "Doctor", "Everyone"] as const;
type Tab = typeof tabs[number];

export function HomeFlowMockup() {
  const [active, setActive] = useState<Tab>("Clinic");
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setActive((t) => {
        const i = tabs.indexOf(t);
        return tabs[(i + 1) % tabs.length];
      });
    }, 3200);
    return () => clearInterval(id);
  }, [paused]);

  return (
    <div
      className="w-full max-w-[540px] mx-auto select-none"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Window chrome */}
      <div className="bg-white rounded-[1.5rem] border border-stone-200 shadow-xl overflow-hidden">
        {/* Title bar */}
        <div className="flex items-center gap-2 px-5 py-3 border-b border-stone-100 bg-stone-50">
          <span className="w-3 h-3 rounded-full bg-red-400" />
          <span className="w-3 h-3 rounded-full bg-amber-400" />
          <span className="w-3 h-3 rounded-full bg-green-400" />
          <span className="mx-auto text-xs font-semibold text-stone-400 tracking-wide">fettlemed.com</span>
        </div>

        {/* Tab strip */}
        <div className="flex gap-1 px-5 pt-4 pb-2">
          {tabs.map((t) => (
            <button
              key={t}
              onClick={() => { setActive(t); setPaused(true); }}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                active === t
                  ? "bg-pine-900 text-white shadow-sm"
                  : "bg-stone-100 text-stone-500 hover:bg-stone-200"
              }`}
            >
              {t === "Clinic" && <Upload className="w-3 h-3" />}
              {t === "Doctor" && <Stethoscope className="w-3 h-3" />}
              {t === "Everyone" && <Smartphone className="w-3 h-3" />}
              {t}
            </button>
          ))}
        </div>

        {/* Content area */}
        <div className="px-5 pb-5 min-h-[260px] relative">
          <AnimatePresence mode="wait">
            {active === "Clinic" && (
              <motion.div key="clinic" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.3 }} className="pt-2 space-y-3">
                <p className="text-xs font-bold text-stone-400 uppercase tracking-widest mb-4">Upload patient report</p>
                <div className="border-2 border-dashed border-stone-200 rounded-2xl p-6 flex flex-col items-center gap-3 bg-stone-50">
                  <motion.div animate={{ y: [0, -4, 0] }} transition={{ repeat: Infinity, duration: 2 }} className="w-12 h-12 rounded-xl bg-pine-100 flex items-center justify-center">
                    <Upload className="w-6 h-6 text-pine-600" />
                  </motion.div>
                  <p className="text-sm font-semibold text-stone-600">Drop lab report or scan here</p>
                  <p className="text-xs text-stone-400">PDF, JPG, PNG supported</p>
                </div>
                <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }} className="flex items-center gap-3 bg-pine-50 border border-pine-100 rounded-xl p-3">
                  <FileText className="w-5 h-5 text-pine-600 shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-bold text-pine-900 truncate">CBC_Report_Rajan.pdf</p>
                    <p className="text-xs text-stone-400">Uploading to patient record...</p>
                  </div>
                  <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: "linear" }} className="w-4 h-4 border-2 border-pine-600 border-t-transparent rounded-full shrink-0" />
                </motion.div>
                <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.2 }} className="flex items-center gap-3 bg-accent-50 border border-accent-200 rounded-xl p-3">
                  <CheckCircle2 className="w-5 h-5 text-accent-600 shrink-0" />
                  <p className="text-xs font-bold text-accent-700">Synced to Dr. Sriram's dashboard</p>
                </motion.div>
              </motion.div>
            )}

            {active === "Doctor" && (
              <motion.div key="doctor" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.3 }} className="pt-2 space-y-3">
                <p className="text-xs font-bold text-stone-400 uppercase tracking-widest mb-4">Patient summary — Rajan, 52</p>
                <div className="bg-stone-50 rounded-xl p-4 space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-bold text-stone-500">Last visit</span>
                    <span className="text-xs font-semibold text-stone-700">14 Jan 2025</span>
                  </div>
                  <div className="h-px bg-stone-200" />
                  {[["Diagnosis", "Hypertension, Stage 1"], ["Medication", "Amlodipine 5mg"], ["CBC", "Uploaded today"]].map(([k, v]) => (
                    <div key={k} className="flex justify-between items-center">
                      <span className="text-xs text-stone-400">{k}</span>
                      <span className="text-xs font-semibold text-pine-900">{v}</span>
                    </div>
                  ))}
                </div>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} className="bg-white border border-stone-200 rounded-xl p-3 space-y-2">
                  <p className="text-xs font-bold text-stone-500">Add consultation note</p>
                  <motion.div className="text-xs text-stone-700 font-medium leading-relaxed" initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ delay: 0.8, duration: 1.5 }}>
                    <span>BP 138/88 — review in 4 weeks. CBC within range. Continue current dosage.</span>
                  </motion.div>
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.2 }} className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-accent-500 animate-pulse" />
                    <span className="text-xs text-accent-600 font-bold">Saved to patient record</span>
                  </motion.div>
                </motion.div>
              </motion.div>
            )}

            {active === "Everyone" && (
              <motion.div key="patient" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.3 }} className="pt-2">
                <p className="text-xs font-bold text-stone-400 uppercase tracking-widest mb-4">Your health, in one place</p>
                <div className="flex gap-3">
                  {/* Phone frame */}
                  <div className="w-32 shrink-0 bg-pine-900 rounded-[1.2rem] p-2 border-4 border-pine-800 shadow-lg">
                    <div className="bg-white rounded-[0.8rem] overflow-hidden h-48 flex flex-col">
                      <div className="bg-pine-900 px-2 py-2 text-center">
                        <p className="text-white text-[9px] font-bold">FettleMed</p>
                      </div>
                      <div className="flex-1 p-2 space-y-1.5 overflow-hidden">
                        <motion.div initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.2 }} className="bg-pine-50 rounded-lg p-1.5 flex items-center gap-1.5">
                          <FileText className="w-3 h-3 text-pine-600 shrink-0" />
                          <span className="text-[9px] font-bold text-pine-900">CBC Report</span>
                        </motion.div>
                        <motion.div initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.4 }} className="bg-pine-50 rounded-lg p-1.5 flex items-center gap-1.5">
                          <Pill className="w-3 h-3 text-accent-600 shrink-0" />
                          <span className="text-[9px] font-bold text-pine-900">Prescription</span>
                        </motion.div>
                        <motion.div initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.6 }} className="bg-accent-50 border border-accent-200 rounded-lg p-1.5 flex items-center gap-1.5">
                          <MessageCircle className="w-3 h-3 text-accent-600 shrink-0" />
                          <span className="text-[9px] font-bold text-accent-700">What does this mean?</span>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                  {/* Info panel */}
                  <div className="flex-1 space-y-2">
                    {[
                      { icon: FileText, label: "Lab report synced", sub: "From Dr. Sriram's clinic", color: "pine" },
                      { icon: Pill, label: "Prescription ready", sub: "Amlodipine 5mg", color: "accent" },
                      { icon: CheckCircle2, label: "All records current", sub: "Last updated today", color: "green" },
                    ].map(({ icon: Icon, label, sub, color }, i) => (
                      <motion.div key={label} initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 + i * 0.25 }} className="bg-white border border-stone-200 rounded-xl p-3 flex items-center gap-2">
                        <div className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${color === "pine" ? "bg-pine-100" : color === "accent" ? "bg-accent-50" : "bg-green-50"}`}>
                          <Icon className={`w-3.5 h-3.5 ${color === "pine" ? "text-pine-600" : color === "accent" ? "text-accent-600" : "text-green-600"}`} />
                        </div>
                        <div>
                          <p className="text-xs font-bold text-pine-900">{label}</p>
                          <p className="text-[10px] text-stone-400">{sub}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Tab indicators */}
      <div className="flex justify-center gap-2 mt-4">
        {tabs.map((t) => (
          <button key={t} onClick={() => { setActive(t); setPaused(true); }} className="h-8 w-8 flex items-center justify-center" aria-label={`Switch to ${t}`}>
            <div className={`transition-all duration-300 h-2 rounded-full ${active === t ? "bg-pine-700 w-6" : "bg-stone-300 w-2 hover:bg-stone-400"}`} />
          </button>
        ))}
      </div>
    </div>
  );
}
