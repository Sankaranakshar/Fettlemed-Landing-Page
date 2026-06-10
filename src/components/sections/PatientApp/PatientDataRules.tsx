import React from 'react';
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { FolderSync, EyeOff, Server, Lock } from "lucide-react";
import { FadeIn } from "@/components/common/FadeIn";
import { VisualOnView, ConsentVisual } from "@/components/sections/RoleVisuals";

export function PatientDataRules() {
  return (
    <section className="py-12 md:py-16 bg-white border-b border-stone-100">
      <div className="container mx-auto px-6 max-w-5xl">
        <FadeIn className="text-center mb-6">
          <h2 className="text-3xl md:text-4xl font-medium text-pine-900 tracking-tight text-balance">Your data, your rules</h2>
        </FadeIn>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

          {/* Hero card - Built around patient consent */}
          <FadeIn delay={0.1} className="md:col-span-2 bg-pine-900 rounded-2xl p-6 flex flex-col md:flex-row md:items-center gap-6">
            <div className="flex flex-col flex-1">
              <Lock className="w-6 h-6 text-pine-400 mb-4" />
              <p className="text-2xl font-medium text-white tracking-tight leading-tight mb-2">Built around patient consent.</p>
              <p className="text-pine-400 font-medium text-sm leading-relaxed mt-auto">Never sold. Never advertised. Shared only with who you authorise.</p>
            </div>
            <VisualOnView className="shrink-0 w-full md:w-[260px] flex justify-center">
              <ConsentVisual />
            </VisualOnView>
          </FadeIn>

          {/* 2 taps / 1 tap */}
          <FadeIn delay={0.2} className="bg-surface-50 border border-stone-100 rounded-2xl p-6 flex flex-col">
            <FolderSync className="w-6 h-6 text-pine-600 mb-4" />
            <div className="flex-1">
              <motion.p
                initial={{ scale: 0.6, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ type: 'spring', stiffness: 340, damping: 18 }}
                style={{ transformOrigin: 'left bottom' }}
                className="text-5xl font-bold text-pine-900 tracking-tight leading-none"
              >2</motion.p>
              <p className="text-pine-600 font-medium text-sm mb-4">taps to share</p>
              <motion.p
                initial={{ scale: 0.6, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: 0.12, type: 'spring', stiffness: 340, damping: 18 }}
                style={{ transformOrigin: 'left bottom' }}
                className="text-5xl font-bold text-pine-900 tracking-tight leading-none"
              >1</motion.p>
              <p className="text-pine-600 font-medium text-sm">tap to revoke</p>
            </div>
            <p className="text-dim-2 font-medium text-xs leading-relaxed mt-4">You set the access window. Nothing stays open longer than you intend.</p>
          </FadeIn>

          {/* Full Audit Trail */}
          <FadeIn delay={0.3} className="bg-surface-50 border border-stone-100 rounded-2xl p-6 flex flex-col">
            <EyeOff className="w-6 h-6 text-pine-600 mb-4" />
            <p className="text-3xl font-bold text-pine-900 tracking-tight leading-tight mb-4">Full audit trail</p>
            <p className="text-dim-2 font-medium text-xs leading-relaxed mt-auto">Every access logged: who viewed your records, when, and for how long. Always visible to you in the app.</p>
          </FadeIn>

          {/* India Only */}
          <FadeIn delay={0.4} className="md:col-span-2 bg-pine-50 border border-pine-100 rounded-2xl p-6 flex flex-col md:flex-row md:items-center gap-6">
            <div className="shrink-0">
              <Server className="w-6 h-6 text-pine-600 mb-3" />
              <p className="text-6xl font-bold text-pine-900 tracking-tight leading-none">IN</p>
              <p className="text-pine-600 font-medium text-lg mt-1">India Hosted</p>
            </div>
            <p className="text-dim-2 font-medium text-sm leading-relaxed">Patient health records are stored on infrastructure with the primary data centre in India. They are never sold and never shared for commercial purposes.</p>
          </FadeIn>

        </div>

        <FadeIn delay={0.5} className="text-center mt-5">
          <Link to="/security" className="text-pine-600 font-medium hover:text-pine-700 transition-colors text-sm">
            Read our full security and compliance details →
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
