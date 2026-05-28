import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ShieldAlert, Key, Settings, Users, Globe2, Lock, CheckCircle2, Clock, Calendar } from "lucide-react";
import { SEO } from '@/components/common/SEO';
import { FadeIn } from "@/components/common/FadeIn";
import { Button } from "@/components/common/Button";
import { FAQ } from "@/components/common/FAQ";
import { WaitlistModal } from "@/components/common/WaitlistModal";

const SECTION_IDS = ["encryption", "consent", "access", "compliance", "sovereignty"] as const;
type SectionId = typeof SECTION_IDS[number];

const sidebarLinks: { id: SectionId; label: string }[] = [
  { id: "encryption",  label: "Encryption" },
  { id: "consent",     label: "Consent & Access" },
  { id: "access",      label: "Role-Based Controls" },
  { id: "compliance",  label: "Compliance Status" },
  { id: "sovereignty", label: "Your Data in India" },
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
    answer: "FettleMed is built on ABDM-aligned architecture and integrates with ABHA ID infrastructure. Formal ABDM certification is on our roadmap following pilot completion. We do not claim formal certification that has not yet been granted. See our Compliance Status section for the current state of each standard.",
  },
  {
    question: "Can a doctor access my records without my permission?",
    answer: "No. A doctor can request access to your records, but they cannot view anything until you grant it explicitly. Access is time-bound and scoped. A doctor you share records with for one consultation cannot continue accessing them after that consultation ends unless you grant ongoing access separately. You are notified when access is requested and when it is used.",
  },
];

export default function Security() {
  const [activeSection, setActiveSection] = useState<SectionId>("encryption");
  const [modalOpen, setModalOpen] = useState(false);
  const observersRef = useRef<IntersectionObserver[]>([]);

  useEffect(() => {
    observersRef.current.forEach(o => o.disconnect());
    observersRef.current = [];

    SECTION_IDS.forEach(id => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) setActiveSection(id);
          });
        },
        { rootMargin: "-20% 0px -65% 0px", threshold: 0 }
      );
      obs.observe(el);
      observersRef.current.push(obs);
    });

    return () => observersRef.current.forEach(o => o.disconnect());
  }, []);

  return (
    <>
      <SEO
        title="Security — FettleMed"
        description="Your health data is encrypted, patient-controlled, and stored in India. Here is exactly how FettleMed protects your data."
      />
      <WaitlistModal open={modalOpen} onClose={() => setModalOpen(false)} />
      <div className="flex flex-col w-full bg-surface-50 min-h-screen">

        {/* ── S1: Hero ─────────────────────────────────────────────────── */}
        <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 bg-pine-900 text-white">
          <div className="container mx-auto px-4 md:px-8 max-w-3xl text-center">
            <FadeIn eager>
              <ShieldAlert className="w-16 h-16 text-pine-400 mx-auto mb-8" />
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.1] mb-6 tracking-tight">
                Security is not a feature. It's the foundation.
              </h1>
              <p className="text-xl text-pine-200 font-medium leading-relaxed max-w-2xl mx-auto">
                Every architectural decision in FettleMed, from how data is stored, to who can access it, to what happens when someone tries to access it without permission, was made with one question first: is this safe for the patient?
              </p>
            </FadeIn>
          </div>
        </section>

        {/* ── S2: Trust strip ──────────────────────────────────────────── */}
        <section className="py-6 bg-pine-50 border-b border-pine-100">
          <div className="container mx-auto px-4 md:px-8 max-w-5xl">
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm font-medium text-pine-800 mb-3">
              <span>Data stored in India, always</span>
              <span>AES-256 encryption at rest</span>
              <span>Consent-based access, patient controlled</span>
              <span>Full audit log, every access, every time</span>
            </div>
            <p className="text-center text-xs text-pine-600 font-medium">
              Last reviewed: May 2026. For questions about our security posture, write to{" "}
              <a href="mailto:hello@fettlemed.com" className="underline hover:text-pine-800 transition-colors">hello@fettlemed.com</a>.
            </p>
          </div>
        </section>

        {/* ── S3: Visual consent model ─────────────────────────────────── */}
        <section className="py-20 bg-white border-b border-stone-100">
          <div className="container mx-auto px-4 max-w-5xl">
            <FadeIn>
              <div className="text-center mb-12">
                <h2 className="text-2xl font-medium text-pine-900">How consent works, in plain terms.</h2>
              </div>

              <div className="bg-surface-50 rounded-3xl border border-stone-100 p-8 md:p-12 shadow-sm flex flex-col md:flex-row items-center justify-between gap-8 mb-8">
                {/* Step 1 */}
                <div className="flex flex-col items-center text-center max-w-[200px]">
                  <div className="w-16 h-16 rounded-full bg-pine-100 flex items-center justify-center mb-4 border border-pine-200">
                    <Lock className="w-6 h-6 text-pine-600" />
                  </div>
                  <h3 className="font-medium text-pine-900 text-lg mb-2">1. You grant consent</h3>
                  <p className="text-sm font-medium text-dim leading-relaxed">You decide who sees your health data, what they see, and for how long.</p>
                </div>

                {/* Arrow 1 */}
                <div className="hidden md:flex flex-col items-center justify-center px-4 w-full relative">
                  <div className="h-0.5 w-full bg-stone-200 absolute top-1/2 -translate-y-1/2" />
                  <div className="bg-white px-4 py-1.5 rounded-full border border-stone-200 font-medium text-xs uppercase tracking-wider text-dim relative z-10 whitespace-nowrap shadow-sm">Grant Access</div>
                </div>
                <div className="md:hidden flex flex-col items-center justify-center py-4 h-full relative">
                  <div className="w-0.5 h-full min-h-[40px] bg-stone-200 absolute left-1/2 -translate-x-1/2" />
                  <div className="bg-white px-4 py-1.5 rounded-full border border-stone-200 font-medium text-xs uppercase tracking-wider text-dim relative z-10 shadow-sm">Grant Access</div>
                </div>

                {/* Step 2 */}
                <div className="flex flex-col items-center text-center max-w-[200px]">
                  <div className="w-16 h-16 rounded-full bg-pine-50 flex items-center justify-center mb-4 border border-pine-100">
                    <Key className="w-6 h-6 text-pine-600" />
                  </div>
                  <h3 className="font-medium text-pine-900 text-lg mb-2">2. Doctor gets time-bound access</h3>
                  <p className="text-sm font-medium text-dim leading-relaxed">Access is scoped to what you chose to share, and expires when the period ends.</p>
                </div>

                {/* Arrow 2 */}
                <div className="hidden md:flex flex-col items-center justify-center px-4 w-full relative">
                  <div className="h-0.5 w-full bg-stone-200 absolute top-1/2 -translate-y-1/2" />
                  <div className="bg-white px-4 py-1.5 rounded-full border border-stone-200 font-medium text-xs uppercase tracking-wider text-dim relative z-10 whitespace-nowrap shadow-sm">Revoke</div>
                </div>
                <div className="md:hidden flex flex-col items-center justify-center py-4 h-full relative">
                  <div className="w-0.5 h-full min-h-[40px] bg-stone-200 absolute left-1/2 -translate-x-1/2" />
                  <div className="bg-white px-4 py-1.5 rounded-full border border-stone-200 font-medium text-xs uppercase tracking-wider text-dim relative z-10 shadow-sm">Revoke</div>
                </div>

                {/* Step 3 */}
                <div className="flex flex-col items-center text-center max-w-[200px]">
                  <div className="w-16 h-16 rounded-full bg-stone-100 flex items-center justify-center mb-4 border border-stone-200">
                    <ShieldAlert className="w-6 h-6 text-stone-500" />
                  </div>
                  <h3 className="font-medium text-pine-900 text-lg mb-2">3. Access ends. Your records stay protected.</h3>
                  <p className="text-sm font-medium text-dim leading-relaxed">When access expires or is revoked, the data remains encrypted and secure.</p>
                </div>
              </div>

              <div className="max-w-3xl mx-auto text-center space-y-3">
                <p className="text-dim-2 font-medium leading-relaxed">
                  Access can be granted for a single consultation, a fixed time period, or on an ongoing basis. It can be revoked by the patient at any time, from the app, in seconds.
                </p>
                <p className="text-dim text-sm font-medium">
                  Doctors retain the clinical records they create, as required under Indian Medical Council Regulations 2002. Consent controls the patient's broader health profile, not the doctor's own documentation.
                </p>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ── S4–S9: Main content + sidebar ────────────────────────────── */}
        <section className="py-20">
          <div className="container mx-auto px-4 md:px-8 max-w-[1200px] flex flex-col lg:flex-row gap-12">

            {/* Desktop sidebar */}
            <div className="lg:w-1/4 hidden lg:block">
              <div className="sticky top-32 space-y-1">
                <p className="text-xs font-medium tracking-widest uppercase text-dim mb-5">Security</p>
                {sidebarLinks.map(({ id, label }) => (
                  <a
                    key={id}
                    href={`#${id}`}
                    className={`block text-sm font-medium py-1.5 px-3 rounded-lg transition-colors ${
                      activeSection === id
                        ? "bg-pine-50 text-pine-700"
                        : "text-dim hover:text-pine-600"
                    }`}
                  >
                    {label}
                  </a>
                ))}
              </div>
            </div>

            {/* Content */}
            <div className="lg:w-3/4 max-w-3xl">

              {/* Mobile chip nav */}
              <div className="lg:hidden overflow-x-auto pb-4 mb-10 -mx-4 px-4">
                <div className="flex gap-2 w-max">
                  {sidebarLinks.map(({ id, label }) => (
                    <a
                      key={id}
                      href={`#${id}`}
                      className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap border transition-colors ${
                        activeSection === id
                          ? "bg-pine-700 text-white border-pine-700"
                          : "bg-white text-dim border-stone-200 hover:border-pine-300 hover:text-pine-700"
                      }`}
                    >
                      {label}
                    </a>
                  ))}
                </div>
              </div>

              <div className="space-y-20">

                {/* ── S5: Encryption ───────────────────────────────────── */}
                <div id="encryption" className="scroll-mt-32">
                  <FadeIn>
                    <div className="flex gap-6 items-start">
                      <Key className="w-8 h-8 text-pine-600 shrink-0 mt-1" />
                      <div className="flex-1">
                        <h3 className="text-2xl font-medium text-pine-900 mb-2">Encryption</h3>
                        <p className="text-dim font-medium mb-6">Your health records are encrypted at every stage, when stored, when transmitted, and when accessed.</p>
                        <div className="space-y-6">
                          <div>
                            <p className="text-pine-900 font-medium mb-2">At rest</p>
                            <p className="text-dim-2 font-medium leading-relaxed">All data is encrypted using AES-256, the same standard used by financial institutions and government systems globally. Patient health records are encrypted with patient-specific keys.</p>
                          </div>
                          <div>
                            <p className="text-pine-900 font-medium mb-2">In transit</p>
                            <p className="text-dim-2 font-medium leading-relaxed">All data moving between your device and FettleMed's servers is protected using TLS 1.2 and above, with modern cipher suites. No data travels unencrypted at any point.</p>
                          </div>
                          <div>
                            <p className="text-pine-900 font-medium mb-2">In the event of a breach</p>
                            <p className="text-dim-2 font-medium leading-relaxed">Even if an attacker gains access to FettleMed's servers, encrypted patient records are unreadable without the patient-specific authorisation keys. The data itself is unreadable to anyone without the right credentials.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </FadeIn>
                </div>

                {/* ── S6: Consent & Access ─────────────────────────────── */}
                <div id="consent" className="scroll-mt-32">
                  <FadeIn>
                    <div className="flex gap-6 items-start">
                      <Settings className="w-8 h-8 text-pine-600 shrink-0 mt-1" />
                      <div className="flex-1">
                        <h3 className="text-2xl font-medium text-pine-900 mb-2">Consent &amp; Access</h3>
                        <p className="text-dim font-medium mb-6">Patients decide who sees their health data, what they see, and for how long. No access happens without explicit consent.</p>
                        <div className="space-y-6">
                          <div>
                            <p className="text-pine-900 font-medium mb-2">Who controls access</p>
                            <p className="text-dim-2 font-medium leading-relaxed">The patient. Not the clinic. Not the doctor. Not FettleMed. A doctor can request access to a patient's records, but they cannot view anything until the patient grants it.</p>
                          </div>
                          <div>
                            <p className="text-pine-900 font-medium mb-2">What consent covers</p>
                            <p className="text-dim-2 font-medium leading-relaxed">Patients can share their full health profile, specific record types, or records from a defined time period. Consent is granular. A patient sharing records with a cardiologist does not automatically share them with every other doctor they have ever seen.</p>
                          </div>
                          <div>
                            <p className="text-pine-900 font-medium mb-2">How long access lasts</p>
                            <p className="text-dim-2 font-medium leading-relaxed">Consent can be granted for a single consultation, a fixed period, or on an ongoing basis. It expires automatically when the period ends. Patients can also revoke it manually at any time, from the app, in seconds.</p>
                          </div>
                          <div>
                            <p className="text-pine-900 font-medium mb-2">The audit trail</p>
                            <p className="text-dim-2 font-medium leading-relaxed">Every consent event is recorded in an immutable log, when it was granted, what it covered, who accessed it, and when it was revoked or expired. Patients can view the full history at any time.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </FadeIn>
                </div>

                {/* ── S7: Role-Based Controls ──────────────────────────── */}
                <div id="access" className="scroll-mt-32">
                  <FadeIn>
                    <div className="flex gap-6 items-start">
                      <Users className="w-8 h-8 text-pine-600 shrink-0 mt-1" />
                      <div className="flex-1">
                        <h3 className="text-2xl font-medium text-pine-900 mb-2">Role-Based Controls</h3>
                        <p className="text-dim font-medium mb-6">Inside a clinic, every staff member sees exactly what their role requires, and nothing more.</p>
                        <div className="space-y-6">
                          <div>
                            <p className="text-pine-900 font-medium mb-2">Role-based access</p>
                            <p className="text-dim-2 font-medium leading-relaxed">Front desk staff see appointment schedules and patient registration. Billing staff see invoices and payment records. Doctors see clinical records and consultation notes. Clinic owners see everything, across all staff, all doctors, all days. No role can access what belongs to another.</p>
                          </div>
                          <div>
                            <p className="text-pine-900 font-medium mb-2">Minimum necessary access</p>
                            <p className="text-dim-2 font-medium leading-relaxed">Every account is configured with the minimum access required for its function. Permissions are not inherited. They are assigned specifically, by role, by clinic, and where relevant, by time period.</p>
                          </div>
                          <div>
                            <p className="text-pine-900 font-medium mb-2">Multi-factor authentication</p>
                            <p className="text-dim-2 font-medium leading-relaxed">All provider accounts, doctors, clinic administrators, and owners, require multi-factor authentication. A stolen password alone is not sufficient to access patient data.</p>
                          </div>
                          <div>
                            <p className="text-pine-900 font-medium mb-2">Session management</p>
                            <p className="text-dim-2 font-medium leading-relaxed">Inactive sessions expire automatically. Sensitive actions require re-authentication. All access attempts, successful and failed, are logged with timestamps and user identifiers.</p>
                          </div>
                          <div>
                            <p className="text-pine-900 font-medium mb-2">Audit logging</p>
                            <p className="text-dim-2 font-medium leading-relaxed">Every access event is recorded. Clinic owners can see who accessed what and when. This is available as a standard feature, not a premium add-on.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </FadeIn>
                </div>

                {/* ── S8: Compliance Status ────────────────────────────── */}
                <div id="compliance" className="scroll-mt-32">
                  <FadeIn>
                    <div className="flex gap-6 items-start">
                      <ShieldAlert className="w-8 h-8 text-pine-600 shrink-0 mt-1" />
                      <div className="flex-1">
                        <h3 className="text-2xl font-medium text-pine-900 mb-2">Compliance Status</h3>
                        <p className="text-dim font-medium mb-8">We are transparent about where we are in our compliance journey, what is implemented today, what is in progress, and what is planned.</p>

                        {/* Current */}
                        <div className="mb-8">
                          <div className="flex items-center gap-2 mb-4">
                            <CheckCircle2 className="w-5 h-5 text-pine-600" />
                            <p className="text-sm font-medium text-pine-700 uppercase tracking-wider">Current, implemented today</p>
                          </div>
                          <div className="space-y-5 pl-7">
                            {[
                              { title: "DPDPA-aligned controls", body: "FettleMed's data handling practices are designed around the Digital Personal Data Protection Act, India's primary data protection legislation." },
                              { title: "ABDM-aligned architecture", body: "FettleMed is built on the ABDM framework and integrates with ABHA ID infrastructure, the national standard for health data portability in India. Patient records are interoperable with India's national health data ecosystem." },
                              { title: "FHIR data standards", body: "FettleMed uses FHIR (Fast Healthcare Interoperability Resources) for data exchange, the international standard for structured health data. Records are not locked in a proprietary format." },
                              { title: "Data residency", body: "All patient data is stored on servers located in India. No data is transferred outside the country." },
                            ].map(({ title, body }) => (
                              <div key={title}>
                                <p className="text-pine-900 font-medium mb-1">{title}</p>
                                <p className="text-dim-2 font-medium leading-relaxed">{body}</p>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* In progress */}
                        <div className="mb-8">
                          <div className="flex items-center gap-2 mb-4">
                            <Clock className="w-5 h-5 text-amber-600" />
                            <p className="text-sm font-medium text-amber-700 uppercase tracking-wider">In progress</p>
                          </div>
                          <div className="pl-7">
                            <p className="text-pine-900 font-medium mb-1">ISO 27001 certification</p>
                            <p className="text-dim-2 font-medium leading-relaxed">FettleMed is actively working toward ISO 27001, the international standard for information security management.</p>
                          </div>
                        </div>

                        {/* Planned */}
                        <div>
                          <div className="flex items-center gap-2 mb-4">
                            <Calendar className="w-5 h-5 text-dim" />
                            <p className="text-sm font-medium text-dim uppercase tracking-wider">Planned</p>
                          </div>
                          <div className="pl-7">
                            <p className="text-pine-900 font-medium mb-1">ABDM formal certification</p>
                            <p className="text-dim-2 font-medium leading-relaxed">Formal certification through the ABDM certification process is on the roadmap following pilot completion.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </FadeIn>
                </div>

                {/* ── S9: Your Data in India ───────────────────────────── */}
                <div id="sovereignty" className="scroll-mt-32">
                  <FadeIn>
                    <div className="flex gap-6 items-start">
                      <Globe2 className="w-8 h-8 text-pine-600 shrink-0 mt-1" />
                      <div className="flex-1">
                        <h3 className="text-2xl font-medium text-pine-900 mb-2">Your Data in India</h3>
                        <p className="text-dim font-medium mb-6">Your health records stay in India. They are never sold, never used for advertising, and never shared with third parties, for any reason.</p>
                        <div className="space-y-6">
                          <div>
                            <p className="text-pine-900 font-medium mb-2">Where your data lives</p>
                            <p className="text-dim-2 font-medium leading-relaxed">All FettleMed data is stored on servers located in India. No patient data is transferred outside the country for any reason. For specific questions about our hosting architecture, write to hello@fettlemed.com.</p>
                          </div>
                          <div>
                            <p className="text-pine-900 font-medium mb-2">What your data is never used for</p>
                            <ul className="space-y-1.5 text-dim-2 font-medium leading-relaxed list-none">
                              <li>Never used for advertising.</li>
                              <li>Never sold to insurers, pharmaceutical companies, employers, or any third party.</li>
                              <li>Never used to train AI models or commercial algorithms without explicit, separate patient consent.</li>
                            </ul>
                            <p className="text-pine-900 font-medium mt-3">Ever.</p>
                          </div>
                          <div>
                            <p className="text-pine-900 font-medium mb-2">The legal commitment</p>
                            <p className="text-dim-2 font-medium leading-relaxed mb-4">This is not a policy preference that can be changed in a terms update. It is a contractual and architectural commitment, built into how FettleMed is designed.</p>
                            <div className="flex gap-4 text-sm font-medium">
                              <Link to="/privacy" className="text-pine-600 hover:text-pine-700 transition-colors underline">Read our Privacy Policy →</Link>
                              <Link to="/terms" className="text-pine-600 hover:text-pine-700 transition-colors underline">Read our Terms of Service →</Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </FadeIn>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* ── S10: FAQ ─────────────────────────────────────────────────── */}
        <section className="py-20 bg-white border-t border-stone-100 border-b">
          <div className="container mx-auto px-4 md:px-8 max-w-3xl">
            <FadeIn className="mb-12">
              <h2 className="text-3xl md:text-4xl font-medium text-pine-900 tracking-tight">Security questions, answered.</h2>
            </FadeIn>
            <FAQ sections={[{ title: "", items: faqData.map(({ question, answer }) => ({ question, answer })) }]} />
          </div>
        </section>

        {/* ── S11: CTA ─────────────────────────────────────────────────── */}
        <section className="py-20 bg-surface-50">
          <div className="container mx-auto px-4 md:px-8 max-w-2xl text-center">
            <FadeIn>
              <h2 className="text-2xl md:text-3xl font-medium text-pine-900 mb-4 tracking-tight">Security questions we haven't answered here?</h2>
              <p className="text-lg text-dim font-medium mb-8 leading-relaxed">
                Write to us directly at{" "}
                <a href="mailto:hello@fettlemed.com" className="text-pine-600 hover:text-pine-700 underline transition-colors">hello@fettlemed.com</a>.
                {" "}Someone from the team responds personally, not a support ticket system.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  variant="animated"
                  size="lg"
                  onClick={() => setModalOpen(true)}
                  className="h-12 px-8 text-base bg-pine-900 hover:bg-pine-800 text-white rounded-xl font-medium shadow-lg focus-visible:ring-2 focus-visible:ring-pine-600 focus-visible:ring-offset-2"
                >
                  Join the pilot
                </Button>
                <Link
                  to="/privacy"
                  className="inline-flex items-center justify-center h-12 px-8 text-base border-2 border-pine-900 text-pine-900 hover:bg-pine-50 rounded-xl font-medium transition-colors"
                >
                  Read our Privacy Policy
                </Link>
              </div>
            </FadeIn>
          </div>
        </section>

      </div>
    </>
  );
}
