import { services, getServiceBySlug } from "@/data/presets/kine/services";
import { team } from "@/data/presets/kine/team";
import { faqItems } from "@/data/presets/kine/faq";
import { blogArticles, getArticleBySlug } from "@/data/presets/kine/blog";
import { pricingCategories } from "@/data/presets/kine/pricing";
import { testimonials, aggregateRating } from "@/data/presets/kine/testimonials";
import { heroContent } from "@/data/presets/kine/hero";
import type { SpecialtyPreset } from "@/data/presets/types";

/**
 * data/presets/kine/index.ts
 * Point d'entrée du preset "Masseur-kinésithérapeute" — exemple de second
 * métier, démontrant le mécanisme multi-spécialités.
 */
const kinePreset: SpecialtyPreset = {
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

export default kinePreset;
