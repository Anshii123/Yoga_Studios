import { Metadata } from "next";
import { PageHero } from "@/components/common/PageHero";
import { PricingPlanCard } from "@/components/pricing/PricingPlanCard";
import { PricingComparison } from "@/components/pricing/PricingComparison";
import { WhatToExpect } from "@/components/pricing/WhatToExpect";
import { PricingFAQ } from "@/components/pricing/PricingFAQ";
import { Button } from "@/components/common/Button";
import { BotanicalIcon, WhatsAppIcon } from "@/components/common/Icons";
import { PRICING_PLANS } from "@/data/pricing";
import { getGeneralWhatsAppUrl } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Membership & Transparent Pricing",
  description:
    "Explore transparent studio pricing in Indian Rupees. Drop-in classes, monthly flow, unlimited balance, and private 1-on-1 yoga instruction.",
};

export default function PricingPage() {
  const waUrl = getGeneralWhatsAppUrl();

  return (
    <>
      <PageHero
        breadcrumb="Membership"
        eyebrow="TRANSPARENT VALUE"
        title="Make space for"
        italicWord="yourself."
        description="Choose a rhythm that works for your life. Start small, stay curious, and build a practice that feels sustainable. Clear pricing in Indian Rupees with zero hidden enrollment fees."
        image="https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=1200&auto=format&fit=crop"
        theme="dark"
      />

      <section className="py-16 md:py-24 bg-[#F9FCFA]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          
          {/* Note on Illustrative Demonstration Rates */}
          <div className="mb-12 p-4 rounded-2xl bg-[#E7F5F0] border border-[#27C6A0]/25 flex items-center justify-between flex-wrap gap-3 text-xs text-[#103C3A] font-sans">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#27C6A0]" />
              <span>
                <strong>Demonstration Preview:</strong> All displayed membership rates are sample prices for design presentation purposes.
              </span>
            </div>
            <span className="font-display font-semibold text-[#103C3A]">
              Flexible pause & cancel policies
            </span>
          </div>

          {/* Pricing Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
            {PRICING_PLANS.map((plan) => (
              <PricingPlanCard key={plan.id} plan={plan} />
            ))}
          </div>

          {/* Plan Comparison Matrix */}
          <PricingComparison />

          {/* What to Expect 4 Steps */}
          <WhatToExpect />

          {/* Pricing FAQs */}
          <PricingFAQ />

        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-20 md:py-28 bg-[#103C3A] text-[#F9FCFA] text-center">
        <div className="max-w-3xl mx-auto px-5 sm:px-8">
          <div className="w-12 h-12 mx-auto rounded-2xl bg-[#092B2C] border border-[#27C6A0]/30 text-[#27C6A0] flex items-center justify-center mb-6">
            <BotanicalIcon size={24} />
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
            Ready to make room for a little more{" "}
            <span className="font-editorial italic font-normal text-[#27C6A0]">
              balance?
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#B9F2DF]/90 font-sans leading-relaxed max-w-xl mx-auto">
            Our team is here to answer your questions about class levels, schedules, or tailoring a membership to your lifestyle.
          </p>
          <div className="mt-8 flex justify-center">
            <Button
              href={waUrl}
              isExternal
              variant="primary"
              size="lg"
              className="inline-flex items-center gap-2 shadow-xl shadow-[#27C6A0]/20"
            >
              <WhatsAppIcon size={18} />
              <span>Talk to Our Team</span>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
