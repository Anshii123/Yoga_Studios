import React from "react";
import { PLAN_COMPARISON } from "@/data/pricing";
import { SectionHeading } from "@/components/common/SectionHeading";

export const PricingComparison: React.FC = () => {
  return (
    <div className="mt-24 py-16 px-6 sm:px-10 rounded-[2rem] bg-[#E7F5F0] border border-[#27C6A0]/25 shadow-sm">
      <SectionHeading
        eyebrow="TRANSPARENT VALUE"
        title="Compare all membership benefits."
        subtitle="A side-by-side overview of class allotments, flexibility, and booking perks for every tier."
        theme="mist"
      />

      {/* Desktop / Tablet Table */}
      <div className="mt-12 hidden md:block overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b-2 border-[#103C3A]/15 text-xs font-display font-bold uppercase tracking-wider text-[#103C3A]">
              <th className="py-4 px-4 w-1/4">Membership Feature</th>
              <th className="py-4 px-4 text-center">Drop-In (₹499)</th>
              <th className="py-4 px-4 text-center bg-[#27C6A0]/15 rounded-t-2xl font-extrabold text-[#103C3A]">Monthly Flow (₹2,999)</th>
              <th className="py-4 px-4 text-center">Unlimited (₹4,499)</th>
              <th className="py-4 px-4 text-center">Private (From ₹1,499)</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#103C3A]/10 text-sm font-sans">
            {PLAN_COMPARISON.map((row) => (
              <tr key={row.feature} className="hover:bg-[#F9FCFA]/80 transition-colors">
                <td className="py-4 px-4 font-display font-semibold text-[#103C3A]">
                  {row.feature}
                </td>
                <td className="py-4 px-4 text-center text-[#243431]/80">{row.dropIn}</td>
                <td className="py-4 px-4 text-center font-bold text-[#103C3A] bg-[#27C6A0]/15">
                  {row.monthlyFlow}
                </td>
                <td className="py-4 px-4 text-center text-[#243431]/80">{row.unlimitedBalance}</td>
                <td className="py-4 px-4 text-center text-[#243431]/80">{row.privatePractice}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile-Friendly Stacked Comparison Cards */}
      <div className="mt-10 md:hidden space-y-5 font-sans">
        {PLAN_COMPARISON.map((row) => (
          <div key={row.feature} className="p-4 rounded-2xl bg-[#F9FCFA] border border-[#27C6A0]/20 shadow-sm">
            <span className="font-display font-bold text-xs uppercase tracking-wider text-[#103C3A] block mb-3">
              {row.feature}
            </span>
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="p-2.5 rounded-xl bg-[#E7F5F0]">
                <span className="text-[10px] text-[#243431]/60 block font-display">Drop-In</span>
                <span className="font-medium text-[#103C3A]">{row.dropIn}</span>
              </div>
              <div className="p-2.5 rounded-xl bg-[#27C6A0]/15 border border-[#27C6A0]/30">
                <span className="text-[10px] text-[#103C3A] font-bold block font-display">Monthly Flow</span>
                <span className="font-bold text-[#103C3A]">{row.monthlyFlow}</span>
              </div>
              <div className="p-2.5 rounded-xl bg-[#E7F5F0]">
                <span className="text-[10px] text-[#243431]/60 block font-display">Unlimited</span>
                <span className="font-medium text-[#103C3A]">{row.unlimitedBalance}</span>
              </div>
              <div className="p-2.5 rounded-xl bg-[#E7F5F0]">
                <span className="text-[10px] text-[#243431]/60 block font-display">Private 1-on-1</span>
                <span className="font-medium text-[#103C3A]">{row.privatePractice}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
