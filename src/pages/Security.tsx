import React from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import {
  ShieldCheck, Key, Settings, Users, Lock, Clock4,
  CheckCircle2, Clock, Download, Eye, FileCheck2,
  Server, XCircle, EyeOff,
} from "lucide-react";
import { SEO } from '@/components/common/SEO';
import { FadeIn } from "@/components/common/FadeIn";
import { DarkTexture } from "@/components/common/Texture/DarkTexture";
import { FAQ } from "@/components/common/FAQ";
import { securityFaqs } from "@/config/faqs";

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
  { icon: EyeOff,     label: "Zero employee access", sub: "No FettleMed staff can read your records" },
  { icon: Lock,       label: "Encrypted end to end", sub: "TLS 1.2+ in transit" },
  { icon: FileCheck2, label: "Audit logging",        sub: "Sensitive actions recorded" },
  { icon: Key,        label: "Multi-factor auth",    sub: "Provider accounts (Planned)" },
  { icon: ShieldCheck,label: "DPDPA-aligned",        sub: "Built on India's data law" },
  { icon: Server,     label: "Private database",     sub: "Locked away from the public internet" },
  { icon: Download,   label: "Your data, portable",  sub: "Yours to download and keep" },
];

/* ── Protection grid: one fact per card ─────────────────────────── */
const PROTECTIONS: { icon: React.ElementType; title: string; fact: string }[] = [
  { icon: EyeOff,     title: "Zero employee access",     fact: "No FettleMed staff member, support, engineering, or leadership, has a path to read your health records." },
  { icon: Settings,   title: "Consent first",            fact: "Nothing is visible until the patient grants access." },
  { icon: Eye,        title: "Granular sharing",         fact: "Share everything, specific records, or a time period." },
  { icon: Clock4,     title: "Time-bound access",        fact: "Expires on its own. Revocable in seconds, from the app." },
  { icon: Lock,       title: "Encrypted everywhere",     fact: "Unreadable without the right keys, which are not accessible to the public." },
  { icon: ShieldCheck,title: "Multi-factor auth (Planned)", fact: "Required on every provider account." },
  { icon: Users,      title: "Roles enforced end to end", fact: "Staff permissions are checked by the system on every request, not just hidden in the interface." },
  { icon: Key,        title: "Login protection",         fact: "Repeat login attempts are blocked, and any active session can be shut down immediately if something looks wrong." },
  { icon: Clock,      title: "Session control",          fact: "Inactive sessions expire. Sensitive actions re-authenticate." },
  { icon: FileCheck2, title: "Audit trail",              fact: "Sensitive actions leave a trace, and the trace itself is protected so no one can quietly rewrite it." },
];

/* ── Our responsibilities ───────────────────────────────────────── */
const RESPONSIBILITIES = [
  { title: "Protect every record",        line: "End-to-end encryption on the platform and the infrastructure." },
  { title: "Log every access",            line: "A tamper-resistant trail, visible to patients and clinics." },
  { title: "Protecting your data is not a feature. It is a commitment.", line: "We build, audit, and improve our security so you never have to worry about it." },
  { title: "Never share data with advertisers", line: "Relevant health content only appears when consent has been given. Your health records never touch an ad network or third-party data broker." },
];


export default function Security() {
  return (
    <>
      <SEO
        title="Security"
        description="Your health records, yours to control. FettleMed data is never sold, shared with advertisers, or disclosed to anyone without your explicit consent."
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
                  Your health records. Yours to control.
                </h1>
                <p className="text-xl text-pine-200 leading-relaxed max-w-2xl mx-auto text-balance">
                  Not our engineers. Not our founders. Not our support team. Your data is never sold, shared with advertisers, or disclosed to anyone without your explicit consent.
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
          <div className="container mx-auto px-4 md:px-8 max-w-5xl">
            <FadeIn className="mb-10">
              <p className="text-xs font-medium tracking-widest uppercase text-pine-600 mb-3">Our security philosophy</p>
              <h2 className="text-2xl md:text-3xl font-medium text-pine-900 tracking-tight">Three rules, before any technology.</h2>
            </FadeIn>

            <div className="grid md:grid-cols-3 gap-4">
              {[
                { n: "01", line: "Every record is encrypted and portable. Your data goes where you go." },
                { n: "02", line: "Every access is logged. You can verify it." },
                { n: "03", line: "No one can access your data without your consent. No exceptions." },
              ].map(({ n, line }, i) => (
                <FadeIn key={n} delay={0.06 * i} className="bg-surface-50 border border-stone-100 rounded-2xl p-6 flex flex-col gap-4">
                  <span className="font-mono text-xs font-semibold text-pine-400 tracking-widest">{n}</span>
                  <p className="text-lg font-medium text-pine-900 tracking-tight leading-snug">{line}</p>
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
              {PROTECTIONS.map(({ icon: Icon, title, fact }, i) => (
                <FadeIn key={title} delay={0.04 * i} className="bg-surface-50 border border-stone-100 rounded-2xl p-5 flex flex-col gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-white border border-pine-100 flex items-center justify-center">
                    <Icon className="w-4 h-4 text-pine-600" />
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

        {/* ── S6.5: Reliability ────────────────────────────────────────── */}
        <section className="py-16 md:py-20 bg-white border-b border-stone-100">
          <div className="container mx-auto px-4 md:px-8 max-w-5xl">
            <FadeIn className="mb-10">
              <p className="text-xs font-medium tracking-widest uppercase text-pine-600 mb-3">Reliability</p>
              <h2 className="text-2xl md:text-3xl font-medium text-pine-900 tracking-tight text-balance">Built to stay up. Built to recover.</h2>
            </FadeIn>

            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { icon: Server,     title: "Always-on records",   fact: "Your data is copied live between two locations. Daily backups kept for a week. The data can't be deleted by accident." },
                { icon: Eye,        title: "24/7 monitoring",     fact: "If anything stops responding or starts erroring, the team is alerted within minutes." },
                { icon: FileCheck2, title: "Reversible releases", fact: "Before every update, we take a fresh backup. If anything goes wrong, we can roll straight back." },
                { icon: Key,        title: "Short-lived access",  fact: "The system that pushes updates never holds a permanent key. Every release uses a temporary one, specific to that release." },
              ].map(({ icon: Icon, title, fact }, i) => (
                <FadeIn key={title} delay={0.04 * i} className="bg-surface-50 border border-stone-100 rounded-2xl p-5 flex flex-col gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-white border border-pine-100 flex items-center justify-center">
                    <Icon className="w-4 h-4 text-pine-600" />
                  </div>
                  <h3 className="text-pine-900 font-medium tracking-tight">{title}</h3>
                  <p className="text-dim-2 text-sm leading-relaxed">{fact}</p>
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
                <p className="text-dim-2 text-sm leading-relaxed">Your data is stored in India. The database sits in a private network with no public access. Certain backup or supporting services may operate in other regions under contractual data-protection obligations.</p>
              </FadeIn>
            </div>

            {/* Advertising commitment - two-part: what we never do vs what consent means */}
            <FadeIn delay={0.2} className="mt-4 relative overflow-hidden bg-pine-900 rounded-2xl p-6 md:p-8">
              <DarkTexture glow="none" />
              <div className="relative z-10 flex flex-col gap-6">
                <div className="flex flex-col md:flex-row gap-6 md:gap-10">
                  {/* Never column */}
                  <div className="flex-1">
                    <p className="text-pine-400 text-xs font-semibold uppercase tracking-widest mb-3">Never</p>
                    <ul className="space-y-2.5">
                      {[
                        "Shared with advertisers or data brokers",
                        "Sold to anyone, for any reason",
                        "Used to train AI models",
                      ].map((item) => (
                        <li key={item} className="flex items-start gap-2.5 text-pine-100 font-medium text-sm">
                          <XCircle className="w-4 h-4 text-pine-400 shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="hidden md:block w-px bg-pine-700" />

                  {/* Consent-based column */}
                  <div className="flex-1">
                    <p className="text-pine-400 text-xs font-semibold uppercase tracking-widest mb-3">Only with your explicit consent</p>
                    <ul className="space-y-2.5">
                      {[
                        "Relevant health content may be shown - you choose whether to see it",
                        "Consent is opt-in, not buried in terms",
                        "You can withdraw consent at any time, instantly",
                      ].map((item) => (
                        <li key={item} className="flex items-start gap-2.5 text-pine-100 font-medium text-sm">
                          <CheckCircle2 className="w-4 h-4 text-pine-300 shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <p className="text-pine-400 text-xs font-medium border-t border-pine-800 pt-4">
                  Your records never leave FettleMed for advertising, profiling, or model training. There is no exception buried in the terms.
                </p>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ── S9: FAQ ──────────────────────────────────────────────────── */}
        <section className="py-16 md:py-20 bg-surface-50 border-b border-stone-100">
          <div className="container mx-auto px-4 md:px-8 max-w-3xl">
            <FadeIn className="mb-2">
              <h2 className="text-3xl md:text-4xl font-medium text-pine-900 tracking-tight">Security questions, answered.</h2>
            </FadeIn>
            <FAQ sections={securityFaqs} />
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
