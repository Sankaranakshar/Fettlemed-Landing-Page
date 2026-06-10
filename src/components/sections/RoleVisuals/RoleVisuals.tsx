import React, { useState, useEffect, useRef } from 'react';
import {
  Stethoscope, ShieldCheck, Activity, Pill, HeartPulse, FileText,
  CalendarClock, TestTube, CheckCircle2, FileCheck2,
} from "lucide-react";
import { motion, useAnimate, useInView, useReducedMotion } from "motion/react";

/* Mounts its child only once scrolled into view, so a visual's
   entrance animation plays when the user can actually see it. */
export function VisualOnView({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  return (
    <div ref={ref} className={className}>
      {inView && children}
    </div>
  );
}

/* ═══════════════════════════════════════════════
   ROLE VISUALS
   Animated product moments, shared between the home
   ecosystem section and the audience pages.
═══════════════════════════════════════════════ */

/* Health Records - documents fly in from different directions, stack up */
export function HealthRecordsVisual() {
  const rm = useReducedMotion();
  const records = [
    { icon: <FileText className="w-4 h-4" />, label: "CBC Report", sub: "2 days ago", cls: "text-pine-600", bg: "bg-pine-50 border-pine-100", from: { x: -36, y: -8 } },
    { icon: <Pill className="w-4 h-4" />, label: "Amlodipine 5mg", sub: "Active prescription", cls: "text-rose-500", bg: "bg-rose-50 border-rose-100", from: { x: 36, y: -4 } },
    { icon: <Activity className="w-4 h-4" />, label: "Consultation Note", sub: "Dr. Mehta - 1 week ago", cls: "text-indigo-500", bg: "bg-indigo-50 border-indigo-100", from: { x: -30, y: 4 } },
    { icon: <HeartPulse className="w-4 h-4" />, label: "ECG Result", sub: "Last month", cls: "text-pine-500", bg: "bg-pine-50 border-pine-100", from: { x: 30, y: 0 } },
  ];
  return (
    <div className="w-full max-w-[260px] flex flex-col gap-1.5">
      {records.map(({ icon, label, sub, cls, bg, from }, i) => (
        <motion.div
          key={i}
          initial={rm ? { opacity: 0 } : { x: from.x, y: from.y, opacity: 0, scale: 0.93 }}
          animate={{ x: 0, y: 0, opacity: 1, scale: 1 }}
          transition={{ delay: i * 0.17 + 0.08, type: "spring", stiffness: 200, damping: 22 }}
          className="bg-white p-2.5 rounded-xl shadow-sm border border-stone-100 flex items-center gap-3"
        >
          <div className={`w-8 h-8 rounded-lg flex items-center justify-center border shrink-0 ${bg}`}>
            <span className={cls}>{icon}</span>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-pine-900 truncate">{label}</p>
            <p className="text-xs text-pine-400 truncate">{sub}</p>
          </div>
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: i * 0.17 + 0.44, type: "spring", stiffness: 340 }}
            className="w-4 h-4 rounded-full bg-pine-50 border border-pine-200 flex items-center justify-center shrink-0"
          >
            <CheckCircle2 className="w-3 h-3 text-pine-500" />
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}

/* Consent Control - request → line draws → shield activates → approval pulse → check */
export function ConsentVisual() {
  const rm = useReducedMotion();
  return (
    <div className="flex flex-col items-center gap-2 w-full max-w-[256px]">
      {/* Doctor request card */}
      <motion.div
        initial={rm ? { opacity: 0 } : { y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1, type: "spring", stiffness: 200, damping: 20 }}
        className="bg-white px-4 py-3 rounded-xl shadow-sm border border-stone-100 flex items-center gap-3 w-full"
      >
        <div className="w-8 h-8 rounded-full bg-pine-50 flex items-center justify-center shrink-0">
          <Stethoscope className="w-4 h-4 text-pine-600" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-[10px] text-pine-400 font-medium uppercase tracking-wider">Access Request</p>
          <p className="text-sm font-medium text-pine-900">Dr. Sharma</p>
        </div>
        <motion.span
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.4, type: "spring", stiffness: 400 }}
          className="text-[10px] font-medium text-amber-600 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded-full shrink-0"
        >Requesting</motion.span>
      </motion.div>

      {/* Animated connection line */}
      <div className="relative flex items-center justify-center" style={{ height: 26 }}>
        <motion.div
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ delay: 0.55, duration: 0.24, ease: "easeOut" }}
          style={{ transformOrigin: 'top' }}
          className="w-px h-6 bg-gradient-to-b from-pine-300 to-pine-500 absolute"
        />
        <motion.div
          initial={{ y: -12, opacity: 0 }}
          animate={{ y: 12, opacity: [0, 1, 1, 0] }}
          transition={{ delay: 0.76, duration: 0.3, ease: "easeIn" }}
          className="w-1.5 h-1.5 rounded-full bg-pine-500 absolute"
        />
      </div>

      {/* Shield + approval */}
      <motion.div
        initial={rm ? { opacity: 0 } : { scale: 0.88, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.65, type: "spring", stiffness: 200, damping: 18 }}
        className="relative w-full"
      >
        {/* Outward approval pulse */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: [1, 1.45, 1.75], opacity: [0.5, 0.25, 0] }}
          transition={{ delay: 1.05, duration: 0.55, ease: "easeOut" }}
          className="absolute inset-0 rounded-xl bg-pine-300/30 pointer-events-none"
        />
        <div className="bg-white border border-pine-200 rounded-xl px-4 py-3 flex items-center gap-3 shadow-md relative z-10">
          <motion.div
            animate={rm ? {} : { scale: [1, 1.18, 1] }}
            transition={{ delay: 1.05, duration: 0.35, ease: "easeOut" }}
          >
            <ShieldCheck className="w-7 h-7 text-pine-500" />
          </motion.div>
          <div className="flex-1">
            <p className="text-[10px] text-pine-400 font-medium">Access</p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.3 }}
              className="text-sm font-semibold text-pine-700"
            >Approved</motion.p>
          </div>
          <motion.div
            initial={{ scale: 0, rotate: -30, opacity: 0 }}
            animate={{ scale: 1, rotate: 0, opacity: 1 }}
            transition={{ delay: 1.42, type: "spring", stiffness: 380, damping: 14 }}
            className="w-8 h-8 rounded-full bg-pine-600 flex items-center justify-center text-white shrink-0"
          >
            <CheckCircle2 className="w-5 h-5" />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

/* Full History (Doctor) - timeline spine draws, nodes pop in sequentially */
export function FullHistoryVisual() {
  const rm = useReducedMotion();
  const events = [
    { Icon: CalendarClock, label: "Hypertension", sub: "Diagnosed - Jan 2024", dot: "bg-pine-300" },
    { Icon: Activity,      label: "BP: 138/88",   sub: "Review - Mar 2024",   dot: "bg-rose-300" },
    { Icon: TestTube,      label: "CBC Normal",   sub: "Lab result - May 2024", dot: "bg-indigo-300" },
  ];
  return (
    <div className="w-full max-w-[280px] flex flex-col gap-3 relative">
      {/* Timeline spine - draws itself top to bottom */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ delay: 0.15, duration: 0.62, ease: [0.22, 1, 0.36, 1] }}
        style={{ transformOrigin: 'top' }}
        className="absolute left-[19px] top-5 bottom-5 w-[2px] bg-gradient-to-b from-pine-400/70 via-pine-400/40 to-pine-400/20"
      />
      {events.map(({ Icon, label, sub, dot }, i) => (
        <motion.div
          key={i}
          initial={rm ? { opacity: 0 } : { x: 14, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: i * 0.22 + 0.44, type: "spring", stiffness: 220, damping: 22 }}
          className="flex items-center gap-3"
        >
          {/* Node pops in with spring */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: i * 0.22 + 0.38, type: "spring", stiffness: 360, damping: 15 }}
            className="w-10 h-10 rounded-full bg-pine-700 border-2 border-pine-500 flex items-center justify-center text-pine-200 z-10 shrink-0"
          >
            <Icon className="w-4 h-4" />
          </motion.div>
          <div className="bg-pine-700 p-3 rounded-xl border border-pine-500/60 w-full flex items-center gap-3">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: i * 0.22 + 0.6, type: "spring", stiffness: 420 }}
              className={`w-2 h-2 rounded-full ${dot} shrink-0`}
            />
            <div>
              <p className="text-white text-xs font-medium leading-tight">{label}</p>
              <p className="text-pine-300 text-[10px] leading-tight mt-0.5">{sub}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

/* Doctor Portal - inline sync status row (lives inside the Rx workspace) */
function SyncStatusRow({ onDone }: { onDone: () => void; key?: React.Key }) {
  const [scope, animate] = useAnimate();
  const [showCheck, setShowCheck] = useState(false);
  const [showPulse, setShowPulse] = useState(false);

  useEffect(() => {
    let alive = true;
    async function run() {
      if (!scope.current) return;
      await animate(
        scope.current,
        { opacity: 1, y: 0 },
        { delay: 0.08, type: 'spring', stiffness: 200, damping: 22 }
      );
      if (!alive) return;
      setShowCheck(true);
      await new Promise<void>(r => setTimeout(r, 160));
      if (!alive) return;
      setShowPulse(true);
      await new Promise<void>(r => setTimeout(r, 920));
      if (!alive) return;
      onDone();
    }
    run();
    return () => { alive = false; };
  }, []);

  return (
    <motion.div
      ref={scope}
      initial={{ opacity: 0, y: 5 }}
      className="flex items-center gap-2 bg-emerald-900/30 border border-emerald-700/40 rounded-lg px-2 py-1.5"
    >
      <div className="relative w-3.5 h-3.5 flex items-center justify-center shrink-0">
        {showPulse && (
          <motion.span
            initial={{ scale: 1, opacity: 0.65 }}
            animate={{ scale: 3, opacity: 0 }}
            transition={{ duration: 0.48, ease: 'easeOut' }}
            className="absolute inset-0 rounded-full bg-emerald-400"
          />
        )}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: showCheck ? 1 : 0, opacity: showCheck ? 1 : 0 }}
          transition={{ type: 'spring', stiffness: 380, damping: 14 }}
          className="relative z-10 w-3.5 h-3.5 rounded-full bg-emerald-500 flex items-center justify-center"
        >
          <CheckCircle2 className="w-2 h-2 text-white" />
        </motion.div>
      </div>
      <span className="text-[9px] font-medium text-emerald-300 whitespace-nowrap">
        Saved to Patient Record
      </span>
    </motion.div>
  );
}

/* E-Prescriptions (Doctor) - widescreen Doctor Portal EMR interface */
export function EPrescriptionsVisual() {
  const rm = useReducedMotion();
  const [loopKey, setLoopKey] = useState(0);
  const [showPatient, setShowPatient] = useState(rm ? true : false);
  const [showRx,      setShowRx]      = useState(rm ? true : false);
  const [showBadge,   setShowBadge]   = useState(false);
  const [showSynced,  setShowSynced]  = useState(rm ? true : false);

  useEffect(() => {
    if (rm) return;
    let alive = true;
    async function run() {
      // Patient panel loads
      await new Promise<void>(r => setTimeout(r, 260));
      if (!alive) return;
      setShowPatient(true);
      // Prescription workspace activates
      await new Promise<void>(r => setTimeout(r, 440));
      if (!alive) return;
      setShowRx(true);
      // Sync row appears
      await new Promise<void>(r => setTimeout(r, 840));
      if (!alive) return;
      setShowBadge(true);
      // Loop restart
      await new Promise<void>(r => setTimeout(r, 9200));
      if (!alive) return;
      setShowPatient(false);
      setShowRx(false);
      setShowBadge(false);
      setShowSynced(false);
      await new Promise<void>(r => setTimeout(r, 220));
      if (!alive) return;
      setLoopKey(k => k + 1);
    }
    run();
    return () => { alive = false; };
  }, [loopKey, rm]);

  const handleSyncDone = () => { setShowBadge(false); setShowSynced(true); };

  const conditions = [
    { label: 'Hypertension', dot: 'bg-rose-400'  },
    { label: 'Type 2 DM',   dot: 'bg-amber-400' },
  ];
  const labs = [
    { label: 'CBC',   value: 'Normal', dot: 'bg-pine-400'  },
    { label: 'BP',    value: '138/88', dot: 'bg-rose-400'  },
    { label: 'HbA1c', value: '7.2%',  dot: 'bg-amber-400' },
  ];
  const rxItems = [
    { drug: 'Amlodipine 5mg',  dose: '1 tab - morning',     tag: 'Antihypertensive' },
    { drug: 'Metformin 500mg', dose: '2 tabs - after meals', tag: 'Antidiabetic'     },
    { drug: 'Vitamin D3 60K',  dose: '1 cap - weekly',       tag: 'Supplement'       },
  ];

  return (
    <div className="w-full px-1">
      {/* ── Monitor frame ── */}
      <div
        className="w-full rounded-xl overflow-hidden border border-pine-600/40 shadow-2xl"
        style={{ background: '#06130d' }}
      >

        {/* ── Top nav bar ── */}
        <div className="h-7 bg-pine-800/90 border-b border-pine-700/50 flex items-center px-3 gap-2 shrink-0">
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-pine-400 shrink-0" />
            <span className="text-[9px] font-bold text-pine-200 uppercase tracking-widest">FettleMed</span>
          </div>
          <span className="text-pine-600 text-[10px] select-none">·</span>
          <span className="text-[9px] text-pine-400 font-medium">Doctor Portal</span>
          <div className="ml-auto flex items-center gap-1.5 bg-pine-700/50 border border-pine-600/40 rounded-full px-2 py-0.5">
            <span className="text-[9px] text-pine-300">Rahul V.</span>
            <motion.span
              animate={rm ? {} : { opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.8, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0"
            />
          </div>
        </div>

        {/* ── Content ── */}
        <div className="flex" style={{ height: 188 }}>

          {/* ── Left: Patient sidebar ── */}
          <div className="w-[106px] shrink-0 border-r border-pine-700/40 p-2.5 flex flex-col gap-2 overflow-hidden"
               style={{ background: 'rgba(10,28,18,0.7)' }}>
            {showPatient ? (
              <motion.div
                initial={{ opacity: 0, x: -6 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ type: 'spring', stiffness: 200, damping: 22 }}
                className="flex flex-col gap-2 h-full"
              >
                {/* Avatar + name */}
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-pine-600/80 border border-pine-500/60 flex items-center justify-center shrink-0">
                    <span className="text-[9px] font-bold text-pine-100">RV</span>
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] font-semibold text-white leading-none">Rahul V.</p>
                    <p className="text-[9px] text-pine-500 mt-0.5">42 yrs · Male</p>
                  </div>
                </div>

                {/* Conditions */}
                <div className="flex flex-col gap-1">
                  {conditions.map(({ label, dot }) => (
                    <div key={label} className="flex items-center gap-1.5 bg-pine-700/30 border border-pine-600/20 rounded px-1.5 py-1">
                      <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${dot}`} />
                      <span className="text-[9px] text-pine-300 leading-none truncate">{label}</span>
                    </div>
                  ))}
                </div>

                {/* Divider */}
                <div className="border-t border-pine-700/30" />

                {/* Labs */}
                <div>
                  <p className="text-[8px] font-semibold text-pine-500 uppercase tracking-wider mb-1.5">Recent Labs</p>
                  {labs.map(({ label, value, dot }) => (
                    <div key={label} className="flex items-center justify-between mb-1">
                      <div className="flex items-center gap-1 min-w-0">
                        <span className={`w-1 h-1 rounded-full shrink-0 ${dot}`} />
                        <span className="text-[9px] text-pine-500 truncate">{label}</span>
                      </div>
                      <span className="text-[9px] font-medium text-pine-300 tabular-nums">{value}</span>
                    </div>
                  ))}
                </div>

                {/* Last visit */}
                <div className="mt-auto bg-pine-800/50 border border-pine-700/30 rounded px-1.5 py-1">
                  <p className="text-[8px] text-pine-600">Last visit</p>
                  <p className="text-[9px] font-medium text-pine-400">2 weeks ago</p>
                </div>
              </motion.div>
            ) : (
              /* Skeleton while patient loads */
              <div className="flex flex-col gap-2 flex-1">
                {[40, 28, 28, 20, 20, 20].map((w, i) => (
                  <motion.div
                    key={i}
                    animate={{ opacity: [0.15, 0.35, 0.15] }}
                    transition={{ duration: 1.4, repeat: Infinity, delay: i * 0.08 }}
                    className="h-5 rounded bg-pine-700/40"
                    style={{ width: `${w}%` }}
                  />
                ))}
              </div>
            )}
          </div>

          {/* ── Right: Prescription workspace ── */}
          <div className="flex-1 p-2.5 flex flex-col gap-2 min-w-0 overflow-hidden">

            {/* Workspace header */}
            <div className="flex items-center justify-between shrink-0">
              <div className="flex items-center gap-1.5">
                <div className="w-4 h-4 rounded bg-pine-700/70 border border-pine-600/40 flex items-center justify-center shrink-0">
                  <span className="text-[8px] font-bold text-pine-300">Rx</span>
                </div>
                <span className="text-[10px] font-semibold text-pine-200">New Prescription</span>
              </div>
              <span className="text-[9px] text-pine-600">09:15 AM</span>
            </div>

            {/* Rx rows */}
            {showRx ? (
              <div className="flex flex-col gap-1.5 flex-1 min-h-0">
                {rxItems.map(({ drug, dose, tag }, i) => (
                  <motion.div
                    key={drug}
                    initial={{ opacity: 0, x: 8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1, type: 'spring', stiffness: 220, damping: 22 }}
                    className="flex items-center gap-2 bg-pine-700/25 border border-pine-600/25 rounded-lg px-2.5 py-1.5"
                  >
                    <div className="flex-1 min-w-0">
                      <p className="text-[10px] font-semibold text-white leading-none">{drug}</p>
                      <p className="text-[9px] text-pine-500 mt-0.5 leading-none">{dose}</p>
                    </div>
                    <span className="text-[8px] font-medium text-pine-500 bg-pine-800/70 border border-pine-700/40 rounded-full px-1.5 py-0.5 shrink-0 whitespace-nowrap">
                      {tag}
                    </span>
                  </motion.div>
                ))}

                {/* Sync row - inline, not overlaid */}
                {showBadge && !showSynced && (
                  <SyncStatusRow key={loopKey} onDone={handleSyncDone} />
                )}

                {/* Persistent synced state */}
                {showSynced && !showBadge && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="flex items-center gap-1.5 mt-auto"
                  >
                    <CheckCircle2 className="w-3 h-3 text-pine-600 shrink-0" />
                    <span className="text-[9px] font-medium text-pine-600">Synced to patient record</span>
                  </motion.div>
                )}
              </div>
            ) : (
              /* Skeleton while Rx workspace loads */
              <div className="flex flex-col gap-1.5 flex-1">
                {[0, 1, 2].map(i => (
                  <motion.div
                    key={i}
                    animate={{ opacity: [0.15, 0.35, 0.15] }}
                    transition={{ duration: 1.4, repeat: Infinity, delay: i * 0.12 }}
                    className="h-8 rounded-lg bg-pine-700/30"
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

/* Audit Trail (Doctor) - entries drop in, timestamps light up, live indicator */
export function AuditTrailVisual() {
  const rm = useReducedMotion();
  const entries = [
    { icon: <Stethoscope className="w-3.5 h-3.5" />, label: "You viewed full history",      sub: "Today, 9:15 AM",       cls: "text-pine-300" },
    { icon: <CheckCircle2 className="w-3.5 h-3.5" />, label: "Prescription synced to app",  sub: "Yesterday, 6:40 PM",   cls: "text-pine-400" },
    { icon: <FileText className="w-3.5 h-3.5" />,     label: "CBC result uploaded by patient", sub: "2 days ago",        cls: "text-indigo-400" },
  ];
  return (
    <div className="w-full max-w-[260px] flex flex-col gap-2">
      <div className="flex items-center justify-between mb-1 px-1">
        <p className="text-xs font-medium text-pine-400 uppercase tracking-wider">Access Log</p>
        <motion.div
          animate={rm ? {} : { opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex items-center gap-1"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-pine-400" />
          <span className="text-[10px] text-pine-400 font-medium">Live</span>
        </motion.div>
      </div>
      {entries.map(({ icon, label, sub, cls }, i) => (
        <motion.div
          key={i}
          initial={rm ? { opacity: 0 } : { y: -18, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: i * 0.24 + 0.1, type: "spring", stiffness: 200, damping: 22 }}
          className="bg-pine-800 border border-pine-700 rounded-xl p-3 flex items-start gap-3"
        >
          <div className={`mt-0.5 shrink-0 ${cls}`}>{icon}</div>
          <div className="flex-1 min-w-0">
            <p className="text-white text-xs font-medium leading-snug">{label}</p>
            {/* Timestamp lights up after entry arrives */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: i * 0.24 + 0.42 }}
              className="text-pine-400 text-[10px] mt-0.5 font-mono"
            >{sub}</motion.p>
          </div>
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: i * 0.24 + 0.5, type: "spring", stiffness: 360 }}
            className="shrink-0 mt-0.5"
          >
            <CheckCircle2 className="w-3.5 h-3.5 text-pine-500/60" />
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}

/* Patient Registration (Clinic) - queue builds, status animates through states */
export function PatientRegistrationVisual() {
  const rm = useReducedMotion();
  const [status, setStatus] = useState<'Waiting' | 'Verified' | 'Consulting'>(
    rm ? 'Consulting' : 'Waiting'
  );

  useEffect(() => {
    if (rm) return;
    const t1 = setTimeout(() => setStatus('Verified'), 1100);
    const t2 = setTimeout(() => setStatus('Consulting'), 2150);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [rm]);

  const statusCls = {
    Waiting:    'text-amber-600 bg-amber-50 border-amber-200',
    Verified:   'text-blue-600 bg-blue-50 border-blue-200',
    Consulting: 'text-pine-600 bg-pine-50 border-pine-200',
  };

  return (
    <div className="flex flex-col gap-2.5 w-full max-w-[260px]">
      {/* Primary patient - status transitions */}
      <motion.div
        initial={rm ? { opacity: 0 } : { x: -22, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.1, type: "spring", stiffness: 220, damping: 22 }}
        className="bg-white p-3 rounded-xl shadow-md border border-pine-200 flex justify-between items-center"
      >
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-pine-100 text-pine-700 rounded-full flex items-center justify-center text-xs font-bold">1</div>
          <div>
            <p className="text-sm font-medium text-pine-900">Riya Patel</p>
            <p className="text-[10px] text-pine-400">Token #001</p>
          </div>
        </div>
        <motion.span
          key={status}
          initial={{ opacity: 0, scale: 0.82 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 340, damping: 18 }}
          className={`text-xs font-medium px-2 py-1 rounded-full border ${statusCls[status]}`}
        >{status}</motion.span>
      </motion.div>

      {/* Queue - slides in, progressively dimmed */}
      {([
        { n: '2', name: 'Arjun Singh', token: 'Token #002', delay: 0.28 },
        { n: '3', name: 'Meera R.',    token: 'Token #003', delay: 0.46 },
      ] as const).map(({ n, name, token, delay }) => (
        <motion.div
          key={n}
          initial={rm ? { opacity: 0 } : { x: -22, opacity: 0 }}
          animate={{ x: 0, opacity: 0.65 }}
          transition={{ delay, type: "spring", stiffness: 220, damping: 22 }}
          className="bg-white p-3 rounded-xl shadow-sm border border-stone-100 flex justify-between items-center"
        >
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-stone-100 text-stone-500 rounded-full flex items-center justify-center text-xs font-medium">{n}</div>
            <div>
              <p className="text-sm font-medium text-pine-900">{name}</p>
              <p className="text-[10px] text-pine-400">{token}</p>
            </div>
          </div>
          <span className="text-xs font-medium text-stone-500 bg-stone-50 border border-stone-200 px-2 py-1 rounded-full">Waiting</span>
        </motion.div>
      ))}
    </div>
  );
}

/* Billing & Revenue (Clinic) - counter counts up, bar chart draws */
export function BillingRevenueVisual() {
  const rm = useReducedMotion();
  const TARGET = 12480;
  const [displayed, setDisplayed] = useState(rm ? TARGET : 0);

  useEffect(() => {
    if (rm) return;
    let startTs: number | null = null;
    const DURATION = 1300;
    const tick = (ts: number) => {
      if (!startTs) startTs = ts;
      const progress = Math.min((ts - startTs) / DURATION, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplayed(Math.round(eased * TARGET));
      if (progress < 1) requestAnimationFrame(tick);
    };
    const raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [rm]);

  const bars: { label: string; h: number; delay: number }[] = [
    { label: 'Mon', h: 22, delay: 0.15 },
    { label: 'Tue', h: 36, delay: 0.25 },
    { label: 'Wed', h: 27, delay: 0.35 },
    { label: 'Thu', h: 46, delay: 0.45 },
    { label: 'Fri', h: 38, delay: 0.55 },
    { label: 'Sat', h: 52, delay: 0.65 },
  ];

  return (
    <div className="w-full max-w-[240px] bg-white rounded-2xl shadow-lg border border-pine-100 p-5">
      <div className="flex items-start justify-between mb-5">
        <div>
          <p className="text-xs text-pine-400 font-medium uppercase tracking-wider">Today's Revenue</p>
          <p className="text-2xl font-bold text-pine-900 mt-1 tabular-nums">
            ₹{displayed.toLocaleString('en-IN')}
          </p>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.4, type: "spring" }}
          className="text-[10px] font-medium text-pine-600 bg-pine-50 border border-pine-100 px-2 py-1 rounded-full mt-1"
        >↑ 12%</motion.div>
      </div>

      {/* Bar chart - bars draw upward */}
      <div className="flex items-end gap-1.5" style={{ height: 56 }}>
        {bars.map(({ label, h, delay }) => (
          <div key={label} className="flex-1 flex flex-col items-center gap-0.5 self-end">
            <motion.div
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ delay, duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
              style={{ height: h, transformOrigin: 'bottom' }}
              className="w-full rounded-t-sm bg-pine-600/70"
            />
            <span className="text-[9px] text-pine-400">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* Lab & Diagnostics (Clinic) - animated flow: order → processing → result */
export function LabDiagnosticsVisual() {
  const rm = useReducedMotion();
  return (
    <div className="w-full max-w-[270px] flex flex-col gap-4">
      {/* 3-step flow */}
      <div className="flex items-center gap-2">
        {/* Step 1 - Ordered */}
        <motion.div
          initial={rm ? { opacity: 0 } : { scale: 0.75, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.1, type: "spring", stiffness: 240 }}
          className="flex flex-col items-center gap-1.5 shrink-0"
        >
          <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-stone-200 flex items-center justify-center">
            <TestTube className="w-6 h-6 text-indigo-500" />
          </div>
          <span className="text-[10px] font-medium text-pine-500">Ordered</span>
        </motion.div>

        {/* Connector 1 */}
        <div className="flex-1 relative rounded-full overflow-hidden" style={{ height: 4 }}>
          <div className="absolute inset-0 bg-stone-100 rounded-full" />
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.46, duration: 0.28, ease: "easeOut" }}
            style={{ transformOrigin: 'left' }}
            className="absolute inset-0 bg-pine-300 rounded-full"
          />
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: '400%' }}
            transition={{ delay: 0.58, duration: 0.26, ease: "easeIn" }}
            className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-pine-500"
          />
        </div>

        {/* Step 2 - Processing */}
        <motion.div
          initial={rm ? { opacity: 0 } : { scale: 0.75, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.56, type: "spring", stiffness: 240 }}
          className="flex flex-col items-center gap-1.5 shrink-0"
        >
          <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-stone-200 flex items-center justify-center">
            <motion.div
              animate={rm ? {} : { rotate: [0, 360] }}
              transition={{ delay: 0.7, duration: 1.6, repeat: 2, ease: "linear" }}
            >
              <Activity className="w-6 h-6 text-amber-500" />
            </motion.div>
          </div>
          <span className="text-[10px] font-medium text-pine-500">Processing</span>
        </motion.div>

        {/* Connector 2 */}
        <div className="flex-1 relative rounded-full overflow-hidden" style={{ height: 4 }}>
          <div className="absolute inset-0 bg-stone-100 rounded-full" />
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 1.02, duration: 0.28, ease: "easeOut" }}
            style={{ transformOrigin: 'left' }}
            className="absolute inset-0 bg-pine-400 rounded-full"
          />
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: '400%' }}
            transition={{ delay: 1.14, duration: 0.26, ease: "easeIn" }}
            className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-pine-600"
          />
        </div>

        {/* Step 3 - Ready */}
        <motion.div
          initial={rm ? { opacity: 0 } : { scale: 0.75, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1.1, type: "spring", stiffness: 240 }}
          className="flex flex-col items-center gap-1.5 shrink-0 relative"
        >
          <div className="relative w-12 h-12 bg-white rounded-xl shadow-md border border-pine-200 flex items-center justify-center">
            <FileCheck2 className="w-6 h-6 text-pine-600" />
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 1.38, type: "spring", stiffness: 420, damping: 12 }}
              className="absolute -top-2 -right-2 w-5 h-5 bg-pine-600 rounded-full border-2 border-white flex items-center justify-center"
            >
              <CheckCircle2 className="w-3 h-3 text-white" />
            </motion.div>
          </div>
          <span className="text-[10px] font-semibold text-pine-600">Ready</span>
        </motion.div>
      </div>

      {/* Result card drops in */}
      <motion.div
        initial={rm ? { opacity: 0 } : { y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.5, type: "spring", stiffness: 200, damping: 20 }}
        className="bg-white border border-pine-100 rounded-xl p-3 shadow-sm flex items-center gap-3"
      >
        <div className="w-9 h-9 bg-pine-50 rounded-lg flex items-center justify-center shrink-0">
          <FileCheck2 className="w-5 h-5 text-pine-600" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-pine-900">CBC - All Normal</p>
          <p className="text-xs text-pine-400">Sent to patient + doctor</p>
        </div>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1.72, type: "spring", stiffness: 360 }}
          className="shrink-0"
        >
          <CheckCircle2 className="w-4 h-4 text-pine-600" />
        </motion.div>
      </motion.div>
    </div>
  );
}
