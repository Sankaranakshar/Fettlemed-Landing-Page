import { FadeIn } from "@/components/common/FadeIn";
import { SEO } from '@/components/common/SEO';

export default function TermsOfService() {
  return (
    <>
      <SEO title="Terms of Service" description="FettleMed Terms of Service. The terms governing use of FettleMed for patients, doctors, and clinics across India." />
      <div className="flex flex-col w-full bg-surface-50 pt-24 pb-32 min-h-screen">
      <div className="container mx-auto px-4 max-w-4xl relative">
        <FadeIn>
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-medium text-pine-900 mb-4 tracking-tight">Terms of Service</h1>
            <h2 className="text-xl md:text-2xl font-medium text-pine-600 mb-2">NamNalam Health Tech Private Limited (trading as FettleMed)</h2>
            <p className="text-dim font-medium italic mb-6">Your Health, Your Control</p>
            <p className="text-dim font-medium inline-block bg-white px-4 py-2 border border-stone-200 rounded-full text-sm">
              Effective Date: April 20, 2026
            </p>
          </div>

          <div className="bg-white border border-stone-200 rounded-3xl p-8 md:p-12 shadow-sm prose prose-lg max-w-none text-dim">
            
            {/* Section 1 */}
            <h2 className="text-2xl font-medium text-pine-900 font-sans tracking-tight mb-4 mt-8">1. Acceptance of Terms</h2>
            <p>
              By accessing and using the FettleMed platform (including the Patient App, Doctor Clinical Portal, Clinic Management System, and related services) (collectively, the "Services"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, you may not use the Services. These Terms apply to all users, whether you are an individual patient ("B2C User"), a healthcare provider such as a doctor or clinic ("B2B User"), or any other entity accessing our Services.
            </p>

            {/* Section 2 */}
            <h2 className="text-2xl font-medium text-pine-900 font-sans tracking-tight mb-4 mt-12">2. Definitions</h2>
            <p>"Services" refers to all platforms, applications, products, and services provided by NamNalam Health Tech Private Limited (trading as FettleMed), including:</p>
            <ul className="space-y-2 list-disc list-inside">
              <li><strong>Patient App</strong> - the mobile and web application for personal health record management</li>
              <li><strong>Doctor Clinical Management Portal</strong> - the provider-facing platform for clinical workflows</li>
              <li><strong>Clinic Management System</strong> - the SaaS platform for clinic operations and administration</li>
            </ul>
            <p className="mt-4">"Account" means your FettleMed account, created to access and use the Services.</p>
            <p>"Health Information" means any personal health or medical information, including but not limited to medical history, prescriptions, test results, diagnoses, and treatment records.</p>
            <p>"Confidential Information" means information disclosed by either party that is marked as confidential or would reasonably be understood to be confidential.</p>

            {/* Section 3 */}
            <h2 className="text-2xl font-medium text-pine-900 font-sans tracking-tight mb-4 mt-12">3. Eligibility and Account Registration</h2>
            
            <h3 className="text-lg font-medium text-pine-800 mt-6 mb-3">3.1 Eligibility</h3>
            <p>By using the Services, you represent and warrant that: (a) you are at least 18 years of age or, if under 18, are using the Services under the supervision of a parent or legal guardian; (b) you have the authority to enter into these Terms; and (c) your use of the Services does not violate any applicable laws or regulations.</p>

            <h3 className="text-lg font-medium text-pine-800 mt-6 mb-3">3.2 Account Creation</h3>
            <p>To use certain features of the Services, you must create an Account. You agree to provide accurate, current, and complete information during registration. You are responsible for maintaining the confidentiality of your Account credentials and for all activities that occur under your Account. You agree to notify us immediately of any unauthorised access to your Account. FettleMed is not liable for any unauthorised access or use of your Account that results from your failure to maintain confidentiality.</p>

            <h3 className="text-lg font-medium text-pine-800 mt-6 mb-3">3.3 Account Responsibility</h3>
            <p>You are solely responsible for all activities conducted through your Account. If you are a B2B User (healthcare provider or clinic), you are responsible for all use of the Services by your staff and representatives. You agree to ensure that all users of your Account comply with these Terms.</p>

            {/* Section 4 */}
            <h2 className="text-2xl font-medium text-pine-900 font-sans tracking-tight mb-4 mt-12">4. Use of Services</h2>
            
            <h3 className="text-lg font-medium text-pine-800 mt-6 mb-3">4.1 Permitted Use</h3>
            <p>You are granted a limited, non-exclusive, non-transferable license to use the Services for the purposes described in these Terms. Specifically:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>B2C Users may use the Patient App to manage and consolidate their personal health information, control access to their health data, and engage with healthcare providers</li>
              <li>B2B Users may use the Doctor Portal and Clinic Management System to manage patient records, schedule appointments, generate prescriptions, and manage clinic operations in accordance with applicable laws</li>
              <li>All users may access their own account information and data in compliance with these Terms</li>
            </ul>

            <h3 className="text-lg font-medium text-pine-800 mt-6 mb-3">4.2 Prohibited Use</h3>
            <p>You agree NOT to use the Services for any of the following purposes:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Engaging in any illegal activity or violating any applicable laws or regulations</li>
              <li>Accessing or using another user's Account without authorisation</li>
              <li>Transmitting viruses, malware, or any code intended to damage or disable the Services</li>
              <li>Harassing, abusing, or threatening other users</li>
              <li>Attempting to gain unauthorised access to the Services or related systems or networks</li>
              <li>Spamming or sending unsolicited communications</li>
              <li>Using the Services in any way that infringes upon the intellectual property rights of FettleMed or third parties</li>
            </ul>

            {/* Section 5 */}
            <h2 className="text-2xl font-medium text-pine-900 font-sans tracking-tight mb-4 mt-12">5. B2B Terms for Healthcare Providers and Clinics</h2>
            
            <h3 className="text-lg font-medium text-pine-800 mt-6 mb-3">5.1 Professional Responsibilities</h3>
            <p>As a B2B User, you represent and warrant that you are a licensed healthcare professional or are authorised to operate a medical clinic in India. You agree to use the Services in compliance with all applicable healthcare laws, regulations, and ethical standards, including but not limited to:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>The Ayushman Bharat Digital Mission (ABDM) framework and standards</li>
              <li>The Indian Medical Council Code of Ethics</li>
              <li>All applicable data protection and privacy laws</li>
              <li>All relevant healthcare licensing and regulatory requirements</li>
            </ul>

            <h3 className="text-lg font-medium text-pine-800 mt-6 mb-3">5.2 Patient Consent</h3>
            <p>You agree to obtain explicit, informed consent from patients before using the Services to access, store, or share their health information. You will use our consent-based framework to request and obtain patient permission before uploading or accessing patient records. You acknowledge that FettleMed's consent framework is designed to empower patients with control over their data.</p>

            <h3 className="text-lg font-medium text-pine-800 mt-6 mb-3">5.3 Data Ownership</h3>
            <p>You acknowledge that patients own their health information. Your role is as a custodian and authorised user. You agree to respect patient requests to access, correct, or delete their data and to comply with patient-issued consent revocations immediately. All health information entered into the Services remains the property of the patient.</p>

            <h3 className="text-lg font-medium text-pine-800 mt-6 mb-3">5.4 Subscription and Payment</h3>
            <p>B2B Users agree to pay subscription fees as specified in their service agreement. Payment is due in accordance with the agreed billing cycle. Failure to pay may result in suspension or termination of your Account and access to the Services. FettleMed reserves the right to adjust pricing with 30 days' written notice.</p>

            <h3 className="text-lg font-medium text-pine-800 mt-6 mb-3">5.5 Service Level Agreement</h3>
            <p>FettleMed will use commercially reasonable efforts to maintain the Services with 99% uptime. However, we do not guarantee uninterrupted availability. FettleMed shall not be liable for any downtime or unavailability. You are responsible for implementing backup procedures for critical data.</p>

            {/* Section 6 */}
            <h2 className="text-2xl font-medium text-pine-900 font-sans tracking-tight mb-4 mt-12">6. B2C Terms for Patient Users</h2>
            
            <h3 className="text-lg font-medium text-pine-800 mt-6 mb-3">6.1 Data Ownership and Control</h3>
            <p>You own all health information you upload or provide to the Patient App. FettleMed acts solely as a custodian of this information. You have the right to access, download, delete, and control sharing of your health data at any time. You may revoke access to any healthcare provider with immediate effect using our consent management features.</p>

            <h3 className="text-lg font-medium text-pine-800 mt-6 mb-3">6.2 Health Information You Provide</h3>
            <p>You are responsible for the accuracy of health information you provide to the Services. While FettleMed will validate and structure data received from healthcare providers, we do not independently verify the accuracy of any health information. You agree to review information for accuracy and notify us of any errors.</p>

            <h3 className="text-lg font-medium text-pine-800 mt-6 mb-3">6.3 Consent and Data Sharing</h3>
            <p>The Patient App provides granular consent controls allowing you to explicitly permit or deny access to your health information by specific healthcare providers. Your consent is required before any health information is shared with a doctor or clinic. You may revoke consent at any time, and FettleMed will immediately prevent further access. You acknowledge that you are in complete control of these decisions.</p>

            <h3 className="text-lg font-medium text-pine-800 mt-6 mb-3">6.4 Family Health Management</h3>
            <p>You may create family accounts for dependents (children, spouse, elderly parents) and manage their health information. You are responsible for ensuring that you have appropriate legal authority to manage family member accounts. You agree to obtain explicit consent from adult family members before including their information in family management features.</p>

            <h3 className="text-lg font-medium text-pine-800 mt-6 mb-3">6.5 Free Service</h3>
            <p>The core features of the Patient App (personal health record management, consent controls, health data consolidation) are provided free of charge. Future premium features may be offered on a paid basis, and you will be notified before any charges apply to your Account.</p>

            {/* Section 7 */}
            <h2 className="text-2xl font-medium text-pine-900 font-sans tracking-tight mb-4 mt-12">7. Health Information and Privacy</h2>
            
            <h3 className="text-lg font-medium text-pine-800 mt-6 mb-3">7.1 Sensitive Health Data</h3>
            <p>You acknowledge that the Services handle sensitive health information. FettleMed implements robust security measures to protect this information. However, no system is completely secure. You are responsible for understanding and accepting the risks associated with digital health information storage and sharing.</p>

            <h3 className="text-lg font-medium text-pine-800 mt-6 mb-3">7.2 Privacy Policy</h3>
            <p>Your use of the Services is also governed by our separate Privacy Policy, which provides detailed information about how we collect, use, and protect your information. In the event of a conflict between these Terms and the Privacy Policy, the Privacy Policy governs privacy-related matters.</p>

            <h3 className="text-lg font-medium text-pine-800 mt-6 mb-3">7.3 Third-Party Providers</h3>
            <p>Health information you enter into the Services may be transmitted to healthcare providers (doctors, clinics, diagnostic labs) with your explicit consent. FettleMed is not responsible for how these third parties handle your information once you have consented to sharing, though we have contractual obligations requiring them to maintain confidentiality.</p>

            {/* Section 8 */}
            <h2 className="text-2xl font-medium text-pine-900 font-sans tracking-tight mb-4 mt-12">8. Intellectual Property Rights</h2>
            
            <h3 className="text-lg font-medium text-pine-800 mt-6 mb-3">8.1 Ownership</h3>
            <p>FettleMed retains all intellectual property rights in the Services, including the Patient App, Doctor Portal, Clinic Management System, and all related software, features, functionality, and content. You do not acquire any ownership rights in the Services through your use.</p>

            <h3 className="text-lg font-medium text-pine-800 mt-6 mb-3">8.2 Limited License</h3>
            <p>We grant you a non-exclusive, non-transferable, revocable license to use the Services solely as permitted by these Terms. You agree not to reverse engineer, decompile, or attempt to derive the source code or underlying algorithms of the Services.</p>

            <h3 className="text-lg font-medium text-pine-800 mt-6 mb-3">8.3 User-Generated Content</h3>
            <p>Health information and other data you input into the Services remains your property. You grant FettleMed a limited license to use such information solely to operate and provide the Services to you, subject to the limitations outlined in our Privacy Policy. We do not use your identifiable health information for research, analytics, or any purpose beyond delivering the Services.</p>

            {/* Section 9 */}
            <h2 className="text-2xl font-medium text-pine-900 font-sans tracking-tight mb-4 mt-12">9. Indemnification</h2>
            <p>You agree to indemnify, defend, and hold harmless NamNalam Health Tech Private Limited (trading as FettleMed), its officers, directors, employees, and agents from any and all claims, damages, losses, and expenses (including reasonable attorneys' fees) arising from: (a) your use of the Services in violation of these Terms; (b) your violation of any applicable law or regulation; (c) your violation of the rights of any third party; or (d) your breach of these Terms. This indemnity does not apply to claims arising solely from FettleMed's negligence or willful misconduct.</p>

            {/* Section 10 */}
            <h2 className="text-2xl font-medium text-pine-900 font-sans tracking-tight mb-4 mt-12">10. Limitation of Liability</h2>
            
            <h3 className="text-lg font-medium text-pine-800 mt-6 mb-3">10.1 Disclaimer</h3>
            <p className="uppercase text-sm tracking-wider">THE SERVICES ARE PROVIDED ON AN "AS-IS" AND "AS-AVAILABLE" BASIS WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED. FETTLEMED DISCLAIMS ALL WARRANTIES, INCLUDING MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE SERVICES WILL BE UNINTERRUPTED, SECURE, OR ERROR-FREE.</p>

            <h3 className="text-lg font-medium text-pine-800 mt-6 mb-3">10.2 Limitation of Damages</h3>
            <p className="uppercase text-sm tracking-wider">TO THE MAXIMUM EXTENT PERMITTED BY LAW, FETTLEMED SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR FOR LOSS OF PROFITS, DATA, OR USE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.</p>

            <h3 className="text-lg font-medium text-pine-800 mt-6 mb-3">10.3 Cap on Liability</h3>
            <p className="uppercase text-sm tracking-wider">IN NO EVENT SHALL FETTLEMED'S TOTAL LIABILITY TO YOU EXCEED THE AMOUNTS PAID BY YOU TO FETTLEMED IN THE 12 MONTHS PRECEDING THE CLAIM, OR ONE HUNDRED THOUSAND RUPEES (₹100,000), WHICHEVER IS GREATER.</p>

            <h3 className="text-lg font-medium text-pine-800 mt-6 mb-3">10.4 Clinical Disclaimer</h3>
            <p>The Services are not a substitute for professional medical advice, diagnosis, or treatment. Information provided through the Services should not be relied upon as a substitute for consultation with a qualified healthcare professional. FettleMed does not provide medical advice, and all information is for informational purposes only.</p>

            {/* Section 11 */}
            <h2 className="text-2xl font-medium text-pine-900 font-sans tracking-tight mb-4 mt-12">11. Termination</h2>
            
            <h3 className="text-lg font-medium text-pine-800 mt-6 mb-3">11.1 Termination by User</h3>
            <p>You may terminate your Account and use of the Services at any time by providing written notice to FettleMed. Upon termination, you will lose access to your Account, although you may request a data export before deletion.</p>

            <h3 className="text-lg font-medium text-pine-800 mt-6 mb-3">11.2 Termination by FettleMed</h3>
            <p>FettleMed may suspend or terminate your Account immediately if: (a) you violate any terms of these Terms of Service; (b) you use the Services illegally or for prohibited purposes; (c) you fail to pay applicable fees; or (d) we determine, in our sole discretion, that your continued use poses a security or legal risk. We will provide notice of termination except in cases of urgent security concerns.</p>

            <h3 className="text-lg font-medium text-pine-800 mt-6 mb-3">11.3 Data After Termination</h3>
            <p>Upon termination, your Account will be deactivated. You may request a data export within 30 days of termination. After 30 days, your data may be deleted in accordance with our data retention policy. FettleMed is not liable for loss of data after termination.</p>

            {/* Section 12 */}
            <h2 className="text-2xl font-medium text-pine-900 font-sans tracking-tight mb-4 mt-12">12. Governing Law and Dispute Resolution</h2>
            
            <h3 className="text-lg font-medium text-pine-800 mt-6 mb-3">12.1 Governing Law</h3>
            <p>These Terms are governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions. The exclusive jurisdiction for any legal disputes shall be the courts located in Chennai, Tamil Nadu, India.</p>

            <h3 className="text-lg font-medium text-pine-800 mt-6 mb-3">12.2 Dispute Resolution</h3>
            <p>Before pursuing legal action, the parties agree to attempt to resolve disputes through good-faith negotiation. If a dispute cannot be resolved through negotiation within 30 days, the parties may pursue mediation or arbitration. Any legal proceedings shall be conducted in English.</p>

            {/* Section 13 */}
            <h2 className="text-2xl font-medium text-pine-900 font-sans tracking-tight mb-4 mt-12">13. Changes to Terms</h2>
            <p>FettleMed may update these Terms from time to time. We will notify you of material changes by posting the updated Terms on our website and through the Services. Your continued use of the Services following notice of updates constitutes acceptance of the revised Terms. For significant changes, we may provide additional notice (such as email notification) and a grace period before the new terms take effect.</p>

            {/* Section 14 */}
            <h2 className="text-2xl font-medium text-pine-900 font-sans tracking-tight mb-4 mt-12">14. Contact Information</h2>
            <p>If you have questions about these Terms or the Services, please contact us at:</p>

            <div className="bg-stone-50 border border-stone-200 p-6 rounded-2xl mt-6">
              <p className="mb-2"><strong>Email:</strong> <a href="mailto:hello@fettlemed.com" className="text-pine-600 hover:text-pine-700">hello@fettlemed.com</a></p>
              <p className="mt-4 mb-1"><strong>Mailing Address:</strong></p>
              <address className="not-italic text-dim">
                NAMNALAM HEALTH TECH PVT LTD<br />
                CIN: U62013TN2026PTC191755<br />
                REGD. OFFICE:<br />
                INNOV8 SKCL TECH SQUARE, 2ND FLOOR,<br />
                NO 14 SP, SIDCO T.V.K INDUSTRIAL ESTATE,<br />
                GUINDY, CHENNAI – 600032
              </address>
              <p className="mt-6">
                <strong>Website:</strong> <a href="https://www.fettlemed.com" className="text-pine-600 hover:text-pine-700" target="_blank" rel="noopener noreferrer">www.fettlemed.com</a>
              </p>
            </div>
            <p className="mt-6 text-sm text-dim italic">We will respond to inquiries within 7 business days.</p>

            {/* Section 15 */}
            <h2 className="text-2xl font-medium text-pine-900 font-sans tracking-tight mb-4 mt-12">15. Severability</h2>
            <p>If any provision of these Terms is found to be invalid or unenforceable, that provision will be modified to the minimum extent necessary to make it enforceable, and the remaining provisions will continue in full force and effect.</p>

            {/* Section 16 */}
            <h2 className="text-2xl font-medium text-pine-900 font-sans tracking-tight mb-4 mt-12">16. Entire Agreement</h2>
            <p>These Terms, together with our Privacy Policy and any service agreements, constitute the entire agreement between you and FettleMed regarding your use of the Services. These Terms supersede all prior agreements, understandings, and representations, whether oral or written.</p>

            {/* Section 17 */}
            <h2 className="text-2xl font-medium text-pine-900 font-sans tracking-tight mb-4 mt-12">17. Additional B2B Terms for Healthcare Providers</h2>
            
            <h3 className="text-lg font-medium text-pine-800 mt-6 mb-3">17.1 Confidential Information</h3>
            <p>B2B Users acknowledge that they will access and handle patient health information and other confidential data. Such information shall be kept confidential and used only for the purposes outlined in these Terms. Unauthorised disclosure of confidential information may result in immediate termination of service and legal action.</p>

            <h3 className="text-lg font-medium text-pine-800 mt-6 mb-3">17.2 Compliance and Audits</h3>
            <p>B2B Users agree to comply with all healthcare laws and regulations and to cooperate with FettleMed in any compliance audits, security assessments, or regulatory inquiries. FettleMed reserves the right to audit usage of the Services to ensure compliance with these Terms and applicable laws.</p>

            <h3 className="text-lg font-medium text-pine-800 mt-6 mb-3">17.3 Prohibited Clinical Practices</h3>
            <p>B2B Users agree not to use the Services in any way that constitutes medical malpractice, ethical violations, or unlicensed practice of medicine. FettleMed reserves the right to suspend service to any healthcare provider suspected of such violations.</p>

            {/* Section 18 */}
            <h2 className="text-2xl font-medium text-pine-900 font-sans tracking-tight mb-4 mt-12">18. Acknowledgment</h2>
            <p>By using FettleMed's Services, you acknowledge that you have read and understood these Terms of Service and agree to be bound by them. You further acknowledge that you understand the risks associated with digital health information management and accept those risks in exchange for the convenience and benefits the Services provide.</p>

            <div className="text-center mt-12 pt-8 border-t border-stone-200">
              <p className="text-dim font-medium">© 2026 NamNalam Health Tech Private Limited (trading as FettleMed). All rights reserved.</p>
              <p className="text-dim italic">Your Health, Your Control</p>
            </div>
            
          </div>
        </FadeIn>
      </div>
    </div>
      </>
  );
}
