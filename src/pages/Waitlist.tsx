import React from "react";
import { SEO } from '@/components/common/SEO';
import { User, Stethoscope, Building2 } from "lucide-react";
import { FadeIn } from "@/components/common/FadeIn";
import { WaitlistForm } from "@/components/common/WaitlistModal";

export default function Waitlist() {
  return (
    <>
      <SEO title="Join the Waitlist" description="Join the FettleMed waitlist for early access. Be among the first patients, doctors, and clinics to use India's connected health record platform." />
      <div className="flex flex-col w-full min-h-screen bg-surface-50 font-sans relative overflow-hidden">
        {/* Static mesh gradient: calm near forms, no drift */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div
            className="absolute -top-1/4 -right-[10%] w-[70%] h-[70%] rounded-full"
            style={{ background: 'radial-gradient(circle, rgba(31,122,92,0.08), transparent 65%)' }}
          />
          <div
            className="absolute -bottom-1/4 -left-[10%] w-[60%] h-[70%] rounded-full"
            style={{ background: 'radial-gradient(circle, rgba(122,174,154,0.10), transparent 65%)' }}
          />
        </div>
        <section className="pt-20 pb-24 md:pt-32 relative z-10">
          <div className="container mx-auto px-4 max-w-6xl">
            <FadeIn eager>
              <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">

                {/* Left: intro copy */}
                <div className="w-full lg:w-1/2 lg:sticky lg:top-32">
                  <h1 className="text-4xl md:text-5xl font-medium text-pine-900 leading-[1.1] mb-6 tracking-tight text-balance">
                    Get early access to your complete health record.
                  </h1>
                  <p className="text-lg md:text-xl text-dim leading-relaxed mb-8">
                    Join our waitlist for early access to the patient app, doctor portal, or clinic management system.
                  </p>
                  <div className="flex flex-col gap-3">
                    {[
                      {
                        Icon: User,
                        role: "For Patients & Families",
                        desc: "Own your complete health timeline. Share records with any doctor and control who sees what and for how long.",
                      },
                      {
                        Icon: Stethoscope,
                        role: "For Doctors",
                        desc: "See a patient's full history the moment they walk in. No chasing records, no repeat tests.",
                      },
                      {
                        Icon: Building2,
                        role: "For Clinics",
                        desc: "Appointments, billing, records, and staff. One platform, zero IT overhead.",
                      },
                    ].map(({ Icon, role, desc }) => (
                      <div key={role} className="bg-white px-5 py-4 rounded-2xl shadow-sm border border-stone-200 flex items-start gap-4">
                        <div className="w-9 h-9 bg-pine-50 rounded-xl flex items-center justify-center shrink-0 border border-pine-100 mt-0.5">
                          <Icon className="w-4 h-4 text-pine-600" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-pine-900">{role}</p>
                          <p className="text-sm font-medium text-dim mt-0.5 leading-relaxed">{desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right: form */}
                <div className="w-full lg:w-1/2">
                  <div className="bg-white rounded-[2rem] border border-stone-200 p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                    <WaitlistForm />
                  </div>
                </div>

              </div>
            </FadeIn>
          </div>
        </section>
      </div>
    </>
  );
}
