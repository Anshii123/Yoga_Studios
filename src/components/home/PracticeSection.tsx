import React from "react";
import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "@/components/common/SectionHeading";
import { ArrowUpRightIcon } from "@/components/common/Icons";
import { CLASSES_DATA } from "@/data/classes";

export const PracticeSection: React.FC = () => {
  const featured = CLASSES_DATA.slice(0, 4);

  return (
    <section className="py-20 md:py-28 bg-[#174A3A] text-[#FFFFFF] relative overflow-hidden">
      {/* Background glow accents */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#087F5B]/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-[#C8F169]/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <SectionHeading
            eyebrow="DISCOVER YOUR PRACTICE"
            title="Find the way you want to"
            italicWord="move."
            subtitle="Whether you crave steady foundational alignment, energising flow, or restorative stillness, explore our four core traditions."
            align="left"
            theme="dark"
          />
          <Link
            href="/classes"
            className="inline-flex items-center gap-2 text-sm font-display font-bold text-[#C8F169] hover:text-[#FFFFFF] transition-colors pb-1 border-b border-[#C8F169]/40 shrink-0"
          >
            <span>Explore All 6 Formats</span>
            <ArrowUpRightIcon size={16} />
          </Link>
        </div>

        {/* Asymmetrical Grid of Disciplines on Deep Botanical Green */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          {featured.map((item, index) => {
            const spanClass =
              index === 0
                ? "lg:col-span-7"
                : index === 1
                ? "lg:col-span-5"
                : index === 2
                ? "lg:col-span-5"
                : "lg:col-span-7";

            return (
              <div
                key={item.id}
                className={`${spanClass} group relative bg-[#0f3529] rounded-[2rem] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-[#087F5B]/30 flex flex-col justify-between`}
              >
                {/* Image Section */}
                <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-104"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f3529] via-[#0f3529]/20 to-transparent pointer-events-none" />
                  
                  {/* Intensity Tag */}
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-display font-semibold uppercase tracking-wider bg-[#174A3A]/90 text-[#C8F169] border border-[#087F5B]/30 backdrop-blur-sm shadow-sm">
                    {item.intensity} Pace
                  </span>

                  <span className="absolute bottom-4 right-4 text-xs font-sans text-[#EAF6EF]/90 bg-[#174A3A]/80 px-3 py-1 rounded-full">
                    {item.duration}
                  </span>
                </div>

                {/* Content Section */}
                <div className="p-7 sm:p-8 flex flex-col justify-between flex-grow">
                  <div>
                    <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#FFFFFF] group-hover:text-[#C8F169] transition-colors">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm text-[#EAF6EF]/80 font-sans leading-relaxed line-clamp-2">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-5 border-t border-white/10 flex items-center justify-between">
                    <span className="text-xs text-[#C8F169] font-display font-medium">
                      {item.focus.split(",")[0]}
                    </span>
                    <Link
                      href={`/classes#${item.id}`}
                      className="inline-flex items-center gap-1.5 text-xs font-display font-bold uppercase tracking-wider text-[#FFFFFF] group-hover:text-[#C8F169] transition-colors"
                    >
                      <span>Explore Practice</span>
                      <ArrowUpRightIcon size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
