import type { FAQSection } from "@/components/common/FAQ";

export const patientFaqs: FAQSection[] = [
  {
    title: "Getting started",
    items: [
      {
        question: "Is the patient app available now?",
        answer: "The patient app is coming soon. We are currently piloting the doctor and clinic portal, with the patient app to follow shortly after. Join the waitlist and we will notify you the moment it is ready.",
      },
      {
        question: "Does my doctor need to be on FettleMed for me to use the app?",
        answer: "No. You can start using the app independently - upload your existing prescriptions, lab reports, and medical records yourself and build your health profile straight away. When your doctor joins FettleMed, new records will sync to your profile automatically.",
      },
      {
        question: "Does it work in Hindi, Tamil, Telugu, or other Indian languages?",
        answer: "Regional language support is in development and will be available soon after launch. We will announce language availability as it rolls out.",
      },
      {
        question: "Do I need a smartphone?",
        answer: "Yes. FettleMed currently requires a smartphone running Android or iOS. It does not require a high-end device - any modern smartphone will work.",
      },
    ],
  },
  {
    title: "My health records",
    items: [
      {
        question: "Where are my records stored?",
        answer: "Your records are stored on infrastructure with the primary data centre in India. Certain backup or supporting services may operate in other regions under contractual data-protection obligations. See our Security page for details. This means you can access them from any device at any time and never lose them if your phone is damaged or lost.",
      },
      {
        question: "What types of records can I store?",
        answer: "You can store prescriptions, lab reports, diagnostic scans, consultation notes, and vaccination records. If your doctor uses FettleMed, new records from your consultations are added automatically.",
      },
      {
        question: "If I upload a PDF lab report, does the app just store it or does it understand what is in it?",
        answer: "FettleMed can read and structure the information inside your PDF lab reports - not just store the file - so your results are organised and searchable. This feature is being rolled out progressively through the pilot. Plain-language explanations are on our near-term roadmap. FettleMed helps you understand your results; it does not replace your doctor's advice.",
      },
      {
        question: "Can I add records from before I started using FettleMed?",
        answer: "Yes. You can upload older prescriptions, lab reports, and medical documents at any time. FettleMed organises them into your health timeline so your history is complete from day one.",
      },
      {
        question: "If I lose my phone, do I lose my records?",
        answer: "No. Your records are stored securely in the cloud. Log in from any new device and your full health profile will be there.",
      },
    ],
  },
  {
    title: "Sharing and consent",
    items: [
      {
        question: "How do I share my records with a new doctor?",
        answer: "Through the app, you can grant a doctor access to your health profile. This takes a few taps. You choose what they can see and for how long.",
      },
      {
        question: "Can I choose which records a doctor sees?",
        answer: "Yes. Consent is yours to control. You decide whether to share your full health profile or specific records only.",
      },
      {
        question: "How do I revoke a clinic's access to my records?",
        answer: "You can revoke access at any time through the app. Once revoked, the doctor no longer has access to your broader health profile. The records they created during your consultation remain with them as required by Indian medical regulations.",
      },
      {
        question: "If I gave access for one consultation and forgot to revoke it, does it expire?",
        answer: "You are in control of access duration in the app. You can set time-limited access or revoke it manually at any point. We will guide you through this clearly in the app so nothing is unclear.",
      },
      {
        question: "Can I see who has accessed my records and when?",
        answer: "Yes. FettleMed maintains a full audit trail. You can see a log of every time your records were accessed and by whom.",
      },
    ],
  },
  {
    title: "Family health",
    items: [
      {
        question: "Can I manage health records for my parents or children?",
        answer: "Yes. You can manage health profiles for multiple family members from a single FettleMed account. Each family member has their own separate health record.",
      },
      {
        question: "Does each family member have their own privacy settings?",
        answer: "Yes. Consent and access for each family member's records is managed separately. Sharing your own records does not affect your family members' records.",
      },
      {
        question: "If my child turns 18, can they take over their own account?",
        answer: "Yes. We will support transitioning a dependent's health profile to their own independent account when the time comes.",
      },
    ],
  },
  {
    title: "Data and privacy",
    items: [
      {
        question: "Does FettleMed sell my health data to anyone?",
        answer: "Never. Your health data is never sold, never used for advertising, and never shared with any third party without your explicit consent.",
      },
      {
        question: "Can FettleMed's team see my records?",
        answer: "FettleMed staff do not have access to your personal health records for any commercial or analytical purpose. Access is limited strictly to technical operations where necessary, with appropriate safeguards.",
      },
      {
        question: "Is my data stored in India?",
        answer: "Patient health records are stored on infrastructure with the primary data centre in India. Certain backup or supporting services may operate in other regions under contractual data-protection obligations. See our Security page for details.",
      },
      {
        question: "What happens to my records if I delete my account?",
        answer: "You can request deletion of your account and your personal data at any time. We will provide you with a complete export of your records before deletion so you never lose your health history. Note that records created by your doctors during consultations are retained by them as required under Indian medical regulations.",
      },
      {
        question: "Can my insurer or employer ever access my health data through FettleMed?",
        answer: "No. FettleMed never shares your data with insurers, employers, or any third party without your explicit consent. We will never facilitate this even if asked.",
      },
      {
        question: "What if the government asks for my health data?",
        answer: "We will always strive to protect your rights. We will not share your personal health data with any government authority without your consent unless we are legally required to do so by a lawful order from a relevant authority. We will be transparent about any such requests to the extent permitted by law.",
      },
    ],
  },
];

export const doctorFaqs: FAQSection[] = [
  {
    title: "Getting started",
    items: [
      {
        question: "How long does it take to get set up before my first consultation?",
        answer: "We have designed onboarding to be as fast as possible. You should be ready to see your first patient on FettleMed on the same day you sign up. There is no lengthy implementation process.",
      },
      {
        question: "Do I need to buy any new hardware or equipment?",
        answer: "No. FettleMed works on the devices you already own - your phone, tablet, or laptop. No special equipment required.",
      },
      {
        question: "Can I use it on my existing phone or laptop?",
        answer: "Yes. FettleMed works on any modern browser and on Android and iOS devices. You do not need to upgrade your devices.",
      },
      {
        question: "Do I need an internet connection at all times?",
        answer: "FettleMed is a cloud-first platform. An internet connection is required to use it. This ensures that all records are updated in real time and that your patients always have the most current version of their health data. We are not planning an offline mode currently, though we continue to evaluate this based on doctor feedback.",
      },
    ],
  },
  {
    title: "Switching and disruption",
    items: [
      {
        question: "Will I have to enter all my existing patient records when I switch?",
        answer: "No. You do not need to migrate historical records to get started. FettleMed begins building a digital record from the first consultation you conduct on the platform. Over time, as patients use the app to upload their older records, their history becomes richer automatically.",
      },
      {
        question: "What happens to my patients who are not on FettleMed - can I still create records for them?",
        answer: "Yes. You can create consultation records and e-prescriptions for any patient regardless of whether they use the FettleMed patient app. When they join the app later, their records will be available to them.",
      },
      {
        question: "How long does it take for my staff to learn the system?",
        answer: "FettleMed is designed for clinics that are moving from paper or Excel, not for teams with IT departments. Most functions can be learned in a single session. We support you through onboarding and remain available for questions.",
      },
      {
        question: "Will FettleMed change how I see patients?",
        answer: "No. FettleMed is built to fit into your existing consultation routine, not replace it. You continue seeing patients the way you always have. The difference is that the documentation happens faster and the records are immediately available digitally.",
      },
      {
        question: "What if I try it and decide it is not for me - what happens to my data?",
        answer: "Your data belongs to you. If you decide to leave FettleMed, we will give you a complete export of all records you created on the platform. Nothing is locked in.",
      },
    ],
  },
  {
    title: "Daily workflow",
    items: [
      {
        question: "How does the patient history dashboard work?",
        answer: "When you open a patient's file before a consultation, FettleMed shows you a consolidated view of their history - past diagnoses, prescriptions, and lab results - without you having to search for anything. If the patient has consented to share their full health profile, you see records from other doctors too.",
      },
      {
        question: "Can I create prescriptions in regional languages?",
        answer: "Regional language support is currently in development and will be launched soon. The platform currently operates in English.",
      },
      {
        question: "Can I access my records from outside the clinic?",
        answer: "Yes. Because FettleMed is cloud-based, you can access all your records securely from anywhere - your home, another clinic, or while travelling - as long as you have an internet connection.",
      },
      {
        question: "What happens to consultation records if a patient revokes their consent after a visit?",
        answer: "You retain every record you create. Revoking consent limits your access to the patient's broader health profile from other sources. It does not remove the records from your own consultations.",
      },
      {
        question: "If a patient has records from a different doctor, do I see those automatically?",
        answer: "No. You only see records from other doctors if the patient has explicitly consented to share them with you. Consent is always patient-initiated.",
      },
    ],
  },
  {
    title: "Data and security",
    items: [
      {
        question: "Who owns the records I create?",
        answer: "Legally, clinical records are owned by the doctor who creates them, in line with the Indian Medical Council Regulations 2002. FettleMed maintains these records on your behalf and provides a copy to the patient, which the patient owns. You are always able to export your records.",
      },
      {
        question: "Is my patient data stored in India?",
        answer: "Patient health records are stored on infrastructure with the primary data centre in India. Certain backup or supporting services may operate in other regions under contractual data-protection obligations. See our Security page for details.",
      },
      {
        question: "What happens to my data if FettleMed shuts down?",
        answer: "You will always be able to export a complete copy of your records. We are committed to ensuring that no doctor or patient loses access to their health data under any circumstance.",
      },
      {
        question: "Can FettleMed access my patient records?",
        answer: "FettleMed does not access patient records for any commercial purpose. Access by our team is strictly limited to technical support and security operations, with appropriate safeguards in place.",
      },
      {
        question: "Is this compliant with Indian data protection laws?",
        answer: "We are building FettleMed in alignment with the Digital Personal Data Protection Act 2023. Compliance is an active and ongoing process as the regulatory framework continues to evolve in India.",
      },
    ],
  },
  {
    title: "About the product",
    items: [
      {
        question: "Is FettleMed built for specialists or only general practitioners?",
        answer: "FettleMed is currently built for any doctor practicing in India regardless of specialty. Specialty-specific modules are on our roadmap and will be developed based on feedback from doctors using the platform.",
      },
      {
        question: "How is this different from other software I have heard of?",
        answer: "Most existing platforms are either doctor-side tools or patient-facing apps. FettleMed connects both. The patient owns a live copy of every record created during their consultations. Consent is granular - the patient controls who sees their data, for how long, and can revoke access at any time. This level of patient data ownership is not a feature of existing Indian HMS platforms.",
      },
      {
        question: "Do my patients need to download an app for this to work?",
        answer: "No. FettleMed works fully for doctors regardless of whether their patients use the app. When patients do join, their records become richer and more connected. But the doctor's workflow is not dependent on patient adoption.",
      },
      {
        question: "What is ABDM and do I need to worry about it?",
        answer: "ABDM is the Ayushman Bharat Digital Mission, a government initiative to create a national digital health infrastructure. As a doctor, you do not need to do anything about ABDM today. FettleMed is building toward ABDM alignment and will handle the technical integration on your behalf when the time comes.",
      },
      {
        question: "Is this built by people who understand how Indian clinics actually work?",
        answer: "FettleMed is built by a team with clinical backgrounds spanning India, the UK, and Singapore. Every feature is validated against real clinical workflows before it is built. Our specific focus is making the switch from paper to digital as friction-free as possible for Indian doctors.",
      },
    ],
  },
];

export const clinicFaqs: FAQSection[] = [
  {
    title: "Getting started",
    items: [
      {
        question: "Is this built for solo clinics or larger polyclinics too?",
        answer: "Both. FettleMed works for a single-doctor GP clinic and for multi-doctor polyclinics. The platform scales to the size of your practice.",
      },
      {
        question: "How many staff members can I add?",
        answer: "There is no fixed limit. You can add front desk staff, nurses, billing staff, and multiple doctors under one clinic account.",
      },
      {
        question: "Can different staff see different things?",
        answer: "Yes. FettleMed uses role-based access control. Front desk staff see what they need for registration and scheduling. Billing staff see financial information. Clinical notes are visible only to doctors. Each role sees only what is relevant to their work.",
      },
      {
        question: "Do we need to replace our entire setup or can we start with one module?",
        answer: "You can start with what matters most to you. FettleMed is modular. Some clinics will start with the doctor portal and add clinic management features as they get comfortable. You do not have to implement everything on day one.",
      },
    ],
  },
  {
    title: "Operations",
    items: [
      {
        question: "Can the system send appointment reminders to patients automatically?",
        answer: "Yes. FettleMed sends automated reminders to patients ahead of their appointments to reduce no-shows.",
      },
      {
        question: "What happens when a patient does not show up?",
        answer: "The system flags no-shows so your front desk has visibility and can follow up or reallocate the slot.",
      },
      {
        question: "Can I manage multiple doctors under one clinic account?",
        answer: "Yes. The clinic owner has a single dashboard with visibility across all doctors in the clinic - appointments, patient flow, and records.",
      },
      {
        question: "Can I see a real-time view of the clinic - how many patients are waiting, who is in consultation?",
        answer: "Yes. The clinic dashboard gives you a live view of patient flow so the front desk can manage queues without confusion.",
      },
      {
        question: "Can the front desk use it on a tablet?",
        answer: "Yes. FettleMed works on tablets and laptops. No dedicated hardware is required.",
      },
    ],
  },
  {
    title: "Billing and admin",
    items: [
      {
        question: "Does it handle GST on invoices?",
        answer: "GST-compliant billing is planned and will be part of the platform. We will confirm availability ahead of the pilot.",
      },
      {
        question: "Can it generate billing reports automatically?",
        answer: "Yes. The clinic owner dashboard includes financial reports - daily collections, billing by doctor, and monthly summaries - without any manual input.",
      },
      {
        question: "Can it connect with payment systems we already use?",
        answer: "Payment gateway integration is on our roadmap. We will share specifics during the pilot.",
      },
    ],
  },
  {
    title: "Switching",
    items: [
      {
        question: "Do we have to digitise all our existing paper records first?",
        answer: "No. You start fresh from the first consultation on FettleMed. Historical paper records do not need to be entered. Patients can upload their own older records through the patient app if they choose to.",
      },
      {
        question: "How long does it take to train front desk staff?",
        answer: "FettleMed is designed for staff who have never used clinic software before. Most front desk operations can be learned in one session. We support your team through onboarding.",
      },
      {
        question: "If we expand to a second location, can both clinics be managed from one account?",
        answer: "Multi-location management is planned for a future release. It is on our roadmap based on demand from clinic owners.",
      },
      {
        question: "What happens to our data if we stop using FettleMed?",
        answer: "You keep everything. We will provide a complete export of all clinic and patient records created during your time on FettleMed. Your data does not disappear.",
      },
    ],
  },
  {
    title: "Data and security",
    items: [
      {
        question: "Can clinic staff see a patient's full medical history?",
        answer: "No. Staff access is controlled by role. Front desk staff see registration and appointment information only. Clinical records are visible only to doctors. A patient's records from other clinics are visible only with that patient's explicit consent.",
      },
      {
        question: "Who is responsible for data security - FettleMed or the clinic?",
        answer: "FettleMed is responsible for the security of the platform and the infrastructure. The clinic is responsible for ensuring that staff access is managed correctly - for example, not sharing login credentials. We make this easy through role-based access controls.",
      },
      {
        question: "What happens if there is a data breach?",
        answer: "We have procedures in place for breach detection and response in line with DPDPA 2023 requirements. Affected patients and the relevant authorities would be notified promptly. We take this obligation seriously.",
      },
      {
        question: "Is patient data shared with any third party - labs, insurers, or the government?",
        answer: "No. Patient data is never sold or shared with any third party for commercial purposes. It is never shared with insurers or employers. Any sharing with labs or diagnostic partners happens only with the patient's explicit consent. Government access requires either explicit patient consent or a lawful order from the relevant authority.",
      },
    ],
  },
];

export const securityFaqs: FAQSection[] = [
  {
    title: "",
    items: [
      {
        question: "Can FettleMed see my health records?",
        answer: "FettleMed staff do not have routine access to patient health records. Access to patient data by FettleMed personnel is restricted to specific operational needs, such as resolving a technical support request, and requires internal authorisation. Any such access is logged and auditable. We do not browse patient records.",
      },
      {
        question: "What happens to my data if I stop using FettleMed?",
        answer: "Your records are yours. You can export all your health data in full at any time, before, during, or after you stop using the platform. Nothing is deleted automatically when you leave. If you want your data removed from FettleMed's servers entirely, you can request deletion and we will process it in accordance with DPDPA requirements.",
      },
      {
        question: "What happens to clinic data if the clinic stops using FettleMed?",
        answer: "Clinics can export all patient records, billing history, and operational data in full at any time. Data is not locked to the platform. Clinics retain ownership of the clinical records they have created, in line with Indian Medical Council Regulations 2002. Export is available as a standard feature, not a paid service.",
      },
      {
        question: "Is my data safe if FettleMed shuts down?",
        answer: "We plan for this scenario deliberately. Patient and clinic data is exportable at any time in standard formats. In the event that FettleMed ceases operations, data will not simply disappear. We are committed to giving users sufficient notice and access to export everything before any service discontinuation.",
      },
      {
        question: "Who is responsible for security at FettleMed?",
        answer: "Security is owned at the founding level, not delegated to a third-party vendor or a single team member. Gurubalaji, our Lead Developer, is responsible for the technical implementation of every security measure described on this page. Questions about our security posture can be directed to hello@fettlemed.com.",
      },
      {
        question: "Does FettleMed comply with ABDM?",
        answer: "FettleMed is being built on ABDM-aligned architecture, and ABHA ID integration is in active development. Formal ABDM certification is on our roadmap following pilot completion. We do not claim formal certification that has not yet been granted.",
      },
      {
        question: "Is there a way to report a security issue?",
        answer: "Yes. Email hello@fettlemed.com and mark your message as a security report. We respond to every report and credit researchers who follow responsible disclosure.",
      },
      {
        question: "Can a doctor access my records without my permission?",
        answer: "No. A doctor can request access to your records, but they cannot view anything until you grant it explicitly. Access is time-bound and scoped. A doctor you share records with for one consultation cannot continue accessing them after that consultation ends unless you grant ongoing access separately. You are notified when access is requested and when it is used.",
      },
    ],
  },
];
