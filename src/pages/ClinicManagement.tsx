import { FAQ } from '@/components/common/FAQ';
import { SEO } from '@/components/common/SEO';
import { clinicFaqs } from '@/config/faqs';
import { ComparisonTable } from "@/components/sections/ComparisonTable";
import { ClinicHero } from "@/components/sections/ClinicManagement/ClinicHero";
import { ClinicProblem } from "@/components/sections/ClinicManagement/ClinicProblem";
import { ClinicFeatures } from "@/components/sections/ClinicManagement/ClinicFeatures";
import { ClinicOwnerView } from "@/components/sections/ClinicManagement/ClinicOwnerView";
import { ClinicConnectedLayer } from "@/components/sections/ClinicManagement/ClinicConnectedLayer";
import { ClinicSwitching } from "@/components/sections/ClinicManagement/ClinicSwitching";
import { ClinicWhoWeAre } from "@/components/sections/ClinicManagement/ClinicWhoWeAre";
import { ClinicPilot } from "@/components/sections/ClinicManagement/ClinicPilot";


export default function ClinicManagement() {
  return (
    <>
      <SEO title="For Clinics" description="FettleMed helps Indian clinics manage appointments, billing, and patient records in one platform. ABDM-aligned. No IT team needed. Built for GPs, specialists, and polyclinics." />
      <div className="flex flex-col w-full bg-surface-50 font-sans">
        <ClinicHero />
        <ClinicProblem />
        <ClinicFeatures />
        <ClinicConnectedLayer />
        <ClinicOwnerView />
        <ComparisonTable heading="How FettleMed compares to the software you know" />
        <ClinicSwitching />
        <ClinicWhoWeAre />
        <ClinicPilot />

        <div className="container mx-auto px-4 lg:px-8 py-8 md:py-12 max-w-4xl">
           <FAQ sections={clinicFaqs} />
        </div>
      </div>
    </>
  );
}
