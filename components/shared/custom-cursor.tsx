"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

/**
 * components/shared/custom-cursor.tsx
 * -----------------------------------------------------------------------
 * Curseur personnalisé façon Linear/Raycast : un point qui suit la souris
 * en temps réel (GSAP quickTo, pas de lag), entouré d'un anneau qui suit
 * avec un léger retard et grossit au survol des éléments interactifs.
 *
 * Désactivé automatiquement :
 *  - sur tout appareil tactile (pointer: coarse) — pas de souris, pas de
 *    curseur à personnaliser ;
 *  - si prefers-reduced-motion est actif ;
 *  - le curseur système natif reste caché uniquement quand ce composant
 *    est réellement actif (voir la classe `cursor-none` conditionnelle).
 * -----------------------------------------------------------------------
 */
export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (isTouchDevice || prefersReducedMotion) return;

    // eslint-disable-next-line react-hooks/set-state-in-effect -- détection de capacités côté client (pointer, reduced-motion), impossible à connaître avant le montage
    setActive(true);
    document.body.classList.add("cursor-none");

    const dotX = gsap.quickTo(dotRef.current, "x", { duration: 0.1, ease: "power2" });
    const dotY = gsap.quickTo(dotRef.current, "y", { duration: 0.1, ease: "power2" });
    const ringX = gsap.quickTo(ringRef.current, "x", { duration: 0.35, ease: "power2" });
    const ringY = gsap.quickTo(ringRef.current, "y", { duration: 0.35, ease: "power2" });

    function handleMove(event: MouseEvent) {
      dotX(event.clientX);
      dotY(event.clientY);
      ringX(event.clientX);
      ringY(event.clientY);
    }

    function handleOver(event: MouseEvent) {
      const target = event.target as HTMLElement;
      setHovering(Boolean(target.closest("a, button, [role='button'], input, textarea")));
    }

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseover", handleOver);

    return () => {
      document.body.classList.remove("cursor-none");
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseover", handleOver);
    };
  }, []);

  if (!active) return null;

  return (
    <>
      <div
        ref={dotRef}
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[100] h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent"
      />
      <div
        ref={ringRef}
        aria-hidden="true"
        className={`pointer-events-none fixed left-0 top-0 z-[100] -translate-x-1/2 -translate-y-1/2 rounded-full border mix-blend-difference transition-[width,height] duration-200 ${
          hovering ? "h-11 w-11 border-accent" : "h-7 w-7 border-white"
        }`}
      />
    </>
  );
}
