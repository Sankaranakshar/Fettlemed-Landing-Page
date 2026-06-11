import React from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { SEO } from '@/components/common/SEO';
import {
  Mail, MapPin, Stethoscope, Code2, ArrowRight, Quote,
  Lock, KeyRound, Download, ShieldCheck, Feather,
  Smartphone, Building2, CheckCircle2,
} from "lucide-react";
import { FadeIn } from "@/components/common/FadeIn";
import { Button } from "@/components/common/Button";
import { DarkTexture } from "@/components/common/Texture/DarkTexture";
import { PulseLine } from "@/components/common/PulseLine";
import { useWaitlist } from "@/contexts/WaitlistContext";

/* ── Principles: five cards instead of belief paragraphs ─────────── */
const PRINCIPLES = [
  { Icon: Lock,        title: "Privacy first",      line: "Nothing is visible until the patient allows it." },
  { Icon: KeyRound,    title: "Patient ownership",  line: "The record belongs to the person it describes." },
  { Icon: Download,    title: "No lock-in",         line: "Everything is yours to download and keep." },
  { Icon: ShieldCheck, title: "Security",           line: "End-to-end encrypted, every access logged." },
  { Icon: Feather,     title: "Simplicity",         line: "If it adds a step, it doesn't ship." },
];

/* ── Timeline: origin to rollout ─────────────────────────────────── */
const TIMELINE = [
  { stage: "The idea",  title: "Seven years in the making", line: "Two clinicians, watching records fail the patients in front of them.", tone: "past" },
  { stage: "2025",      title: "The decision",              line: "We committed to building it.",                                          tone: "past" },
  { stage: "Now",       title: "Doctor & clinic pilot",     line: "Refined against real consultations and real clinic days.",            tone: "live" },
  { stage: "Next",      title: "Patient onboarding",        line: "The app joins a connected system, not an empty one.",                 tone: "progress" },
  { stage: "Then",      title: "Wider rollout",             line: "Access widens as the experience proves itself.",                       tone: "planned" },
];

const toneCls: Record<string, string> = {
  past:     "bg-stone-50 border-stone-200 text-dim",
  live:     "bg-pine-50 border-pine-200 text-pine-700",
  progress: "bg-amber-50 border-amber-200 text-amber-700",
  planned:  "bg-stone-50 border-stone-200 text-dim",
};

export default function About() {
  const { openWaitlist } = useWaitlist();

  return (
    <>
      <SEO
        title="About"
        description="FettleMed was built on one belief: health data belongs to the patient. Meet the clinical founders, read our origin story, and learn how we're building India's connected health record layer."
      />
      <div className="flex flex-col w-full bg-surface-50">

        {/* ── S1: Hero ──────────────────────────────────────────────────── */}
        <section className="relative pt-16 pb-16 md:pt-24 md:pb-24 bg-pine-900 text-white overflow-hidden">
          <DarkTexture />
          <div className="container mx-auto px-4 md:px-8 max-w-4xl relative z-10">
            <FadeIn eager>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-pine-700 bg-pine-800/50 text-xs font-medium text-pine-300 uppercase tracking-widest mb-8">
                Doctors and builders, in one company
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.05] mb-6 tracking-tight text-balance">
                We are building the missing health record layer for India.
              </h1>
              <p className="text-xl md:text-2xl text-pine-200 leading-relaxed max-w-2xl text-balance">
                One record that follows the patient. With the patient holding the key.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 mt-10">
                <Button
                  variant="animated"
                  size="lg"
                  onClick={() => openWaitlist()}
                  className="h-12 px-8 text-base bg-white text-pine-900 hover:bg-pine-50 rounded-xl font-medium shadow-lg focus-visible:ring-2 focus-visible:ring-pine-600 focus-visible:ring-offset-2"
                >
                  Join the Waitlist
                </Button>
                <a
                  href="#team"
                  className="inline-flex items-center justify-center h-12 px-8 text-base border-2 border-pine-600 text-white hover:bg-pine-800 rounded-xl font-medium transition-colors"
                >
                  Meet the founders
                </a>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ── S2: The story, in three acts ─────────────────────────────── */}
        <section className="py-16 md:py-24 bg-white border-b border-stone-100">
          <div className="container mx-auto px-4 md:px-8 max-w-3xl">
            <FadeIn>
              <p className="text-xs font-medium tracking-widest uppercase text-pine-600 mb-10">Why FettleMed exists</p>
            </FadeIn>

            {/* Act 1: the problem */}
            <FadeIn>
              <p className="text-2xl md:text-4xl font-medium text-pine-900 leading-snug tracking-tight text-balance">
                A patient's history is scattered across clinics, labs, folders, and memory.
              </p>
            </FadeIn>

            {/* Act 2: the vision, rising line by line */}
            <div className="text-2xl md:text-4xl font-medium leading-snug tracking-tight mt-10 mb-14">
              {[
                { text: "It should follow them.", cls: "text-pine-900" },
                { text: "Owned by the patient. Shared only with consent.", cls: "text-pine-600" },
              ].map(({ text, cls }, i) => (
                <span key={i} className="block overflow-hidden">
                  <motion.span
                    initial={{ y: '105%' }}
                    whileInView={{ y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ delay: 0.1 + i * 0.12, duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
                    className={`block text-balance ${cls}`}
                  >
                    {text}
                  </motion.span>
                </span>
              ))}
            </div>

            {/* Act 3: the ecosystem, drawn not described */}
            <FadeIn delay={0.1}>
              <div className="relative">
                <PulseLine className="hidden sm:block absolute top-7 left-[12%] right-[12%] z-0" interval={6} />
                <div className="relative z-10 grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    { Icon: Smartphone,  label: "Patients", to: "/patient-app" },
                    { Icon: Stethoscope, label: "Doctors",  to: "/doctor-portal" },
                    { Icon: Building2,   label: "Clinics",  to: "/clinic-management" },
                  ].map(({ Icon, label, to }) => (
                    <Link
                      key={label}
                      to={to}
                      className="group flex items-center justify-center gap-3 bg-surface-50 border border-stone-200 rounded-2xl py-4 px-5 hover:border-pine-300 hover:bg-pine-50/50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pine-600"
                    >
                      <span className="w-9 h-9 rounded-xl bg-white border border-pine-100 flex items-center justify-center shrink-0">
                        <Icon className="w-4 h-4 text-pine-600" />
                      </span>
                      <span className="font-medium text-pine-900">{label}</span>
                      <ArrowRight className="w-4 h-4 text-pine-400 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </Link>
                  ))}
                </div>
              </div>
              <p className="text-dim text-sm mt-4 text-center sm:text-left">One consent-controlled record, moving between all three.</p>
            </FadeIn>
          </div>
        </section>

        {/* ── S3: Principles ───────────────────────────────────────────── */}
        <section className="py-16 md:py-24 bg-surface-50 border-b border-stone-100">
          <div className="container mx-auto px-4 md:px-8 max-w-5xl">
            <FadeIn className="mb-10">
              <p className="text-xs font-medium tracking-widest uppercase text-pine-600 mb-4">Principles</p>
              <h2 className="text-3xl md:text-4xl font-medium text-pine-900 tracking-tight text-balance">
                Five rules every feature has to pass.
              </h2>
            </FadeIn>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {PRINCIPLES.map(({ Icon, title, line }, i) => (
                <FadeIn key={title} delay={0.05 + i * 0.06} className="bg-white border border-stone-200 rounded-2xl p-6 flex flex-col gap-3 shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-pine-50 border border-pine-100 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-pine-600" />
                  </div>
                  <h3 className="text-pine-900 font-medium text-lg tracking-tight">{title}</h3>
                  <p className="text-dim-2 text-sm leading-relaxed">{line}</p>
                </FadeIn>
              ))}
              {/* The standard, as the sixth tile */}
              <FadeIn delay={0.35} className="bg-pine-900 rounded-2xl p-6 flex flex-col justify-center">
                <p className="text-pine-100 font-medium leading-relaxed">
                  Does it make someone's health journey easier, safer, or more dignified?
                </p>
                <p className="text-pine-300 text-sm mt-2">If not, we don't build it.</p>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* ── S4: Team ─────────────────────────────────────────────────── */}
        <section id="team" className="py-16 md:py-24 bg-white border-b border-stone-100 scroll-mt-24">
          <div className="container mx-auto px-4 md:px-8 max-w-5xl">
            <FadeIn className="mb-12 max-w-3xl">
              <p className="text-xs font-medium tracking-widest uppercase text-pine-600 mb-4">Who we are</p>
              <h2 className="text-3xl md:text-5xl font-medium text-pine-900 mb-4 tracking-tight">Founded by clinicians and builders.</h2>
              <p className="text-lg text-dim">
                Nearly seventy combined years of clinical practice, in the same room as the engineers.
              </p>
            </FadeIn>

            {/* Clinical Founders */}
            <FadeIn delay={0.1}>
              <div className="flex items-center gap-2 mb-8">
                <Stethoscope className="w-4 h-4 text-pine-600" />
                <p className="text-xs font-medium tracking-widest uppercase text-pine-600">Clinical Founders</p>
              </div>
              <div className="grid md:grid-cols-2 gap-10 mb-14">

                <div className="flex flex-col group">
                  <div className="w-full aspect-[4/3] overflow-hidden rounded-2xl bg-pine-900 mb-6 flex items-center justify-center" style={{ perspective: 800 }}>
                    <span className="text-6xl font-medium text-pine-300 tracking-widest select-none transition-transform duration-500 group-hover:[transform:rotateY(14deg)]">SS</span>
                  </div>
                  <h3 className="text-2xl font-medium text-pine-900 mb-1">Dr. Sriram Shankar</h3>
                  <p className="text-pine-600 font-medium mb-1">Co-founder &amp; Chief Medical Officer</p>
                  <p className="text-dim text-sm font-medium mb-5">MBBS · FRCS (England) · FAMS (Singapore)</p>
                  <p className="text-dim-2 leading-relaxed">Senior Consultant Cardiothoracic Surgeon: nearly four decades across leading hospitals in Singapore and Southeast Asia, including KK Women's and Children's Hospital. Pioneer in minimally invasive cardiac surgery and paediatric heart-surgery programmes. Every clinical feature has been through his hands.</p>
                </div>

                <div className="flex flex-col group">
                  <div className="w-full aspect-[4/3] overflow-hidden rounded-2xl bg-pine-900 mb-6 flex items-center justify-center" style={{ perspective: 800 }}>
                    <span className="text-6xl font-medium text-pine-300 tracking-widest select-none transition-transform duration-500 group-hover:[transform:rotateY(14deg)]">BS</span>
                  </div>
                  <h3 className="text-2xl font-medium text-pine-900 mb-1">Dr. Bhavani Sriram</h3>
                  <p className="text-pine-600 font-medium mb-1">Co-founder &amp; Chief Clinical Officer</p>
                  <p className="text-dim text-sm font-medium mb-5">MBBS · MRCP (UK), Paediatrics</p>
                  <p className="text-dim-2 leading-relaxed">Recognised as a Singapore Silent Hero for pioneering care for adults with intellectual disabilities. She makes sure FettleMed's consent model works for every patient, not just the digitally confident.</p>
                </div>
              </div>
            </FadeIn>

            {/* Origin quote */}
            <FadeIn delay={0.15}>
              <figure className="bg-pine-50 border border-pine-100 rounded-3xl p-8 md:p-12 mb-14">
                <Quote className="w-8 h-8 text-pine-300 mb-5" />
                <blockquote className="text-2xl md:text-3xl font-medium text-pine-900 leading-snug tracking-tight text-balance mb-5">
                  "The problem isn't money or access to doctors. It's the fragmentation of information."
                </blockquote>
                <figcaption className="text-pine-600 font-medium">
                  Dr. Sriram Shankar, on why FettleMed exists
                </figcaption>
              </figure>
            </FadeIn>

            {/* Core Team */}
            <FadeIn delay={0.2}>
              <div className="flex items-center gap-2 mb-6">
                <Code2 className="w-4 h-4 text-pine-600" />
                <p className="text-xs font-medium tracking-widest uppercase text-pine-600">The Builders</p>
              </div>
              <div className="grid md:grid-cols-2 gap-4">

                <div className="flex items-start gap-4 bg-surface-50 border border-stone-100 rounded-2xl p-5">
                  <div className="w-10 h-10 rounded-full bg-pine-900 flex items-center justify-center shrink-0">
                    <span className="text-[11px] font-semibold text-pine-100 tracking-wide">AS</span>
                  </div>
                  <div>
                    <h3 className="text-base font-medium text-pine-900">Akshar Sankaran Jaikumar</h3>
                    <p className="text-pine-600 text-sm font-medium mb-1">Co-founder &amp; CEO</p>
                    <p className="text-dim text-sm leading-relaxed">Turns what the clinical founders see in the consultation room into what gets built.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-surface-50 border border-stone-100 rounded-2xl p-5">
                  <div className="w-10 h-10 rounded-full bg-pine-900 flex items-center justify-center shrink-0">
                    <span className="text-[11px] font-semibold text-pine-100 tracking-wide">G</span>
                  </div>
                  <div>
                    <h3 className="text-base font-medium text-pine-900">Gurubalaji</h3>
                    <p className="text-pine-600 text-sm font-medium mb-1">Lead Developer</p>
                    <p className="text-dim text-sm leading-relaxed">Architecture, security, and the code running in production.</p>
                  </div>
                </div>

              </div>
            </FadeIn>
          </div>
        </section>

        {/* ── S5: Timeline ─────────────────────────────────────────────── */}
        <section className="py-16 md:py-24 bg-surface-50 border-b border-stone-100">
          <div className="container mx-auto px-4 md:px-8 max-w-5xl">
            <FadeIn className="mb-10">
              <p className="text-xs font-medium tracking-widest uppercase text-pine-600 mb-4">The road</p>
              <h2 className="text-3xl md:text-4xl font-medium text-pine-900 tracking-tight text-balance">
                Seven years of thinking. Built deliberately.
              </h2>
            </FadeIn>

            <div className="relative grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {/* Connecting line, fills as the section enters (desktop) */}
              <div className="hidden lg:block absolute top-9 left-[10%] right-[10%] h-px bg-stone-200 overflow-hidden" aria-hidden="true">
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 1.4, ease: [0.23, 1, 0.32, 1] }}
                  style={{ transformOrigin: 'left' }}
                  className="absolute inset-0 bg-pine-400"
                />
              </div>
              {TIMELINE.map(({ stage, title, line, tone }, i) => (
                <FadeIn key={stage} delay={0.05 + i * 0.06}>
                  <div className="h-full bg-white border border-stone-100 rounded-2xl p-5 relative z-10">
                    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold mb-3 border ${toneCls[tone]}`}>
                      {stage}
                    </span>
                    <h3 className="text-pine-900 font-medium mb-1.5 leading-snug">{title}</h3>
                    <p className="text-dim-2 text-sm leading-relaxed">{line}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* ── S6: Trust strip ──────────────────────────────────────────── */}
        <section className="py-6 bg-white border-b border-stone-100">
          <div className="container mx-auto px-6 max-w-5xl flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {[
              "End-to-end encrypted",
              "Consent-first sharing",
              "DPDPA-aligned controls",
            ].map((text) => (
              <span key={text} className="flex items-center gap-2 text-dim text-sm font-medium">
                <CheckCircle2 className="w-4 h-4 text-pine-600 shrink-0" /> {text}
              </span>
            ))}
            <Link to="/security" className="flex items-center gap-1.5 text-pine-600 hover:text-pine-800 text-sm font-medium transition-colors">
              How we protect your data <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        {/* ── S7: Call to action ───────────────────────────────────────── */}
        <section className="py-16 md:py-24 bg-pine-900 text-white overflow-hidden relative">
          <DarkTexture />
          <div className="container mx-auto px-4 md:px-8 max-w-4xl relative z-10">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-medium leading-tight mb-10 tracking-tight text-balance">
                Build the connected health record with us.
              </h2>

              <div className="grid sm:grid-cols-3 gap-4 mb-10">
                {[
                  { role: "Doctor" as const, label: "For doctors", body: "Practice with the full picture in front of you." },
                  { role: "Clinic" as const, label: "For clinics", body: "Registration, records, and operations in one system." },
                  { role: "Patients & Caregivers" as const, label: "For patients & caregivers", body: "Own your history. Decide who sees it." },
                ].map(({ role, label, body }) => (
                  <button
                    key={label}
                    onClick={() => openWaitlist(role)}
                    className="group text-left bg-pine-800/50 border border-pine-700 rounded-2xl p-6 hover:bg-pine-800 hover:border-pine-600 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pine-400 focus-visible:ring-offset-2 focus-visible:ring-offset-pine-900"
                  >
                    <p className="text-white font-medium mb-2 flex items-center gap-1.5">
                      {label}
                      <ArrowRight className="w-4 h-4 text-pine-300 -translate-x-1 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all" />
                    </p>
                    <p className="text-pine-300 text-sm leading-relaxed">{body}</p>
                  </button>
                ))}
              </div>

              <Button
                variant="animated"
                size="lg"
                onClick={() => openWaitlist()}
                className="h-12 px-10 text-base bg-white text-pine-900 hover:bg-pine-50 rounded-xl font-medium shadow-lg focus-visible:ring-2 focus-visible:ring-pine-600 focus-visible:ring-offset-2 focus-visible:ring-offset-pine-900"
              >
                Join the Waitlist
              </Button>
            </FadeIn>
          </div>
        </section>

        {/* ── S8: Get in touch ─────────────────────────────────────────── */}
        <section id="contact" className="py-16 md:py-20 bg-surface-50 border-b border-stone-100 scroll-mt-24">
          <FadeIn>
            <div className="container mx-auto px-4 md:px-8 max-w-4xl">
              <div className="mb-10">
                <p className="text-xs font-medium tracking-widest uppercase text-pine-600 mb-4">Get in touch</p>
                <h2 className="text-3xl md:text-4xl font-medium text-pine-900 tracking-tight">Talk to a person, not a ticket system.</h2>
              </div>

              {/* One compact panel: two channels and the office */}
              <div className="bg-white border border-stone-100 rounded-2xl divide-y divide-stone-100">
                <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-stone-100">
                  <div className="p-6 flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-pine-50 border border-pine-100 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-pine-600" />
                    </div>
                    <div>
                      <p className="text-dim text-xs font-medium uppercase tracking-wider mb-1">Partnerships &amp; investors</p>
                      <a href="mailto:partners@fettlemed.com" className="text-pine-900 hover:text-pine-600 font-medium transition-colors">partners@fettlemed.com</a>
                    </div>
                  </div>
                  <div className="p-6 flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-pine-50 border border-pine-100 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-pine-600" />
                    </div>
                    <div>
                      <p className="text-dim text-xs font-medium uppercase tracking-wider mb-1">Everything else</p>
                      <a href="mailto:hello@fettlemed.com" className="text-pine-900 hover:text-pine-600 font-medium transition-colors">hello@fettlemed.com</a>
                    </div>
                  </div>
                </div>
                <div className="p-6 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-pine-50 border border-pine-100 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-pine-600" />
                  </div>
                  <div>
                    <p className="text-dim text-xs font-medium uppercase tracking-wider mb-1">Office</p>
                    <address className="text-pine-900 font-medium leading-relaxed not-italic text-sm">
                      NamNalam Health Tech Private Limited · INNOV8 SKCL Tech Square, 2nd Floor, No 14 SP, SIDCO T.V.K Industrial Estate, Guindy, Chennai - 600032, Tamil Nadu, India
                    </address>
                  </div>
                </div>
              </div>

            </div>
          </FadeIn>
        </section>

      </div>
    </>
  );
}
