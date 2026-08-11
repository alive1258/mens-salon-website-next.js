export interface SalonLocation {
  id: string;
  name: string;
  address: string;
  hours: string;
}

export const locations: SalonLocation[] = [
  {
    id: "gulshan",
    name: "Gulshan Premium Lounge",
    address:
      "Rupayan Golden Age (2nd Floor), Plot 99, Road 37, Block CWN (C), Gulshan Avenue, Dhaka 1212",
    hours: "10:00 AM – 10:00 PM",
  },
  {
    id: "bashundhara",
    name: "Bashundhara Premium Lounge",
    address:
      "Rahman Tower (Lift-4), Ka-1/B, Jagannathpur, Beside Hardco International School, Bashundhara, Dhaka",
    hours: "10:00 AM – 10:00 PM",
  },
];

export const siteConfig = {
  name: "ScissorHand",
  tagline: "Premium Grooming for the Modern Man",
  description:
    "A premium men's grooming lounge offering expert haircuts, shaves, hair treatments, facials, Hydra facials, massage, and waxing — real skill, real products, real results.",
  phone: "+880 1700-000000",
  email: "hello@scissorhand.salon",
  address: locations[0].address,
  hours: [{ days: "Every day", time: "10:00 AM – 10:00 PM" }],
  social: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    youtube: "https://youtube.com",
    tiktok: "https://tiktok.com",
  },
} as const;

export const navItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Price List", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export const stats = [
  { value: 10, suffix: "+", label: "Years Grooming" },
  { value: 15000, suffix: "+", label: "Happy Clients" },
  { value: 50, suffix: "+", label: "Services Offered" },
  { value: 9, suffix: "", label: "Service Categories" },
] as const;
