export interface CertificationBadge {
  icon: "ShieldCheck" | "BadgeCheck" | "Lock" | "Award";
  label: string;
}

/**
 * data/certifications.ts
 * Badges de confiance affichés dans le footer. Génériques et adaptés à un
 * cabinet dentaire français — à ajuster selon les certifications réelles
 * du cabinet lors de la personnalisation.
 */
export const certificationBadges: CertificationBadge[] = [
  { icon: "Award", label: "Ordre National des Chirurgiens-Dentistes" },
  { icon: "ShieldCheck", label: "Cabinet conventionné secteur 1" },
  { icon: "Lock", label: "Données RGPD conformes" },
  { icon: "BadgeCheck", label: "Paiement sécurisé" },
];
