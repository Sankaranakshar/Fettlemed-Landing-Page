import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from "react-router-dom";
import {
  Smartphone, Stethoscope, Building2,
  ShieldCheck, Activity, Pill, HeartPulse, Users, FileText,
  CalendarClock, TestTube, FileSignature, CheckCircle2,
  ArrowUpRight, Lock, Wallet, FileCheck2, Folders
} from "lucide-react";
import { motion } from "motion/react";
import { FadeIn } from "@/components/common/FadeIn";

/* ─── shared types ─── */
type Role = 'patient' | 'doctor' | 'clinic';

/* ─── card data ─── */
const CARDS: Record<Role, { icon: React.ReactNode; heading: string; bullets: string[]; visual: React.ReactNode }[]> = {
  patient: [
    {
      icon: <Smartphone className="w-6 h-6" />,
      heading: "Your health records, all in one place",
      bullets: [
        "Every prescription, lab result, scan, and consultation in one view",
        "Updated automatically when you visit a doctor on FettleMed",
        "Yours to keep, yours to share, yours to revoke",
      ],
      visual: (
        <div className="relative w-48 h-48 border-2 border-dashed border-pine-200 rounded-full flex items-center justify-center">
          <motion.div animate={{ scale: [1, 1.05, 1] }} transition={{ repeat: Infinity, duration: 3 }} className="z-10 bg-white p-4 rounded-2xl shadow-lg border border-pine-100">
            <Smartphone className="w-8 h-8 text-pine-600" />
          </motion.div>
          <motion.div initial={{ x: -100, y: -60, opacity: 0 }} animate={{ x: -20, y: -20, opacity: 1 }} transition={{ delay: 0.2, duration: 0.8 }} className="absolute bg-white p-2.5 rounded-xl shadow-md border border-pine-100"><FileText className="w-5 h-5 text-pine-600" /></motion.div>
          <motion.div initial={{ x: 100, y: -40, opacity: 0 }} animate={{ x: 25, y: -15, opacity: 1 }} transition={{ delay: 0.4, duration: 0.8 }} className="absolute bg-white p-2.5 rounded-xl shadow-md border border-pine-100"><Activity className="w-5 h-5 text-pine-500" /></motion.div>
          <motion.div initial={{ x: -50, y: 100, opacity: 0 }} animate={{ x: -10, y: 30, opacity: 1 }} transition={{ delay: 0.6, duration: 0.8 }} className="absolute bg-white p-2.5 rounded-xl shadow-md border border-pine-100"><Pill className="w-5 h-5 text-pine-400" /></motion.div>
        </div>
      ),
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      heading: "You decide who sees your records",
      bullets: [
        "Share your full health profile with any doctor in two taps",
        "Set access to expire after one consultation, or keep it open",
        "Get notified every time someone views your records",
      ],
      visual: (
        <div className="relative flex flex-col items-center">
          <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }} className="bg-white px-6 py-4 rounded-2xl shadow-lg border border-pine-100 flex items-center gap-4 z-10">
            <ShieldCheck className="w-8 h-8 text-pine-500" />
            <div className="flex flex-col gap-1">
              <span className="text-xs font-medium text-pine-400 uppercase tracking-wider">Access Request</span>
              <span className="text-sm font-medium text-pine-900">Dr. Sarah requires access</span>
            </div>
            <motion.div initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.8, type: "spring" }} className="w-8 h-8 rounded-full bg-pine-100 flex items-center justify-center text-pine-600 border border-pine-200">
              <CheckCircle2 className="w-5 h-5" />
            </motion.div>
          </motion.div>
        </div>
      ),
    },
    {
      icon: <FileCheck2 className="w-6 h-6" />,
      heading: "Stay ahead of your health",
      bullets: [
        "Medication reminders and refill alerts",
        "Track your health across consultations and see the pattern, not just the visit",
        "Manage records for your children, parents, and dependents under one login",
      ],
      visual: (
        <div className="w-full max-w-[240px] flex flex-col gap-3">
          <motion.div initial={{ x: 50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.1, type: "spring", stiffness: 200 }} className="bg-white p-3 rounded-xl shadow-sm border border-stone-100 flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-rose-100 flex items-center justify-center text-rose-500"><HeartPulse className="w-4 h-4" /></div>
            <span className="text-sm font-medium text-pine-900">BP Normal</span>
          </motion.div>
          <motion.div initial={{ x: 50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.3, type: "spring", stiffness: 200 }} className="bg-white p-3 rounded-xl shadow-sm border border-pine-100 flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-pine-50 flex items-center justify-center text-pine-600"><Pill className="w-4 h-4" /></div>
            <div className="flex flex-col"><span className="text-sm font-medium text-pine-900">Vitamin D</span><span className="text-xs text-pine-400">8:00 AM</span></div>
          </motion.div>
          <motion.div initial={{ x: 50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.5, type: "spring", stiffness: 200 }} className="bg-white p-3 rounded-xl shadow-sm border border-pine-100 flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-pine-50 flex items-center justify-center text-pine-600"><Users className="w-4 h-4" /></div>
            <span className="text-sm font-medium text-pine-900">Mom's Checkup</span>
          </motion.div>
        </div>
      ),
    },
  ],
  doctor: [
    {
      icon: <Stethoscope className="w-6 h-6" />,
      heading: "Every patient's full history before they sit down",
      bullets: [
        "Diagnoses, prescriptions, and lab results — without asking",
        "Consented records from other doctors, instantly available",
        "No searching. No starting from scratch.",
      ],
      visual: (
        <div className="w-full max-w-[280px] flex flex-col gap-4 relative">
          <div className="absolute left-[19px] top-4 bottom-4 w-[2px] bg-pine-600/40"></div>
          {[{ Icon: CalendarClock, color: 'bg-pine-600' }, { Icon: Activity, color: 'bg-rose-500/60' }, { Icon: TestTube, color: 'bg-indigo-500/60' }].map(({ Icon, color }, i) => (
            <motion.div key={i} initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: i * 0.2 + 0.1 }} className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-pine-700 border-2 border-pine-800 flex items-center justify-center text-white z-10 shrink-0"><Icon className="w-5 h-5" /></div>
              <div className="bg-pine-700/60 p-3 rounded-xl border border-pine-600 w-full">
                <div className={`h-2 w-1/3 ${color} rounded-full mb-2`}></div>
                <div className="h-1.5 w-2/3 bg-pine-600/40 rounded-full"></div>
              </div>
            </motion.div>
          ))}
        </div>
      ),
    },
    {
      icon: <FileCheck2 className="w-6 h-6" />,
      heading: "Prescriptions in seconds. Notes that don't live in a register.",
      bullets: [
        "E-prescriptions generated and sent to the patient's phone instantly",
        "Consultation notes structured, dated, and searchable",
        "Referral letters drafted in moments",
      ],
      visual: (
        <div className="w-full max-w-[200px] bg-white rounded-lg shadow-xl overflow-hidden transform rotate-2">
          <div className="bg-pine-100 p-2 text-center text-xs font-medium text-pine-800 border-b border-pine-200">Rx Prescription</div>
          <div className="p-4 flex flex-col gap-3">
            <motion.div initial={{ width: 0 }} animate={{ width: '100%' }} transition={{ delay: 0.2 }} className="h-1.5 bg-pine-100 rounded"></motion.div>
            <div className="flex gap-2">
              <motion.div initial={{ width: 0 }} animate={{ width: '20%' }} transition={{ delay: 0.3 }} className="h-1.5 bg-pine-600 rounded"></motion.div>
              <motion.div initial={{ width: 0 }} animate={{ width: '60%' }} transition={{ delay: 0.4 }} className="h-1.5 bg-pine-100 rounded"></motion.div>
            </div>
            <div className="flex gap-2">
              <motion.div initial={{ width: 0 }} animate={{ width: '20%' }} transition={{ delay: 0.5 }} className="h-1.5 bg-pine-600 rounded"></motion.div>
              <motion.div initial={{ width: 0 }} animate={{ width: '50%' }} transition={{ delay: 0.6 }} className="h-1.5 bg-pine-100 rounded"></motion.div>
            </div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }} className="mt-2 self-end">
              <FileSignature className="w-6 h-6 text-pine-600" />
            </motion.div>
          </div>
        </div>
      ),
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      heading: "Your clinical relationship doesn't end at the door.",
      bullets: [
        "Prescriptions sync to the patient's app the moment you generate them",
        "Patients upload follow-up results directly, no extra visit needed",
        "Every access logged. Full audit trail for you and the patient.",
      ],
      visual: (
        <div className="relative flex items-center justify-center w-32 h-32">
          <motion.div className="bg-pine-700 p-4 rounded-2xl border border-pine-600 shadow-xl flex items-center justify-center w-full h-full" initial={{ scale: 0.8 }} animate={{ scale: 1 }} transition={{ type: "spring", bounce: 0.5 }}>
            <Lock className="w-10 h-10 text-pine-200" />
          </motion.div>
          <motion.div initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 1.2 }} className="absolute -right-4 -bottom-4 bg-pine-600 text-white text-[10px] font-medium px-2 py-1 rounded-full shadow-lg flex items-center gap-1">
            <CheckCircle2 className="w-3 h-3" /> Approved
          </motion.div>
          <motion.div animate={{ rotate: [0, 8, -8, 0] }} transition={{ repeat: Infinity, duration: 4 }}>
            <Folders className="w-12 h-12 text-pine-400/40 absolute -left-8 -top-8" />
          </motion.div>
        </div>
      ),
    },
  ],
  clinic: [
    {
      icon: <Building2 className="w-6 h-6" />,
      heading: "No more starting from scratch with returning patients.",
      bullets: [
        "Every patient registered once, pulled up in seconds on return",
        "ABHA ID verification built into registration",
        "Walk-ins checked in without paper, without delay",
      ],
      visual: (
        <div className="flex flex-col gap-3 w-full px-4">
          {[
            { n: '1', name: 'John Doe', status: 'Consulting', statusClass: 'text-pine-600 bg-pine-50', delay: 0.1, opacity: 1 },
            { n: '2', name: 'Jane Smith', status: 'Waiting', statusClass: 'text-pine-500 bg-pine-50', delay: 0.3, opacity: 0.8 },
            { n: '3', name: 'Robert M.', status: 'Waiting', statusClass: 'text-pine-500 bg-pine-50', delay: 0.5, opacity: 0.6 },
          ].map(({ n, name, status, statusClass, delay, opacity }) => (
            <motion.div key={n} initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity }} transition={{ delay }} className="bg-white p-3 rounded-xl shadow-sm border border-pine-100 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-pine-100 text-pine-600 rounded-full flex items-center justify-center text-xs font-medium">{n}</div>
                <span className="text-sm font-medium text-pine-900">{name}</span>
              </div>
              <span className={`text-xs font-medium px-2 py-1 rounded-full ${statusClass}`}>{status}</span>
            </motion.div>
          ))}
        </div>
      ),
    },
    {
      icon: <Wallet className="w-6 h-6" />,
      heading: "Know what was billed, what was collected, and what's outstanding.",
      bullets: [
        "GST-compliant invoices generated at point of consultation",
        "UPI, cards, and net banking, all accepted",
        "Owner dashboard: daily and monthly revenue, broken down by doctor",
      ],
      visual: (
        <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.1 }} className="bg-white p-5 rounded-2xl shadow-lg border border-pine-100 w-48">
          <div className="flex justify-between items-center mb-4">
            <Wallet className="w-6 h-6 text-pine-600" />
            <span className="text-lg font-medium text-pine-900">₹1,200</span>
          </div>
          <div className="space-y-2">
            <div className="h-1.5 w-full bg-pine-100 rounded"></div>
            <div className="h-1.5 w-2/3 bg-pine-200 rounded"></div>
          </div>
        </motion.div>
      ),
    },
    {
      icon: <TestTube className="w-6 h-6" />,
      heading: "Test orders, results, and records — without the paper trail.",
      bullets: [
        "Digital lab catalogue, order tests directly from the platform",
        "Results delivered electronically to patient and doctor",
        "Full diagnostic history attached to the patient record automatically",
      ],
      visual: (
        <div className="flex items-center gap-4">
          <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.1 }} className="w-16 h-16 bg-white rounded-2xl shadow-sm border border-stone-200 flex items-center justify-center">
            <TestTube className="w-8 h-8 text-indigo-500" />
          </motion.div>
          <motion.div className="flex gap-1" initial="hidden" animate="visible" variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.2 } } }}>
            {[0, 1, 2].map((i) => (
              <motion.div key={i} variants={{ hidden: { opacity: 0, x: -10 }, visible: { opacity: 1, x: 0 } }} className="w-2 h-2 rounded-full bg-pine-300" />
            ))}
          </motion.div>
          <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.8 }} className="relative">
            <div className="w-16 h-16 bg-white rounded-2xl shadow-md border border-pine-200 flex items-center justify-center">
              <FileCheck2 className="w-8 h-8 text-pine-600" />
            </div>
            <motion.div initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 1.2, type: "spring" }} className="absolute -top-2 -right-2 w-6 h-6 bg-pine-600 rounded-full border-2 border-white flex items-center justify-center text-white">
              <CheckCircle2 className="w-4 h-4" />
            </motion.div>
          </motion.div>
        </div>
      ),
    },
  ],
};

/* ─── per-role style tokens ─── */
const ROLE_STYLES: Record<Role, {
  tab: string;
  cardBg: string; cardBorder: string;
  iconBg: string; iconColor: string;
  heading: string; bullets: string; bulletDot: string;
  visualBg: string; visualBorder: string;
  dotActive: string; dotInactive: string;
  ctaTo: string; ctaLabel: string; ctaClass: string;
}> = {
  patient: {
    tab: 'bg-pine-900 text-white shadow-md',
    cardBg: 'bg-white', cardBorder: 'border-stone-200 shadow-sm hover:shadow-md',
    iconBg: 'bg-pine-50', iconColor: 'text-pine-700',
    heading: 'text-pine-900', bullets: 'text-dim-2', bulletDot: 'bg-pine-600',
    visualBg: 'bg-surface-50', visualBorder: 'border-pine-100',
    dotActive: 'bg-pine-900', dotInactive: 'bg-pine-200 group-hover:bg-pine-300',
    ctaTo: '/patient-app', ctaLabel: 'See the full Patient experience', ctaClass: 'bg-pine-900 hover:bg-pine-800',
  },
  doctor: {
    tab: 'bg-pine-900 text-white shadow-md',
    cardBg: 'bg-pine-900', cardBorder: 'border-pine-700',
    iconBg: 'bg-pine-800', iconColor: 'text-pine-200',
    heading: 'text-white', bullets: 'text-pine-200', bulletDot: 'bg-pine-400',
    visualBg: 'bg-pine-800/50', visualBorder: 'border-pine-700',
    dotActive: 'bg-pine-300', dotInactive: 'bg-pine-700 group-hover:bg-pine-600',
    ctaTo: '/doctor-portal', ctaLabel: 'See the full Doctor experience', ctaClass: 'bg-pine-700 hover:bg-pine-600',
  },
  clinic: {
    tab: 'bg-pine-900 text-white shadow-md',
    cardBg: 'bg-white', cardBorder: 'border-stone-200 shadow-sm hover:shadow-md',
    iconBg: 'bg-pine-50', iconColor: 'text-pine-700',
    heading: 'text-pine-900', bullets: 'text-dim-2', bulletDot: 'bg-pine-600',
    visualBg: 'bg-surface-50', visualBorder: 'border-pine-100',
    dotActive: 'bg-pine-900', dotInactive: 'bg-pine-200 group-hover:bg-pine-300',
    ctaTo: '/clinic-management', ctaLabel: 'See the full Clinic experience', ctaClass: 'bg-pine-900 hover:bg-pine-800',
  },
};

/* ─── component ─── */
export const TargetedRoles = ({ initialRole = 'patient' }: { initialRole?: Role }) => {
  const [activeRole, setActiveRole] = useState<Role>(initialRole);
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const advance = useCallback(() => {
    setActiveCardIndex((prev) => (prev + 1) % 3);
  }, []);

  useEffect(() => { setActiveCardIndex(0); }, [activeRole]);

  useEffect(() => {
    if (isPaused) return;
    intervalRef.current = setInterval(advance, 5000);
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [activeRole, isPaused, advance]);

  const s = ROLE_STYLES[activeRole];
  const cards = CARDS[activeRole];

  return (
    <section id="roles" className="h-[calc(100vh-80px)] min-h-[600px] flex flex-col justify-center bg-surface-50 overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl">
        <FadeIn>
          <div className="text-center mb-6">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight text-pine-900 mb-2 text-balance">
              See what FettleMed changes for you.
            </h2>
            <p className="text-sm font-medium text-dim mb-4">Select your role.</p>

            {/* Tab selector */}
            <div role="tablist" className="inline-flex flex-row bg-white rounded-full p-1.5 border border-stone-200 shadow-sm gap-1">
              {([
                { role: 'patient', Icon: Smartphone, label: 'Patients' },
                { role: 'doctor', Icon: Stethoscope, label: 'Doctors' },
                { role: 'clinic', Icon: Building2, label: 'Clinics' },
              ] as { role: Role; Icon: React.ElementType; label: string }[]).map(({ role, Icon, label }) => (
                <button
                  key={role}
                  role="tab"
                  aria-selected={activeRole === role}
                  onClick={() => setActiveRole(role)}
                  className={`flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-[background-color,color,box-shadow] duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pine-900 focus-visible:ring-offset-1 ${
                    activeRole === role ? ROLE_STYLES[role].tab : 'text-dim hover:text-pine-900 hover:bg-pine-50'
                  }`}
                >
                  <Icon className="w-4 h-4" /> {label}
                </button>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Card panel — same structure for all roles */}
        <div
          key={activeRole}
          className="flex flex-col items-center animate-in fade-in slide-in-from-bottom-4 duration-200"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="w-full grid grid-cols-1 min-h-[260px]" aria-live="polite" aria-atomic="true">
            {cards.map((card, idx) => (
              <div
                key={idx}
                className={`col-start-1 row-start-1 ${s.cardBg} border ${s.cardBorder} p-6 rounded-3xl transition-[transform,opacity] duration-200 ease-out flex flex-col md:flex-row gap-6 items-center ${
                  activeCardIndex === idx ? 'opacity-100 z-10 translate-y-0' : 'opacity-0 z-0 translate-y-4 pointer-events-none'
                }`}
              >
                {/* Left: text */}
                <div className="flex-1 w-full">
                  <div className={`w-10 h-10 ${s.iconBg} ${s.iconColor} rounded-xl flex items-center justify-center mb-4`}>
                    {card.icon}
                  </div>
                  <h3 className={`text-lg font-medium ${s.heading} mb-3 tracking-tight`}>{card.heading}</h3>
                  <ul className="space-y-3">
                    {card.bullets.map((b, bi) => (
                      <li key={bi} className={`flex items-start gap-2 ${s.bullets} font-medium text-sm`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${s.bulletDot} mt-1.5 shrink-0`} />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Right: visual */}
                <div className={`flex-1 w-full h-[180px] flex items-center justify-center ${s.visualBg} rounded-2xl border ${s.visualBorder} overflow-hidden`}>
                  {activeCardIndex === idx && card.visual}
                </div>
              </div>
            ))}
          </div>

          {/* Dot indicators */}
          <div className="flex gap-3 mt-4">
            {[0, 1, 2].map((idx) => (
              <button
                key={idx}
                onClick={() => setActiveCardIndex(idx)}
                className="flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pine-900 rounded-full"
                aria-label={`Show slide ${idx + 1}`}
              >
                <div className={`transition-[width,background-color] duration-150 ease-out h-2 rounded-full ${
                  activeCardIndex === idx ? `${s.dotActive} w-6` : `${s.dotInactive} w-2`
                }`} />
              </button>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-4 text-center flex justify-center">
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
