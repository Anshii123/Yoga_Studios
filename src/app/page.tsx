import { Metadata } from "next";
import { HeroSection } from "@/components/home/HeroSection";
import { IntroSection } from "@/components/home/IntroSection";
import { PracticeSection } from "@/components/home/PracticeSection";
import { BenefitsSection } from "@/components/home/BenefitsSection";
import { InstructorPreview } from "@/components/home/InstructorPreview";
import { GallerySection } from "@/components/home/GallerySection";
import { TestimonialSection } from "@/components/home/TestimonialSection";
import { ClosingCTA } from "@/components/home/ClosingCTA";
import { SITE_CONFIG } from "@/lib/site-config";

export const metadata: Metadata = {
  title: `${SITE_CONFIG.name} — ${SITE_CONFIG.tagline} | Yoga Sanctuary Bengaluru`,
  description:
    "Discover mindful movement, expert guidance, and an encouraging community in Bengaluru. Explore Hatha, Vinyasa, Yin Yoga, and Meditation in our sunlit Indiranagar studio.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${SITE_CONFIG.name} — ${SITE_CONFIG.tagline}`,
    description:
      "A boutique contemporary yoga and wellness sanctuary in Bengaluru. Move with intention, breathe a little deeper, and find your rhythm.",
    url: SITE_CONFIG.url,
  },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <IntroSection />
      <PracticeSection />
      <BenefitsSection />
      <InstructorPreview />
      <GallerySection />
      <TestimonialSection />
      <ClosingCTA />
    </>
  );
}
