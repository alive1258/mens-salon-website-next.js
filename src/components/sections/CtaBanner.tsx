import Reveal from "@/src/components/ui/Reveal";
import Button from "@/src/components/ui/Button";

interface CtaBannerProps {
  title: string;
  description: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  tone?: "base" | "raised";
}

export default function CtaBanner({
  title,
  description,
  primaryLabel = "Book an Appointment",
  primaryHref = "/contact",
  secondaryLabel = "View Price List",
  secondaryHref = "/pricing",
  tone = "base",
}: CtaBannerProps) {
  const sectionBg = tone === "raised" ? "bg-surface-2" : "bg-surface-1";
  const cardBg = tone === "raised" ? "bg-surface-1" : "bg-surface-2";

  return (
    <section className={`relative overflow-hidden py-20 sm:py-24 ${sectionBg}`}>
      <div className="container">
        <Reveal direction="zoom">
          <div
            className={`bg-grid relative overflow-hidden rounded-[2rem] border border-border-strong ${cardBg} px-6 py-16 text-center sm:px-16 sm:py-20`}
          >
            <div className="pointer-events-none absolute -top-1/2 left-1/2 h-full w-2/3 -translate-x-1/2 rounded-full bg-accent/20 blur-[100px]" />
            <div className="relative">
              <h2 className="font-display mx-auto max-w-2xl text-4xl leading-[0.95] sm:text-5xl lg:text-6xl">
                {title}
              </h2>
              <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-muted sm:text-lg">
                {description}
              </p>
              <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button href={primaryHref}>{primaryLabel}</Button>
                <Button href={secondaryHref} variant="outline" icon={false}>
                  {secondaryLabel}
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
