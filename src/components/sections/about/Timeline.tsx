import Section from "@/src/components/ui/Section";
import SectionHeading from "@/src/components/ui/SectionHeading";
import Reveal from "@/src/components/ui/Reveal";

const milestones = [
  {
    year: "Year 1",
    title: "One chair, one idea",
    description: "ScissorHand opens with a handful of core services and a promise: real skill, no rushing.",
  },
  {
    year: "Year 2",
    title: "Expanded treatments",
    description: "Hair care, colour, and facial treatments join the menu as demand grows.",
  },
  {
    year: "Year 4",
    title: "Hydra Facial & spa services",
    description: "Massage, waxing, and Hydra Facial treatments are added for a full grooming experience.",
  },
  {
    year: "Year 7",
    title: "Packages introduced",
    description: "Curated packages launch, bundling our most popular services at a fixed price.",
  },
  {
    year: "Today",
    title: "50+ services, 9 categories",
    description: "ScissorHand now offers a full menu of grooming, skin, and body treatments under one roof.",
  },
];

export default function Timeline() {
  return (
    <Section tone="raised">
      <SectionHeading
        eyebrow="Our Journey"
        title="Grown one client at a time."
        align="center"
        className="mx-auto"
      />

      <div className="relative mt-16 max-w-3xl mx-auto">
        <div className="absolute left-[7px] top-2 bottom-2 w-px bg-border sm:left-1/2" />
        <div className="space-y-12">
          {milestones.map((m, i) => {
            const isEven = i % 2 === 0;
            return (
              <Reveal
                key={m.year}
                direction={isEven ? "left" : "right"}
                className={`relative flex flex-col gap-2 pl-8 sm:w-1/2 sm:pl-0 ${
                  isEven
                    ? "sm:pr-12 sm:text-right"
                    : "sm:ml-auto sm:pl-12"
                }`}
              >
                <span
                  className={`absolute left-0 top-1.5 size-4 rounded-full border-2 border-accent bg-background sm:left-auto ${
                    isEven ? "sm:-right-[9px]" : "sm:-left-[9px]"
                  }`}
                />
                <span className="font-display text-3xl text-accent">
                  {m.year}
                </span>
                <h3 className="text-lg font-semibold">{m.title}</h3>
                <p className="text-sm leading-relaxed text-muted">
                  {m.description}
                </p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
