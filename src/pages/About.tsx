import React from "react";
import { SEO } from '@/components/common/SEO';
import { Mail, MapPin, User } from "lucide-react";
import { FadeIn } from "@/components/common/FadeIn";
import { Button } from "@/components/common/Button";
import { useWaitlist } from "@/contexts/WaitlistContext";

export default function About() {
  const { openWaitlist } = useWaitlist();

  return (
    <>
      <SEO
        title="About"
        description="FettleMed was built on one belief: health data belongs to the patient. Meet the clinical founders, read our origin story, and learn how we're building India's connected health platform."
      />
      <div className="flex flex-col w-full bg-surface-50">

        {/* ── S1: Hero / Mission ───────────────────────────────────────── */}
        <section className="relative pt-16 pb-16 md:pt-20 md:pb-20 bg-pine-900 border-b border-pine-800 text-white overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-pine-800/50 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
          <div className="container mx-auto px-4 md:px-8 max-w-5xl relative z-10">
            <FadeIn eager>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.05] mb-10 tracking-tight text-balance text-center">
                Health data belongs to the patient.<br className="hidden md:block" />
                <span className="text-pine-300"> We built everything around that.</span>
              </h1>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-pine-800/50 border border-pine-700 rounded-2xl p-8 backdrop-blur-sm">
                  <p className="text-xs font-medium tracking-widest uppercase text-pine-400 mb-4">The problem</p>
                  <div className="space-y-3 text-pine-100 font-medium leading-relaxed">
                    <p>In India today, a patient's health history is scattered across hospitals, labs, clinics, and paper folders, invisible to the next doctor who needs it. Vital information is lost between every handoff. A patient visiting a specialist carries a bag of reports. A doctor sees a new patient and starts from zero.</p>
                    <p className="text-white font-medium">FettleMed closes that gap.</p>
                  </div>
                </div>

                <div className="bg-pine-800/50 border border-pine-700 rounded-2xl p-8 backdrop-blur-sm">
                  <p className="text-xs font-medium tracking-widest uppercase text-pine-400 mb-4">What we believe</p>
                  <div className="space-y-3 text-pine-100 font-medium leading-relaxed">
                    <p>The patient is the primary owner of their health data. Not the hospital. Not the clinic. Not us.</p>
                    <p>Every feature in FettleMed was designed around that principle. Every feature we chose not to build failed the same test.</p>
                  </div>
                </div>
              </div>

              <p className="text-center text-pine-300 text-sm font-medium">
                Piloting with doctors and clinics now. Patient onboarding follows in the same cohort window.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* ── S2: Why we built this ────────────────────────────────────── */}
        <section className="py-16 md:py-20 bg-white border-b border-stone-100">
          <div className="container mx-auto px-4 md:px-8 max-w-3xl">
            <FadeIn>
              <h2 className="text-sm font-medium tracking-widest uppercase text-pine-600 mb-10">Why we built this</h2>
              <div className="space-y-7 text-lg text-dim-2 font-medium leading-relaxed">
                <p>Patients in India carry their own medical history from clinic to clinic in a bag of paper reports. Tests get repeated. Care is reactive. The information that would make it preventive never arrives. This is not a failure of doctors — it is a failure of information infrastructure.</p>

                <blockquote className="border-l-4 border-pine-500 pl-6 my-10 text-2xl font-medium text-pine-900 leading-snug">
                  "The problem isn't money or access to doctors. It's the fragmentation of information."
                </blockquote>

                <p>India has the mobile infrastructure to solve this today. FettleMed is the layer that connects patients, doctors, and clinics — so a doctor sees the full picture, a patient is never a blank form, and a clinic's hours go to people, not paperwork.</p>

                <div className="bg-pine-50 rounded-2xl p-8 border border-pine-100">
                  <p className="text-pine-900 font-medium leading-relaxed">Every person's health history, on their own device, structured, searchable, and shareable with any doctor in seconds.</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ── S4: Founders & Leadership ────────────────────────────────── */}
        <section id="team" className="py-16 md:py-20 bg-white border-b border-stone-100">
          <div className="container mx-auto px-4 md:px-8 max-w-5xl">
            <FadeIn className="mb-10">
              <h2 className="text-3xl md:text-5xl font-medium text-pine-900 mb-4 tracking-tight">Founders &amp; Leadership</h2>
              <p className="text-lg text-dim font-medium max-w-2xl">
                Built by physicians who have spent decades in clinical practice, and technologists who have spent time inside Indian clinics.
              </p>
            </FadeIn>

            {/* Clinical Founders */}
            <FadeIn delay={0.1}>
              <p className="text-xs font-medium tracking-widest uppercase text-pine-600 mb-8">Clinical Founders</p>
              <div className="grid md:grid-cols-2 gap-10 mb-10">

                {/* Dr. Sriram Shankar */}
                <div className="flex flex-col">
                  <div className="w-full aspect-[4/3] overflow-hidden rounded-2xl bg-pine-50 border border-pine-100 mb-6 flex items-center justify-center">
                    <User className="w-20 h-20 text-pine-200" />
                  </div>
                  <h3 className="text-2xl font-medium text-pine-900 mb-1">Dr. Sriram Shankar</h3>
                  <p className="text-pine-600 font-medium mb-1">Co-founder &amp; Chief Medical Officer</p>
                  <p className="text-dim text-sm font-medium mb-5">MBBS · FRCS (England) · FAMS (Singapore)</p>
                  <p className="text-dim-2 font-medium leading-relaxed">Nearly four decades as a Senior Consultant Cardiothoracic Surgeon at KK Women's and Children's Hospital, Singapore. His career defined one observation: the quality of care is inseparable from the quality of information at the moment of decision. His role in FettleMed is not advisory — every clinical feature has been through his hands.</p>
                </div>

                {/* Dr. Bhavani Sriram */}
                <div className="flex flex-col">
                  <div className="w-full aspect-[4/3] overflow-hidden rounded-2xl bg-pine-50 border border-pine-100 mb-6 flex items-center justify-center">
                    <User className="w-20 h-20 text-pine-200" />
                  </div>
                  <h3 className="text-2xl font-medium text-pine-900 mb-1">Dr. Bhavani Sriram</h3>
                  <p className="text-pine-600 font-medium mb-1">Co-founder &amp; Chief Clinical Officer</p>
                  <p className="text-dim text-sm font-medium mb-5">MBBS · MRCP (UK), Paediatrics</p>
                  <p className="text-dim-2 font-medium leading-relaxed">Recognised as a Singapore Silent Hero for her work pioneering care for adults with intellectual disabilities. Patient empowerment is not a brand value for her — it is two decades of practice. She ensures FettleMed's consent model and patient-facing design work for every patient, not just the digitally confident.</p>
                </div>
              </div>
            </FadeIn>

            {/* Core Team */}
            <FadeIn delay={0.2}>
              <p className="text-xs font-medium tracking-widest uppercase text-pine-600 mb-6 mt-4">Core Team</p>
              <div className="grid md:grid-cols-2 gap-4">

                <div className="flex items-start gap-4 bg-surface-50 border border-stone-100 rounded-2xl p-5">
                  <div className="w-10 h-10 rounded-full bg-pine-50 border border-pine-100 flex items-center justify-center shrink-0">
                    <User className="w-5 h-5 text-dim" />
                  </div>
                  <div>
                    <h3 className="text-base font-medium text-pine-900">Akshar Sankaran Jaikumar</h3>
                    <p className="text-pine-600 text-sm font-medium mb-1">Co-founder &amp; CEO</p>
                    <p className="text-dim text-sm font-medium leading-relaxed">Business and technology strategy. Translates clinical requirements into architecture.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-surface-50 border border-stone-100 rounded-2xl p-5">
                  <div className="w-10 h-10 rounded-full bg-pine-50 border border-pine-100 flex items-center justify-center shrink-0">
                    <User className="w-5 h-5 text-dim" />
                  </div>
                  <div>
                    <h3 className="text-base font-medium text-pine-900">Gurubalaji</h3>
                    <p className="text-pine-600 text-sm font-medium mb-1">Lead Developer</p>
                    <p className="text-dim text-sm font-medium leading-relaxed">Platform architecture, security implementation, and technical build.</p>
                  </div>
                </div>

              </div>
            </FadeIn>
          </div>
        </section>

        {/* ── S5: Where we are today ───────────────────────────────────── */}
        <section className="py-16 md:py-20 bg-surface-50 border-b border-stone-100">
          <div className="container mx-auto px-6 max-w-3xl text-center">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-medium text-pine-900 mb-8 tracking-tight">Where we are today</h2>
              <div className="space-y-5 text-lg text-dim-2 font-medium leading-relaxed text-left md:text-center mb-10">
                <p>FettleMed is in active development, piloting with doctors and clinics now. The patient app opens in the same cohort window.</p>
                <p>We are a small team, building carefully and validating with real clinical users before we expand. Currently piloting in Chennai.</p>
              </div>

              <p className="text-dim font-medium mb-8">
                If you're a doctor, clinic owner, or patient who believes health data should work this way, the pilot is where that starts.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  variant="animated"
                  size="lg"
                  onClick={() => openWaitlist('Individual')}
                  className="h-12 px-8 text-base bg-pine-900 hover:bg-pine-800 text-white rounded-xl font-medium focus-visible:ring-2 focus-visible:ring-pine-600 focus-visible:ring-offset-2"
                >
                  Join the Waitlist
                </Button>
                <Button
                  variant="animated"
                  size="lg"
                  onClick={() => openWaitlist('Doctor')}
                  className="h-12 px-8 text-base border-2 border-pine-900 text-pine-900 hover:bg-pine-50 rounded-xl font-medium focus-visible:ring-2 focus-visible:ring-pine-600 focus-visible:ring-offset-2"
                >
                  Join the Pilot
                </Button>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ── S6: Get in touch ─────────────────────────────────────────── */}
        <section id="contact" className="py-16 md:py-20 bg-white border-b border-stone-100">
          <FadeIn>
            <div className="container mx-auto px-4 md:px-8 max-w-4xl">
              <div className="mb-12 text-center">
                <h2 className="text-3xl md:text-5xl font-medium text-pine-900 mb-4 tracking-tight">Get in touch</h2>
                <p className="text-lg text-dim font-medium">For partnerships, press inquiries, investor conversations, and general questions about FettleMed.</p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Partnerships */}
                <div className="bg-surface-50 border border-stone-100 rounded-2xl p-7 flex flex-col gap-6 h-full">
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
                <div className="bg-surface-50 border border-stone-100 rounded-2xl p-7 flex flex-col gap-6 h-full">
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
              <div className="mt-8 bg-surface-50 border border-stone-100 rounded-2xl p-7 flex flex-col md:flex-row gap-6 items-start">
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
                  <p className="text-dim text-sm font-medium mt-4">Registered in India. All patient data stored on Indian servers.</p>
                </div>
              </div>

            </div>
          </FadeIn>
        </section>


      </div>
    </>
  );
}
