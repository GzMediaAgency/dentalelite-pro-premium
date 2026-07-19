"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

/**
 * hooks/use-magnetic.ts
 * Effet "bouton magnétique" (façon Linear/Raycast) : l'élément suit
 * légèrement le curseur dans sa zone de survol, puis revient à sa position
 * d'origine avec un easing élastique doux. Désactivé si l'utilisateur
 * préfère les animations réduites, et sur les écrans tactiles (pas de
 * curseur, pas d'effet).
 */
export function useMagnetic<T extends HTMLElement>(strength = 0.35) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;
    if (prefersReducedMotion || isTouchDevice) return;

    const xTo = gsap.quickTo(el, "x", { duration: 0.6, ease: "power3" });
    const yTo = gsap.quickTo(el, "y", { duration: 0.6, ease: "power3" });

    function handleMove(event: MouseEvent) {
      const rect = el!.getBoundingClientRect();
      const relX = event.clientX - rect.left - rect.width / 2;
      const relY = event.clientY - rect.top - rect.height / 2;
      xTo(relX * strength);
      yTo(relY * strength);
    }

    function handleLeave() {
      xTo(0);
      yTo(0);
    }

    el.addEventListener("mousemove", handleMove);
    el.addEventListener("mouseleave", handleLeave);
    return () => {
      el.removeEventListener("mousemove", handleMove);
      el.removeEventListener("mouseleave", handleLeave);
      xTo(0);
      yTo(0);
    };
  }, [strength]);

  return ref;
}
