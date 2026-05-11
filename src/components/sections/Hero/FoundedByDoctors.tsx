import React from 'react';
import { CheckCircle2, Stethoscope, ShieldCheck, Lock } from "lucide-react";
import { motion } from "motion/react";

export const FoundedByDoctors = () => {
  return (
    <section className="bg-white border-y border-stone-200 py-10 relative z-20 overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row items-center justify-between gap-8"
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
              
              {/* Secondary "Dr" Badge Overlap - Cleaner version */}
              <motion.div 
                initial={{ x: 10, y: 10, opacity: 0 }}
                whileInView={{ x: 20, y: 8, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="absolute -bottom-2 -right-4 bg-accent-600 text-white px-3 py-1.5 rounded-lg text-xs font-bold shadow-lg shadow-accent-600/20 z-20 flex items-center gap-1.5"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                MD Led
              </motion.div>
            </div>
            
            <div className="text-left">
              <h3 className="font-bold text-pine-950 text-xl leading-tight mb-1">Built by Physicians.</h3>
              <p className="text-stone-500 font-medium">Designed for clinical excellence.</p>
            </div>
          </div>
          
          <div className="hidden lg:block w-px h-12 bg-stone-200"></div>
          
          {/* Trust Markers - Staggered */}
          <div className="flex flex-wrap justify-center lg:justify-end gap-x-10 gap-y-6">
            {[
              { icon: ShieldCheck, text: "ABDM Compliant", color: "text-pine-600" },
              { icon: Lock, text: "HIPAA Aligned", color: "text-pine-600" },
              { icon: CheckCircle2, text: "Zero-Knowledge", color: "text-pine-600" }
            ].map((item, i) => (
              <motion.div 
                key={item.text}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + (i * 0.1), duration: 0.5 }}
                className="flex items-center gap-2.5 font-bold text-stone-700 text-[15px] group cursor-default"
              >
                <div className={`p-1.5 rounded-lg bg-surface-50 group-hover:bg-pine-50 transition-colors`}>
                  <item.icon className={`w-4 h-4 ${item.color}`}/>
                </div>
                <span className="group-hover:text-pine-900 transition-colors">{item.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
