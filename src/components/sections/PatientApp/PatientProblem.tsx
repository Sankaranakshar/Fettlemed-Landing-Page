import React from 'react';
import { Pill, FlaskConical, CalendarDays, ChevronRight, Home, FolderOpen, Share2 } from "lucide-react";
import { ChaosClarity, ChaosItem } from "@/components/common/ChaosClarity";

/* ── The chaos: how a patient's history actually lives today ────── */

function WhatsAppForward() {
  return (
    <div className="w-44 bg-emerald-50 rounded-xl rounded-tl-sm shadow-lg p-3 blur-[0.7px]">
      <p className="text-[9px] font-medium text-emerald-600/80 italic mb-1.5">↪ Forwarded</p>
      <div className="bg-emerald-100/80 rounded-lg p-2 flex items-center gap-2">
        <div className="w-8 h-10 bg-white/70 rounded flex items-center justify-center text-[8px] font-semibold text-stone-400">IMG</div>
        <div>
          <p className="text-[10px] font-semibold text-stone-600 leading-tight">prescription.jpg</p>
          <p className="text-[9px] font-medium text-stone-400">2.1 MB · photo</p>
        </div>
      </div>
      <p className="text-[9px] font-medium text-stone-400 text-right mt-1.5">11:42 PM ✓✓</p>
    </div>
  );
}

function CrumpledLabReport() {
  return (
    <div className="w-40 bg-white rounded-lg shadow-lg p-3 [clip-path:polygon(0_2%,7%_0,100%_1%,99%_96%,93%_100%,2%_99%)]">
      <p className="text-[9px] font-bold text-stone-500 tracking-widest mb-2">LAB REPORT</p>
      <div className="space-y-1.5">
        <div className="h-1.5 bg-stone-200 rounded w-full" />
        <div className="h-1.5 bg-stone-200 rounded w-4/5" />
        <div className="h-1.5 bg-stone-300 rounded w-full" />
        <div className="h-1.5 bg-stone-200 rounded w-3/5" />
      </div>
      <p className="text-[8px] font-medium text-stone-400 mt-2">Page 1 of 3 · folded</p>
    </div>
  );
}

function FadedPharmacyBill() {
  return (
    <div className="w-36 bg-amber-50/90 rounded-md shadow-lg p-3 opacity-75 border-b-2 border-dashed border-amber-200">
      <p className="text-[9px] font-bold text-stone-400/90 tracking-widest text-center mb-2">PHARMACY</p>
      <div className="space-y-1 text-[8px] font-medium text-stone-400/80">
        <div className="flex justify-between"><span>Tab ······· x10</span><span>₹42</span></div>
        <div className="flex justify-between"><span>Syp ······· 100ml</span><span>₹1··</span></div>
        <div className="flex justify-between text-stone-300"><span>······</span><span>···</span></div>
      </div>
      <p className="text-[8px] font-medium text-stone-300 text-center mt-2">ink fading · 2022</p>
    </div>
  );
}

function StickyNote() {
  return (
    <div className="w-28 h-28 bg-yellow-100 shadow-lg p-2.5 rotate-1 flex flex-col">
      <p className="text-[10px] font-medium text-stone-600 italic leading-snug">BP tablet name??</p>
      <p className="text-[10px] font-medium text-stone-500 italic leading-snug mt-1">ask Amma</p>
      <p className="text-[9px] font-medium text-stone-400 italic mt-auto">before Tues appt</p>
    </div>
  );
}

function OldPrescription() {
  return (
    <div className="w-36 bg-white rounded-lg shadow-lg p-3">
      <p className="text-base font-serif italic font-bold text-stone-500 mb-1.5">Rx</p>
      <div className="space-y-1.5">
        <div className="h-1 bg-stone-300 rounded w-4/5" />
        <div className="h-1 bg-stone-200 rounded w-full" />
        <div className="h-1 bg-stone-300 rounded w-3/5" />
      </div>
      <p className="text-[8px] font-medium text-stone-400 mt-2 italic">illegible · which doctor?</p>
    </div>
  );
}

const ITEMS: ChaosItem[] = [
  { id: "whatsapp", node: <WhatsAppForward />,    sx: -100, sy: -195, sr: -9 },
  { id: "lab",      node: <CrumpledLabReport />,  sx:  100, sy: -140, sr:  8 },
  { id: "bill",     node: <FadedPharmacyBill />,  sx: -110, sy:  -20, sr:  7 },
  { id: "sticky",   node: <StickyNote />,         sx:  115, sy:   55, sr: -8 },
  { id: "rx",       node: <OldPrescription />,    sx:  -75, sy:  185, sr: 10 },
];

/* ── The clarity: the Patient App, organised ─────────────────────── */

const APP_ROWS = [
  { Icon: Pill,         label: "Medications", sub: "Metformin 500mg · ongoing" },
  { Icon: FlaskConical, label: "Lab Results", sub: "HbA1c 6.1% · trending down" },
  { Icon: CalendarDays, label: "Past Visits", sub: "Dr. Rao · 12 May" },
];

function PatientAppUI() {
  return (
    <div className="w-56 bg-stone-900 rounded-[2.2rem] p-1.5 shadow-[0_0_60px_8px_rgba(76,175,143,0.35)]">
      <div className="bg-white rounded-[1.8rem] overflow-hidden">
        {/* status bar */}
        <div className="flex items-center justify-between px-5 pt-2.5 pb-1">
          <span className="text-[9px] font-semibold text-stone-700">9:41</span>
          <span className="w-14 h-4 bg-stone-900 rounded-full" aria-hidden="true" />
          <span className="text-[9px] font-semibold text-stone-700">100%</span>
        </div>
        {/* app header */}
        <div className="px-4 pt-2 pb-2.5">
          <p className="text-pine-900 text-sm font-semibold tracking-tight">My Health</p>
          <p className="text-dim text-[10px] font-medium">Everything, in one place</p>
        </div>
        {/* rows */}
        <div className="divide-y divide-stone-100 border-t border-stone-100">
          {APP_ROWS.map(({ Icon, label, sub }) => (
            <div key={label} className="flex items-center gap-3 px-4 py-2.5">
              <span className="w-8 h-8 rounded-lg bg-pine-50 border border-pine-100 flex items-center justify-center shrink-0">
                <Icon className="w-4 h-4 text-pine-600" />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-[11px] font-semibold text-pine-900 leading-tight">{label}</span>
                <span className="block text-[10px] font-medium text-dim leading-tight truncate">{sub}</span>
              </span>
              <ChevronRight className="w-3.5 h-3.5 text-stone-300 shrink-0" />
            </div>
          ))}
        </div>
        {/* tab bar */}
        <div className="flex items-center justify-around border-t border-stone-100 px-4 py-2">
          <Home className="w-4 h-4 text-pine-600" />
          <FolderOpen className="w-4 h-4 text-stone-300" />
          <Share2 className="w-4 h-4 text-stone-300" />
        </div>
        {/* home indicator */}
        <div className="w-16 h-1 bg-stone-300 rounded-full mx-auto mb-1.5" aria-hidden="true" />
      </div>
    </div>
  );
}

export function PatientProblem() {
  return (
    <ChaosClarity
      eyebrow="You already know this problem"
      problem="You can't remember everything."
      problemSub="Reports in folders, WhatsApp forwards, and memory. Something always goes missing."
      payoff="Now it never goes missing."
      payoffSub="Medications, lab results, and past visits, organised and readable."
      items={ITEMS}
      clarity={<PatientAppUI />}
    />
  );
}
