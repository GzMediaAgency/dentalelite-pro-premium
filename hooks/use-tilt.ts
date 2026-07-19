"use client";

import { useRef, useState, type PointerEvent } from "react";

/**
 * hooks/use-tilt.ts
 * Tilt 3D léger au survol, piloté par la position du curseur dans
 * l'élément. Extrait de features/services/service-card.tsx (Sprint 1) où
 * cette logique était dupliquée en ligne — signalé dans l'audit comme
 * duplication à factoriser. Toute carte du site peut maintenant l'utiliser
 * (Équipe, Témoignages, Blog...).
 */
export function useTilt<T extends HTMLElement>(intensity = 6) {
  const ref = useRef<T>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  function onPointerMove(event: PointerEvent<T>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width - 0.5;
    const py = (event.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: py * -intensity, y: px * intensity });
  }

  function onPointerLeave() {
    setTilt({ x: 0, y: 0 });
  }

  return { ref, tilt, onPointerMove, onPointerLeave };
}
