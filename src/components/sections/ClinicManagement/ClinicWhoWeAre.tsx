import React from 'react';
import { FoundersSection } from "@/components/sections/FoundersSection";

/* Role-specific framing for the clinic audience: copy only, layout shared. */
export function ClinicWhoWeAre() {
  return (
    <FoundersSection
      heading="Built by people who know what a clinic actually runs on."
      sub="Careers across high-volume clinical environments. Every feature has to earn its place in a day with no spare minute."
      sriram="Nearly four decades as a Cardiothoracic Surgeon. He watched how much clinical time disappears into tasks that should have been automated. FettleMed is built to give that time back."
      bhavani="A career in complex, high-need care. She built FettleMed's clinic features around the person managing the front desk, the phone queue, and walk-in registrations - all at the same time."
      quote="A clinic runs on people, not software. Our job is to make the software invisible. So your staff can focus on the patients."
      quoteSub="Both founders are available to speak with pilot clinics directly."
    />
  );
}
