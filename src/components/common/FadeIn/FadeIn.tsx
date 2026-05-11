import React from 'react';
import { motion, useReducedMotion } from 'motion/react';

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  noYOffset?: boolean;
}

export function FadeIn({ children, delay = 0, className = "", noYOffset = false }: FadeInProps) {
  const shouldReduceMotion = useReducedMotion();
  
  return (
    <motion.div
      initial={{ 
        opacity: 0, 
        y: (shouldReduceMotion || noYOffset) ? 0 : 20 
      }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: shouldReduceMotion ? 0.2 : 0.6, 
        delay: shouldReduceMotion ? 0 : delay, 
        ease: "easeOut" 
      }}
      className={`${className} ${shouldReduceMotion ? '' : 'will-change-transform'}`}
    >
      {children}
    </motion.div>
  );
}
