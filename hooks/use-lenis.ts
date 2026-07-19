"use client";

import * as React from "react";
import Lenis from "lenis";

/**
 * hooks/use-lenis.ts
 * Initialise Lenis (smooth scroll) et le synchronise avec requestAnimationFrame.
 * Désactivé automatiquement si l'utilisateur préfère les animations réduites
 * (accessibilité — WCAG 2.3.3).
 */
export function useLenis(): void {
  React.useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) return;

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);
}
