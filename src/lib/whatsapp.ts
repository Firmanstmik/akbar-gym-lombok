import { WHATSAPP_NUMBER, WHATSAPP_VERIFIED } from "./site";
import type { Locale } from "@/i18n/messages";

export type WhatsAppIntent =
  | "join"
  | "daily"
  | "membership"
  | "personal-training"
  | "consultation"
  | "general"
  | "location-sengkol"
  | "location-praya";

const MESSAGES: Record<Locale, Record<WhatsAppIntent, string>> = {
  id: {
    join: "Hi Akbar Gym, saya ingin mencoba latihan di Akbar Gym. Bisa info caranya?",
    daily:
      "Hi Akbar Gym, saya tertarik dengan daily pass. Bisa info akses dan harga terkini?",
    membership:
      "Hi Akbar Gym, saya tertarik dengan membership. Bisa info paket yang tersedia?",
    "personal-training":
      "Hi Akbar Gym, saya ingin tanya tentang Personal Training. Bisa dibantu?",
    consultation:
      "Hi Akbar Gym, saya ingin booking konsultasi Personal Training. Kapan tersedia?",
    general: "Hi Akbar Gym, saya ingin info lebih lanjut tentang gym.",
    "location-sengkol":
      "Hi Akbar Gym, saya mau tanya lokasi Sengkol dan jam kunjungan. Bisa dibantu?",
    "location-praya":
      "Hi Akbar Gym, saya mau tanya lokasi Praya dan jam kunjungan. Bisa dibantu?",
  },
  en: {
    join: "Hi Akbar Gym, I’d like to start training. Could you share how to join?",
    daily:
      "Hi Akbar Gym, I’m interested in a daily pass. Could you share current access and rates?",
    membership:
      "Hi Akbar Gym, I’m interested in membership. Could you share the current plans?",
    "personal-training":
      "Hi Akbar Gym, I’d like to ask about Personal Training. Can you help?",
    consultation:
      "Hi Akbar Gym, I’d like to book a Personal Training consultation. When are you available?",
    general: "Hi Akbar Gym, I’d like more information about the gym.",
    "location-sengkol":
      "Hi Akbar Gym, I’d like details for the Sengkol location and visit hours. Can you help?",
    "location-praya":
      "Hi Akbar Gym, I’d like details for the Praya location and visit hours. Can you help?",
  },
};

export function getWhatsAppUrl(
  intent: WhatsAppIntent = "general",
  locale: Locale = "id",
): string | null {
  if (!WHATSAPP_VERIFIED || !WHATSAPP_NUMBER || WHATSAPP_NUMBER.includes("REPLACE")) {
    return null;
  }
  const text = encodeURIComponent(MESSAGES[locale][intent]);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
}

export function getWhatsAppMessage(intent: WhatsAppIntent, locale: Locale = "id"): string {
  return MESSAGES[locale][intent];
}
