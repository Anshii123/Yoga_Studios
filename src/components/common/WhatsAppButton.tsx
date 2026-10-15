"use client";

import React, { useState } from "react";
import { WhatsAppIcon, CloseIcon } from "./Icons";
import { getGeneralWhatsAppUrl } from "@/lib/whatsapp";

export const WhatsAppButton: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  const waUrl = getGeneralWhatsAppUrl();

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {/* Micro popup reminder */}
      <div
        className={`hidden md:flex items-center gap-2.5 bg-[#FFFFFF] text-[#174A3A] px-4 py-2.5 rounded-2xl shadow-xl border border-[#174A3A]/10 text-xs font-display font-medium transition-all duration-300 ${
          showTooltip ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4 pointer-events-none"
        }`}
      >
        <span>Have questions? Chat directly with us</span>
        <button
          onClick={() => setShowTooltip(false)}
          className="text-[#174A3A]/60 hover:text-[#174A3A] ml-1 p-0.5"
          aria-label="Dismiss message"
        >
          <CloseIcon size={14} />
        </button>
      </div>

      {/* Floating CTA Button */}
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-[#087F5B] text-[#FFFFFF] shadow-2xl hover:shadow-[#087F5B]/35 transition-all duration-200 hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-[#087F5B]/40 border-2 border-[#FFFFFF]"
        aria-label="Chat with us on WhatsApp"
        id="floating-whatsapp-btn"
      >
        {/* Subtle breathing ripple */}
        <span className="absolute inset-0 rounded-full bg-[#087F5B] animate-ping opacity-25 pointer-events-none" />
        
        {/* WhatsApp Icon */}
        <WhatsAppIcon size={28} className="text-[#FFFFFF] transition-colors" />

        {/* Lime indicator dot */}
        <span className="absolute top-1 right-1 w-3.5 h-3.5 rounded-full bg-[#C8F169] border-2 border-[#087F5B]" />
      </a>
    </div>
  );
};
