import React, { useEffect } from 'react';
import { SEO } from '@/components/common/SEO';
import { Hero } from '@/components/sections/Hero';
import { FoundedByDoctors } from '@/components/sections/Hero/FoundedByDoctors';
import { Problem } from '@/components/sections/Problem';
import { Features } from '@/components/sections/Features';
import { TargetedRoles } from '@/components/sections/TargetedRoles';
import { WhatWeAreNot } from '@/components/sections/WhatWeAreNot/WhatWeAreNot';
import { Trust } from '@/components/sections/Trust';
import { CTA } from '@/components/sections/CTA';

export default function Home() {
  useEffect(() => {
    document.documentElement.classList.add('home-snap');
    return () => document.documentElement.classList.remove('home-snap');
  }, []);

  return (
    <>
      <SEO title="Home" description="Secure decentralized patient health records infrastructure." />
      <div className="flex flex-col w-full font-sans bg-surface-50 selection:bg-pine-100 selection:text-pine-900 pb-0">
        
        {/* SECTION 1: Hero */}
        <Hero />

        {/* MICRO-SECTION: Founded by Doctors */}
        <FoundedByDoctors />

        {/* SECTION 2: Problem */}
        <Problem />

        {/* SECTION 3: Features / Solution */}
        <Features />

        {/* SECTION 4: Targeted Content by Role */}
        <TargetedRoles />

        {/* SECTION 4.5: What We Are Not */}
        <WhatWeAreNot />

        {/* SECTION 5: Trust & Security */}
        <Trust />

        {/* SECTION 6: Final CTA */}
        <CTA />

      </div>
    </>
  );
}
