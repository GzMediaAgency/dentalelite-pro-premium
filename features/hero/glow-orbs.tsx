"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

/**
 * features/hero/glow-orbs.tsx
 * Formes lumineuses en arrière-plan (halo doré + halo bleu médical), avec
 * une dérive organique lente en GSAP (repeat infini, yoyo, ease sinusoïdal)
 * pour un effet "vivant" sans être distrayant. Purement décoratif
 * (aria-hidden), désactivé si prefers-reduced-motion.
 */
export function GlowOrbs() {
  const goldRef = useRef<HTMLDivElement>(null);
  const blueRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      if (goldRef.current) {
        gsap.to(goldRef.current, {
          x: 40,
          y: -30,
          duration: 9,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }
      if (blueRef.current) {
        gsap.to(blueRef.current, {
          x: -50,
          y: 40,
          duration: 11,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div
        ref={goldRef}
        className="absolute -right-24 top-10 h-96 w-96 rounded-full bg-accent/25 blur-[100px]"
      />
      <div
        ref={blueRef}
        className="absolute -left-24 bottom-0 h-[28rem] w-[28rem] rounded-full bg-secondary/25 blur-[110px]"
      />
    </div>
  );
}
