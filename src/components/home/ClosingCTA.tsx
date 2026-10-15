import React from "react";
import { Button } from "@/components/common/Button";
import { BotanicalIcon, WhatsAppIcon, ArrowRightIcon } from "@/components/common/Icons";
import { getGeneralWhatsAppUrl } from "@/lib/whatsapp";

interface ClosingCTAProps {
  title?: string;
  description?: string;
}

export const ClosingCTA: React.FC<ClosingCTAProps> = ({
  title = "A little more space for you.",
  description = "Start with one class. Discover what feels right. Build a practice that belongs to you.",
}) => {
  const chatUrl = getGeneralWhatsAppUrl();

  return (
    <section className="py-20 md:py-28 bg-[#174A3A] text-[#FFFFFF] relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] rounded-full bg-[#087F5B]/20 blur-3xl pointer-events-none" />
      <div className="absolute -top-10 -right-10 w-60 h-60 rounded-full border border-white/10 pointer-events-none" />
      <div className="absolute -bottom-10 -left-10 w-60 h-60 rounded-full border border-white/10 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-5 sm:px-8 text-center relative z-10">
        <div className="w-14 h-14 mx-auto rounded-2xl bg-[#0f3529] border border-[#087F5B]/30 text-[#C8F169] flex items-center justify-center mb-6 shadow-lg">
          <BotanicalIcon size={26} />
        </div>

        <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#FFFFFF] tracking-tight leading-tight">
          A little more{" "}
          <span className="font-editorial italic font-normal text-[#C8F169]">
            space for you.
          </span>
        </h2>

        <p className="mt-5 text-base sm:text-lg text-[#EAF6EF]/90 leading-relaxed font-sans max-w-2xl mx-auto">
          {description}
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Button
            href="/classes"
            variant="primary"
            size="lg"
            className="shadow-xl shadow-[#087F5B]/30"
          >
            <span>Explore Classes</span>
            <ArrowRightIcon size={16} />
          </Button>

          <Button
            href={chatUrl}
            isExternal
            variant="outline-light"
            size="lg"
            className="inline-flex items-center gap-2"
          >
            <WhatsAppIcon size={18} className="text-[#C8F169]" />
            <span>Chat on WhatsApp</span>
          </Button>
        </div>

        <p className="mt-6 text-xs text-[#EAF6EF]/70 font-sans">
          Sanctuary studio in Indiranagar, Bengaluru • Complimentary beginner mat orientation
        </p>
      </div>
    </section>
  );
};
