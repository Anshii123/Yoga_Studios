import React from "react";
import Image from "next/image";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Button } from "@/components/common/Button";
import { ArrowRightIcon } from "@/components/common/Icons";
import { INSTRUCTORS_DATA } from "@/data/instructors";

export const InstructorPreview: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-[#F7FAF8] border-t border-[#174A3A]/10">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <SectionHeading
            eyebrow="THOUGHTFUL TEACHERS"
            title="Guidance that gives you"
            italicWord="room to grow."
            subtitle="Our compassionate guides bring steady presence, biomechanical insight, and warmth to every practice. (Sample demonstration profiles)"
            align="left"
            theme="mist"
          />
          <Button href="/instructors" variant="outline" size="md" className="shrink-0 self-start md:self-end">
            <span>Meet All Teachers</span>
            <ArrowRightIcon size={16} />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {INSTRUCTORS_DATA.map((teacher) => (
            <div
              key={teacher.id}
              className="group bg-[#FFFFFF] rounded-[2rem] p-7 border border-[#174A3A]/10 hover:border-[#087F5B] transition-all duration-300 hover:shadow-xl hover:shadow-[#087F5B]/10 flex flex-col justify-between"
            >
              <div>
                {/* Portrait with clean framing */}
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden mb-6 shadow-sm">
                  <Image
                    src={teacher.image}
                    alt={teacher.name}
                    fill
                    className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-104"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#174A3A]/70 via-transparent to-transparent pointer-events-none" />
                  <span className="absolute bottom-3 left-3 text-[11px] font-display font-semibold uppercase tracking-wider text-[#FFFFFF] bg-[#174A3A]/90 border border-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                    {teacher.specialty}
                  </span>
                </div>

                <h3 className="font-display text-2xl font-bold text-[#174A3A] group-hover:text-[#087F5B] transition-colors">
                  {teacher.name}
                </h3>
                <p className="mt-2 text-sm text-[#64716A] font-sans leading-relaxed">
                  {teacher.shortBio}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#174A3A]/10 flex items-center justify-between">
                <span className="text-xs text-[#174A3A]/70 font-sans italic">
                  &ldquo;{teacher.quote}&rdquo;
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
