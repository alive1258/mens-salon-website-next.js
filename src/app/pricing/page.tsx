import type { Metadata } from "next";
import PageHero from "@/src/components/ui/PageHero";
import Section from "@/src/components/ui/Section";
import SectionHeading from "@/src/components/ui/SectionHeading";
import FaqAccordion from "@/src/components/ui/FaqAccordion";
import PriceListTable from "@/src/components/sections/pricing/PriceListTable";
import CtaBanner from "@/src/components/sections/CtaBanner";
import { pricingFaqs } from "@/src/data/pricing";

export const metadata: Metadata = {
  title: "Price List",
  description:
    "The full ScissorHand price list — every haircut, treatment, facial, massage, and package, with transparent pricing in BDT.",
  alternates: { canonical: "/pricing" },
};

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Price List"
        title="Transparent pricing, every service."
        description="Search or filter by category to find exact pricing for anything we offer — no surprises at the counter."
      />
      <PriceListTable />
      <Section tone="raised">
        <SectionHeading
          eyebrow="Questions"
          title="Pricing FAQ."
          align="center"
          className="mx-auto"
        />
        <div className="mt-14">
          <FaqAccordion items={pricingFaqs} />
        </div>
      </Section>
      <CtaBanner
        title="Ready to get started?"
        description="Book an appointment or walk in — every price above is exactly what you'll pay."
      />
    </>
  );
}
