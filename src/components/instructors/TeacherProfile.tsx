import React from "react";
import Image from "next/image";
import { Instructor } from "@/data/instructors";
import { Button } from "@/components/common/Button";
import { ArrowUpRightIcon, BotanicalIcon } from "@/components/common/Icons";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

interface TeacherProfileProps {
  instructor: Instructor;
  index: number;
}

export const TeacherProfile: React.FC<TeacherProfileProps> = ({ instructor, index }) => {
  const isReversed = index % 2 === 1;
  const enquiryUrl = buildWhatsAppUrl(
    `Hello AAROH YOGA, I would love to enquire about classes led by ${instructor.name} (${instructor.specialty}).`
  );

  return (
    <div
      id={instructor.id}
      className="scroll-mt-28 py-14 md:py-20 border-b border-[#103C3A]/10 last:border-b-0"
    >
      <div
        className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center ${
          isReversed ? "lg:grid-flow-dense" : ""
        }`}
      >
        {/* Portrait Column */}
        <div className={`lg:col-span-5 ${isReversed ? "lg:col-start-8" : ""}`}>
          <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl border-2 border-[#27C6A0]/25 group">
            <Image
              src={instructor.image}
              alt={instructor.name}
              fill
              className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 42vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#092B2C]/80 via-transparent to-transparent pointer-events-none" />
            
            <div className="absolute bottom-5 left-5 right-5 bg-[#103C3A]/90 backdrop-blur-md p-4 rounded-2xl border border-[#27C6A0]/30 text-[#F9FCFA]">
              <span className="text-xs uppercase tracking-wider font-display font-bold text-[#27C6A0] block">
                {instructor.role}
              </span>
              <span className="text-sm font-sans font-medium text-[#B9F2DF] block">
                {instructor.specialty}
              </span>
            </div>
          </div>
        </div>

        {/* Story & Philosophy Column */}
        <div className={`lg:col-span-7 flex flex-col ${isReversed ? "lg:col-start-1" : ""}`}>
          <div className="inline-flex items-center gap-2 text-xs font-display font-bold uppercase tracking-widest text-[#27C6A0] mb-2">
            <BotanicalIcon size={14} />
            <span>Demonstration Profile</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#103C3A] tracking-tight">
            {instructor.name}
          </h2>

          <p className="mt-2 text-base font-semibold text-[#27C6A0] font-sans">
            Specialty: {instructor.specialty}
          </p>

          <p className="mt-5 text-base sm:text-lg text-[#243431]/80 font-sans leading-relaxed">
            {instructor.fullBio}
          </p>

          {/* Teaching Philosophy Block */}
          <div className="mt-6 p-6 rounded-2xl bg-[#E7F5F0] border-l-4 border-[#27C6A0]">
            <span className="text-xs font-display font-bold uppercase tracking-wider text-[#103C3A] block mb-1">
              Guiding Philosophy
            </span>
            <p className="font-editorial text-lg text-[#103C3A] italic leading-relaxed">
              {instructor.teachingPhilosophy}
            </p>
          </div>

          {/* Classes Taught */}
          <div className="mt-6 flex flex-wrap items-center gap-2">
            <span className="text-xs text-[#103C3A]/70 font-display font-bold uppercase tracking-wider mr-2">
              Leads Sessions In:
            </span>
            {instructor.classesTaught.map((c, i) => (
              <span
                key={i}
                className="px-3.5 py-1 rounded-full text-xs font-display font-semibold bg-[#103C3A]/10 text-[#103C3A] border border-[#103C3A]/15"
              >
                {c}
              </span>
            ))}
          </div>

          {/* WhatsApp CTA */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button href={enquiryUrl} isExternal variant="primary" size="md">
              <span>Enquire About Classes with {instructor.name.split(" ")[0]}</span>
              <ArrowUpRightIcon size={15} />
            </Button>
          </div>
        </div>

      </div>
    </div>
  );
};
