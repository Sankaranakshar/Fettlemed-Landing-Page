import { FAQ } from '@/components/common/FAQ';
import { SEO } from '@/components/common/SEO';
import { FadeIn } from "@/components/common/FadeIn";
import { ClinicHero } from "@/components/sections/ClinicManagement/ClinicHero";
import { ClinicProblem } from "@/components/sections/ClinicManagement/ClinicProblem";
import { ClinicFeatures } from "@/components/sections/ClinicManagement/ClinicFeatures";
import { ClinicFrontDesk } from "@/components/sections/ClinicManagement/ClinicFrontDesk";
import { ClinicOwnerView } from "@/components/sections/ClinicManagement/ClinicOwnerView";
import { ClinicConnectedLayer } from "@/components/sections/ClinicManagement/ClinicConnectedLayer";
import { ClinicSwitching } from "@/components/sections/ClinicManagement/ClinicSwitching";
import { ClinicWhoWeAre } from "@/components/sections/ClinicManagement/ClinicWhoWeAre";
import { ClinicPilot } from "@/components/sections/ClinicManagement/ClinicPilot";

const faqSections = [
  {
    title: "Getting started",
    items: [
      {
        "question": "Is this built for solo clinics or larger polyclinics too?",
        "answer": "Both. FettleMed works for a single-doctor GP clinic and for multi-doctor polyclinics. The platform scales to the size of your practice."
      },
      {
        "question": "How many staff members can I add?",
        "answer": "There is no fixed limit. You can add front desk staff, nurses, billing staff, and multiple doctors under one clinic account."
      },
      {
        "question": "Can different staff see different things?",
        "answer": "Yes. FettleMed uses role-based access control. Front desk staff see what they need for registration and scheduling. Billing staff see financial information. Clinical notes are visible only to doctors. Each role sees only what is relevant to their work."
      },
      {
        "question": "Do we need to replace our entire setup or can we start with one module?",
        "answer": "You can start with what matters most to you. FettleMed is modular. Some clinics will start with the doctor portal and add clinic management features as they get comfortable. You do not have to implement everything on day one."
      }
    ]
  },
  {
    title: "Operations",
    items: [
      {
        "question": "Can the system send appointment reminders to patients automatically?",
        "answer": "Yes. FettleMed sends automated reminders to patients ahead of their appointments to reduce no-shows."
      },
      {
        "question": "What happens when a patient does not show up?",
        "answer": "The system flags no-shows so your front desk has visibility and can follow up or reallocate the slot."
      },
      {
        "question": "Can I manage multiple doctors under one clinic account?",
        "answer": "Yes. The clinic owner has a single dashboard with visibility across all doctors in the clinic — appointments, patient flow, and records."
      },
      {
        "question": "Can I see a real-time view of the clinic — how many patients are waiting, who is in consultation?",
        "answer": "Yes. The clinic dashboard gives you a live view of patient flow so the front desk can manage queues without confusion."
      },
      {
        "question": "Can the front desk use it on a tablet?",
        "answer": "Yes. FettleMed works on tablets and laptops. No dedicated hardware is required."
      }
    ]
  },
  {
    title: "Billing and admin",
    items: [
      {
        "question": "Does it handle GST on invoices?",
        "answer": "GST-compliant billing is planned and will be part of the platform. We will confirm availability ahead of the pilot."
      },
      {
        "question": "Can it generate billing reports automatically?",
        "answer": "Yes. The clinic owner dashboard includes financial reports — daily collections, billing by doctor, and monthly summaries — without any manual input."
      },
      {
        "question": "Can it connect with payment systems we already use?",
        "answer": "Payment gateway integration is on our roadmap. We will share specifics during the pilot."
      }
    ]
  },
  {
    title: "Switching",
    items: [
      {
        "question": "Do we have to digitise all our existing paper records first?",
        "answer": "No. You start fresh from the first consultation on FettleMed. Historical paper records do not need to be entered. Patients can upload their own older records through the patient app if they choose to."
      },
      {
        "question": "How long does it take to train front desk staff?",
        "answer": "FettleMed is designed for staff who have never used clinic software before. Most front desk operations can be learned in one session. We support your team through onboarding."
      },
      {
        "question": "If we expand to a second location, can both clinics be managed from one account?",
        "answer": "Multi-location management is planned for a future release. It is on our roadmap based on demand from clinic owners."
      },
      {
        "question": "What happens to our data if we stop using FettleMed?",
        "answer": "You keep everything. We will provide a complete export of all clinic and patient records created during your time on FettleMed. Your data does not disappear."
      }
    ]
  },
  {
    title: "Data and security",
    items: [
      {
        "question": "Can clinic staff see a patient's full medical history?",
        "answer": "No. Staff access is controlled by role. Front desk staff see registration and appointment information only. Clinical records are visible only to doctors. A patient's records from other clinics are visible only with that patient's explicit consent."
      },
      {
        "question": "Who is responsible for data security — FettleMed or the clinic?",
        "answer": "FettleMed is responsible for the security of the platform and the infrastructure. The clinic is responsible for ensuring that staff access is managed correctly — for example, not sharing login credentials. We make this easy through role-based access controls."
      },
      {
        "question": "What happens if there is a data breach?",
        "answer": "We have procedures in place for breach detection and response in line with DPDPA 2023 requirements. Affected patients and the relevant authorities would be notified promptly. We take this obligation seriously."
      },
      {
        "question": "Is patient data shared with any third party — labs, insurers, or the government?",
        "answer": "No. Patient data is never sold or shared with any third party for commercial purposes. It is never shared with insurers or employers. Any sharing with labs or diagnostic partners happens only with the patient's explicit consent. Government access requires either explicit patient consent or a lawful order from the relevant authority."
      }
    ]
  }
];

export default function ClinicManagement() {
  return (
    <>
      <SEO title="For Clinics" description="One platform that handles the clinic so everyone inside it can focus on what they are actually there to do." />
      <div className="flex flex-col w-full bg-surface-50 font-sans">
        <ClinicHero />
        <ClinicProblem />
        <ClinicFeatures />
        <ClinicFrontDesk />
        <ClinicOwnerView />
        <ClinicConnectedLayer />
        <ClinicSwitching />
        <ClinicWhoWeAre />
        <ClinicPilot />

        <div className="container mx-auto px-4 lg:px-8 py-24 max-w-4xl">
           <FadeIn className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-pine-900 tracking-tight">Frequently asked questions</h2>
           </FadeIn>
           <FAQ sections={faqSections} />
        </div>
      </div>
    </>
  );
}
