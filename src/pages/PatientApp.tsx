import { Link } from 'react-router-dom';
import { FAQ } from '@/components/common/FAQ';
import { SEO } from '@/components/common/SEO';
import { FadeIn } from "@/components/common/FadeIn";
import { PatientHero } from "@/components/sections/PatientApp/PatientHero";
import { PatientProblem } from "@/components/sections/PatientApp/PatientProblem";
import { PatientFeatures } from "@/components/sections/PatientApp/PatientFeatures";
import { PatientForWho } from "@/components/sections/PatientApp/PatientForWho";
import { PatientHowItWorks } from "@/components/sections/PatientApp/PatientHowItWorks";
import { PatientDataRules } from "@/components/sections/PatientApp/PatientDataRules";
import { PatientWhoWeAre } from "@/components/sections/PatientApp/PatientWhoWeAre";
import { PatientCTA } from "@/components/sections/PatientApp/PatientCTA";

const faqSections = [
  {
    title: "Getting started",
    items: [
      {
        "question": "Is the patient app available now?",
        "answer": "The patient app is coming soon. We are currently piloting the doctor and clinic portal, with the patient app to follow shortly after. Join the waitlist and we will notify you the moment it is ready."
      },
      {
        "question": "Does my doctor need to be on FettleMed for me to use the app?",
        "answer": "No. You can start using the app independently — upload your existing prescriptions, lab reports, and medical records yourself and build your health profile straight away. When your doctor joins FettleMed, new records will sync to your profile automatically."
      },
      {
        "question": "Does it work in Hindi, Tamil, Telugu, or other Indian languages?",
        "answer": "Regional language support is in development and will be available soon after launch. We will announce language availability as it rolls out."
      },
      {
        "question": "Do I need a smartphone?",
        "answer": "Yes. FettleMed currently requires a smartphone running Android or iOS. It does not require a high-end device — any modern smartphone will work."
      }
    ]
  },
  {
    title: "My health records",
    items: [
      {
        "question": "Where are my records stored?",
        "answer": "Your records are stored securely on FettleMed's infrastructure with the primary data centre in India — not just on your phone. This means you can access them from any device at any time and never lose them if your phone is damaged or lost."
      },
      {
        "question": "What types of records can I store?",
        "answer": "You can store prescriptions, lab reports, diagnostic scans, consultation notes, and vaccination records. If your doctor uses FettleMed, new records from your consultations are added automatically."
      },
      {
        "question": "If I upload a PDF lab report, does the app just store it or does it understand what is in it?",
        "answer": "FettleMed can read and structure the information inside your PDF lab reports - not just store the file - so your results are organised and searchable. This feature is being rolled out progressively through the pilot. Plain-language explanations are on our near-term roadmap. FettleMed helps you understand your results; it does not replace your doctor's advice."
      },
      {
        "question": "Can I add records from before I started using FettleMed?",
        "answer": "Yes. You can upload older prescriptions, lab reports, and medical documents at any time. FettleMed organises them into your health timeline so your history is complete from day one."
      },
      {
        "question": "If I lose my phone, do I lose my records?",
        "answer": "No. Your records are stored securely in the cloud. Log in from any new device and your full health profile will be there."
      }
    ]
  },
  {
    title: "Sharing and consent",
    items: [
      {
        "question": "How do I share my records with a new doctor?",
        "answer": "Through the app, you can grant a doctor access to your health profile. This takes a few taps. You choose what they can see and for how long."
      },
      {
        "question": "Can I choose which records a doctor sees?",
        "answer": "Yes. Consent is yours to control. You decide whether to share your full health profile or specific records only."
      },
      {
        "question": "How do I revoke a clinic's access to my records?",
        "answer": "You can revoke access at any time through the app. Once revoked, the doctor no longer has access to your broader health profile. The records they created during your consultation remain with them as required by Indian medical regulations."
      },
      {
        "question": "If I gave access for one consultation and forgot to revoke it, does it expire?",
        "answer": "You are in control of access duration in the app. You can set time-limited access or revoke it manually at any point. We will guide you through this clearly in the app so nothing is unclear."
      },
      {
        "question": "Can I see who has accessed my records and when?",
        "answer": "Yes. FettleMed maintains a full audit trail. You can see a log of every time your records were accessed and by whom."
      }
    ]
  },
  {
    title: "Family health",
    items: [
      {
        "question": "Can I manage health records for my parents or children?",
        "answer": "Yes. You can manage health profiles for multiple family members from a single FettleMed account. Each family member has their own separate health record."
      },
      {
        "question": "Does each family member have their own privacy settings?",
        "answer": "Yes. Consent and access for each family member's records is managed separately. Sharing your own records does not affect your family members' records."
      },
      {
        "question": "If my child turns 18, can they take over their own account?",
        "answer": "Yes. We will support transitioning a dependent's health profile to their own independent account when the time comes."
      }
    ]
  },
  {
    title: "Data and privacy",
    items: [
      {
        "question": "Does FettleMed sell my health data to anyone?",
        "answer": "Never. Your health data is never sold, never used for advertising, and never shared with any third party without your explicit consent."
      },
      {
        "question": "Can FettleMed's team see my records?",
        "answer": "FettleMed staff do not have access to your personal health records for any commercial or analytical purpose. Access is limited strictly to technical operations where necessary, with appropriate safeguards."
      },
      {
        "question": "Is my data stored in India?",
        "answer": "Patient health records are stored on infrastructure with the primary data centre in India. Certain backup or supporting services may operate in other regions under contractual data-protection obligations. See our Security page for details."
      },
      {
        "question": "What happens to my records if I delete my account?",
        "answer": "You can request deletion of your account and your personal data at any time. We will provide you with a complete export of your records before deletion so you never lose your health history. Note that records created by your doctors during consultations are retained by them as required under Indian medical regulations."
      },
      {
        "question": "Can my insurer or employer ever access my health data through FettleMed?",
        "answer": "No. FettleMed never shares your data with insurers, employers, or any third party without your explicit consent. We will never facilitate this even if asked."
      },
      {
        "question": "What if the government asks for my health data?",
        "answer": "We will always strive to protect your rights. We will not share your personal health data with any government authority without your consent unless we are legally required to do so by a lawful order from a relevant authority. We will be transparent about any such requests to the extent permitted by law."
      }
    ]
  }
];

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

        <div className="container mx-auto px-4 lg:px-8 py-16 md:py-20 max-w-4xl">
           <FadeIn className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-medium text-pine-900 tracking-tight">Frequently asked questions</h2>
           </FadeIn>
           <FAQ sections={faqSections} />
        </div>

        {/* Bottom crosslinks — segmented cards to demarcate patient vs clinical environments */}
        <section className="py-16 bg-pine-900 text-center">
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
