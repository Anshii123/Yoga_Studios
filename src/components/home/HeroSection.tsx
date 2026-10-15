import React from "react";
import Image from "next/image";
import { Button } from "@/components/common/Button";
import { BotanicalIcon, ArrowRightIcon, MapPinIcon, ClockIcon } from "@/components/common/Icons";
import { getTrialWhatsAppUrl } from "@/lib/whatsapp";

export const HeroSection: React.FC = () => {
  const trialUrl = getTrialWhatsAppUrl();

  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 lg:pt-36 lg:pb-28 bg-[#F7FAF8] overflow-hidden">
      {/* Subtle, soft natural background atmospheric accents */}
      <div className="absolute top-1/4 -right-20 w-[450px] h-[450px] rounded-full bg-[#EAF6EF] blur-3xl pointer-events-none opacity-70" />
      <div className="absolute bottom-0 -left-20 w-[400px] h-[400px] rounded-full bg-[#EAF6EF]/80 blur-3xl pointer-events-none opacity-60" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-14 items-center">
          
          {/* Left Column: Refined Editorial Typography (~45% / 5.5 cols) */}
          <div className="lg:col-span-5 xl:col-span-5 flex flex-col justify-center">
            {/* Eyebrow Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest bg-[#EAF6EF] text-[#087F5B] border border-[#087F5B]/20 w-fit mb-5 font-display shadow-2xs">
              <BotanicalIcon size={14} className="text-[#087F5B]" />
              <span>A SPACE TO BREATHE, MOVE & GROW</span>
            </div>

            {/* Main Editorial Headline */}
            <h1 className="font-display text-4xl sm:text-5xl md:text-5.5xl xl:text-[4rem] font-extrabold text-[#174A3A] leading-[1.08] tracking-tight">
              Find Your <br />
              <span className="font-editorial italic font-normal text-[#087F5B]">
                Own Rhythm.
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="mt-5 text-base sm:text-lg text-[#64716A] leading-relaxed font-sans max-w-md">
              Move with intention. Breathe a little deeper. Discover a practice that helps you reconnect with yourself, one movement at a time.
            </p>

            {/* Action CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              <Button href="/classes" variant="primary" size="lg" className="shadow-sm hover:shadow-md">
                <span>Explore Our Classes</span>
                <ArrowRightIcon size={16} />
              </Button>
              <Button href={trialUrl} isExternal variant="outline" size="lg">
                Book a Free Trial
              </Button>
            </div>

            {/* Supporting Microcopy */}
            <div className="mt-8 pt-6 border-t border-[#174A3A]/10 text-xs sm:text-sm text-[#64716A] font-sans flex flex-wrap items-center gap-2">
              <span className="font-medium text-[#174A3A]">Beginner-friendly classes</span>
              <span className="text-[#087F5B] font-bold">·</span>
              <span className="font-medium text-[#174A3A]">Thoughtful instruction</span>
              <span className="text-[#087F5B] font-bold">·</span>
              <span className="font-medium text-[#174A3A]">A welcoming community</span>
            </div>

            {/* Studio Location & Timings Indicator */}
            <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-[#64716A] font-sans">
              <div className="flex items-center gap-1.5">
                <MapPinIcon size={14} className="text-[#087F5B]" />
                <span>Indiranagar, Bengaluru</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ClockIcon size={14} className="text-[#087F5B]" />
                <span>Morning & Evening Batches</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Photograph Anchor (~55% / 7 cols) */}
          <div className="lg:col-span-7 xl:col-span-7 relative">
            <div className="relative w-full aspect-[4/3] sm:aspect-[16/11] lg:aspect-[5/4] xl:aspect-[16/12] h-[360px] sm:h-[460px] md:h-[500px] lg:h-[540px] xl:h-[580px] rounded-[2rem] overflow-hidden shadow-xl shadow-[#174A3A]/10 border border-[#174A3A]/10 group bg-[#EAF6EF]">
              <Image
                src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1400&auto=format&fit=crop"
                alt="Mindful yoga practitioner in a bright, sunlit contemporary boutique studio with natural light"
                fill
                priority
                className="object-cover object-[center_35%] transition-transform duration-700 ease-out group-hover:scale-102"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 58vw, 750px"
              />
              
              {/* Very subtle bottom vignette for high-contrast tag readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />

              {/* Single refined, compact editorial badge in bottom-left */}
              <div className="absolute bottom-5 left-5 bg-[#FFFFFF]/95 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-md border border-[#174A3A]/10 flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-[#087F5B] animate-pulse" />
                <span className="text-xs font-display font-bold uppercase tracking-wider text-[#174A3A]">
                  Move · Breathe · Restore
                </span>
              </div>

              {/* Small location tag in top-right */}
              <div className="absolute top-5 right-5 bg-[#FFFFFF]/90 backdrop-blur-sm px-3.5 py-1.5 rounded-full border border-[#174A3A]/10 text-[11px] font-display font-semibold text-[#174A3A]">
                Bengaluru Sanctuary
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
