import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import {
  Smartphone, Stethoscope, Building2,
  ShieldCheck, Activity, Pill, HeartPulse, Users, FileText,
  CalendarClock, TestTube, CheckCircle2,
  ArrowUpRight, Wallet, FileCheck2
} from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { FadeIn } from "@/components/common/FadeIn";

type Role = 'patient' | 'doctor' | 'clinic';

/* ═══════════════════════════════════════════════
   VISUAL SUB-COMPONENTS
   Each one tells the story of its card.
═══════════════════════════════════════════════ */

/* 1 · Health Records — documents fly in from different directions, stack up */
function HealthRecordsVisual() {
  const rm = useReducedMotion();
  const records = [
    { icon: <FileText className="w-4 h-4" />, label: "CBC Report", sub: "2 days ago", cls: "text-pine-600", bg: "bg-pine-50 border-pine-100", from: { x: -36, y: -8 } },
    { icon: <Pill className="w-4 h-4" />, label: "Amlodipine 5mg", sub: "Active prescription", cls: "text-rose-500", bg: "bg-rose-50 border-rose-100", from: { x: 36, y: -4 } },
    { icon: <Activity className="w-4 h-4" />, label: "Consultation Note", sub: "Dr. Mehta — 1 week ago", cls: "text-indigo-500", bg: "bg-indigo-50 border-indigo-100", from: { x: -30, y: 4 } },
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

/* 2 · Consent Control — request → line draws → shield activates → approval pulse → check */
function ConsentVisual() {
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

/* 3 · Health Tracking — live BP, pulsing medication reminder, family member */
function HealthTrackingVisual() {
  const rm = useReducedMotion();
  return (
    <div className="w-full max-w-[240px] flex flex-col gap-2.5">
      {/* Blood pressure with heartbeat pulse */}
      <motion.div
        initial={rm ? { opacity: 0 } : { x: 20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.1, type: "spring", stiffness: 200 }}
        className="bg-white p-3 rounded-xl shadow-sm border border-stone-100 flex items-center gap-3"
      >
        <motion.div
          animate={rm ? {} : { scale: [1, 1.2, 1] }}
          transition={{ delay: 0.9, duration: 0.45, times: [0, 0.4, 1] }}
          className="w-9 h-9 rounded-full bg-rose-50 border border-rose-100 flex items-center justify-center text-rose-500 shrink-0"
        >
          <HeartPulse className="w-4 h-4" />
        </motion.div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between">
            <span className="text-xs text-pine-400 font-medium">Blood Pressure</span>
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.65, type: "spring" }}
              className="text-[10px] font-medium text-pine-600 bg-pine-50 border border-pine-100 px-1.5 py-0.5 rounded-full"
            >Normal</motion.span>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.85 }}
            className="text-sm font-semibold text-pine-900"
          >120 / 80 mmHg</motion.p>
        </div>
      </motion.div>

      {/* Medication reminder — sweep highlight + notification dot pulse */}
      <motion.div
        initial={rm ? { opacity: 0 } : { x: 20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
        className="relative bg-white p-3 rounded-xl shadow-sm border border-pine-100 flex items-center gap-3 overflow-hidden"
      >
        <motion.div
          initial={{ x: '-100%' }}
          animate={{ x: '260%' }}
          transition={{ delay: 1.1, duration: 0.5, ease: "easeOut" }}
          className="absolute inset-0 w-1/4 bg-gradient-to-r from-transparent via-pine-50 to-transparent pointer-events-none"
        />
        <div className="relative w-9 h-9 rounded-full bg-pine-50 border border-pine-100 flex items-center justify-center text-pine-600 shrink-0">
          <Pill className="w-4 h-4" />
          <motion.span
            animate={rm ? {} : { scale: [1, 2.2], opacity: [0.6, 0] }}
            transition={{ delay: 1.35, duration: 0.65, repeat: Infinity, repeatDelay: 2.8 }}
            className="absolute inset-0 rounded-full bg-rose-300/40"
          />
          <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-rose-400 border-2 border-white" />
        </div>
        <div className="flex-1 min-w-0 relative z-10">
          <p className="text-sm font-medium text-pine-900">Vitamin D — 60,000 IU</p>
          <p className="text-xs text-pine-400">Reminder: 8:00 AM</p>
        </div>
      </motion.div>

      {/* Family member */}
      <motion.div
        initial={rm ? { opacity: 0 } : { x: 20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
        className="bg-white p-3 rounded-xl shadow-sm border border-stone-100 flex items-center gap-3"
      >
        <div className="w-9 h-9 rounded-full bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-500 shrink-0">
          <Users className="w-4 h-4" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-pine-900">Mom's checkup</p>
          <p className="text-xs text-pine-400">Due in 3 days</p>
        </div>
        <motion.span
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.9, type: "spring", stiffness: 300 }}
          className="text-[10px] font-medium text-amber-600 bg-amber-50 border border-amber-100 px-2 py-0.5 rounded-full shrink-0"
        >Soon</motion.span>
      </motion.div>
    </div>
  );
}

/* 4 · Full History (Doctor) — timeline spine draws, nodes pop in sequentially */
function FullHistoryVisual() {
  const rm = useReducedMotion();
  const events = [
    { Icon: CalendarClock, label: "Hypertension", sub: "Diagnosed — Jan 2024", dot: "bg-pine-300" },
    { Icon: Activity,      label: "BP: 138/88",   sub: "Review — Mar 2024",   dot: "bg-rose-300" },
    { Icon: TestTube,      label: "CBC Normal",   sub: "Lab result — May 2024", dot: "bg-indigo-300" },
  ];
  return (
    <div className="w-full max-w-[280px] flex flex-col gap-3 relative">
      {/* Timeline spine — draws itself top to bottom */}
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

/* 5 · E-Prescriptions (Doctor) — typewriter generation, then send confirmation */
function EPrescriptionsVisual() {
  const rm = useReducedMotion();
  const items = [
    { drug: "Amlodipine 5mg", dose: "1 tab — morning" },
    { drug: "Metformin 500mg", dose: "2 tabs — after meals" },
    { drug: "Vitamin D3 60K", dose: "1 cap — weekly" },
  ];
  return (
    <div className="w-full max-w-[230px] bg-white rounded-2xl shadow-xl border border-pine-100 overflow-hidden">
      <div className="bg-pine-800 px-4 py-2.5 flex items-center justify-between">
        <span className="text-pine-100 text-xs font-medium uppercase tracking-wider">Prescription</span>
        <span className="text-pine-400 text-xs">Today</span>
      </div>
      <div className="p-4 flex flex-col gap-2.5">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="text-xs text-pine-400 font-medium"
        >Patient: Rahul V.</motion.p>

        {items.map(({ drug, dose }, i) => (
          <motion.div
            key={i}
            initial={rm ? { opacity: 0 } : { opacity: 0, x: 10, scaleX: 0.94 }}
            animate={{ opacity: 1, x: 0, scaleX: 1 }}
            transition={{ delay: i * 0.21 + 0.28, type: "spring", stiffness: 240, damping: 20 }}
            style={{ transformOrigin: 'left' }}
            className="relative bg-pine-50 border border-pine-100 rounded-lg px-3 py-2 overflow-hidden"
          >
            {/* Typewriter reveal overlay */}
            {!rm && (
              <motion.div
                initial={{ scaleX: 1 }}
                animate={{ scaleX: 0 }}
                transition={{ delay: i * 0.21 + 0.3, duration: 0.28, ease: "easeOut" }}
                style={{ transformOrigin: 'right' }}
                className="absolute inset-0 bg-pine-100"
              />
            )}
            <p className="text-sm font-medium text-pine-900 relative z-10">{drug}</p>
            <p className="text-xs text-pine-500 mt-0.5 relative z-10">{dose}</p>
          </motion.div>
        ))}

        {/* Send confirmation */}
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.02, type: "spring", stiffness: 200 }}
          className="flex items-center gap-2 justify-end pt-1.5 border-t border-stone-100"
        >
          <span className="text-xs text-pine-500 font-medium">Sent to patient</span>
          <motion.div
            initial={{ scale: 0, rotate: -25, opacity: 0 }}
            animate={{ scale: 1, rotate: 0, opacity: 1 }}
            transition={{ delay: 1.18, type: "spring", stiffness: 400, damping: 12 }}
          >
            <CheckCircle2 className="w-4 h-4 text-pine-600" />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

/* 6 · Audit Trail (Doctor) — entries drop in, timestamps light up, live indicator */
function AuditTrailVisual() {
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

/* 7 · Patient Registration (Clinic) — queue builds, status animates through states */
function PatientRegistrationVisual() {
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
      {/* Primary patient — status transitions */}
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

      {/* Queue — slides in, progressively dimmed */}
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

/* 8 · Billing & Revenue (Clinic) — counter counts up, bar chart draws */
function BillingRevenueVisual() {
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

      {/* Bar chart — bars draw upward */}
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

/* 9 · Lab & Diagnostics (Clinic) — animated flow: order → processing → result */
function LabDiagnosticsVisual() {
  const rm = useReducedMotion();
  return (
    <div className="w-full max-w-[270px] flex flex-col gap-4">
      {/* 3-step flow */}
      <div className="flex items-center gap-2">
        {/* Step 1 — Ordered */}
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

        {/* Step 2 — Processing */}
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

        {/* Step 3 — Ready */}
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
          <p className="text-sm font-medium text-pine-900">CBC — All Normal</p>
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

/* ═══════════════════════════════════════════════
   CARD DATA
═══════════════════════════════════════════════ */
const CARDS: Record<Role, { icon: React.ReactNode; heading: string; bullets: string[]; visual: React.ReactNode; navLabel: string }[]> = {
  patient: [
    {
      navLabel: "Health Records",
      icon: <Smartphone className="w-6 h-6" />,
      heading: "Your health records, all in one place",
      bullets: [
        "Every prescription, lab result, scan, and consultation in one view",
        "Updated automatically when you visit a doctor on FettleMed",
        "Yours to keep, yours to share, yours to revoke",
      ],
      visual: <HealthRecordsVisual />,
    },
    {
      navLabel: "Consent Control",
      icon: <ShieldCheck className="w-6 h-6" />,
      heading: "You decide who sees your records",
      bullets: [
        "Share your full health profile with any doctor in two taps",
        "Set access to expire after one consultation, or keep it open",
        "Get notified every time someone views your records",
      ],
      visual: <ConsentVisual />,
    },
    {
      navLabel: "Health Tracking",
      icon: <FileCheck2 className="w-6 h-6" />,
      heading: "Stay ahead of your health",
      bullets: [
        "Medication reminders and refill alerts",
        "Track your health across consultations and see the pattern, not just the visit",
        "Manage records for your children, parents, and dependents under one login",
      ],
      visual: <HealthTrackingVisual />,
    },
  ],
  doctor: [
    {
      navLabel: "Full History",
      icon: <Stethoscope className="w-6 h-6" />,
      heading: "Every patient's full history before they sit down",
      bullets: [
        "Diagnoses, prescriptions, and lab results — without asking",
        "Consented records from other doctors, instantly available",
        "No searching. No starting from scratch.",
      ],
      visual: <FullHistoryVisual />,
    },
    {
      navLabel: "E-Prescriptions",
      icon: <FileCheck2 className="w-6 h-6" />,
      heading: "Prescriptions in seconds. Notes that don't live in a register.",
      bullets: [
        "E-prescriptions generated and sent to the patient's phone instantly",
        "Consultation notes structured, dated, and searchable",
        "Referral letters drafted in moments",
      ],
      visual: <EPrescriptionsVisual />,
    },
    {
      navLabel: "Follow-up Audit",
      icon: <ShieldCheck className="w-6 h-6" />,
      heading: "Your clinical relationship doesn't end at the door.",
      bullets: [
        "Prescriptions sync to the patient's app the moment you generate them",
        "Patients upload follow-up results directly, no extra visit needed",
        "Every access logged. Full audit trail for you and the patient.",
      ],
      visual: <AuditTrailVisual />,
    },
  ],
  clinic: [
    {
      navLabel: "Patient Registration",
      icon: <Building2 className="w-6 h-6" />,
      heading: "No more starting from scratch with returning patients.",
      bullets: [
        "Every patient registered once, pulled up in seconds on return",
        "ABHA ID verification built into registration",
        "Walk-ins checked in without paper, without delay",
      ],
      visual: <PatientRegistrationVisual />,
    },
    {
      navLabel: "Billing & Revenue",
      icon: <Wallet className="w-6 h-6" />,
      heading: "Know what was billed, what was collected, and what's outstanding.",
      bullets: [
        "Invoice generation with GST-related fields at point of consultation",
        "UPI, cards, and net banking, all accepted",
        "Owner dashboard: daily and monthly revenue, broken down by doctor",
      ],
      visual: <BillingRevenueVisual />,
    },
    {
      navLabel: "Lab & Diagnostics",
      icon: <TestTube className="w-6 h-6" />,
      heading: "Test orders, results, and records — without the paper trail.",
      bullets: [
        "Lab results delivered electronically to patient and doctor",
        "Results linked directly to the consultation note",
        "Full diagnostic history attached to the patient record automatically",
      ],
      visual: <LabDiagnosticsVisual />,
    },
  ],
};

/* ═══════════════════════════════════════════════
   ROLE STYLE TOKENS
═══════════════════════════════════════════════ */
const ROLE_STYLES: Record<Role, {
  tab: string;
  cardBg: string; cardBorder: string; hoverShadow: string;
  iconBg: string; iconColor: string;
  heading: string; bullets: string; bulletDot: string;
  visualBg: string; visualBorder: string;
  navActive: string; navInactive: string;
  ctaTo: string; ctaLabel: string; ctaClass: string;
}> = {
  patient: {
    tab: 'bg-pine-900 text-white shadow-md',
    cardBg: 'bg-white', cardBorder: 'border-stone-200', hoverShadow: '0 16px 40px rgba(0,0,0,0.09)',
    iconBg: 'bg-pine-50', iconColor: 'text-pine-700',
    heading: 'text-pine-900', bullets: 'text-dim-2', bulletDot: 'bg-pine-600',
    visualBg: 'bg-surface-50', visualBorder: 'border-pine-100',
    navActive: 'bg-pine-900 text-white',
    navInactive: 'bg-pine-100 text-pine-700 hover:bg-pine-200',
    ctaTo: '/patient-app', ctaLabel: 'See the full Patient experience', ctaClass: 'bg-pine-900 hover:bg-pine-800',
  },
  doctor: {
    tab: 'bg-pine-900 text-white shadow-md',
    cardBg: 'bg-pine-900', cardBorder: 'border-pine-700', hoverShadow: '0 16px 40px rgba(0,0,0,0.28)',
    iconBg: 'bg-pine-800', iconColor: 'text-pine-200',
    heading: 'text-white', bullets: 'text-pine-200', bulletDot: 'bg-pine-400',
    visualBg: 'bg-pine-800/50', visualBorder: 'border-pine-700',
    navActive: 'bg-pine-300 text-pine-900',
    navInactive: 'bg-pine-800 text-pine-300 hover:bg-pine-700',
    ctaTo: '/doctor-portal', ctaLabel: 'See the full Doctor experience', ctaClass: 'bg-pine-700 hover:bg-pine-600',
  },
  clinic: {
    tab: 'bg-pine-900 text-white shadow-md',
    cardBg: 'bg-white', cardBorder: 'border-stone-200', hoverShadow: '0 16px 40px rgba(0,0,0,0.09)',
    iconBg: 'bg-pine-50', iconColor: 'text-pine-700',
    heading: 'text-pine-900', bullets: 'text-dim-2', bulletDot: 'bg-pine-600',
    visualBg: 'bg-surface-50', visualBorder: 'border-pine-100',
    navActive: 'bg-pine-900 text-white',
    navInactive: 'bg-pine-100 text-pine-700 hover:bg-pine-200',
    ctaTo: '/clinic-management', ctaLabel: 'See the full Clinic experience', ctaClass: 'bg-pine-900 hover:bg-pine-800',
  },
};

/* ═══════════════════════════════════════════════
   MAIN COMPONENT
═══════════════════════════════════════════════ */
export const TargetedRoles = ({ initialRole = 'patient' }: { initialRole?: Role }) => {
  const [activeRole, setActiveRole] = useState<Role>(initialRole);
  const [activeCardIndex, setActiveCardIndex] = useState(0);

  const handleRoleChange = (role: Role) => {
    setActiveRole(role);
    setActiveCardIndex(0);
  };

  const s = ROLE_STYLES[activeRole];
  const cards = CARDS[activeRole];

  return (
    <section id="roles" className="h-[calc(100vh-80px)] min-h-[600px] flex flex-col bg-surface-50 overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl flex flex-col flex-1 min-h-0 py-8 md:py-10">
        <FadeIn>
          <div className="text-center mb-5">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-pine-900 mb-2 text-balance">
              See what FettleMed changes for you.
            </h2>
            <p className="text-sm font-medium text-dim mb-4">Select your role.</p>

            {/* Tab selector */}
            <div role="tablist" className="inline-flex flex-row bg-white rounded-full p-1.5 border border-stone-200 shadow-sm gap-1">
              {([
                { role: 'patient', Icon: Smartphone,  label: 'Patients' },
                { role: 'doctor',  Icon: Stethoscope, label: 'Doctors'  },
                { role: 'clinic',  Icon: Building2,   label: 'Clinics'  },
              ] as { role: Role; Icon: React.ElementType; label: string }[]).map(({ role, Icon, label }) => (
                <button
                  key={role}
                  role="tab"
                  aria-selected={activeRole === role}
                  onClick={() => handleRoleChange(role)}
                  className={`flex items-center justify-center gap-2 px-5 py-3 rounded-full text-sm font-medium transition-[background-color,color,box-shadow] duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pine-900 focus-visible:ring-offset-1 ${
                    activeRole === role ? ROLE_STYLES[role].tab : 'text-dim hover:text-pine-900 hover:bg-pine-50'
                  }`}
                >
                  <Icon className="w-4 h-4" /> {label}
                </button>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Card panel */}
        <div
          key={activeRole}
          className="flex-1 min-h-0 flex flex-col animate-in fade-in slide-in-from-bottom-4 duration-200"
        >
          <div className="w-full flex-1 min-h-0 relative" aria-live="polite" aria-atomic="true">
            {cards.map((card, idx) => (
              <motion.div
                key={idx}
                whileHover={activeCardIndex === idx ? { boxShadow: s.hoverShadow } : {}}
                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                className={`absolute inset-0 ${s.cardBg} border ${s.cardBorder} p-6 rounded-3xl flex flex-col md:flex-row gap-6 transition-[transform,opacity] duration-200 ease-out shadow-sm ${
                  activeCardIndex === idx ? 'opacity-100 z-10 translate-y-0' : 'opacity-0 z-0 translate-y-4 pointer-events-none'
                }`}
              >
                {/* Left: text */}
                <div className="flex-1 w-full flex flex-col justify-center">
                  <motion.div
                    whileHover={{ y: -2, scale: 1.05 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 22 }}
                    className={`w-10 h-10 ${s.iconBg} ${s.iconColor} rounded-xl flex items-center justify-center mb-4`}
                  >
                    {card.icon}
                  </motion.div>
                  <h3 className={`text-xl font-medium ${s.heading} mb-4 tracking-tight`}>{card.heading}</h3>
                  <ul className="space-y-3">
                    {card.bullets.map((b, bi) => (
                      <li key={bi} className={`flex items-start gap-2.5 ${s.bullets} font-medium text-base`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${s.bulletDot} mt-2 shrink-0`} />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Right: visual */}
                <div className={`flex-1 w-full flex items-center justify-center ${s.visualBg} rounded-2xl border ${s.visualBorder} overflow-hidden min-h-[180px]`}>
                  {activeCardIndex === idx && card.visual}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Nav chips */}
          <div className="flex gap-2 mt-4 justify-center flex-wrap">
            {cards.map((card, idx) => (
              <button
                key={idx}
                onClick={() => setActiveCardIndex(idx)}
                aria-pressed={activeCardIndex === idx}
                className={`px-4 py-3 min-h-[44px] rounded-full text-sm font-medium transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pine-900 ${
                  activeCardIndex === idx ? s.navActive : s.navInactive
                }`}
              >
                {card.navLabel}
              </button>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-3 text-center flex justify-center">
            <Link
              to={s.ctaTo}
              className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl ${s.ctaClass} text-white font-medium text-base transition-colors shadow-sm`}
            >
              {s.ctaLabel} <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
