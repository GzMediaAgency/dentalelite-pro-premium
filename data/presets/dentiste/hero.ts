import type { HeroContent } from "@/data/presets/shared-types";
import { siteConfig } from "@/config/site";

/**
 * data/presets/dentiste/hero.ts
 * Contenu du Hero pour le preset "dentiste".
 */
export const heroContent: HeroContent = {
  eyebrow: `${siteConfig.specialtyLabel} · ${siteConfig.contact.address.city}`,
  headlineLines: ["L'excellence dentaire,", "pensée pour vous."],
  description:
    "Implantologie, orthodontie, blanchiment et urgences dans un cadre premium, pensé pour votre confort du premier rendez-vous au dernier contrôle.",
  primaryCta: {
    label: "Prendre rendez-vous",
    href: siteConfig.integrations.doctolibUrl ?? "/contact",
    variant: "primary",
    external: Boolean(siteConfig.integrations.doctolibUrl),
  },
  secondaryCta: {
    label: "Découvrir nos soins",
    href: "/soins",
    variant: "outline",
  },
  rating: {
    score: 5,
    patientCount: "2500+",
    label: "patients nous font confiance",
  },
  backgroundImage: {
    src: "https://images.unsplash.com/photo-1704455306251-b4634215d98f?auto=format&fit=crop&w=2400&q=80",
    alt: "Salle de soins moderne et lumineuse du cabinet dentaire",
    width: 2400,
    height: 1600,
  },
  floatingImage: {
    src: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80",
    alt: "Praticien utilisant une tablette pour un suivi digital du traitement",
    width: 800,
    height: 1000,
  },
  floatingStat: {
    value: "98%",
    label: "de patients satisfaits",
  },
};
