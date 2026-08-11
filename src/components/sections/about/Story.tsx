import Image from "next/image";
import Section from "@/src/components/ui/Section";
import Reveal from "@/src/components/ui/Reveal";

export default function Story() {
  return (
    <Section tone="raised">
      <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <Reveal
          direction="left"
          className="relative aspect-4/5 w-full overflow-hidden rounded-[1.75rem] border border-border"
        >
          <Image
            src="https://images.unsplash.com/photo-1611313151697-d626e818dddf?auto=format&fit=crop&w=1000&q=80"
            alt="Inside ScissorHand"
            fill
            sizes="(min-width: 1024px) 46vw, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-background/80 via-background/0 to-transparent" />
          <span className="absolute bottom-5 left-6 text-xs font-semibold uppercase tracking-[0.2em] text-white/90">
            Est. Dhaka
          </span>
        </Reveal>

        <div>
          <Reveal direction="fade">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-accent">
              <span className="h-px w-6 bg-accent" />
              Our Story
            </span>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="font-display mt-4 text-4xl leading-[0.95] sm:text-5xl">
              Started with a chair.
              <br />
              Built into a lounge.
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted">
              <p>
                ScissorHand started with a simple frustration: too many salons
                rushed the cut, skipped the details, and treated grooming as
                an afterthought. We set out to build something different —
                skilled hands, unhurried service, and premium products used
                properly.
              </p>
              <p>
                Since then, that same principle runs the entire salon: every
                client gets a stylist who listens first, tools that are
                sanitized between every chair, and a space designed to be
                enjoyed, not endured.
              </p>
              <p>
                Today we offer over 50 services across nine categories — from
                a fifteen-minute trim to a full Hydra Facial and massage
                combination — all at transparent, published prices.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
