import { Scissors, Sparkles, Armchair, ShieldCheck } from "lucide-react";
import Section from "@/src/components/ui/Section";
import SectionHeading from "@/src/components/ui/SectionHeading";
import Reveal, { RevealGroup } from "@/src/components/ui/Reveal";

const points = [
  {
    icon: Scissors,
    title: "Skilled Stylists",
    description:
      "Every haircut, shave, and treatment is done by an experienced hand — not rushed, not guessed at.",
  },
  {
    icon: Sparkles,
    title: "Premium Products",
    description:
      "From Hydra Facial gels to keratin treatments, we only use products that hold up to the results we promise.",
  },
  {
    icon: Armchair,
    title: "A Relaxing Lounge",
    description:
      "Comfortable chairs, a calm space, and no rushing you out the door once the service is done.",
  },
  {
    icon: ShieldCheck,
    title: "Hygienic & Sanitized",
    description:
      "Tools are sanitized between every client, and every station is kept spotless throughout the day.",
  },
];

export default function WhyUs() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Why ScissorHand"
        title="Built different, on purpose."
        description="Everything here is designed around one outcome: clients who leave looking sharper than when they walked in."
        align="center"
        className="mx-auto"
      />

      <RevealGroup className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
        {points.map((point) => (
          <Reveal
            key={point.title}
            direction="fade"
            className="group bg-surface-1 p-8 transition-colors duration-300 hover:bg-surface-2"
          >
            <span className="flex size-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
              <point.icon className="size-6" strokeWidth={1.5} />
            </span>
            <h3 className="mt-6 text-lg font-semibold">{point.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              {point.description}
            </p>
          </Reveal>
        ))}
      </RevealGroup>
    </Section>
  );
}
