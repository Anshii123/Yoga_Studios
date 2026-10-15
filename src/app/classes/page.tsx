import { Metadata } from "next";
import { PageHero } from "@/components/common/PageHero";
import { ClassCard } from "@/components/classes/ClassSection";
import { ClassComparison } from "@/components/classes/ClassComparison";
import { ClassFAQ } from "@/components/classes/ClassFAQ";
import { Button } from "@/components/common/Button";
import { BotanicalIcon, WhatsAppIcon } from "@/components/common/Icons";
import { CLASSES_DATA } from "@/data/classes";
import { getGeneralWhatsAppUrl } from "@/lib/whatsapp";

import { SITE_CONFIG } from "@/lib/site-config";
import { CLASS_FAQS } from "@/data/faqs";

export const metadata: Metadata = {
  title: "Yoga Classes & Disciplines | Hatha, Vinyasa, Yin & Meditation",
  description:
    "Explore our complete yoga offerings in Bengaluru: classical Hatha, invigorating Vinyasa Flow, deep Yin & Restorative, Guided Meditation, and Beginners series.",
  alternates: {
    canonical: "/classes",
  },
  openGraph: {
    title: "Yoga Classes & Disciplines | AAROH YOGA Bengaluru",
    description:
      "Find your daily movement flow. Explore our six core disciplines taught with anatomical precision and personalized variations.",
    url: `${SITE_CONFIG.url}/classes`,
  },
};

export default function ClassesPage() {
  const waUrl = getGeneralWhatsAppUrl();

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: CLASS_FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <PageHero
        breadcrumb="Classes"
        eyebrow="OUR CLASS OFFERINGS"
        title="Find your"
        italicWord="daily flow."
        description="From energising breath-linked movement to deep restorative stillness, discover a practice that fits your pace and your schedule. Each session is guided with anatomical precision and personalized variations."
        image="https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1200&auto=format&fit=crop"
        theme="dark"
      />

      <section className="py-16 md:py-24 bg-[#FFFFFF]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          
          {/* Detailed Class Cards */}
          <div className="divide-y divide-[#174A3A]/10">
            {CLASSES_DATA.map((c, index) => (
              <ClassCard key={c.id} yogaClass={c} index={index} />
            ))}
          </div>

          {/* Comparison Matrix Guide */}
          <ClassComparison />

          {/* Interactive FAQs */}
          <ClassFAQ />

        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-20 md:py-28 bg-[#174A3A] text-[#FFFFFF] text-center relative overflow-hidden">
        <div className="max-w-3xl mx-auto px-5 sm:px-8 relative z-10">
          <div className="w-12 h-12 mx-auto rounded-2xl bg-[#087F5B] border border-[#C8F169]/30 text-[#C8F169] flex items-center justify-center mb-6 shadow-md">
            <BotanicalIcon size={24} />
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
            Not sure where to start? Let&apos;s find your{" "}
            <span className="font-editorial italic font-normal text-[#C8F169]">
              first class together.
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#EAF6EF]/85 font-sans max-w-xl mx-auto">
            Tell us about your movement background, goals, and preferred schedule. We&apos;ll happily suggest the most nourishing session for you.
          </p>
          <div className="mt-8 flex justify-center">
            <Button
              href={waUrl}
              isExternal
              variant="primary"
              size="lg"
              className="inline-flex items-center gap-2 shadow-xl shadow-[#087F5B]/25"
            >
              <WhatsAppIcon size={18} />
              <span>Ask Us on WhatsApp</span>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
