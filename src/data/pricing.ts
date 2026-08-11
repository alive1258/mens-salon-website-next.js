export interface SalonPackage {
  id: string;
  name: string;
  price: number;
  description: string;
  features: string[];
  popular: boolean;
  cta: string;
}

export const packages: SalonPackage[] = [
  {
    id: "standard-student",
    name: "Standard for Student",
    price: 1800,
    description: "An affordable grooming combo built for students.",
    features: [
      "Curated bundle of core grooming services",
      "Valid student ID required",
      "Same-day booking",
    ],
    popular: false,
    cta: "Book This Package",
  },
  {
    id: "welcome-package",
    name: "Welcome Package",
    price: 2500,
    description: "A first-visit combo to introduce you to the ScissorHand experience.",
    features: [
      "A curated bundle of our most popular services",
      "Complimentary refreshments",
      "One-time new-client pricing",
    ],
    popular: false,
    cta: "Book This Package",
  },
  {
    id: "relaxation-package",
    name: "Relaxation Package",
    price: 3200,
    description: "A spa-focused combo for a slower, more restorative visit.",
    features: [
      "Massage and scrub-led treatment bundle",
      "Extended chair time",
      "Aromatherapy included",
    ],
    popular: false,
    cta: "Book This Package",
  },
  {
    id: "gold-package",
    name: "GOLD",
    price: 6200,
    description: "Our most-booked mid-tier package — grooming and skin care in one visit.",
    features: [
      "Hair, beard, and skin care combined",
      "Priority appointment slots",
      "Complimentary product sample",
    ],
    popular: true,
    cta: "Book This Package",
  },
  {
    id: "platinum-package",
    name: "Platinum",
    price: 9999,
    description: "A premium full-service package for an elevated grooming session.",
    features: [
      "Extended multi-service session",
      "Premium product line used throughout",
      "Priority appointment slots",
    ],
    popular: false,
    cta: "Book This Package",
  },
  {
    id: "titanium-package",
    name: "Titanium",
    price: 12499,
    description: "The complete ScissorHand experience — our top-tier package.",
    features: [
      "Our most comprehensive service bundle",
      "Dedicated senior stylist",
      "Complimentary refreshments & extended session",
    ],
    popular: false,
    cta: "Book This Package",
  },
];

export const pricingFaqs = [
  {
    question: "Are package prices fixed or can they vary?",
    answer:
      "Package prices are set per package, exactly as listed. Add-on services outside the package are charged separately at our standard price list rates.",
  },
  {
    question: "Do I need to book a package in advance?",
    answer:
      "Walk-ins are welcome, but booking ahead (by phone or the contact form) guarantees your preferred time slot, especially for longer packages.",
  },
  {
    question: "Can I customize a package?",
    answer:
      "Yes — talk to your stylist when you arrive and we'll tailor the session to your needs where possible.",
  },
  {
    question: "Do prices include tax?",
    answer:
      "All prices shown are final, all-inclusive prices in BDT — no hidden charges at checkout.",
  },
];
