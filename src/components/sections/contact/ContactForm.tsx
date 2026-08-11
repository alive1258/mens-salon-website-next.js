"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import Reveal from "@/src/components/ui/Reveal";
import { services } from "@/src/data/services";

interface FormValues {
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
}

const fieldClass =
  "w-full rounded-xl border border-border-strong bg-background px-4 py-3 text-sm outline-none transition-colors duration-200 focus:border-accent";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>();

  const onSubmit = async () => {
    await new Promise((r) => setTimeout(r, 600));
    setSubmitted(true);
    reset();
  };

  if (submitted) {
    return (
      <Reveal
        direction="fade"
        className="flex h-full flex-col items-center justify-center rounded-3xl border border-border bg-surface-1 p-10 text-center"
      >
        <CheckCircle2 className="size-12 text-accent" />
        <h3 className="font-display mt-5 text-2xl">Message sent.</h3>
        <p className="mt-2 max-w-xs text-sm text-muted">
          A member of our team will reach out within one business day.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-6 text-sm font-semibold uppercase tracking-wide text-accent"
        >
          Send another message
        </button>
      </Reveal>
    );
  }

  return (
    <Reveal direction="left">
      <form
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        className="rounded-3xl border border-border bg-surface-1 p-8 sm:p-10"
      >
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label className="text-xs font-semibold uppercase tracking-wide text-muted">
              Full Name
            </label>
            <input
              className={`${fieldClass} mt-2`}
              placeholder="Rafiul Islam"
              {...register("name", { required: "Name is required" })}
            />
            {errors.name && (
              <p className="mt-1.5 text-xs text-red-400">{errors.name.message}</p>
            )}
          </div>
          <div>
            <label className="text-xs font-semibold uppercase tracking-wide text-muted">
              Phone
            </label>
            <input
              type="tel"
              className={`${fieldClass} mt-2`}
              placeholder="+880 1XXX-XXXXXX"
              {...register("phone", { required: "Phone number is required" })}
            />
            {errors.phone && (
              <p className="mt-1.5 text-xs text-red-400">{errors.phone.message}</p>
            )}
          </div>
        </div>

        <div className="mt-5 grid gap-5 sm:grid-cols-2">
          <div>
            <label className="text-xs font-semibold uppercase tracking-wide text-muted">
              Email (optional)
            </label>
            <input
              type="email"
              className={`${fieldClass} mt-2`}
              placeholder="you@email.com"
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
          <div>
            <label className="text-xs font-semibold uppercase tracking-wide text-muted">
              Service Interested In
            </label>
            <select
              className={`${fieldClass} mt-2`}
              defaultValue=""
              {...register("service")}
            >
              <option value="" disabled>
                Select a service
              </option>
              {services.map((s) => (
                <option key={s.id} value={s.name}>
                  {s.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="mt-5">
          <label className="text-xs font-semibold uppercase tracking-wide text-muted">
            Message
          </label>
          <textarea
            rows={5}
            className={`${fieldClass} mt-2 resize-none`}
            placeholder="Tell us what you're looking for, or the best time to visit."
            {...register("message", { required: "Message is required" })}
          />
          {errors.message && (
            <p className="mt-1.5 text-xs text-red-400">{errors.message.message}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="group mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold uppercase tracking-wide text-accent-foreground transition-colors duration-300 hover:bg-accent-dark disabled:opacity-60 sm:w-auto"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
          <Send className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
        </button>
      </form>
    </Reveal>
  );
}
