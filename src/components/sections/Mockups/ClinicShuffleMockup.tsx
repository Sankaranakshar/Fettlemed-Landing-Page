import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { CalendarDays, WalletCards, BarChart2, CheckCircle2, Clock, Users } from "lucide-react";

const views = ["Appointments", "Billing", "Reports"] as const;
type View = typeof views[number];

export function ClinicShuffleMockup() {
  const [active, setActive] = useState<View>("Appointments");
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setActive((v) => {
        const i = views.indexOf(v);
        return views[(i + 1) % views.length];
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
      <div className="bg-white rounded-[1.5rem] border border-stone-200 shadow-xl overflow-hidden">
        {/* Window chrome */}
        <div className="flex items-center gap-2 px-5 py-3 border-b border-stone-100 bg-stone-50">
          <span className="w-3 h-3 rounded-full bg-red-400" />
          <span className="w-3 h-3 rounded-full bg-amber-400" />
          <span className="w-3 h-3 rounded-full bg-green-400" />
          <span className="mx-auto text-xs font-semibold text-stone-400">Clinic Dashboard — FettleMed</span>
        </div>

        {/* Sidebar + main layout */}
        <div className="flex min-h-[270px]">
          {/* Sidebar */}
          <div className="w-36 border-r border-stone-100 bg-stone-50 flex flex-col py-3 gap-1 shrink-0">
            {views.map((v) => {
              const Icon = v === "Appointments" ? CalendarDays : v === "Billing" ? WalletCards : BarChart2;
              return (
                <button
                  key={v}
                  onClick={() => { setActive(v); setPaused(true); }}
                  className={`flex items-center gap-2 px-4 py-2.5 text-xs font-bold transition-all text-left ${
                    active === v ? "bg-pine-900 text-white" : "text-stone-500 hover:bg-stone-200 hover:text-stone-700"
                  }`}
                >
                  <Icon className="w-3.5 h-3.5 shrink-0" />
                  {v}
                </button>
              );
            })}
            <div className="mt-auto px-4 pb-2">
              <div className="flex items-center gap-1.5">
                <Users className="w-3 h-3 text-stone-400" />
                <span className="text-[9px] text-stone-400 font-semibold">12 patients today</span>
              </div>
            </div>
          </div>

          {/* Main content */}
          <div className="flex-1 p-4 overflow-hidden">
            <AnimatePresence mode="wait">
              {active === "Appointments" && (
                <motion.div key="appts" initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -10 }} transition={{ duration: 0.25 }} className="space-y-2">
                  <p className="text-[10px] font-bold text-stone-400 uppercase tracking-wider mb-3">Today — Tuesday 13 May</p>
                  {[
                    { name: "Priya Venkat", time: "9:00 AM", status: "Completed", color: "green" },
                    { name: "Rajan S.", time: "9:30 AM", status: "In Consultation", color: "pine" },
                    { name: "Arjun M.", time: "10:15 AM", status: "Waiting", color: "amber" },
                    { name: "Kavitha R.", time: "11:00 AM", status: "Booked", color: "stone" },
                  ].map(({ name, time, status, color }, i) => (
                    <motion.div key={name} initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }} className="flex items-center gap-3 bg-stone-50 rounded-xl px-3 py-2.5">
                      <div className="w-7 h-7 rounded-full bg-pine-100 flex items-center justify-center text-[10px] font-black text-pine-700 shrink-0">{name[0]}</div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-bold text-pine-900 truncate">{name}</p>
                        <p className="text-[10px] text-stone-400">{time}</p>
                      </div>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full shrink-0 ${
                        color === "green" ? "bg-green-100 text-green-700" :
                        color === "pine" ? "bg-pine-100 text-pine-700" :
                        color === "amber" ? "bg-amber-100 text-amber-700" :
                        "bg-stone-200 text-stone-500"
                      }`}>{status}</span>
                    </motion.div>
                  ))}
                </motion.div>
              )}

              {active === "Billing" && (
                <motion.div key="billing" initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -10 }} transition={{ duration: 0.25 }} className="space-y-3">
                  <p className="text-[10px] font-bold text-stone-400 uppercase tracking-wider mb-3">Today's collections</p>
                  <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.2 }} className="bg-pine-900 rounded-2xl p-4 text-white">
                    <p className="text-xs text-pine-300 mb-1">Total collected</p>
                    <p className="text-2xl font-black">₹14,800</p>
                    <div className="flex items-center gap-1.5 mt-2">
                      <CheckCircle2 className="w-3 h-3 text-green-400" />
                      <p className="text-[10px] text-pine-300">12 invoices generated</p>
                    </div>
                  </motion.div>
                  {[
                    { label: "Consultation fees", amount: "₹9,600" },
                    { label: "Lab orders", amount: "₹3,200" },
                    { label: "Procedures", amount: "₹2,000" },
                  ].map(({ label, amount }, i) => (
                    <motion.div key={label} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 + i * 0.1 }} className="flex justify-between items-center py-1.5 border-b border-stone-100 last:border-0">
                      <span className="text-xs text-stone-500 font-medium">{label}</span>
                      <span className="text-xs font-bold text-pine-900">{amount}</span>
                    </motion.div>
                  ))}
                </motion.div>
              )}

              {active === "Reports" && (
                <motion.div key="reports" initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -10 }} transition={{ duration: 0.25 }} className="space-y-3">
                  <p className="text-[10px] font-bold text-stone-400 uppercase tracking-wider mb-3">This week</p>
                  {[
                    { label: "Patients seen", value: 58, max: 80, color: "pine" },
                    { label: "No-shows", value: 4, max: 20, color: "rose" },
                    { label: "Avg wait time", value: "8 min", bar: false },
                  ].map(({ label, value, max, color, bar }, i) => (
                    <motion.div key={label} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.15 }} className="space-y-1.5">
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-stone-500 font-semibold">{label}</span>
                        <span className="text-xs font-bold text-pine-900">{value}{typeof value === "number" && max ? `/${max}` : ""}</span>
                      </div>
                      {bar !== false && typeof value === "number" && max && (
                        <div className="w-full h-2 bg-stone-100 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${(value / max) * 100}%` }}
                            transition={{ delay: 0.3 + i * 0.15, duration: 0.8, ease: "easeOut" }}
                            className={`h-full rounded-full ${color === "pine" ? "bg-pine-600" : "bg-rose-400"}`}
                          />
                        </div>
                      )}
                    </motion.div>
                  ))}
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }} className="flex items-center gap-2 bg-green-50 border border-green-100 rounded-xl px-3 py-2 mt-2">
                    <Clock className="w-3.5 h-3.5 text-green-600 shrink-0" />
                    <p className="text-[10px] font-bold text-green-700">Peak hours: 9–11 AM. Consider adding a slot.</p>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
