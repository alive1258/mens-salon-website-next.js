import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  tone?: "base" | "raised";
}

export default function Section({
  children,
  className = "",
  id,
  tone = "base",
}: SectionProps) {
  return (
    <section
      id={id}
      className={`relative py-20 sm:py-24 lg:py-28 ${
        tone === "raised" ? "bg-surface-2" : "bg-surface-1"
      } ${className}`}
    >
      <div className="container">{children}</div>
    </section>
  );
}
