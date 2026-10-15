"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SITE_CONFIG } from "@/lib/site-config";
import { getTrialWhatsAppUrl } from "@/lib/whatsapp";
import { BotanicalIcon, MenuIcon, CloseIcon, ArrowUpRightIcon } from "@/components/common/Icons";

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const trialUrl = getTrialWhatsAppUrl();

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-[#FFFFFF]/95 backdrop-blur-md shadow-sm border-b border-[#174A3A]/10 py-3.5"
            : "bg-[#FFFFFF]/80 backdrop-blur-sm py-4 border-b border-[#174A3A]/5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <Link
            href="/"
            className="group flex items-center gap-2.5 focus:outline-none focus:ring-2 focus:ring-[#087F5B] rounded-xl p-1"
            aria-label={`${SITE_CONFIG.name} Home`}
          >
            <span className="w-9 h-9 rounded-xl bg-[#087F5B] text-[#FFFFFF] flex items-center justify-center transition-transform group-hover:scale-105 shadow-sm">
              <BotanicalIcon size={20} />
            </span>
            <div className="flex flex-col">
              <span className="font-display text-xl sm:text-2xl font-extrabold tracking-wider text-[#174A3A] leading-none">
                {SITE_CONFIG.name}
              </span>
              <span className="text-[9.5px] tracking-[0.22em] uppercase text-[#087F5B] font-bold mt-1 font-display">
                Sanctuary Studio
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links - Centered & Clean */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Main Navigation">
            {SITE_CONFIG.navLinks.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm tracking-wide font-display transition-all duration-200 relative py-1.5 focus:outline-none focus:text-[#087F5B] ${
                    isActive
                      ? "text-[#087F5B] font-bold"
                      : "text-[#202A25]/85 hover:text-[#087F5B] font-medium"
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#087F5B] rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action CTA */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href={trialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-[#087F5B] hover:bg-[#06684a] text-[#FFFFFF] text-xs uppercase tracking-wider font-display font-bold px-5 py-2.5 rounded-full transition-all duration-200 shadow-sm hover:shadow-md hover:shadow-[#087F5B]/20 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-[#087F5B] focus:ring-offset-2"
              id="desktop-book-trial-cta"
            >
              <span>Book a Trial</span>
              <ArrowUpRightIcon size={14} />
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-[#174A3A] hover:bg-[#EAF6EF] transition-colors focus:outline-none focus:ring-2 focus:ring-[#087F5B]"
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
            id="mobile-menu-toggle"
          >
            {mobileMenuOpen ? <CloseIcon size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay / Drawer */}
      <div
        className={`fixed inset-0 z-30 lg:hidden transition-opacity duration-300 ${
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!mobileMenuOpen}
      >
        <div
          className="absolute inset-0 bg-black/40 backdrop-blur-sm"
          onClick={() => setMobileMenuOpen(false)}
        />

        <div
          className={`absolute top-0 right-0 bottom-0 w-[84%] max-w-sm bg-[#FFFFFF] text-[#202A25] shadow-2xl flex flex-col justify-between p-7 pt-24 border-l border-[#174A3A]/10 transition-transform duration-300 ease-out ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col gap-1">
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#087F5B] mb-3 font-display">
              Sanctuary Menu
            </span>
            {SITE_CONFIG.navLinks.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-lg font-display py-3 border-b border-[#174A3A]/10 flex items-center justify-between transition-colors ${
                    isActive
                      ? "text-[#087F5B] font-bold"
                      : "text-[#202A25] hover:text-[#087F5B]"
                  }`}
                >
                  <span>{item.name}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-[#087F5B]" />}
                </Link>
              );
            })}
          </div>

          <div className="flex flex-col gap-4 mt-8 pt-6 border-t border-[#174A3A]/10">
            <a
              href={trialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center py-3.5 px-6 rounded-full bg-[#087F5B] text-[#FFFFFF] font-display font-bold text-sm tracking-wide shadow-md hover:bg-[#06684a] transition-colors"
            >
              Book a Free Trial
            </a>
            <div className="text-center text-xs text-[#64716A] font-sans">
              Indiranagar, Bengaluru Sanctuary
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
