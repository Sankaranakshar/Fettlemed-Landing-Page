import React, { useRef } from 'react';
import { motion, useInView, useReducedMotion } from 'motion/react';
import { EASE_OUT_STRONG } from '@/lib/motionTokens';

interface PulseLineProps {
  vertical?: boolean;
  className?: string;
  /** Seconds between pulses */
  interval?: number;
}

/**
 * The connection motif: a hairline that draws itself on first view, then
 * sends a small pulse along its length. Depicts a record travelling
 * between parts of the ecosystem. Transform/opacity only; the pulse runs
 * only while on screen and not under reduced motion.
 */
export function PulseLine({ vertical = false, className = '', interval = 5 }: PulseLineProps) {
  const ref = useRef<HTMLDivElement>(null);
  const onScreen = useInView(ref, { amount: 0.5 });
  const seen = useInView(ref, { once: true, amount: 0.5 });
  const rm = useReducedMotion();

  return (
    <div
      ref={ref}
      className={`relative overflow-hidden ${vertical ? 'w-px' : 'h-px'} ${className}`}
      aria-hidden="true"
    >
      {/* Base line draws once */}
      <motion.div
        initial={{ [vertical ? 'scaleY' : 'scaleX']: 0 }}
        animate={seen ? { [vertical ? 'scaleY' : 'scaleX']: 1 } : {}}
        transition={{ duration: 0.9, ease: EASE_OUT_STRONG }}
        style={{ transformOrigin: vertical ? 'top' : 'left' }}
        className="absolute inset-0 bg-pine-200"
      />
      {/* Travelling pulse: a short bright segment sweeping the line */}
      {seen && onScreen && !rm && (
        <motion.div
          initial={vertical ? { y: '-100%' } : { x: '-100%' }}
          animate={vertical ? { y: '1000%' } : { x: '1000%' }}
          transition={{ duration: 1.4, ease: 'easeInOut', repeat: Infinity, repeatDelay: interval }}
          className={`absolute bg-pine-500 ${vertical ? 'left-0 right-0 h-[10%] min-h-4' : 'top-0 bottom-0 w-[10%] min-w-4'}`}
        />
      )}
    </div>
  );
}
