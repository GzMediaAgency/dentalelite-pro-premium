"use client";

import { useRef, type PointerEvent } from "react";

/**
 * hooks/use-spotlight.ts
 * Fournit un handler onPointerMove à brancher sur un conteneur avec la
 * classe CSS `.spotlight-card` (voir styles/tokens.css). Met à jour les
 * variables --spotlight-x/y en position relative à l'élément, sans
 * déclencher de re-render React (mutation directe du style DOM — la seule
 * approche performante pour un événement qui se déclenche à chaque pixel).
 */
export function useSpotlight<T extends HTMLElement>() {
  const ref = useRef<T>(null);

  function onPointerMove(event: PointerEvent<T>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--spotlight-x", `${event.clientX - rect.left}px`);
    el.style.setProperty("--spotlight-y", `${event.clientY - rect.top}px`);
  }

  return { ref, onPointerMove };
}
