import type { TeamMember } from "@/data/presets/shared-types";

/**
 * data/presets/kine/team.ts
 */
export const team: TeamMember[] = [
  {
    slug: "thomas-lenoir",
    name: "Thomas Lenoir",
    role: "Masseur-kinésithérapeute, fondateur",
    bio: "Diplômé de l'IFMK de Paris, Thomas a fondé le cabinet avec la conviction qu'une rééducation efficace passe par un accompagnement humain et sur-mesure.",
    diplomas: ["Diplôme d'État de Masseur-Kinésithérapeute — IFMK Paris", "DU de Kinésithérapie du Sport"],
    specialties: ["Kinésithérapie du sport", "Rééducation post-opératoire"],
    initials: "TL",
  },
  {
    slug: "sarah-benaissa",
    name: "Sarah Benaissa",
    role: "Masseur-kinésithérapeute, périnéologie",
    bio: "Spécialisée dans la rééducation périnéale, Sarah accompagne ses patientes avec une attention particulière portée à la confidentialité et à l'écoute.",
    diplomas: ["Diplôme d'État de Masseur-Kinésithérapeute — IFMK Lyon", "DU de Rééducation Périnéale et Pelvienne"],
    specialties: ["Rééducation périnéale", "Post-partum"],
    initials: "SB",
  },
  {
    slug: "kevin-morel",
    name: "Kevin Morel",
    role: "Masseur-kinésithérapeute, respiratoire",
    bio: "Kevin s'est formé aux techniques de désencombrement bronchique adaptées à tous les âges, du nourrisson au patient chronique.",
    diplomas: ["Diplôme d'État de Masseur-Kinésithérapeute — IFMK Bordeaux", "DU de Kinésithérapie Respiratoire"],
    specialties: ["Kinésithérapie respiratoire", "Pédiatrie"],
    initials: "KM",
  },
];
