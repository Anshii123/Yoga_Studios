import React from "react";
import Image from "next/image";
import { SectionHeading } from "@/components/common/SectionHeading";
import { STUDIO_GALLERY } from "@/data/gallery";

export const GallerySection: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-[#F9FCFA] border-t border-[#103C3A]/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <SectionHeading
          eyebrow="STUDIO SANCTUARY"
          title="A glimpse into studio life."
          subtitle="Sun-drenched morning practice rooms, natural cork textures, organic botanicals, and deep restorative tranquility."
        />

        {/* Asymmetrical CSS Grid with varied visual rhythm */}
        <div className="mt-14 grid grid-cols-12 gap-5 sm:gap-6">
          {STUDIO_GALLERY.map((item) => (
            <div
              key={item.id}
              className={`${item.span || "col-span-12 md:col-span-6"} relative group rounded-[2rem] overflow-hidden shadow-md hover:shadow-2xl hover:shadow-[#27C6A0]/15 transition-all duration-500 border border-[#27C6A0]/15 aspect-[16/10] sm:aspect-auto sm:min-h-[290px] md:min-h-[340px]`}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#092B2C]/80 via-[#092B2C]/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />
              
              <div className="absolute bottom-5 left-5 right-5 text-[#F9FCFA] flex flex-col justify-end">
                <span className="text-[11px] font-display font-semibold uppercase tracking-wider text-[#27C6A0] mb-1">
                  {item.category}
                </span>
                <h4 className="font-display text-lg sm:text-xl font-bold leading-snug">
                  {item.title}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
