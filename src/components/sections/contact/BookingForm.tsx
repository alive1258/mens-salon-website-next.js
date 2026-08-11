"use client";

import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { AnimatePresence, motion } from "framer-motion";
import {
  CheckCircle2,
  ChevronDown,
  Search,
  ShieldCheck,
  X,
} from "lucide-react";
import Reveal from "@/src/components/ui/Reveal";
import SectionHeading from "@/src/components/ui/SectionHeading";
import { locations } from "@/src/data/site";
import { priceList, priceListCategories, type PriceListItem } from "@/src/data/priceList";

const timeSlots = [
  "10:00 AM",
  "11:15 AM",
  "12:30 PM",
  "01:45 PM",
  "03:00 PM",
  "04:15 PM",
  "05:30 PM",
  "06:45 PM",
  "08:30 PM",
];

const dateOptions = Array.from({ length: 7 }, (_, i) => {
  const d = new Date();
  d.setDate(d.getDate() + i);
  return d;
});

interface FormValues {
  name: string;
  phone: string;
  email: string;
  notes: string;
}

const fieldClass =
  "w-full rounded-xl border border-border-strong bg-background px-4 py-3 text-sm outline-none transition-colors duration-200 focus:border-accent";

export default function BookingForm() {
  const [locationId, setLocationId] = useState<string | null>(null);
  const [serviceQuery, setServiceQuery] = useState("");
  const [selectedService, setSelectedService] = useState<PriceListItem | null>(null);
  const [openCategory, setOpenCategory] = useState<string | null>(null);
  const [dateIndex, setDateIndex] = useState(0);
  const [time, setTime] = useState<string | null>(null);
  const [wizardError, setWizardError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState<{
    location: string;
    date: string;
    time: string;
    service: string | null;
  } | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>();

  const categories = useMemo(() => {
    const q = serviceQuery.trim().toLowerCase();
    return priceListCategories
      .map((category) => {
        const items = priceList.filter((item) => item.category === category);
        const matches = q
          ? items.filter(
              (item) =>
                item.name.toLowerCase().includes(q) ||
                item.category.toLowerCase().includes(q)
            )
          : items;
        return { category, items, matches };
      })
      .filter((c) => (q ? c.matches.length > 0 : true));
  }, [serviceQuery]);

  const isCategoryOpen = (category: string) =>
    serviceQuery.trim() !== "" || openCategory === category;

  const selectedLocation = locations.find((l) => l.id === locationId) ?? null;
  const selectedDate = dateOptions[dateIndex];

  const onSubmit = async (data: FormValues) => {
    if (!locationId) {
      setWizardError("Please choose a lounge location to continue.");
      return;
    }
    if (!time) {
      setWizardError("Please pick a preferred time slot to continue.");
      return;
    }
    setWizardError(null);
    void data;
    await new Promise((r) => setTimeout(r, 600));
    setSubmitted({
      location: selectedLocation!.name,
      date: selectedDate.toLocaleDateString("en-US", {
        weekday: "long",
        day: "numeric",
        month: "long",
      }),
      time,
      service: selectedService?.name ?? null,
    });
    reset();
  };

  const resetWizard = () => {
    setSubmitted(null);
    setLocationId(null);
    setSelectedService(null);
    setServiceQuery("");
    setOpenCategory(null);
    setDateIndex(0);
    setTime(null);
    setWizardError(null);
  };

  if (submitted) {
    return (
      <Reveal
        direction="fade"
        className="flex h-full flex-col items-center justify-center rounded-3xl border border-border bg-surface-1 p-10 text-center"
      >
        <CheckCircle2 className="size-12 text-accent" />
        <h3 className="font-display mt-5 text-2xl">Booking secured.</h3>
        <p className="mt-2 max-w-sm text-sm text-muted">
          {submitted.location} — {submitted.date} at {submitted.time}
          {submitted.service ? ` for ${submitted.service}` : ""}. A member of our
          team will confirm your reservation shortly.
        </p>
        <button
          onClick={resetWizard}
          className="mt-6 text-sm font-semibold uppercase tracking-wide text-accent"
        >
          Book another session
        </button>
      </Reveal>
    );
  }

  return (
    <Reveal direction="left">
      <SectionHeading
        eyebrow="Secure Your Session"
        title="Reserve Grooming Session"
        description="Complete our secure reservation checklist. Your transformation begins with one appointment. Open everyday in Dhaka."
      />

      <form
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        className="mt-10 rounded-3xl border border-border bg-surface-1 p-8 sm:p-10"
      >
        {/* Step 1 */}
        <StepHeader step={1} title="Choose Lounge Location" />
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {locations.map((loc) => {
            const active = locationId === loc.id;
            return (
              <button
                key={loc.id}
                type="button"
                onClick={() => setLocationId(loc.id)}
                className={`rounded-2xl border p-5 text-left transition-colors duration-200 ${
                  active
                    ? "border-accent bg-accent/5"
                    : "border-border-strong hover:border-accent/50"
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <p className="font-semibold text-foreground">{loc.name}</p>
                  {active && <CheckCircle2 className="size-5 shrink-0 text-accent" />}
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted">{loc.address}</p>
                <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-accent">
                  Hours: {loc.hours}
                </p>
              </button>
            );
          })}
        </div>

        {/* Step 2 */}
        <StepHeader step={2} title="Select Grooming Service" optional className="mt-10" />
        <div className="relative mt-4 max-w-md">
          <Search className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-muted" />
          <input
            type="text"
            value={serviceQuery}
            onChange={(e) => setServiceQuery(e.target.value)}
            placeholder="Search any service (e.g. Facial, Massage, Hair Cut)…"
            className="w-full rounded-full border border-border bg-background py-3 pl-11 pr-4 text-sm text-foreground placeholder:text-muted focus:border-accent focus:outline-none"
          />
        </div>

        {selectedService && (
          <div className="mt-4 flex items-center gap-3 rounded-xl border border-accent/40 bg-accent/5 px-4 py-3">
            <span className="text-sm font-semibold text-foreground">
              {selectedService.name}
            </span>
            <span className="text-sm font-semibold text-accent">
              ৳{selectedService.price}
            </span>
            <button
              type="button"
              onClick={() => setSelectedService(null)}
              className="ml-auto flex items-center gap-1 text-xs font-semibold uppercase tracking-wide text-muted hover:text-foreground"
            >
              <X className="size-3.5" />
              Clear
            </button>
          </div>
        )}

        <div className="mt-4 space-y-3">
          {categories.map(({ category, items, matches }) => {
            const open = isCategoryOpen(category);
            const list = serviceQuery.trim() ? matches : items;
            return (
              <div
                key={category}
                className="overflow-hidden rounded-2xl border border-border"
              >
                <button
                  type="button"
                  onClick={() =>
                    setOpenCategory((prev) => (prev === category ? null : category))
                  }
                  className="flex w-full items-center justify-between gap-4 bg-surface-2 px-5 py-4 text-left"
                  aria-expanded={open}
                >
                  <span className="text-sm font-semibold uppercase tracking-wide text-foreground">
                    {category}
                  </span>
                  <span className="flex items-center gap-3">
                    <span className="rounded-full bg-surface-1 px-2.5 py-1 text-xs font-semibold text-muted">
                      {list.length}
                    </span>
                    <motion.span
                      animate={{ rotate: open ? 180 : 0 }}
                      transition={{ duration: 0.25 }}
                      className="text-accent"
                    >
                      <ChevronDown className="size-4" />
                    </motion.span>
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {open && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="divide-y divide-border">
                        {list.map((item) => (
                          <button
                            key={item.id}
                            type="button"
                            onClick={() => setSelectedService(item)}
                            className={`flex w-full items-center justify-between gap-4 px-5 py-3 text-left text-sm transition-colors duration-200 hover:bg-surface-2 ${
                              selectedService?.id === item.id
                                ? "bg-accent/5 text-accent"
                                : "text-foreground/90"
                            }`}
                          >
                            <span>{item.name}</span>
                            <span className="shrink-0 font-semibold">
                              ৳{item.price}
                            </span>
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Step 2.5 */}
        <StepHeader step="2.5" title="Select Grooming Expert" optional className="mt-10" />
        <select
          className={`${fieldClass} mt-4 max-w-md`}
          defaultValue="any"
          disabled
        >
          <option value="any">Any Stylist (Recommended)</option>
        </select>

        {/* Step 3 */}
        <StepHeader step={3} title="Select Preferred Date" className="mt-10" />
        <div className="scrollbar-hidden mt-4 flex gap-3 overflow-x-auto pb-2">
          {dateOptions.map((d, i) => {
            const active = dateIndex === i;
            return (
              <button
                key={d.toISOString()}
                type="button"
                onClick={() => setDateIndex(i)}
                className={`flex w-20 shrink-0 flex-col items-center gap-1 rounded-2xl border px-3 py-4 transition-colors duration-200 ${
                  active
                    ? "border-accent bg-accent text-accent-foreground"
                    : "border-border-strong hover:border-accent/50"
                }`}
              >
                <span className="text-xs font-semibold uppercase tracking-wide">
                  {d.toLocaleDateString("en-US", { weekday: "short" })}
                </span>
                <span className="font-display text-2xl">{d.getDate()}</span>
                <span className="text-xs uppercase tracking-wide">
                  {d.toLocaleDateString("en-US", { month: "short" })}
                </span>
              </button>
            );
          })}
        </div>

        {/* Step 4 */}
        <StepHeader step={4} title="Pick Luxury Slot" className="mt-10" />
        <div className="mt-4 grid grid-cols-3 gap-3 sm:grid-cols-5">
          {timeSlots.map((slot) => {
            const active = time === slot;
            return (
              <button
                key={slot}
                type="button"
                onClick={() => setTime(slot)}
                className={`rounded-xl border px-3 py-2.5 text-sm font-semibold transition-colors duration-200 ${
                  active
                    ? "border-accent bg-accent text-accent-foreground"
                    : "border-border-strong text-foreground/90 hover:border-accent/50"
                }`}
              >
                {slot}
              </button>
            );
          })}
        </div>

        {/* Contact details */}
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          <div>
            <label className="text-xs font-semibold uppercase tracking-wide text-muted">
              VIP Name *
            </label>
            <input
              className={`${fieldClass} mt-2`}
              placeholder="e.g. Asif Chowdhury"
              {...register("name", { required: "Name is required" })}
            />
            {errors.name && (
              <p className="mt-1.5 text-xs text-red-400">{errors.name.message}</p>
            )}
          </div>
          <div>
            <label className="text-xs font-semibold uppercase tracking-wide text-muted">
              Phone Number *
            </label>
            <input
              type="tel"
              className={`${fieldClass} mt-2`}
              placeholder="e.g. +880 1919-700800"
              {...register("phone", { required: "Phone number is required" })}
            />
            {errors.phone && (
              <p className="mt-1.5 text-xs text-red-400">{errors.phone.message}</p>
            )}
          </div>
        </div>

        <div className="mt-5">
          <label className="text-xs font-semibold uppercase tracking-wide text-muted">
            Email Address (Optional)
          </label>
          <input
            type="email"
            className={`${fieldClass} mt-2`}
            placeholder="e.g. asif@mail.com"
            {...register("email", {
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Enter a valid email",
              },
            })}
          />
          {errors.email && (
            <p className="mt-1.5 text-xs text-red-400">{errors.email.message}</p>
          )}
        </div>

        <div className="mt-5">
          <label className="text-xs font-semibold uppercase tracking-wide text-muted">
            Special Instructions (Optional)
          </label>
          <textarea
            rows={4}
            className={`${fieldClass} mt-2 resize-none`}
            placeholder="Detail any allergies, specific fade requests, or beverage preference."
            {...register("notes")}
          />
        </div>

        {wizardError && (
          <p className="mt-4 text-sm text-red-400">{wizardError}</p>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="group mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold uppercase tracking-wide text-accent-foreground transition-colors duration-300 hover:bg-accent-dark disabled:opacity-60"
        >
          {isSubmitting ? "Authenticating..." : "Authenticate VIP Booking"}
          <ShieldCheck className="size-4 transition-transform duration-300 group-hover:scale-110" />
        </button>

        <p className="mt-4 text-center text-xs uppercase tracking-wide text-muted">
          Your transformation begins with one appointment. Selected lounge hours:{" "}
          {selectedLocation?.hours ?? "10:00 AM – 10:00 PM"}.
        </p>
      </form>
    </Reveal>
  );
}

function StepHeader({
  step,
  title,
  optional,
  className = "",
}: {
  step: number | string;
  title: string;
  optional?: boolean;
  className?: string;
}) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-accent/10 text-sm font-semibold text-accent">
        {step}
      </span>
      <h3 className="font-display text-lg sm:text-xl">
        {title}
        {optional && (
          <span className="ml-2 text-sm font-sans font-normal text-muted">
            (Optional)
          </span>
        )}
      </h3>
    </div>
  );
}
