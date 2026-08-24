export const locales = ["en", "id"] as const;
export type Locale = (typeof locales)[number];

export const messages = {
  en: {
    skip: "Skip to content",
    nav: {
      membership: "Membership",
      personalTraining: "Personal Training",
      why: "Why Akbar Gym",
      classes: "Classes",
      locations: "Locations",
      profile: "Profile",
      timetable: "Timetable",
    },
    topbar: "Membership plans available. Contact us for current pricing.",
    closeAnnouncement: "Close announcement",
    joinNow: "Join Online",
    join: "Join",
    joinAkbar: "Join Akbar Gym",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    language: "Language",
    languageRegion: "ID",
    en: "EN",
    id: "ID",
    hero: {
      region: "South Lombok",
      locations: "Sengkol · Praya",
      tagline: "Train Hard. Live Strong.",
      description:
        "Akbar Gym is a fitness and training gym in South Lombok with locations in Sengkol and Praya. Focused training, real community, personal coaching.",
    },
    spotlightAria: "Explore Akbar Gym",
    learnMore: "Learn More",
    storyCards: {
      membership: {
        kicker: "Our Memberships",
        text: "Membership plans available. Contact us for current pricing.",
        alt: "Free weight training at Akbar Gym",
      },
      pt: {
        kicker: "Personal Training",
        text: "Personal training for more focused progress.",
        alt: "Personal coaching on the training floor",
      },
      locations: {
        kicker: "Locations",
        text: "Two locations. Sengkol and Praya.",
        alt: "Training floor at Akbar Gym in South Lombok",
      },
    },
    findGym: {
      title: "Find a gym near me",
      intro: "Training at Akbar Gym gives you access to:",
      points: [
        "Focused strength training and free weights",
        "Personal training with personal attention",
        "A welcoming local training community",
        "Sengkol. About 10 minutes from Kuta Mandalika",
        "A second location in Praya",
      ],
      cta: "View Locations",
      alt: "Training floor at Akbar Gym",
    },
    inspired: {
      title: "Get inspired",
      titleLine2: "Go further in training",
      intro: "Here’s what to expect when you train at Akbar Gym.",
      cta: "Discover Membership",
      pillars: [
        {
          title: "Focused training",
          text: "A practical floor for people who come to train.",
        },
        {
          title: "Personal attention",
          text: "Personalized service and personal coaching when you need it.",
        },
        {
          title: "Welcoming community",
          text: "Locals and visitors share the same space with a friendly energy.",
        },
        {
          title: "Sengkol & Praya",
          text: "Two locations in South Lombok. Sengkol and Praya.",
        },
        {
          title: "Near Mandalika",
          text: "The Sengkol gym is about 10 minutes from Kuta Mandalika.",
        },
      ],
    },
    classes: {
      title: "Strength. Coaching. Community.",
      subtitle: "The toughest part is which one to start with",
      viewClass: "View class",
      prev: "Previous",
      next: "Next",
      cta: "Discover Membership",
      tracks: {
        strength: { category: "Strength", title: "Strength Training", alt: "Strength training floor at Akbar Gym" },
        "free-weights": { category: "Free Weights", title: "Free Weights", alt: "Free weight training at Akbar Gym" },
        pt: { category: "Coaching", title: "Personal Training", alt: "Personal training session" },
        community: { category: "Community", title: "Train Together", alt: "Training community atmosphere in South Lombok" },
        sengkol: { category: "Locations", title: "Sengkol", alt: "Training at Akbar Gym Sengkol" },
        praya: { category: "Locations", title: "Praya", alt: "Training floor at Akbar Gym Praya" },
      },
    },
    pt: {
      title: "Train with focused coaching",
      body: "Prefer structure and accountability? Personal training at Akbar Gym is personal guidance on the floor. Without exaggerated promises or invented specialisations.",
      cta: "Start Your Coaching",
      alt: "Personal coaching at Akbar Gym",
    },
    stories: {
      title: "Community on camera",
      intro: "Watch training clips from {handle}.",
      play: "Play training video",
      items: {
        "reel-1": {
          alt: "Training clip at Akbar Gym",
          text: "Strength work, sessions on the floor, and the local community in South Lombok.",
        },
        "reel-2": {
          alt: "Community clip at Akbar Gym",
          text: "More from the same gym community in Sengkol and Praya.",
        },
      },
    },
    membership: {
      kicker: "Membership",
      title: "Plans that fit how you train.",
      intro:
        "Membership plans available. Contact us for current pricing. We keep rates clear and current over WhatsApp.",
      option: "Option",
      featured: "Most popular path",
      plans: {
        daily: {
          name: "Daily Pass",
          summary: "Flexible access for visitors and short term training.",
          points: [
            "Ideal for tourists and trial sessions",
            "Train for the day without commitment",
            "Ask for current daily rates",
          ],
          cta: "Ask About Daily Pass",
          alt: "Drop in training session with dumbbells at Akbar Gym",
        },
        membership: {
          name: "Membership",
          summary: "Train consistently with a monthly membership.",
          points: [
            "Built for regular training",
            "Access the Akbar Gym community",
            "Contact us for current plans",
          ],
          cta: "Ask About Membership",
          alt: "Regular training on the Akbar Gym floor",
        },
        pt: {
          name: "Personal Training",
          summary: "Personal coaching for more focused progress.",
          points: [
            "Structured guidance",
            "Personal attention",
            "Consultation available on WhatsApp",
          ],
          cta: "Ask About Personal Training",
          alt: "Personal coaching during a personal training session",
        },
      },
    },
    locations: {
      kicker: "Locations",
      title: "Two gyms in South Lombok",
      intro: "Two locations. Sengkol and Praya. Message us for the best route and visit details.",
      confirm: "Confirm on WhatsApp before visiting",
      maps: "Google Maps",
      directions: "WhatsApp Directions",
      sengkol: {
        region: "South Lombok",
        note: "Approximately 10 minutes from Kuta Mandalika.",
        alt: "Training floor atmosphere at Akbar Gym",
      },
      praya: {
        region: "Central Lombok",
        note: "Convenient location for members around Praya.",
        alt: "Strength training area inside Akbar Gym",
      },
    },
    community: {
      kicker: "Community",
      title: "More than a place to train.",
      intro: "Real people. Real sessions. Follow the atmosphere on {handle}.",
      alts: {
        group: "Akbar Gym community group on the training floor",
        women: "Women training with dumbbells at Akbar Gym",
        pose: "Members posing after a session at Akbar Gym",
      },
    },
    social: {
      title: "Follow us on social",
    },
    footer: {
      stay: "Stay up to date",
      stayBody:
        "Message us on WhatsApp for membership, daily pass, and personal training details.",
      whatsappUs: "WhatsApp us",
      followFloor: "Follow the floor",
      locationsLine: "Locations: Sengkol · Praya",
      rights: "All rights reserved.",
      dailyPass: "Daily Pass",
    },
    chatWhatsApp: "Chat on WhatsApp",
    heroAlts: {
      "community-pose": "Athletes training together at Akbar Gym",
      welcome: "Akbar Gym members and trainer posing together",
      community: "Akbar Gym members in front of the gym wall",
    },
  },
  id: {
    skip: "Lewati ke konten",
    nav: {
      membership: "Membership",
      personalTraining: "Personal Training",
      why: "Mengapa Akbar Gym",
      classes: "Kelas",
      locations: "Lokasi",
      profile: "Profil",
      timetable: "Jadwal",
    },
    topbar: "Paket membership tersedia. Hubungi kami untuk harga terkini.",
    closeAnnouncement: "Tutup pengumuman",
    joinNow: "Daftar Online",
    join: "Daftar",
    joinAkbar: "Gabung Akbar Gym",
    openMenu: "Buka menu",
    closeMenu: "Tutup menu",
    language: "Bahasa",
    languageRegion: "ID",
    en: "EN",
    id: "ID",
    hero: {
      region: "Lombok Selatan",
      locations: "Sengkol · Praya",
      tagline: "Train Hard. Live Strong.",
      description:
        "Akbar Gym adalah gym latihan di Lombok Selatan dengan lokasi di Sengkol dan Praya. Latihan terfokus, komunitas nyata, dan coaching personal.",
    },
    spotlightAria: "Jelajahi Akbar Gym",
    learnMore: "Selengkapnya",
    storyCards: {
      membership: {
        kicker: "Membership Kami",
        text: "Paket membership tersedia. Hubungi kami untuk harga terkini.",
        alt: "Latihan free weight di Akbar Gym",
      },
      pt: {
        kicker: "Personal Training",
        text: "Latihan satu lawan satu untuk progres yang lebih terarah.",
        alt: "Coaching satu lawan satu di lantai latihan",
      },
      locations: {
        kicker: "Lokasi",
        text: "Dua lokasi. Sengkol dan Praya.",
        alt: "Lantai latihan Akbar Gym di Lombok Selatan",
      },
    },
    findGym: {
      title: "Cari gym terdekat",
      intro: "Latihan di Akbar Gym memberi akses ke:",
      points: [
        "Latihan strength dan free weights yang terfokus",
        "Personal training dengan pendampingan satu lawan satu",
        "Komunitas latihan lokal yang ramah",
        "Sengkol. Sekitar 10 menit dari Kuta Mandalika",
        "Lokasi kedua di Praya",
      ],
      cta: "Lihat Lokasi",
      alt: "Lantai latihan di Akbar Gym",
    },
    inspired: {
      title: "Mulai terinspirasi",
      titleLine2: "Lebih jauh dalam latihan",
      intro: "Ini yang bisa kamu harapkan saat latihan di Akbar Gym.",
      cta: "Lihat Membership",
      pillars: [
        {
          title: "Latihan terfokus",
          text: "Lantai yang praktis untuk orang yang datang untuk latihan.",
        },
        {
          title: "Perhatian personal",
          text: "Layanan personal dan coaching satu lawan satu saat kamu membutuhkannya.",
        },
        {
          title: "Komunitas yang ramah",
          text: "Warga lokal dan pengunjung berbagi ruang yang sama dengan energi yang hangat.",
        },
        {
          title: "Sengkol & Praya",
          text: "Dua lokasi di Lombok Selatan. Sengkol dan Praya.",
        },
        {
          title: "Dekat Mandalika",
          text: "Gym Sengkol sekitar 10 menit dari Kuta Mandalika.",
        },
      ],
    },
    classes: {
      title: "Strength. Coaching. Community.",
      subtitle: "Yang tersulit: memilih mulai dari mana",
      viewClass: "Lihat kelas",
      prev: "Sebelumnya",
      next: "Berikutnya",
      cta: "Lihat Membership",
      tracks: {
        strength: { category: "Strength", title: "Latihan Strength", alt: "Lantai strength di Akbar Gym" },
        "free-weights": { category: "Free Weights", title: "Free Weights", alt: "Latihan free weight di Akbar Gym" },
        pt: { category: "Coaching", title: "Personal Training", alt: "Personal training satu lawan satu" },
        community: { category: "Komunitas", title: "Latihan Bareng", alt: "Suasana komunitas latihan di Lombok Selatan" },
        sengkol: { category: "Lokasi", title: "Sengkol", alt: "Latihan di Akbar Gym Sengkol" },
        praya: { category: "Lokasi", title: "Praya", alt: "Lantai latihan Akbar Gym Praya" },
      },
    },
    pt: {
      title: "Latihan dengan coaching terfokus",
      body: "Butuh struktur dan tanggung jawab? Personal training di Akbar Gym adalah pendampingan satu lawan satu di lantai. Tanpa janji berlebihan atau spesialisasi yang fiktif.",
      cta: "Mulai Coaching",
      alt: "Coaching satu lawan satu di Akbar Gym",
    },
    stories: {
      title: "Komunitas di kamera",
      intro: "Tonton klip latihan dari {handle}.",
      play: "Putar video latihan",
      items: {
        "reel-1": {
          alt: "Klip latihan di Akbar Gym",
          text: "Latihan strength, sesi di lantai, dan komunitas lokal di Lombok Selatan.",
        },
        "reel-2": {
          alt: "Klip komunitas di Akbar Gym",
          text: "Lebih banyak dari komunitas gym yang sama di Sengkol dan Praya.",
        },
      },
    },
    membership: {
      kicker: "Membership",
      title: "Paket yang sesuai cara kamu latihan.",
      intro:
        "Paket membership tersedia. Hubungi kami untuk harga terkini. Tarif kami jelas dan selalu dikonfirmasi lewat WhatsApp.",
      option: "Pilihan",
      featured: "Paling banyak dipilih",
      plans: {
        daily: {
          name: "Daily Pass",
          summary: "Akses fleksibel untuk pengunjung dan latihan jangka pendek.",
          points: [
            "Cocok untuk wisatawan dan sesi percobaan",
            "Latihan hari itu tanpa komitmen",
            "Tanyakan tarif harian terkini",
          ],
          cta: "Tanya Daily Pass",
          alt: "Sesi drop in dengan dumbbell di Akbar Gym",
        },
        membership: {
          name: "Membership",
          summary: "Latihan rutin dengan membership bulanan.",
          points: [
            "Untuk latihan yang konsisten",
            "Akses komunitas Akbar Gym",
            "Hubungi kami untuk paket terkini",
          ],
          cta: "Tanya Membership",
          alt: "Latihan rutin di lantai Akbar Gym",
        },
        pt: {
          name: "Personal Training",
          summary: "Coaching satu lawan satu untuk progres yang lebih terarah.",
          points: [
            "Panduan yang terstruktur",
            "Perhatian personal",
            "Konsultasi tersedia di WhatsApp",
          ],
          cta: "Tanya Personal Training",
          alt: "Coaching satu lawan satu saat sesi personal training",
        },
      },
    },
    locations: {
      kicker: "Lokasi",
      title: "Dua gym di Lombok Selatan",
      intro: "Dua lokasi. Sengkol dan Praya. Kirim pesan untuk rute terbaik dan detail kunjungan.",
      confirm: "Konfirmasi di WhatsApp sebelum berkunjung",
      maps: "Google Maps",
      directions: "Arah via WhatsApp",
      sengkol: {
        region: "Lombok Selatan",
        note: "Sekitar 10 menit dari Kuta Mandalika.",
        alt: "Suasana lantai latihan di Akbar Gym",
      },
      praya: {
        region: "Lombok Tengah",
        note: "Lokasi yang nyaman untuk member di sekitar Praya.",
        alt: "Area strength di dalam Akbar Gym",
      },
    },
    community: {
      kicker: "Komunitas",
      title: "Lebih dari tempat latihan.",
      intro: "Orang nyata. Sesi nyata. Ikuti suasana di {handle}.",
      alts: {
        group: "Komunitas Akbar Gym di lantai latihan",
        women: "Perempuan latihan dengan dumbbell di Akbar Gym",
        pose: "Member berpose setelah sesi di Akbar Gym",
      },
    },
    social: {
      title: "Ikuti kami di sosial media",
    },
    footer: {
      stay: "Tetap terhubung",
      stayBody:
        "Kirim pesan WhatsApp untuk detail membership, daily pass, dan personal training.",
      whatsappUs: "WhatsApp kami",
      followFloor: "Ikuti lantai latihan",
      locationsLine: "Lokasi: Sengkol · Praya",
      rights: "Hak cipta dilindungi.",
      dailyPass: "Daily Pass",
    },
    chatWhatsApp: "Chat di WhatsApp",
    heroAlts: {
      "community-pose": "Atlet latihan bersama di Akbar Gym",
      welcome: "Member dan pelatih Akbar Gym berpose bersama",
      community: "Member Akbar Gym di depan dinding gym",
    },
  },
} as const;

export type Messages = (typeof messages)[Locale];
