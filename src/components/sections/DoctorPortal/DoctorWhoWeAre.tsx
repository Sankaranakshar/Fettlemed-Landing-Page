import React from 'react';
import { FoundersSection } from "@/components/sections/FoundersSection";

/* Role-specific framing for the doctor audience: copy only, layout shared. */
export function DoctorWhoWeAre() {
  return (
    <FoundersSection
      heading="Built by doctors. For doctors."
      sub="Decades in practice across India, the UK, and Singapore. They lived the problem."
      sriram="Nearly four decades as a Cardiothoracic Surgeon. Every incomplete file, every repeated test - FettleMed is the platform he wished existed when he was seeing 40 patients a day."
      bhavani="A career in paediatrics and specialised care. When records don't travel with the patient, care suffers. She built FettleMed's consent model around the patients who most need continuity."
      quote="We built this from inside the consultation room. We were there, watching it fail."
      quoteSub="Both founders are available to speak with pilot doctors directly."
    />
  );
}
