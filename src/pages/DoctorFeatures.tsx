import { Link } from "react-router-dom";
import { SEO } from '@/components/common/SEO';
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { ArrowLeft, CheckCircle2 } from "lucide-react";

export default function DoctorFeatures() {
  return (
    <>
      <SEO title="Doctor Features" description="Features and tools for doctors using Fettlemed." />
      <div className="flex flex-col w-full bg-white pt-24 pb-32">
      <div className="container mx-auto px-4 max-w-[1000px]">
        <Breadcrumbs />
        <h1 className="text-4xl md:text-5xl font-medium text-stone-900 mb-16 tracking-tight border-b pb-8 text-balance">Doctor Portal Features</h1>

        <div className="grid md:grid-cols-2 gap-12">
           <div>
             <h3 className="text-2xl font-medium text-stone-900 mb-4 flex gap-3"><CheckCircle2 className="w-6 h-6 text-pine-600 mt-1 shrink-0"/> Smart patient history dashboard</h3>
             <p className="text-stone-600 leading-relaxed text-lg">Before a consultation begins, see a concise summary of the patient’s entire medical history. Past diagnoses, current medications, allergies, recent lab results — all structured into a searchable, chronological timeline. No more relying on patient recall or hunting for old files.</p>
           </div>
           <div>
             <h3 className="text-2xl font-medium text-stone-900 mb-4 flex gap-3"><CheckCircle2 className="w-6 h-6 text-pine-600 mt-1 shrink-0"/> E-prescriptions</h3>
             <p className="text-stone-600 leading-relaxed text-lg">Generate clear, digital prescriptions using a searchable drug database with dosage suggestions. Use customisable templates for common conditions (diabetes management, hypertension follow-up, paediatric fever) to prescribe in under 30 seconds. Prescriptions sync directly to the patient’s app.</p>
           </div>
           <div>
             <h3 className="text-2xl font-medium text-stone-900 mb-4 flex gap-3"><CheckCircle2 className="w-6 h-6 text-pine-600 mt-1 shrink-0"/> Consultation notes</h3>
             <p className="text-stone-600 leading-relaxed text-lg">Type or dictate clinical notes directly into the patient’s record. Templates for common complaint patterns speed up documentation. Notes are structured and timestamped, building a longitudinal record over multiple visits.</p>
           </div>
           <div>
             <h3 className="text-2xl font-medium text-stone-900 mb-4 flex gap-3"><CheckCircle2 className="w-6 h-6 text-pine-600 mt-1 shrink-0"/> Clinical decision support (Phase 2)</h3>
             <p className="text-stone-600 leading-relaxed text-lg">Drug interaction warnings when prescribing. Allergy cross-checks against patient history. Lab result trend analysis showing values over time. Smart alerts for follow-up care based on diagnosis patterns.</p>
           </div>
           <div>
             <h3 className="text-2xl font-medium text-stone-900 mb-4 flex gap-3"><CheckCircle2 className="w-6 h-6 text-pine-600 mt-1 shrink-0"/> Lab integration</h3>
             <p className="text-stone-600 leading-relaxed text-lg">Order lab tests digitally from within the portal. Track status from sample collection to result availability. Results are delivered electronically into both your portal and the patient’s app simultaneously.</p>
           </div>
           <div>
             <h3 className="text-2xl font-medium text-stone-900 mb-4 flex gap-3"><CheckCircle2 className="w-6 h-6 text-pine-600 mt-1 shrink-0"/> Works standalone or with Fettlemed CMS</h3>
             <p className="text-stone-600 leading-relaxed text-lg">Use the Doctor Portal independently in any clinic. Or pair it with Fettlemed Clinic Management System for full operational integration — appointments, billing, patient queue, and records all in one system.</p>
           </div>
        </div>
      </div>
    </div>
      </>
  );
}
