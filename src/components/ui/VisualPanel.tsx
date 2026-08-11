import { LucideIcon } from "lucide-react";

interface VisualPanelProps {
  icon: LucideIcon;
  label?: string;
  className?: string;
  tone?: "accent" | "neutral";
}

export default function VisualPanel({
  icon: Icon,
  label,
  className = "",
  tone = "accent",
}: VisualPanelProps) {
  return (
    <div
      className={`relative isolate flex items-center justify-center overflow-hidden rounded-[1.75rem] border border-border bg-surface-1 ${className}`}
    >
      <div className="bg-grid absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
      <div
        className={`absolute -top-1/3 left-1/2 h-2/3 w-2/3 -translate-x-1/2 rounded-full blur-3xl ${
          tone === "accent" ? "bg-accent/20" : "bg-white/10"
        }`}
      />
      <Icon
        className={`relative size-16 sm:size-20 ${
          tone === "accent" ? "text-accent" : "text-white/70"
        }`}
        strokeWidth={1.25}
      />
      {label && (
        <span className="absolute bottom-4 left-5 text-xs font-semibold uppercase tracking-[0.2em] text-muted">
          {label}
        </span>
      )}
    </div>
  );
}
