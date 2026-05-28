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

          <div className="grid gap-6">
             <FadeIn delay={0.1} className="p-8 md:p-10 rounded-3xl bg-surface-50 border border-stone-100 flex flex-col md:flex-row gap-8 items-center md:items-start text-center md:text-left">
                <div className="w-16 h-16 bg-white shrink-0 rounded-2xl shadow-sm border border-stone-200 flex items-center justify-center">
                   <ShieldCheck className="w-8 h-8 text-pine-600" />
                </div>
                <div>
                   <h3 className="text-2xl font-medium text-pine-900 mb-3 tracking-tight">Fettlemed never sells your data</h3>
                   <ul className="space-y-2 text-dim-2 font-medium text-lg leading-relaxed">
                      <li className="flex items-start gap-2"><span className="text-pine-500 mt-1 shrink-0">•</span>Never used for advertising</li>
                      <li className="flex items-start gap-2"><span className="text-pine-500 mt-1 shrink-0">•</span>Never sold to insurers or employers</li>
                      <li className="flex items-start gap-2"><span className="text-pine-500 mt-1 shrink-0">•</span>Never shared with third parties. Ever.</li>
                   </ul>
                </div>
             </FadeIn>

             <FadeIn delay={0.2} className="p-8 md:p-10 rounded-3xl bg-surface-50 border border-stone-100 flex flex-col md:flex-row gap-8 items-center md:items-start text-center md:text-left">
                <div className="w-16 h-16 bg-white shrink-0 rounded-2xl shadow-sm border border-stone-200 flex items-center justify-center">
                   <FolderSync className="w-8 h-8 text-pine-600" />
                </div>
                <div>
                   <h3 className="text-2xl font-medium text-pine-900 mb-3 tracking-tight">You control who sees what</h3>
                   <ul className="space-y-2 text-dim-2 font-medium text-lg leading-relaxed">
                      <li className="flex items-start gap-2"><span className="text-pine-500 mt-1 shrink-0">•</span>Every doctor sees only what you choose to share</li>
                      <li className="flex items-start gap-2"><span className="text-pine-500 mt-1 shrink-0">•</span>Access expires after one visit, or stays open — you decide</li>
                      <li className="flex items-start gap-2"><span className="text-pine-500 mt-1 shrink-0">•</span>Revoke anytime in seconds. Nothing stays open longer than you intend.</li>
                   </ul>
                </div>
             </FadeIn>

             <FadeIn delay={0.3} className="p-8 md:p-10 rounded-3xl bg-surface-50 border border-stone-100 flex flex-col md:flex-row gap-8 items-center md:items-start text-center md:text-left">
                <div className="w-16 h-16 bg-white shrink-0 rounded-2xl shadow-sm border border-stone-200 flex items-center justify-center">
                   <EyeOff className="w-8 h-8 text-pine-600" />
                </div>
                <div>
                   <h3 className="text-2xl font-medium text-pine-900 mb-3 tracking-tight">You always see who viewed your records, and when</h3>
                   <ul className="space-y-2 text-dim-2 font-medium text-lg leading-relaxed">
                      <li className="flex items-start gap-2"><span className="text-pine-500 mt-1 shrink-0">•</span>Full access log: who viewed your records and when</li>
                      <li className="flex items-start gap-2"><span className="text-pine-500 mt-1 shrink-0">•</span>Close access instantly from the app</li>
                   </ul>
                </div>
             </FadeIn>

             <FadeIn delay={0.4} className="p-8 md:p-10 rounded-3xl bg-surface-50 border border-stone-100 flex flex-col md:flex-row gap-8 items-center md:items-start text-center md:text-left">
                <div className="w-16 h-16 bg-white shrink-0 rounded-2xl shadow-sm border border-stone-200 flex items-center justify-center">
                   <Server className="w-8 h-8 text-pine-600" />
                </div>
                <div>
                   <h3 className="text-2xl font-medium text-pine-900 mb-3 tracking-tight">All your data stays in India</h3>
                   <ul className="space-y-2 text-dim-2 font-medium text-lg leading-relaxed">
                      <li className="flex items-start gap-2"><span className="text-pine-500 mt-1 shrink-0">•</span>Stored on secure servers within India</li>
                      <li className="flex items-start gap-2"><span className="text-pine-500 mt-1 shrink-0">•</span>Not just a policy — it's built into the architecture</li>
                      <li className="flex items-start gap-2"><span className="text-pine-500 mt-1 shrink-0">•</span>Your data cannot leave Indian servers</li>
                   </ul>
                </div>
             </FadeIn>
          </div>

          <FadeIn delay={0.5} className="text-center mt-10">
             <Link to="/security" className="text-pine-600 font-medium hover:text-pine-700 transition-colors">
                Read our full security and compliance details →
             </Link>
          </FadeIn>
       </div>
    </section>
  );
}
