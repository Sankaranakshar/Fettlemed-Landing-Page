import { SEO } from '@/components/common/SEO';
import { FadeIn } from "@/components/common/FadeIn";

export default function PrivacyPolicy() {
  return (
    <>
      <SEO title="Privacy Policy" description="FettleMed Privacy Policy. How NamNalam Health Tech Private Limited collects, uses, and protects your personal and health data under Indian law." />
      <div className="flex flex-col w-full bg-surface-50 pt-24 pb-32 min-h-screen">
      <div className="container mx-auto px-4 max-w-4xl relative">
        <FadeIn>
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-medium text-pine-900 mb-4 tracking-tight">PRIVACY POLICY</h1>
            <h2 className="text-xl md:text-2xl font-medium text-pine-600 mb-2">NamNalam Health Tech Private Limited (trading as FettleMed)</h2>
            <p className="text-dim font-medium italic mb-6">Your Health, Your Control</p>
            <p className="text-dim font-medium inline-block bg-white px-4 py-2 border border-stone-200 rounded-full text-sm">
              Effective Date: April 20, 2026
            </p>
          </div>

          <div className="bg-white border border-stone-200 rounded-3xl p-8 md:p-12 shadow-sm prose prose-lg max-w-none text-dim">
            
            {/* Section 1 */}
            <h2 className="text-2xl font-medium text-pine-900 font-sans tracking-tight mb-4 mt-8">1. Introduction and Commitment to Your Privacy</h2>
            <p>
              NamNalam Health Tech Private Limited (trading as FettleMed) ("we," "us," "our," or "FettleMed") is committed to building India's digital health backbone while placing your health data ownership at the absolute center of everything we do. This Privacy Policy explains how we collect, use, disclose, and otherwise process your personal and health information in connection with our integrated digital health platform, including our Patient App, Doctor Clinical Portal, Clinic Management System, and related services (collectively, the "Services").
            </p>
            <p>
              Our core principle is <strong>Patient Data Sovereignty</strong>. You own your health data, and we are committed to transparency, trust, and security in how we handle it. We believe that empowering patients with complete control over their health information is not just ethically right—it is essential to building a more equitable and efficient healthcare ecosystem in India. Please read this Policy carefully to understand our privacy practices and your rights.
            </p>

            {/* Section 2 */}
            <h2 className="text-2xl font-medium text-pine-900 font-sans tracking-tight mb-4 mt-12">2. Our Privacy Principles</h2>
            <p>At FettleMed, we are guided by the following fundamental privacy principles that inform every decision we make:</p>
            <ul className="space-y-2 list-disc list-inside">
              <li><strong>Patient-Centricity:</strong> You are at the core of everything we do. Your rights, preferences, and well-being drive our product development and operational decisions.</li>
              <li><strong>Ownership:</strong> We recognize your fundamental right to own and control your personal health data. Your health information is yours, and you have the final say on who can access it.</li>
              <li><strong>Trust & Transparency:</strong> We operate with complete transparency about how we collect, use, and protect your information. We build trust through our actions, not just our words.</li>
              <li><strong>Security:</strong> The security and privacy of your health information are paramount. We employ the most robust technical and organizational measures to protect your data.</li>
              <li><strong>Simplicity & Accessibility:</strong> Privacy should not be complex. We design clear, intuitive controls that empower you to manage your privacy without technical expertise.</li>
              <li><strong>Education:</strong> We believe in empowering you with knowledge about your rights, our practices, and how to protect your health information. An informed patient is an empowered patient.</li>
            </ul>

            {/* Section 3 */}
            <h2 className="text-2xl font-medium text-pine-900 font-sans tracking-tight mb-4 mt-12">3. Information We Collect</h2>
            
            <h3 className="text-lg font-medium text-pine-800 mt-6 mb-3">3.1 Health Information You Provide</h3>
            <ul className="list-disc list-inside space-y-1">
              <li><strong>Medical Records:</strong> Prescriptions, consultation notes, test reports, diagnostic records, vaccination certificates, and other clinical documents</li>
              <li><strong>Health History:</strong> Chronic conditions, past diagnoses, surgical history, allergies, medications, and family medical history</li>
              <li><strong>Lifestyle Information:</strong> Diet, exercise habits, stress levels, sleep patterns, and other wellness-related data</li>
              <li><strong>Consent Records:</strong> Your explicit permissions regarding how your health data can be accessed and shared</li>
            </ul>

            <h3 className="text-lg font-medium text-pine-800 mt-6 mb-3">3.2 Personal Information You Provide</h3>
            <ul className="list-disc list-inside space-y-1">
              <li><strong>Account Information:</strong> Name, email address, phone number, date of birth, gender, and address</li>
              <li><strong>Profile Information:</strong> Emergency contacts, insurance details, preferred language, and communication preferences</li>
              <li><strong>Family Information:</strong> Details about family members for whom you manage health records</li>
              <li><strong>Communication Data:</strong> Messages, inquiries, feedback, and support requests</li>
            </ul>

            <h3 className="text-lg font-medium text-pine-800 mt-6 mb-3">3.3 Information Collected Automatically</h3>
            <ul className="list-disc list-inside space-y-1">
              <li><strong>Device Information:</strong> Device type, operating system, browser type, mobile device identifier, and device settings</li>
              <li><strong>Usage Information:</strong> Features accessed, pages viewed, time spent on the platform, search queries, and interaction patterns</li>
              <li><strong>IP Address and Location:</strong> IP address and approximate geographic location based on IP address (not precise GPS location without your consent)</li>
              <li><strong>Cookies and Analytics:</strong> We use <strong>Google Analytics</strong> (a service provided by Google LLC) to collect anonymised usage information including pages visited, time spent, and device type. Google Analytics uses cookies and may transfer data to Google servers. No personal health data is included in analytics. You can decline analytics tracking via our cookie consent banner, or opt out via <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-pine-600 hover:text-pine-700 underline">Google's opt-out tool</a>.</li>
            </ul>

            <h3 className="text-lg font-medium text-pine-800 mt-6 mb-3">3.4 Information from Healthcare Providers</h3>
            <ul className="list-disc list-inside space-y-1">
              <li><strong>Doctor and Clinic Data:</strong> When your doctor or clinic uploads your records to FettleMed with your consent</li>
              <li><strong>Lab Reports:</strong> Digital submission of test results from diagnostic centers</li>
            </ul>

            <h3 className="text-lg font-medium text-pine-800 mt-6 mb-3">3.5 Information from Third Parties</h3>
            <ul className="list-disc list-inside space-y-1">
              <li><strong>Social Media:</strong> Information if you choose to connect your social media accounts to your FettleMed profile</li>
              <li><strong>Service Providers:</strong> Information from our partners who provide specific services to enhance the platform, under data processing agreements that limit their use of your information to the services they provide us</li>
            </ul>

            {/* Section 4 */}
            <h2 className="text-2xl font-medium text-pine-900 font-sans tracking-tight mb-4 mt-12">4. How We Use Your Information</h2>
            
            <h3 className="text-lg font-medium text-pine-800 mt-6 mb-3">4.1 To Deliver and Improve Our Services</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Consolidate and organize your health records into a unified Personal Health Record</li>
              <li>Provide access to your health information through our Patient App, Doctor Portal, and related Services</li>
              <li>Send appointment and medication reminders to help you stay on top of your care</li>
              <li>Continuously improve the functionality and user experience of our platform</li>
            </ul>

            <h3 className="text-lg font-medium text-pine-800 mt-6 mb-3">4.2 To Support Clinical Care</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Share your health information with healthcare providers based on your explicit consent</li>
              <li>Organise and present your health history to the healthcare providers you authorise</li>
              <li>Facilitate continuity of care across multiple healthcare providers</li>
            </ul>

            <h3 className="text-lg font-medium text-pine-800 mt-6 mb-3">4.3 To Communicate with You</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Send appointment reminders, medication alerts, and follow-up communications</li>
              <li>Notify you of record access and consent activity on your account</li>
              <li>Respond to your inquiries and provide customer support</li>
            </ul>

            <h3 className="text-lg font-medium text-pine-800 mt-6 mb-3">4.4 For Analytics and Improvement</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Analyze usage patterns to improve platform functionality (using de-identified or aggregated data)</li>
              <li>Conduct internal analysis using aggregated, de-identified data to understand how the platform is used and where it can be improved</li>
              <li>Understand how doctors and patients interact with our platform to enhance features</li>
            </ul>

            <h3 className="text-lg font-medium text-pine-800 mt-6 mb-3">4.5 For Security and Compliance</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Detect, prevent, and address fraud, security breaches, and technical issues</li>
              <li>Maintain audit logs and access records for security and regulatory compliance</li>
              <li>Comply with applicable laws, regulations, and legal processes (ABDM, DPDPA 2023, IT Act 2000, and applicable Indian data protection laws)</li>
            </ul>

            <div className="bg-pine-50 border-l-4 border-pine-500 p-6 rounded-r-xl my-8">
              <p className="text-pine-900 font-medium m-0 italic">Your personal health data is never sold — not to insurers, pharmaceutical companies, employers, or any other third party. Anonymised, aggregated usage data may be used to improve our services and may inform product analytics. No personally identifiable health information is ever included in such analysis.</p>
            </div>

            {/* Section 5 */}
            <h2 className="text-2xl font-medium text-pine-900 font-sans tracking-tight mb-4 mt-12">5. How We Share Your Information</h2>
            <p>We believe in transparent data sharing practices. Your health information is shared only with your explicit, documented consent and always for purposes that directly benefit your healthcare journey.</p>
            
            <h3 className="text-lg font-medium text-pine-800 mt-6 mb-3">5.1 With Healthcare Providers (With Your Consent)</h3>
            <p>When you grant explicit consent through our platform, we securely share your health records with doctors, hospitals, and clinics you authorize. You maintain complete control over which providers can access which information and for how long.</p>
            
            <h3 className="text-lg font-medium text-pine-800 mt-6 mb-3">5.2 With Service Providers</h3>
            <p>We may work with service providers (hosting providers, payment processors, security specialists, analytics providers) who help us deliver our Services. These providers are contractually bound to maintain strict confidentiality and use your information only as necessary to support our Services. We carefully vet all partners and implement data protection agreements.</p>
            
            <h3 className="text-lg font-medium text-pine-800 mt-6 mb-3">5.3 With Family Members</h3>
            <p>You can manage health records for family members and grant them access to your records through explicit permission controls. All such sharing is managed through granular consent permissions that you control.</p>

            <h3 className="text-lg font-medium text-pine-800 mt-6 mb-3">5.4 For Legal Compliance</h3>
            <p>We may disclose your information if required by law, court order, or government regulation. In such cases, we will notify you promptly (unless legally prohibited) and work to limit disclosure to only what is legally required. We will cooperate with your efforts to seek protective orders.</p>

            <h3 className="text-lg font-medium text-pine-800 mt-6 mb-3">5.5 De-Identified Research (With Ethical Oversight)</h3>
            <p>We may use aggregated, de-identified health data for research that improves digital health in India. Such data cannot be used to identify you. You can opt out of contributing to aggregated analysis at any time by contacting us at privacy@fettlemed.com.</p>

            <h3 className="text-lg font-medium text-pine-800 mt-6 mb-3">5.6 Business Transfers</h3>
            <p>If FettleMed is involved in a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction. Any successor organization will be required to maintain the same commitments to your privacy and data sovereignty. We will notify you of any material changes.</p>

            {/* Section 6 */}
            <h2 className="text-2xl font-medium text-pine-900 font-sans tracking-tight mb-4 mt-12">6. Your Consent and Control: The Heart of Our Privacy Model</h2>
            <p>Patient Data Sovereignty is not just a concept at FettleMed—it is operational reality embedded in our platform architecture. You maintain granular, auditable control over your health information at all times.</p>
            
            <h3 className="text-lg font-medium text-pine-800 mt-6 mb-3">6.1 Granular Consent Management</h3>
            <ul className="list-disc list-inside space-y-1">
              <li><strong>Data Sharing Permissions:</strong> Control exactly which healthcare providers can access your health record</li>
              <li><strong>Time-Bound Access:</strong> Set expiration dates for each consent so access is automatically revoked after a specified period</li>
              <li><strong>Real-Time Consent Revocation:</strong> Withdraw consent at any time with immediate effect</li>
            </ul>

            <h3 className="text-lg font-medium text-pine-800 mt-6 mb-3">6.2 Access Audit Trail</h3>
            <p>You can view a complete, auditable log of every time someone accesses your health information. This transparency lets you monitor exactly who has seen your data and when.</p>

            <h3 className="text-lg font-medium text-pine-800 mt-6 mb-3">6.3 Data Access and Correction</h3>
            <p>You have the right to access, review, and correct your personal information at any time. You can update your account information directly through our app or by contacting us.</p>

            <h3 className="text-lg font-medium text-pine-800 mt-6 mb-3">6.4 Communication Preferences</h3>
            <p>You control how we communicate with you. You can opt out of marketing communications, adjust notification preferences, and select your preferred language and contact method at any time.</p>

            <h3 className="text-lg font-medium text-pine-800 mt-6 mb-3">6.5 Cookie and Analytics Choices</h3>
            <p>When you first visit FettleMed, a cookie consent banner allows you to accept or decline Google Analytics tracking. If you decline, no analytics data is collected. Your choice is stored in your browser and you can change it at any time by clearing your browser's local storage. You can also opt out of Google Analytics at any time using <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-pine-600 hover:text-pine-700 underline">Google's browser opt-out tool</a>.</p>

            {/* Section 7 */}
            <h2 className="text-2xl font-medium text-pine-900 font-sans tracking-tight mb-4 mt-12">7. Data Security and Protection</h2>
            <p>We implement comprehensive technical and organizational security measures appropriate for sensitive health information. Security is not an afterthought but is architected into every layer of our platform.</p>
            
            <h3 className="text-lg font-medium text-pine-800 mt-6 mb-3">7.1 Technical Safeguards</h3>
            <ul className="list-disc list-inside space-y-1">
              <li><strong>Encryption in transit and at rest:</strong> Your health data is encrypted using TLS 1.2+ while transmitted and AES-256 encryption while stored</li>
              <li><strong>Access Control:</strong> Role-based access control ensures employees and systems can access only the data necessary for their functions</li>
              <li><strong>Audit Logging:</strong> All access to health data is logged and monitored for suspicious activity</li>
              <li><strong>Firewalls and Intrusion Detection:</strong> Enterprise-grade firewalls and intrusion detection systems protect our infrastructure</li>
              <li><strong>Regular Security Testing:</strong> We conduct regular penetration testing and vulnerability assessments</li>
            </ul>

            <h3 className="text-lg font-medium text-pine-800 mt-6 mb-3">7.2 Organizational Safeguards</h3>
            <ul className="list-disc list-inside space-y-1">
              <li><strong>Employee Training:</strong> All staff members receive privacy and security training, especially those handling health information</li>
              <li><strong>Strict Confidentiality Agreements:</strong> Employees and contractors sign comprehensive confidentiality and non-disclosure agreements</li>
              <li><strong>Data Minimization:</strong> We collect and retain only the health information necessary to serve your needs</li>
              <li><strong>Access Restrictions:</strong> Physical and administrative controls limit who can access our systems and facilities</li>
            </ul>

            <h3 className="text-lg font-medium text-pine-800 mt-6 mb-3">7.3 Incident Response</h3>
            <p>In the unlikely event of a data breach, we have a comprehensive incident response plan. We will notify affected individuals and relevant authorities as required by law, typically within 72 hours of discovering the breach. We will also provide resources to help you protect yourself.</p>
            
            <p className="italic text-sm">Note: While we employ robust security measures, no online system is 100% secure. We are transparent about this reality and continuously work to minimize risks. We recommend using strong passwords, enabling two-factor authentication, and not sharing your account credentials.</p>

            {/* Section 8 */}
            <h2 className="text-2xl font-medium text-pine-900 font-sans tracking-tight mb-4 mt-12">8. Data Retention</h2>
            <p>We retain your personal and health information for as long as necessary to provide our Services, comply with legal obligations, and resolve disputes. The retention period varies depending on the type of information and the context of processing:</p>
            <ul className="list-disc list-inside space-y-1">
              <li><strong>Health Records:</strong> Retained indefinitely at your direction. You own this data and can request deletion at any time</li>
              <li><strong>Account Information:</strong> Retained while your account is active; you can delete your account at any time</li>
              <li><strong>Audit Logs:</strong> Retained for 7 years to comply with regulatory requirements</li>
              <li><strong>De-Identified Research Data:</strong> Retained indefinitely for research purposes (cannot be re-identified)</li>
              <li><strong>Deleted Data:</strong> Securely destroyed using industry-standard methods that render data unrecoverable</li>
            </ul>

            {/* Section 9 */}
            <h2 className="text-2xl font-medium text-pine-900 font-sans tracking-tight mb-4 mt-12">9. International Data Transfers</h2>
            <p>FettleMed is headquartered in India. Patient health records are hosted on Amazon Web Services (AWS), with the primary data centre in India (Mumbai region). AWS backup and disaster recovery infrastructure may include servers in other AWS regions outside India. Additionally, certain supporting service providers — such as Google Analytics, security monitoring tools, or communications platforms — may process operational or anonymised usage data outside India. In all cases, we apply contractual safeguards to ensure your information is handled responsibly and in accordance with applicable data protection laws including DPDPA 2023.</p>

            {/* Section 10 */}
            <h2 className="text-2xl font-medium text-pine-900 font-sans tracking-tight mb-4 mt-12">10. Children's Privacy</h2>
            <p>Our Services are not intended for individuals under the age of 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe we have collected information from a child under 13, please contact us immediately at privacy@fettlemed.com. Parents and guardians can manage their children's health records through their own accounts with appropriate parental controls.</p>

            {/* Section 11 */}
            <h2 className="text-2xl font-medium text-pine-900 font-sans tracking-tight mb-4 mt-12">11. Third-Party Links and Services</h2>
            <p>Our Services may contain links to third-party websites, applications, and services that are not operated by FettleMed. This Privacy Policy does not apply to third-party services, and we are not responsible for their privacy practices. We encourage you to review the privacy policies of any third-party services before providing your information or using those services. We are not liable for the privacy practices or content of third-party services.</p>

            {/* Section 12 */}
            <h2 className="text-2xl font-medium text-pine-900 font-sans tracking-tight mb-4 mt-12">12. Compliance with Data Protection Regulations</h2>
            
            <h3 className="text-lg font-medium text-pine-800 mt-6 mb-3">12.1 ABDM (Ayushman Bharat Digital Mission) Compliance</h3>
            <p>FettleMed is designed to align with the Ayushman Bharat Digital Mission (ABDM) framework established by the Government of India. We implement the consent and data exchange standards mandated by ABDM, ensuring interoperability with the broader Indian healthcare ecosystem while maintaining your data sovereignty principles.</p>

            <h3 className="text-lg font-medium text-pine-800 mt-6 mb-3">12.2 India Data Protection Laws</h3>
            <p>We comply with applicable Indian data protection laws, including provisions related to health data handling. We recognize the sensitive nature of health information and implement protections that exceed minimum legal requirements.</p>

            <h3 className="text-lg font-medium text-pine-800 mt-6 mb-3">12.3 Additional Rights for Certain Jurisdictions</h3>
            <p>FettleMed primarily serves users in India. If you access our Services from another jurisdiction, you may have additional rights under your local data protection laws. Contact us at privacy@fettlemed.com to exercise those rights and we will respond in accordance with applicable law.</p>

            {/* Section 13 */}
            <h2 className="text-2xl font-medium text-pine-900 font-sans tracking-tight mb-4 mt-12">13. Your Rights and Choices</h2>
            
            <h3 className="text-lg font-medium text-pine-800 mt-6 mb-3">13.1 Right to Access</h3>
            <p>You have the right to request access to the personal and health information we hold about you. You can view most of your information directly through your FettleMed account. For comprehensive data export, contact our privacy team.</p>

            <h3 className="text-lg font-medium text-pine-800 mt-6 mb-3">13.2 Right to Rectification</h3>
            <p>You have the right to correct inaccurate personal information. You can update most information directly through your account settings.</p>

            <h3 className="text-lg font-medium text-pine-800 mt-6 mb-3">13.3 Right to Deletion</h3>
            <p>You have the right to request deletion of your account and associated information. We will delete your data subject to legal requirements (e.g., audit retention), regulatory obligations, and legitimate business needs. You can initiate account deletion through your account settings or by contacting us.</p>

            <h3 className="text-lg font-medium text-pine-800 mt-6 mb-3">13.4 Right to Data Portability</h3>
            <p>You have the right to receive your health information in a structured, commonly used, machine-readable format (e.g., PDF, XML, HL7). This enables you to transfer your data to another healthcare platform if you choose. Contact our support team to request a data export.</p>

            <h3 className="text-lg font-medium text-pine-800 mt-6 mb-3">13.5 Right to Object</h3>
            <p>You have the right to object to certain uses of your information, including marketing communications, profiling, or certain automated decision-making. You can update your preferences in your account settings at any time.</p>

            {/* Section 14 */}
            <h2 className="text-2xl font-medium text-pine-900 font-sans tracking-tight mb-4 mt-12">14. Changes to This Privacy Policy</h2>
            <p>We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. We will notify you of material changes by posting the updated Policy on our website and through our app, or by sending you email notification if we have your email address. Your continued use of our Services after such notice constitutes your acceptance of the updated Privacy Policy.</p>

            {/* Section 15 */}
            <h2 className="text-2xl font-medium text-pine-900 font-sans tracking-tight mb-4 mt-12">15. Contact Us</h2>
            <p>If you have questions, concerns, requests regarding this Privacy Policy, or if you wish to exercise any of your privacy rights, please contact us:</p>
            
            <div className="bg-stone-50 border border-stone-200 p-6 rounded-2xl mt-6">
              <p className="mb-2"><strong>Email:</strong> <a href="mailto:hello@fettlemed.com" className="text-pine-600 hover:text-pine-700">hello@fettlemed.com</a></p>
              <p className="mb-2"><strong>Data Protection Officer:</strong> <a href="mailto:dpo@fettlemed.com" className="text-pine-600 hover:text-pine-700">dpo@fettlemed.com</a></p>
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

            <p className="mt-6 text-sm text-dim italic">
              Response Timeline: We aim to respond to all privacy requests within 14 days. Complex requests may require additional time, and we will keep you informed of progress.
            </p>

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
