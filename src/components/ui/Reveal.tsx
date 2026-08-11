"use client";

import { ReactNode } from "react";
import { motion, Variants } from "framer-motion";

type Direction = "up" | "down" | "left" | "right" | "zoom" | "fade";

interface RevealProps {
  children: ReactNode;
  className?: string;
  direction?: Direction;
  delay?: number;
  duration?: number;
  amount?: number;
  as?: "div" | "li";
}

const OFFSET = 36;

function getVariants(direction: Direction, duration: number): Variants {
  const base = {
    up: { y: OFFSET, opacity: 0 },
    down: { y: -OFFSET, opacity: 0 },
    left: { x: OFFSET, opacity: 0 },
    right: { x: -OFFSET, opacity: 0 },
    zoom: { scale: 0.9, opacity: 0 },
    fade: { opacity: 0 },
  }[direction];

  return {
    offscreen: base,
    onscreen: {
      x: 0,
      y: 0,
      scale: 1,
      opacity: 1,
      transition: { duration, ease: [0.22, 1, 0.36, 1] },
    },
  };
}

export default function Reveal({
  children,
  className,
  direction = "up",
  delay = 0,
  duration = 0.6,
  amount = 0.2,
  as = "div",
}: RevealProps) {
  const Component = motion[as];

  return (
    <Component
      className={className}
      variants={getVariants(direction, duration)}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount }}
      transition={{ delay }}
    >
      {children}
    </Component>
  );
}

export function RevealGroup({
  children,
  className,
  stagger = 0.12,
  amount = 0.2,
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
  amount?: number;
}) {
  return (
    <motion.div
      className={className}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount }}
      variants={{
        onscreen: { transition: { staggerChildren: stagger } },
      }}
    >
      {children}
    </motion.div>
  );
}
