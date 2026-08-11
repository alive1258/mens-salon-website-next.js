import Link from "next/link";
import { Check, ArrowUpRight } from "lucide-react";
import Section from "@/src/components/ui/Section";
import SectionHeading from "@/src/components/ui/SectionHeading";
import Reveal, { RevealGroup } from "@/src/components/ui/Reveal";
import Button from "@/src/components/ui/Button";
import { packages } from "@/src/data/pricing";

export default function PackagesPreview() {
  const featured = packages.filter((p) =>
    ["welcome-package", "gold-package", "titanium-package"].includes(p.id)
  );

  return (
    <Section tone="raised">
      <SectionHeading
        eyebrow="Packages"
        title="Popular grooming packages."
        description="Curated bundles at a fixed price — or browse the full price list for individual services."
        align="center"
        className="mx-auto"
      />

      <RevealGroup className="mt-14 grid gap-6 lg:grid-cols-3">
        {featured.map((pkg, i) => (
          <Reveal key={pkg.id} delay={i * 0.08} className="h-full">
            <div
              className={`relative flex h-full flex-col rounded-3xl border p-8 ${
                pkg.popular
                  ? "border-accent bg-surface-1 shadow-[0_0_60px_-15px_rgba(200,164,92,0.35)]"
                  : "border-border bg-surface-1"
              }`}
            >
              {pkg.popular && (
                <span className="absolute -top-3 left-8 rounded-full bg-accent px-3 py-1 text-xs font-semibold uppercase tracking-wide text-accent-foreground">
                  Most Popular
                </span>
              )}
              <h3 className="font-display text-2xl">{pkg.name}</h3>
              <p className="mt-2 text-sm text-muted">{pkg.description}</p>
              <p className="mt-6 flex items-baseline gap-1">
                <span className="font-display text-5xl">৳{pkg.price}</span>
              </p>
              <ul className="mt-8 flex-1 space-y-3">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-sm">
                    <Check className="mt-0.5 size-4 shrink-0 text-accent" />
                    <span className="text-foreground/85">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                href="/contact"
                variant={pkg.popular ? "primary" : "outline"}
                className="mt-8 w-full"
              >
                {pkg.cta}
              </Button>
            </div>
          </Reveal>
        ))}
      </RevealGroup>

      <Reveal direction="fade" className="mt-10 flex justify-center">
        <Link
          href="/pricing"
          className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-foreground hover:text-accent"
        >
          See Full Price List
          <ArrowUpRight className="size-4" />
        </Link>
      </Reveal>
    </Section>
  );
}
