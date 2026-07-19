export interface WhyUsItem {
  icon: "ShieldCheck" | "Clock" | "HeartHandshake" | "Microscope" | "Sparkle" | "Users";
  title: string;
  description: string;
}

/**
 * data/why-us.ts
 * Section "Pourquoi nous choisir" (6 cartes), demandée dans la fiche
 * stratégique. Consommée par features/why-us/why-us-section.tsx.
 */
export const whyUsItems: WhyUsItem[] = [
  {
    icon: "ShieldCheck",
    title: "Équipe diplômée & expérimentée",
    description: "Une équipe de praticiens formés aux techniques les plus récentes, encadrés par un DU dédié à chaque spécialité.",
  },
  {
    icon: "Microscope",
    title: "Équipements de pointe",
    description: "Imagerie 3D, scanner intra-oral et matériel stérilisé aux normes les plus strictes pour un diagnostic précis.",
  },
  {
    icon: "Clock",
    title: "Créneaux d'urgence dédiés",
    description: "Une prise en charge rapide de la douleur, y compris le samedi matin, sans attendre des semaines.",
  },
  {
    icon: "HeartHandshake",
    title: "Accompagnement transparent",
    description: "Un devis détaillé avant chaque traitement, des explications claires, aucune surprise.",
  },
  {
    icon: "Sparkle",
    title: "Cadre pensé pour le confort",
    description: "Un cabinet lumineux et apaisant, loin de l'image clinique traditionnelle du dentiste.",
  },
  {
    icon: "Users",
    title: "2500+ patients suivis",
    description: "Une patientèle fidèle, entretenue depuis des années grâce à un suivi personnalisé et attentif.",
  },
];
