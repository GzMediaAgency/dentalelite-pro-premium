import type { HeroContent } from "@/data/presets/shared-types";
import { siteConfig } from "@/config/site";

/**
 * data/presets/kine/hero.ts
 */
export const heroContent: HeroContent = {
  eyebrow: `${siteConfig.specialtyLabel} · ${siteConfig.contact.address.city}`,
  headlineLines: ["Retrouvez votre mobilité,", "à votre rythme."],
  description:
    "Rééducation post-opératoire, kinésithérapie du sport, périnéale et respiratoire, dans un cabinet pensé pour un accompagnement humain et personnalisé.",
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
    patientCount: "1800+",
    label: "patients accompagnés",
  },
  backgroundImage: {
    src: "https://images.unsplash.com/photo-1540205895360-4ad4cffb3aa8?auto=format&fit=crop&w=2400&q=80",
    alt: "Séance de kinésithérapie, massage du dos",
    width: 2400,
    height: 1600,
  },
  floatingImage: {
    src: "https://images.unsplash.com/photo-1545463913-5083aa7359a6?auto=format&fit=crop&w=800&q=80",
    alt: "Praticien réalisant une manipulation de la cheville",
    width: 800,
    height: 1000,
  },
  floatingStat: {
    value: "96%",
    label: "de patients satisfaits",
  },
};
