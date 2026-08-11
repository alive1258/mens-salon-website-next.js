import Image from "next/image";
import Section from "@/src/components/ui/Section";
import SectionHeading from "@/src/components/ui/SectionHeading";
import Reveal from "@/src/components/ui/Reveal";
import FaqAccordion from "@/src/components/ui/FaqAccordion";
import { faqs } from "@/src/data/faqs";

export default function FaqSection() {
  return (
    <Section>
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal
          direction="fade"
          className="relative aspect-4/5 w-full overflow-hidden rounded-3xl border border-border lg:aspect-auto lg:h-full lg:min-h-[520px]"
        >
          <Image
            src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=1000&q=80"
            alt="Inside ScissorHand"
            fill
            sizes="(min-width: 1024px) 46vw, 100vw"
            className="object-cover"
          />
        </Reveal>

        <div>
          <SectionHeading
            eyebrow="Questions"
            title="Got questions?"
            description="Everything you need to know before your first session — can't find it here? Reach out anytime."
          />
          <div className="mt-10">
            <FaqAccordion items={faqs} />
          </div>
        </div>
      </div>
    </Section>
  );
}
