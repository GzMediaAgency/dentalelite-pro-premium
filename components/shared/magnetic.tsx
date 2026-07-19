"use client";

import type { ReactNode } from "react";
import { useMagnetic } from "@/hooks/use-magnetic";

/**
 * components/shared/magnetic.tsx
 * Enveloppe n'importe quel élément (bouton, lien) pour lui donner l'effet
 * "magnétique". Réutilisé sur les CTA principaux dans plusieurs sections
 * (Hero maintenant, Services/Contact dans les sprints suivants).
 */
export function Magnetic({
  children,
  strength = 0.35,
  className,
}: {
  children: ReactNode;
  strength?: number;
  className?: string;
}) {
  const ref = useMagnetic<HTMLDivElement>(strength);
  return (
    <div ref={ref} className={className ?? "inline-block will-change-transform"}>
      {children}
    </div>
  );
}
