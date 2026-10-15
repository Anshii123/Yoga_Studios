import React from "react";
import { SectionHeading } from "@/components/common/SectionHeading";
import { TESTIMONIALS_DATA } from "@/data/testimonials";

export const TestimonialSection: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-[#E7F5F0] border-t border-[#27C6A0]/15">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <SectionHeading
          eyebrow="COMMUNITY VOICES"
          title="Small moments."
          italicWord="Meaningful changes."
          subtitle="Reflections from our practitioners on finding routine, bodily ease, and mental calm in our Bengaluru studio. (Illustrative sample student stories)"
          theme="mist"
        />

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS_DATA.map((t) => (
            <div
              key={t.id}
              className="bg-[#F9FCFA] p-8 rounded-[2rem] border border-[#27C6A0]/20 shadow-sm hover:shadow-xl hover:shadow-[#27C6A0]/10 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Refined jade quotation mark */}
                <span className="font-editorial text-5xl leading-none text-[#27C6A0] block mb-2 select-none">
                  &ldquo;
                </span>
                <p className="font-editorial text-lg text-[#103C3A] leading-snug italic mb-4">
                  {t.quote}
                </p>
                <p className="text-sm text-[#243431]/80 font-sans leading-relaxed">
                  {t.reflection}
                </p>
              </div>

              <div className="mt-6 pt-5 border-t border-[#103C3A]/10">
                <div className="font-display font-bold text-[#103C3A] text-sm">
                  {t.name}
                </div>
                <div className="text-xs text-[#243431]/60 font-sans mt-0.5">
                  {t.role} • <span className="text-[#27C6A0] font-semibold">{t.experienceLevel}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
