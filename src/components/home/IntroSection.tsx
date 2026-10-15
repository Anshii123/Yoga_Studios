import React from "react";
import Image from "next/image";
import { Button } from "@/components/common/Button";
import { ArrowRightIcon, BotanicalIcon, CheckIcon } from "@/components/common/Icons";

export const IntroSection: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-[#FFFFFF] border-t border-[#174A3A]/10 relative overflow-hidden">
      {/* Subtle pale mint backdrop transition accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#EAF6EF]/50 pointer-events-none hidden lg:block" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Supporting Photograph Column */}
          <div className="lg:col-span-6 relative order-2 lg:order-1">
            <div className="relative aspect-[4/3] sm:aspect-[16/11] rounded-[2rem] overflow-hidden shadow-lg border border-[#174A3A]/10 group">
              <Image
                src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1200&auto=format&fit=crop"
                alt="Seated meditation and breathwork in serene sunlight studio"
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-103"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Micro caption */}
            <div className="mt-3.5 flex items-center justify-between text-xs text-[#64716A] font-sans">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#087F5B]" />
                Clean airflow & certified organic props
              </span>
              <span className="font-display font-medium text-[#174A3A]">Indiranagar Studio</span>
            </div>
          </div>

          {/* Editorial Content Column */}
          <div className="lg:col-span-6 order-1 lg:order-2 flex flex-col">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest bg-[#EAF6EF] text-[#087F5B] border border-[#087F5B]/20 w-fit mb-4 font-display">
              <BotanicalIcon size={14} />
              <span>A DIFFERENT KIND OF PRACTICE</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#174A3A] leading-[1.1] tracking-tight">
              Your practice. <br />
              <span className="font-editorial italic font-normal text-[#087F5B]">Your pace.</span> <br />
              Your space.
            </h2>

            <p className="mt-5 text-base sm:text-lg text-[#64716A] leading-relaxed font-sans">
              In a world that constantly encourages you to rush, AAROH YOGA is an intentional pause. We help you cultivate balanced strength, functional spinal mobility, and calm breathing through unhurried practices tailored to your body.
            </p>

            {/* Three key pillars */}
            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-[#EAF6EF]/60 border border-[#087F5B]/15">
                <div className="w-7 h-7 rounded-xl bg-[#087F5B] text-[#FFFFFF] flex items-center justify-center shrink-0 mt-0.5">
                  <CheckIcon size={14} />
                </div>
                <div>
                  <h3 className="font-display text-base font-bold text-[#174A3A]">
                    Move Mindfully
                  </h3>
                  <p className="text-xs sm:text-sm text-[#64716A] font-sans mt-0.5">
                    Prioritizing joint stability, intuitive range of motion, and sustainable habits over extreme shapes.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-[#EAF6EF]/60 border border-[#087F5B]/15">
                <div className="w-7 h-7 rounded-xl bg-[#087F5B] text-[#FFFFFF] flex items-center justify-center shrink-0 mt-0.5">
                  <CheckIcon size={14} />
                </div>
                <div>
                  <h3 className="font-display text-base font-bold text-[#174A3A]">
                    Breathe Deeply
                  </h3>
                  <p className="text-xs sm:text-sm text-[#64716A] font-sans mt-0.5">
                    Conscious diaphragmatic pranayama techniques to quiet nervous system tension and steady the mind.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-[#EAF6EF]/60 border border-[#087F5B]/15">
                <div className="w-7 h-7 rounded-xl bg-[#087F5B] text-[#FFFFFF] flex items-center justify-center shrink-0 mt-0.5">
                  <CheckIcon size={14} />
                </div>
                <div>
                  <h3 className="font-display text-base font-bold text-[#174A3A]">
                    Grow Together
                  </h3>
                  <p className="text-xs sm:text-sm text-[#64716A] font-sans mt-0.5">
                    A welcoming, judgment-free community where every practitioner feels supported and heard.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <Button href="/about" variant="outline" size="md">
                <span>Learn Our Story</span>
                <ArrowRightIcon size={16} />
              </Button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
