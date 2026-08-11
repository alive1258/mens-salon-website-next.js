import { Star, Quote } from "lucide-react";
import Section from "@/src/components/ui/Section";
import SectionHeading from "@/src/components/ui/SectionHeading";
import Reveal, { RevealGroup } from "@/src/components/ui/Reveal";
import { testimonials } from "@/src/data/testimonials";

export default function Testimonials() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Client Stories"
        title="Results, in their words."
        align="center"
        className="mx-auto"
      />

      <RevealGroup className="mt-16 grid gap-6 lg:grid-cols-2">
        {testimonials.map((t, i) => (
          <Reveal key={t.id} delay={i * 0.06}>
            <figure className="relative h-full rounded-3xl border border-border bg-surface-1 p-8 sm:p-10">
              <Quote
                className="absolute right-8 top-8 size-10 text-accent/20"
                strokeWidth={1}
              />
              <div className="flex gap-1">
                {Array.from({ length: t.rating }).map((_, idx) => (
                  <Star
                    key={idx}
                    className="size-4 fill-accent text-accent"
                  />
                ))}
              </div>
              <blockquote className="mt-5 text-lg leading-relaxed text-foreground/90">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-6">
                <p className="font-semibold">{t.name}</p>
                <p className="text-sm text-muted">{t.role}</p>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </RevealGroup>
    </Section>
  );
}
