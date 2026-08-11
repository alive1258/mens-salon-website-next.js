import type { Metadata } from "next";
import PageHero from "@/src/components/ui/PageHero";
import ServicesGrid from "@/src/components/sections/services/ServicesGrid";
import HowToBook from "@/src/components/sections/services/HowToBook";
import CtaBanner from "@/src/components/sections/CtaBanner";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore ScissorHand's full range of men's grooming services — haircuts, hair care, colour, facials, Hydra Facial, massage, waxing, and more.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="What we can do."
        description="Nine service categories covering everything from a quick trim to a full grooming makeover — plus retail products to take home."
      />
      <ServicesGrid />
      <HowToBook />
      <CtaBanner
        title="Ready to book your service?"
        description="See exact pricing for every service on our Price List, or reach out and we'll help you choose."
      />
    </>
  );
}
