"use client";

import { useScrollReveal } from "@/src/hooks/use-scroll-reveal";

/**
 * Runs the reveal-on-scroll observer without turning the whole page into a
 * client component, so pages can export `metadata`.
 */
export default function ScrollReveal() {
  useScrollReveal();
  return null;
}
