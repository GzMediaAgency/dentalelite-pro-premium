import type { PricingCategory } from "@/data/presets/shared-types";

/**
 * data/presets/kine/pricing.ts
 */
export const pricingCategories: PricingCategory[] = [
  {
    category: "Séances courantes",
    description: "Sur prescription médicale, prises en charge par l'Assurance Maladie.",
    items: [
      { label: "Séance de kinésithérapie standard", priceFrom: 28, unit: "€" },
      { label: "Bilan kinésithérapique initial", priceFrom: 35, unit: "€" },
    ],
  },
  {
    category: "Kinésithérapie du sport",
    description: "Bilans fonctionnels et suivi spécialisé.",
    items: [
      { label: "Bilan fonctionnel sportif", priceFrom: 50, unit: "€" },
      { label: "Séance de réathlétisation", priceFrom: 35, unit: "€" },
    ],
  },
  {
    category: "Rééducation périnéale",
    description: "Séances individuelles, sur prescription.",
    items: [
      { label: "Séance de rééducation périnéale", priceFrom: 30, unit: "€" },
    ],
  },
  {
    category: "Domicile",
    description: "Pour les patients à mobilité réduite.",
    items: [
      {
        label: "Séance à domicile",
        priceFrom: 40,
        unit: "€",
        note: "Zone de déplacement limitée, nous consulter",
      },
    ],
  },
];
