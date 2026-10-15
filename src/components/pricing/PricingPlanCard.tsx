import React from "react";
import { PricingPlan } from "@/data/pricing";
import { Button } from "@/components/common/Button";
import { CheckIcon, ArrowUpRightIcon } from "@/components/common/Icons";
import { getPricingWhatsAppUrl } from "@/lib/whatsapp";

interface PricingPlanCardProps {
  plan: PricingPlan;
}

export const PricingPlanCard: React.FC<PricingPlanCardProps> = ({ plan }) => {
  const isPopular = plan.popular;
  const waUrl = getPricingWhatsAppUrl(plan.name, plan.price);

  return (
    <div
      className={`relative rounded-[2rem] p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-2xl ${
        isPopular
          ? "bg-[#092B2C] text-[#F9FCFA] shadow-xl shadow-[#092B2C]/40 border-2 border-[#27C6A0] scale-[1.02] z-10"
          : "bg-[#F9FCFA] text-[#103C3A] border border-[#27C6A0]/25 shadow-sm"
      }`}
    >
      {/* Popular / Tier Badge */}
      {plan.badge && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
          <span className="px-4 py-1 rounded-full text-xs font-display font-bold uppercase tracking-wider bg-[#27C6A0] text-[#092B2C] shadow-md">
            {plan.badge}
          </span>
        </div>
      )}

      <div>
        <div className="mb-4">
          <span
            className={`text-xs uppercase tracking-wider font-display font-bold ${
              isPopular ? "text-[#27C6A0]" : "text-[#103C3A]/70"
            }`}
          >
            {plan.bestFor}
          </span>
          <h3
            className={`font-display text-2xl sm:text-3xl font-bold mt-1 ${
              isPopular ? "text-[#F9FCFA]" : "text-[#103C3A]"
            }`}
          >
            {plan.name}
          </h3>
        </div>

        {/* Price Tag */}
        <div className="my-6 pb-6 border-b border-current/15 flex items-baseline gap-2">
          <span className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight">
            {plan.price}
          </span>
          <span className={`text-xs font-sans ${isPopular ? "text-[#B9F2DF]/70" : "text-[#243431]/60"}`}>
            {plan.period}
          </span>
        </div>

        <p className={`text-sm font-sans mb-6 ${isPopular ? "text-[#B9F2DF]/85" : "text-[#243431]/80"}`}>
          {plan.description}
        </p>

        {/* Feature List */}
        <ul className="space-y-3 text-xs sm:text-sm font-sans mb-8">
          {plan.features.map((feature, i) => (
            <li key={i} className="flex items-start gap-2.5">
              <span
                className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                  isPopular ? "bg-[#27C6A0]/20 text-[#27C6A0]" : "bg-[#103C3A]/10 text-[#103C3A]"
                }`}
              >
                <CheckIcon size={12} />
              </span>
              <span className={isPopular ? "text-[#F9FCFA]/90" : "text-[#243431]/85"}>
                {feature}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <Button
          href={waUrl}
          isExternal
          variant={isPopular ? "primary" : "teal"}
          size="lg"
          className="w-full shadow-md"
        >
          <span>{plan.ctaText}</span>
          <ArrowUpRightIcon size={15} />
        </Button>
        <span
          className={`block text-center text-[11px] mt-3 font-sans ${
            isPopular ? "text-[#B9F2DF]/70" : "text-[#243431]/60"
          }`}
        >
          Illustrative rate • Instant enquiry via WhatsApp
        </span>
      </div>
    </div>
  );
};
