"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import Section from "@/src/components/ui/Section";
import Reveal from "@/src/components/ui/Reveal";
import { priceList, priceListGroups } from "@/src/data/priceList";

export default function PriceListTable() {
  const [query, setQuery] = useState("");
  const [activeGroup, setActiveGroup] = useState("All");

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
        <div className="mt-6 space-y-12">
          {grouped.map((group) => (
            <div key={group.category}>
              <h3 className="font-display text-2xl text-accent">{group.category}</h3>
              <div className="mt-5 overflow-hidden rounded-2xl border border-border">
                <table className="w-full text-left text-sm">
                  <tbody>
                    {group.items.map((item, i) => (
                      <tr
                        key={item.id}
                        className={`${
                          i % 2 === 0 ? "bg-surface-1" : "bg-surface-2"
                        }`}
                      >
                        <td className="px-5 py-3.5 text-foreground/90">
                          {item.name}
                        </td>
                        <td className="px-5 py-3.5 text-right font-semibold whitespace-nowrap text-accent">
                          ৳{item.price}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>
      )}
    </Section>
  );
}
