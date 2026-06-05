import React from 'react';
import { SEO } from '@/components/common/SEO';
import { Hero } from '@/components/sections/Hero';
import { Problem } from '@/components/sections/Problem';
import { TargetedRoles } from '@/components/sections/TargetedRoles';
import { WhatWeAreNot } from '@/components/sections/WhatWeAreNot/WhatWeAreNot';
import { Trust } from '@/components/sections/Trust';
import { CTA } from '@/components/sections/CTA';

export default function Home() {

  return (
    <>
      <SEO title="Home" description="FettleMed is India's connected health record platform. Store your complete medical history, share it with any doctor instantly, and give your clinic smarter tools. ABDM-aligned. Join the waitlist." />
      <div className="flex flex-col w-full font-sans bg-surface-50 selection:bg-pine-100 selection:text-pine-900 pb-0">

        {/* SECTION 1: Hero (includes FoundedByDoctors strip at bottom) */}
        <Hero />

        {/* SECTION 2: Problem */}
        <Problem />

        {/* SECTION 3: Targeted Content by Role */}
        <TargetedRoles />

        {/* SECTION 4: What We Are Not */}
        <WhatWeAreNot />

        {/* SECTION 5: Trust & Security */}
        <Trust />

        {/* SECTION 6: Final CTA */}
        <CTA />

      </div>
    </>
  );
}
