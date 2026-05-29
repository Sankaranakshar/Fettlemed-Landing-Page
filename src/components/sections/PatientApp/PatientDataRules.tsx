import React from 'react';
import { Link } from "react-router-dom";
import { ShieldCheck, FolderSync, EyeOff, Server } from "lucide-react";
import { FadeIn } from "@/components/common/FadeIn";

export function PatientDataRules() {
  return (
    <section className="py-16 md:py-20 bg-white border-b border-stone-100">
       <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <FadeIn className="text-center mb-10">
             <h2 className="text-3xl md:text-5xl font-medium text-pine-900 tracking-tight text-balance">Your data, your rules</h2>
          </FadeIn>

          {/* Bento grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

             {/* Hero card — 0 Third Parties */}
             <FadeIn delay={0.1} className="md:col-span-2 bg-pine-900 rounded-3xl p-8 flex flex-col">
                <ShieldCheck className="w-7 h-7 text-pine-400 mb-6" />
                <p className="text-7xl font-bold text-white tracking-tight leading-none mb-2">0</p>
                <p className="text-pine-200 font-medium text-2xl mb-5">Third Parties</p>
                <p className="text-pine-400 font-medium text-base leading-relaxed mt-auto">Never sold. Never used for ads. Never shared with insurers, employers, or anyone else. Architecturally enforced, not just policy.</p>
             </FadeIn>

             {/* 2 taps / 1 tap */}
             <FadeIn delay={0.2} className="bg-surface-50 border border-stone-100 rounded-3xl p-8 flex flex-col">
                <FolderSync className="w-7 h-7 text-pine-600 mb-6" />
                <div className="flex-1">
                   <p className="text-6xl font-bold text-pine-900 tracking-tight leading-none">2</p>
                   <p className="text-pine-600 font-medium text-base mb-5">taps to share</p>
                   <p className="text-6xl font-bold text-pine-900 tracking-tight leading-none">1</p>
                   <p className="text-pine-600 font-medium text-base">tap to revoke</p>
                </div>
                <p className="text-dim-2 font-medium text-sm leading-relaxed mt-5">You set the access window. Nothing stays open longer than you intend.</p>
             </FadeIn>

             {/* Full Audit Trail */}
             <FadeIn delay={0.3} className="bg-surface-50 border border-stone-100 rounded-3xl p-8 flex flex-col">
                <EyeOff className="w-7 h-7 text-pine-600 mb-6" />
                <p className="text-4xl font-bold text-pine-900 tracking-tight leading-tight mb-5">Full<br/>Audit<br/>Trail</p>
                <p className="text-dim-2 font-medium text-sm leading-relaxed mt-auto">Every access logged — who viewed your records, when, and for how long. Always visible to you in the app.</p>
             </FadeIn>

             {/* India Only */}
             <FadeIn delay={0.4} className="md:col-span-2 bg-pine-50 border border-pine-100 rounded-3xl p-8 flex flex-col md:flex-row md:items-center gap-8">
                <div className="shrink-0">
                   <Server className="w-7 h-7 text-pine-600 mb-4" />
                   <p className="text-7xl font-bold text-pine-900 tracking-tight leading-none">IN</p>
                   <p className="text-pine-600 font-medium text-xl mt-1">India Only</p>
                </div>
                <p className="text-dim-2 font-medium text-base leading-relaxed">Stored on secure servers within India. Your data cannot leave Indian infrastructure. This is not just a policy — it is the architecture.</p>
             </FadeIn>

          </div>

          <FadeIn delay={0.5} className="text-center mt-8">
             <Link to="/security" className="text-pine-600 font-medium hover:text-pine-700 transition-colors">
                Read our full security and compliance details →
             </Link>
          </FadeIn>
       </div>
    </section>
  );
}
