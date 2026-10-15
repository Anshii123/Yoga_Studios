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
    <div className="mt-20 py-12 sm:py-16 px-5 sm:px-10 rounded-[2rem] bg-[#EAF6EF]/70 border border-[#087F5B]/20">
      <SectionHeading
        eyebrow="COMPARISON GUIDE"
        title="How to choose your class."
        subtitle="Every discipline offers a distinct energetic rhythm. Review the quick guide below to match your intention for today."
        theme="mist"
      />

      {/* Desktop / Tablet Matrix Table */}
      <div className="mt-12 hidden md:block overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[620px]">
          <thead>
            <tr className="border-b-2 border-[#174A3A]/15 text-xs font-display font-bold uppercase tracking-wider text-[#174A3A]">
              <th className="py-4 px-4">Class Style</th>
              <th className="py-4 px-4">Pace & Tempo</th>
              <th className="py-4 px-4">Physical Intensity</th>
              <th className="py-4 px-4">Core Focus</th>
              <th className="py-4 px-4">Best Suited For</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#174A3A]/10 text-sm font-sans">
            {comparisonData.map((row) => (
              <tr key={row.style} className="hover:bg-[#FFFFFF]/90 transition-colors">
                <td className="py-4 px-4 font-display text-base font-bold text-[#174A3A]">
                  {row.style}
                </td>
                <td className="py-4 px-4 text-[#64716A]">{row.tempo}</td>
                <td className="py-4 px-4">
                  <span className="inline-block px-3 py-0.5 rounded-full text-xs font-display font-semibold bg-[#087F5B]/15 text-[#174A3A] border border-[#087F5B]/30">
                    {row.intensity}
                  </span>
                </td>
                <td className="py-4 px-4 text-[#64716A]">{row.focus}</td>
                <td className="py-4 px-4 text-[#174A3A] font-semibold">{row.idealFor}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile-Friendly Stacked Comparison Cards */}
      <div className="mt-8 md:hidden space-y-4 font-sans">
        {comparisonData.map((row) => (
          <div key={row.style} className="p-4 rounded-2xl bg-[#FFFFFF] border border-[#087F5B]/20 shadow-2xs">
            <div className="flex items-center justify-between gap-2 mb-3">
              <span className="font-display font-bold text-base text-[#174A3A]">
                {row.style}
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-display font-semibold bg-[#087F5B]/15 text-[#087F5B] border border-[#087F5B]/30">
                {row.intensity}
              </span>
            </div>
            
            <div className="space-y-2 text-xs">
              <div className="flex justify-between py-1 border-b border-[#174A3A]/5">
                <span className="text-[#64716A] font-medium">Pace:</span>
                <span className="font-semibold text-[#174A3A] text-right">{row.tempo}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-[#174A3A]/5">
                <span className="text-[#64716A] font-medium">Focus:</span>
                <span className="font-semibold text-[#174A3A] text-right">{row.focus}</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-[#64716A] font-medium">Best For:</span>
                <span className="font-semibold text-[#087F5B] text-right">{row.idealFor}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
