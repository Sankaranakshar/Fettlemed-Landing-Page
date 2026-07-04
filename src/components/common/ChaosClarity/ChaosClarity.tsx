import React, { useRef } from "react";
import { motion, useScroll, useSpring, useTransform, useReducedMotion, MotionValue } from "motion/react";
import { DarkTexture } from "@/components/common/Texture/DarkTexture";

/* ── Chaos to clarity scroll stage ────────────────────────────────
   A pinned dark stage. Scattered "chaos" items drift while the
   problem headline holds, then a glowing ring pulls everything in.
   The items dissolve on arrival and the clarity mockup takes their
   place, with the payoff headline beneath. Scroll-scrubbed both ways. */

export interface ChaosItem {
  id: string;
  node: React.ReactNode;
  /** scattered pose: x/y offset from stage centre (px), rotation (deg) */
  sx: number;
  sy: number;
  sr: number;
}

interface ChaosClarityProps {
  eyebrow: string;
  problem: string;
  problemSub?: string;
  payoff: string;
  payoffSub?: string;
  items: ChaosItem[];
  clarity: React.ReactNode;
}

function ChaosItemShell({ p, item }: { p: MotionValue<number>; item: ChaosItem; key?: React.Key }) {
  const { node, sx, sy, sr } = item;
  // idle scatter while the headline holds, then pulled to centre and
  // dissolved into the phone in one continuous motion (scroll 1)
  const x       = useTransform(p, [0, 0.14, 0.40], [sx, sx * 1.08, 0]);
  const y       = useTransform(p, [0, 0.14, 0.40], [sy, sy * 1.08, 0]);
  const rotate  = useTransform(p, [0, 0.14, 0.40], [sr, sr * 1.15, 0]);
  const scale   = useTransform(p, [0.14, 0.40], [1, 0.35]);
  const opacity = useTransform(p, [0.30, 0.40], [1, 0]);
  return (
    <motion.div
      style={{ x, y, rotate, scale, opacity }}
      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
    >
      {node}
    </motion.div>
  );
}

export function ChaosClarity({ eyebrow, problem, problemSub, payoff, payoffSub, items, clarity }: ChaosClarityProps) {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const p = useSpring(scrollYProgress, { stiffness: 90, damping: 24, mass: 0.4 });

  // Scroll 1: headline appears instantly, holds, fades as the ring forms
  // and the scattered records converge; they dissolve directly into the
  // phone with no gap (opacity windows overlap exactly).
  const h1Opacity   = useTransform(p, [0, 0.02, 0.14, 0.22], [0, 1, 1, 0]);
  const h1Y         = useTransform(p, [0.14, 0.22], [0, -24]);
  const ringOpacity = useTransform(p, [0.16, 0.28], [0, 1]);
  const ringScale   = useTransform(p, [0.16, 0.34], [0.5, 1]);
  const uiOpacity   = useTransform(p, [0.30, 0.40], [0, 1]);
  const uiScale     = useTransform(p, [0.30, 0.42], [0.85, 1]);

  // Scroll 2: phone stays put, payoff headline settles in beneath it,
  // then the composition holds for the rest of the pinned section.
  const h2Opacity   = useTransform(p, [0.46, 0.58], [0, 1]);
  const h2Y         = useTransform(p, [0.46, 0.58], [24, 0]);

  if (reduced) {
    return (
      <section className="relative bg-pine-900 text-white overflow-hidden py-20 border-b border-pine-800">
        <DarkTexture />
        <div className="relative z-10 container mx-auto px-4 text-center flex flex-col items-center gap-8">
          <p className="text-xs font-medium tracking-widest uppercase text-pine-300">{eyebrow}</p>
          <div>{clarity}</div>
          <div>
            <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-balance">{payoff}</h2>
            {payoffSub && <p className="text-pine-300 text-base font-medium mt-3 max-w-md mx-auto">{payoffSub}</p>}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section ref={ref} className="relative h-[300vh] bg-pine-900 border-b border-pine-800">
      <div className="sticky top-0 h-screen overflow-hidden text-white">
        <DarkTexture />

        {/* eyebrow */}
        <p className="absolute top-10 left-1/2 -translate-x-1/2 w-full max-w-2xl px-6 text-center text-xs font-medium tracking-widest uppercase text-pine-300 z-20">
          {eyebrow}
        </p>

        {/* the ring */}
        <motion.div
          style={{ opacity: ringOpacity, scale: ringScale }}
          aria-hidden="true"
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[330px] h-[330px] rounded-full border border-pine-400/70"
        >
          <div className="absolute -inset-3 rounded-full border border-pine-500/30" />
          <div className="absolute inset-0 rounded-full shadow-[0_0_80px_12px_rgba(76,175,143,0.25)]" />
        </motion.div>

        {/* chaos items - the whole scatter scales down on small screens so
            cards don't enter half-clipped at the viewport edges */}
        <div aria-hidden="true" className="absolute inset-0 scale-[0.7] sm:scale-100">
          {items.map((item) => (
            <ChaosItemShell key={item.id} p={p} item={item} />
          ))}
        </div>

        {/* the clarity mockup, materialising at centre */}
        <motion.div
          style={{ opacity: uiOpacity, scale: uiScale }}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
        >
          {clarity}
        </motion.div>

        {/* problem headline */}
        <motion.div
          style={{ opacity: h1Opacity, y: h1Y }}
          className="absolute inset-x-0 top-1/2 -translate-y-1/2 z-10 text-center px-6 pointer-events-none"
        >
          <div className="relative mx-auto max-w-2xl">
            {/* dark veil so the copy stays readable over the chaos */}
            <div
              aria-hidden="true"
              className="absolute -inset-x-16 -inset-y-12 bg-[radial-gradient(ellipse_at_center,rgba(8,35,28,0.95)_0%,rgba(8,35,28,0.7)_55%,transparent_78%)]"
            />
            <h2 className="relative text-3xl md:text-5xl font-medium tracking-tight text-balance leading-tight">
              {problem}
            </h2>
            {problemSub && (
              <p className="relative text-pine-100 text-base md:text-lg font-medium mt-4 max-w-md mx-auto">
                {problemSub}
              </p>
            )}
          </div>
        </motion.div>

        {/* payoff headline */}
        <motion.div
          style={{ opacity: h2Opacity, y: h2Y }}
          className="absolute inset-x-0 bottom-[7vh] z-10 text-center px-6 pointer-events-none"
        >
          <h2 className="text-2xl md:text-4xl font-medium tracking-tight text-balance leading-tight">
            {payoff}
          </h2>
          {payoffSub && (
            <p className="text-pine-300 text-sm md:text-base font-medium mt-3 max-w-md mx-auto">{payoffSub}</p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
