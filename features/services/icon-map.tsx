import { Activity, Sparkles, Zap, Smile, type LucideIcon } from "lucide-react";
import type { Service } from "@/features/services/types";

/**
 * features/services/icon-map.tsx
 * Associe le champ `icon` (string) des données de service à un composant
 * Lucide réel. Garde /data/services.ts indépendant de tout composant React.
 */
export const serviceIconMap: Record<Service["icon"], LucideIcon> = {
  Activity,
  Sparkles,
  Zap,
  Smile,
};
