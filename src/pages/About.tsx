import React from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { SEO } from '@/components/common/SEO';
import { Mail, MapPin, Stethoscope, Code2, ArrowRight, Quote } from "lucide-react";
import { FadeIn } from "@/components/common/FadeIn";
import { Button } from "@/components/common/Button";
import { DarkTexture } from "@/components/common/Texture/DarkTexture";
import { useWaitlist } from "@/contexts/WaitlistContext";

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
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.05] mb-8 tracking-tight text-balance">
                We are building the missing health record layer for India.
              </h1>
              <p className="text-xl md:text-2xl text-pine-200 leading-relaxed max-w-3xl text-balance">
                India has world-class doctors and a phone in almost every hand. What it does not have is a way for a patient's health history to follow them from one clinic to the next. FettleMed is the layer that connects it, with the patient holding the key.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 mt-12">
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

        {/* ── S2: Why this matters, in one breath ──────────────────────── */}
        <section className="py-16 md:py-20 bg-white border-b border-stone-100">
          <div className="container mx-auto px-4 md:px-8 max-w-3xl">
            <FadeIn>
              <p className="text-xs font-medium tracking-widest uppercase text-pine-600 mb-4">Why this matters</p>
              <p className="text-2xl md:text-3xl font-medium text-pine-900 leading-snug tracking-tight text-balance">
                The problem is not money or access to care. It is the fragmentation of information. FettleMed exists to fix that one thing, properly.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* ── S3: What we believe ──────────────────────────────────────── */}
        <section className="py-16 md:py-24 bg-pine-900 text-white overflow-hidden relative">
          <DarkTexture glow="center" />
          <div className="container mx-auto px-4 md:px-8 max-w-3xl relative z-10">
            <FadeIn>
              <p className="text-xs font-medium tracking-widest uppercase text-pine-300 mb-8">What we believe</p>
              {/* Masked-line reveal: each phrase rises from under a clip */}
              <div className="text-2xl md:text-3xl font-medium leading-snug tracking-tight mb-10">
                {[
                  "Your health belongs to you.",
                  "Not to a filing cabinet, not to the last clinic you visited, not to us.",
                ].map((line, i) => (
                  <span key={i} className="block overflow-hidden">
                    <motion.span
                      initial={{ y: '105%' }}
                      whileInView={{ y: 0 }}
                      viewport={{ once: true, margin: "-60px" }}
                      transition={{ delay: 0.1 + i * 0.12, duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
                      className="block text-balance"
                    >
                      {line}
                    </motion.span>
                  </span>
                ))}
              </div>
              <div className="space-y-6 text-lg text-pine-100 leading-relaxed">
                <p>
                  We exist because health decisions matter, for the patient managing a chronic condition, the parent tracking a child's vaccinations, the doctor who needs the full picture before they can truly help. When the right information reaches the right person at the right moment, care gets better. That is what we are here to enable.
                </p>
                <p>
                  We hold ourselves to a simple standard: does this make someone's health journey easier, safer, or more dignified? If not, we don't build it. Every feature in FettleMed was designed around that question. Every feature we chose not to build failed it.
                </p>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ── S4: Founders & Leadership ────────────────────────────────── */}
        <section id="team" className="py-16 md:py-24 bg-white border-b border-stone-100 scroll-mt-24">
          <div className="container mx-auto px-4 md:px-8 max-w-5xl">
            <FadeIn className="mb-12 max-w-3xl">
              <p className="text-xs font-medium tracking-widest uppercase text-pine-600 mb-4">Who we are</p>
              <h2 className="text-3xl md:text-5xl font-medium text-pine-900 mb-5 tracking-tight">Founded by clinicians and builders.</h2>
              <p className="text-lg text-dim font-medium">
                FettleMed is led by two surgeons with nearly seventy combined years of clinical practice, working alongside the engineers building the platform. The medicine and the code are decided in the same room.
              </p>
            </FadeIn>

            {/* Clinical Founders */}
            <FadeIn delay={0.1}>
              <div className="flex items-center gap-2 mb-8">
                <Stethoscope className="w-4 h-4 text-pine-600" />
                <p className="text-xs font-medium tracking-widest uppercase text-pine-600">Clinical Founders</p>
              </div>
              <div className="grid md:grid-cols-2 gap-10 mb-14">

                {/* Dr. Sriram Shankar */}
                <div className="flex flex-col group">
                  <div className="w-full aspect-[4/3] overflow-hidden rounded-2xl bg-pine-900 mb-6 flex items-center justify-center" style={{ perspective: 800 }}>
                    <span className="text-6xl font-medium text-pine-300 tracking-widest select-none transition-transform duration-500 group-hover:[transform:rotateY(14deg)]">SS</span>
                  </div>
                  <h3 className="text-2xl font-medium text-pine-900 mb-1">Dr. Sriram Shankar</h3>
                  <p className="text-pine-600 font-medium mb-1">Co-founder &amp; Chief Medical Officer</p>
                  <p className="text-dim text-sm font-medium mb-5">MBBS · FRCS (England) · FAMS (Singapore)</p>
                  <p className="text-dim-2 leading-relaxed">Senior Consultant Cardiothoracic Surgeon with nearly four decades of practice across leading hospitals in Singapore and Southeast Asia, including KK Women's and Children's Hospital. A pioneer in minimally invasive cardiac surgery and in establishing paediatric heart-surgery programmes. His role in FettleMed is not advisory. Every clinical feature has been through his hands.</p>
                </div>

                {/* Dr. Bhavani Sriram */}
                <div className="flex flex-col group">
                  <div className="w-full aspect-[4/3] overflow-hidden rounded-2xl bg-pine-900 mb-6 flex items-center justify-center" style={{ perspective: 800 }}>
                    <span className="text-6xl font-medium text-pine-300 tracking-widest select-none transition-transform duration-500 group-hover:[transform:rotateY(14deg)]">BS</span>
                  </div>
                  <h3 className="text-2xl font-medium text-pine-900 mb-1">Dr. Bhavani Sriram</h3>
                  <p className="text-pine-600 font-medium mb-1">Co-founder &amp; Chief Clinical Officer</p>
                  <p className="text-dim text-sm font-medium mb-5">MBBS · MRCP (UK), Paediatrics</p>
                  <p className="text-dim-2 leading-relaxed">Recognised as a Singapore Silent Hero for her work pioneering care for adults with intellectual disabilities. Patient empowerment is not a brand value for her. It is two decades of practice. She ensures FettleMed's consent model and patient-facing design work for every patient, not just the digitally confident.</p>
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
                    <p className="text-dim text-sm leading-relaxed">Akshar runs the product and business. He translates what the clinical founders see in the consultation room into what gets built.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-surface-50 border border-stone-100 rounded-2xl p-5">
                  <div className="w-10 h-10 rounded-full bg-pine-900 flex items-center justify-center shrink-0">
                    <span className="text-[11px] font-semibold text-pine-100 tracking-wide">G</span>
                  </div>
                  <div>
                    <h3 className="text-base font-medium text-pine-900">Gurubalaji</h3>
                    <p className="text-pine-600 text-sm font-medium mb-1">Lead Developer</p>
                    <p className="text-dim text-sm leading-relaxed">Gurubalaji built the platform. Architecture, security, and the code running in production.</p>
                  </div>
                </div>

              </div>
            </FadeIn>
          </div>
        </section>

        {/* ── S5: Where we are today ───────────────────────────────────── */}
        <section className="py-16 md:py-24 bg-white border-b border-stone-100">
          <div className="container mx-auto px-4 md:px-8 max-w-4xl">
            <FadeIn className="mb-10">
              <p className="text-xs font-medium tracking-widest uppercase text-pine-600 mb-4">Where we are today</p>
              <h2 className="text-3xl md:text-4xl font-medium text-pine-900 mb-6 tracking-tight text-balance">
                Pre-launch, and building with the people we are building for.
              </h2>
              <p className="text-lg text-dim-2 leading-relaxed">
                The problem we are solving is large, so the solution has to actually work before it can be widespread. We are starting deliberately, with a clinical pilot, and growing from there.
              </p>
            </FadeIn>

            <div className="relative grid sm:grid-cols-3 gap-5 mb-10">
              {/* Connecting line behind the stages, fills as the section enters */}
              <div className="hidden sm:block absolute top-10 left-[16.6%] right-[16.6%] h-px bg-stone-200 overflow-hidden" aria-hidden="true">
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1] }}
                  style={{ transformOrigin: 'left' }}
                  className="absolute inset-0 bg-pine-400"
                />
              </div>
              {[
                {
                  stage: "Now",
                  title: "Doctor & clinic pilot",
                  body: "Piloting with doctors and clinics, refining the platform against real consultations and real clinic days.",
                  tone: "live",
                },
                {
                  stage: "Next",
                  title: "Patient onboarding",
                  body: "The patient app follows in the same cohort window, so patients and their doctors join a connected system rather than an empty one.",
                  tone: "progress",
                },
                {
                  stage: "Then",
                  title: "Wider rollout",
                  body: "Every gap we close in the pilot exists in clinics across the country. We widen access once the experience holds up under real use.",
                  tone: "planned",
                },
              ].map(({ stage, title, body, tone }) => (
                <FadeIn key={stage} delay={0.05}>
                  <div className="h-full bg-surface-50 border border-stone-100 rounded-2xl p-6">
                    <span
                      className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold mb-4 border ${
                        tone === "live"
                          ? "bg-pine-50 border-pine-200 text-pine-700"
                          : tone === "progress"
                            ? "bg-amber-50 border-amber-200 text-amber-700"
                            : "bg-stone-50 border-stone-200 text-dim"
                      }`}
                    >
                      {stage}
                    </span>
                    <h3 className="text-pine-900 font-medium text-lg mb-2">{title}</h3>
                    <p className="text-dim-2 text-sm leading-relaxed">{body}</p>
                  </div>
                </FadeIn>
              ))}
            </div>

            <FadeIn delay={0.1}>
              <p className="text-dim font-medium">
                If you are a doctor, a clinic owner, or a patient, this is where it starts. Spots open in cohorts, and we reach out personally when yours is ready.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* ── S7: Call to action ───────────────────────────────────────── */}
        <section className="py-16 md:py-24 bg-pine-900 text-white overflow-hidden relative">
          <DarkTexture />
          <div className="container mx-auto px-4 md:px-8 max-w-4xl relative z-10">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-medium leading-tight mb-4 tracking-tight text-balance">
                Build the connected health record with us.
              </h2>
              <p className="text-lg text-pine-200 leading-relaxed max-w-2xl mb-10">
                Whether you see patients, run a clinic, or want to take ownership of your own health history, there is a place for you in the pilot. Tell us who you are and we will be in touch.
              </p>

              <div className="grid sm:grid-cols-3 gap-4 mb-10">
                {[
                  { role: "Doctor" as const, label: "For doctors", body: "Join the clinical pilot and practice with the full picture in front of you." },
                  { role: "Clinic" as const, label: "For clinics", body: "Bring registration, records, and operations into one connected system." },
                  { role: "Patients & Caregivers" as const, label: "For patients & caregivers", body: "Own your health history and decide who gets to see it." },
                ].map(({ role, label, body }) => (
                  <button
                    key={label}
                    onClick={() => openWaitlist(role)}
                    className="group text-left bg-pine-800/50 border border-pine-700 rounded-2xl p-6 hover:bg-pine-800 hover:border-pine-600 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pine-400 focus-visible:ring-offset-2 focus-visible:ring-offset-pine-900"
                  >
                    <p className="text-white font-medium mb-2 flex items-center gap-1.5">
                      {label}
                      <ArrowRight className="w-4 h-4 text-pine-400 -translate-x-1 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all" />
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
        <section id="contact" className="py-16 md:py-24 bg-surface-50 border-b border-stone-100">
          <FadeIn>
            <div className="container mx-auto px-4 md:px-8 max-w-4xl">
              <div className="mb-12">
                <p className="text-xs font-medium tracking-widest uppercase text-pine-600 mb-4">Get in touch</p>
                <h2 className="text-3xl md:text-4xl font-medium text-pine-900 tracking-tight">Talk to a person, not a ticket system.</h2>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Partnerships */}
                <div className="bg-white border border-stone-100 rounded-2xl p-7 flex flex-col gap-6 h-full">
                  <div className="w-12 h-12 rounded-xl bg-pine-50 border border-pine-100 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-pine-600" />
                  </div>
                  <div>
                    <p className="text-dim text-sm font-medium mb-2 uppercase tracking-wider">For partnerships and investor inquiries</p>
                    <a href="mailto:partners@fettlemed.com" className="text-pine-900 hover:text-pine-600 font-medium text-lg transition-colors">
                      partners@fettlemed.com
                    </a>
                  </div>
                </div>

                {/* General */}
                <div className="bg-white border border-stone-100 rounded-2xl p-7 flex flex-col gap-6 h-full">
                  <div className="w-12 h-12 rounded-xl bg-pine-50 border border-pine-100 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-pine-600" />
                  </div>
                  <div>
                    <p className="text-dim text-sm font-medium mb-2 uppercase tracking-wider">For doctors, patients, and general questions</p>
                    <a href="mailto:hello@fettlemed.com" className="text-pine-900 hover:text-pine-600 font-medium text-lg transition-colors">
                      hello@fettlemed.com
                    </a>
                    <p className="text-dim text-sm font-medium mt-2">Someone from the team responds personally.</p>
                  </div>
                </div>
              </div>

              {/* Address */}
              <div className="mt-8 bg-white border border-stone-100 rounded-2xl p-7 flex flex-col md:flex-row gap-6 items-start">
                <div className="w-12 h-12 rounded-xl bg-pine-50 border border-pine-100 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-pine-600" />
                </div>
                <div>
                  <p className="text-dim text-sm font-medium mb-3 uppercase tracking-wider">Office</p>
                  <address className="text-pine-900 font-medium text-lg leading-relaxed not-italic">
                    NamNalam Health Tech Private Limited<br />
                    INNOV8 SKCL Tech Square, 2nd Floor<br />
                    No 14 SP, SIDCO T.V.K Industrial Estate<br />
                    Guindy, Chennai - 600032<br />
                    Tamil Nadu, India
                  </address>
                  <p className="text-dim text-sm font-medium mt-4">Registered in India. Patient health records are stored on infrastructure with the primary data centre in India.</p>
                </div>
              </div>

            </div>
          </FadeIn>
        </section>


      </div>
    </>
  );
}
