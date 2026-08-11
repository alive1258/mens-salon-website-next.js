import Image from "next/image";
import Section from "@/src/components/ui/Section";
import SectionHeading from "@/src/components/ui/SectionHeading";
import Reveal, { RevealGroup } from "@/src/components/ui/Reveal";
import { galleryPhotos } from "@/src/data/gallery";

export default function PhotoGallery() {
  return (
    <Section tone="raised">
      <SectionHeading
        eyebrow="Inside ScissorHand"
        title="Life inside the salon."
        description="A look inside the space — the chairs, the stations, and everything built for the craft."
        align="center"
        className="mx-auto"
      />

      <RevealGroup className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {galleryPhotos.map((photo, i) => (
          <Reveal
            key={photo.id}
            direction="fade"
            delay={(i % 3) * 0.08}
            className="group relative aspect-4/3 overflow-hidden rounded-2xl border border-border bg-surface-1"
          >
            <Image
              src={photo.image}
              alt={photo.caption}
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/80 to-transparent p-4 pt-10">
              <p className="text-xs font-semibold uppercase tracking-wide text-white/90">
                {photo.caption}
              </p>
            </div>
          </Reveal>
        ))}
      </RevealGroup>
    </Section>
  );
}
