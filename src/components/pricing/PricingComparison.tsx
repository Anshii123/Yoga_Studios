import React from "react";
import { PLAN_COMPARISON } from "@/data/pricing";
import { SectionHeading } from "@/components/common/SectionHeading";

export const PricingComparison: React.FC = () => {
  return (
    <div className="mt-24 py-12 sm:py-16 px-5 sm:px-10 rounded-[2rem] bg-[#EAF6EF]/70 border border-[#087F5B]/20 shadow-sm">
      <SectionHeading
        eyebrow="TRANSPARENT VALUE"
        title="Compare all membership benefits."
        subtitle="A side-by-side overview of class allotments, flexibility, and booking perks for every tier."
        theme="mist"
      />

      {/* Desktop / Tablet Table */}
      <div className="mt-12 hidden md:block overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[650px]">
          <thead>
            <tr className="border-b-2 border-[#174A3A]/15 text-xs font-display font-bold uppercase tracking-wider text-[#174A3A]">
              <th className="py-4 px-4 w-1/4">Membership Feature</th>
              <th className="py-4 px-4 text-center">Drop-In (₹499)</th>
              <th className="py-4 px-4 text-center bg-[#087F5B]/15 rounded-t-2xl font-extrabold text-[#174A3A]">Monthly Flow (₹2,999)</th>
              <th className="py-4 px-4 text-center">Unlimited (₹4,499)</th>
              <th className="py-4 px-4 text-center">Private (From ₹1,499)</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#174A3A]/10 text-sm font-sans">
            {PLAN_COMPARISON.map((row) => (
              <tr key={row.feature} className="hover:bg-[#FFFFFF]/90 transition-colors">
                <td className="py-4 px-4 font-display font-semibold text-[#174A3A]">
                  {row.feature}
                </td>
                <td className="py-4 px-4 text-center text-[#64716A]">{row.dropIn}</td>
                <td className="py-4 px-4 text-center font-bold text-[#174A3A] bg-[#087F5B]/10">
                  {row.monthlyFlow}
                </td>
                <td className="py-4 px-4 text-center text-[#64716A]">{row.unlimitedBalance}</td>
                <td className="py-4 px-4 text-center text-[#64716A]">{row.privatePractice}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile-Friendly Stacked Comparison Cards */}
      <div className="mt-8 md:hidden space-y-4 font-sans">
        {PLAN_COMPARISON.map((row) => (
          <div key={row.feature} className="p-4 rounded-2xl bg-[#FFFFFF] border border-[#087F5B]/20 shadow-2xs">
            <span className="font-display font-bold text-xs uppercase tracking-wider text-[#174A3A] block mb-3">
              {row.feature}
            </span>
            <div className="grid grid-cols-2 gap-2.5 text-xs">
              <div className="p-2.5 rounded-xl bg-[#F7FAF8] border border-[#174A3A]/10">
                <span className="text-[10px] text-[#64716A] block font-display">Drop-In</span>
                <span className="font-medium text-[#174A3A]">{row.dropIn}</span>
              </div>
              <div className="p-2.5 rounded-xl bg-[#EAF6EF] border border-[#087F5B]/30">
                <span className="text-[10px] text-[#087F5B] font-bold block font-display">Monthly Flow</span>
                <span className="font-bold text-[#174A3A]">{row.monthlyFlow}</span>
              </div>
              <div className="p-2.5 rounded-xl bg-[#F7FAF8] border border-[#174A3A]/10">
                <span className="text-[10px] text-[#64716A] block font-display">Unlimited</span>
                <span className="font-medium text-[#174A3A]">{row.unlimitedBalance}</span>
              </div>
              <div className="p-2.5 rounded-xl bg-[#F7FAF8] border border-[#174A3A]/10">
                <span className="text-[10px] text-[#64716A] block font-display">Private 1-on-1</span>
                <span className="font-medium text-[#174A3A]">{row.privatePractice}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
