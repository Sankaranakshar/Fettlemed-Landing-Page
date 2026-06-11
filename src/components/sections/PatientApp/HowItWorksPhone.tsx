import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Upload, Camera, FileText, CheckCircle2, Pill, Activity,
  Stethoscope, ShieldCheck, ClipboardList,
} from "lucide-react";

/**
 * The phone for the "How it works" story. Same design language as the
 * hero mockup, but each step shows a purpose-built screen that acts out
 * that step: uploading old records, the record growing after a visit,
 * and granting consent at the next appointment.
 */

/* ── Step 1: upload what you already have ───────────────────────── */
function UploadScreen() {
  return (
    <div className="absolute inset-0 flex flex-col">
      <div className="bg-pine-600 px-4 pb-5 pt-3">
        <p className="text-pine-100 text-[10px] font-medium">Step 1</p>
        <p className="text-white text-sm font-medium">Add your records</p>
      </div>
      <div className="flex-1 bg-surface-50 px-3 py-3 space-y-2.5 overflow-hidden -mt-3 rounded-t-2xl">
        {/* Source tiles */}
        <div className="grid grid-cols-2 gap-2">
          {[
            { Icon: Camera, label: "Scan paper" },
            { Icon: Upload, label: "Upload PDF" },
          ].map(({ Icon, label }, i) => (
            <motion.div
              key={label}
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 + i * 0.08 }}
              className="bg-white rounded-xl border border-dashed border-pine-200 px-2 py-3 flex flex-col items-center gap-1.5"
            >
              <Icon className="w-4 h-4 text-pine-600" />
              <span className="text-[9px] font-medium text-pine-900">{label}</span>
            </motion.div>
          ))}
        </div>

        {/* Files arriving */}
        {[
          { name: "CBC_2019.pdf", sub: "Lab report", delay: 0.4 },
          { name: "Discharge_summary.pdf", sub: "Hospital record", delay: 0.75 },
          { name: "Prescription_photo.jpg", sub: "Scanned paper", delay: 1.1 },
        ].map(({ name, sub, delay }) => (
          <motion.div
            key={name}
            initial={{ x: -14, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay, type: "spring", stiffness: 220, damping: 22 }}
            className="bg-white rounded-xl px-3 py-2.5 border border-stone-100 shadow-sm flex items-center gap-2.5"
          >
            <FileText className="w-3.5 h-3.5 text-pine-600 shrink-0" />
            <div className="flex-1 min-w-0">
              <p className="text-[10px] font-medium text-pine-900 truncate">{name}</p>
              <p className="text-[9px] text-stone-400">{sub}</p>
            </div>
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: delay + 0.3, type: "spring", stiffness: 360 }}
            >
              <CheckCircle2 className="w-3.5 h-3.5 text-pine-500" />
            </motion.span>
          </motion.div>
        ))}

        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.7 }}
          className="bg-pine-50 border border-pine-100 rounded-xl px-3 py-2 flex items-center gap-2"
        >
          <CheckCircle2 className="w-3.5 h-3.5 text-pine-600 shrink-0" />
          <p className="text-[10px] font-medium text-pine-800">3 records added to your history</p>
        </motion.div>
      </div>
    </div>
  );
}

/* ── Step 2: the record grows with every visit ──────────────────── */
function GrowScreen() {
  return (
    <div className="absolute inset-0 flex flex-col">
      <div className="bg-pine-600 px-4 pb-5 pt-3">
        <p className="text-pine-100 text-[10px] font-medium">Step 2</p>
        <p className="text-white text-sm font-medium">Your record grows</p>
      </div>
      <div className="flex-1 bg-surface-50 px-3 py-3 space-y-2 overflow-hidden -mt-3 rounded-t-2xl relative">
        {/* Notification of the new visit */}
        <motion.div
          initial={{ y: -24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.25, type: "spring", stiffness: 240, damping: 22 }}
          className="bg-pine-900 rounded-xl px-3 py-2 flex items-center gap-2"
        >
          <Stethoscope className="w-3.5 h-3.5 text-pine-300 shrink-0" />
          <p className="text-[10px] font-medium text-white leading-tight">Dr. Mehta added a prescription</p>
        </motion.div>

        {/* New entry slides into the timeline */}
        <motion.div
          initial={{ x: 24, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.7, type: "spring", stiffness: 220, damping: 20 }}
          className="bg-white rounded-xl px-3 py-2.5 border border-pine-200 shadow-md flex items-center gap-2.5"
        >
          <div className="w-7 h-7 rounded-lg bg-pine-50 border border-pine-100 flex items-center justify-center shrink-0">
            <Pill className="w-3.5 h-3.5 text-pine-600" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-[10px] font-medium text-pine-900">Amlodipine 5mg</p>
            <p className="text-[9px] text-stone-400">Today · Dr. Mehta</p>
          </div>
          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1.0, type: "spring", stiffness: 360 }}
            className="text-[8px] font-semibold bg-pine-600 text-white rounded-full px-1.5 py-0.5 shrink-0"
          >
            New
          </motion.span>
        </motion.div>

        {/* Existing history beneath */}
        {[
          { Icon: ClipboardList, label: "Consultation note", sub: "2 weeks ago", delay: 1.0 },
          { Icon: Activity, label: "CBC report", sub: "Last month", delay: 1.15 },
          { Icon: FileText, label: "Discharge summary", sub: "2019", delay: 1.3 },
        ].map(({ Icon, label, sub, delay }) => (
          <motion.div
            key={label}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.75 }}
            transition={{ delay }}
            className="bg-white rounded-xl px-3 py-2.5 border border-stone-100 flex items-center gap-2.5"
          >
            <Icon className="w-3.5 h-3.5 text-stone-400 shrink-0" />
            <div className="flex-1 min-w-0">
              <p className="text-[10px] font-medium text-stone-600">{label}</p>
              <p className="text-[9px] text-stone-400">{sub}</p>
            </div>
          </motion.div>
        ))}

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6 }}
          className="text-[9px] text-stone-400 text-center pt-1"
        >
          No typing. You approved, it synced.
        </motion.p>
      </div>
    </div>
  );
}

/* ── Step 3: share at the next visit ────────────────────────────── */
function ShareScreen() {
  const [granted, setGranted] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setGranted(true), 1600);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="absolute inset-0 flex flex-col">
      <div className="bg-pine-600 px-4 pb-5 pt-3">
        <p className="text-pine-100 text-[10px] font-medium">Step 3</p>
        <p className="text-white text-sm font-medium">Share at the visit</p>
      </div>
      <div className="flex-1 bg-surface-50 px-3 py-3 space-y-2.5 overflow-hidden -mt-3 rounded-t-2xl">
        {/* Request card */}
        <motion.div
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 240, damping: 22 }}
          className="bg-white rounded-xl px-3 py-3 border border-stone-100 shadow-sm flex items-center gap-2.5"
        >
          <div className="w-8 h-8 rounded-full bg-pine-50 border border-pine-100 flex items-center justify-center shrink-0">
            <Stethoscope className="w-4 h-4 text-pine-600" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-[9px] text-pine-400 font-medium uppercase tracking-wider">Access request</p>
            <p className="text-[11px] font-medium text-pine-900">Dr. Sharma</p>
          </div>
        </motion.div>

        {/* Duration chips */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55 }}
          className="bg-white rounded-xl px-3 py-3 border border-stone-100"
        >
          <p className="text-[9px] font-medium text-stone-400 uppercase tracking-wider mb-2">Allow access for</p>
          <div className="flex gap-1.5">
            {["This visit", "30 days", "Until revoked"].map((d, i) => (
              <span
                key={d}
                className={`text-[9px] font-medium rounded-full px-2 py-1 border ${
                  i === 0 ? "bg-pine-900 text-white border-pine-900" : "bg-surface-50 text-stone-500 border-stone-200"
                }`}
              >
                {d}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Approve button morphs into granted state */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
        >
          <div
            className={`w-full rounded-xl py-2.5 flex items-center justify-center gap-1.5 text-[11px] font-medium transition-colors duration-300 ${
              granted ? "bg-pine-50 border border-pine-200 text-pine-700" : "bg-pine-900 text-white"
            }`}
          >
            {granted ? (
              <>
                <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 360, damping: 14 }}>
                  <ShieldCheck className="w-3.5 h-3.5" />
                </motion.span>
                Access granted · this visit
              </>
            ) : (
              "Approve"
            )}
          </div>
        </motion.div>

        <AnimatePresence>
          {granted && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-[9px] text-stone-400 text-center"
            >
              Expires on its own. Revoke anytime, in one tap.
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

const SCREENS = [UploadScreen, GrowScreen, ShareScreen];

export function HowItWorksPhone({ step }: { step: number }) {
  const Screen = SCREENS[Math.min(Math.max(step, 0), 2)];

  return (
    <div className="relative flex justify-center select-none" aria-hidden="true">
      {/* Background glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-72 h-72 bg-pine-500/15 rounded-full blur-3xl" />
      </div>

      {/* iPhone shell, same design language as the hero mockup */}
      <div className="relative" style={{ width: 280 }}>
        <div style={{ position: "absolute", left: -4, top: 90, width: 4, height: 28, backgroundColor: "#1a2e24", borderRadius: "2px 0 0 2px" }} />
        <div style={{ position: "absolute", left: -4, top: 126, width: 4, height: 28, backgroundColor: "#1a2e24", borderRadius: "2px 0 0 2px" }} />
        <div style={{ position: "absolute", right: -4, top: 108, width: 4, height: 44, backgroundColor: "#1a2e24", borderRadius: "0 2px 2px 0" }} />

        <div
          className="rounded-[3rem] overflow-hidden"
          style={{
            backgroundColor: "#07100d",
            boxShadow: "0 32px 64px rgba(5,14,11,0.5), 0 8px 24px rgba(5,14,11,0.3), inset 0 1px 0 rgba(255,255,255,0.07)",
            padding: 7,
          }}
        >
          <div className="rounded-[2.7rem] overflow-hidden bg-pine-600 flex flex-col" style={{ height: 520 }}>
            {/* Status bar with Dynamic Island */}
            <div className="relative flex items-center justify-between px-5 bg-pine-600" style={{ height: 50, paddingTop: 10 }}>
              <span className="text-white text-[11px] font-bold tracking-tight z-10">9:41</span>
              <div className="absolute left-1/2 -translate-x-1/2 bg-black rounded-full z-20" style={{ width: 82, height: 26, top: 8 }} />
              <span className="w-10" />
            </div>

            {/* Step screen */}
            <div className="overflow-hidden flex-1 bg-surface-50 relative">
              <AnimatePresence mode="sync">
                <motion.div
                  key={step}
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0"
                >
                  <Screen />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Home indicator */}
            <div className="flex justify-center items-center bg-surface-50 shrink-0" style={{ height: 22 }}>
              <div style={{ width: 120, height: 4, backgroundColor: "#1a1a1a", borderRadius: 2, opacity: 0.18 }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
