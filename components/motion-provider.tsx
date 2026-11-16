"use client";

import { MotionConfig } from "motion/react";

import { usePrefersReducedMotion } from "@/lib/use-prefers-reduced-motion";

export function MotionProvider({ children }: { children: React.ReactNode }) {
  const reduceMotion = usePrefersReducedMotion();

  return (
    <MotionConfig reducedMotion={reduceMotion ? "always" : "never"}>
      {children}
    </MotionConfig>
  );
}
