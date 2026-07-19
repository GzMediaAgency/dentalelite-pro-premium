import { siteConfig } from "@/config/site";
import dentistePreset from "@/data/presets/dentiste";
import kinePreset from "@/data/presets/kine";
import type { SpecialtyPreset } from "@/data/presets/types";

/**
 * data/active.ts
 * -----------------------------------------------------------------------
 * Point d'entrée UNIQUE pour tout le contenu spécifique au métier. Tous
 * les composants et pages importent leurs données depuis ce fichier —
 * jamais directement depuis data/presets/<metier>/*.
 *
 * Changer de métier pour un nouveau client = changer
 * `activePreset` dans config/site.ts. Rien d'autre à toucher.
 *
 * Ajouter un nouveau métier :
 *   1. Créer data/presets/<metier>/ (services, team, faq, blog, pricing,
 *      testimonials, hero + index.ts conforme à SpecialtyPreset)
 *   2. L'enregistrer dans `presets` ci-dessous
 *   3. Ajouter le nom au type PresetKey dans config/site.ts
 * -----------------------------------------------------------------------
 */
const presets = {
  dentiste: dentistePreset,
  kine: kinePreset,
} satisfies Record<string, SpecialtyPreset>;

export const activePreset: SpecialtyPreset = presets[siteConfig.activePreset];

export const {
  services,
  team,
  faqItems,
  blogArticles,
  pricingCategories,
  testimonials,
  aggregateRating,
  heroContent,
  getServiceBySlug,
  getArticleBySlug,
} = activePreset;
