import React from 'react';
import { LayoutDashboard, Users, FileText, Settings } from "lucide-react";
import { ChaosClarity, ChaosItem } from "@/components/common/ChaosClarity";

/* ── The chaos: the physical weight of a paper practice ──────────── */

function ManilaFolder({ label, fat = false }: { label: string; fat?: boolean }) {
  return (
    <div className="relative">
      {/* folder tab */}
      <div className="absolute -top-2.5 left-3 w-16 h-3 bg-amber-200 rounded-t-md border border-b-0 border-amber-300" />
      <div className={`w-44 ${fat ? "h-24" : "h-20"} bg-amber-100 rounded-md border border-amber-300 shadow-xl p-2.5 relative overflow-hidden`}>
        {/* papers spilling out */}
        <div className="absolute -top-1 right-2 w-32 h-4 bg-white rounded-sm rotate-2 shadow-sm" />
        <div className="absolute -top-0.5 right-5 w-28 h-4 bg-stone-50 rounded-sm -rotate-1 shadow-sm" />
        <p className="text-[10px] font-bold text-amber-800/80 tracking-wide mt-4">{label}</p>
        <p className="text-[8px] font-medium text-amber-700/60 mt-0.5">{fat ? "127 sheets · unsorted" : "registers · loose sheets"}</p>
      </div>
    </div>
  );
}

function LoosePrescription() {
  return (
    <div className="w-32 bg-white rounded-sm shadow-lg p-2.5 border border-stone-100">
      <p className="text-sm font-serif italic font-bold text-stone-500 mb-1">Rx</p>
      <div className="space-y-1">
        <div className="h-1 bg-stone-300 rounded w-5/6" />
        <div className="h-1 bg-stone-200 rounded w-full" />
        <div className="h-1 bg-stone-300 rounded w-2/3" />
      </div>
      <p className="text-[8px] font-medium text-stone-400 mt-1.5 italic">another clinic's pad</p>
    </div>
  );
}

function PrintedLabResult() {
  return (
    <div className="w-40 bg-white rounded-sm shadow-lg p-2.5 border border-stone-100">
      <p className="text-[9px] font-bold text-stone-500 tracking-widest mb-1.5">HAEMATOLOGY</p>
      <div className="border border-stone-200 divide-y divide-stone-100 text-[8px] font-medium text-stone-500">
        <div className="grid grid-cols-3 divide-x divide-stone-100">
          <span className="px-1 py-0.5">Hb</span><span className="px-1 py-0.5">10.2</span><span className="px-1 py-0.5">g/dL</span>
        </div>
        <div className="grid grid-cols-3 divide-x divide-stone-100">
          <span className="px-1 py-0.5">WBC</span><span className="px-1 py-0.5">11.4</span><span className="px-1 py-0.5">10³</span>
        </div>
      </div>
      <p className="text-[8px] font-medium text-stone-400 mt-1.5">previous values: unknown</p>
    </div>
  );
}

function StickyNoteSmall({ text, color }: { text: string; color: string }) {
  return (
    <div className={`w-24 h-24 ${color} shadow-lg p-2 flex flex-col`}>
      <p className="text-[10px] font-medium text-stone-600 italic leading-snug">{text}</p>
      <p className="text-[9px] font-medium text-stone-400 italic mt-auto">don't forget</p>
    </div>
  );
}

function ReferralSlip() {
  return (
    <div className="w-36 bg-blue-50 rounded-sm shadow-lg p-2.5 border border-blue-100">
      <p className="text-[9px] font-bold text-blue-800/70 tracking-widest mb-1">REFERRAL</p>
      <div className="space-y-1">
        <div className="h-1 bg-blue-200/70 rounded w-full" />
        <div className="h-1 bg-blue-200/50 rounded w-3/4" />
      </div>
      <p className="text-[8px] font-medium text-blue-800/50 mt-1.5">history attached? no</p>
    </div>
  );
}

const ITEMS: ChaosItem[] = [
  { id: "folder1",  node: <ManilaFolder label="2019-2021" fat />,                          sx: -100, sy: -200, sr:  -8 },
  { id: "lab",      node: <PrintedLabResult />,                                              sx:  105, sy: -160, sr:   9 },
  { id: "folder2",  node: <ManilaFolder label="CARDIOLOGY" />,                               sx:  100, sy:  -30, sr:  -6 },
  { id: "rx",       node: <LoosePrescription />,                                             sx: -115, sy:  -55, sr:  12 },
  { id: "sticky1",  node: <StickyNoteSmall text="call lab re: Rajan" color="bg-yellow-100" />, sx: -110, sy: 105, sr:  -9 },
  { id: "referral", node: <ReferralSlip />,                                                  sx:  110, sy:  120, sr:   7 },
  { id: "sticky2",  node: <StickyNoteSmall text="BP 150/95 recheck" color="bg-pink-100" />,  sx:  -60, sy:  215, sr:   8 },
];

/* ── The clarity: the smart patient history, chronological ───────── */

const TIMELINE = [
  { when: "2019", what: "Type 2 diabetes diagnosed", where: "City Hospital" },
  { when: "2023", what: "Angioplasty · LAD stent", where: "Apollo, Chennai" },
  { when: "Today", what: "Follow-up · BP review", where: "Your clinic", now: true },
];

function DoctorDashboardUI() {
  return (
    <div className="w-80 bg-white rounded-xl shadow-[0_0_60px_8px_rgba(76,175,143,0.35)] overflow-hidden">
      {/* browser chrome */}
      <div className="bg-stone-100 border-b border-stone-200 px-3 py-1.5 flex items-center gap-2">
        <span className="flex gap-1" aria-hidden="true">
          <span className="w-2 h-2 rounded-full bg-rose-300" />
          <span className="w-2 h-2 rounded-full bg-amber-300" />
          <span className="w-2 h-2 rounded-full bg-emerald-300" />
        </span>
        <span className="flex-1 bg-white border border-stone-200 rounded-md px-2 py-0.5 text-[8px] font-medium text-stone-400 truncate">
          fettlemed.com/doctor
        </span>
      </div>
      <div className="flex">
        {/* portal sidebar */}
        <div className="w-9 bg-pine-900 flex flex-col items-center gap-2.5 py-3 shrink-0">
          <LayoutDashboard className="w-3.5 h-3.5 text-pine-100" />
          <Users className="w-3.5 h-3.5 text-pine-500" />
          <FileText className="w-3.5 h-3.5 text-pine-500" />
          <Settings className="w-3.5 h-3.5 text-pine-500 mt-auto" />
        </div>
        {/* patient history */}
        <div className="flex-1 min-w-0">
          <div className="px-3.5 py-2.5 border-b border-stone-100 flex items-center justify-between">
            <div>
              <p className="text-pine-900 text-xs font-semibold">Rajan, 52</p>
              <p className="text-dim text-[10px] font-medium">Full history · one timeline</p>
            </div>
            <span className="text-[9px] font-semibold text-pine-700 bg-pine-50 border border-pine-200 rounded-full px-2 py-0.5">Consented</span>
          </div>
          <div className="px-3.5 py-3">
            <div className="relative pl-4 space-y-3">
              {/* the thread */}
              <div className="absolute left-[5px] top-1.5 bottom-1.5 w-px bg-pine-200" />
              {TIMELINE.map(({ when, what, where, now }) => (
                <div key={when} className="relative">
                  <span className={`absolute -left-[15px] top-1 w-2.5 h-2.5 rounded-full border-2 ${now ? "bg-pine-600 border-pine-600" : "bg-white border-pine-300"}`} />
                  <p className="text-[9px] font-bold text-pine-600 tracking-wide">{when}</p>
                  <p className="text-[11px] font-semibold text-pine-900 leading-tight">{what}</p>
                  <p className="text-[9px] font-medium text-dim">{where}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function DoctorProblem() {
  return (
    <ChaosClarity
      eyebrow="The consultation was supposed to be about the patient"
      problem="Decisions made on half the information."
      problemSub="The history is in folders, registers, and other clinics' files. You have fifteen minutes."
      payoff="The full picture, before they sit down."
      payoffSub="One chronological history, ready the moment the consultation starts."
      items={ITEMS}
      clarity={<DoctorDashboardUI />}
    />
  );
}
