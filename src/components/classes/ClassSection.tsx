import React from "react";
import Image from "next/image";
import { YogaClass } from "@/data/classes";
import { Button } from "@/components/common/Button";
import { CheckIcon, ClockIcon, ArrowUpRightIcon, BotanicalIcon } from "@/components/common/Icons";
import { getClassWhatsAppUrl } from "@/lib/whatsapp";

interface ClassCardProps {
  yogaClass: YogaClass;
  index: number;
}

export const ClassCard: React.FC<ClassCardProps> = ({ yogaClass, index }) => {
  const isReversed = index % 2 === 1;
  const waUrl = getClassWhatsAppUrl(yogaClass.title);

  return (
    <div
      id={yogaClass.id}
      className="scroll-mt-28 py-14 md:py-20 border-b border-[#103C3A]/10 last:border-b-0"
    >
      <div
        className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center ${
          isReversed ? "lg:grid-flow-dense" : ""
        }`}
      >
        {/* Visual Column */}
        <div className={`lg:col-span-6 ${isReversed ? "lg:col-start-7" : ""}`}>
          <div className="relative aspect-[4/3] sm:aspect-[16/11] rounded-[2rem] overflow-hidden shadow-xl border-2 border-[#27C6A0]/20 group">
            <Image
              src={yogaClass.image}
              alt={yogaClass.title}
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#092B2C]/70 via-transparent to-transparent pointer-events-none" />
            
            <div className="absolute top-4 left-4 flex gap-2">
              <span className="px-3.5 py-1 rounded-full text-xs font-display font-semibold uppercase tracking-wider bg-[#103C3A]/90 text-[#27C6A0] border border-[#27C6A0]/30 backdrop-blur-sm shadow-sm">
                {yogaClass.intensity} Pace
              </span>
            </div>

            <div className="absolute bottom-4 left-4 flex items-center gap-2 text-xs font-sans text-[#F9FCFA] bg-[#092B2C]/80 backdrop-blur-sm px-3.5 py-1.5 rounded-full border border-white/10">
              <ClockIcon size={14} className="text-[#27C6A0]" />
              <span>{yogaClass.duration}</span>
            </div>
          </div>
        </div>

        {/* Text Details Column */}
        <div className={`lg:col-span-6 flex flex-col ${isReversed ? "lg:col-start-1" : ""}`}>
          <div className="inline-flex items-center gap-1.5 text-xs font-display font-semibold uppercase tracking-widest text-[#27C6A0] mb-2">
            <BotanicalIcon size={14} />
            <span>Discipline Overview</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#103C3A] tracking-tight">
            {yogaClass.title}
          </h2>
          <p className="mt-2 text-base text-[#103C3A]/90 font-medium font-sans">
            {yogaClass.tagline}
          </p>

          <p className="mt-4 text-base text-[#243431]/80 font-sans leading-relaxed">
            {yogaClass.description}
          </p>

          {/* Quick Specifications */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-sans">
            <div className="p-4 rounded-2xl bg-[#E7F5F0] border border-[#27C6A0]/25">
              <span className="font-display font-bold uppercase tracking-wider text-[#103C3A] block mb-1">
                Suitable For
              </span>
              <span className="text-[#243431]/85">{yogaClass.suitableFor}</span>
            </div>
            <div className="p-4 rounded-2xl bg-[#E7F5F0] border border-[#27C6A0]/25">
              <span className="font-display font-bold uppercase tracking-wider text-[#103C3A] block mb-1">
                Session Experience
              </span>
              <span className="text-[#243431]/85">{yogaClass.experience}</span>
            </div>
          </div>

          {/* Key Benefits */}
          <div className="mt-6">
            <span className="text-xs font-display font-bold uppercase tracking-wider text-[#103C3A] block mb-2.5">
              Practice Highlights
            </span>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs font-sans text-[#243431]/80">
              {yogaClass.keyBenefits.map((benefit, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckIcon size={14} className="text-[#27C6A0] shrink-0 mt-0.5" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Action CTA */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button href={waUrl} isExternal variant="primary" size="md">
              <span>Enquire About {yogaClass.title}</span>
              <ArrowUpRightIcon size={15} />
            </Button>
            <span className="text-xs text-[#243431]/60 font-sans">
              Timetable confirmed on enquiry
            </span>
          </div>
        </div>

      </div>
    </div>
  );
};
