import React from "react";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/site-config";
import { getGeneralWhatsAppUrl } from "@/lib/whatsapp";
import {
  BotanicalIcon,
  MapPinIcon,
  ClockIcon,
  PhoneIcon,
  MailIcon,
  WhatsAppIcon,
  InstagramIcon,
} from "@/components/common/Icons";

export const Footer: React.FC = () => {
  const waUrl = getGeneralWhatsAppUrl();

  return (
    <footer className="bg-[#174A3A] text-[#FFFFFF] pt-16 pb-12 border-t border-[#087F5B]/25 relative overflow-hidden">
      {/* Decorative botanical glows */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#087F5B]/15 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-[#C8F169]/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-white/15">
          {/* Brand Info */}
          <div className="lg:col-span-4 flex flex-col">
            <Link href="/" className="inline-flex items-center gap-3 mb-4 group">
              <span className="w-10 h-10 rounded-2xl bg-[#087F5B] text-[#FFFFFF] border border-[#C8F169]/30 flex items-center justify-center transition-transform group-hover:scale-105 shadow-sm">
                <BotanicalIcon size={22} />
              </span>
              <div>
                <span className="font-display text-2xl font-extrabold tracking-wider text-[#FFFFFF] block leading-tight">
                  {SITE_CONFIG.name}
                </span>
                <span className="text-[10px] tracking-[0.2em] uppercase text-[#C8F169] font-bold font-display">
                  Find Your Inner Balance
                </span>
              </div>
            </Link>
            <p className="text-sm text-[#EAF6EF]/80 leading-relaxed font-sans mt-2">
              {SITE_CONFIG.description}
            </p>

            <div className="flex items-center gap-3 mt-6">
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#087F5B]/40 hover:bg-[#087F5B] hover:text-[#FFFFFF] text-[#C8F169] border border-[#087F5B]/40 flex items-center justify-center transition-all duration-300"
                aria-label="Connect on WhatsApp"
              >
                <WhatsAppIcon size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#087F5B]/40 hover:bg-[#087F5B] hover:text-[#FFFFFF] text-[#C8F169] border border-[#087F5B]/40 flex items-center justify-center transition-all duration-300"
                aria-label="Follow Aaroh Yoga on Instagram"
              >
                <InstagramIcon size={20} />
              </a>
            </div>
          </div>

          {/* Quick Page Links */}
          <div className="lg:col-span-2">
            <h3 className="font-display text-base font-bold tracking-wider uppercase mb-4 text-[#C8F169]">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-sm font-sans">
              {SITE_CONFIG.navLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-[#EAF6EF]/75 hover:text-[#C8F169] transition-colors inline-block"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Yoga Classes */}
          <div className="lg:col-span-3">
            <h3 className="font-display text-base font-bold tracking-wider uppercase mb-4 text-[#C8F169]">
              Disciplines
            </h3>
            <ul className="space-y-2.5 text-sm font-sans">
              <li>
                <Link href="/classes#hatha-yoga" className="text-[#EAF6EF]/75 hover:text-[#C8F169] transition-colors">
                  Hatha Yoga & Alignment
                </Link>
              </li>
              <li>
                <Link href="/classes#vinyasa-flow" className="text-[#EAF6EF]/75 hover:text-[#C8F169] transition-colors">
                  Vinyasa Breath Flow
                </Link>
              </li>
              <li>
                <Link href="/classes#yin-restorative" className="text-[#EAF6EF]/75 hover:text-[#C8F169] transition-colors">
                  Yin & Restorative Stillness
                </Link>
              </li>
              <li>
                <Link href="/classes#guided-meditation" className="text-[#EAF6EF]/75 hover:text-[#C8F169] transition-colors">
                  Guided Pranayama & Meditation
                </Link>
              </li>
              <li>
                <Link href="/classes#yoga-for-beginners" className="text-[#EAF6EF]/75 hover:text-[#C8F169] transition-colors">
                  Yoga for Beginners Series
                </Link>
              </li>
              <li>
                <Link href="/classes#private-yoga-sessions" className="text-[#EAF6EF]/75 hover:text-[#C8F169] transition-colors">
                  Private 1-on-1 Sanctuary
                </Link>
              </li>
            </ul>
          </div>

          {/* Studio Hours & Location */}
          <div className="lg:col-span-3 flex flex-col gap-4 text-sm font-sans">
            <h3 className="font-display text-base font-bold tracking-wider uppercase mb-1 text-[#C8F169]">
              Sanctuary
            </h3>

            <div className="flex items-start gap-3 text-[#EAF6EF]/85">
              <MapPinIcon size={18} className="text-[#C8F169] shrink-0 mt-0.5" />
              <div>
                <p>{SITE_CONFIG.contact.address}</p>
                <span className="text-[11px] text-[#C8F169]/80 block mt-1">
                  (Sample demonstration location)
                </span>
              </div>
            </div>

            <div className="flex items-start gap-3 text-[#EAF6EF]/85">
              <ClockIcon size={18} className="text-[#C8F169] shrink-0 mt-0.5" />
              <div>
                <p>{SITE_CONFIG.contact.hours.weekdays}</p>
                <p className="mt-0.5">{SITE_CONFIG.contact.hours.weekends}</p>
              </div>
            </div>

            <div className="flex items-center gap-3 text-[#EAF6EF]/85">
              <MailIcon size={18} className="text-[#C8F169] shrink-0" />
              <a
                href={`mailto:${SITE_CONFIG.contact.email}`}
                className="hover:text-[#FFFFFF] transition-colors"
              >
                {SITE_CONFIG.contact.email}
              </a>
            </div>

            <div className="flex items-center gap-3 text-[#EAF6EF]/85">
              <PhoneIcon size={18} className="text-[#C8F169] shrink-0" />
              <a
                href={`tel:${SITE_CONFIG.contact.phoneRaw}`}
                className="hover:text-[#FFFFFF] transition-colors"
              >
                {SITE_CONFIG.contact.phoneDisplay}
              </a>
            </div>
          </div>
        </div>

        {/* Disclaimer and Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#EAF6EF]/60 font-sans">
          <div className="text-center md:text-left">
            <p>© 2026 {SITE_CONFIG.name}. All rights reserved.</p>
            <p className="mt-1 text-[11px] text-[#C8F169]/70">
              {SITE_CONFIG.notice}
            </p>
          </div>
          <div className="flex items-center gap-6">
            <Link href="/about" className="hover:text-[#C8F169] transition-colors">
              Philosophy
            </Link>
            <Link href="/classes" className="hover:text-[#C8F169] transition-colors">
              Classes
            </Link>
            <Link href="/pricing" className="hover:text-[#C8F169] transition-colors">
              Memberships
            </Link>
            <Link href="/contact" className="hover:text-[#C8F169] transition-colors">
              Visit Studio
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
