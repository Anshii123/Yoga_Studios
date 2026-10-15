"use client";

import React, { useState } from "react";
import { PRICING_FAQS } from "@/data/pricing";
import { SectionHeading } from "@/components/common/SectionHeading";
import { ChevronDownIcon } from "@/components/common/Icons";

export const PricingFAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="mt-24 max-w-4xl mx-auto">
      <SectionHeading
        eyebrow="MEMBERSHIP FAQS"
        title="Frequently asked pricing questions."
        subtitle="Transparent policies on attendance, class reservations, and trial visits."
      />

      <div className="mt-12 space-y-4">
        {PRICING_FAQS.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className="bg-[#F9FCFA] border border-[#27C6A0]/25 rounded-2xl overflow-hidden transition-all duration-200 shadow-sm"
            >
              <button
                onClick={() => toggle(index)}
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
