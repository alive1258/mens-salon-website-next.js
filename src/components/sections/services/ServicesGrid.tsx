import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Section from "@/src/components/ui/Section";
import Reveal, { RevealGroup } from "@/src/components/ui/Reveal";
import { services } from "@/src/data/services";
import { priceList } from "@/src/data/priceList";

function fromPrice(priceCategories: string[]) {
  const prices = priceList
    .filter((item) => priceCategories.includes(item.category))
    .map((item) => item.price);
  return prices.length ? Math.min(...prices) : null;
}

export default function ServicesGrid() {
  return (
    <Section tone="raised">
      <RevealGroup className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((item, i) => {
          const from = fromPrice(item.priceCategories);
          return (
            <Reveal key={item.id} delay={(i % 3) * 0.08} className="h-full">
              <div className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-surface-1 transition-colors duration-300 hover:border-accent/40">
                <div className="relative aspect-4/3 w-full shrink-0 overflow-hidden">
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

                <div className="flex flex-1 flex-col p-8">
                  <h3 className="font-display text-2xl">{item.name}</h3>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">
                    {item.description}
                  </p>
                  <Link
                    href="/pricing"
                    className="mt-6 inline-flex items-center gap-2 border-t border-border pt-5 text-xs font-semibold uppercase tracking-wide text-foreground hover:text-accent"
                  >
                    View Prices
                    <ArrowUpRight className="size-3.5" />
                  </Link>
                </div>
              </div>
            </Reveal>
          );
        })}
      </RevealGroup>
    </Section>
  );
}
