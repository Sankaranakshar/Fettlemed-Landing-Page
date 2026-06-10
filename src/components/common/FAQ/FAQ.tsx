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
  const [activeSection, setActiveSection] = useState<number | null>(null);

  const toggleOpen = (sectionIndex: number, itemIndex: number) => {
    const id = `${sectionIndex}-${itemIndex}`;
    setOpenIds(openIds === id ? null : id);
  };

  const handleChip = (index: number | null) => {
    setActiveSection(index);
    setOpenIds(null); // close any open accordion when switching category
  };

  const visibleSections = activeSection !== null ? [{ ...sections[activeSection], _origIndex: activeSection }] : sections.map((s, i) => ({ ...s, _origIndex: i }));

  // FAQPage structured data - always in the document, regardless of UI state
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": sections.flatMap((s) =>
      s.items.map(({ question, answer }) => ({
        "@type": "Question",
        "name": question,
        "acceptedAnswer": { "@type": "Answer", "text": answer },
      }))
    ),
  };

  return (
    <div className="w-full max-w-4xl mx-auto mt-8 mb-10">
       <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
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
                  <p className="text-dim font-medium text-lg">Everything you need to know before you decide.</p>
                </div>
                <div className="flex items-center gap-2 text-pine-600 font-medium uppercase tracking-widest text-sm bg-pine-50 px-6 py-2 rounded-full group-hover:bg-pine-100 transition-colors">
                  View FAQs <ChevronDown className="w-4 h-4" />
                </div>
              </button>
            </div>
          ) : (
            <>
              <div className="flex items-center justify-between mb-8 pb-8 border-b border-stone-200">
                <h2 className="text-3xl md:text-5xl font-medium text-pine-900 tracking-tight">Frequently Asked Questions</h2>
                <button
                  onClick={() => setIsExpanded(false)}
                  className="text-dim hover:text-ink font-medium flex items-center gap-2 transition-colors"
                >
                  Close <ChevronDown className="w-4 h-4 rotate-180" />
                </button>
              </div>

              {/* Category filter chips */}
              <div className="flex flex-wrap gap-2 mb-10">
                <button
                  onClick={() => handleChip(null)}
                  className={`px-4 py-2.5 rounded-full text-sm font-medium transition-colors ${activeSection === null ? 'bg-pine-900 text-white' : 'bg-pine-50 text-dim hover:bg-pine-100'}`}
                >
                  All
                </button>
                {sections.map((section, i) => (
                  <button
                    key={i}
                    onClick={() => handleChip(i)}
                    className={`px-4 py-2.5 rounded-full text-sm font-medium transition-colors ${activeSection === i ? 'bg-pine-900 text-white' : 'bg-pine-50 text-dim hover:bg-pine-100'}`}
                  >
                    {section.title}
                  </button>
                ))}
              </div>

              <div className="space-y-16">
                {visibleSections.map((section) => {
                  const sIndex = section._origIndex;
                  return (
                  <div key={sIndex} className="space-y-6">
                    {section.title && (
                      <h3 className="text-xl font-medium text-pine-700/60 uppercase tracking-widest pl-2 border-l-4 border-pine-600/30">{section.title}</h3>
                    )}

                    <div className="space-y-4">
                       {section.items.map((item, iIndex) => {
                          const id = `${sIndex}-${iIndex}`;
                          const isOpen = openIds === id;
                          return (
                             <div key={iIndex} className={`border border-stone-200 rounded-2xl transition-[background-color,border-color,box-shadow] duration-200 ${isOpen ? "bg-white shadow-xl shadow-stone-200/40 border-stone-300" : "bg-stone-50/50 hover:bg-stone-50"}`}>
                                <button
                                   onClick={() => toggleOpen(sIndex, iIndex)}
                                   aria-expanded={isOpen}
                                   className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                                >
                                   <span className={`font-medium text-lg transition-colors ${isOpen ? "text-pine-900" : "text-dim-2"}`}>{item.question}</span>
                                   <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-[transform,background-color,color] duration-200 ease-out shrink-0 ml-4 ${isOpen ? "bg-pine-900 text-white rotate-180" : "bg-pine-100 text-dim"}`}>
                                     <ChevronDown className="w-4 h-4" />
                                   </div>
                                </button>

                                {/* Grid-rows trick animates to natural height - no clipped answers */}
                                <div
                                   className={`grid px-6 transition-[grid-template-rows,opacity] duration-300 ease-out ${
                                      isOpen ? "grid-rows-[1fr] pb-6 opacity-100" : "grid-rows-[0fr] opacity-0"
                                   }`}
                                >
                                   <div className="overflow-hidden">
                                      <p className="text-dim leading-relaxed text-lg border-t border-pine-50 pt-5">{item.answer}</p>
                                   </div>
                                </div>
                             </div>
                          );
                       })}
                    </div>
                  </div>
                  );
                })}
              </div>
            </>
          )}
       </FadeIn>
    </div>
  );
}
