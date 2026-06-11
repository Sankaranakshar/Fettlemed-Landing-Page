import React from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import {
  ShieldCheck, Key, Settings, Users, Lock, Clock4,
  CheckCircle2, Clock, Calendar, Download, Eye, FileCheck2,
  Server, XCircle,
} from "lucide-react";
import { SEO } from '@/components/common/SEO';
import { FadeIn } from "@/components/common/FadeIn";
import { DarkTexture } from "@/components/common/Texture/DarkTexture";
import { FAQ } from "@/components/common/FAQ";

/* ── Status vocabulary: the page's spine. We claim only what is true. ── */
type Status = "live" | "launch" | "progress" | "planned";

const STATUS_CLS: Record<Status, string> = {
  live:     "bg-pine-50 border-pine-200 text-pine-700",
  launch:   "bg-amber-50 border-amber-200 text-amber-700",
  progress: "bg-amber-50 border-amber-200 text-amber-700",
  planned:  "bg-stone-50 border-stone-200 text-dim",
};
const STATUS_LABEL: Record<Status, string> = {
  live: "Live",
  launch: "At launch",
  progress: "In progress",
  planned: "Planned",
};

function StatusPill({ status }: { status: Status }) {
  return (
    <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold border ${STATUS_CLS[status]}`}>
      {STATUS_LABEL[status]}
    </span>
  );
}

/* ── Hero trust signals: clean chips, statuses live in the grid below ── */
const trustSignals: { icon: React.ElementType; label: string; sub: string }[] = [
  { icon: Eye,        label: "Patient-controlled",   sub: "You grant and revoke access" },
  { icon: Lock,       label: "End-to-end encrypted", sub: "TLS 1.2+ in transit" },
  { icon: FileCheck2, label: "Audit logging",        sub: "Every access recorded" },
  { icon: Key,        label: "Multi-factor auth",    sub: "Provider accounts, at launch" },
  { icon: ShieldCheck,label: "DPDPA-aligned",        sub: "Built on India's data law" },
  { icon: Download,   label: "Your data, portable",  sub: "Yours to download and keep" },
];

/* ── Protection grid: one fact per card ─────────────────────────── */
const PROTECTIONS: { icon: React.ElementType; title: string; fact: string; status?: Status }[] = [
  { icon: Settings,   title: "Consent first",       fact: "Nothing is visible until the patient grants access.", status: "live" },
  { icon: Eye,        title: "Granular sharing",    fact: "Share everything, specific records, or a time period." },
  { icon: Clock4,     title: "Time-bound access",   fact: "Expires on its own. Revocable in seconds, from the app." },
  { icon: Lock,       title: "In transit",          fact: "TLS 1.2+ with modern cipher suites on every connection.", status: "live" },
  { icon: Key,        title: "End to end",          fact: "Records unreadable without the right keys, at every step.", status: "live" },
  { icon: ShieldCheck,title: "Multi-factor auth",   fact: "Required on every provider account.", status: "launch" },
  { icon: Users,      title: "Role-based access",   fact: "Front desk, billing, doctors, owners: each sees only their lane." },
  { icon: Clock,      title: "Session control",     fact: "Inactive sessions expire. Sensitive actions re-authenticate." },
  { icon: FileCheck2, title: "Audit trail",         fact: "Who viewed what, and when. Always visible to you.", status: "live" },
];

/* ── Our responsibilities ───────────────────────────────────────── */
const RESPONSIBILITIES = [
  { title: "Protect every record",   line: "End-to-end encryption on the platform and the infrastructure." },
  { title: "Log every access",       line: "A tamper-resistant trail, visible to patients and clinics." },
  { title: "Answer for breaches",    line: "Detection and notification procedures under DPDPA 2023." },
  { title: "Never monetise your data", line: "Never sold, never advertised, never used to train AI models." },
];

const faqData = [
  {
    question: "Can FettleMed see my health records?",
    answer: "FettleMed staff do not have routine access to patient health records. Access to patient data by FettleMed personnel is restricted to specific operational needs, such as resolving a technical support request, and requires internal authorisation. Any such access is logged and auditable. We do not browse patient records.",
  },
  {
    question: "What happens to my data if I stop using FettleMed?",
    answer: "Your records are yours. You can export all your health data in full at any time, before, during, or after you stop using the platform. Nothing is deleted automatically when you leave. If you want your data removed from FettleMed's servers entirely, you can request deletion and we will process it in accordance with DPDPA requirements.",
  },
  {
    question: "What happens to clinic data if the clinic stops using FettleMed?",
    answer: "Clinics can export all patient records, billing history, and operational data in full at any time. Data is not locked to the platform. Clinics retain ownership of the clinical records they have created, in line with Indian Medical Council Regulations 2002. Export is available as a standard feature, not a paid service.",
  },
  {
    question: "Is my data safe if FettleMed shuts down?",
    answer: "We plan for this scenario deliberately. Patient and clinic data is exportable at any time in standard formats. In the event that FettleMed ceases operations, data will not simply disappear. We are committed to giving users sufficient notice and access to export everything before any service discontinuation.",
  },
  {
    question: "Who is responsible for security at FettleMed?",
    answer: "Security is owned at the founding level, not delegated to a third-party vendor or a single team member. Gurubalaji, our Lead Developer, is responsible for the technical implementation of every security measure described on this page. Questions about our security posture can be directed to hello@fettlemed.com.",
  },
  {
    question: "Does FettleMed comply with ABDM?",
    answer: "FettleMed is being built on ABDM-aligned architecture, and ABHA ID integration is in active development. Formal ABDM certification is on our roadmap following pilot completion. We do not claim formal certification that has not yet been granted. See our compliance roadmap for the current state of each standard.",
  },
  {
    question: "Can a doctor access my records without my permission?",
    answer: "No. A doctor can request access to your records, but they cannot view anything until you grant it explicitly. Access is time-bound and scoped. A doctor you share records with for one consultation cannot continue accessing them after that consultation ends unless you grant ongoing access separately. You are notified when access is requested and when it is used.",
  },
];

export default function Security() {
  return (
    <>
      <SEO
        title="Security"
        description="Your health data is patient-controlled, encrypted, and stored on infrastructure in India. Here is exactly how FettleMed protects your health records, in plain language."
      />
      <div className="flex flex-col w-full bg-surface-50 min-h-screen">

        {/* ── S1: Hero ─────────────────────────────────────────────────── */}
        <section className="relative pt-16 pb-12 md:pt-20 md:pb-16 bg-pine-900 text-white overflow-hidden">
          <DarkTexture />
          <div className="container mx-auto px-4 md:px-8 max-w-4xl relative z-10">
            <FadeIn eager>
              <div className="text-center mb-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-pine-700 bg-pine-800/50 text-xs font-medium text-pine-300 uppercase tracking-widest mb-8">
                  <ShieldCheck className="w-3.5 h-3.5" /> How we protect your data
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.1] mb-6 tracking-tight text-balance">
                  You should know exactly how your health data is protected.
                </h1>
                <p className="text-xl text-pine-200 leading-relaxed max-w-2xl mx-auto text-balance">
                  Who can see your records, how they are protected, and what we will never do with them. In plain terms.
                </p>
              </div>

              {/* Trust signal grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {trustSignals.map(({ icon: Icon, label, sub }) => (
                  <div key={label} className="bg-pine-800/50 border border-pine-700/60 rounded-2xl p-4 flex items-center gap-4">
                    <div className="w-10 h-10 bg-pine-700/60 border border-pine-600 rounded-xl flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-pine-300" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-white font-medium text-sm leading-tight">{label}</p>
                      <p className="text-pine-300 text-xs font-medium mt-0.5">{sub}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* One action: this page informs, it doesn't sell */}
              <div className="flex justify-center mt-10">
                <a
                  href="mailto:hello@fettlemed.com"
                  className="inline-flex items-center justify-center h-12 px-8 text-base border-2 border-pine-600 text-white hover:bg-pine-800 rounded-xl font-medium transition-colors"
                >
                  Ask a security question
                </a>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ── S2: Disclosure strip ─────────────────────────────────────── */}
        <section className="py-4 bg-pine-50 border-b border-pine-100">
          <div className="container mx-auto px-4 md:px-8 max-w-5xl">
            <p className="text-center text-xs text-pine-600 font-medium">
              FettleMed is pre-launch. This page labels what is live today and what is being finalised. Last reviewed: June 2026.
            </p>
          </div>
        </section>

        {/* ── S3: Philosophy ───────────────────────────────────────────── */}
        <section className="py-16 md:py-20 bg-white border-b border-stone-100">
          <div className="container mx-auto px-4 md:px-8 max-w-4xl">
            <FadeIn className="mb-10">
              <p className="text-xs font-medium tracking-widest uppercase text-pine-600 mb-3">Our security philosophy</p>
              <h2 className="text-2xl md:text-3xl font-medium text-pine-900 tracking-tight">Three rules, before any technology.</h2>
            </FadeIn>

            <div className="space-y-6">
              {[
                { n: "01", line: "The patient holds the key.",            sub: "No doctor, clinic, or FettleMed employee sees a record without the patient's consent." },
                { n: "02", line: "We claim only what is live today.",     sub: "Every protection on this page is labelled honestly: live, at launch, in progress, or planned." },
                { n: "03", line: "Your health data is never for sale.",   sub: "Not to insurers, not to advertisers, not to AI companies. Not ever." },
              ].map(({ n, line, sub }, i) => (
                <FadeIn key={n} delay={0.06 * i} className="flex gap-5 md:gap-8 items-start border-l-2 border-pine-200 pl-5 md:pl-8 py-1">
                  <span className="font-mono text-sm font-medium text-pine-600 tracking-widest mt-2 shrink-0">{n}</span>
                  <div>
                    <p className="text-xl md:text-2xl font-medium text-pine-900 tracking-tight leading-snug">{line}</p>
                    <p className="text-dim-2 leading-relaxed mt-1.5">{sub}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* ── S4: How sharing works ────────────────────────────────────── */}
        <section className="py-16 md:py-20 bg-surface-50 border-b border-stone-100">
          <div className="container mx-auto px-4 max-w-5xl">
            <FadeIn>
              <div className="text-center mb-10">
                <p className="text-xs font-medium tracking-widest uppercase text-pine-600 mb-3">How sharing works</p>
                <h2 className="text-2xl md:text-3xl font-medium text-pine-900 tracking-tight text-balance">Three steps. You are in control at every one.</h2>
              </div>

              <div className="bg-white rounded-3xl border border-stone-100 p-8 md:p-12 shadow-sm flex flex-col md:flex-row items-stretch justify-center gap-4 md:gap-6 mb-6">
                {/* Step 1 */}
                <div className="flex flex-col items-center text-center flex-1 min-w-0 max-w-xs">
                  <div className="w-16 h-16 rounded-full bg-pine-100 flex items-center justify-center mb-4 border border-pine-200 shrink-0">
                    <Lock className="w-6 h-6 text-pine-600" />
                  </div>
                  <p className="font-medium text-pine-900 text-base mb-2">1. You grant consent</p>
                  <p className="text-sm font-medium text-dim leading-relaxed">Who sees it, what they see, for how long.</p>
                </div>

                {/* Arrow 1 - desktop */}
                <div className="hidden md:flex flex-col items-center justify-center px-2 shrink-0 relative min-h-[80px]">
                  <svg className="absolute top-1/2 -translate-y-1/2 w-12 h-1 overflow-visible" aria-hidden="true"><line x1="0" y1="2" x2="48" y2="2" stroke="#B8D4CA" strokeWidth="2" strokeDasharray="6 10" className="consent-dash" /></svg>
                  <div className="bg-surface-50 px-3 py-1 rounded-full border border-stone-200 font-medium text-xs uppercase tracking-wider text-dim relative z-10 whitespace-nowrap shadow-sm">Grant</div>
                </div>
                {/* Arrow 1 - mobile */}
                <div className="md:hidden flex flex-col items-center justify-center py-3 shrink-0 relative">
                  <svg className="absolute left-1/2 -translate-x-1/2 h-8 w-1 overflow-visible" aria-hidden="true"><line x1="2" y1="0" x2="2" y2="32" stroke="#B8D4CA" strokeWidth="2" strokeDasharray="6 10" className="consent-dash" /></svg>
                  <div className="bg-surface-50 px-3 py-1 rounded-full border border-stone-200 font-medium text-xs uppercase tracking-wider text-dim relative z-10 shadow-sm">Grant</div>
                </div>

                {/* Step 2 */}
                <div className="flex flex-col items-center text-center flex-1 min-w-0 max-w-xs">
                  <div className="w-16 h-16 rounded-full bg-pine-50 flex items-center justify-center mb-4 border border-pine-100 shrink-0">
                    <Key className="w-6 h-6 text-pine-600" />
                  </div>
                  <p className="font-medium text-pine-900 text-base mb-2">2. Time-bound access</p>
                  <p className="text-sm font-medium text-dim leading-relaxed">Scoped to what you chose. Expires when the period ends.</p>
                </div>

                {/* Arrow 2 - desktop */}
                <div className="hidden md:flex flex-col items-center justify-center px-2 shrink-0 relative min-h-[80px]">
                  <svg className="absolute top-1/2 -translate-y-1/2 w-12 h-1 overflow-visible" aria-hidden="true"><line x1="0" y1="2" x2="48" y2="2" stroke="#B8D4CA" strokeWidth="2" strokeDasharray="6 10" className="consent-dash" /></svg>
                  <div className="bg-surface-50 px-3 py-1 rounded-full border border-stone-200 font-medium text-xs uppercase tracking-wider text-dim relative z-10 whitespace-nowrap shadow-sm">Revoke</div>
                </div>
                {/* Arrow 2 - mobile */}
                <div className="md:hidden flex flex-col items-center justify-center py-3 shrink-0 relative">
                  <svg className="absolute left-1/2 -translate-x-1/2 h-8 w-1 overflow-visible" aria-hidden="true"><line x1="2" y1="0" x2="2" y2="32" stroke="#B8D4CA" strokeWidth="2" strokeDasharray="6 10" className="consent-dash" /></svg>
                  <div className="bg-surface-50 px-3 py-1 rounded-full border border-stone-200 font-medium text-xs uppercase tracking-wider text-dim relative z-10 shadow-sm">Revoke</div>
                </div>

                {/* Step 3 */}
                <div className="flex flex-col items-center text-center flex-1 min-w-0 max-w-xs">
                  <div className="w-16 h-16 rounded-full bg-stone-100 flex items-center justify-center mb-4 border border-stone-200 shrink-0">
                    <FileCheck2 className="w-6 h-6 text-pine-600" />
                  </div>
                  <p className="font-medium text-pine-900 text-base mb-2">3. Access ends</p>
                  <p className="text-sm font-medium text-dim leading-relaxed">Your records stay encrypted and protected.</p>
                </div>
              </div>

              <p className="text-dim text-sm font-medium text-center max-w-2xl mx-auto">
                Doctors retain the clinical records they create, as required under Indian Medical Council Regulations 2002. Consent controls your broader health profile.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* ── S5: How your data is protected ───────────────────────────── */}
        <section className="py-16 md:py-20 bg-white border-b border-stone-100">
          <div className="container mx-auto px-4 md:px-8 max-w-5xl">
            <FadeIn className="mb-10">
              <p className="text-xs font-medium tracking-widest uppercase text-pine-600 mb-3">The protections</p>
              <h2 className="text-2xl md:text-3xl font-medium text-pine-900 tracking-tight text-balance">How your data is protected.</h2>
            </FadeIn>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {PROTECTIONS.map(({ icon: Icon, title, fact, status }, i) => (
                <FadeIn key={title} delay={0.04 * i} className="bg-surface-50 border border-stone-100 rounded-2xl p-5 flex flex-col gap-2.5">
                  <div className="flex items-center justify-between">
                    <div className="w-9 h-9 rounded-xl bg-white border border-pine-100 flex items-center justify-center">
                      <Icon className="w-4 h-4 text-pine-600" />
                    </div>
                    {status && <StatusPill status={status} />}
                  </div>
                  <h3 className="text-pine-900 font-medium tracking-tight">{title}</h3>
                  <p className="text-dim-2 text-sm leading-relaxed">{fact}</p>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* ── S6: What FettleMed is responsible for ────────────────────── */}
        <section className="py-16 md:py-20 bg-pine-900 text-white relative overflow-hidden border-b border-stone-100">
          <DarkTexture glow="top-left" />
          <div className="container mx-auto px-4 md:px-8 max-w-5xl relative z-10">
            <FadeIn className="mb-10">
              <p className="text-xs font-medium tracking-widest uppercase text-pine-300 mb-3">Our side of the deal</p>
              <h2 className="text-2xl md:text-3xl font-medium tracking-tight text-balance">What FettleMed is responsible for.</h2>
            </FadeIn>

            <div className="grid sm:grid-cols-2 gap-4">
              {RESPONSIBILITIES.map(({ title, line }, i) => (
                <FadeIn key={title} delay={0.06 * i} className="bg-pine-800/50 border border-pine-700/60 rounded-2xl p-6 flex items-start gap-4">
                  <motion.span
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ delay: 0.15 + i * 0.1, type: 'spring', stiffness: 340, damping: 18 }}
                    className="shrink-0 mt-0.5"
                  >
                    <CheckCircle2 className="w-5 h-5 text-pine-300" />
                  </motion.span>
                  <div>
                    <p className="text-white font-medium mb-1">{title}</p>
                    <p className="text-pine-200 text-sm leading-relaxed">{line}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* ── S7: Ownership, portability, and where data lives ─────────── */}
        <section className="py-16 md:py-20 bg-surface-50 border-b border-stone-100">
          <div className="container mx-auto px-4 md:px-8 max-w-5xl">
            <FadeIn className="mb-10">
              <p className="text-xs font-medium tracking-widest uppercase text-pine-600 mb-3">Ownership</p>
              <h2 className="text-2xl md:text-3xl font-medium text-pine-900 tracking-tight text-balance">Your data is yours. In practice, not just in principle.</h2>
            </FadeIn>

            <div className="grid md:grid-cols-3 gap-4">
              {/* 2 taps / 1 tap */}
              <FadeIn delay={0.05} className="bg-white border border-stone-200 rounded-2xl p-6 flex flex-col">
                <motion.p
                  initial={{ scale: 0.6, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ type: 'spring', stiffness: 340, damping: 18 }}
                  style={{ transformOrigin: 'left bottom' }}
                  className="text-5xl font-bold text-pine-900 tracking-tight leading-none"
                >2</motion.p>
                <p className="text-pine-600 font-medium text-sm mb-4">taps to share</p>
                <motion.p
                  initial={{ scale: 0.6, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: 0.12, type: 'spring', stiffness: 340, damping: 18 }}
                  style={{ transformOrigin: 'left bottom' }}
                  className="text-5xl font-bold text-pine-900 tracking-tight leading-none"
                >1</motion.p>
                <p className="text-pine-600 font-medium text-sm">tap to revoke</p>
              </FadeIn>

              {/* Portability */}
              <FadeIn delay={0.1} className="bg-white border border-stone-200 rounded-2xl p-6 flex flex-col gap-3">
                <div className="w-9 h-9 rounded-xl bg-pine-50 border border-pine-100 flex items-center justify-center">
                  <Download className="w-4 h-4 text-pine-600" />
                </div>
                <h3 className="text-pine-900 font-medium tracking-tight">Download and keep</h3>
                <p className="text-dim-2 text-sm leading-relaxed">Export everything, in full, anytime. If you ever want a copy of your data, we provide it on request.</p>
              </FadeIn>

              {/* Residency */}
              <FadeIn delay={0.15} className="bg-white border border-stone-200 rounded-2xl p-6 flex flex-col gap-3">
                <div className="w-9 h-9 rounded-xl bg-pine-50 border border-pine-100 flex items-center justify-center">
                  <Server className="w-4 h-4 text-pine-600" />
                </div>
                <h3 className="text-pine-900 font-medium tracking-tight">Where it lives</h3>
                <p className="text-dim-2 text-sm leading-relaxed">Cloud infrastructure with the primary data centre in India. Certain backup or supporting services may operate in other regions under contractual data-protection obligations.</p>
              </FadeIn>
            </div>

            {/* Never used for */}
            <FadeIn delay={0.2} className="mt-4 relative overflow-hidden bg-pine-900 rounded-2xl p-6 md:p-8">
              <DarkTexture glow="none" />
              <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-5 md:gap-10">
                <h3 className="text-white font-medium text-lg tracking-tight shrink-0">Never used for</h3>
                <ul className="flex flex-col sm:flex-row gap-3 sm:gap-8">
                  {["Selling to anyone", "Advertising", "Training AI models"].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-pine-100 font-medium text-sm">
                      <XCircle className="w-4 h-4 text-pine-300 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-pine-300 font-medium text-sm md:ml-auto">Ever.</p>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ── S8: Compliance roadmap ───────────────────────────────────── */}
        <section className="py-16 md:py-20 bg-white border-b border-stone-100">
          <div className="container mx-auto px-4 md:px-8 max-w-5xl">
            <FadeIn className="mb-10">
              <p className="text-xs font-medium tracking-widest uppercase text-pine-600 mb-3">Compliance roadmap</p>
              <h2 className="text-2xl md:text-3xl font-medium text-pine-900 tracking-tight text-balance">Where we are, honestly.</h2>
              <p className="text-dim mt-3 max-w-2xl">We do not claim certifications we have not yet earned.</p>
            </FadeIn>

            <div className="grid md:grid-cols-3 gap-4">
              {/* Live today */}
              <FadeIn delay={0.05} className="bg-surface-50 border border-pine-100 rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-5">
                  <CheckCircle2 className="w-5 h-5 text-pine-600" />
                  <p className="text-sm font-semibold text-pine-700 uppercase tracking-wider">Live today</p>
                </div>
                <ul className="space-y-4">
                  {[
                    { t: "DPDPA-aligned controls", l: "Data handling designed around India's data protection law." },
                    { t: "Data portability", l: "Records downloadable in full, provided on request." },
                    { t: "Primary data centre in India", l: "With the hedge above on backups and supporting services." },
                  ].map(({ t, l }) => (
                    <li key={t}>
                      <p className="text-pine-900 font-medium text-sm">{t}</p>
                      <p className="text-dim-2 text-sm leading-relaxed mt-0.5">{l}</p>
                    </li>
                  ))}
                </ul>
              </FadeIn>

              {/* In progress */}
              <FadeIn delay={0.1} className="bg-surface-50 border border-amber-100 rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-5">
                  <Clock className="w-5 h-5 text-amber-500" />
                  <p className="text-sm font-semibold text-amber-700 uppercase tracking-wider">In progress</p>
                </div>
                <ul className="space-y-4">
                  {[
                    { t: "ABDM-aligned architecture", l: "ABHA ID integration is in active development." },
                  ].map(({ t, l }) => (
                    <li key={t}>
                      <p className="text-pine-900 font-medium text-sm">{t}</p>
                      <p className="text-dim-2 text-sm leading-relaxed mt-0.5">{l}</p>
                    </li>
                  ))}
                </ul>
              </FadeIn>

              {/* Planned */}
              <FadeIn delay={0.15} className="bg-surface-50 border border-stone-200 rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-5">
                  <Calendar className="w-5 h-5 text-dim" />
                  <p className="text-sm font-semibold text-dim uppercase tracking-wider">Planned</p>
                </div>
                <ul className="space-y-4">
                  {[
                    { t: "ABDM certification", l: "Formal certification after pilot completion." },
                    { t: "ISO 27001", l: "Certification work begins after launch." },
                  ].map(({ t, l }) => (
                    <li key={t}>
                      <p className="text-pine-900 font-medium text-sm">{t}</p>
                      <p className="text-dim-2 text-sm leading-relaxed mt-0.5">{l}</p>
                    </li>
                  ))}
                </ul>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* ── S9: FAQ ──────────────────────────────────────────────────── */}
        <section className="py-16 md:py-20 bg-surface-50 border-b border-stone-100">
          <div className="container mx-auto px-4 md:px-8 max-w-3xl">
            <FadeIn className="mb-2">
              <h2 className="text-3xl md:text-4xl font-medium text-pine-900 tracking-tight">Security questions, answered.</h2>
            </FadeIn>
            <FAQ sections={[{ title: "", items: faqData }]} />
          </div>
        </section>

        {/* ── S10: Contact ─────────────────────────────────────────────── */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4 md:px-8 max-w-2xl text-center">
            <FadeIn>
              <h2 className="text-2xl md:text-3xl font-medium text-pine-900 mb-4 tracking-tight">Something we haven't answered?</h2>
              <p className="text-lg text-dim mb-8 leading-relaxed">
                Write to{" "}
                <a href="mailto:hello@fettlemed.com" className="text-pine-600 hover:text-pine-700 underline transition-colors">hello@fettlemed.com</a>.
                {" "}A person replies, not a ticket system.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm font-medium">
                <Link to="/privacy-policy" className="inline-flex items-center justify-center h-11 px-6 border-2 border-pine-900 text-pine-900 hover:bg-pine-50 rounded-xl transition-colors">
                  Read our Privacy Policy
                </Link>
                <Link to="/waitlist" className="inline-flex items-center justify-center h-11 px-6 text-pine-600 hover:text-pine-800 transition-colors">
                  Join the waitlist →
                </Link>
              </div>
            </FadeIn>
          </div>
        </section>

      </div>
    </>
  );
}
