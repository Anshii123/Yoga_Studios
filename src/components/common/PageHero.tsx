import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BotanicalIcon } from "./Icons";

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  italicWord?: string;
  description: string;
  image?: string;
  theme?: "dark" | "light" | "mist";
  breadcrumb?: string;
}

export const PageHero: React.FC<PageHeroProps> = ({
  eyebrow,
  title,
  italicWord,
  description,
  image,
  theme = "dark",
  breadcrumb,
}) => {
  const isDark = theme === "dark";
  const bgClass = isDark
    ? "bg-gradient-to-b from-[#092B2C] via-[#103C3A] to-[#0d3432] text-[#F9FCFA]"
    : "bg-[#E7F5F0] text-[#103C3A]";

  return (
    <section className={`relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden border-b border-[#27C6A0]/15 ${bgClass}`}>
      {/* Botanical Luxury Glow Motifs */}
      <div className="absolute inset-0 pointer-events-none opacity-25">
        <div className="absolute top-1/4 -right-24 w-[500px] h-[500px] rounded-full bg-[#27C6A0]/20 blur-3xl" />
        <div className="absolute bottom-0 -left-24 w-[450px] h-[450px] rounded-full bg-[#B9F2DF]/15 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        {breadcrumb && (
          <nav className="mb-6 flex items-center gap-2 text-xs uppercase tracking-wider font-display font-medium text-[#27C6A0]">
            <Link href="/" className="hover:text-[#B9F2DF] transition-colors">
              Home
            </Link>
            <span className="text-[#27C6A0]/50">/</span>
            <span className={isDark ? "text-[#F9FCFA]" : "text-[#103C3A]"}>{breadcrumb}</span>
          </nav>
        )}

        <div className={`grid grid-cols-1 ${image ? "lg:grid-cols-12 gap-12 lg:gap-16 items-center" : "max-w-3xl"}`}>
          <div className={image ? "lg:col-span-7" : ""}>
            {eyebrow && (
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest bg-[#27C6A0]/15 text-[#27C6A0] border border-[#27C6A0]/30 mb-5 font-display">
                <BotanicalIcon size={14} />
                <span>{eyebrow}</span>
              </div>
            )}
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-6.5xl font-bold leading-[1.1] tracking-tight">
              {title}
              {italicWord && (
                <>
                  {" "}
                  <span className="font-editorial italic font-normal text-[#27C6A0]">
                    {italicWord}
                  </span>
                </>
              )}
            </h1>
            <p
              className={`mt-6 text-lg sm:text-xl leading-relaxed font-sans ${
                isDark ? "text-[#B9F2DF]/90" : "text-[#243431]/80"
              }`}
            >
              {description}
            </p>
          </div>

          {image && (
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl border-2 border-[#27C6A0]/20 group">
                <Image
                  src={image}
                  alt={title}
                  fill
                  priority
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 500px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#092B2C]/70 via-transparent to-transparent pointer-events-none" />
              </div>
              {/* Botanical badge accent */}
              <div className="hidden sm:flex absolute -bottom-5 -left-5 bg-[#103C3A] text-[#F9FCFA] px-5 py-3 rounded-2xl shadow-xl border border-[#27C6A0]/30 items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#27C6A0]/20 flex items-center justify-center text-[#27C6A0]">
                  <BotanicalIcon size={18} />
                </div>
                <div className="text-xs font-display">
                  <div className="font-bold tracking-wider text-[#27C6A0] uppercase">AAROH BOTANICAL</div>
                  <div className="text-[#B9F2DF]/80">Bengaluru Sanctuary</div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
