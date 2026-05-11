import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Home, FileText, Share2, User, Activity, Pill, Calendar, ChevronRight, ShieldCheck } from "lucide-react";

const tabs = ["Home", "Records", "Share", "Profile"] as const;
type Tab = typeof tabs[number];

const tabIcons: Record<Tab, React.ElementType> = {
  Home, Records: FileText, Share: Share2, Profile: User,
};

export function PatientMobileMockup() {
  const [active, setActive] = useState<Tab>("Home");

  return (
    <div className="flex justify-center select-none">
      {/* Phone frame */}
      <div className="w-[260px] bg-pine-950 rounded-[2.5rem] p-2.5 shadow-2xl border-4 border-pine-900">
        {/* Notch */}
        <div className="flex justify-center mb-1">
          <div className="w-20 h-5 bg-pine-900 rounded-full" />
        </div>

        {/* Screen */}
        <div className="bg-white rounded-[2rem] overflow-hidden" style={{ height: 480 }}>
          {/* Status bar */}
          <div className="bg-pine-900 px-4 py-2 flex justify-between items-center">
            <span className="text-white text-[10px] font-bold">9:41</span>
            <span className="text-white text-[10px] font-bold tracking-tight">FettleMed</span>
            <span className="text-pine-300 text-[10px]">●●●</span>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-hidden" style={{ height: 400 }}>
            <AnimatePresence mode="wait">
              {active === "Home" && (
                <motion.div key="home" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="h-full flex flex-col">
                  <div className="bg-pine-900 px-4 pb-5 pt-3">
                    <p className="text-pine-300 text-[10px] font-semibold">Good morning</p>
                    <p className="text-white text-sm font-black">Rajan Subramaniam</p>
                  </div>
                  <div className="flex-1 bg-surface-50 px-3 py-3 space-y-2.5 overflow-hidden -mt-3 rounded-t-2xl">
                    <motion.div initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.1 }} className="bg-white rounded-2xl p-3 shadow-sm border border-stone-100">
                      <p className="text-[9px] font-black text-stone-400 uppercase tracking-wider mb-2">Latest activity</p>
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-xl bg-pine-50 flex items-center justify-center shrink-0">
                          <FileText className="w-4 h-4 text-pine-600" />
                        </div>
                        <div>
                          <p className="text-xs font-bold text-pine-900">CBC Report added</p>
                          <p className="text-[9px] text-stone-400">From Dr. Sriram — Today</p>
                        </div>
                      </div>
                    </motion.div>
                    <motion.div initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }} className="bg-white rounded-2xl p-3 shadow-sm border border-stone-100">
                      <p className="text-[9px] font-black text-stone-400 uppercase tracking-wider mb-2">Medications</p>
                      {[{ name: "Amlodipine 5mg", time: "8:00 AM" }, { name: "Metformin 500mg", time: "2:00 PM" }].map((m) => (
                        <div key={m.name} className="flex items-center gap-2 py-1">
                          <Pill className="w-3.5 h-3.5 text-accent-600 shrink-0" />
                          <span className="text-[10px] font-semibold text-stone-700 flex-1">{m.name}</span>
                          <span className="text-[9px] text-stone-400">{m.time}</span>
                        </div>
                      ))}
                    </motion.div>
                    <motion.div initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.3 }} className="bg-accent-50 border border-accent-200 rounded-2xl p-3 flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-accent-600 shrink-0" />
                      <div>
                        <p className="text-xs font-bold text-accent-800">Next visit</p>
                        <p className="text-[9px] text-accent-600">Dr. Sriram — Jun 10</p>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              )}

              {active === "Records" && (
                <motion.div key="records" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="h-full bg-surface-50">
                  <div className="bg-pine-900 px-4 py-3">
                    <p className="text-white text-xs font-black">Health Records</p>
                    <p className="text-pine-300 text-[10px]">7 records across 3 doctors</p>
                  </div>
                  <div className="px-3 py-3 space-y-2 overflow-hidden">
                    {[
                      { label: "CBC Report", sub: "Dr. Sriram — Today", icon: Activity, color: "indigo" },
                      { label: "Prescription", sub: "Dr. Sriram — Jan 14", icon: Pill, color: "pine" },
                      { label: "ECG Report", sub: "Apollo — Dec 2024", icon: Activity, color: "rose" },
                      { label: "Prescription", sub: "Dr. Kapur — Nov 2024", icon: Pill, color: "pine" },
                    ].map(({ label, sub, icon: Icon, color }, i) => (
                      <motion.div key={`${label}-${i}`} initial={{ x: -10, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: i * 0.1 }} className="bg-white rounded-xl px-3 py-2.5 flex items-center gap-2.5 shadow-sm border border-stone-100">
                        <div className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${color === "indigo" ? "bg-indigo-50" : color === "rose" ? "bg-rose-50" : "bg-pine-50"}`}>
                          <Icon className={`w-3.5 h-3.5 ${color === "indigo" ? "text-indigo-500" : color === "rose" ? "text-rose-500" : "text-pine-600"}`} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-[10px] font-bold text-pine-900 truncate">{label}</p>
                          <p className="text-[9px] text-stone-400 truncate">{sub}</p>
                        </div>
                        <ChevronRight className="w-3 h-3 text-stone-300 shrink-0" />
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}

              {active === "Share" && (
                <motion.div key="share" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="h-full bg-surface-50">
                  <div className="bg-pine-900 px-4 py-3">
                    <p className="text-white text-xs font-black">Share Records</p>
                    <p className="text-pine-300 text-[10px]">You control who sees what</p>
                  </div>
                  <div className="px-3 py-3 space-y-3">
                    <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.2 }} className="bg-white rounded-2xl p-4 border border-stone-100 shadow-sm text-center">
                      <ShieldCheck className="w-8 h-8 text-pine-600 mx-auto mb-2" />
                      <p className="text-xs font-black text-pine-900">Share with Dr. Pradeep</p>
                      <p className="text-[10px] text-stone-400 mt-1 mb-3">Grant access to your full health history</p>
                      <div className="flex gap-2">
                        <button className="flex-1 py-2 bg-pine-900 text-white text-[10px] font-bold rounded-xl">Grant Access</button>
                        <button className="flex-1 py-2 border border-stone-200 text-stone-600 text-[10px] font-bold rounded-xl">Specific Records</button>
                      </div>
                    </motion.div>
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="bg-white rounded-xl p-3 border border-stone-100 shadow-sm">
                      <p className="text-[9px] font-bold text-stone-400 uppercase tracking-wider mb-2">Active access</p>
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-pine-100 flex items-center justify-center text-[9px] font-black text-pine-700">S</div>
                        <div className="flex-1">
                          <p className="text-[10px] font-bold text-pine-900">Dr. Sriram</p>
                          <p className="text-[9px] text-stone-400">Expires after next visit</p>
                        </div>
                        <button className="text-[9px] text-rose-500 font-bold">Revoke</button>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              )}

              {active === "Profile" && (
                <motion.div key="profile" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="h-full bg-surface-50">
                  <div className="bg-pine-900 px-4 py-3 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-pine-700 flex items-center justify-center font-black text-white text-sm">R</div>
                    <div>
                      <p className="text-white text-xs font-black">Rajan Subramaniam</p>
                      <p className="text-pine-300 text-[10px]">52 • Male • Blood: O+</p>
                    </div>
                  </div>
                  <div className="px-3 py-3 space-y-2">
                    {["Allergies: Penicillin", "Chronic: Hypertension, Type 2 Diabetes", "Last physical: Jan 2025"].map((item, i) => (
                      <motion.div key={item} initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.15 }} className="bg-white rounded-xl px-3 py-2.5 border border-stone-100 shadow-sm">
                        <p className="text-[10px] font-semibold text-stone-600">{item}</p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Bottom tab bar */}
          <div className="flex border-t border-stone-100 bg-white h-[52px]">
            {(Object.keys(tabIcons) as Tab[]).map((t) => {
              const Icon = tabIcons[t];
              return (
                <button
                  key={t}
                  onClick={() => setActive(t)}
                  className={`flex-1 flex flex-col items-center justify-center gap-0.5 transition-all ${active === t ? "text-pine-700" : "text-stone-300"}`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="text-[8px] font-bold">{t}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Home bar */}
        <div className="flex justify-center mt-2">
          <div className="w-24 h-1 bg-pine-700 rounded-full" />
        </div>
      </div>
    </div>
  );
}
