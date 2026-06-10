import React from 'react';
import { Link } from "react-router-dom";
import { Button } from "@/components/common/Button";
import { FadeIn } from "@/components/common/FadeIn";
import { useWaitlist } from "@/contexts/WaitlistContext";

export function ClinicPilot() {
  const { openWaitlist } = useWaitlist();

  return (
    <section className="py-14 md:py-20 bg-pine-900 text-white relative overflow-hidden border-b border-stone-100">
       <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-pine-800/40 rounded-full blur-[120px] pointer-events-none opacity-50 transform translate-x-1/3 -translate-y-1/3"></div>
       <div className="container mx-auto px-4 md:px-8 max-w-4xl text-center relative z-10">
          <FadeIn>
             <h2 className="text-3xl md:text-5xl font-medium text-white tracking-tight leading-tight mb-8">
                First clinics shape the product. Not just use it.
             </h2>

             <div className="text-lg text-pine-100 leading-relaxed text-left md:text-center mb-10 max-w-2xl mx-auto">
                <p className="mb-6">You call us. We come. We don't leave until your clinic is running.</p>
                <ul className="space-y-3 text-left max-w-sm mx-auto">
                   <li className="flex items-start gap-2"><span className="text-pine-400 mt-1 shrink-0">•</span>Hands-on onboarding until you're running.</li>
                   <li className="flex items-start gap-2"><span className="text-pine-400 mt-1 shrink-0">•</span>Talk directly to the founding team.</li>
                   <li className="flex items-start gap-2"><span className="text-pine-400 mt-1 shrink-0">•</span>Your feedback ships first.</li>
                </ul>
             </div>

             <p className="text-pine-200 text-base font-medium mb-10 max-w-2xl mx-auto">
                Not sure it fits? Write to{" "}
                <a href="mailto:hello@fettlemed.com" className="underline hover:text-white transition-colors">hello@fettlemed.com</a>
                {" "}- a real person replies.
             </p>

             <div className="flex flex-col items-center gap-3">
                <Button variant="animated" size="lg" onClick={() => openWaitlist('Clinic')} className="bg-white hover:bg-pine-50 text-pine-900 h-14 px-12 text-lg rounded-xl font-medium shadow-lg">
                  Join the Clinic Pilot
                </Button>

                <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 text-sm font-medium text-pine-300 mt-3">
                   <span>Solo clinics and polyclinics welcome</span>
                   <span className="hidden sm:inline w-1 h-1 rounded-full bg-pine-600"></span>
                   <span>Setup in one session, on your existing devices</span>
                </div>

                <p className="text-pine-400 text-xs font-medium mt-4">
                   By applying, you agree to our{" "}
                   <Link to="/privacy-policy" className="underline hover:text-pine-200 transition-colors">Privacy Policy</Link>.
                   {" "}Clinic and user data is end-to-end encrypted and never shared with third parties.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-sm font-medium text-pine-400 mt-8 pt-6 border-t border-pine-800">
                   <span>Are you a doctor? <Link to="/doctor-portal" className="text-pine-200 hover:text-white transition-colors">See the doctor portal →</Link></span>
                   <span className="hidden sm:inline w-1 h-1 rounded-full bg-pine-700"></span>
                   <span>Looking for the patient app? <Link to="/patient-app" className="text-pine-200 hover:text-white transition-colors">See FettleMed for patients →</Link></span>
                </div>
             </div>
          </FadeIn>
       </div>
    </section>
  );
}
