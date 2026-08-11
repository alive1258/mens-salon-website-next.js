import type { Metadata } from "next";
import PageHero from "@/src/components/ui/PageHero";
import Story from "@/src/components/sections/about/Story";
import Values from "@/src/components/sections/about/Values";
import Timeline from "@/src/components/sections/about/Timeline";
import CtaBanner from "@/src/components/sections/CtaBanner";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn how ScissorHand grew into a premium men's grooming lounge trusted by thousands of clients.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About ScissorHand"
        title="Built by barbers, for men who care."
        description="Real skill, premium products, and a lounge worth relaxing in — this is the story behind ScissorHand."
      />
      <Story />
      <Values />
      <Timeline />
      <CtaBanner
        title="Come see it for yourself."
        description="Walk in or book ahead — no pressure, just an honest look at how we work."
      />
    </>
  );
}
