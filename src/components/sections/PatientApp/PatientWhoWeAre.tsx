import React from 'react';
import { FoundersSection } from "@/components/sections/FoundersSection";

/* Role-specific framing for the patient audience: copy only, layout shared. */
export function PatientWhoWeAre() {
  return (
    <FoundersSection
      heading="Built by people who've sat on both sides of the consultation."
      sub="Decades in the consultation room. They built this for the patient who never had what they needed."
      sriram="Nearly four decades as a Cardiothoracic Surgeon. Every incomplete file, every repeated test - FettleMed is the platform he wished existed when he was seeing 40 patients a day."
      bhavani="A career in complex, long-term care. She built FettleMed's patient record model around the family managing care for someone who needs it most."
      quote="Every feature in the patient app came from a real moment in a consultation where the patient didn't have what they needed. And shouldn't have had to."
      quoteSub="We are available to speak with patients and families directly. Write to us at hello@fettlemed.com."
    />
  );
}
