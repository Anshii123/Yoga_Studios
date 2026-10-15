import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/common/PageHero";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Button } from "@/components/common/Button";
import { BotanicalIcon, HeartIcon, SparklesIcon, CompassIcon, ArrowRightIcon } from "@/components/common/Icons";

export const metadata: Metadata = {
  title: "Our Story & Sanctuary Philosophy",
  description:
    "Learn about AAROH YOGA's contemporary botanical philosophy of approachable, adaptable, and sustainable wellness in our Bengaluru sanctuary.",
};

export default function AboutPage() {
  return (
    <>
      {/* Editorial Hero */}
      <PageHero
        breadcrumb="Our Story"
        eyebrow="SANCTUARY & PHILOSOPHY"
        title="Wellness isn't a destination."
        italicWord="It's a practice."
        description="AAROH YOGA was envisioned as an unhurried botanical haven in Bengaluru—a space where you can step away from chronic busyness, unroll a mat, and gently reconnect with your breath and body."
        image="https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=1200&auto=format&fit=crop"
        theme="dark"
      />

      {/* Philosophy Section */}
      <section className="py-20 md:py-28 bg-[#F9FCFA]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            <div className="lg:col-span-6 flex flex-col">
              <span className="text-xs font-display font-semibold uppercase tracking-widest text-[#27C6A0] mb-3">
                CORE PHILOSOPHY
              </span>
              <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-[#103C3A] leading-tight tracking-tight">
                Approachable. Adaptable. <br />
                <span className="font-editorial italic font-normal text-[#27C6A0]">Sustainable for life.</span>
              </h2>

              <p className="mt-6 text-base sm:text-lg text-[#243431]/80 leading-relaxed font-sans">
                Too often, modern yoga is portrayed as an intimidating display of extreme acrobatics or an intense fitness checklist. We believe yoga is fundamentally an intimate, healing homecoming.
              </p>

              <div className="mt-8 space-y-4 text-sm sm:text-base font-sans text-[#243431]/85">
                <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-[#E7F5F0]/60 border border-[#27C6A0]/20">
                  <div className="w-7 h-7 rounded-xl bg-[#103C3A] text-[#27C6A0] flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                    <BotanicalIcon size={16} />
                  </div>
                  <p>
                    <strong className="text-[#103C3A] font-display font-bold">Consistency over perfection:</strong> A 45-minute mindful session practiced regularly calms the nervous system far more than sporadic extreme exertion.
                  </p>
                </div>

                <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-[#E7F5F0]/60 border border-[#27C6A0]/20">
                  <div className="w-7 h-7 rounded-xl bg-[#103C3A] text-[#27C6A0] flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                    <HeartIcon size={16} />
                  </div>
                  <p>
                    <strong className="text-[#103C3A] font-display font-bold">Breath-led mobility:</strong> We prioritize effortless respiration over rigid posture shapes. If your breath catches, we soften the pose.
                  </p>
                </div>

                <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-[#E7F5F0]/60 border border-[#27C6A0]/20">
                  <div className="w-7 h-7 rounded-xl bg-[#103C3A] text-[#27C6A0] flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                    <SparklesIcon size={16} />
                  </div>
                  <p>
                    <strong className="text-[#103C3A] font-display font-bold">Respect for individual ability:</strong> Your body today is different from yesterday. We celebrate thoughtful modifications and prop assistance.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 relative">
              <div className="relative aspect-[4/3] sm:aspect-[16/11] rounded-[2rem] overflow-hidden shadow-2xl border-2 border-[#27C6A0]/20 group">
                <Image
                  src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1200&auto=format&fit=crop"
                  alt="Mindful breathing meditation in natural light"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Our Story Narrative in Midnight Pine */}
      <section className="py-20 md:py-28 bg-[#092B2C] text-[#F9FCFA] relative overflow-hidden">
        {/* Glow */}
        <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-[#27C6A0]/10 blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto px-5 sm:px-8 text-center relative z-10">
          <span className="text-xs font-display font-semibold uppercase tracking-widest text-[#27C6A0] mb-3 inline-block">
            THE AAROH INSPIRATION
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-[#F9FCFA] leading-tight">
            Created for balance in everyday lives.
          </h2>

          <div className="mt-8 space-y-6 text-base sm:text-lg text-[#B9F2DF]/85 font-sans leading-relaxed text-left sm:text-justify">
            <p>
              In Sanskrit, <em className="font-editorial italic text-[#27C6A0] text-xl not-italic">Aaroh</em> suggests an upward, ascending flow—the gentle lifting of the spirit through conscious practice. Living in bustling metropolitan centers like Bengaluru, we observed how easily screen fatigue, long commutes, and endless deadlines detach us from our breath.
            </p>
            <p>
              AAROH YOGA was imagined as a contemporary botanical antidote: a sanctuary with natural cork textures, soft morning daylight, soothing herbal infusions, and instructors who meet you with patience. We envisioned a studio where ego is checked at the door and genuine human well-being takes center stage.
            </p>
            <p>
              Today, our studio welcomes students from all backgrounds—from desk-bound software creators discovering spinal relief to parents carving out an hour of quiet stillness. We remain devoted to offering a non-dogmatic, biomechanically sound, and restorative experience.
            </p>
          </div>
        </div>
      </section>

      {/* Three Principles of Our Approach */}
      <section className="py-20 md:py-28 bg-[#F9FCFA]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <SectionHeading
            eyebrow="OUR METHODOLOGY"
            title="Three guiding pillars of"
            italicWord="mindful practice."
            subtitle="How we teach, sequence, and support each person who rolls out a mat in our sanctuary."
          />

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-[2rem] bg-[#E7F5F0] border border-[#27C6A0]/25 flex flex-col justify-between">
              <div>
                <span className="font-display text-4xl text-[#27C6A0] font-extrabold block mb-4">
                  01
                </span>
                <h3 className="font-display text-2xl font-bold text-[#103C3A]">
                  Listen to Your Body
                </h3>
                <p className="mt-3 text-sm text-[#243431]/80 font-sans leading-relaxed">
                  Your body provides constant feedback. We teach you to distinguish between healthy muscular engagement and sharp joint strain, honoring rest whenever your body asks for it.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#103C3A]/10 text-xs font-display text-[#103C3A] font-bold">
                Anatomical Awareness
              </div>
            </div>

            <div className="p-8 rounded-[2rem] bg-[#E7F5F0] border border-[#27C6A0]/25 flex flex-col justify-between">
              <div>
                <span className="font-display text-4xl text-[#27C6A0] font-extrabold block mb-4">
                  02
                </span>
                <h3 className="font-display text-2xl font-bold text-[#103C3A]">
                  Make Space to Breathe
                </h3>
                <p className="mt-3 text-sm text-[#243431]/80 font-sans leading-relaxed">
                  Movement without conscious breath is just physical exercise. By coupling postures with diaphragmatic breathing, every sequence becomes a soothing nervous system reset.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#103C3A]/10 text-xs font-display text-[#103C3A] font-bold">
                Conscious Pranayama
              </div>
            </div>

            <div className="p-8 rounded-[2rem] bg-[#E7F5F0] border border-[#27C6A0]/25 flex flex-col justify-between">
              <div>
                <span className="font-display text-4xl text-[#27C6A0] font-extrabold block mb-4">
                  03
                </span>
                <h3 className="font-display text-2xl font-bold text-[#103C3A]">
                  Progress at Your Pace
                </h3>
                <p className="mt-3 text-sm text-[#243431]/80 font-sans leading-relaxed">
                  There are no timelines or performance metrics at Aaroh. Whether you stay with gentle variations for months or explore balance transitions, you are right where you need to be.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#103C3A]/10 text-xs font-display text-[#103C3A] font-bold">
                Sustainable Evolution
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Inside the Studio & Who Is Welcome */}
      <section className="py-20 md:py-28 bg-[#E7F5F0] border-t border-[#27C6A0]/15">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            <div className="lg:col-span-6 relative order-2 lg:order-1">
              <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden shadow-xl border-2 border-[#103C3A]/10 group">
                <Image
                  src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1200&auto=format&fit=crop"
                  alt="Aaroh Botanical Yoga Studio warm interior environment"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>

            <div className="lg:col-span-6 order-1 lg:order-2 flex flex-col">
              <span className="text-xs font-display font-semibold uppercase tracking-widest text-[#27C6A0] mb-3">
                AN OPEN DOOR
              </span>
              <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-[#103C3A] leading-tight tracking-tight">
                Who is welcome on our mats?
              </h2>

              <p className="mt-6 text-base sm:text-lg text-[#243431]/80 leading-relaxed font-sans">
                Everyone. Truly. Whether you are in your twenties or your sixties, recovering from a sedentary stretch, cross-training as an athlete, or seeking a mental sanctuary after high-stress days, Aaroh is designed with you in mind.
              </p>

              <div className="mt-6 p-6 rounded-2xl bg-[#F9FCFA] border border-[#27C6A0]/25">
                <p className="text-sm font-editorial text-[#103C3A] italic leading-relaxed">
                  &ldquo;You don&apos;t come to yoga because you have your life figured out. You come to yoga to take a breath and give yourself grace while you figure it out.&rdquo;
                </p>
              </div>

              <div className="mt-8">
                <Button href="/classes" variant="teal" size="lg">
                  <span>Explore Our Classes</span>
                  <ArrowRightIcon size={16} />
                </Button>
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
          <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-[#F9FCFA] leading-tight">
            There&apos;s a place for you{" "}
            <span className="font-editorial italic font-normal text-[#27C6A0]">
              on the mat.
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#B9F2DF]/90 font-sans leading-relaxed max-w-xl mx-auto">
            Discover a class rhythm that enriches your schedule and leaves you feeling grounded and clear.
          </p>
          <div className="mt-8 flex justify-center">
            <Button href="/classes" variant="primary" size="lg">
              Explore Our Classes
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
