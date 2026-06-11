import { Link } from 'react-router-dom';
import { FAQ } from '@/components/common/FAQ';
import { SEO } from '@/components/common/SEO';
import { patientFaqs } from '@/config/faqs';
import { FadeIn } from "@/components/common/FadeIn";
import { PatientHero } from "@/components/sections/PatientApp/PatientHero";
import { PatientProblem } from "@/components/sections/PatientApp/PatientProblem";
import { PatientFeatures } from "@/components/sections/PatientApp/PatientFeatures";
import { PatientForWho } from "@/components/sections/PatientApp/PatientForWho";
import { PatientHowItWorks } from "@/components/sections/PatientApp/PatientHowItWorks";
import { PatientDataRules } from "@/components/sections/PatientApp/PatientDataRules";
import { PatientWhoWeAre } from "@/components/sections/PatientApp/PatientWhoWeAre";
import { PatientCTA } from "@/components/sections/PatientApp/PatientCTA";

export default function PatientApp() {
  return (
    <>
      <SEO title="For Patients & Families" description="FettleMed keeps every prescription, lab report, and doctor visit in one place. Share records with any doctor in seconds and revoke access any time. ABDM-aligned. Built in India." />
      <div className="flex flex-col w-full bg-surface-50">
        <PatientHero />
        <PatientProblem />
        <PatientFeatures />

        <PatientForWho />
        <PatientHowItWorks />
        <PatientDataRules />
        <PatientWhoWeAre />
        <PatientCTA />

        <div className="container mx-auto px-4 lg:px-8 py-8 md:py-12 max-w-4xl">
           <FAQ sections={patientFaqs} />
        </div>

        {/* Bottom crosslinks - segmented cards to demarcate patient vs clinical environments */}
        <section className="py-10 bg-pine-900 text-center">
          <FadeIn>
            <div className="container mx-auto px-6 max-w-2xl">
              <p className="text-pine-300 text-lg font-medium mb-8">FettleMed also serves the doctors and clinics you visit.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/doctor-portal" className="px-6 py-3 border border-pine-700 bg-pine-800 rounded-xl text-white text-sm font-medium hover:bg-pine-700 transition-colors">
                  For Doctors →
                </Link>
                <Link to="/clinic-management" className="px-6 py-3 border border-pine-700 bg-pine-800 rounded-xl text-white text-sm font-medium hover:bg-pine-700 transition-colors">
                  For Clinics →
                </Link>
              </div>
            </div>
          </FadeIn>
        </section>
      </div>
    </>
  );
}
