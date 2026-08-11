const unsplash = (photoId: string, width = 1200) =>
  `https://images.unsplash.com/photo-${photoId}?auto=format&fit=crop&w=${width}&q=80`;

export interface Service {
  id: string;
  name: string;
  image: string;
  description: string;
  /** Category labels used in src/data/priceList.ts, for computing "from ৳X" pricing. */
  priceCategories: string[];
}

export const services: Service[] = [
  {
    id: "haircut-shave",
    name: "Haircut & Shave",
    image: unsplash("1599351431202-1e0f0137899a"),
    description:
      "Precision haircuts, hot towel shaves, beard trims, and threading — the essentials, done properly.",
    priceCategories: ["HAIR CUT & SHAVE"],
  },
  {
    id: "hair-care-treatments",
    name: "Hair Care & Treatments",
    image: unsplash("1618049049816-43a00d5b0c3d"),
    description:
      "Hair spa, keratin, straightening, rebounding, scalp treatments, and anti-hairfall therapy.",
    priceCategories: ["HAIR CARE/TREATMENT'S"],
  },
  {
    id: "dye-colour",
    name: "Dye & Colour",
    image: unsplash("1617391654484-2894196c2cc9"),
    description:
      "Natural black, fashion colours, highlights, and beard/moustache dye in every shade.",
    priceCategories: ["DYE", "COLOR"],
  },
  {
    id: "facial-care-treatment",
    name: "Facial Care & Treatment",
    image: unsplash("1616394584738-fc6e612e71b9"),
    description:
      "Deep cleansing, gold, pearl, charcoal, and anti-aging facials tailored to your skin.",
    priceCategories: ["REGULAR FACE WASH", "FACIAL TREATMENT"],
  },
  {
    id: "makeover-fair-polish",
    name: "Makeover & Fair Polish",
    image: unsplash("1593702275687-f8b402bf1fb5"),
    description:
      "Party and groom makeup, full grooming packages, and skin-brightening fair polish.",
    priceCategories: ["MAKEOVER", "FAIR POLISH"],
  },
  {
    id: "pedicure-manicure",
    name: "Pedicure & Manicure",
    image: unsplash("1519419451778-14599a49ec41"),
    description:
      "Classic and luxurious pedicure & manicure sessions with auto chair massage.",
    priceCategories: ["PEDICURE & MANICURE"],
  },
  {
    id: "body-massage-scrub",
    name: "Body Massage & Scrub",
    image: unsplash("1542848284-8afa78a08ccb"),
    description:
      "Full-body oil massage, Thai massage, aroma therapy, and exfoliating body scrubs.",
    priceCategories: ["BODY SCRUB", "BODY MASSAGE"],
  },
  {
    id: "waxing",
    name: "Waxing",
    image: unsplash("1758632031161-b6d7e913c2b9"),
    description:
      "Under-arm, hand, leg, back, and full-body waxing in a clean, private treatment room.",
    priceCategories: ["WAXING"],
  },
  {
    id: "hydra-facial",
    name: "Hydra Facial",
    image: unsplash("1643684391140-c5056cfd3436"),
    description:
      "Medical-grade Hydra Facial treatments — Pearl, Diamond, Gel, and our signature 10-in-1.",
    priceCategories: ["Hydra Facial"],
  },
  {
    id: "product",
    name: "Product",
    image: unsplash("1535585209827-a15fcdbc4c2d"),
    description:
      "Take the salon home — waxes, serums, shampoos, and professional grooming tools.",
    priceCategories: ["Product"],
  },
];
