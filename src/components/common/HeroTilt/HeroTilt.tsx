import React, { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from 'motion/react';

interface HeroTiltProps {
  children: React.ReactNode;
  /** Resting yaw in degrees; negative turns the right edge away */
  restY?: number;
  /** Resting pitch in degrees */
  restX?: number;
}

/**
 * Gives a hero mockup a resting 3D pose that straightens to flat over the
 * first 300px of scroll (the Apple product-page move). On devices with a
 * pointer, adds a +-2 degree tracking tilt. CSS transforms only: no WebGL,
 * no rAF loop on mobile (scroll-driven values are passive).
 */
export function HeroTilt({ children, restY = -6, restX = 3 }: HeroTiltProps) {
  const rm = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const hasPointer = typeof window !== 'undefined' && window.matchMedia('(hover: hover)').matches;

  const { scrollY } = useScroll();
  const scrollRotY = useTransform(scrollY, [0, 300], [restY, 0]);
  const scrollRotX = useTransform(scrollY, [0, 300], [restX, 0]);

  const pointerX = useSpring(0, { stiffness: 150, damping: 20 });
  const pointerY = useSpring(0, { stiffness: 150, damping: 20 });

  const rotateY = useTransform(() => scrollRotY.get() + pointerX.get());
  const rotateX = useTransform(() => scrollRotX.get() + pointerY.get());

  if (rm) return <div>{children}</div>;

  const handleMove = (e: React.MouseEvent) => {
    if (!hasPointer || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    pointerX.set(((e.clientX - r.left) / r.width - 0.5) * 4);
    pointerY.set(((e.clientY - r.top) / r.height - 0.5) * -4);
  };
  const handleLeave = () => { pointerX.set(0); pointerY.set(0); };

  return (
    <div ref={ref} style={{ perspective: 1200 }} onMouseMove={handleMove} onMouseLeave={handleLeave}>
      <motion.div style={{ rotateY, rotateX, transformStyle: 'preserve-3d', willChange: 'transform' }}>
        {children}
      </motion.div>
    </div>
  );
}
