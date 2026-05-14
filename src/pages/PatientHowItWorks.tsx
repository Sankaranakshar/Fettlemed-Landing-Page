import { Link } from "react-router-dom";
import { SEO } from '@/components/common/SEO';
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { ArrowLeft, Plus, ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/common/FadeIn";

export default function PatientHowItWorks() {
  return (
    <>
      <SEO title="Patient - How it works" description="How Fettlemed works for patients." />
      <div className="flex flex-col w-full bg-white pt-24 pb-32">
      <div className="container mx-auto px-4 max-w-[800px]">
        <Breadcrumbs />
        <h1 className="text-4xl md:text-5xl font-bold text-stone-900 mb-16 tracking-tight">How Fettlemed works for patients</h1>

        <div className="space-y-24">
          
          <FadeIn delay={0.1}>
            <div className="flex flex-col">
              <div className="flex items-center gap-4 mb-6">
                 <div className="w-10 h-10 rounded-full bg-pine-500 text-white flex items-center justify-center font-bold text-lg shadow-md">1</div>
                 <h3 className="text-3xl font-bold text-stone-900 tracking-tight">Create your ABHA-linked account</h3>
              </div>
              <p className="text-stone-600 text-lg leading-relaxed mb-10 max-w-2xl">Sign up with your phone number. Optionally link your ABHA ID for national health record portability. In under 2 minutes, your personal health vault is ready.</p>
              
              {/* Abstract UI: Signup Skeleton */}
              <div className="bg-stone-50 border border-stone-200 rounded-3xl p-8 md:p-12 shadow-inner max-w-md mx-auto w-full">
                 <div className="flex flex-col gap-6">
                    <div className="h-8 bg-stone-200 rounded-md w-1/2 mx-auto mb-4" />
                    <div className="flex flex-col gap-2">
                       <div className="h-4 bg-stone-200 rounded w-24" />
                       <div className="h-12 border-2 border-stone-200 rounded-xl bg-white flex items-center px-4">
                         <span className="text-stone-300 font-bold tracking-widest">Phone Number</span>
                       </div>
                    </div>
                    <div className="h-14 bg-pine-500 rounded-xl w-full mt-4 flex items-center justify-center shadow-lg shadow-pine-500/20">
                       <div className="h-4 bg-white/50 rounded w-24" />
                    </div>
                    <div className="h-14 border-2 border-stone-200 bg-white rounded-xl w-full flex items-center justify-center cursor-pointer hover:bg-stone-50">
                       <div className="h-4 bg-stone-300 rounded w-32" />
                    </div>
                 </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="flex flex-col">
              <div className="flex items-center gap-4 mb-6">
                 <div className="w-10 h-10 rounded-full bg-pine-500 text-white flex items-center justify-center font-bold text-lg shadow-md">2</div>
                 <h3 className="text-3xl font-bold text-stone-900 tracking-tight">Add your existing records</h3>
              </div>
              <p className="text-stone-600 text-lg leading-relaxed mb-10 max-w-2xl">Snap a photo of any prescription, lab report, or discharge summary. Our system extracts and structures the data automatically.</p>
              
              {/* Abstract UI: Camera & Timeline */}
              <div className="bg-stone-50 border border-stone-200 rounded-3xl p-8 md:p-12 shadow-inner w-full flex flex-col md:flex-row gap-8 items-center justify-center">
                 <div className="w-48 h-64 bg-stone-200 rounded-2xl border-4 border-stone-300 flex flex-col items-center justify-center relative overflow-hidden shadow-lg">
                    <div className="absolute inset-0 bg-gradient-to-tr from-stone-300 to-white opacity-50" />
                    <div className="w-32 h-40 bg-white shadow-sm flex flex-col gap-2 p-3 transform rotate-[-5deg]">
                       <div className="h-2 bg-stone-200 w-2/3" />
                       <div className="flex gap-2"><div className="h-2 bg-stone-200 w-1/3" /><div className="h-2 bg-stone-200 w-1/4" /></div>
                    </div>
                    <div className="absolute bottom-4 w-12 h-12 bg-white rounded-full shadow-lg border-4 border-pine-500" />
                 </div>
                 
                 <ArrowRight className="w-8 h-8 text-stone-400 hidden md:block" />
                 <Plus className="w-8 h-8 text-stone-400 block md:hidden" />

                 <div className="w-full max-w-xs flex flex-col gap-4">
                    <div className="bg-white p-4 rounded-xl shadow-sm border border-stone-100 flex items-center gap-4">
                       <div className="w-12 h-12 bg-pine-100 rounded-lg flex-shrink-0" />
                       <div className="flex-1 space-y-2">
                         <div className="h-3 bg-stone-400 rounded w-3/4" />
                         <div className="h-2 bg-stone-200 rounded w-1/2" />
                       </div>
                    </div>
                 </div>
              </div>
            </div>
          </FadeIn>

        </div>
      </div>
    </div>
      </>
  );
}
