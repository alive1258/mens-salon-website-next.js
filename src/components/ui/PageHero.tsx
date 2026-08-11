import Reveal from "@/src/components/ui/Reveal";
import Badge from "@/src/components/ui/Badge";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  description?: string;
}

export default function PageHero({
  eyebrow,
  title,
  description,
}: PageHeroProps) {
  return (
    <section className="bg-grid relative overflow-hidden bg-surface-1 pt-36 pb-20 sm:pt-44 sm:pb-24">
      <div className="pointer-events-none absolute -top-24 left-1/2 h-72 w-[36rem] -translate-x-1/2 rounded-full bg-accent/15 blur-[100px]" />
      <div className="container relative">
        <Reveal direction="fade">
          <Badge>{eyebrow}</Badge>
        </Reveal>
        <Reveal delay={0.08}>
          <h1 className="font-display mt-6 max-w-3xl text-5xl leading-[0.95] sm:text-6xl lg:text-7xl">
            {title}
          </h1>
        </Reveal>
        {description && (
          <Reveal delay={0.14}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              {description}
            </p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
