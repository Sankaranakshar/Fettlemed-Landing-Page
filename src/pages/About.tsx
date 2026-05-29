import React, { useState } from "react";
import { SEO } from '@/components/common/SEO';
import { Mail, MapPin, User } from "lucide-react";
import { FadeIn } from "@/components/common/FadeIn";
import { Button } from "@/components/common/Button";
import { WaitlistModal } from "@/components/common/WaitlistModal";

type Role = "Individual" | "Doctor" | "Clinic";

export default function About() {
  const [modalOpen, setModalOpen] = useState(false);
  const [defaultRole, setDefaultRole] = useState<Role>("Individual");

  function openAs(role: Role) {
    setDefaultRole(role);
    setModalOpen(true);
  }

  return (
    <>
      <SEO
        title="About FettleMed — Our Mission, Story, and Team | NamNalam Health Tech"
        description="FettleMed was built on one belief: health data belongs to the patient. Meet the clinical founders, read our origin story, and learn how we're building India's connected health platform."
      />
      <WaitlistModal open={modalOpen} onClose={() => setModalOpen(false)} defaultRole={defaultRole} />
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
                <p>For too long, patients in India have been the silent couriers of their own medical data. The next doctor sees fragments, not the full picture.</p>

                <div className="space-y-4">
                  <p>When a patient visits a new doctor, there is often no record of their previous medications, test results, or diagnoses. Tests get repeated. Care is reactive, because the information that would make it preventive never arrived.</p>
                  <p className="text-pine-900 font-medium">This is not a failure of doctors. It is a failure of information infrastructure.</p>
                </div>

                <blockquote className="border-l-4 border-pine-500 pl-6 my-10 text-2xl font-medium text-pine-900 leading-snug">
                  "The problem isn't money or access to doctors. It's the fragmentation of information."
                </blockquote>

                <div className="space-y-4">
                  <p>India has the mobile infrastructure to solve this today. It is not a future problem. It is an engineering and design problem — and we are solving it now.</p>
                  <p className="text-pine-900 font-medium">That is what we are building.</p>
                </div>

                <div className="bg-pine-50 rounded-2xl p-8 border border-pine-100">
                  <p className="text-pine-900 font-medium leading-relaxed">FettleMed was built on a single mission: every person's health history, on their own device, structured, searchable, and shareable with any doctor in seconds.</p>
                </div>

                <p>We are building the layer that connects patients, doctors, and clinics. So that a doctor sees the full picture, a patient is never a blank form, and a clinic's hours go to people, not paperwork.</p>

                <p className="text-pine-900 font-medium">We are building for all of them, one record at a time.</p>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ── S3: Our Philosophy ───────────────────────────────────────── */}
        <section className="py-16 md:py-20 bg-surface-50 border-b border-stone-100">
          <div className="container mx-auto px-4 md:px-8 max-w-3xl">
            <FadeIn>
              <h2 className="text-sm font-medium tracking-widest uppercase text-pine-600 mb-10">Our Philosophy</h2>
              <div className="space-y-8 text-xl md:text-2xl text-dim-2 font-medium leading-relaxed">
                <p>Your health belongs to you. Not to a filing cabinet, not to the last clinic you visited, not to us. That belief sits at the heart of everything we do.</p>

                <p>We exist because health decisions matter. And better decisions come from better information.</p>

                <p className="text-pine-900 font-medium">We hold ourselves to a simple standard: does this make someone's health journey easier, safer, or more dignified? If not, we don't build it.</p>
              </div>

              <FadeIn delay={0.2}>
                <p className="mt-10 text-lg text-dim font-medium leading-relaxed border-t border-stone-100 pt-8">That standard was set by the doctors who co-founded FettleMed, and held by everyone since. Below is the team.</p>
              </FadeIn>
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
                  <div className="space-y-4 text-dim-2 font-medium leading-relaxed">
                    <p>Nearly four decades as a Senior Consultant Cardiothoracic Surgeon, developing less invasive surgical procedures and establishing the paediatric heart surgery programme at KK Women's and Children's Hospital in Singapore. One observation defined his career: the quality of care is inseparable from the quality of information available at the moment of decision.</p>
                    <p>Dr. Shankar co-founded FettleMed because he has seen, across thousands of clinical encounters, what happens when patient history is complete, and what is lost when it isn't. His role is not advisory. Every clinical feature of the platform has been through his hands.</p>
                  </div>
                </div>

                {/* Dr. Bhavani Sriram */}
                <div className="flex flex-col">
                  <div className="w-full aspect-[4/3] overflow-hidden rounded-2xl bg-pine-50 border border-pine-100 mb-6 flex items-center justify-center">
                    <User className="w-20 h-20 text-pine-200" />
                  </div>
                  <h3 className="text-2xl font-medium text-pine-900 mb-1">Dr. Bhavani Sriram</h3>
                  <p className="text-pine-600 font-medium mb-1">Co-founder &amp; Chief Clinical Officer</p>
                  <p className="text-dim text-sm font-medium mb-5">MBBS · MRCP (UK), Paediatrics</p>
                  <div className="space-y-4 text-dim-2 font-medium leading-relaxed">
                    <p>Recognised as a Singapore Silent Hero. Dr. Bhavani has spent her career pioneering care for adults with intellectual disabilities and advocating for patients who are often the last to be heard in a clinical system designed for people who can advocate for themselves.</p>
                    <p>She co-founded FettleMed because patient empowerment is not a brand value for her. It is the work she has done every day for two decades. Her clinical oversight ensures that FettleMed's consent model, data controls, and patient-facing design are built for every patient, not just the digitally confident ones.</p>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Core Team */}
            <FadeIn delay={0.2}>
              <p className="text-xs font-medium tracking-widest uppercase text-pine-600 mb-8">Core Team</p>
              <div className="grid md:grid-cols-2 gap-10">

                {/* Akshar */}
                <div className="flex flex-col">
                  <div className="w-full aspect-[4/3] overflow-hidden rounded-2xl bg-stone-50 border border-stone-100 mb-6 flex items-center justify-center">
                    <User className="w-20 h-20 text-stone-200" />
                  </div>
                  <h3 className="text-2xl font-medium text-pine-900 mb-1">Akshar Sankaran Jaikumar</h3>
                  <p className="text-pine-600 font-medium mb-5">Co-founder &amp; CEO</p>
                  <div className="space-y-4 text-dim-2 font-medium leading-relaxed">
                    <p>Leads FettleMed's business and technology strategy. Akshar translates clinical requirements into scalable architecture, ensuring that what the clinical founders validate can be built, scaled, and maintained without compromising the product principles that define it.</p>
                  </div>
                </div>

                {/* Gurubalaji */}
                <div className="flex flex-col">
                  <div className="w-full aspect-[4/3] overflow-hidden rounded-2xl bg-stone-50 border border-stone-100 mb-6 flex items-center justify-center">
                    <User className="w-20 h-20 text-stone-200" />
                  </div>
                  <h3 className="text-2xl font-medium text-pine-900 mb-1">Gurubalaji</h3>
                  <p className="text-pine-600 font-medium mb-5">Lead Developer</p>
                  <div className="space-y-4 text-dim-2 font-medium leading-relaxed">
                    <p>Leads FettleMed's engineering, responsible for the architecture, security implementation, and day-to-day technical build of the platform. Every compliance standard the product commits to, and every consent mechanism the patient relies on, is built and maintained by this team.</p>
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
                  onClick={() => openAs("Individual")}
                  className="h-12 px-8 text-base bg-pine-900 hover:bg-pine-800 text-white rounded-xl font-medium focus-visible:ring-2 focus-visible:ring-pine-600 focus-visible:ring-offset-2"
                >
                  Join the Waitlist
                </Button>
                <Button
                  variant="animated"
                  size="lg"
                  onClick={() => openAs("Doctor")}
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

        {/* ── S7: Final CTA ────────────────────────────────────────────── */}
        <section className="py-16 md:py-20 bg-pine-900 text-white">
          <div className="container mx-auto px-6 max-w-3xl text-center">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-4">
                Ready to see FettleMed in action?
              </h2>
              <p className="text-pine-200 font-medium text-lg mb-10 max-w-xl mx-auto">
                We're piloting with a select group of doctors, clinics, and patients. Apply to join.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  variant="animated"
                  size="lg"
                  onClick={() => openAs("Doctor")}
                  className="h-12 px-8 text-base bg-white hover:bg-pine-50 text-pine-900 rounded-xl font-medium shadow-lg focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-pine-900"
                >
                  Join the Pilot
                </Button>
                <Button
                  variant="animated"
                  size="lg"
                  onClick={() => openAs("Individual")}
                  className="h-12 px-8 text-base border border-pine-600 text-pine-200 hover:bg-pine-800 rounded-xl font-medium focus-visible:ring-2 focus-visible:ring-pine-400 focus-visible:ring-offset-2 focus-visible:ring-offset-pine-900"
                >
                  Join the Waitlist
                </Button>
              </div>
            </FadeIn>
          </div>
        </section>

      </div>
    </>
  );
}
