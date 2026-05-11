import React from 'react';
import { User, Users } from "lucide-react";
import { FadeIn } from "@/components/common/FadeIn";

export function PatientForWho() {
  return (
    <section className="py-24 bg-pine-900 text-white relative overflow-hidden">
       <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-pine-800/40 rounded-full blur-[120px] pointer-events-none opacity-50 transform translate-x-1/3 -translate-y-1/3"></div>
       <div className="container mx-auto px-4 md:px-8 max-w-6xl relative z-10">
          <FadeIn className="mb-16">
             <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight text-balance">Who this is for</h2>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8">
             <FadeIn delay={0.1} className="flex flex-col gap-6 p-8 rounded-3xl bg-pine-800/50 border border-pine-700 backdrop-blur-sm">
                <div className="w-12 h-12 bg-pine-700/80 rounded-full flex items-center justify-center">
                   <User className="w-5 h-5 text-pine-200" />
                </div>
                <div>
                   <h3 className="text-xl font-bold text-white mb-3 tracking-tight">For you</h3>
                   <p className="text-pine-200 leading-relaxed font-medium">You manage your own health and want to stop depending on your memory and a bag of paper every time you see a doctor.</p>
                </div>
             </FadeIn>

             <FadeIn delay={0.2} className="flex flex-col gap-6 p-8 rounded-3xl bg-pine-800/50 border border-pine-700 backdrop-blur-sm">
                <div className="w-12 h-12 bg-pine-700/80 rounded-full flex items-center justify-center">
                   <Users className="w-5 h-5 text-pine-200" />
                </div>
                <div>
                   <h3 className="text-xl font-bold text-white mb-3 tracking-tight">For your family</h3>
                   <p className="text-pine-200 leading-relaxed font-medium">You are the one who remembers your mother's last blood pressure reading, your father's medication list, your child's vaccination schedule. FettleMed lets you manage all of it in one place, separately and securely.</p>
                </div>
             </FadeIn>
          </div>
       </div>
    </section>
  );
}
