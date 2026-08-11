import { Phone, Mail, MapPin, Clock } from "lucide-react";
import Reveal from "@/src/components/ui/Reveal";
import VisualPanel from "@/src/components/ui/VisualPanel";
import { siteConfig, locations } from "@/src/data/site";

const items = [
  { icon: Phone, label: "Call Us", value: siteConfig.phone },
  { icon: Mail, label: "Email Us", value: siteConfig.email },
];

export default function ContactInfo() {
  return (
    <Reveal direction="right" className="flex h-full flex-col gap-6">
      <VisualPanel icon={MapPin} label="ScissorHand Locations" className="aspect-[16/10] w-full" />

      <div className="grid gap-4 rounded-3xl border border-border bg-surface-1 p-6 sm:p-8">
        {items.map((item) => (
          <div key={item.label} className="flex items-start gap-4">
            <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
              <item.icon className="size-5" strokeWidth={1.5} />
            </span>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-muted">
                {item.label}
              </p>
              <p className="mt-1 text-sm text-foreground/90">{item.value}</p>
            </div>
          </div>
        ))}

        <div className="flex items-start gap-4 border-t border-border pt-4">
          <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
            <Clock className="size-5" strokeWidth={1.5} />
          </span>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-muted">
              Hours
            </p>
            <div className="mt-1 space-y-0.5">
              {siteConfig.hours.map((h) => (
                <p key={h.days} className="text-sm text-foreground/90">
                  <span className="text-muted">{h.days}:</span> {h.time}
                </p>
              ))}
            </div>
          </div>
        </div>

        <div className="flex items-start gap-4 border-t border-border pt-4">
          <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
            <MapPin className="size-5" strokeWidth={1.5} />
          </span>
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-wide text-muted">
              Our Lounges
            </p>
            {locations.map((loc) => (
              <div key={loc.id}>
                <p className="text-sm font-semibold text-foreground/90">{loc.name}</p>
                <p className="mt-0.5 text-sm text-muted">{loc.address}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Reveal>
  );
}
