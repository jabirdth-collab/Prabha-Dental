import React, { useState } from "react";
import { FAQS } from "../data";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-white">
      <div className="max-w-4xl mx-auto px-4 md:px-8">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold text-brand-blue uppercase tracking-widest font-mono px-3.5 py-1 bg-brand-light rounded-full inline-block">
            Frequently Asked Questions
          </span>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl lg:text-5xl text-slate-900 tracking-tight leading-tight">
            Patient Resources & Info
          </h2>
          <div className="w-16 h-1 bg-brand-blue mx-auto rounded-full" />
          <p className="text-slate-500 text-sm md:text-base leading-relaxed">
            Get professional, medically accurate answers about pain management, implant durations, surgical extraction safety, and treatment pricing.
          </p>
        </div>

        {/* FAQs Accordion */}
        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-slate-50 border border-slate-100/80 rounded-2xl overflow-hidden transition-all duration-300"
              >
                {/* Trigger Button */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left px-5 md:px-6 py-4.5 flex justify-between items-center gap-4 cursor-pointer hover:bg-slate-100/50 transition-colors"
                >
                  <div className="flex items-start space-x-3.5">
                    <HelpCircle className="w-5 h-5 text-brand-blue shrink-0 mt-0.5" />
                    <span className="font-display font-bold text-slate-900 text-sm md:text-base leading-tight">
                      {faq.question}
                    </span>
                  </div>
                  <div className="shrink-0 p-1 bg-white border border-slate-100 rounded-lg text-slate-500 shadow-sm">
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {/* Collapsible Content */}
                <div
                  className={`transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-[300px] border-t border-slate-200/50" : "max-h-0 overflow-hidden"
                  }`}
                >
                  <p className="px-5 md:px-6 py-5 text-xs md:text-sm text-slate-600 leading-relaxed bg-white">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
