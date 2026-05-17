import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "motion/react";
import {
  Upload,
  FileText,
  Stethoscope,
  Smartphone,
  CheckCircle2,
  Pill,
  User,
  Send,
  ClipboardList,
  Activity,
} from "lucide-react";

// ---------------------------------------------------------------------------
// Types & constants
// ---------------------------------------------------------------------------

const tabs = ["Clinic", "Doctor", "Everyone"] as const;
type Tab = (typeof tabs)[number];

// ---------------------------------------------------------------------------
// useTypewriter hook
// ---------------------------------------------------------------------------

function useTypewriter(text: string, startDelayMs: number, speedMs: number): string {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    setDisplayed("");
    let charIndex = 0;
    let intervalId: ReturnType<typeof setInterval> | null = null;

    const timeoutId = setTimeout(() => {
      intervalId = setInterval(() => {
        charIndex += 1;
        setDisplayed(text.slice(0, charIndex));
        if (charIndex >= text.length) {
          if (intervalId !== null) clearInterval(intervalId);
        }
      }, speedMs);
    }, startDelayMs);

    return () => {
      clearTimeout(timeoutId);
      if (intervalId !== null) clearInterval(intervalId);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return displayed;
}

// ---------------------------------------------------------------------------
// BlinkingCursor
// ---------------------------------------------------------------------------

function BlinkingCursor({ visible }: { visible: boolean }) {
  if (!visible) return null;
  return (
    <motion.span
      className="inline-block w-[2px] h-[1em] bg-current align-middle ml-[1px]"
      animate={{ opacity: [1, 0, 1] }}
      transition={{ repeat: Infinity, duration: 0.9, ease: "linear" }}
    />
  );
}

// ---------------------------------------------------------------------------
// FileUploadRow sub-component
// ---------------------------------------------------------------------------

type FileStatus = "waiting" | "uploading" | "done";

interface FileUploadRowProps {
  filename: string;
  label: string;
  status: FileStatus;
}

function FileUploadRow({ filename, label, status }: FileUploadRowProps) {
  if (status === "waiting") return null;

  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.35 }}
      className="flex items-center gap-3 bg-white border border-stone-200 rounded-xl p-3"
    >
      <FileText className="w-4 h-4 text-pine-600 shrink-0" />
      <div className="flex-1 min-w-0">
        <p className="text-xs font-medium text-pine-900 truncate">{filename}</p>
        <p className="text-[10px] text-stone-400">{label}</p>
      </div>
      <div className="shrink-0 w-5 h-5 flex items-center justify-center">
        <AnimatePresence mode="wait">
          {status === "uploading" && (
            <motion.div
              key="spinner"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <motion.div
                className="w-4 h-4 border-2 border-pine-600 border-t-transparent rounded-full"
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
              />
            </motion.div>
          )}
          {status === "done" && (
            <motion.div
              key="tick"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 400, damping: 18 }}
            >
              <CheckCircle2 className="w-4 h-4 text-green-500" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

// ---------------------------------------------------------------------------
// ClinicPanel
// ---------------------------------------------------------------------------

function ClinicPanel() {
  const [showCheckin, setShowCheckin] = useState(false);
  const [showVitals, setShowVitals] = useState(false);
  const [file1Status, setFile1Status] = useState<FileStatus>("waiting");
  const [file2Status, setFile2Status] = useState<FileStatus>("waiting");
  const [showSynced, setShowSynced] = useState(false);

  // Vitals type out sequentially: height → weight → bp
  // "172 cm" = 6 chars × 30ms = 180ms  → done ~580ms
  // "78 kg"  = 5 chars × 30ms = 150ms  → done ~850ms
  // "138/88" = 6 chars × 30ms = 180ms  → done ~1130ms
  const heightVal = "172 cm";
  const weightVal = "78 kg";
  const bpVal     = "138/88";
  const heightText = useTypewriter(heightVal, 400, 30);
  const weightText = useTypewriter(weightVal, 700, 30);
  const bpText     = useTypewriter(bpVal,     950, 30);
  const heightDone = heightText.length >= heightVal.length;
  const weightDone = weightText.length >= weightVal.length;
  const bpDone     = bpText.length     >= bpVal.length;

  useEffect(() => {
    const timers = [
      setTimeout(() => setShowCheckin(true),         150),
      setTimeout(() => setShowVitals(true),           350),
      // files start after vitals finish (~1130ms) — give a small buffer
      setTimeout(() => setFile1Status("uploading"), 1300),
      setTimeout(() => setFile1Status("done"),      2100),
      setTimeout(() => setFile2Status("uploading"), 2300),
      setTimeout(() => setFile2Status("done"),      3100),
      setTimeout(() => setShowSynced(true),         3300),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className="pt-2 space-y-2.5 min-h-[320px]">
      {/* Check-in row */}
      <AnimatePresence>
        {showCheckin && (
          <motion.div
            key="checkin"
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="flex items-center gap-3 bg-stone-50 border border-stone-200 rounded-xl p-3"
          >
            <div className="w-8 h-8 rounded-full bg-pine-100 flex items-center justify-center shrink-0">
              <User className="w-4 h-4 text-pine-700" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-medium text-pine-900">Rajan, 52</p>
              <p className="text-[10px] text-stone-400">Checked in · 10:02 AM</p>
            </div>
            <span className="text-[10px] font-medium bg-green-100 text-green-700 rounded-full px-2 py-0.5 shrink-0">
              Walk-in
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Vitals entry */}
      <AnimatePresence>
        {showVitals && (
          <motion.div
            key="vitals"
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white border border-stone-200 rounded-xl p-3"
          >
            <p className="text-[10px] font-medium text-stone-400 uppercase tracking-widest mb-2">
              Vitals
            </p>
            <div className="grid grid-cols-3 gap-2">
              {/* Height */}
              <div className="bg-stone-50 rounded-lg px-2 py-2">
                <p className="text-[9px] text-stone-400 mb-0.5">Height</p>
                <p className="text-xs font-medium text-pine-900 min-h-[1rem]">
                  {heightText}<BlinkingCursor visible={!heightDone} />
                </p>
              </div>
              {/* Weight */}
              <div className="bg-stone-50 rounded-lg px-2 py-2">
                <p className="text-[9px] text-stone-400 mb-0.5">Weight</p>
                <p className="text-xs font-medium text-pine-900 min-h-[1rem]">
                  {weightText}<BlinkingCursor visible={!weightDone} />
                </p>
              </div>
              {/* BP */}
              <div className="bg-stone-50 rounded-lg px-2 py-2">
                <p className="text-[9px] text-stone-400 mb-0.5">BP</p>
                <p className="text-xs font-medium text-pine-900 min-h-[1rem]">
                  {bpText}<BlinkingCursor visible={!bpDone} />
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* File upload rows */}
      <FileUploadRow
        filename="Entry_Form_Rajan.pdf"
        label="Patient entry form"
        status={file1Status}
      />
      <FileUploadRow
        filename="CBC_Report_Rajan.pdf"
        label="Blood test results"
        status={file2Status}
      />

      {/* Synced confirmation */}
      <AnimatePresence>
        {showSynced && (
          <motion.div
            key="synced"
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="flex items-center gap-2 bg-green-100 border border-green-200 rounded-xl p-3"
          >
            <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0" />
            <p className="text-xs font-medium text-green-800">
              Synced to Dr. Sriram's dashboard
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ---------------------------------------------------------------------------
// DoctorPanel
// ---------------------------------------------------------------------------

const NOTE_TEXT =
  "BP 138/88 — review in 4 weeks. CBC within range. Continue current dosage.";
const NOTE_CHARS = NOTE_TEXT.length; // 69 chars × 22ms ≈ 1518ms → done ~2218ms from mount
// Prescription starts at ~2350ms
const PRESCRIPTION_TEXT = "Amlodipine 5mg · once daily";

function DoctorPanel() {
  const [showNote, setShowNote] = useState(false);
  const [showPrescription, setShowPrescription] = useState(false);
  const [prescriptionText, setPrescriptionText] = useState("");
  const [showSendBtn, setShowSendBtn] = useState(false);
  const [sent, setSent] = useState(false);

  // Typewriter for the note — starts at 700ms from mount
  const noteText = useTypewriter(NOTE_TEXT, 700, 22);
  const noteDone = noteText.length >= NOTE_CHARS;
  const prescriptionDone = prescriptionText.length >= PRESCRIPTION_TEXT.length;

  useEffect(() => {
    // Prescription types out starting at 2350ms (managed here, not via the hook,
    // because the hook's effect only runs on mount and can't react to showPrescription)
    let rxCharIdx = 0;
    let rxInterval: ReturnType<typeof setInterval> | null = null;
    const rxTimeout = setTimeout(() => {
      setShowPrescription(true);
      rxInterval = setInterval(() => {
        rxCharIdx += 1;
        setPrescriptionText(PRESCRIPTION_TEXT.slice(0, rxCharIdx));
        if (rxCharIdx >= PRESCRIPTION_TEXT.length && rxInterval) {
          clearInterval(rxInterval);
        }
      }, 28);
    }, 2350);

    const timers = [
      setTimeout(() => setShowNote(true), 600),
      // prescription: 27 chars × 28ms ≈ 756ms → done ~3106ms → button at 3150ms
      setTimeout(() => setShowSendBtn(true), 3150),
      setTimeout(() => setSent(true), 3700),
    ];

    return () => {
      clearTimeout(rxTimeout);
      if (rxInterval) clearInterval(rxInterval);
      timers.forEach(clearTimeout);
    };
  }, []);

  return (
    <div className="pt-2 space-y-2.5 min-h-[360px]">
      {/* Patient context card — visible immediately */}
      <div className="bg-stone-50 border border-stone-200 rounded-xl p-2.5 space-y-2">

        {/* Name + conditions */}
        <div className="flex items-start justify-between gap-2">
          <p className="text-xs font-medium text-pine-900 shrink-0">Rajan, 52</p>
          <div className="text-right">
            <p className="text-[9px] font-medium text-stone-600 leading-tight">Hypertension Stage 1</p>
            <p className="text-[9px] text-stone-400 leading-tight">Pre-diabetes (HbA1c borderline)</p>
          </div>
        </div>

        {/* Allergy row */}
        <div className="flex items-center gap-1.5">
          <span className="text-[8px] font-medium text-red-500 shrink-0">⚠ Allergies:</span>
          <span className="text-[9px] font-medium bg-red-50 border border-red-200 text-red-700 rounded-full px-2 py-0.5">
            Penicillin
          </span>
          <span className="text-[9px] font-medium bg-red-50 border border-red-200 text-red-700 rounded-full px-2 py-0.5">
            Sulfa drugs
          </span>
        </div>

        <div className="h-px bg-stone-200" />

        {/* Vitals from clinic */}
        <div>
          <p className="text-[9px] font-medium text-stone-400 uppercase tracking-widest mb-1">
            Vitals · recorded today
          </p>
          <div className="flex items-center gap-2 text-[9px] font-medium text-pine-900">
            <span>172 cm</span>
            <span className="text-stone-300">·</span>
            <span>78 kg</span>
            <span className="text-stone-300">·</span>
            <span>BP 138/88</span>
          </div>
        </div>

        <div className="h-px bg-stone-200" />

        {/* Recent tests */}
        <div>
          <p className="text-[9px] font-medium text-stone-400 uppercase tracking-widest mb-1.5">
            Recent tests
          </p>
          <div className="flex flex-wrap gap-1">
            <span className="text-[9px] font-medium bg-green-50 border border-green-200 text-green-700 rounded-full px-2 py-0.5">
              CBC · today
            </span>
            <span className="text-[9px] font-medium bg-stone-100 text-stone-600 rounded-full px-2 py-0.5">
              BP 138/88 · today
            </span>
            <span className="text-[9px] font-medium bg-stone-100 text-stone-600 rounded-full px-2 py-0.5">
              HbA1c · normal
            </span>
            <span className="text-[9px] font-medium bg-stone-100 text-stone-600 rounded-full px-2 py-0.5">
              ECG · 6mo ago
            </span>
          </div>
        </div>
      </div>

      {/* Consultation note section */}
      <AnimatePresence>
        {showNote && (
          <motion.div
            key="note"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-white border border-stone-200 rounded-xl p-3 space-y-2"
          >
            <div className="flex items-center gap-1.5">
              <ClipboardList className="w-3.5 h-3.5 text-stone-400" />
              <p className="text-[10px] font-medium text-stone-400 uppercase tracking-widest">
                Consultation note
              </p>
            </div>
            <p className="text-xs text-stone-700 font-medium leading-relaxed min-h-[2.5rem]">
              {noteText}
              <BlinkingCursor visible={!noteDone} />
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Prescription */}
      <AnimatePresence>
        {showPrescription && (
          <motion.div
            key="prescription"
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="flex items-center gap-3 bg-white border border-stone-200 rounded-xl p-3"
          >
            <div className="w-7 h-7 rounded-lg bg-pine-100 flex items-center justify-center shrink-0">
              <Pill className="w-3.5 h-3.5 text-pine-700" />
            </div>
            <p className="flex-1 text-xs font-medium text-stone-700 min-h-[1rem]">
              {prescriptionText}
              <BlinkingCursor visible={!prescriptionDone} />
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Send to Patient button */}
      <AnimatePresence>
        {showSendBtn && (
          <motion.div
            key="send-btn"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.25 }}
          >
            <motion.button
              className={`w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-medium transition-colors ${
                sent
                  ? "bg-green-500 text-white"
                  : "bg-pine-900 text-white"
              }`}
              animate={
                sent
                  ? { scale: 1 }
                  : { scale: [1, 1.04, 1] }
              }
              transition={
                sent
                  ? { duration: 0.2 }
                  : { duration: 0.6, ease: "easeInOut" }
              }
            >
              {sent ? (
                <>
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Sent ✓
                </>
              ) : (
                <>
                  <Send className="w-3.5 h-3.5" />
                  Send to Patient
                </>
              )}
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ---------------------------------------------------------------------------
// PatientPanel
// ---------------------------------------------------------------------------

function PatientPanel() {
  return (
    <div className="pt-2 min-h-[320px]">
      <div className="flex gap-3 items-start">
        {/* Phone frame */}
        <div className="w-[110px] shrink-0 bg-pine-900 rounded-[1.4rem] p-[5px] border-[3px] border-pine-800 shadow-lg">
          <div className="bg-white rounded-[1rem] overflow-hidden" style={{ height: 220 }}>
            {/* Phone status bar */}
            <div className="bg-pine-900 px-2 py-1.5 text-center">
              <p className="text-white text-[8px] font-medium tracking-wide">Fettlemed</p>
            </div>

            <div className="relative overflow-hidden flex-1" style={{ height: 184 }}>
              {/* Notification slide-in */}
              <motion.div
                initial={{ y: -40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.4, ease: "easeOut" }}
                className="absolute top-1.5 left-1.5 right-1.5 bg-pine-800 rounded-lg px-2 py-1.5 z-10"
              >
                <p className="text-white text-[8px] font-medium leading-tight">
                  Dr. Sriram sent your records
                </p>
              </motion.div>

              {/* Cards inside phone */}
              <div className="absolute top-10 left-1.5 right-1.5 space-y-1">
                <motion.div
                  initial={{ x: 40, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.7, duration: 0.35, ease: "easeOut" }}
                  className="bg-pine-50 rounded-lg px-2 py-1.5 flex items-center gap-1.5"
                >
                  <Activity className="w-3 h-3 text-pine-600 shrink-0" />
                  <span className="text-[8px] font-medium text-pine-900">CBC Report</span>
                </motion.div>

                <motion.div
                  initial={{ x: 40, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 1.0, duration: 0.35, ease: "easeOut" }}
                  className="bg-pine-50 rounded-lg px-2 py-1.5 flex items-center gap-1.5"
                >
                  <Pill className="w-3 h-3 text-pine-600 shrink-0" />
                  <span className="text-[8px] font-medium text-pine-900">Prescription</span>
                </motion.div>

                <motion.div
                  initial={{ x: 40, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 1.3, duration: 0.35, ease: "easeOut" }}
                  className="bg-pine-50 rounded-lg px-2 py-1.5 flex items-center gap-1.5"
                >
                  <ClipboardList className="w-3 h-3 text-pine-600 shrink-0" />
                  <span className="text-[8px] font-medium text-pine-900">Visit notes</span>
                </motion.div>

                <motion.div
                  initial={{ x: 40, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 1.6, duration: 0.35, ease: "easeOut" }}
                  className="bg-stone-100 rounded-lg px-2 py-1.5 flex items-center gap-1.5"
                >
                  <FileText className="w-3 h-3 text-stone-500 shrink-0" />
                  <span className="text-[8px] font-medium text-stone-700">Clinic Report</span>
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        {/* Info cards on the right */}
        <div className="flex-1 space-y-2">
          {[
            {
              icon: Activity,
              label: "CBC report synced",
              sub: "From Dr. Sriram",
              delay: 0.4,
            },
            {
              icon: Pill,
              label: "Prescription ready",
              sub: "Amlodipine 5mg",
              delay: 0.7,
            },
            {
              icon: FileText,
              label: "Clinic report ready",
              sub: "Vitals + visit summary",
              delay: 1.0,
            },
            {
              icon: CheckCircle2,
              label: "All records current",
              sub: "Last updated today",
              delay: 1.3,
            },
          ].map(({ icon: Icon, label, sub, delay }) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay, duration: 0.35, ease: "easeOut" }}
              className="bg-white border border-stone-200 rounded-xl p-3 flex items-center gap-2"
            >
              <div className="w-7 h-7 rounded-lg bg-pine-100 flex items-center justify-center shrink-0">
                <Icon className="w-3.5 h-3.5 text-pine-700" />
              </div>
              <div>
                <p className="text-xs font-medium text-pine-900">{label}</p>
                <p className="text-[10px] text-stone-400">{sub}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// HomeFlowMockup — main export
// ---------------------------------------------------------------------------

export function HomeFlowMockup() {
  const [active, setActive] = useState<Tab>("Clinic");
  const [hovered, setHovered] = useState(false);
  // tabKey increments on each tab switch so panels fully remount (fresh state + animation reset)
  const [tabKey, setTabKey] = useState(0);
  const prevActive = useRef<Tab>(active);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { amount: 0.3 });

  // Paused when hovered OR scrolled out of view
  const paused = hovered || !isInView;

  function switchTab(t: Tab) {
    if (t !== prevActive.current) {
      prevActive.current = t;
      setTabKey((k) => k + 1);
    }
    setActive(t);
  }

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setActive((t) => {
        const next = tabs[(tabs.indexOf(t) + 1) % tabs.length];
        prevActive.current = next;
        setTabKey((k) => k + 1);
        return next;
      });
    }, 4000);
    return () => clearInterval(id);
  }, [paused]);

  return (
    <div
      ref={containerRef}
      className="w-full max-w-[540px] mx-auto select-none"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Window chrome */}
      <div className="bg-white rounded-[1.5rem] border border-stone-200 shadow-xl overflow-hidden">
        {/* Title bar */}
        <div className="flex items-center gap-2 px-5 py-3 border-b border-stone-100 bg-stone-50">
          <span className="w-3 h-3 rounded-full bg-red-400" />
          <span className="w-3 h-3 rounded-full bg-amber-400" />
          <span className="w-3 h-3 rounded-full bg-green-400" />
          <span className="mx-auto text-xs font-medium text-stone-400 tracking-wide">
            fettlemed.com
          </span>
        </div>

        {/* Tab strip */}
        <div className="flex gap-1 px-5 pt-4 pb-2">
          {tabs.map((t) => (
            <button
              key={t}
              onClick={() => {
                switchTab(t);
                setHovered(true);
              }}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-medium transition-[background-color,color,box-shadow] duration-150 ease-out ${
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
        <div className="px-5 pb-5 min-h-[360px] relative">
          <AnimatePresence mode="wait">
            {active === "Clinic" && (
              <motion.div
                key={`clinic-${tabKey}`}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.28 }}
              >
                <ClinicPanel />
              </motion.div>
            )}
            {active === "Doctor" && (
              <motion.div
                key={`doctor-${tabKey}`}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.28 }}
              >
                <DoctorPanel />
              </motion.div>
            )}
            {active === "Everyone" && (
              <motion.div
                key={`patient-${tabKey}`}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.28 }}
              >
                <PatientPanel />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Tab dot indicators */}
      <div className="flex justify-center gap-2 mt-4">
        {tabs.map((t) => (
          <button
            key={t}
            onClick={() => {
              switchTab(t);
              setHovered(true);
            }}
            className="h-8 w-8 flex items-center justify-center"
            aria-label={`Switch to ${t}`}
          >
            <div
              className={`transition-[width,background-color] duration-150 ease-out h-2 rounded-full ${
                active === t
                  ? "bg-pine-700 w-6"
                  : "bg-stone-300 w-2 hover:bg-stone-400"
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
