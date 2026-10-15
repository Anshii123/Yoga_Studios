import { Metadata } from "next";
import { PageHero } from "@/components/common/PageHero";
import { SectionHeading } from "@/components/common/SectionHeading";
import { TeacherProfile } from "@/components/instructors/TeacherProfile";
import { Button } from "@/components/common/Button";
import { BotanicalIcon, CompassIcon, HeartIcon, SparklesIcon } from "@/components/common/Icons";
import { INSTRUCTORS_DATA } from "@/data/instructors";

export const metadata: Metadata = {
  title: "Our Instructors & Guides",
  description:
    "Meet our thoughtful yoga guides in Bengaluru: Meera Kapoor, Rohan Malhotra, and Naina Sharma. Compassionate instruction tailored to your body.",
};

export default function InstructorsPage() {
  return (
    <>
      <PageHero
        breadcrumb="Instructors"
        eyebrow="MINDFUL TEACHERS"
        title="Guidance that gives you"
        italicWord="room to grow."
        description="Our guides hold space with humility, deep anatomical knowledge, and genuine warmth. We believe great instruction does not demand that you conform to a shape; it adapts the posture to support your body."
        image="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1200&auto=format&fit=crop"
        theme="dark"
      />

      <section className="py-16 md:py-24 bg-[#F9FCFA]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          
          {/* Instructor Directory */}
          <div className="divide-y divide-[#103C3A]/10">
            {INSTRUCTORS_DATA.map((teacher, index) => (
              <TeacherProfile key={teacher.id} instructor={teacher} index={index} />
            ))}
          </div>

          {/* Teaching Philosophy Pillars */}
          <div className="mt-20 py-16 px-6 sm:px-10 rounded-[2rem] bg-[#E7F5F0] border border-[#27C6A0]/25">
            <SectionHeading
              eyebrow="OUR COMMITMENTS"
              title="How our guides support your"
              italicWord="wellness journey."
              subtitle="Four foundational commitments upheld in every session at AAROH YOGA."
              theme="mist"
            />

            <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="p-7 rounded-2xl bg-[#F9FCFA] border border-[#27C6A0]/20 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-[#103C3A] text-[#27C6A0] flex items-center justify-center mb-4">
                  <CompassIcon size={20} />
                </div>
                <h3 className="font-display text-xl font-bold text-[#103C3A]">
                  Encouragement Over Comparison
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-[#243431]/75 font-sans leading-relaxed">
                  We dismantle competitive fitness pressure. True progress is measured by presence and inner calm, never by comparison with others.
                </p>
              </div>

              <div className="p-7 rounded-2xl bg-[#F9FCFA] border border-[#27C6A0]/20 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-[#103C3A] text-[#27C6A0] flex items-center justify-center mb-4">
                  <HeartIcon size={20} />
                </div>
                <h3 className="font-display text-xl font-bold text-[#103C3A]">
                  Adaptations for Every Body
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-[#243431]/75 font-sans leading-relaxed">
                  Cork blocks, straps, bolsters, and customized transitions are seamlessly integrated into every sequence so all practitioners feel capable.
                </p>
              </div>

              <div className="p-7 rounded-2xl bg-[#F9FCFA] border border-[#27C6A0]/20 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-[#103C3A] text-[#27C6A0] flex items-center justify-center mb-4">
                  <SparklesIcon size={20} />
                </div>
                <h3 className="font-display text-xl font-bold text-[#103C3A]">
                  Clear, Approachable Cues
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-[#243431]/75 font-sans leading-relaxed">
                  No confusing esoteric jargon. Our instructions are grounded in everyday biomechanics, breath regulation, and intuitive physical sensations.
                </p>
              </div>

              <div className="p-7 rounded-2xl bg-[#F9FCFA] border border-[#27C6A0]/20 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-[#103C3A] text-[#27C6A0] flex items-center justify-center mb-4">
                  <BotanicalIcon size={20} />
                </div>
                <h3 className="font-display text-xl font-bold text-[#103C3A]">
                  Respect for Boundaries
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-[#243431]/75 font-sans leading-relaxed">
                  Hands-on assists are always completely consensual. You maintain full agency over your practice and your physical space on the mat.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-20 md:py-28 bg-[#103C3A] text-[#F9FCFA] text-center">
        <div className="max-w-3xl mx-auto px-5 sm:px-8">
          <div className="w-12 h-12 mx-auto rounded-2xl bg-[#092B2C] border border-[#27C6A0]/30 text-[#27C6A0] flex items-center justify-center mb-6">
            <BotanicalIcon size={24} />
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
            Find a guide who feels{" "}
            <span className="font-editorial italic font-normal text-[#27C6A0]">
              right for you.
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#B9F2DF]/90 font-sans leading-relaxed max-w-xl mx-auto">
            Explore our flexible drop-in and monthly membership options to begin your practice.
          </p>
          <div className="mt-8 flex justify-center">
            <Button href="/pricing" variant="primary" size="lg" className="shadow-xl shadow-[#27C6A0]/20">
              Explore Memberships
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
