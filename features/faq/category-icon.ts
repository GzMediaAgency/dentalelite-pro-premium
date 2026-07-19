import {
  CalendarCheck,
  Siren,
  Banknote,
  Stethoscope,
  Info,
  HelpCircle,
  type LucideIcon,
} from "lucide-react";

/**
 * features/faq/category-icon.ts
 * Associe une catégorie de FAQ à une icône. Basé sur des chaînes libres
 * (pas une union stricte) car chaque preset métier (dentiste, kiné...)
 * peut définir ses propres catégories — HelpCircle sert de repli neutre
 * pour toute catégorie non reconnue plutôt que de planter.
 */
const categoryIconMap: Record<string, LucideIcon> = {
  "Rendez-vous": CalendarCheck,
  Urgence: Siren,
  Tarifs: Banknote,
  Soins: Stethoscope,
  Général: Info,
};

export function getCategoryIcon(category: string): LucideIcon {
  return categoryIconMap[category] ?? HelpCircle;
}
