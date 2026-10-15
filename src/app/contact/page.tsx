import { Metadata } from "next";
import { PageHero } from "@/components/common/PageHero";
import { ContactForm } from "@/components/contact/ContactForm";
import { Button } from "@/components/common/Button";
import {
  BotanicalIcon,
  WhatsAppIcon,
  MailIcon,
  PhoneIcon,
  MapPinIcon,
  ClockIcon,
} from "@/components/common/Icons";
import { SITE_CONFIG } from "@/lib/site-config";
import { getGeneralWhatsAppUrl } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Contact & Visit Sanctuary | Indiranagar, Bengaluru",
  description:
    "Get in touch with AAROH YOGA in Indiranagar, Bengaluru. Enquire about trial classes, schedules, memberships, or plan your first studio visit.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact & Visit Sanctuary | AAROH YOGA Bengaluru",
    description:
      "Connect with our sanctuary team. Instant class enquiries via WhatsApp or email, located in Indiranagar, Bengaluru.",
    url: `${SITE_CONFIG.url}/contact`,
  },
};

export default function ContactPage() {
  const waUrl = getGeneralWhatsAppUrl();

  return (
    <>
      <PageHero
        breadcrumb="Contact"
        eyebrow="CONNECT WITH US"
        title="Let's start with a"
        italicWord="conversation."
        description="Have a question about class disciplines, memberships, or finding the right place to begin? We'd love to hear from you. We respond warmly and promptly."
        image="https://images.unsplash.com/photo-1588286840104-8957b019727f?q=80&w=1200&auto=format&fit=crop"
        theme="dark"
      />

      <section className="py-16 md:py-24 bg-[#FFFFFF]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 xl:gap-16">
            
            {/* Left Column: Contact Cards & Practical Logistics */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
              <div>
                <span className="text-xs font-display font-semibold uppercase tracking-widest text-[#087F5B] mb-2 block">
                  DIRECT TOUCHPOINTS
                </span>
                <h2 className="font-display text-3xl font-extrabold text-[#174A3A]">
                  How to reach our team
                </h2>
                <p className="mt-2 text-sm text-[#64716A] font-sans leading-relaxed">
                  WhatsApp is our quickest channel for schedule updates and trial session bookings. You are also welcome to drop an email or call during studio hours.
                </p>

                {/* Quick Channels List */}
                <div className="mt-8 space-y-4 font-sans text-sm">
                  {/* WhatsApp */}
                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-5 rounded-2xl bg-[#EAF6EF] border border-[#087F5B]/30 hover:border-[#087F5B] transition-all flex items-start gap-4 group shadow-2xs hover:shadow-md"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#087F5B] text-[#FFFFFF] group-hover:scale-105 flex items-center justify-center shrink-0 transition-transform">
                      <WhatsAppIcon size={20} />
                    </div>
                    <div>
                      <span className="font-display font-bold text-[#174A3A] block">
                        WhatsApp Fast Chat
                      </span>
                      <span className="text-xs text-[#64716A] block mt-0.5">
                        Instant class inquiries & slot confirmation
                      </span>
                      <span className="text-xs font-display font-bold text-[#087F5B] mt-1.5 inline-block">
                        Chat with us →
                      </span>
                    </div>
                  </a>

                  {/* Email */}
                  <div className="p-5 rounded-2xl bg-[#F7FAF8] border border-[#174A3A]/10 flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#174A3A] text-[#C8F169] flex items-center justify-center shrink-0">
                      <MailIcon size={20} />
                    </div>
                    <div>
                      <span className="font-display font-bold text-[#174A3A] block">
                        Email Enquiries
                      </span>
                      <a
                        href={`mailto:${SITE_CONFIG.contact.email}`}
                        className="text-xs text-[#64716A] hover:text-[#087F5B] transition-colors mt-0.5 block"
                      >
                        {SITE_CONFIG.contact.email}
                      </a>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="p-5 rounded-2xl bg-[#E7F5F0] border border-[#27C6A0]/20 flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#103C3A] text-[#27C6A0] flex items-center justify-center shrink-0">
                      <PhoneIcon size={20} />
                    </div>
                    <div>
                      <span className="font-display font-bold text-[#103C3A] block">
                        Phone Reception
                      </span>
                      <a
                        href={`tel:${SITE_CONFIG.contact.phoneRaw}`}
                        className="text-xs text-[#243431]/80 hover:text-[#27C6A0] transition-colors mt-0.5 block"
                      >
                        {SITE_CONFIG.contact.phoneDisplay}
                      </a>
                    </div>
                  </div>

                  {/* Location & Hours */}
                  <div className="p-5 rounded-2xl bg-[#E7F5F0] border border-[#27C6A0]/20 flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#103C3A] text-[#27C6A0] flex items-center justify-center shrink-0">
                      <MapPinIcon size={20} />
                    </div>
                    <div>
                      <span className="font-display font-bold text-[#103C3A] block">
                        Studio Sanctuary
                      </span>
                      <span className="text-xs text-[#243431]/80 mt-0.5 block">
                        {SITE_CONFIG.contact.address}
                      </span>
                      <span className="text-[11px] text-[#27C6A0] font-semibold block mt-1">
                        ({SITE_CONFIG.contact.addressNote})
                      </span>
                    </div>
                  </div>

                  {/* Timings */}
                  <div className="p-5 rounded-2xl bg-[#E7F5F0] border border-[#27C6A0]/20 flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#103C3A] text-[#27C6A0] flex items-center justify-center shrink-0">
                      <ClockIcon size={20} />
                    </div>
                    <div>
                      <span className="font-display font-bold text-[#103C3A] block">
                        Studio Hours
                      </span>
                      <span className="text-xs text-[#243431]/80 mt-0.5 block">
                        {SITE_CONFIG.contact.hours.weekdays}
                      </span>
                      <span className="text-xs text-[#243431]/80 block">
                        {SITE_CONFIG.contact.hours.weekends}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Note about map */}
              <div className="p-4 rounded-2xl bg-[#103C3A]/5 border border-[#103C3A]/10 text-xs text-[#243431]/70 font-sans">
                <strong className="text-[#103C3A] font-display">Visiting Notice:</strong> Interactive map coordinates and driving directions will be provided to confirmed visitors.
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

          </div>

          {/* First Time Visitor Preparation Section */}
          <div className="mt-24 p-8 sm:p-12 rounded-[2rem] bg-[#E7F5F0] border border-[#27C6A0]/25">
            <span className="text-xs font-display font-bold uppercase tracking-widest text-[#27C6A0] mb-2 block">
              FIRST TIME AT AAROH?
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-[#103C3A] mb-6">
              Preparing for your first studio visit
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-sm font-sans">
              <div className="p-6 rounded-2xl bg-[#F9FCFA] border border-[#27C6A0]/20 shadow-sm">
                <span className="font-display font-bold text-[#103C3A] block mb-2">
                  What to Bring
                </span>
                <p className="text-xs text-[#243431]/80 leading-relaxed">
                  We supply clean cork yoga mats, blocks, bolsters, and straps. Simply bring a reusable water bottle and comfortable, flexible attire.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#F9FCFA] border border-[#27C6A0]/20 shadow-sm">
                <span className="font-display font-bold text-[#103C3A] block mb-2">
                  Arrival Time
                </span>
                <p className="text-xs text-[#243431]/80 leading-relaxed">
                  Please arrive 10 to 15 minutes before the session starts to check in, remove shoes, sip warm infused water, and settle quietly onto your mat.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#F9FCFA] border border-[#27C6A0]/20 shadow-sm">
                <span className="font-display font-bold text-[#103C3A] block mb-2">
                  Beginner Support
                </span>
                <p className="text-xs text-[#243431]/80 leading-relaxed">
                  Let your instructor know if it is your first time or if you have any bodily sensitivities. They will offer gentle adjustments throughout class.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Final Closing CTA */}
      <section className="py-20 md:py-28 bg-[#103C3A] text-[#F9FCFA] text-center">
        <div className="max-w-3xl mx-auto px-5 sm:px-8">
          <div className="w-12 h-12 mx-auto rounded-2xl bg-[#092B2C] border border-[#27C6A0]/30 text-[#27C6A0] flex items-center justify-center mb-6">
            <BotanicalIcon size={24} />
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
            Your journey can{" "}
            <span className="font-editorial italic font-normal text-[#27C6A0]">
              start today.
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#B9F2DF]/90 font-sans leading-relaxed max-w-xl mx-auto">
            Take a gentle breath, unroll a mat, and give your mind and body the spaciousness they deserve.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button
              href={waUrl}
              isExternal
              variant="primary"
              size="lg"
              className="inline-flex items-center gap-2 shadow-xl shadow-[#27C6A0]/20"
            >
              <WhatsAppIcon size={18} />
              <span>Chat on WhatsApp</span>
            </Button>
            <Button href="/classes" variant="outline-light" size="lg">
              Explore Classes
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
