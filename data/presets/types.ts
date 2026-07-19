import type { Service } from "@/features/services/types";
import type { TeamMember } from "@/data/presets/shared-types";
import type { FaqItem } from "@/data/presets/shared-types";
import type { BlogArticle } from "@/data/presets/shared-types";
import type { PricingCategory } from "@/data/presets/shared-types";
import type { Testimonial } from "@/data/presets/shared-types";
import type { HeroContent } from "@/data/presets/shared-types";

/**
 * data/presets/types.ts
 * -----------------------------------------------------------------------
 * Contrat que doit respecter CHAQUE preset métier (dentiste, kiné,
 * dermato, ostéopathe, médecin généraliste, orthodontiste...).
 *
 * Ajouter un nouveau métier = créer un dossier data/presets/<metier>/ qui
 * exporte un objet conforme à `SpecialtyPreset`, puis l'enregistrer dans
 * data/active.ts. Aucun composant n'a besoin d'être modifié.
 * -----------------------------------------------------------------------
 */
export interface SpecialtyPreset {
  services: Service[];
  team: TeamMember[];
  faqItems: FaqItem[];
  blogArticles: BlogArticle[];
  pricingCategories: PricingCategory[];
  testimonials: Testimonial[];
  aggregateRating: { ratingValue: number; reviewCount: number; bestRating: number };
  heroContent: HeroContent;
  getServiceBySlug: (slug: string) => Service | undefined;
  getArticleBySlug: (slug: string) => BlogArticle | undefined;
}
