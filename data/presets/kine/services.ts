import type { Service } from "@/features/services/types";

/**
 * data/presets/kine/services.ts
 * Preset "Kinésithérapeute" — soins proposés.
 */
export const services: Service[] = [
  {
    slug: "reeducation-post-operatoire",
    name: "Rééducation post-opératoire",
    shortDescription: "Retrouvez mobilité et force après une intervention chirurgicale.",
    description:
      "Un protocole de rééducation personnalisé après prothèse, ligamentoplastie ou toute autre intervention orthopédique, en lien avec votre chirurgien.",
    icon: "Activity",
    image: {
      src: "https://images.unsplash.com/photo-1540205895360-4ad4cffb3aa8?auto=format&fit=crop&w=1600&q=80",
      alt: "Séance de kinésithérapie, massage du dos",
      width: 1600,
      height: 1067,
    },
    href: "/soins/reeducation-post-operatoire",
    highlights: [
      "Protocole coordonné avec le chirurgien",
      "Suivi de la récupération de mobilité",
      "Renforcement musculaire progressif",
    ],
    featured: true,
  },
  {
    slug: "kine-du-sport",
    name: "Kinésithérapie du sport",
    shortDescription: "Prévention et traitement des blessures liées à la pratique sportive.",
    description:
      "Prise en charge des entorses, tendinopathies et déchirures musculaires, avec un objectif clair : un retour au sport sécurisé et durable.",
    icon: "Zap",
    image: {
      src: "https://images.unsplash.com/photo-1545463913-5083aa7359a6?auto=format&fit=crop&w=1600&q=80",
      alt: "Massage et manipulation de la cheville",
      width: 1600,
      height: 1067,
    },
    href: "/soins/kine-du-sport",
    highlights: [
      "Bilan fonctionnel à l'entrée",
      "Programme de renforcement spécifique au sport pratiqué",
      "Prévention des rechutes",
    ],
    featured: true,
  },
  {
    slug: "reeducation-perineale",
    name: "Rééducation périnéale",
    shortDescription: "Un accompagnement discret et adapté, notamment en post-partum.",
    description:
      "Séances individuelles dans un cadre confidentiel, pour renforcer le périnée après un accouchement ou traiter certains troubles fonctionnels.",
    icon: "Sparkles",
    image: {
      src: "https://images.unsplash.com/photo-1545463913-5083aa7359a6?auto=format&fit=crop&w=1600&q=80",
      alt: "Séance de kinésithérapie en cabinet",
      width: 1600,
      height: 1067,
    },
    href: "/soins/reeducation-perineale",
    highlights: [
      "Bilan initial confidentiel",
      "Rééducation manuelle et instrumentale",
      "Conseils personnalisés pour la vie quotidienne",
    ],
  },
  {
    slug: "kine-respiratoire",
    name: "Kinésithérapie respiratoire",
    shortDescription: "Pour les nourrissons comme pour les patients chroniques.",
    description:
      "Désencombrement bronchique adapté à chaque âge, en cabinet ou à domicile pour les patients les moins mobiles.",
    icon: "Smile",
    image: {
      src: "https://images.unsplash.com/photo-1540205895360-4ad4cffb3aa8?auto=format&fit=crop&w=1600&q=80",
      alt: "Praticien accompagnant un patient",
      width: 1600,
      height: 1067,
    },
    href: "/soins/kine-respiratoire",
    highlights: [
      "Prise en charge des nourrissons",
      "Suivi des pathologies respiratoires chroniques",
      "Déplacement à domicile possible",
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}
