import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Section from "@/src/components/ui/Section";
import SectionHeading from "@/src/components/ui/SectionHeading";
import Reveal, { RevealGroup } from "@/src/components/ui/Reveal";
import { services } from "@/src/data/services";
import { priceList } from "@/src/data/priceList";

function fromPrice(priceCategories: string[]) {
  const prices = priceList
    .filter((item) => priceCategories.includes(item.category))
    .map((item) => item.price);
  return prices.length ? Math.min(...prices) : null;
}

export default function ServicesPreview() {
  const featured = services.slice(0, 6);

  return (
    <Section>
      <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-end">
        <SectionHeading
          eyebrow="Our Services"
          title="What we can do."
          description="Nine service categories, one salon — from a fifteen-minute trim to a full grooming makeover."
        />
        <Reveal direction="fade" delay={0.15}>
          <Link
            href="/services"
            className="hidden shrink-0 items-center gap-2 text-sm font-semibold uppercase tracking-wide text-foreground hover:text-accent sm:inline-flex"
          >
            View All Services
            <ArrowUpRight className="size-4" />
          </Link>
        </Reveal>
      </div>

      <RevealGroup className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {featured.map((item, i) => {
          const from = fromPrice(item.priceCategories);
          return (
            <Reveal key={item.id} delay={i * 0.08} className="h-full">
              <Link
                href="/services"
                className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-surface-1 transition-all duration-300 hover:-translate-y-1 hover:border-accent/50"
              >
                <div className="relative aspect-4/3 w-full overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-background/90 via-background/0 to-transparent" />
                  {from !== null && (
                    <span className="absolute left-5 top-5 rounded-full border border-white/15 bg-background/70 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-foreground backdrop-blur-sm">
                      From ৳{from}
                    </span>
                  )}
                </div>
                <div className="flex flex-1 flex-col justify-between p-8">
                  <div>
                    <h3 className="font-display text-2xl">{item.name}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Link>
            </Reveal>
          );
        })}
      </RevealGroup>

      <Reveal direction="fade" className="mt-10 sm:hidden">
        <Link
          href="/services"
          className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-foreground"
        >
          View All Services
          <ArrowUpRight className="size-4" />
        </Link>
      </Reveal>
    </Section>
  );
}
