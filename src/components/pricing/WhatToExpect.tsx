import React from "react";
import { SectionHeading } from "@/components/common/SectionHeading";

export const WhatToExpect: React.FC = () => {
  const steps = [
    {
      num: "01",
      title: "Tell Us Your Goals",
      desc: "Reach out via WhatsApp or our contact page. Share a little about your prior movement history, schedule preferences, or physical considerations.",
    },
    {
      num: "02",
      title: "Choose Your Discipline",
      desc: "We will guide you toward the right style—whether grounding Hatha, energising Vinyasa flow, or restorative Yin stillness.",
    },
    {
      num: "03",
      title: "Confirm Your Schedule",
      desc: "Select a morning or evening batch that fits effortlessly into your weekly routine. Your dedicated mat spot is reserved exclusively.",
    },
    {
      num: "04",
      title: "Arrive & Unwind",
      desc: "Come 10-15 minutes early. We provide sanitized cork mats, props, and warm herbal tea so you can settle in with ease.",
    },
  ];

  return (
    <div className="mt-24">
      <SectionHeading
        eyebrow="YOUR FIRST VISIT"
        title="What to expect when joining."
        subtitle="A simple, welcoming, and pressure-free process designed to make starting yoga effortless."
      />

      <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((step) => (
          <div
            key={step.num}
            className="p-8 rounded-[2rem] bg-[#F9FCFA] border border-[#27C6A0]/25 relative group hover:border-[#27C6A0] transition-all duration-300 hover:shadow-xl hover:shadow-[#27C6A0]/10"
          >
            <span className="font-display text-4xl font-extrabold text-[#27C6A0] block mb-4">
              {step.num}
            </span>
            <h3 className="font-display text-xl font-bold text-[#103C3A] group-hover:text-[#27C6A0] transition-colors">
              {step.title}
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-[#243431]/80 font-sans leading-relaxed">
              {step.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
