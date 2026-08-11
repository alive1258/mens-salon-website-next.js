import type { Metadata } from "next";
import PageHero from "@/src/components/ui/PageHero";
import Section from "@/src/components/ui/Section";
import SectionHeading from "@/src/components/ui/SectionHeading";
import FaqAccordion from "@/src/components/ui/FaqAccordion";
import BookingForm from "@/src/components/sections/contact/BookingForm";
import ContactInfo from "@/src/components/sections/contact/ContactInfo";
import { faqs } from "@/src/data/faqs";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with ScissorHand — ask a question, book an appointment, or find your way to the salon.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get In Touch"
        title="Let's get you booked."
        description="Questions about services, pricing, or your first visit? Send a message or stop by — we'll respond within a business day."
      />
      <Section tone="raised" className="pt-0 sm:pt-0 lg:pt-0">
        <div className="grid gap-8 lg:grid-cols-5 lg:gap-10">
          <div className="lg:col-span-3">
            <BookingForm />
          </div>
          <div className="lg:col-span-2">
            <ContactInfo />
          </div>
        </div>
      </Section>
      <Section>
        <SectionHeading
          eyebrow="Questions"
          title="Before you reach out."
          align="center"
          className="mx-auto"
        />
        <div className="mt-14">
          <FaqAccordion items={faqs} />
        </div>
      </Section>
    </>
  );
}
