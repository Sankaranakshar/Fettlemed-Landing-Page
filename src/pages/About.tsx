import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useSpring, useTransform, useReducedMotion, MotionValue } from "motion/react";
import { SEO } from '@/components/common/SEO';
import {
  Mail, MapPin, Stethoscope, Code2, ArrowRight, Quote,
  Lock, KeyRound, Download, ShieldCheck, Feather, CheckCircle2,
  FlaskConical, Pill, Receipt, CalendarDays, Syringe, HeartPulse,
} from "lucide-react";
import { FadeIn } from "@/components/common/FadeIn";
import { Button } from "@/components/common/Button";
import { DarkTexture } from "@/components/common/Texture/DarkTexture";
import { useWaitlist } from "@/contexts/WaitlistContext";

/* ── Principles: five cards instead of belief paragraphs ─────────── */
const PRINCIPLES = [
  { Icon: Lock,        title: "Privacy first",      line: "Nothing is visible until the patient allows it." },
  { Icon: KeyRound,    title: "Patient ownership",  line: "The record belongs to the person it describes." },
  { Icon: Download,    title: "No lock-in",         line: "Everything is yours to download and keep." },
  { Icon: ShieldCheck, title: "Security",           line: "End-to-end encrypted, every access logged." },
  { Icon: Feather,     title: "Simplicity",         line: "If it adds a step, it doesn't ship." },
];

/* ── Chaos to clarity: scattered records that snap into one ring ──
   Each card has a scattered pose (sx, sy, sr) and a slot in the
   final stack (fy). Scroll drives drift apart, then the snap. */
const CONSTELLATION: { Icon: React.ElementType; title: string; sub: string; sx: number; sy: number; sr: number; fy: number }[] = [
  { Icon: FlaskConical, title: "Lab report",   sub: "HbA1c · 6.1%",    sx: -105, sy: -200, sr: -10, fy: -95 },
  { Icon: Pill,         title: "Prescription", sub: "Metformin 500mg", sx:   95, sy: -150, sr:   8, fy: -57 },
  { Icon: Receipt,      title: "Hospital bill",sub: "Paper file, 2023",sx: -110, sy:  -40, sr:   6, fy: -19 },
  { Icon: CalendarDays, title: "Appointment",  sub: "Dr. Rao · 9:30",  sx:  105, sy:   30, sr:  -7, fy:  19 },
  { Icon: Syringe,      title: "Vaccination",  sub: "Tdap booster",    sx:  -80, sy:  160, sr:   9, fy:  57 },
  { Icon: HeartPulse,   title: "Vitals",       sub: "BP 124/82",       sx:   90, sy:  220, sr:  -6, fy:  95 },
];

function ConstellationCard({ p, card }: { p: MotionValue<number>; card: (typeof CONSTELLATION)[number]; key?: React.Key }) {
  const { Icon, title, sub, sx, sy, sr, fy } = card;
  // drift apart through 0.35, then snap to the slot by 0.62
  const x      = useTransform(p, [0, 0.35, 0.62], [sx, sx * 1.12, 0]);
  const y      = useTransform(p, [0, 0.35, 0.62], [sy, sy * 1.12, fy]);
  const rotate = useTransform(p, [0, 0.35, 0.62], [sr, sr * 1.3, 0]);
  const scale  = useTransform(p, [0.35, 0.62], [1, 0.92]);
  return (
    <motion.div
      style={{ x, y, rotate, scale }}
      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-40 bg-white/95 rounded-xl shadow-lg px-3 py-2 flex items-center gap-2.5"
    >
      <span className="w-7 h-7 rounded-lg bg-pine-50 border border-pine-100 flex items-center justify-center shrink-0">
        <Icon className="w-3.5 h-3.5 text-pine-600" />
      </span>
      <span className="min-w-0">
        <span className="block text-[11px] font-semibold text-pine-900 leading-tight truncate">{title}</span>
        <span className="block text-[10px] font-medium text-dim leading-tight truncate">{sub}</span>
      </span>
    </motion.div>
  );
}

function ChaosToClarity() {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const p = useSpring(scrollYProgress, { stiffness: 90, damping: 24, mass: 0.4 });

  // Headline 1 in, hold, out; headline 2 in on the snap
  const h1Opacity   = useTransform(p, [0, 0.08, 0.34, 0.46], [0, 1, 1, 0]);
  const h1Y         = useTransform(p, [0.34, 0.46], [0, -24]);
  const h2Opacity   = useTransform(p, [0.58, 0.72], [0, 1]);
  const h2Y         = useTransform(p, [0.58, 0.72], [24, 0]);
  // The ring arrives just before the cards snap into it
  const ringOpacity = useTransform(p, [0.36, 0.5], [0, 1]);
  const ringScale   = useTransform(p, [0.36, 0.56], [0.55, 1]);

  if (reduced) {
    return (
      <section className="relative bg-pine-900 text-white overflow-hidden py-20">
        <DarkTexture />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <p className="text-xs font-medium tracking-widest uppercase text-pine-300 mb-6">Why FettleMed exists</p>
          <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-balance mb-4">So we built the center of gravity.</h2>
          <p className="text-pine-200 text-lg max-w-xl mx-auto">One record, owned by you, shared only with consent.</p>
        </div>
      </section>
    );
  }

  return (
    <section ref={ref} className="relative h-[320vh] bg-pine-900">
      <div className="sticky top-0 h-screen overflow-hidden text-white">
        <DarkTexture />

        {/* eyebrow */}
        <p className="absolute top-10 left-1/2 -translate-x-1/2 text-xs font-medium tracking-widest uppercase text-pine-300 z-20 whitespace-nowrap">
          Why FettleMed exists
        </p>

        {/* the spine: a vertical capsule of light the constellation settles onto */}
        <motion.div
          style={{ opacity: ringOpacity, scaleY: ringScale }}
          aria-hidden="true"
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-[260px] rounded-full bg-pine-400/60 shadow-[0_0_70px_14px_rgba(76,175,143,0.3)]"
        />

        {/* scattered records */}
        <div aria-hidden="true">
          {CONSTELLATION.map((card) => (
            <ConstellationCard key={card.title} p={p} card={card} />
          ))}
        </div>

        {/* headline 1: the problem */}
        <motion.div
          style={{ opacity: h1Opacity, y: h1Y }}
          className="absolute inset-x-0 top-1/2 -translate-y-1/2 z-10 text-center px-6 pointer-events-none"
        >
          <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-balance leading-tight [text-shadow:0_2px_24px_rgba(8,35,28,0.9)]">
            Your health history is scattered.
          </h2>
        </motion.div>

        {/* headline 2: the payoff, beneath the ring */}
        <motion.div
          style={{ opacity: h2Opacity, y: h2Y }}
          className="absolute inset-x-0 bottom-[10vh] z-10 text-center px-6 pointer-events-none"
        >
          <h2 className="text-2xl md:text-4xl font-medium tracking-tight text-balance leading-tight">
            So we built the center of gravity.
          </h2>
          <p className="text-pine-300 text-sm md:text-base font-medium mt-3 max-w-md mx-auto">
            One record, owned by you, shared only with consent.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

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
                  Join the Pilot
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

        {/* ── S2: The story, chaos to clarity ───────────────────────────── */}
        <ChaosToClarity />

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
                  <div className="w-full aspect-[4/3] overflow-hidden rounded-2xl mb-6">
                    <img src="/dr-sriram-shankar.jpg" alt="Dr. Sriram Shankar" className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <h3 className="text-2xl font-medium text-pine-900 mb-1">Dr. Sriram Shankar</h3>
                  <p className="text-pine-600 font-medium mb-1">Co-founder &amp; Chief Medical Officer</p>
                  <p className="text-dim text-sm font-medium mb-5">MBBS · FRCS (England) · FAMS (Singapore)</p>
                  <p className="text-dim-2 leading-relaxed">Senior Consultant Cardiothoracic Surgeon: nearly four decades across leading hospitals in Singapore and Southeast Asia, including KK Women's and Children's Hospital. Pioneer in minimally invasive cardiac surgery and paediatric heart-surgery programmes. Every clinical feature has been through his hands.</p>
                </div>

                <div className="flex flex-col group">
                  <div className="w-full aspect-[4/3] overflow-hidden rounded-2xl mb-6">
                    <img src="/dr-bhavani-sriram.jpg" alt="Dr. Bhavani Sriram" className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105" />
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
                  Dr. Sriram Shankar, Co-founder
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
                Join the Pilot
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
