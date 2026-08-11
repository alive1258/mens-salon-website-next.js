"use client";

import { useEffect } from "react";
import { X } from "lucide-react";

interface VideoModalProps {
  youtubeId: string;
  title: string;
  onClose: () => void;
}

export default function VideoModal({ youtubeId, title, onClose }: VideoModalProps) {
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={title}
      className="fixed inset-0 z-100 flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm sm:p-8"
      onClick={onClose}
    >
      <button
        aria-label="Close video"
        onClick={onClose}
        className="absolute right-4 top-4 flex size-11 items-center justify-center rounded-full border border-white/20 text-white transition-colors duration-200 hover:border-accent hover:text-accent sm:right-8 sm:top-8"
      >
        <X className="size-5" />
      </button>
      <div
        className="aspect-video w-full max-w-4xl overflow-hidden rounded-2xl border border-border-strong bg-black"
        onClick={(e) => e.stopPropagation()}
      >
        <iframe
          className="size-full"
          src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    </div>
  );
}
