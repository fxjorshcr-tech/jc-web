import { site } from "@/data/site";

export const defaultWhatsAppMessage = "Hi JC, I'd like to ask about a tour in Montezuma.";

/** wa.me deep link with an optional pre-filled message. */
export function whatsappUrl(message: string = defaultWhatsAppMessage) {
  return `https://wa.me/${site.whatsapp.number}?text=${encodeURIComponent(message)}`;
}
