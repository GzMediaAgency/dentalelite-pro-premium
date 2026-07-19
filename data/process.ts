export interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

/**
 * data/process.ts
 * "Déroulement" — parcours patient en 5 étapes, demandé dans la fiche
 * stratégique. Consommé par features/why-us/process-timeline.tsx.
 */
export const processSteps: ProcessStep[] = [
  {
    step: 1,
    title: "Prise de rendez-vous",
    description: "Réservation en ligne via Doctolib, par téléphone ou WhatsApp, en quelques secondes.",
  },
  {
    step: 2,
    title: "Bilan & diagnostic",
    description: "Examen clinique complet, complété si besoin d'une imagerie 3D pour un diagnostic précis.",
  },
  {
    step: 3,
    title: "Devis détaillé",
    description: "Un plan de traitement clair et transparent, sans surprise, avant toute intervention.",
  },
  {
    step: 4,
    title: "Traitement",
    description: "Prise en charge par l'équipe spécialisée, dans un cadre pensé pour votre confort.",
  },
  {
    step: 5,
    title: "Suivi personnalisé",
    description: "Contrôles réguliers pour assurer la pérennité des soins réalisés, sur le long terme.",
  },
];
