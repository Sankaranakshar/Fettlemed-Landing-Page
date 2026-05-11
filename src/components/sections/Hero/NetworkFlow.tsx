import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { Smartphone, Stethoscope, Building2 } from 'lucide-react';

export function NetworkFlow() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="relative w-full aspect-square max-w-[500px] mx-auto filter" aria-hidden="true">
      {/* Soft, Breathable Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-pine-100/50 rounded-full blur-[60px]" />
      <div className="absolute bottom-1/4 left-1/4 -translate-x-1/2 w-48 h-48 bg-pine-50/50 rounded-full blur-[60px]" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/4 w-48 h-48 bg-pine-100/30 rounded-full blur-[60px]" />

      {/* SVG Connecting Paths */}
      <svg viewBox="0 0 500 500" preserveAspectRatio="xMidYMid meet" className="absolute inset-0 w-full h-full" style={{ zIndex: 0 }}>
        <defs>
          <linearGradient id="grad-path-light" x1="0%" y1="100%" x2="100%" y2="0%">
             <stop offset="0%" stopColor="#11785D" stopOpacity="0.2" />
             <stop offset="100%" stopColor="#0A4D3C" stopOpacity="0.2" />
          </linearGradient>
        </defs>
        
        {/* Paths (Subtle, Calm Pine) */}
        <path d="M 125 375 L 250 100" stroke="url(#grad-path-light)" strokeWidth="2" strokeDasharray="4 4" fill="none" />
        <path d="M 375 375 L 250 100" stroke="url(#grad-path-light)" strokeWidth="2" strokeDasharray="4 4" fill="none" />
        <path d="M 125 375 L 375 375" stroke="url(#grad-path-light)" strokeWidth="2" strokeDasharray="4 4" fill="none" />
      </svg>

      {/* Animated Data Packets (Amber Highlights! Moderated glow for breathability) */}
      {!shouldReduceMotion && (
        <>
          <motion.div 
            className="absolute w-2.5 h-2.5 bg-accent-600 rounded-full shadow-[0_0_8px_#2F6F73] z-10 will-change-transform"
            initial={{ left: '25%', top: '75%', scale: 0 }}
            animate={{ left: '50%', top: '20%', scale: [0, 1, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 0 }}
          />
          
          <motion.div 
            className="absolute w-2 h-2 bg-accent-600/80 rounded-full shadow-[0_0_6px_#2F6F73] z-10 will-change-transform"
            initial={{ left: '50%', top: '20%', scale: 0 }}
            animate={{ left: '75%', top: '75%', scale: [0, 1, 1, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          />

          <motion.div 
            className="absolute w-2 h-2 bg-accent-600/90 rounded-full shadow-[0_0_6px_#2F6F73] z-10 will-change-transform"
            initial={{ left: '25%', top: '75%', scale: 0 }}
            animate={{ left: '75%', top: '75%', scale: [0, 1, 1, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
          />
        </>
      )}

      {/* Nodes */}
      {/* Top Node (Doctor) */}
      <div className="absolute top-[20%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center">
        <motion.div 
           initial={{ y: 0 }} 
           animate={shouldReduceMotion ? { y: 0 } : { y: [-3, 3, -3] }} 
           transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
           className="w-20 h-20 bg-white border border-stone-100 rounded-2xl flex items-center justify-center shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative"
        >
          <div className="absolute inset-0 bg-pine-50/50 rounded-2xl" />
          <Stethoscope className="w-8 h-8 text-pine-600 relative z-10" />
        </motion.div>
        <span className="mt-4 font-bold text-stone-500 tracking-widest text-xs uppercase">Doctor Portal</span>
      </div>

      {/* Bottom Left Node (Patient) */}
      <div className="absolute top-[75%] left-[25%] -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center">
        <motion.div 
           initial={{ y: 0 }} 
           animate={shouldReduceMotion ? { y: 0 } : { y: [4, -4, 4] }} 
           transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
           className="w-20 h-20 bg-white border border-stone-100 rounded-2xl flex items-center justify-center shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative"
        >
          <div className="absolute inset-0 bg-pine-50/50 rounded-2xl" />
          <Smartphone className="w-8 h-8 text-pine-600 relative z-10" />
        </motion.div>
        <span className="mt-4 font-bold text-stone-500 tracking-widest text-xs uppercase">Patient App</span>
      </div>

      {/* Bottom Right Node (Clinic) */}
      <div className="absolute top-[75%] left-[75%] -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center">
        <motion.div 
           initial={{ y: 0 }} 
           animate={shouldReduceMotion ? { y: 0 } : { y: [-3, 3, -3] }} 
           transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
           className="w-20 h-20 bg-white border border-stone-100 rounded-2xl flex items-center justify-center shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative"
        >
          <div className="absolute inset-0 bg-pine-50/50 rounded-2xl" />
          <Building2 className="w-8 h-8 text-pine-600 relative z-10" />
        </motion.div>
        <span className="mt-4 font-bold text-stone-500 tracking-widest text-xs uppercase">Clinic CMS</span>
      </div>
    </div>
  );
}
