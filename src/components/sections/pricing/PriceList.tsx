"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Search } from "lucide-react";
import Section from "@/src/components/ui/Section";
import Reveal from "@/src/components/ui/Reveal";
import { priceList, priceListGroups } from "@/src/data/priceList";

export default function PriceList() {
  const [query, setQuery] = useState("");
  const [activeGroup, setActiveGroup] = useState("All");
  const [openSet, setOpenSet] = useState<Set<string>>(
    () => new Set([priceListGroups[0]?.categories[0]])
  );

  const activeCategories =
    activeGroup === "All"
      ? null
      : priceListGroups.find((g) => g.label === activeGroup)?.categories ?? null;

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return priceList.filter((item) => {
      if (activeCategories && !activeCategories.includes(item.category)) return false;
      if (!q) return true;
      return (
        item.name.toLowerCase().includes(q) || item.category.toLowerCase().includes(q)
      );
    });
  }, [query, activeCategories]);

  const grouped = useMemo(() => {
    const order = priceListGroups.flatMap((g) => g.categories);
    const map = new Map<string, typeof filtered>();
    for (const item of filtered) {
      const list = map.get(item.category) ?? [];
      list.push(item);
      map.set(item.category, list);
    }
    return order
      .filter((cat) => map.has(cat))
      .map((cat) => ({ category: cat, items: map.get(cat)! }));
  }, [filtered]);

  const searchActive = query.trim() !== "";
  const filterActive = activeGroup !== "All";
  const isOpen = (category: string) =>
    searchActive || filterActive || openSet.has(category);

  const toggleCategory = (category: string) => {
    setOpenSet((prev) => {
      const next = new Set(prev);
      if (next.has(category)) next.delete(category);
      else next.add(category);
      return next;
    });
  };

  return (
    <Section>
      <Reveal direction="fade">
        <div className="flex flex-col gap-6">
          <div className="relative max-w-md">
            <Search className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-muted" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search a service…"
              className="w-full rounded-full border border-border bg-surface-2 py-3 pl-11 pr-4 text-sm text-foreground placeholder:text-muted focus:border-accent focus:outline-none"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {["All", ...priceListGroups.map((g) => g.label)].map((label) => (
              <button
                key={label}
                onClick={() => setActiveGroup(label)}
                className={`relative rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-wide transition-colors duration-300 sm:text-sm ${
                  activeGroup === label
                    ? "text-accent-foreground"
                    : "text-muted hover:text-foreground"
                }`}
              >
                {activeGroup === label && (
                  <motion.span
                    layoutId="price-list-filter-pill"
                    className="absolute inset-0 rounded-full bg-accent"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                <span className="relative">{label}</span>
              </button>
            ))}
          </div>
        </div>
      </Reveal>

      <p className="mt-8 text-sm text-muted">
        {filtered.length} service{filtered.length === 1 ? "" : "s"} found
      </p>

      {grouped.length === 0 ? (
        <div className="mt-6 rounded-3xl border border-border bg-surface-1 p-12 text-center text-muted">
          No services found matching &ldquo;{query}&rdquo;.
        </div>
      ) : (
        <div className="mt-6 space-y-4">
          {grouped.map((group, gi) => {
            const open = isOpen(group.category);
            return (
              <Reveal key={group.category} direction="up" delay={Math.min(gi, 6) * 0.04}>
                <div className="overflow-hidden rounded-3xl border border-border bg-surface-1">
                  <button
                    onClick={() => toggleCategory(group.category)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left sm:px-8"
                    aria-expanded={open}
                  >
                    <span className="flex items-center gap-3">
                      <span className="font-display text-xl text-accent sm:text-2xl">
                        {group.category}
                      </span>
                      <span className="rounded-full bg-surface-2 px-2.5 py-1 text-xs font-semibold text-muted">
                        {group.items.length}
                      </span>
                    </span>
                    <motion.span
                      animate={{ rotate: open ? 180 : 0 }}
                      transition={{ duration: 0.25 }}
                      className="flex size-8 shrink-0 items-center justify-center rounded-full border border-border-strong text-accent"
                    >
                      <ChevronDown className="size-4" />
                    </motion.span>
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
                        <div className="grid grid-cols-1 gap-x-10 px-6 pb-6 sm:grid-cols-2 sm:px-8">
                          {group.items.map((item) => (
                            <div
                              key={item.id}
                              className="flex items-baseline gap-3 rounded-lg px-2 py-2.5 transition-colors duration-200 hover:bg-surface-2"
                            >
                              <span className="text-sm text-foreground/90">
                                {item.name}
                              </span>
                              <span className="-translate-y-1 flex-1 border-b border-dotted border-border-strong" />
                              <span className="shrink-0 text-sm font-semibold whitespace-nowrap text-accent">
                                ৳{item.price}
                              </span>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      )}
    </Section>
  );
}
