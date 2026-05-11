import React, { useState } from "react";
import { SEO } from '@/components/common/SEO';
import { ArrowRight, Mail, MapPin, User } from "lucide-react";
import { FadeIn } from "@/components/common/FadeIn";
import { WaitlistModal } from "@/components/common/WaitlistModal";

export default function About() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <SEO title="About" description="Our mission to empower patients and providers." />
      <WaitlistModal open={modalOpen} onClose={() => setModalOpen(false)} />
      <div className="flex flex-col w-full bg-surface-50">

      {/* Hero / Mission */}
      <section className="relative pt-20 pb-24 md:pt-32 md:pb-32 bg-pine-900 border-b border-pine-800 text-white overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-pine-800/50 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>

        <div className="container mx-auto px-4 md:px-8 max-w-[900px] text-center relative z-10">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-[1.05] mb-16 tracking-tight text-balance">
              Healthcare shouldn't be fragmented. <br/>
              <span className="text-accent-400">We connect all the pieces of the puzzle.</span>
            </h1>

            <div className="space-y-16">
               <div>
                  <h2 className="text-sm font-black tracking-widest uppercase text-accent-500 mb-6 border-b border-accent-500/20 inline-block pb-1">Our Analogy</h2>
                  <p className="text-2xl md:text-3xl font-medium leading-relaxed text-white max-w-3xl mx-auto text-balance">
                    Think of FettleMed as the "Health Operating System." Just as an OS lets different apps run on the same hardware, FettleMed lets different doctors, clinics, and labs securely access the same medical history with your permission.
                  </p>
               </div>
               <div>
                  <h2 className="text-sm font-black tracking-widest uppercase text-accent-500 mb-6 border-b border-accent-500/20 inline-block pb-1">Our belief</h2>
                  <p className="text-2xl md:text-3xl font-medium leading-relaxed text-white max-w-3xl mx-auto text-balance">
                    We believe the patient is the primary owner of their medical data, and we've built every part of FettleMed around that principle.
                  </p>
               </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Our Philosophy */}
      <section className="py-24 bg-white border-b border-stone-100">
        <div className="container mx-auto px-4 md:px-8 max-w-[900px]">
          <FadeIn>
            <h2 className="text-sm font-black tracking-widest uppercase text-accent-600 mb-6">Our Philosophy</h2>
            <div className="space-y-8 text-xl md:text-2xl text-stone-700 font-medium leading-relaxed">
              <p>Your health belongs to you. Not to a filing cabinet, not to the last clinic you visited, not to us. That belief sits at the heart of everything we do.</p>
              <p>We exist because health decisions matter — for the patient managing a chronic condition, the parent tracking a child's vaccinations, the doctor who needs the full picture before they can truly help. When the right information reaches the right person at the right moment, care gets better. That is what we are here to enable.</p>
              <p className="text-pine-900 font-bold">We hold ourselves to a simple standard: does this make someone's health journey easier, safer, or more dignified? If not, we don't build it.</p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="py-24 bg-surface-50 border-b border-stone-100 text-center">
        <FadeIn delay={0.1}>
          <div className="container mx-auto px-4 md:px-8 max-w-[1200px]">
             <div className="mb-16">
               <h2 className="text-3xl md:text-5xl font-bold text-pine-900 mb-6 tracking-tight">The Founding Team</h2>
               <p className="text-lg md:text-xl text-stone-500 font-medium max-w-2xl mx-auto text-balance">
                 A unique combination of clinical integrity and strategic technology vision.
               </p>
             </div>

             <div className="grid md:grid-cols-3 gap-8 md:gap-12 text-left">
                {/* Team Member 1 */}
                <div className="flex flex-col items-center md:items-start">
                   <div className="w-full aspect-[4/5] overflow-hidden rounded-[2rem] bg-stone-100 border border-stone-200 mb-6 flex items-center justify-center p-8">
                      <User className="w-24 h-24 text-stone-300" />
                   </div>
                   <h3 className="text-2xl font-bold text-pine-900 mb-1">Akshar Sankaran Jaikumar</h3>
                   <p className="text-accent-600 font-bold mb-3">Co-founder & CEO</p>
                   <p className="text-stone-600 leading-relaxed">
                     Leads business and technology strategy. Akshar's background in tech strategy drives the product roadmap, ensuring FettleMed scales across India's complex healthcare ecosystem while remaining invisible to the user.
                   </p>
                </div>

                {/* Team Member 2 */}
                <div className="flex flex-col items-center md:items-start">
                   <div className="w-full aspect-[4/5] overflow-hidden rounded-[2rem] bg-stone-100 border border-stone-200 mb-6 flex items-center justify-center p-8">
                      <User className="w-24 h-24 text-stone-300" />
                   </div>
                   <h3 className="text-2xl font-bold text-pine-900 mb-1">Dr. Sriram Shankar</h3>
                   <p className="text-accent-600 font-bold mb-3">Co-founder & Chief Medical Officer</p>
                   <p className="text-stone-500 font-semibold text-sm mb-4">MBBS, FRCS (England), FAMS (Singapore)</p>
                   <p className="text-stone-600 leading-relaxed">
                     With a distinguished career spanning nearly four decades, Dr. Shankar is a Senior Consultant Cardio-thoracic surgeon who has been at the forefront of surgical innovation. His extensive experience, from developing less invasive procedures to helping establish the pediatric heart surgery program at KK Women's and Children's Hospital, is built on a deep understanding of one fundamental truth: a complete, continuous patient history is critical for delivering world-class care.
                   </p>
                </div>

                {/* Team Member 3 */}
                <div className="flex flex-col items-center md:items-start">
                   <div className="w-full aspect-[4/5] overflow-hidden rounded-[2rem] bg-stone-100 border border-stone-200 mb-6 flex items-center justify-center p-8">
                      <User className="w-24 h-24 text-stone-300" />
                   </div>
                   <h3 className="text-2xl font-bold text-pine-900 mb-1">Dr. Bhavani Sriram</h3>
                   <p className="text-accent-600 font-bold mb-3">Co-founder & Chief Clinical Officer</p>
                   <p className="text-stone-500 font-semibold text-sm mb-4">MBBS, MRCP (UK) (Paediatrics)</p>
                   <p className="text-stone-600 leading-relaxed">
                     Honoured as a 'Singapore Silent Hero' for her dedication to community health, Dr. Sriram is a fierce advocate for making healthcare accessible and understandable for all. She pioneers care for adults with intellectual disabilities, championing their integration into the community. Her work shapes FettleMed's core mission, ensuring our platform is built with deep empathy and designed to empower every patient, especially the most vulnerable, to manage their own health journey.
                   </p>
                </div>
             </div>
          </div>
        </FadeIn>
      </section>

      {/* Status */}
      <section className="py-24 bg-white border-b border-stone-100">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-bold text-pine-900 mb-8">Where we are today</h2>
            <p className="text-xl text-stone-600 font-medium leading-relaxed mb-10">
              Currently in early access — built with doctors, for doctors, and for every patient they see.
            </p>
            <button onClick={() => setModalOpen(true)} className="inline-flex items-center gap-2 bg-pine-900 text-white font-bold px-10 py-5 rounded-2xl hover:bg-pine-800 transition-colors">Join Waitlist <ArrowRight className="w-5 h-5"/></button>
          </FadeIn>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 bg-surface-50 text-center border-b border-stone-100">
         <FadeIn>
            <div className="container mx-auto px-4 md:px-8 max-w-[800px]">
               <div className="mb-12">
                 <h2 className="text-3xl md:text-5xl font-bold text-pine-900 mb-6 tracking-tight">Contact Us</h2>
                 <p className="text-lg text-stone-500 font-medium">For partnerships, collaborations, and inquiries.</p>
               </div>

               <div className="grid md:grid-cols-2 gap-8 text-left">
                  <div className="bg-white border border-stone-200 rounded-[2rem] p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col gap-6 h-full">
                     <div className="w-12 h-12 rounded-xl bg-pine-50 flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6 text-pine-600"/>
                     </div>
                     <div>
                        <p className="text-stone-500 font-semibold mb-2">Email</p>
                        <a href="mailto:partners@fettlemed.com" className="text-pine-900 hover:text-accent-600 font-bold text-lg md:text-xl transition-colors">partners@fettlemed.com</a>
                     </div>
                  </div>

                  <div className="bg-white border border-stone-200 rounded-[2rem] p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col gap-6 h-full">
                     <div className="w-12 h-12 rounded-xl bg-pine-50 flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-pine-600"/>
                     </div>
                     <div>
                        <p className="text-stone-500 font-semibold mb-2">Office Address</p>
                        <address className="text-pine-900 font-medium text-lg leading-relaxed not-italic">
                           NamNalam Health Tech Pvt Ltd<br/>
                           INNOV8 SKCL Tech Square, 2nd Floor<br/>
                           No 14 SP, SIDCO T.V.K Industrial Estate<br/>
                           Guindy, Chennai - 600032<br/>
                           Tamil Nadu, India
                        </address>
                     </div>
                  </div>
               </div>
            </div>
         </FadeIn>
      </section>
    </div>
    </>
  );
}
