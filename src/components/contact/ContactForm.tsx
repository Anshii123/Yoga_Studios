"use client";

import React, { useState } from "react";
import { Button } from "@/components/common/Button";
import { CheckIcon, WhatsAppIcon, MailIcon } from "@/components/common/Icons";
import { getContactFormWhatsAppUrl } from "@/lib/whatsapp";
import { SITE_CONFIG } from "@/lib/site-config";

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  preferredClass: string;
  contactMethod: "whatsapp" | "email";
  message: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  message?: string;
}

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    preferredClass: "General Enquiry",
    contactMethod: "whatsapp",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [actionUrl, setActionUrl] = useState<string>("");

  const validate = (): boolean => {
    const errs: FormErrors = {};

    if (!formData.fullName.trim()) {
      errs.fullName = "Please provide your full name.";
    }

    if (!formData.email.trim()) {
      errs.email = "Please provide your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = "Please enter a valid email address.";
    }

    if (!formData.message.trim()) {
      errs.message = "Please share a brief note or question.";
    } else if (formData.message.trim().length < 10) {
      errs.message = "Please provide at least 10 characters so we can assist you.";
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    if (formData.contactMethod === "whatsapp") {
      const waUrl = getContactFormWhatsAppUrl({
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        preferredClass: formData.preferredClass,
        message: formData.message,
      });
      setActionUrl(waUrl);
      setIsSubmitted(true);
      window.open(waUrl, "_blank", "noopener,noreferrer");
    } else {
      const subject = encodeURIComponent(
        `Yoga Enquiry: ${formData.preferredClass} - ${formData.fullName}`
      );
      const body = encodeURIComponent(
        `Hello AAROH YOGA,\n\nName: ${formData.fullName}\nEmail: ${formData.email}\nPhone: ${
          formData.phone || "N/A"
        }\nPreferred Class: ${formData.preferredClass}\n\nMessage:\n${formData.message}`
      );
      const mailtoUrl = `mailto:${SITE_CONFIG.contact.email}?subject=${subject}&body=${body}`;
      setActionUrl(mailtoUrl);
      setIsSubmitted(true);
      window.location.href = mailtoUrl;
    }
  };

  return (
    <div className="bg-[#F9FCFA] p-8 sm:p-10 rounded-[2rem] border border-[#27C6A0]/25 shadow-sm">
      <div className="mb-6">
        <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-[#103C3A]">
          Send an Enquiry
        </h3>
        <p className="mt-1 text-sm text-[#243431]/75 font-sans">
          Fill out the details below. As a client-side demonstration website, submitting this form
          will prepare your message and launch WhatsApp or your default email application.
        </p>
      </div>

      {isSubmitted ? (
        <div className="p-6 rounded-2xl bg-[#E7F5F0] border border-[#27C6A0]/40 text-[#103C3A]">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-8 h-8 rounded-full bg-[#103C3A] text-[#27C6A0] flex items-center justify-center">
              <CheckIcon size={18} />
            </span>
            <h4 className="font-display text-xl font-bold">Message Prepared!</h4>
          </div>
          <p className="text-sm font-sans text-[#243431]/85 mb-4">
            Thank you, {formData.fullName}. Your enquiry has been prepared for{" "}
            {formData.contactMethod === "whatsapp" ? "WhatsApp" : "Email"}. If the window didn&apos;t open
            automatically, click below:
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href={actionUrl}
              target={formData.contactMethod === "whatsapp" ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#103C3A] text-[#F9FCFA] text-xs font-display font-bold px-5 py-2.5 rounded-full hover:bg-[#092B2C] transition-colors"
            >
              {formData.contactMethod === "whatsapp" ? <WhatsAppIcon size={16} /> : <MailIcon size={16} />}
              <span>Open in {formData.contactMethod === "whatsapp" ? "WhatsApp" : "Email"}</span>
            </a>
            <button
              onClick={() => {
                setIsSubmitted(false);
                setFormData({
                  fullName: "",
                  email: "",
                  phone: "",
                  preferredClass: "General Enquiry",
                  contactMethod: "whatsapp",
                  message: "",
                });
              }}
              className="text-xs text-[#103C3A] underline hover:text-[#27C6A0] py-2 px-3 font-display"
            >
              Send Another Note
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="space-y-5 font-sans">
          {/* Full Name */}
          <div>
            <label htmlFor="fullName" className="block text-xs font-display font-bold uppercase tracking-wider text-[#103C3A] mb-1.5">
              Full Name <span className="text-[#FF6B61]">*</span>
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              placeholder="e.g. Priya Sharma"
              className={`w-full px-4 py-3 rounded-xl bg-white border text-sm text-[#243431] placeholder:text-[#243431]/40 focus:outline-none focus:ring-2 focus:ring-[#27C6A0] transition-all ${
                errors.fullName ? "border-[#FF6B61] bg-red-50/20" : "border-[#103C3A]/20"
              }`}
            />
            {errors.fullName && (
              <span className="text-xs text-[#FF6B61] mt-1 block">{errors.fullName}</span>
            )}
          </div>

          {/* Email & Phone Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="email" className="block text-xs font-display font-bold uppercase tracking-wider text-[#103C3A] mb-1.5">
                Email Address <span className="text-[#FF6B61]">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="priya@example.com"
                className={`w-full px-4 py-3 rounded-xl bg-white border text-sm text-[#243431] placeholder:text-[#243431]/40 focus:outline-none focus:ring-2 focus:ring-[#27C6A0] transition-all ${
                  errors.email ? "border-[#FF6B61] bg-red-50/20" : "border-[#103C3A]/20"
                }`}
              />
              {errors.email && (
                <span className="text-xs text-[#FF6B61] mt-1 block">{errors.email}</span>
              )}
            </div>

            <div>
              <label htmlFor="phone" className="block text-xs font-display font-bold uppercase tracking-wider text-[#103C3A] mb-1.5">
                Phone Number <span className="text-[#243431]/40 font-normal">(Optional)</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="+91 98765 43210"
                className="w-full px-4 py-3 rounded-xl bg-white border border-[#103C3A]/20 text-sm text-[#243431] placeholder:text-[#243431]/40 focus:outline-none focus:ring-2 focus:ring-[#27C6A0] transition-all"
              />
            </div>
          </div>

          {/* Preferred Class & Contact Method */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="preferredClass" className="block text-xs font-display font-bold uppercase tracking-wider text-[#103C3A] mb-1.5">
                Interested In
              </label>
              <select
                id="preferredClass"
                name="preferredClass"
                value={formData.preferredClass}
                onChange={(e) => setFormData({ ...formData, preferredClass: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-white border border-[#103C3A]/20 text-sm text-[#243431] focus:outline-none focus:ring-2 focus:ring-[#27C6A0] transition-all cursor-pointer"
              >
                <option value="General Enquiry">General Studio Enquiry</option>
                <option value="Complimentary Trial">Complimentary Trial Session</option>
                <option value="Hatha Yoga">Hatha Yoga & Alignment</option>
                <option value="Vinyasa Flow">Vinyasa Flow</option>
                <option value="Yin & Restorative">Yin & Restorative Stillness</option>
                <option value="Guided Meditation">Guided Pranayama & Meditation</option>
                <option value="Yoga for Beginners">Yoga for Beginners Series</option>
                <option value="Private Yoga Sessions">Private 1-on-1 Sessions</option>
                <option value="Monthly Memberships">Membership Plans</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-display font-bold uppercase tracking-wider text-[#103C3A] mb-1.5">
                Preferred Connection
              </label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, contactMethod: "whatsapp" })}
                  className={`py-2.5 px-3 rounded-xl border text-xs font-display font-semibold flex items-center justify-center gap-1.5 transition-all ${
                    formData.contactMethod === "whatsapp"
                      ? "bg-[#103C3A] text-[#F9FCFA] border-[#103C3A] shadow-sm"
                      : "bg-white text-[#243431] border-[#103C3A]/20 hover:border-[#27C6A0]"
                  }`}
                >
                  <WhatsAppIcon size={14} className={formData.contactMethod === "whatsapp" ? "text-[#27C6A0]" : ""} />
                  <span>WhatsApp</span>
                </button>
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, contactMethod: "email" })}
                  className={`py-2.5 px-3 rounded-xl border text-xs font-display font-semibold flex items-center justify-center gap-1.5 transition-all ${
                    formData.contactMethod === "email"
                      ? "bg-[#103C3A] text-[#F9FCFA] border-[#103C3A] shadow-sm"
                      : "bg-white text-[#243431] border-[#103C3A]/20 hover:border-[#27C6A0]"
                  }`}
                >
                  <MailIcon size={14} />
                  <span>Email</span>
                </button>
              </div>
            </div>
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-xs font-display font-bold uppercase tracking-wider text-[#103C3A] mb-1.5">
              Your Message or Questions <span className="text-[#FF6B61]">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Tell us a little about your prior movement history, schedule preferences, or questions..."
              className={`w-full px-4 py-3 rounded-xl bg-white border text-sm text-[#243431] placeholder:text-[#243431]/40 focus:outline-none focus:ring-2 focus:ring-[#27C6A0] transition-all resize-none ${
                errors.message ? "border-[#FF6B61] bg-red-50/20" : "border-[#103C3A]/20"
              }`}
            />
            {errors.message && (
              <span className="text-xs text-[#FF6B61] mt-1 block">{errors.message}</span>
            )}
          </div>

          <div className="pt-2">
            <Button type="submit" variant="primary" size="lg" className="w-full shadow-lg shadow-[#27C6A0]/20">
              <span>Continue via {formData.contactMethod === "whatsapp" ? "WhatsApp" : "Email"}</span>
            </Button>
            <p className="text-[11px] text-[#243431]/60 text-center mt-2.5">
              Zero spam. We respect your privacy and only respond directly to your enquiry.
            </p>
          </div>
        </form>
      )}
    </div>
  );
};
