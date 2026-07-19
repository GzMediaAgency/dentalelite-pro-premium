import { BadgeCheck } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * components/shared/verified-badge.tsx
 * -----------------------------------------------------------------------
 * Badge "avis vérifiés" — icône neutre (pas le logo Google). Reproduire
 * la marque Google dans un template revendu commercialement à des
 * centaines de cabinets exposerait chaque acheteur à un risque de marque
 * déposée. Quand tu branches la vraie intégration Google Reviews
 * (Sprint 7 — API Google Places), utilise le badge officiel fourni par
 * Google dans ses propres kits d'attribution plutôt qu'une reproduction
 * maison du logo.
 * -----------------------------------------------------------------------
 */
export function VerifiedBadge({ className }: { className?: string }) {
  return (
    <BadgeCheck
      className={cn("h-4 w-4 text-secondary", className)}
      aria-hidden="true"
    />
  );
}
