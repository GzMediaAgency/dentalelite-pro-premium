import type { NavItem } from "@/types";
import { services } from "@/data/active";

/**
 * data/navigation.ts
 * ---------------------------------------------------------------------------
 * Source de vérité pour la structure de navigation. Consommé par la Navbar
 * (mega menu desktop + drawer mobile, Étape 4) et par le Footer (Étape 10).
 * Modifier la navigation pour un autre cabinet ne nécessite de toucher qu'à
 * ce fichier (et à /data/services.ts pour le contenu du mega menu "Soins").
 * ---------------------------------------------------------------------------
 */
export const mainNav: NavItem[] = [
  { label: "Le Cabinet", href: "/cabinet" },
  { label: "L'Équipe", href: "/equipe" },
  {
    label: "Nos Soins",
    href: "/soins",
    children: services.map((service) => ({
      label: service.name,
      href: service.href,
      description: service.shortDescription,
      icon: service.icon,
    })),
  },
  { label: "Avis", href: "/avis" },
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "/faq" },
];

export const utilityNav: NavItem[] = [
  { label: "Tarifs", href: "/tarifs" },
  { label: "Contact", href: "/contact" },
];

export const legalNav: NavItem[] = [
  { label: "Mentions légales", href: "/mentions-legales" },
  { label: "RGPD", href: "/rgpd" },
  { label: "Politique de confidentialité", href: "/politique-de-confidentialite" },
];
