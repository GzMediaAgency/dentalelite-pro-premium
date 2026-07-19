import type { Service } from "@/features/services/types";

/**
 * data/services.ts
 * ---------------------------------------------------------------------------
 * Source de vérité pour les soins du cabinet. Consommé par :
 *  - le Mega Menu de la Navbar (Étape 4)
 *  - la section Services de la page d'accueil (Étape 6)
 *  - les pages /soins/[slug] et /soins (listing "Tous les soins")
 *
 * Images : Unsplash, libres de droits, format optimisé via next/image
 * (remotePatterns déjà configuré dans next.config.ts).
 * ---------------------------------------------------------------------------
 */
export const services: Service[] = [
  {
    slug: "implantologie",
    name: "Implantologie",
    shortDescription: "Retrouvez un sourire complet et naturel, durablement.",
    description:
      "Remplacement de dents manquantes par implants en titane, avec un suivi rigoureux à chaque étape — du bilan 3D à la pose de la couronne définitive.",
    icon: "Activity",
    image: {
      src: "https://images.unsplash.com/photo-1593022356769-11f762e25ed9?auto=format&fit=crop&w=1600&q=80",
      alt: "Modèle de mâchoire présentant un implant dentaire",
      width: 1600,
      height: 1067,
    },
    href: "/soins/implantologie",
    highlights: [
      "Bilan 3D et planification numérique",
      "Implants en titane haute biocompatibilité",
      "Suivi post-opératoire personnalisé",
    ],
    featured: true,
  },
  {
    slug: "blanchiment",
    name: "Blanchiment dentaire",
    shortDescription: "Un sourire éclatant, en toute sécurité pour l'émail.",
    description:
      "Technique de blanchiment professionnel encadrée par notre équipe, pour un résultat visible et respectueux de la sensibilité dentaire.",
    icon: "Sparkles",
    image: {
      src: "https://images.unsplash.com/photo-1660732205495-f65510d8180e?auto=format&fit=crop&w=1600&q=80",
      alt: "Sourire aux dents blanches après un blanchiment dentaire",
      width: 1600,
      height: 1067,
    },
    href: "/soins/blanchiment",
    highlights: [
      "Protocole professionnel supervisé",
      "Résultat visible dès la première séance",
      "Respect de la sensibilité dentaire",
    ],
  },
  {
    slug: "urgence",
    name: "Urgence dentaire",
    shortDescription: "Une prise en charge rapide, quand la douleur ne peut pas attendre.",
    description:
      "Créneaux dédiés aux urgences (douleur, traumatisme, infection) avec une prise en charge le jour même selon disponibilité.",
    icon: "Zap",
    image: {
      src: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=1600&q=80",
      alt: "Examen dentaire avec miroir et instrument",
      width: 1600,
      height: 1067,
    },
    href: "/soins/urgence",
    highlights: [
      "Créneaux d'urgence dédiés",
      "Prise en charge de la douleur en priorité",
      "Disponibilité samedi matin",
    ],
    featured: true,
  },
  {
    slug: "orthodontie",
    name: "Orthodontie adulte",
    shortDescription: "Aligner son sourire, sans compromis sur l'esthétique.",
    description:
      "Solutions d'alignement discrètes (gouttières transparentes, orthodontie linguale) adaptées aux emplois du temps d'adultes actifs.",
    icon: "Smile",
    image: {
      src: "https://images.unsplash.com/photo-1663182234283-28941e7612da?auto=format&fit=crop&w=1600&q=80",
      alt: "Gros plan sur un sourire en cours de traitement orthodontique",
      width: 1600,
      height: 1067,
    },
    href: "/soins/orthodontie",
    highlights: [
      "Gouttières transparentes sur mesure",
      "Suivi digital de la progression",
      "Compatible avec une vie professionnelle active",
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}
