import React from 'react';
import { CheckCircle2, Stethoscope, ShieldCheck, Lock } from "lucide-react";
import { motion } from "motion/react";

export const FoundedByDoctors = () => {
  return (
    <div className="bg-surface-50 border-t border-stone-200 py-5 lg:py-3 relative z-20 overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6 lg:gap-8"
        >
          {/* Main Badge Area */}
          <div className="flex items-center gap-6">
            <div className="relative">
              <motion.div 
                animate={{ scale: [1, 1.05, 1], rotate: [0, 2, -2, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="w-16 h-16 bg-pine-900 rounded-2xl flex items-center justify-center text-white shadow-xl shadow-pine-900/20 relative z-10"
              >
                <Stethoscope className="w-8 h-8" />
              </motion.div>
              
              {/* Animated Background Pulse */}
              <motion.div 
                animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 bg-pine-600 rounded-2xl -z-0 blur-lg"
              />
              
            </div>
            
            <div className="text-left">
              <p className="font-medium text-pine-950 text-xl leading-tight mb-1">Built by Physicians.</p>
              <p className="text-dim font-medium">Designed for clinical excellence.</p>
            </div>
          </div>
          
          <div className="hidden md:block w-px h-12 bg-stone-200"></div>
          
          {/* Trust Markers - Staggered */}
          <div className="grid grid-cols-2 md:flex md:flex-wrap justify-center md:justify-end gap-x-6 gap-y-3 md:gap-x-8 lg:gap-x-10 md:gap-y-4 lg:gap-y-6">
            {[
              { icon: ShieldCheck, text: "ABDM-aligned",     tip: "India's national health data standard" },
              { icon: ShieldCheck, text: "DPDPA-aligned",   tip: "Designed with India's data protection law in mind" },
              { icon: CheckCircle2,text: "Consent-first",   tip: "You control who sees your records, and for how long" },
            ].map((item, i) => (
              <motion.div
                key={item.text}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + (i * 0.1), duration: 0.5 }}
                className="flex items-center gap-2 font-medium text-dim text-[13px] md:text-[14px] lg:text-[15px] group cursor-default"
              >
                <div className="p-1.5 rounded-lg bg-surface-50 group-hover:bg-pine-50 transition-colors shrink-0">
                  <item.icon className="w-4 h-4 text-pine-600"/>
                </div>
                <span className="group-hover:text-pine-900 transition-colors leading-tight">{item.text}</span>
                <div className="relative hidden md:block">
                  <span className="w-4 h-4 rounded-full border border-stone-300 bg-white text-stone-400 text-[10px] font-medium flex items-center justify-center cursor-help peer select-none">i</span>
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 bg-stone-900 text-white text-xs font-medium rounded-lg whitespace-nowrap opacity-0 peer-hover:opacity-100 transition-opacity pointer-events-none z-50">
                    {item.tip}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-stone-900" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};
