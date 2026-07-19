export interface BeforeAfterCase {
  id: string;
  label: string;
  beforeImage: string;
  afterImage: string;
}

/**
 * data/before-after.ts
 * Plusieurs cas de comparaison Avant/Après (démonstration — à remplacer
 * par de vrais cas cliniques, avec l'accord des patients concernés).
 * Séparé de features/before-after pour rester personnalisable sans
 * toucher au composant.
 */
export const beforeAfterCases: BeforeAfterCase[] = [
  {
    id: "blanchiment",
    label: "Blanchiment",
    beforeImage:
      "https://images.unsplash.com/photo-1664529845836-433c172142ca?auto=format&fit=crop&w=1200&q=80",
    afterImage:
      "https://images.unsplash.com/photo-1660732205495-f65510d8180e?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "orthodontie",
    label: "Orthodontie",
    beforeImage:
      "https://images.unsplash.com/photo-1663182234283-28941e7612da?auto=format&fit=crop&w=1200&q=80",
    afterImage:
      "https://images.unsplash.com/photo-1660732205495-f65510d8180e?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "implantologie",
    label: "Implantologie",
    beforeImage:
      "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=1200&q=80",
    afterImage:
      "https://images.unsplash.com/photo-1593022356769-11f762e25ed9?auto=format&fit=crop&w=1200&q=80",
  },
];
