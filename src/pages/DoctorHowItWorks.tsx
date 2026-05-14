import { Link } from "react-router-dom";
import { SEO } from '@/components/common/SEO';
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { ArrowLeft } from "lucide-react";
import { FadeIn } from "@/components/common/FadeIn";

export default function DoctorHowItWorks() {
  return (
    <>
      <SEO title="Doctor - How it works" description="How consent based data flows for doctors." />
      <div className="flex flex-col w-full bg-white pt-24 pb-32">
      <div className="container mx-auto px-4 max-w-[800px]">
        <Breadcrumbs />
        <h1 className="text-4xl md:text-5xl font-bold text-stone-900 mb-16 tracking-tight">How consent-based data flows</h1>

        <div className="space-y-24">
          <FadeIn delay={0.1}>
            <div className="flex flex-col">
              <div className="flex items-center gap-4 mb-6">
                 <div className="w-10 h-10 rounded-full bg-pine-500 text-white flex items-center justify-center font-bold text-lg shadow-md">1</div>
                 <h3 className="text-3xl font-bold text-stone-900 tracking-tight">Patient arrives at your clinic</h3>
              </div>
              <p className="text-stone-600 text-lg leading-relaxed mb-10 max-w-2xl">They open their Fettlemed Patient App. You (or your front desk staff) send a data access request from the Doctor Portal by entering their phone number or scanning their ABHA ID.</p>
              
              <div className="bg-stone-50 border border-stone-200 rounded-3xl p-8 md:p-12 shadow-inner w-full flex flex-col md:flex-row gap-8 items-center justify-center">
                 <div className="w-full max-w-xs bg-white rounded-2xl shadow-lg border border-stone-200 p-6 flex flex-col gap-4">
                    <div className="h-6 w-1/2 bg-stone-800 rounded font-bold" />
                    <div className="space-y-2 mt-4">
                       <div className="h-3 w-3/4 bg-stone-300 rounded" />
                       <div className="h-3 w-full bg-stone-200 rounded" />
                    </div>
                    <div className="flex gap-4 mt-6">
                       <div className="h-10 w-full bg-stone-100 rounded-lg flex items-center justify-center border border-stone-200"><div className="h-3 w-12 bg-stone-300 rounded" /></div>
                       <div className="h-10 w-full bg-pine-500 rounded-lg flex items-center justify-center shadow-md shadow-pine-500/20"><div className="h-3 w-16 bg-white rounded" /></div>
                    </div>
                 </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="flex flex-col">
              <div className="flex items-center gap-4 mb-6">
                 <div className="w-10 h-10 rounded-full bg-pine-500 text-white flex items-center justify-center font-bold text-lg shadow-md">2</div>
                 <h3 className="text-3xl font-bold text-stone-900 tracking-tight">Patient approves in one tap</h3>
              </div>
              <p className="text-stone-600 text-lg leading-relaxed mb-10 max-w-2xl">The patient receives a notification. They see who is requesting access and for what purpose. They tap "Approve" to securely share their medical history with you.</p>
              
              <div className="bg-stone-50 border border-stone-200 rounded-3xl p-8 md:p-12 shadow-inner w-full flex flex-col md:flex-row gap-8 items-center justify-center">
                 <div className="w-full max-w-[240px] bg-white rounded-[2.5rem] shadow-2xl border-8 border-stone-900 p-6 aspect-[9/19] flex flex-col relative overflow-hidden">
                    <div className="w-1/3 h-1 bg-stone-200 rounded-full mx-auto mb-6" />
                    <div className="mb-8">
                       <div className="w-12 h-12 bg-pine-100 rounded-2xl mb-4" />
                       <div className="h-2 w-2/3 bg-stone-100 rounded mb-2" />
                       <div className="h-2 w-full bg-stone-50 rounded" />
                    </div>
                    <div className="mt-auto space-y-3">
                       <div className="h-12 w-full bg-accent-600 rounded-2xl flex items-center justify-center text-white text-xs font-bold">Approve Request</div>
                       <div className="h-12 w-full border border-stone-200 rounded-2xl flex items-center justify-center text-stone-400 text-xs font-bold">Deny</div>
                    </div>
                 </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="flex flex-col">
              <div className="flex items-center gap-4 mb-6">
                 <div className="w-10 h-10 rounded-full bg-pine-500 text-white flex items-center justify-center font-bold text-lg shadow-md">3</div>
                 <h3 className="text-3xl font-bold text-stone-900 tracking-tight">Access is granted instantly</h3>
              </div>
              <p className="text-stone-600 text-lg leading-relaxed mb-10 max-w-2xl">The patient's full medical history appears on your dashboard. You can review past medications, lab reports, and previous discharge summaries before the patient even walks into your consultation room.</p>
              
              <div className="bg-stone-50 border border-stone-200 rounded-3xl p-8 md:p-12 shadow-inner w-full">
                 <div className="bg-white rounded-2xl border border-stone-200 shadow-lg overflow-hidden">
                    <div className="bg-pine-900 p-4 flex justify-between items-center">
                       <div className="h-3 w-32 bg-white/20 rounded" />
                       <div className="h-6 w-6 rounded-full bg-white/10" />
                    </div>
                    <div className="p-6 grid grid-cols-3 gap-6">
                       <div className="col-span-1 space-y-4">
                          <div className="h-4 w-full bg-stone-100 rounded" />
                          <div className="h-4 w-5/6 bg-stone-50 rounded" />
                          <div className="h-4 w-2/3 bg-stone-50 rounded" />
                       </div>
                       <div className="col-span-2 space-y-6">
                          <div className="h-40 w-full bg-stone-50 rounded-xl border border-stone-100 border-dashed flex items-center justify-center">
                             <div className="h-2 w-1/4 bg-stone-200 rounded" />
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                             <div className="h-20 bg-stone-50 rounded-xl border border-stone-100" />
                             <div className="h-20 bg-stone-50 rounded-xl border border-stone-100" />
                          </div>
                       </div>
                    </div>
                 </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div className="flex flex-col">
              <div className="flex items-center gap-4 mb-6">
                 <div className="w-10 h-10 rounded-full bg-pine-500 text-white flex items-center justify-center font-bold text-lg shadow-md">4</div>
                 <h3 className="text-3xl font-bold text-stone-900 tracking-tight">One tap to revoke</h3>
              </div>
              <p className="text-stone-600 text-lg leading-relaxed max-w-2xl">After the consultation, or at any time, the patient can revoke access. You retain the records you created for your legal requirements, but you can no longer see their wider history. The control remains with the patient.</p>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
      </>
  );
}
