import { CalendarCheck, Footprints, Scissors } from "lucide-react";
import Section from "@/src/components/ui/Section";
import SectionHeading from "@/src/components/ui/SectionHeading";
import Reveal, { RevealGroup } from "@/src/components/ui/Reveal";

const steps = [
  {
    icon: CalendarCheck,
    step: "01",
    title: "Book or Walk In",
    description:
      "Call ahead to reserve a time, or walk in — we'll seat you as soon as a chair opens up.",
  },
  {
    icon: Footprints,
    step: "02",
    title: "Pick Your Service",
    description:
      "Browse the price list or ask at the counter — every service and price is listed up front.",
  },
  {
    icon: Scissors,
    step: "03",
    title: "Relax & Get Groomed",
    description:
      "Sit back while our stylists take care of the rest, from the first snip to the final touch-up.",
  },
];

export default function HowToBook() {
  return (
    <Section>
      <SectionHeading
        eyebrow="How It Works"
        title="Getting groomed takes three steps."
        align="center"
        className="mx-auto"
      />

      <RevealGroup className="mt-16 grid gap-8 sm:grid-cols-3">
        {steps.map((s) => (
          <Reveal key={s.step} direction="up" className="relative text-center">
            <span className="font-display block text-7xl text-white/5">
              {s.step}
            </span>
            <span className="mx-auto -mt-10 flex size-14 items-center justify-center rounded-2xl bg-accent/10 text-accent">
              <s.icon className="size-7" strokeWidth={1.5} />
            </span>
            <h3 className="mt-6 text-lg font-semibold">{s.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              {s.description}
            </p>
          </Reveal>
        ))}
      </RevealGroup>
    </Section>
  );
}
