export const heroSlides = [
  {
    id: "community-pose",
    src: "/images/akbar-gym/generated/hero-fb-2.webp",
    alt: "Athletes training together at Akbar Gym",
  },
  {
    id: "welcome",
    src: "/images/akbar-gym/generated/hero-fb-welcome.webp",
    alt: "Akbar Gym members and trainer posing together",
  },
  {
    id: "community",
    src: "/images/akbar-gym/generated/hero-fb-3.webp",
    alt: "Akbar Gym members in front of the gym wall",
  },
] as const;

export const storyCards = [
  {
    id: "membership",
    kicker: "Our Memberships",
    title: "Plans that fit how you train.",
    text: "Membership plans available. Contact us for current pricing.",
    href: "#membership",
    cta: "Learn More",
    image: "/images/akbar-gym/generated/card-membership.webp",
    alt: "Free weight training at Akbar Gym",
  },
  {
    id: "pt",
    kicker: "Personal Training",
    title: "Focused coaching. Personal attention.",
    text: "Personal training for more focused progress.",
    href: "#personal-training",
    cta: "Learn More",
    image: "/images/akbar-gym/generated/card-personal-training.webp",
    alt: "Personal coaching on the training floor",
  },
  {
    id: "locations",
    kicker: "Locations",
    title: "Train in South Lombok.",
    text: "Two locations, Sengkol and Praya.",
    href: "#location",
    cta: "View Locations",
    image: "/images/akbar-gym/generated/card-locations.webp",
    alt: "Training floor at Akbar Gym in South Lombok",
  },
] as const;

export const trainingTracks = [
  {
    id: "strength",
    category: "Strength",
    title: "Strength Training",
    href: "#training-tracks",
    image: "/images/akbar-gym/generated/hero-cinematic.webp",
    alt: "Strength training floor at Akbar Gym",
  },
  {
    id: "free-weights",
    category: "Free Weights",
    title: "Free Weights",
    href: "#training-tracks",
    image: "/images/akbar-gym/generated/card-membership.webp",
    alt: "Free weight training at Akbar Gym",
  },
  {
    id: "pt",
    category: "Coaching",
    title: "Personal Training",
    href: "#personal-training",
    image: "/images/akbar-gym/generated/card-personal-training.webp",
    alt: "Personal personal training",
  },
  {
    id: "community",
    category: "Community",
    title: "Train Together",
    href: "#about",
    image: "/images/akbar-gym/generated/card-locations.webp",
    alt: "Training community atmosphere in South Lombok",
  },
  {
    id: "sengkol",
    category: "Locations",
    title: "Sengkol",
    href: "#location",
    image: "/images/akbar-gym/generated/find-gym.webp",
    alt: "Training at Akbar Gym Sengkol",
  },
  {
    id: "praya",
    category: "Locations",
    title: "Praya",
    href: "#location",
    image: "/images/akbar-gym/generated/card-praya.webp",
    alt: "Training floor at Akbar Gym Praya",
  },
] as const;

export const communityStories = [
  {
    id: "reel-1",
    image: "/images/akbar-gym/generated/reel-1-poster.webp",
    video: "/videos/akbar-gym/reel-1.mp4",
    alt: "Training clip at Akbar Gym",
    text: "Strength work, sessions on the floor, and the local community in South Lombok.",
    name: "Akbar Gym",
    role: "@akbargym_",
  },
  {
    id: "reel-2",
    image: "/images/akbar-gym/generated/reel-2-poster.webp",
    video: "/videos/akbar-gym/reel-2.mp4",
    alt: "Community clip at Akbar Gym",
    text: "More from the same gym community in Sengkol and Praya.",
    name: "Akbar Gym",
    role: "@akbargym_",
  },
] as const;

export const trustFacts = [
  {
    label: "South Lombok",
    detail: "Local training community",
  },
  {
    label: "Sengkol",
    detail: "~10 min from Kuta Mandalika",
  },
  {
    label: "Praya",
    detail: "Central Lombok location",
  },
  {
    label: "Personal Training",
    detail: "Focused personal coaching",
  },
] as const;

export const facilities = [
  {
    id: "strength",
    title: "Strength Training",
    description:
      "Machines and cable systems for focused strength work in a practical training floor.",
    image: "/images/akbar-gym/facilities/machines.webp",
    alt: "Members training on strength machines inside Akbar Gym",
  },
  {
    id: "free-weights",
    title: "Free Weights",
    description:
      "Dumbbells and free-weight space for members who want control and progression.",
    image: "/images/akbar-gym/facilities/free-weights.webp",
    alt: "Akbar Gym community posing in the free-weight training area",
  },
  {
    id: "environment",
    title: "Training Environment",
    description:
      "Dark, focused interiors with mirrors, rubber flooring, and a serious training atmosphere.",
    image: "/images/akbar-gym/hero/brand-interior.webp",
    alt: "Akbar Gym interior with brand banner and strength equipment",
  },
] as const;

export const membershipPlans = [
  {
    id: "daily",
    name: "Daily Pass",
    summary: "Flexible access for visitors and short-term training.",
    points: [
      "Ideal for tourists and trial sessions",
      "Train for the day without commitment",
      "Ask for current daily rates",
    ],
    cta: "Ask About Daily Pass",
    intent: "daily" as const,
    featured: false,
    image: "/images/akbar-gym/generated/plan-daily-premium.webp",
    alt: "Drop-in training session with dumbbells at Akbar Gym",
  },
  {
    id: "membership",
    name: "Membership",
    summary: "Train consistently with a monthly membership.",
    points: [
      "Built for regular training",
      "Access the Akbar Gym community",
      "Contact us for current plans",
    ],
    cta: "Ask About Membership",
    intent: "membership" as const,
    featured: true,
    image: "/images/akbar-gym/generated/plan-membership-premium.webp",
    alt: "Regular training on the Akbar Gym floor",
  },
  {
    id: "pt",
    name: "Personal Training",
    summary: "Personal coaching for more focused progress.",
    points: [
      "Structured guidance",
      "Personal attention",
      "Consultation available on WhatsApp",
    ],
    cta: "Ask About Personal Training",
    intent: "personal-training" as const,
    featured: false,
    image: "/images/akbar-gym/generated/plan-pt-premium.webp",
    alt: "Personal coaching during a personal training session",
  },
] as const;

export const locations = [
  {
    id: "sengkol",
    name: "Sengkol",
    region: "South Lombok",
    note: "Approximately 10 minutes from Kuta Mandalika.",
    // Directory-listed address — confirm with owner before treating as official
    addressListed:
      "Jl. Raya Tanak Awu, Sengkol, Kec. Pujut, Kabupaten Lombok Tengah",
    addressStatus: "listed" as const,
    mapsQuery: "Akbar Fitness Sengkol Pujut Lombok Tengah",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Akbar+Fitness+Sengkol+Pujut+Lombok+Tengah",
    intent: "location-sengkol" as const,
    image: "/images/akbar-gym/facilities/free-weights.webp",
    alt: "Training floor atmosphere at Akbar Gym",
  },
  {
    id: "praya",
    name: "Praya",
    region: "Central Lombok",
    note: "Convenient location for members around Praya.",
    addressListed:
      "Jl. Raya Praya Kopang No.36, Jontlak, Kec. Praya Tengah, Kabupaten Lombok Tengah",
    addressStatus: "listed" as const,
    mapsQuery: "Akbar Gym Praya Kopang Lombok Tengah",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Akbar+Gym+Praya+Kopang+Lombok+Tengah",
    intent: "location-praya" as const,
    image: "/images/akbar-gym/facilities/machines.webp",
    alt: "Strength training area inside Akbar Gym",
  },
] as const;

export const galleryItems = [
  {
    id: "g1",
    src: "/images/akbar-gym/hero/brand-interior.webp",
    alt: "Akbar Gym interior with orange brand banner and strength machines",
    span: "tall" as const,
  },
  {
    id: "g2",
    src: "/images/akbar-gym/community/welcome-group-wide.webp",
    alt: "Akbar Gym members and trainer posing together in the gym",
    span: "wide" as const,
  },
  {
    id: "g3",
    src: "/images/akbar-gym/community/athletes.webp",
    alt: "Athletes posing at Akbar Gym under the brand signage",
    span: "square" as const,
  },
  {
    id: "g4",
    src: "/images/akbar-gym/community/women-training-wide.webp",
    alt: "Women training with dumbbells at Akbar Gym",
    span: "square" as const,
  },
  {
    id: "g5",
    src: "/images/akbar-gym/facilities/machines.webp",
    alt: "Strength athletes flexing inside Akbar Gym",
    span: "wide" as const,
  },
  {
    id: "g6",
    src: "/images/akbar-gym/community/community-atmosphere-wide.webp",
    alt: "Members posing after training at Akbar Gym",
    span: "tall" as const,
  },
] as const;
