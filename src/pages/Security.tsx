import { ShieldAlert, Key, Settings, Users, Server, Globe2, Lock } from "lucide-react";
import { SEO } from '@/components/common/SEO';
import { FadeIn } from "@/components/common/FadeIn";

export default function Security() {
  return (
    <>
      <SEO title="Security" description="Your health data is encrypted, patient-controlled, and stored in India. Fettlemed is built on health-grade security — here is exactly how it works." />
      <div className="flex flex-col w-full bg-stone-50 min-h-screen">
      {/* Hero */}
      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 bg-stone-900 text-white">
        <div className="container mx-auto px-4 md:px-8 max-w-[800px] text-center">
          <FadeIn eager>
            <ShieldAlert className="w-16 h-16 text-pine-400 mx-auto mb-8" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-6 tracking-tight">
              Security is not a feature. It’s the foundation.
            </h1>
            <p className="text-xl text-stone-300 font-medium leading-relaxed">
              Every layer of Fettlemed is built with health-grade security. Here’s exactly how we protect your data.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Visual Model */}
      <section className="py-20 bg-stone-100 border-b border-stone-200">
        <div className="container mx-auto px-4 max-w-5xl">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-2xl font-bold text-stone-900">How data ownership works</h2>
            </div>
            
            <div className="bg-white rounded-[2rem] border border-stone-200 p-8 md:p-12 shadow-sm flex flex-col md:flex-row items-center justify-between gap-8">
               <div className="flex flex-col items-center text-center max-w-[200px]">
                  <div className="w-16 h-16 rounded-full bg-pine-100 flex items-center justify-center mb-4 border border-pine-200">
                     <Lock className="w-6 h-6 text-pine-600" />
                  </div>
                  <h3 className="font-bold text-pine-900 text-lg mb-2">1. You</h3>
                  <p className="text-sm font-medium text-stone-500 leading-relaxed">You own and control your encrypted health data.</p>
               </div>
               
               <div className="hidden md:flex flex-col items-center justify-center px-4 w-full relative">
                 <div className="h-0.5 w-full bg-stone-200 absolute top-1/2 -translate-y-1/2"></div>
                 <div className="bg-white px-4 py-1.5 rounded-full border border-stone-200 font-bold text-xs uppercase tracking-wider text-stone-500 relative z-10 whitespace-nowrap shadow-sm">Grant Access</div>
               </div>
               <div className="md:hidden flex flex-col items-center justify-center py-4 h-full relative">
                 <div className="w-0.5 h-full min-h-[40px] bg-stone-200 absolute left-1/2 -translate-x-1/2"></div>
                 <div className="bg-white px-4 py-1.5 rounded-full border border-stone-200 font-bold text-xs uppercase tracking-wider text-stone-500 relative z-10 shadow-sm">Grant Access</div>
               </div>

               <div className="flex flex-col items-center text-center max-w-[200px]">
                  <div className="w-16 h-16 rounded-full bg-accent-100 flex items-center justify-center mb-4 border border-accent-200">
                     <Key className="w-6 h-6 text-accent-600" />
                  </div>
                  <h3 className="font-bold text-pine-900 text-lg mb-2">2. Your Doctor</h3>
                  <p className="text-sm font-medium text-stone-500 leading-relaxed">Doctor receives strict, temporary access to review.</p>
               </div>

               <div className="hidden md:flex flex-col items-center justify-center px-4 w-full relative">
                 <div className="h-0.5 w-full bg-stone-200 absolute top-1/2 -translate-y-1/2"></div>
                 <div className="bg-white px-4 py-1.5 rounded-full border border-stone-200 font-bold text-xs uppercase tracking-wider text-stone-500 relative z-10 whitespace-nowrap shadow-sm">Revoke</div>
               </div>
               <div className="md:hidden flex flex-col items-center justify-center py-4 h-full relative">
                 <div className="w-0.5 h-full min-h-[40px] bg-stone-200 absolute left-1/2 -translate-x-1/2"></div>
                 <div className="bg-white px-4 py-1.5 rounded-full border border-stone-200 font-bold text-xs uppercase tracking-wider text-stone-500 relative z-10 shadow-sm">Revoke</div>
               </div>

               <div className="flex flex-col items-center text-center max-w-[200px]">
                  <div className="w-16 h-16 rounded-full bg-stone-100 flex items-center justify-center mb-4 border border-stone-200">
                     <ShieldAlert className="w-6 h-6 text-stone-600" />
                  </div>
                  <h3 className="font-bold text-pine-900 text-lg mb-2">3. End Use</h3>
                  <p className="text-sm font-medium text-stone-500 leading-relaxed">Access revoked. Data remains encrypted & secure.</p>
               </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Main content + Sidebar */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-8 max-w-[1200px] flex flex-col lg:flex-row gap-12">
           <div className="lg:w-1/4 hidden lg:block">
              <div className="sticky top-32 space-y-4">
                 <h2 className="text-sm font-bold tracking-widest uppercase text-stone-400 mb-6">Security Stack</h2>
                 <a href="#encryption" className="block text-sm font-semibold text-stone-600 hover:text-pine-600">Encryption</a>
                 <a href="#consent" className="block text-sm font-semibold text-stone-600 hover:text-pine-600">Consent architecture</a>
                 <a href="#access" className="block text-sm font-semibold text-stone-600 hover:text-pine-600">Access controls</a>
                 <a href="#compliance" className="block text-sm font-semibold text-stone-600 hover:text-pine-600">Compliance</a>
                 <a href="#sovereignty" className="block text-sm font-semibold text-stone-600 hover:text-pine-600">Data sovereignty</a>
              </div>
           </div>
           
           <div className="lg:w-3/4 max-w-3xl">
             <div className="space-y-16">
                <div id="encryption"><FadeIn delay={0.1} className="scroll-mt-32">
                   <div className="flex gap-6 items-start">
                     <Key className="w-8 h-8 text-pine-600 shrink-0 mt-1" />
                     <div>
                       <h3 className="text-2xl font-bold text-stone-900 mb-3">Encryption</h3>
                       <p className="text-stone-600 text-lg leading-relaxed">All data encrypted with AES-256 at rest. All data in transit protected by TLS 1.2+. Patient health records are encrypted with patient-specific keys. Even in the event of a breach, encrypted data is unreadable without the patient’s consent credentials.</p>
                     </div>
                   </div>
                </FadeIn></div>
                <div id="consent"><FadeIn delay={0.1} className="scroll-mt-32">
                   <div className="flex gap-6 items-start">
                     <Settings className="w-8 h-8 text-pine-600 shrink-0 mt-1" />
                     <div>
                       <h3 className="text-2xl font-bold text-stone-900 mb-3">Consent architecture</h3>
                       <p className="text-stone-600 text-lg leading-relaxed">Fettlemed uses a granular, ABDM-compliant consent management system. Patients control exactly who accesses their data, what data they can see, and for how long. All consent events are recorded in an immutable audit trail. Real-time notifications alert patients to any new access request.</p>
                     </div>
                   </div>
                </FadeIn></div>
                <div id="access"><FadeIn delay={0.1} className="scroll-mt-32">
                   <div className="flex gap-6 items-start">
                     <Users className="w-8 h-8 text-pine-600 shrink-0 mt-1" />
                     <div>
                       <h3 className="text-2xl font-bold text-stone-900 mb-3">Access controls</h3>
                       <p className="text-stone-600 text-lg leading-relaxed">Role-based access ensures every user — front desk, nurse, doctor, admin — sees only the data their role requires. Multi-factor authentication for all provider accounts. Session management with automatic timeouts. All access attempts are logged with timestamps and user identifiers.</p>
                     </div>
                   </div>
                </FadeIn></div>
                <div id="compliance"><FadeIn delay={0.1} className="scroll-mt-32">
                   <div className="flex gap-6 items-start">
                     <ShieldAlert className="w-8 h-8 text-pine-600 shrink-0 mt-1" />
                     <div>
                       <h3 className="text-2xl font-bold text-stone-900 mb-3">Compliance</h3>
                       <p className="text-stone-600 text-lg leading-relaxed">DPDPA (Digital Personal Data Protection Act) compliant. Aligned with ABDM framework and standards. ABHA ID integration for national health data portability. FHIR (Fast Healthcare Interoperability Resources) data exchange standards. ISO 27001 certification in progress.</p>
                     </div>
                   </div>
                </FadeIn></div>
                <div id="sovereignty"><FadeIn delay={0.1} className="scroll-mt-32">
                   <div className="flex gap-6 items-start">
                     <Globe2 className="w-8 h-8 text-pine-600 shrink-0 mt-1" />
                     <div>
                       <h3 className="text-2xl font-bold text-stone-900 mb-3">Data sovereignty</h3>
                       <p className="text-stone-600 text-lg leading-relaxed">All data stored on Indian servers. No data transferred outside India. Patient data is never used for commercial purposes, advertising, or third-party monetisation. Health data will never be sold. This is a contractual commitment, not a policy preference.</p>
                     </div>
                   </div>
                </FadeIn></div>
             </div>
            </div>
         </div>
      </section>
    </div>
      </>
  );
}
