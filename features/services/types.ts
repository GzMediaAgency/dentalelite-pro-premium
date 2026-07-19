import type { ImageAsset } from "@/types";

/**
 * features/services/types.ts
 * Types du domaine "soins". Utilisés par le Mega Menu (Navbar), la section
 * Services de la page d'accueil, et les pages dédiées /soins/[slug].
 */
export interface Service {
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  /** Nom d'icône Lucide (résolu via features/services/icon-map.tsx) */
  icon: "Sparkles" | "Zap" | "Smile" | "Activity";
  image: ImageAsset;
  href: string;
  highlights: string[];
  featured?: boolean;
}
