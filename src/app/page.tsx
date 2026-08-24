import { ClassCarousel } from "@/components/akbar-gym/ClassCarousel";
import { Community } from "@/components/akbar-gym/Community";
import { Footer } from "@/components/akbar-gym/Footer";
import { SocialFollow } from "@/components/akbar-gym/SocialFollow";
import { Hero } from "@/components/akbar-gym/Hero";
import { Inspired } from "@/components/akbar-gym/Inspired";
import { Locations } from "@/components/akbar-gym/Locations";
import { Membership } from "@/components/akbar-gym/Membership";
import { MobileStickyCTA } from "@/components/akbar-gym/MobileStickyCTA";
import { Navbar } from "@/components/akbar-gym/Navbar";
import { SkipToContent } from "@/components/akbar-gym/SkipToContent";
import { PersonalTraining } from "@/components/akbar-gym/PersonalTraining";
import { FindGym } from "@/components/akbar-gym/FindGym";
import { SideRail, ChatFab } from "@/components/akbar-gym/SideRail";
import { Spotlight } from "@/components/akbar-gym/Spotlight";
import { Testimonials } from "@/components/akbar-gym/Testimonials";
import { SITE, WHATSAPP_DISPLAY, WHATSAPP_NUMBER } from "@/lib/site";

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "SportsActivityLocation",
  name: SITE.name,
  description: SITE.description,
  url: SITE.url,
  image: `${SITE.url}/images/akbar-gym/generated/hero-fb-2.webp`,
  areaServed: "South Lombok, Indonesia",
  sameAs: [SITE.instagram.url, SITE.facebook.url, SITE.tiktok.url],
  telephone: `+${WHATSAPP_NUMBER}`,
  // Addresses listed publicly via directories — confirm with owner
  department: [
    {
      "@type": "SportsActivityLocation",
      name: "Akbar Gym Sengkol",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Jl. Raya Tanak Awu, Sengkol, Kec. Pujut",
        addressLocality: "Kabupaten Lombok Tengah",
        addressRegion: "Nusa Tenggara Barat",
        addressCountry: "ID",
      },
    },
    {
      "@type": "SportsActivityLocation",
      name: "Akbar Gym Praya",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Jl. Raya Praya - Kopang No.36, Jontlak, Kec. Praya Tengah",
        addressLocality: "Kabupaten Lombok Tengah",
        addressRegion: "Nusa Tenggara Barat",
        addressCountry: "ID",
      },
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessJsonLd),
        }}
      />
      <SkipToContent />
      <Navbar />
      <main id="main">
        <Hero />
        <Spotlight />
        <FindGym />
        <Inspired />
        <ClassCarousel />
        <PersonalTraining />
        <Testimonials />
        <Membership />
        <Locations />
        <Community />
        <SocialFollow />
      </main>
      <Footer />
      <SideRail />
      <ChatFab />
      <MobileStickyCTA />
      <span className="sr-only">WhatsApp contact {WHATSAPP_DISPLAY}</span>
    </>
  );
}
