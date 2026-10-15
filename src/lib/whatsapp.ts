import { SITE_CONFIG } from "./site-config";

/**
 * Builds a direct wa.me URL with clean URL encoding.
 */
export function buildWhatsAppUrl(message: string): string {
  const cleanNumber = SITE_CONFIG.whatsappNumber.replace(/\D/g, "");
  const encodedText = encodeURIComponent(message.trim());
  return `https://wa.me/${cleanNumber}?text=${encodedText}`;
}

export function getGeneralWhatsAppUrl(): string {
  return buildWhatsAppUrl(
    "Hi AAROH YOGA, I would like to know more about your yoga classes, trial sessions, and studio timings."
  );
}

export function getTrialWhatsAppUrl(preferredClass?: string): string {
  const classText = preferredClass ? ` for ${preferredClass}` : "";
  return buildWhatsAppUrl(
    `Hello AAROH YOGA, I would love to book a complimentary trial session${classText}. Could you share the upcoming available slots?`
  );
}

export function getClassWhatsAppUrl(className: string): string {
  return buildWhatsAppUrl(
    `Hi AAROH YOGA, I am interested in joining the ${className} sessions. Could you please share more details about the schedule and level?`
  );
}

export function getPricingWhatsAppUrl(planName: string, price: string): string {
  return buildWhatsAppUrl(
    `Namaste AAROH YOGA, I would like to enquire about the "${planName}" plan (${price}). Please guide me through joining.`
  );
}

export function getPrivateSessionWhatsAppUrl(): string {
  return buildWhatsAppUrl(
    "Hi AAROH YOGA, I am looking for one-on-one Private Yoga sessions tailored to my schedule and wellness goals. How do we get started?"
  );
}

export function getContactFormWhatsAppUrl(details: {
  fullName: string;
  email: string;
  phone?: string;
  preferredClass?: string;
  message: string;
}): string {
  const parts = [
    `Namaste AAROH YOGA, my name is ${details.fullName}.`,
    details.preferredClass ? `• Interested Class: ${details.preferredClass}` : "",
    details.email ? `• Email: ${details.email}` : "",
    details.phone ? `• Phone: ${details.phone}` : "",
    `• Note: ${details.message}`,
  ].filter(Boolean);

  return buildWhatsAppUrl(parts.join("\n"));
}
