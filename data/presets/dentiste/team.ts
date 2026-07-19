import type { TeamMember } from "@/data/presets/shared-types";

/**
 * data/team.ts
 * -----------------------------------------------------------------------
 * Membres de l'équipe. Pas de photo ici volontairement : le cahier des
 * charges impose des images Unsplash/Pexels libres de droits, or associer
 * une photo de banque d'images à un nom et un rôle précis créerait une
 * fausse identité trompeuse pour de vrais patients. Les DoctorCard
 * affichent donc un avatar en dégradé de marque avec les initiales — un
 * pattern professionnel courant, à remplacer par de vraies photos de
 * l'équipe lors de la personnalisation du template.
 * -----------------------------------------------------------------------
 */
export const team: TeamMember[] = [
  {
    slug: "dr-camille-armand",
    name: "Dr Camille Armand",
    role: "Chirurgien-dentiste, fondatrice",
    bio: "Diplômée de l'Université Paris Cité, le Dr Armand a fondé le cabinet avec la conviction qu'un soin dentaire d'excellence doit aussi être une expérience sereine pour le patient.",
    diplomas: ["Doctorat en Chirurgie Dentaire — Université Paris Cité", "DU d'Implantologie Orale"],
    specialties: ["Implantologie", "Chirurgie orale"],
    initials: "CA",
  },
  {
    slug: "dr-julien-farel",
    name: "Dr Julien Farel",
    role: "Chirurgien-dentiste, orthodontie",
    bio: "Spécialisé dans les traitements d'alignement discrets pour adultes actifs, le Dr Farel accompagne chaque patient avec un suivi digital précis de sa progression.",
    diplomas: ["Doctorat en Chirurgie Dentaire — Université de Lyon", "DU d'Orthopédie Dento-Faciale"],
    specialties: ["Orthodontie adulte", "Gouttières transparentes"],
    initials: "JF",
  },
  {
    slug: "dr-lea-fontaine",
    name: "Dr Léa Fontaine",
    role: "Chirurgien-dentiste, esthétique",
    bio: "Le Dr Fontaine s'est formée aux techniques les plus récentes de dentisterie esthétique, avec une attention particulière portée au naturel du résultat.",
    diplomas: ["Doctorat en Chirurgie Dentaire — Université de Strasbourg", "DU d'Esthétique Dentaire"],
    specialties: ["Blanchiment", "Facettes céramiques"],
    initials: "LF",
  },
];
