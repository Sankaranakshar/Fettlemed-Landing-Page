import React from 'react';
import { Link } from "react-router-dom";
import { Smartphone, Stethoscope, Building2, ArrowUpRight } from "lucide-react";
import { FadeIn } from "@/components/common/FadeIn";
import { PulseLine } from "@/components/common/PulseLine";
import {
  VisualOnView,
  HealthRecordsVisual,
  FullHistoryVisual,
  PatientRegistrationVisual,
} from "@/components/sections/RoleVisuals";

const ROLES = [
  {
    Icon: Smartphone,
    label: "For Patients",
    heading: "Every record, in your pocket",
    bullets: [
      "Every prescription, lab, and visit in one place",
      "Share in two taps, revoke in one",
    ],
    visual: <HealthRecordsVisual />,
    to: "/patient-app",
    dark: false,
  },
  {
    Icon: Stethoscope,
    label: "For Doctors",
    heading: "The full history, before they sit down",
    bullets: [
      "Consented records from other doctors, instantly",
      "E-prescriptions and notes, synced to the patient",
    ],
    visual: <FullHistoryVisual />,
    to: "/doctor-portal",
    dark: true,
  },
  {
    Icon: Building2,
    label: "For Clinics",
    heading: "The whole day, in one view",
    bullets: [
      "Registration, queue, and billing together",
      "No IT team, no new hardware",
    ],
    visual: <PatientRegistrationVisual />,
    to: "/clinic-management",
    dark: false,
  },
];

export const EcosystemRoles = () => {
  return (
    <section id="roles" className="py-12 md:py-16 bg-surface-50">
      <div className="container mx-auto px-6 max-w-6xl">
        <FadeIn>
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-pine-900 mb-3 text-balance">
              One record. Three views.
            </h2>
            <p className="text-lg text-dim max-w-2xl mx-auto">
              Not another EMR. Not another health app. FettleMed is the layer that connects patient, doctor, and clinic.
            </p>
          </div>
        </FadeIn>

        <div className="relative">
          {/* Desktop: one line running behind the three cards. It shows in the
              gaps between them, with a pulse travelling clinic-to-patient. */}
          <PulseLine className="hidden md:block absolute top-[120px] left-[8%] right-[8%] z-0" />

          <div className="relative flex flex-col gap-0 md:grid md:grid-cols-3 md:gap-5">
          {ROLES.map(({ Icon, label, heading, bullets, visual, to, dark }, i) => (
            <React.Fragment key={label}>
            {/* Mobile: short vertical connector between stacked cards */}
            {i > 0 && (
              <div className="md:hidden flex justify-center py-1">
                <PulseLine vertical className="h-10" interval={6} />
              </div>
            )}
            <FadeIn delay={0.08 + i * 0.08} className="h-full relative z-10">
              <Link
                to={to}
                className={`group flex flex-col h-full rounded-3xl border overflow-hidden shadow-sm transition-shadow hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pine-600 focus-visible:ring-offset-2 ${
                  dark ? "bg-pine-900 border-pine-700" : "bg-white border-stone-200"
                }`}
              >
                <VisualOnView
                  className={`flex items-center justify-center min-h-[240px] p-5 border-b ${
                    dark ? "bg-pine-800/50 border-pine-700" : "bg-surface-50 border-pine-100"
                  }`}
                >
                  {visual}
                </VisualOnView>
                <div className="flex flex-col flex-1 p-6">
                  <div className={`flex items-center gap-2 text-xs font-medium uppercase tracking-widest mb-3 ${dark ? "text-pine-300" : "text-pine-600"}`}>
                    <Icon className="w-4 h-4" /> {label}
                  </div>
                  <h3 className={`text-xl font-medium tracking-tight mb-3 ${dark ? "text-white" : "text-pine-900"}`}>
                    {heading}
                  </h3>
                  <ul className="space-y-2 mb-5">
                    {bullets.map((b) => (
                      <li key={b} className={`flex items-start gap-2.5 text-sm ${dark ? "text-pine-200" : "text-dim-2"}`}>
                        <span className={`w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 ${dark ? "bg-pine-400" : "bg-pine-600"}`} />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <span className={`mt-auto inline-flex items-center gap-1.5 text-sm font-medium ${dark ? "text-pine-200 group-hover:text-white" : "text-pine-600 group-hover:text-pine-800"} transition-colors`}>
                    {label} <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </Link>
            </FadeIn>
            </React.Fragment>
          ))}
          </div>
        </div>
      </div>
    </section>
  );
};
