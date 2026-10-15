import React from "react";
import { SectionHeading } from "@/components/common/SectionHeading";
import { CompassIcon, HeartIcon, BotanicalIcon, SparklesIcon } from "@/components/common/Icons";

export const BenefitsSection: React.FC = () => {
  const experiences = [
    {
      icon: <CompassIcon size={26} className="text-[#087F5B]" />,
      number: "01",
      title: "Thoughtful Guidance",
      description:
        "Every body carries distinct biomechanics and history. Our teachers observe your natural alignment and provide tailored variations rather than enforcing rigid, one-size-fits-all postures.",
    },
    {
      icon: <HeartIcon size={26} className="text-[#087F5B]" />,
      number: "02",
      title: "Welcoming for Every Level",
      description:
        "You never need prior experience or extraordinary flexibility to begin. We offer approachable progressions and supportive cork props so you feel comfortable from day one.",
    },
    {
      icon: <BotanicalIcon size={26} className="text-[#087F5B]" />,
      number: "03",
      title: "Small, Capped Cohorts",
      description:
        "We deliberately restrict class sizes to preserve a tranquil sanctuary ambiance—ensuring ample personal space on your mat, fresh airflow, and dedicated instructor attention.",
    },
    {
      icon: <SparklesIcon size={26} className="text-[#087F5B]" />,
      number: "04",
      title: "Sustainable Wellness",
      description:
        "We balance active muscular vitality with conscious pranayama breathwork and deep rest, building a weekly movement ritual that leaves you invigorated rather than exhausted.",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-[#FFFFFF] text-[#202A25] relative overflow-hidden border-t border-[#174A3A]/10">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        <SectionHeading
          eyebrow="THE AAROH EXPERIENCE"
          title="A practice centered on"
          italicWord="human connection."
          subtitle="We craft an unhurried sanctuary devoted to conscious movement, individual dignity, and gentle lifelong progress."
          theme="light"
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {experiences.map((exp) => (
            <div
              key={exp.number}
              className="p-8 rounded-[2rem] bg-[#F7FAF8] border border-[#174A3A]/10 hover:border-[#087F5B] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#087F5B]/10 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-[#EAF6EF] text-[#087F5B] group-hover:bg-[#087F5B] group-hover:text-[#FFFFFF] flex items-center justify-center transition-colors shadow-2xs">
                    {exp.icon}
                  </div>
                  <span className="font-display text-xl text-[#174A3A]/30 font-bold">
                    {exp.number}
                  </span>
                </div>
                <h3 className="font-display text-2xl font-bold text-[#174A3A] group-hover:text-[#087F5B] transition-colors">
                  {exp.title}
                </h3>
                <p className="mt-3 text-sm text-[#64716A] font-sans leading-relaxed">
                  {exp.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#174A3A]/10 text-[11px] font-display font-semibold uppercase tracking-wider text-[#174A3A]/70 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#087F5B]" />
                <span>Sanctuary Standard</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
