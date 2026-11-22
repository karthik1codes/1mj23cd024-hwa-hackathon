export type Plan = {
  id: "one" | "pro" | "pack";
  name: string;
  tagline: string;
  price: number;
  compareAt?: number;
  badge?: string;
  featured?: boolean;
  cta: string;
  checkoutUrl: string;
  includes: string[];
  note: string;
};

export const CARE_PLUS_PRICE = 6600;

export const plans: Plan[] = [
  {
    id: "one",
    name: "PawPal One",
    tagline: "Everything a solo pup needs to feel close to you.",
    price: 42000,
    cta: "Bring home PawPal",
    checkoutUrl: "https://test.checkout.dodopayments.com/buy/pdt_0NsVvWmxQBkdS4WiRFmNK?quantity=1",
    note: "One robot. One very happy dog.",
    includes: [
      "PawPal companion robot",
      "Two-way HD audio & video",
      "Automatic treat dispenser",
      "Owner voice playback",
      "Smart hydration bowl",
      "PawPal app for iOS & Android",
      "30-night happiness trial",
    ],
  },
  {
    id: "pro",
    name: "PawPal Pro",
    tagline: "Every companion feature, with room to grow.",
    price: 70000,
    compareAt: 80000,
    badge: "Most loved",
    featured: true,
    cta: "Choose PawPal Pro",
    checkoutUrl: "https://test.checkout.dodopayments.com/buy/pdt_0NsVwgeJHacBsvk1jmH8W?quantity=1",
    note: "Our best seller for busy dog parents.",
    includes: [
      "Everything in PawPal One",
      "AI behaviour monitoring & insights",
      "Articulated robotic play arm",
      "Personalised play sessions",
      "Autonomous follow & explore",
      "3 months of PawPal Care+",
      "Extended 2-year warranty",
    ],
  },
  {
    id: "pack",
    name: "PawPal Pack",
    tagline: "For multi-dog homes and very busy tails.",
    price: 120000,
    compareAt: 140000,
    badge: "Best value",
    cta: "Choose the Pack",
    checkoutUrl: "https://test.checkout.dodopayments.com/buy/pdt_0NsVwpHcd9gEgIFrRF5sL?quantity=1",
    note: "Two robots, one beautifully calm home.",
    includes: [
      "Two PawPal companion robots",
      "All PawPal Pro features",
      "Two smart hydration bowls",
      "Extra treat & toy refill kit",
      "6 months of PawPal Care+",
      "Priority human support",
      "Extended 2-year warranty",
    ],
  },
];

export const faqs = [
  {
    q: "Will my dog actually use PawPal?",
    a: "PawPal is designed around how dogs naturally play and explore. Sessions start gently, with sounds and treats that draw your dog in, and the robot adapts to their comfort level. Most dogs are curious within the first day and confidently playing within a week. Every PawPal comes with a 30-night happiness trial, so you can both decide.",
  },
  {
    q: "How does the treat dispenser work?",
    a: "The 300g sealed hopper holds small, dry treats up to 12mm wide. You can dispense one on demand from the app, schedule reward moments, or let PawPal reward calm behaviour during a play session. The hopper twists off in seconds for refilling and is dishwasher-safe.",
  },
  {
    q: "What happens if my internet drops?",
    a: "PawPal keeps its last play routine and can run offline sessions, treat rewards and voice prompts from local storage. Live video, two-way audio and new remote sessions need Wi-Fi. When the connection returns, PawPal reconnects automatically and syncs the day's activity.",
  },
  {
    q: "Is PawPal safe to leave with my dog?",
    a: "Yes. The body is chew-resistant, has no exposed pinch points and uses rounded, food-safe materials. The robotic arm senses resistance and stops instantly. PawPal is not a chew toy, so we recommend supervised introductions for heavy chewers, and the included cable guard keeps charging cords out of reach.",
  },
  {
    q: "How long does the battery last?",
    a: "Up to 12 hours of mixed use, or around 4 hours of continuous play. PawPal returns to its charging dock on its own when the battery drops below 15%, and a 90-minute charge gets it back to a full day.",
  },
  {
    q: "Does it work with more than one dog?",
    a: "Absolutely. PawPal recognises individual dogs by their collar tag and builds a separate profile, play history and treat routine for each. The PawPal Pack includes two robots for homes with multiple dogs or multiple rooms.",
  },
  {
    q: "What is PawPal Care+?",
    a: "Care+ is our optional protection plan. It covers accidental damage, extends your warranty, and includes priority support with a real human within one business day. It is $79 a year, and the first three months are included with PawPal Pro.",
  },
  {
    q: "What is your return policy?",
    a: "Try PawPal for 30 nights. If your dog is not happier and calmer, send it back for a full refund — we cover return shipping. We only ask that you give it a fair two weeks, since new routines take a little time.",
  },
  {
    q: "When will my PawPal ship?",
    a: "Orders placed before 2pm ship the same business day. Delivery is free and typically takes 3–5 business days, with tracking sent as soon as your robot leaves our workshop.",
  },
];

export const testimonials = [
  {
    quote:
      "Mango used to shred the sofa by 4pm. Now I get a notification that he's playing tug with PawPal while I'm still at work. The difference in him is unreal.",
    name: "Priya S.",
    location: "Bengaluru",
    dog: "Mango, 2y golden retriever",
    initials: "PS",
    tint: "bg-ember-100 text-ember-700",
  },
  {
    quote:
      "I was sceptical about the robotic arm. Then I watched Luna figure out the button that makes PawPal say 'clever girl' — she presses it twenty times a day now.",
    name: "Daniel R.",
    location: "Austin, TX",
    dog: "Luna, 4y border collie",
    initials: "DR",
    tint: "bg-forest-100 text-forest-700",
  },
  {
    quote:
      "The voice playback is what got me. Hearing my own voice calm Biscuit down through the speaker while I'm on a late shift — that's not a gadget, that's peace of mind.",
    name: "Aisha K.",
    location: "Manchester",
    dog: "Biscuit, 6y cocker spaniel",
    initials: "AK",
    tint: "bg-cream-300 text-forest-800",
  },
  {
    quote:
      "Setup took eleven minutes, including the treat calibration. The app is genuinely lovely — I check the daily 'tail report' with my morning coffee.",
    name: "Tom & Ruth H.",
    location: "Melbourne",
    dog: "Pepper, 1y cavoodle",
    initials: "TH",
    tint: "bg-ember-100 text-ember-700",
  },
  {
    quote:
      "We have two labs and the Pack was the right call. Each dog has their own profile and routine. Our dog walker says the house is noticeably calmer when she arrives.",
    name: "Marco B.",
    location: "Milan",
    dog: "Otto & Nina, labs",
    initials: "MB",
    tint: "bg-forest-100 text-forest-700",
  },
  {
    quote:
      "My rescue, Juniper, is nervous of new things. PawPal's slow introduction mode let her approach on her own terms. Three weeks in, she brings her ball to the robot.",
    name: "Hannah W.",
    location: "Portland, OR",
    dog: "Juniper, 3y mix",
    initials: "HW",
    tint: "bg-cream-300 text-forest-800",
  },
];

export const specs = {
  Hardware: [
    ["Dimensions", "31 × 26 × 42 cm (with arm folded)"],
    ["Weight", "4.8 kg"],
    ["Materials", "Food-safe ABS shell, recycled aluminium core, vegan leather trim"],
    ["Battery", "Up to 12 hours mixed use · 90-minute fast charge"],
    ["Camera", "4K wide-angle with night vision"],
    ["Audio", "Dual 5W speakers, 4-mic array, echo cancellation"],
    ["Treat hopper", "300g sealed, dishwasher-safe, treats up to 12mm"],
    ["Hydration bowl", "1.5L filtered, UV-clean cycle, low-water alert"],
    ["Movement", "Self-balancing treads, 6 terrain sensors, 12cm step clearance"],
    ["Robotic arm", "3-axis, force-sensitive, quick-release toy grip"],
  ],
  "Smart features": [
    ["On-device AI", "Behaviour & mood monitoring, no cloud video processing"],
    ["Connectivity", "Wi-Fi 6, Bluetooth 5.3, optional LTE module"],
    ["Sensors", "Time-of-flight, 9-axis IMU, touch, temperature, water level"],
    ["Play library", "40+ guided games, 12 trick tutorials, weekly drops"],
    ["Profiles", "Up to 4 dogs per robot, individual routines"],
    ["Privacy", "Local storage, encrypted streams, physical camera shutter"],
    ["App", "iOS 16+ / Android 11+, multi-caregiver access"],
    ["Updates", "Automatic overnight, 5-year feature support"],
  ],
  "In the box": [
    ["PawPal One", "1 companion robot (Pro / Pack as selected)"],
    ["Charging", "Self-docking charge pad + chew-safe cable guard"],
    ["Bowl", "1 smart hydration bowl + filter pack"],
    ["Play", "2 interactive toys, 1 tug rope, starter treat tin"],
    ["Setup", "Quick-start card, collar tag, cleaning brush"],
    ["Care", "30-night trial, 2-year warranty (Pro / Pack)"],
  ],
} as const;

export const orderPromos: Record<string, number> = {
  GOODBOY: 0.1,
  PAW10: 0.1,
  NEIGHBOUR: 0.05,
};
