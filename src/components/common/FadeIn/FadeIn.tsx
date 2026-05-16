import React from 'react';
import { motion, useReducedMotion } from 'motion/react';

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  noYOffset?: boolean;
  eager?: boolean;
}

export function FadeIn({ children, delay = 0, className = "", noYOffset = false, eager = false }: FadeInProps) {
  const shouldReduceMotion = useReducedMotion();
  const yOffset = (shouldReduceMotion || noYOffset) ? 0 : 20;
  const initialScale = shouldReduceMotion ? 1 : 0.98;
  const transitionProps = {
    duration: shouldReduceMotion ? 0.2 : 0.5,
    delay: shouldReduceMotion ? 0 : delay,
    ease: [0.23, 1, 0.32, 1] as [number, number, number, number],
  };
  const cls = `${className} ${shouldReduceMotion ? '' : 'will-change-transform'}`;

  if (eager) {
    return (
      <motion.div
        initial={{ opacity: 0, y: yOffset, scale: initialScale }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={transitionProps}
        className={cls}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset, scale: initialScale }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={transitionProps}
      className={cls}
    >
      {children}
    </motion.div>
  );
}
