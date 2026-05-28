import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { FadeIn } from "@/components/common/FadeIn";

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQSection {
  title: string;
  items: FAQItem[];
}

interface FAQProps {
  sections: FAQSection[];
}

export function FAQ({ sections }: FAQProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [openIds, setOpenIds] = useState<string | null>(null);

  const toggleOpen = (sectionIndex: number, itemIndex: number) => {
    const id = `${sectionIndex}-${itemIndex}`;
    setOpenIds(openIds === id ? null : id);
  };

  return (
    <div className="w-full max-w-4xl mx-auto mt-20 mb-32">
       <FadeIn>
          {!isExpanded ? (
            <div className="flex flex-col items-center">
              <button 
                onClick={() => setIsExpanded(true)}
                className="group flex flex-col items-center gap-6 p-12 w-full rounded-3xl bg-surface-50 border-2 border-dashed border-pine-100 hover:border-pine-400 hover:bg-pine-50/50 transition-[border-color,background-color] duration-200 cursor-pointer"
              >
                <div className="w-16 h-16 rounded-2xl bg-white shadow-xl shadow-stone-200/50 flex items-center justify-center text-pine-600 group-hover:scale-110 transition-transform duration-200 ease-out">
                  <HelpCircle className="w-8 h-8" />
                </div>
                <div className="text-center">
                  <h2 className="text-3xl md:text-4xl font-medium text-pine-900 mb-2 tracking-tight">Have questions?</h2>
                  <p className="text-stone-500 font-medium text-lg">Click to view our detailed frequently asked questions</p>
                </div>
                <div className="flex items-center gap-2 text-pine-600 font-medium uppercase tracking-widest text-sm bg-pine-50 px-6 py-2 rounded-full group-hover:bg-pine-100 transition-colors">
                  View FAQs <ChevronDown className="w-4 h-4" />
                </div>
              </button>
            </div>
          ) : (
            <>
              <div className="flex items-center justify-between mb-16 pb-8 border-b border-stone-200">
                <h2 className="text-3xl md:text-5xl font-medium text-pine-900 tracking-tight">Frequently Asked Questions</h2>
                <button 
                  onClick={() => setIsExpanded(false)}
                  className="text-stone-400 hover:text-stone-600 font-medium flex items-center gap-2 transition-colors"
                >
                  Close <ChevronDown className="w-4 h-4 rotate-180" />
                </button>
              </div>
              
              <div className="space-y-16">
                {sections.map((section, sIndex) => (
                  <div key={sIndex} className="space-y-6">
                    <h3 className="text-xl font-medium text-pine-700/60 uppercase tracking-widest pl-2 border-l-4 border-pine-600/30">{section.title}</h3>
                    
                    <div className="space-y-4">
                       {section.items.map((item, iIndex) => {
                          const id = `${sIndex}-${iIndex}`;
                          const isOpen = openIds === id;
                          return (
                             <div key={iIndex} className={`border border-stone-200 rounded-2xl transition-[background-color,border-color,box-shadow] duration-200 ${isOpen ? "bg-white shadow-xl shadow-stone-200/40 border-stone-300" : "bg-stone-50/50 hover:bg-stone-50"}`}>
                                <button 
                                   onClick={() => toggleOpen(sIndex, iIndex)} 
                                   className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                                >
                                   <span className={`font-medium text-lg transition-colors ${isOpen ? "text-pine-900" : "text-stone-700"}`}>{item.question}</span>
                                   <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-[transform,background-color,color] duration-200 ease-out ${isOpen ? "bg-pine-900 text-white rotate-180" : "bg-stone-200 text-stone-500"}`}>
                                     <ChevronDown className="w-4 h-4" />
                                   </div>
                                </button>
                                
                                <div 
                                   className={`px-6 overflow-hidden transition-[max-height,opacity,padding] duration-300 ease-out ${
                                      isOpen ? "max-h-[500px] pb-6 opacity-100" : "max-h-0 pb-0 opacity-0"
                                   }`}
                                >
                                   <p className="text-stone-600 leading-relaxed font-medium text-lg border-t border-stone-100 pt-5">{item.answer}</p>
                                </div>
                             </div>
                          );
                       })}
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
       </FadeIn>
    </div>
  );
}
