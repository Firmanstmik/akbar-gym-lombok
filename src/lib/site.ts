/**
 * Central site configuration for Akbar Gym.
 * Update WhatsApp and contact details here only.
 */

export const SITE = {
  name: "Akbar Gym",
  legalName: "Akbar Gym",
  tagline: "Train Hard. Live Strong.",
  supportingLine: "South Lombok's training community.",
  description:
    "Akbar Gym is a fitness and training gym in South Lombok with locations in Sengkol and Praya. Focused training, real community, personal coaching.",
  url: "https://akbargym.local", // replace with production domain
  locale: "id_ID",
  region: "South Lombok, Indonesia",
  instagram: {
    handle: "@akbargym_",
    url: "https://www.instagram.com/akbargym_/",
  },
  facebook: {
    name: "Akbar Gym",
    // Public Facebook profile titled “Akbar Gym” (Praya / Pujut), ~6.8k followers
    url: "https://www.facebook.com/patoss.rembitan/",
  },
  tiktok: {
    // No official TikTok profile found; Discover page for the gym name
    handle: "akbargym",
    url: "https://www.tiktok.com/discover/akbargym",
  },
} as const;

export const SOCIAL_LINKS = [
  {
    id: "instagram" as const,
    label: "Instagram",
    handle: SITE.instagram.handle,
    url: SITE.instagram.url,
  },
  {
    id: "facebook" as const,
    label: "Facebook",
    handle: SITE.facebook.name,
    url: SITE.facebook.url,
  },
  {
    id: "tiktok" as const,
    label: "TikTok",
    handle: SITE.tiktok.handle,
    url: SITE.tiktok.url,
  },
] as const;

/**
 * WhatsApp number from gym wall signage visible in public Akbar Gym photos
 * (Discover Lombok Property article media, Feb 2024).
 * Format: country code + number, digits only.
 * Owner should re-confirm before production launch.
 */
export const WHATSAPP_NUMBER = "6281917154563";
export const WHATSAPP_DISPLAY = "0819-1715-4563";
export const WHATSAPP_VERIFIED = true;

export const NAV_LINKS = [
  { href: "#membership", key: "membership" },
  { href: "#personal-training", key: "personalTraining" },
  { href: "#about", key: "why" },
  { href: "#training-tracks", key: "classes" },
  { href: "#location", key: "locations" },
] as const;
