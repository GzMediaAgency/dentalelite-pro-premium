export interface StatItem {
  value: number;
  suffix: string;
  label: string;
}

/**
 * data/stats.ts
 * Chiffres clés animés (compteurs) de la page d'accueil.
 */
export const statsItems: StatItem[] = [
  { value: 2500, suffix: "+", label: "patients suivis" },
  { value: 15, suffix: " ans", label: "d'expérience cumulée" },
  { value: 98, suffix: "%", label: "de patients satisfaits" },
  { value: 4.9, suffix: "/5", label: "note moyenne des avis" },
];
