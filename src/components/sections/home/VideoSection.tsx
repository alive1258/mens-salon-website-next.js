"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { Play, ChevronLeft, ChevronRight } from "lucide-react";
import Section from "@/src/components/ui/Section";
import SectionHeading from "@/src/components/ui/SectionHeading";
import Reveal from "@/src/components/ui/Reveal";
import VideoModal from "@/src/components/sections/home/VideoModal";
import { featuredVideo, videos, type SalonVideo } from "@/src/data/videos";

export default function VideoSection() {
  const [active, setActive] = useState<SalonVideo | null>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollByAmount = (dir: 1 | -1) => {
    trackRef.current?.scrollBy({ left: dir * 340, behavior: "smooth" });
  };

  return (
    <Section tone="raised">
      <SectionHeading
        eyebrow="Watch & Learn"
        title="See the craft in motion."
        description="A look at the techniques and treatments behind every visit."
        align="center"
        className="mx-auto"
      />

      <Reveal direction="zoom" className="mt-14">
        <button
          onClick={() => setActive(featuredVideo)}
          className="group relative block aspect-21/9 w-full overflow-hidden rounded-3xl border border-border bg-surface-2"
        >
          <Image
            src={featuredVideo.thumbnail}
            alt={featuredVideo.title}
            fill
            sizes="(min-width: 1024px) 1200px, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-linear-to-t from-background/80 via-background/10 to-background/20" />
          <span className="absolute inset-0 flex items-center justify-center">
            <span className="flex size-16 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-[0_0_40px_-8px_rgba(200,164,92,0.6)] transition-transform duration-300 group-hover:scale-110 sm:size-20">
              <Play className="size-6 translate-x-0.5 sm:size-8" fill="currentColor" />
            </span>
          </span>
          <span className="absolute bottom-5 left-6 text-sm font-semibold uppercase tracking-wide text-white/90 sm:text-base">
            {featuredVideo.title}
          </span>
        </button>
      </Reveal>

      <div className="mt-10 flex items-center justify-between">
        <p className="text-sm font-semibold uppercase tracking-wide text-muted">
          More from the salon floor
        </p>
        <div className="hidden gap-2 sm:flex">
          <button
            aria-label="Scroll left"
            onClick={() => scrollByAmount(-1)}
            className="flex size-9 items-center justify-center rounded-full border border-border-strong text-foreground transition-colors duration-200 hover:border-accent hover:text-accent"
          >
            <ChevronLeft className="size-4" />
          </button>
          <button
            aria-label="Scroll right"
            onClick={() => scrollByAmount(1)}
            className="flex size-9 items-center justify-center rounded-full border border-border-strong text-foreground transition-colors duration-200 hover:border-accent hover:text-accent"
          >
            <ChevronRight className="size-4" />
          </button>
        </div>
      </div>

      <div
        ref={trackRef}
        className="scrollbar-hidden mt-5 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2"
      >
        {videos.map((video, i) => (
          <Reveal
            key={video.id}
            direction="fade"
            delay={Math.min(i, 5) * 0.05}
            className="w-64 shrink-0 snap-start sm:w-72"
          >
            <button
              onClick={() => setActive(video)}
              className="group relative block aspect-video w-full overflow-hidden rounded-2xl border border-border bg-surface-2"
            >
              <Image
                src={video.thumbnail}
                alt={video.title}
                fill
                sizes="288px"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-background/85 via-background/10 to-transparent" />
              <span className="absolute inset-0 flex items-center justify-center">
                <span className="flex size-11 items-center justify-center rounded-full bg-background/80 text-accent backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
                  <Play className="size-4 translate-x-0.5" fill="currentColor" />
                </span>
              </span>
              <span className="absolute bottom-3 left-4 right-4 text-left text-xs font-semibold uppercase tracking-wide text-white/90">
                {video.title}
              </span>
            </button>
          </Reveal>
        ))}
      </div>

      {active && (
        <VideoModal
          youtubeId={active.youtubeId}
          title={active.title}
          onClose={() => setActive(null)}
        />
      )}
    </Section>
  );
}
