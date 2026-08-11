import { ShieldCheck, Sparkles, Users2, Scissors } from "lucide-react";
import Section from "@/src/components/ui/Section";
import SectionHeading from "@/src/components/ui/SectionHeading";
import Reveal, { RevealGroup } from "@/src/components/ui/Reveal";

const values = [
  {
    icon: ShieldCheck,
    title: "Hygiene First",
    description:
      "Every tool is sanitized between clients and every station is kept spotless throughout the day.",
  },
  {
    icon: Scissors,
    title: "Skilled Professionals",
    description:
      "Our stylists train continuously to stay sharp on the latest cuts, colours, and treatments.",
  },
  {
    icon: Sparkles,
    title: "Premium Products",
    description:
      "From Hydra Facial gels to keratin treatments, we only stock products that deliver real results.",
  },
  {
    icon: Users2,
    title: "Client Comfort",
    description:
      "No rushing you through the door — every visit is paced to be relaxing, not transactional.",
  },
];

export default function Values() {
  return (
    <Section>
      <SectionHeading
        eyebrow="What We Stand For"
        title="Our values, not just posters on a wall."
        align="center"
        className="mx-auto"
      />

      <RevealGroup className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {values.map((value) => (
          <Reveal
            key={value.title}
            direction="up"
            className="rounded-3xl border border-border bg-surface-1 p-8 text-center transition-colors duration-300 hover:border-accent/40"
          >
            <span className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-accent/10 text-accent">
              <value.icon className="size-7" strokeWidth={1.5} />
            </span>
            <h3 className="mt-6 text-lg font-semibold">{value.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              {value.description}
            </p>
          </Reveal>
        ))}
      </RevealGroup>
    </Section>
  );
}
