import { Link } from "react-router-dom";
import { SEO } from '@/components/common/SEO';
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { ArrowLeft, CheckCircle2 } from "lucide-react";

export default function ClinicFeatures() {
  return (
    <>
      <SEO title="Clinic Features" description="Features of Fettlemed Clinic Management." />
      <div className="flex flex-col w-full bg-white pt-24 pb-32">
      <div className="container mx-auto px-4 max-w-[1000px]">
        <Breadcrumbs />
        <h1 className="text-4xl md:text-5xl font-medium text-stone-900 mb-16 tracking-tight border-b pb-8 text-balance">Clinic Management Features</h1>

        <div className="grid lg:grid-cols-2 gap-12">
           <div>
             <h3 className="text-2xl font-medium text-stone-900 mb-4 flex gap-3"><CheckCircle2 className="w-6 h-6 text-pine-600 mt-1 shrink-0"/> Patient registration & records</h3>
             <p className="text-stone-600 leading-relaxed text-lg">Digital information forms that can be filled by staff or completed by patients online before their visit via the Fettlemed Patient App. ABHA ID verification and linking. Automatic generation of a Unique Patient Identifier (UHID). Secure upload of digital documents like IDs and referral letters. Patient details auto-populate across all integrated modules including EHR and billing.</p>
           </div>
           <div>
             <h3 className="text-2xl font-medium text-stone-900 mb-4 flex gap-3"><CheckCircle2 className="w-6 h-6 text-pine-600 mt-1 shrink-0"/> Appointment & patient flow</h3>
             <p className="text-stone-600 leading-relaxed text-lg">Robust digital calendar for booking, rescheduling, and cancelling appointments for one or multiple practitioners. Unified patient profile integrating demographics with longitudinal health records. Real-time patient queue visible to reception, doctors, and waiting room displays. Integration with diagnostic reports and prescription history logs.</p>
           </div>
           <div>
             <h3 className="text-2xl font-medium text-stone-900 mb-4 flex gap-3"><CheckCircle2 className="w-6 h-6 text-pine-600 mt-1 shrink-0"/> Billing & financial management</h3>
             <p className="text-stone-600 leading-relaxed text-lg">Itemised digital invoices for all services, consultations, and procedures. Multiple payment gateway integration: UPI, credit/debit cards, and net banking. Financial reporting module: daily, weekly, and monthly revenue summaries, collections tracking, and outstanding payment management.</p>
           </div>
           <div>
             <h3 className="text-2xl font-medium text-stone-900 mb-4 flex gap-3"><CheckCircle2 className="w-6 h-6 text-pine-600 mt-1 shrink-0"/> Doctor workflow integration</h3>
             <p className="text-stone-600 leading-relaxed text-lg">Searchable digital catalogue of lab tests and imaging studies. Integrated directory of affiliated diagnostic centres. Digital lab ordering with real-time status tracking from sample collection to result availability. Automatic patient notifications. Test results delivered electronically into the patient record.</p>
           </div>
           <div>
             <h3 className="text-2xl font-medium text-stone-900 mb-4 flex gap-3"><CheckCircle2 className="w-6 h-6 text-pine-600 mt-1 shrink-0"/> Role-based access control</h3>
             <p className="text-stone-600 leading-relaxed text-lg">Granular permissions system ensuring each staff role sees only relevant data. Front desk: registration, appointments, and patient check-in. Billing: invoices, payments, and financial reports. Nurses: vitals, queue management. Doctors: full clinical records, prescriptions, lab orders. Admin: all modules plus reporting and configuration.</p>
           </div>
           <div>
             <h3 className="text-2xl font-medium text-stone-900 mb-4 flex gap-3"><CheckCircle2 className="w-6 h-6 text-pine-600 mt-1 shrink-0"/> Reporting & analytics</h3>
             <p className="text-stone-600 leading-relaxed text-lg">Dashboard with key operational metrics: patient volume trends, average wait times, revenue per doctor, appointment no-show rates, and billing collection efficiency. Export reports for accounting and compliance.</p>
           </div>
        </div>
      </div>
    </div>
      </>
  );
}
