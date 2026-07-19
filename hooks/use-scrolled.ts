"use client";

import * as React from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";

/**
 * hooks/use-scrolled.ts
 * Retourne `true` dès que la page a défilé au-delà de `threshold` (px).
 * Utilise les motion values de Framer Motion pour éviter un re-render à
 * chaque pixel scrollé — seul un changement d'état booléen déclenche un
 * re-render (au franchissement du seuil).
 */
export function useScrolled(threshold = 24): boolean {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = React.useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > threshold);
  });

  return scrolled;
}
