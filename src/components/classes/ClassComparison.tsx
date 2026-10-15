import React from "react";
import { SectionHeading } from "@/components/common/SectionHeading";

export const ClassComparison: React.FC = () => {
  const comparisonData = [
    {
      style: "Hatha Yoga",
      tempo: "Steady & Measured",
      intensity: "Moderate",
      focus: "Alignment & Foundation",
      idealFor: "Beginners & mindful yogis",
    },
    {
      style: "Vinyasa Flow",
      tempo: "Fluid & Continuous",
      intensity: "Dynamic",
      focus: "Breath-sync movement",
      idealFor: "Vitality & active movement",
    },
    {
      style: "Yin & Restorative",
      tempo: "Slow & Still",
      intensity: "Gentle",
      focus: "Fascia & deep relaxation",
      idealFor: "Stress relief & desk stiffness",
    },
    {
      style: "Guided Meditation",
      tempo: "Seated Quietude",
      intensity: "Gentle",
      focus: "Pranayama & awareness",
      idealFor: "Mental clarity & calm",
    },
    {
      style: "Yoga for Beginners",
      tempo: "Patient & Educational",
      intensity: "Gentle",
      focus: "Basics, props, & safety",
      idealFor: "First-timers & restarts",
    },
    {
      style: "Private Yoga Sessions",
      tempo: "Customized to you",
      intensity: "Custom",
      focus: "Individual biomechanics",
      idealFor: "1-on-1 personalized goals",
    },
  ];

  return (
    <div className="mt-20 py-16 px-6 sm:px-10 rounded-[2rem] bg-[#E7F5F0] border border-[#27C6A0]/25">
      <SectionHeading
        eyebrow="COMPARISON GUIDE"
        title="How to choose your class."
        subtitle="Every discipline offers a distinct energetic rhythm. Review the quick guide below to match your intention for today."
        theme="mist"
      />

      {/* Desktop / Tablet Matrix Table */}
      <div className="mt-12 overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b-2 border-[#103C3A]/15 text-xs font-display font-bold uppercase tracking-wider text-[#103C3A]">
              <th className="py-4 px-4">Class Style</th>
              <th className="py-4 px-4">Pace & Tempo</th>
              <th className="py-4 px-4">Physical Intensity</th>
              <th className="py-4 px-4">Core Focus</th>
              <th className="py-4 px-4">Best Suited For</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#103C3A]/10 text-sm font-sans">
            {comparisonData.map((row) => (
              <tr key={row.style} className="hover:bg-[#F9FCFA]/80 transition-colors">
                <td className="py-4 px-4 font-display text-lg font-bold text-[#103C3A]">
                  {row.style}
                </td>
                <td className="py-4 px-4 text-[#243431]/80">{row.tempo}</td>
                <td className="py-4 px-4">
                  <span className="inline-block px-3 py-0.5 rounded-full text-xs font-display font-semibold bg-[#27C6A0]/15 text-[#103C3A] border border-[#27C6A0]/30">
                    {row.intensity}
                  </span>
                </td>
                <td className="py-4 px-4 text-[#243431]/80">{row.focus}</td>
                <td className="py-4 px-4 text-[#103C3A] font-semibold">{row.idealFor}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
