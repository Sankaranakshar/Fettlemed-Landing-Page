import React from 'react';
import { AlertTriangle } from "lucide-react";
import { ChaosClarity, ChaosItem } from "@/components/common/ChaosClarity";

/* ── The chaos: a clinic run on broken tools ─────────────────────── */

function BillingSpreadsheet() {
  return (
    <div className="w-48 bg-white rounded-md shadow-xl overflow-hidden border border-stone-200">
      <div className="bg-emerald-700 px-2 py-1 flex items-center gap-1.5">
        <span className="w-1.5 h-1.5 rounded-full bg-white/50" />
        <p className="text-[8px] font-semibold text-white truncate">billing_v7_FINAL(2).xlsx</p>
      </div>
      <div className="grid grid-cols-4 text-[7px] font-medium text-stone-500">
        {["", "A", "B", "C", "1", "Mehta", "450", "paid?", "2", "Sharma", "#REF!", "", "3", "Mehta", "450", "dup??"].map((cell, i) => (
          <span
            key={i}
            className={`px-1 py-0.5 border-b border-r border-stone-100 truncate ${
              cell === "#REF!" ? "bg-rose-100 text-rose-600 font-bold" : i < 4 ? "bg-stone-50 font-bold" : ""
            }`}
          >
            {cell}
          </span>
        ))}
      </div>
    </div>
  );
}

function DoubleBookedCalendar() {
  return (
    <div className="w-44 bg-white rounded-md shadow-xl border border-stone-200 p-2">
      <p className="text-[8px] font-bold text-stone-500 tracking-widest mb-1.5">TUESDAY · 9:00 AM</p>
      <div className="relative h-14">
        <div className="absolute left-0 top-0 w-3/4 bg-blue-100 border-l-2 border-blue-400 rounded-sm px-1.5 py-1">
          <p className="text-[8px] font-semibold text-blue-800">9:00 · Mehta</p>
        </div>
        <div className="absolute right-0 top-4 w-3/4 bg-rose-100 border-l-2 border-rose-400 rounded-sm px-1.5 py-1">
          <p className="text-[8px] font-semibold text-rose-700">9:00 · Sharma</p>
          <p className="text-[7px] font-medium text-rose-500">double booked</p>
        </div>
      </div>
    </div>
  );
}

function DuplicateAlert() {
  return (
    <div className="w-44 bg-white rounded-lg shadow-xl border-2 border-rose-300 p-2.5 animate-pulse">
      <div className="flex items-center gap-1.5 mb-1">
        <AlertTriangle className="w-3 h-3 text-rose-500 shrink-0" />
        <p className="text-[9px] font-bold text-rose-600">Duplicate Patient Registration</p>
      </div>
      <p className="text-[8px] font-medium text-stone-500 mb-1.5">"Rajan K" already exists. Merge records?</p>
      <div className="flex gap-1.5">
        <span className="text-[8px] font-semibold bg-stone-100 rounded px-1.5 py-0.5 text-stone-500">Ignore</span>
        <span className="text-[8px] font-semibold bg-rose-500 rounded px-1.5 py-0.5 text-white">Merge??</span>
      </div>
    </div>
  );
}

function PaperRegister() {
  return (
    <div className="w-36 bg-amber-50 rounded-sm shadow-lg p-2.5 border border-amber-200">
      <p className="text-[9px] font-bold text-amber-800/70 tracking-widest mb-1.5">VISIT REGISTER</p>
      <div className="space-y-1">
        <div className="h-1 bg-amber-200/80 rounded w-full" />
        <div className="h-1 bg-amber-200/60 rounded w-5/6" />
        <div className="h-1 bg-amber-200/80 rounded w-full" />
      </div>
      <p className="text-[8px] font-medium text-amber-700/60 mt-1.5">page 212 · ink smudged</p>
    </div>
  );
}

function TokenSlip() {
  return (
    <div className="w-24 bg-white shadow-lg p-2 border-b-2 border-dashed border-stone-200 text-center">
      <p className="text-[8px] font-bold text-stone-400 tracking-widest">TOKEN</p>
      <p className="text-xl font-bold text-stone-600 leading-none my-1">47</p>
      <p className="text-[7px] font-medium text-stone-400">wait time: ???</p>
    </div>
  );
}

const ITEMS: ChaosItem[] = [
  { id: "sheet",    node: <BillingSpreadsheet />,   sx: -100, sy: -195, sr:  -7 },
  { id: "calendar", node: <DoubleBookedCalendar />, sx:  105, sy: -145, sr:   8 },
  { id: "alert",    node: <DuplicateAlert />,       sx: -105, sy:  -30, sr:   6 },
  { id: "register", node: <PaperRegister />,        sx:  110, sy:   60, sr:  -9 },
  { id: "token",    node: <TokenSlip />,            sx:  -70, sy:  185, sr:  10 },
];

/* ── The clarity: the clinic system, in step ─────────────────────── */

const CMS_COLUMNS = [
  { name: "Front Desk", cls: "bg-pine-50 border-pine-200 text-pine-700", rows: ["Rajan K · arrived", "Token 12 · in queue"] },
  { name: "Billing", cls: "bg-amber-50 border-amber-200 text-amber-700", rows: ["₹450 · collected", "Day total: live"] },
  { name: "Patient Flow", cls: "bg-blue-50 border-blue-200 text-blue-700", rows: ["Room 2 · with doctor", "Next: Sharma"] },
];

function ClinicCmsUI() {
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
          fettlemed.com/clinic
        </span>
      </div>
      {/* portal header */}
      <div className="px-3.5 py-2.5 border-b border-stone-100 flex items-center justify-between">
        <div>
          <p className="text-pine-900 text-xs font-semibold">FettleMed Clinic</p>
          <p className="text-dim text-[10px] font-medium">The whole day, on one screen</p>
        </div>
        <span className="text-[9px] font-semibold text-pine-700 bg-pine-50 border border-pine-200 rounded-full px-2 py-0.5">Live</span>
      </div>
      <div className="grid grid-cols-3 gap-1.5 p-2.5">
        {CMS_COLUMNS.map(({ name, cls, rows }) => (
          <div key={name} className={`rounded-lg border p-1.5 ${cls}`}>
            <p className="text-[8px] font-bold tracking-wide mb-1">{name}</p>
            <div className="space-y-1">
              {rows.map((row) => (
                <p key={row} className="text-[7px] font-semibold bg-white/80 rounded px-1 py-0.5 text-stone-600 leading-tight">{row}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ClinicProblem() {
  return (
    <ChaosClarity
      eyebrow="Running a clinic shouldn't mean fighting the system"
      problem="The day falls behind before the first consultation begins."
      problemSub="Spreadsheets, double bookings, and duplicate registrations, each stealing minutes from every patient."
      payoff="From friction to flow."
      payoffSub="Front desk, billing, and patient flow, finally in step."
      items={ITEMS}
      clarity={<ClinicCmsUI />}
    />
  );
}
