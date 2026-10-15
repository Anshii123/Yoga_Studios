"use client";

import React, { useState } from "react";
import { CLASS_FAQS } from "@/data/faqs";
import { SectionHeading } from "@/components/common/SectionHeading";
import { ChevronDownIcon } from "@/components/common/Icons";

export const ClassFAQ: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(CLASS_FAQS[0].id);

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="mt-24 max-w-4xl mx-auto">
      <SectionHeading
        eyebrow="COMMON QUESTIONS"
        title="Frequently asked questions."
        subtitle="Practical, reassuring answers to prepare you for your first time on the mat."
      />

      <div className="mt-12 space-y-4">
        {CLASS_FAQS.map((faq) => {
          const isOpen = openId === faq.id;
          return (
            <div
              key={faq.id}
              className="bg-[#F9FCFA] border border-[#27C6A0]/25 rounded-2xl overflow-hidden transition-all duration-200 shadow-sm"
            >
              <button
                onClick={() => toggleItem(faq.id)}
                className="w-full py-5 px-6 sm:px-7 text-left flex items-center justify-between gap-4 font-display text-lg sm:text-xl font-bold text-[#103C3A] hover:text-[#27C6A0] transition-colors focus:outline-none focus:ring-2 focus:ring-[#27C6A0]"
                aria-expanded={isOpen}
              >
                <span>{faq.question}</span>
                <span
                  className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                    isOpen ? "rotate-180 bg-[#27C6A0] text-[#092B2C]" : "bg-[#E7F5F0] text-[#103C3A]"
                  }`}
                >
                  <ChevronDownIcon size={16} />
                </span>
              </button>

              {isOpen && (
                <div className="px-6 sm:px-7 pb-6 pt-1 text-sm sm:text-base text-[#243431]/80 font-sans leading-relaxed border-t border-[#103C3A]/5">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
