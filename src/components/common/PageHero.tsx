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
    ? "bg-gradient-to-b from-[#174A3A] via-[#123d30] to-[#0e3126] text-[#FFFFFF]"
    : "bg-[#F7FAF8] text-[#174A3A]";

  return (
    <section className={`relative pt-28 pb-16 md:pt-36 md:pb-24 lg:pt-40 lg:pb-28 overflow-hidden border-b border-[#087F5B]/15 ${bgClass}`}>
      {/* Botanical Luxury Glow Motifs */}
      <div className="absolute inset-0 pointer-events-none opacity-25">
        <div className="absolute top-1/4 -right-24 w-[500px] h-[500px] rounded-full bg-[#087F5B]/20 blur-3xl" />
        <div className="absolute bottom-0 -left-24 w-[450px] h-[450px] rounded-full bg-[#C8F169]/10 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        {breadcrumb && (
          <nav className="mb-5 flex items-center gap-2 text-xs uppercase tracking-wider font-display font-medium text-[#C8F169]" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-[#FFFFFF] transition-colors">
              Home
            </Link>
            <span className="text-white/40">/</span>
            <span className={isDark ? "text-white/90" : "text-[#174A3A]"}>{breadcrumb}</span>
          </nav>
        )}

        <div className={`grid grid-cols-1 ${image ? "lg:grid-cols-12 gap-10 lg:gap-14 xl:gap-16 items-center" : "max-w-3xl"}`}>
          <div className={image ? "lg:col-span-7" : ""}>
            {eyebrow && (
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest bg-[#EAF6EF] text-[#087F5B] border border-[#087F5B]/30 mb-4 sm:mb-5 font-display shadow-2xs">
                <BotanicalIcon size={14} className="text-[#087F5B]" />
                <span>{eyebrow}</span>
              </div>
            )}
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-5.5xl xl:text-6xl font-extrabold leading-[1.12] tracking-tight text-white">
              {title}
              {italicWord && (
                <>
                  {" "}
                  <span className="font-editorial italic font-normal text-[#C8F169]">
                    {italicWord}
                  </span>
                </>
              )}
            </h1>
            <p
              className={`mt-5 sm:mt-6 text-base sm:text-lg leading-relaxed font-sans max-w-2xl ${
                isDark ? "text-[#EAF6EF]/85" : "text-[#64716A]"
              }`}
            >
              {description}
            </p>
          </div>

          {image && (
            <div className="lg:col-span-5 relative mt-4 lg:mt-0">
              <div className="relative aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/5] rounded-3xl sm:rounded-[2rem] overflow-hidden shadow-2xl border border-white/15 group bg-[#0e3126]">
                <Image
                  src={image}
                  alt={title}
                  fill
                  priority
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-104"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 500px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e3126]/60 via-transparent to-transparent pointer-events-none" />
              </div>
              
              {/* Botanical badge accent */}
              <div className="hidden sm:flex absolute -bottom-4 -left-4 bg-[#FFFFFF] text-[#174A3A] px-4 py-2.5 rounded-2xl shadow-xl border border-[#174A3A]/10 items-center gap-2.5">
                <div className="w-7 h-7 rounded-full bg-[#EAF6EF] flex items-center justify-center text-[#087F5B]">
                  <BotanicalIcon size={16} />
                </div>
                <div className="text-xs font-display">
                  <div className="font-bold tracking-wider text-[#087F5B] uppercase text-[10px]">AAROH SANCTUARY</div>
                  <div className="text-[#174A3A] font-semibold">Bengaluru Studio</div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
