import { FAQ } from '@/components/common/FAQ';
import { SEO } from '@/components/common/SEO';
import { doctorFaqs } from '@/config/faqs';
import { ComparisonTable } from "@/components/sections/ComparisonTable";
import { DoctorHero } from "@/components/sections/DoctorPortal/DoctorHero";
import { DoctorProblem } from "@/components/sections/DoctorPortal/DoctorProblem";
import { DoctorDayOne } from "@/components/sections/DoctorPortal/DoctorDayOne";
import { DoctorConsent } from "@/components/sections/DoctorPortal/DoctorConsent";
import { DoctorSwitching } from "@/components/sections/DoctorPortal/DoctorSwitching";
import { DoctorWhoWeAre } from "@/components/sections/DoctorPortal/DoctorWhoWeAre";
import { DoctorPilot } from "@/components/sections/DoctorPortal/DoctorPilot";


export default function DoctorPortal() {
  return (
    <>
      <SEO title="For Doctors" description="FettleMed gives Indian doctors complete patient history before every consultation. Write digital prescriptions, track lab reports, and maintain clinical notes in one workspace. ABDM-aligned." />
      <div className="flex flex-col w-full bg-surface-50">
        <DoctorHero />
        <DoctorProblem />
        <DoctorDayOne />
        <DoctorConsent />
        <ComparisonTable heading="How FettleMed compares to the software you know" />
        <DoctorSwitching />
        <DoctorWhoWeAre />
        <DoctorPilot />

        <div className="container mx-auto px-4 lg:px-8 py-8 md:py-12 max-w-4xl">
           <FAQ sections={doctorFaqs} />
        </div>
      </div>
    </>
  );
}
