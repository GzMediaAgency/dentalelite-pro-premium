import type { PricingCategory } from "@/data/presets/shared-types";

/**
 * data/pricing.ts
 * -----------------------------------------------------------------------
 * Tarifs indicatifs présentés aux patients ("à partir de"). Valeurs de
 * démonstration à ajuster lors de la personnalisation — un devis
 * personnalisé reste systématiquement remis avant tout traitement, comme
 * rappelé sur la page /tarifs elle-même.
 * -----------------------------------------------------------------------
 */
export const pricingCategories: PricingCategory[] = [
  {
    category: "Consultations & soins courants",
    description: "Bilans, détartrage et soins conservateurs, en secteur 1 conventionné.",
    items: [
      { label: "Consultation & bilan bucco-dentaire", priceFrom: 30, unit: "€" },
      { label: "Détartrage complet", priceFrom: 40, unit: "€" },
      { label: "Soin carie (composite)", priceFrom: 60, unit: "€" },
    ],
  },
  {
    category: "Implantologie",
    description: "Tarif par implant, hors couronne définitive — devis 3D systématique.",
    items: [
      { label: "Pose d'implant unitaire", priceFrom: 900, unit: "€" },
      { label: "Couronne sur implant", priceFrom: 600, unit: "€" },
      { label: "Bilan 3D préopératoire", priceFrom: 80, unit: "€" },
    ],
  },
  {
    category: "Blanchiment",
    description: "Protocole professionnel encadré, en cabinet.",
    items: [
      { label: "Blanchiment en une séance", priceFrom: 350, unit: "€" },
      { label: "Kit de maintien à domicile", priceFrom: 90, unit: "€" },
    ],
  },
  {
    category: "Orthodontie adulte",
    description: "Gouttières transparentes sur mesure, suivi digital inclus.",
    items: [
      { label: "Bilan orthodontique + simulation", priceFrom: 90, unit: "€" },
      {
        label: "Traitement complet par gouttières",
        priceFrom: 2400,
        unit: "€",
        note: "Paiement échelonné possible",
      },
    ],
  },
];
