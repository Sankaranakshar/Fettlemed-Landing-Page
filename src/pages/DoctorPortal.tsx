import { FAQ } from '@/components/common/FAQ';
import { SEO } from '@/components/common/SEO';
import { FadeIn } from "@/components/common/FadeIn";
import { DoctorHero } from "@/components/sections/DoctorPortal/DoctorHero";
import { DoctorProblem } from "@/components/sections/DoctorPortal/DoctorProblem";
import { DoctorDayOne } from "@/components/sections/DoctorPortal/DoctorDayOne";
import { DoctorConsent } from "@/components/sections/DoctorPortal/DoctorConsent";
import { DoctorSwitching } from "@/components/sections/DoctorPortal/DoctorSwitching";
import { DoctorWhoWeAre } from "@/components/sections/DoctorPortal/DoctorWhoWeAre";
import { DoctorPilot } from "@/components/sections/DoctorPortal/DoctorPilot";

const faqSections = [
  {
    title: "Getting started",
    items: [
      {
        "question": "How long does it take to get set up before my first consultation?",
        "answer": "We have designed onboarding to be as fast as possible. You should be ready to see your first patient on FettleMed on the same day you sign up. There is no lengthy implementation process."
      },
      {
        "question": "Do I need to buy any new hardware or equipment?",
        "answer": "No. FettleMed works on the devices you already own — your phone, tablet, or laptop. No special equipment required."
      },
      {
        "question": "Can I use it on my existing phone or laptop?",
        "answer": "Yes. FettleMed works on any modern browser and on Android and iOS devices. You do not need to upgrade your devices."
      },
      {
        "question": "Do I need an internet connection at all times?",
        "answer": "FettleMed is a cloud-first platform. An internet connection is required to use it. This ensures that all records are updated in real time and that your patients always have the most current version of their health data. We are not planning an offline mode currently, though we continue to evaluate this based on doctor feedback."
      }
    ]
  },
  {
    title: "Switching and disruption",
    items: [
      {
        "question": "Will I have to enter all my existing patient records when I switch?",
        "answer": "No. You do not need to migrate historical records to get started. FettleMed begins building a digital record from the first consultation you conduct on the platform. Over time, as patients use the app to upload their older records, their history becomes richer automatically."
      },
      {
        "question": "What happens to my patients who are not on FettleMed — can I still create records for them?",
        "answer": "Yes. You can create consultation records and e-prescriptions for any patient regardless of whether they use the FettleMed patient app. When they join the app later, their records will be available to them."
      },
      {
        "question": "How long does it take for my staff to learn the system?",
        "answer": "FettleMed is designed for clinics that are moving from paper or Excel, not for teams with IT departments. Most functions can be learned in a single session. We support you through onboarding and remain available for questions."
      },
      {
        "question": "Will FettleMed change how I see patients?",
        "answer": "No. FettleMed is built to fit into your existing consultation routine, not replace it. You continue seeing patients the way you always have. The difference is that the documentation happens faster and the records are immediately available digitally."
      },
      {
        "question": "What if I try it and decide it is not for me — what happens to my data?",
        "answer": "Your data belongs to you. If you decide to leave FettleMed, we will give you a complete export of all records you created on the platform. Nothing is locked in."
      }
    ]
  },
  {
    title: "Daily workflow",
    items: [
      {
        "question": "How does the patient history dashboard work?",
        "answer": "When you open a patient's file before a consultation, FettleMed shows you a consolidated view of their history — past diagnoses, prescriptions, and lab results — without you having to search for anything. If the patient has consented to share their full health profile, you see records from other doctors too."
      },
      {
        "question": "Can I create prescriptions in regional languages?",
        "answer": "Regional language support is currently in development and will be launched soon. The platform currently operates in English."
      },
      {
        "question": "Can I access my records from outside the clinic?",
        "answer": "Yes. Because FettleMed is cloud-based, you can access all your records securely from anywhere — your home, another clinic, or while travelling — as long as you have an internet connection."
      },
      {
        "question": "What happens to consultation records if a patient revokes their consent after a visit?",
        "answer": "You retain every record you create. Revoking consent limits your access to the patient's broader health profile from other sources. It does not remove the records from your own consultations."
      },
      {
        "question": "If a patient has records from a different doctor, do I see those automatically?",
        "answer": "No. You only see records from other doctors if the patient has explicitly consented to share them with you. Consent is always patient-initiated."
      }
    ]
  },
  {
    title: "Data and security",
    items: [
      {
        "question": "Who owns the records I create?",
        "answer": "Legally, clinical records are owned by the doctor who creates them, in line with the Indian Medical Council Regulations 2002. FettleMed maintains these records on your behalf and provides a copy to the patient, which the patient owns. You are always able to export your records."
      },
      {
        "question": "Is my patient data stored in India?",
        "answer": "Patient health records are stored on infrastructure with the primary data centre in India. Certain backup or supporting services may operate in other regions under contractual data-protection obligations. See our Security page for details."
      },
      {
        "question": "What happens to my data if FettleMed shuts down?",
        "answer": "You will always be able to export a complete copy of your records. We are committed to ensuring that no doctor or patient loses access to their health data under any circumstance."
      },
      {
        "question": "Can FettleMed access my patient records?",
        "answer": "FettleMed does not access patient records for any commercial purpose. Access by our team is strictly limited to technical support and security operations, with appropriate safeguards in place."
      },
      {
        "question": "Is this compliant with Indian data protection laws?",
        "answer": "We are building FettleMed in alignment with the Digital Personal Data Protection Act 2023. Compliance is an active and ongoing process as the regulatory framework continues to evolve in India."
      }
    ]
  },
  {
    title: "About the product",
    items: [
      {
        "question": "Is FettleMed built for specialists or only general practitioners?",
        "answer": "FettleMed is currently built for any doctor practicing in India regardless of specialty. Specialty-specific modules are on our roadmap and will be developed based on feedback from doctors using the platform."
      },
      {
        "question": "How is this different from other software I have heard of?",
        "answer": "Most existing platforms are either doctor-side tools or patient-facing apps. FettleMed connects both. The patient owns a live copy of every record created during their consultations. Consent is granular — the patient controls who sees their data, for how long, and can revoke access at any time. This level of patient data ownership is not a feature of existing Indian HMS platforms."
      },
      {
        "question": "Do my patients need to download an app for this to work?",
        "answer": "No. FettleMed works fully for doctors regardless of whether their patients use the app. When patients do join, their records become richer and more connected. But the doctor's workflow is not dependent on patient adoption."
      },
      {
        "question": "What is ABDM and do I need to worry about it?",
        "answer": "ABDM is the Ayushman Bharat Digital Mission, a government initiative to create a national digital health infrastructure. As a doctor, you do not need to do anything about ABDM today. FettleMed is building toward ABDM compliance and will handle the technical integration on your behalf when the time comes."
      },
      {
        "question": "Is this built by people who understand how Indian clinics actually work?",
        "answer": "FettleMed is built by a team with clinical backgrounds spanning India, the UK, and Singapore. Every feature is validated against real clinical workflows before it is built. Our specific focus is making the switch from paper to digital as friction-free as possible for Indian doctors."
      }
    ]
  }
];

export default function DoctorPortal() {
  return (
    <>
      <SEO title="For Doctors" description="FettleMed gives Indian doctors complete patient history before every consultation. Write digital prescriptions, track lab reports, and maintain clinical notes in one workspace. ABDM-aligned." />
      <div className="flex flex-col w-full bg-surface-50">
        <DoctorHero />
        <DoctorProblem />
        <DoctorDayOne />
        <DoctorConsent />
        <DoctorSwitching />
        <DoctorWhoWeAre />
        <DoctorPilot />

        <div className="container mx-auto px-4 lg:px-8 py-16 md:py-20 max-w-4xl">
           <FadeIn className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-medium text-pine-900 tracking-tight">Frequently asked questions</h2>
           </FadeIn>
           <FAQ sections={faqSections} />
        </div>
      </div>
    </>
  );
}
