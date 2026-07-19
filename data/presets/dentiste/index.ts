import { services, getServiceBySlug } from "@/data/presets/dentiste/services";
import { team } from "@/data/presets/dentiste/team";
import { faqItems } from "@/data/presets/dentiste/faq";
import { blogArticles, getArticleBySlug } from "@/data/presets/dentiste/blog";
import { pricingCategories } from "@/data/presets/dentiste/pricing";
import { testimonials, aggregateRating } from "@/data/presets/dentiste/testimonials";
import { heroContent } from "@/data/presets/dentiste/hero";
import type { SpecialtyPreset } from "@/data/presets/types";

/**
 * data/presets/dentiste/index.ts
 * Point d'entrée du preset "Chirurgien-dentiste" — le contenu original du
 * template, désormais packagé comme un preset parmi d'autres.
 */
const dentistePreset: SpecialtyPreset = {
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
};

export default dentistePreset;
