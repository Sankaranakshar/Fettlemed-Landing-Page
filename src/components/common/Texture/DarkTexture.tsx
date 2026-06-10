import React from 'react';

/* Tiled SVG noise, ~300 bytes, rendered once by the browser and cached.
   Replaces the repeated blurred-circle backgrounds on dark sections. */
const NOISE_URI =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")";

interface DarkTextureProps {
  /** Where the single static glow sits */
  glow?: 'top-right' | 'top-left' | 'center' | 'none';
}

/**
 * Background treatment for dark (pine-900) sections: a faint noise grain
 * plus one stationary radial glow. Purely decorative, zero animation cost.
 * Parent section must be `relative overflow-hidden`; content needs `relative z-10`.
 */
export function DarkTexture({ glow = 'top-right' }: DarkTextureProps) {
  const glowPos =
    glow === 'top-right' ? 'circle at 78% 12%'
    : glow === 'top-left' ? 'circle at 22% 12%'
    : 'circle at 50% 40%';

  return (
    <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
      {glow !== 'none' && (
        <div
          className="absolute inset-0"
          style={{ background: `radial-gradient(${glowPos}, rgba(31,122,92,0.22), transparent 55%)` }}
        />
      )}
      <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: NOISE_URI }} />
    </div>
  );
}
