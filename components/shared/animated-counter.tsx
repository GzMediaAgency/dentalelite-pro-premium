"use client";

import * as React from "react";
import { useInView, useMotionValue, useSpring, useReducedMotion } from "framer-motion";

/**
 * components/shared/animated-counter.tsx
 * Compteur numérique qui s'anime de 0 à `value` lorsqu'il entre dans le
 * viewport. Respecte prefers-reduced-motion (affiche directement la valeur
 * finale sans animation). Utilisé par la section Chiffres (Sprint 1) et
 * le compteur d'avis Google (Sprint 7) — extrait ici en composant partagé
 * plutôt que dupliqué, comme signalé dans l'audit initial.
 */
function formatValue(n: number, isInteger: boolean): string {
  return isInteger ? Math.round(n).toString() : n.toFixed(1);
}

export function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const ref = React.useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const prefersReducedMotion = useReducedMotion();
  const isInteger = Number.isInteger(value);
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, {
    duration: prefersReducedMotion ? 0 : 1800,
    bounce: 0,
  });
  const [display, setDisplay] = React.useState(() => formatValue(0, isInteger));

  React.useEffect(() => {
    if (!inView) return;
    motionValue.set(value);
  }, [inView, motionValue, value]);

  React.useEffect(() => {
    const unsubscribe = spring.on("change", (latest) => {
      setDisplay(formatValue(latest, isInteger));
    });
    return unsubscribe;
  }, [spring, isInteger]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}
