import React from 'react';
import { FadeIn } from "@/components/common/FadeIn";

export function DoctorWhoWeAre() {
  return (
    <section className="py-24 bg-surface-50 border-b border-stone-100">
       <div className="container mx-auto px-4 md:px-8 max-w-4xl text-center">
          <FadeIn>
             <h2 className="text-3xl font-medium text-pine-900 tracking-tight mb-8">Who we are</h2>
             <div className="space-y-6 text-lg text-stone-600 font-medium leading-relaxed text-left md:text-center">
                <p>Fettlemed is built by a team that has worked in Indian clinical environments — not a team that read about them.</p>
                <p>Our goal is bridging clinical reality and technology, ensuring every feature reflects how doctors actually work rather than how engineers think they work. With the close involvement of Dr. Bhavani and Dr. Sriram, every feature is validated against real clinical judgment before it ships.</p>
                <p className="text-pine-900 font-medium text-xl mt-8">"We are not building for the doctor of the future. We are building for the doctor practicing in India today."</p>
             </div>
          </FadeIn>
       </div>
    </section>
  );
}
