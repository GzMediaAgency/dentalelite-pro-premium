import type { Testimonial } from "@/data/presets/shared-types";

/**
 * data/testimonials.ts
 * Avis patients. `initials` alimente un avatar généré (pas de photo — voir
 * note dans features/team/doctor-card.tsx pour le raisonnement identique).
 */
export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Claire M.",
    initials: "CM",
    rating: 5,
    text: "Accueil impeccable et équipe très rassurante. Mon implant s'est déroulé sans aucune douleur, et le suivi a été irréprochable.",
    service: "Implantologie",
    date: "2026-05",
  },
  {
    id: "t2",
    name: "Yassine B.",
    initials: "YB",
    rating: 5,
    text: "J'ai pu être reçu en urgence un samedi matin pour une douleur intense. Prise en charge rapide et très professionnelle.",
    service: "Urgence",
    date: "2026-04",
  },
  {
    id: "t3",
    name: "Sophie L.",
    initials: "SL",
    rating: 5,
    text: "Résultat du blanchiment bluffant, sans aucune sensibilité. Le cabinet est magnifique, on se sent presque dans un spa.",
    service: "Blanchiment",
    date: "2026-06",
  },
  {
    id: "t4",
    name: "Antoine R.",
    initials: "AR",
    rating: 4,
    text: "Très satisfait de mon suivi orthodontique par gouttières. Explications claires à chaque étape, je recommande.",
    service: "Orthodontie",
    date: "2026-03",
  },
  {
    id: "t5",
    name: "Nadia K.",
    initials: "NK",
    rating: 5,
    text: "Cabinet moderne, prise de rendez-vous simple via Doctolib, et une équipe qui prend vraiment le temps d'expliquer.",
    date: "2026-06",
  },
  {
    id: "t6",
    name: "Marc D.",
    initials: "MD",
    rating: 5,
    text: "Après plusieurs années sans dentiste par appréhension, j'ai enfin trouvé une équipe qui met en confiance.",
    date: "2026-02",
  },
];

export const aggregateRating = {
  ratingValue: 4.9,
  reviewCount: 187,
  bestRating: 5,
};
