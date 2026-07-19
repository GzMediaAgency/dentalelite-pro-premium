/**
 * types/index.ts
 * Types partagés dans tout le projet. Les types spécifiques à une feature
 * (ex: un témoignage, un article de blog) sont co-localisés dans
 * `features/<feature>/types.ts` et ré-exportés ici si besoin transverse.
 */

export interface ImageAsset {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  blurDataURL?: string;
}

export interface SeoMeta {
  title: string;
  description: string;
  path: string; // ex: "/soins/implantologie"
  ogImage?: string;
}

export interface NavItem {
  label: string;
  href: string;
  description?: string;
  icon?: string;
  children?: NavItem[];
}

export interface CTAAction {
  label: string;
  href: string;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  external?: boolean;
}

export type LucideIconName = string;
