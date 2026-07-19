import type { ImageAsset, CTAAction } from "@/types";

/**
 * data/presets/shared-types.ts
 * Types de contenu partagés par tous les presets métier. Un preset
 * fournit des données conformes à ces types ; la forme ne change jamais
 * d'un métier à l'autre, seul le contenu change.
 */
export interface TeamMember {
  slug: string;
  name: string;
  role: string;
  bio: string;
  diplomas: string[];
  specialties: string[];
  initials: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface BlogArticle {
  slug: string;
  title: string;
  excerpt: string;
  content: string[];
  coverImage: ImageAsset;
  publishedAt: string;
  author: string;
  category: string;
  readingTime: string;
}

export interface PricingItem {
  label: string;
  priceFrom: number;
  unit?: string;
  note?: string;
}

export interface PricingCategory {
  category: string;
  description: string;
  items: PricingItem[];
}

export interface Testimonial {
  id: string;
  name: string;
  initials: string;
  rating: number;
  text: string;
  service?: string;
  date: string;
  /** Photo réelle du reviewer — uniquement peuplé par l'intégration Google Places live (lib/google-reviews.ts), jamais par les données de démonstration. */
  photoUrl?: string;
}

export interface HeroContent {
  eyebrow: string;
  headlineLines: string[];
  description: string;
  primaryCta: CTAAction;
  secondaryCta: CTAAction;
  rating: {
    score: number;
    patientCount: string;
    label: string;
  };
  backgroundImage: ImageAsset;
  floatingImage: ImageAsset;
  floatingStat: {
    value: string;
    label: string;
  };
}
