import type { Testimonial } from "@/data/presets/shared-types";

/**
 * data/presets/kine/testimonials.ts
 */
export const testimonials: Testimonial[] = [
  {
    id: "k-t1",
    name: "Julien P.",
    initials: "JP",
    rating: 5,
    text: "Rééducation après ma ligamentoplastie du genou impeccable. J'ai pu reprendre le foot en confiance grâce au programme de réathlétisation.",
    service: "Kinésithérapie du sport",
    date: "2026-05",
  },
  {
    id: "k-t2",
    name: "Camille R.",
    initials: "CR",
    rating: 5,
    text: "Sarah a été d'une écoute remarquable pour ma rééducation périnéale post-partum. Je me suis sentie en confiance dès la première séance.",
    service: "Rééducation périnéale",
    date: "2026-04",
  },
  {
    id: "k-t3",
    name: "Marc T.",
    initials: "MT",
    rating: 5,
    text: "Suivi très professionnel après ma prothèse de hanche. Explications claires à chaque étape du protocole.",
    service: "Rééducation post-opératoire",
    date: "2026-06",
  },
  {
    id: "k-t4",
    name: "Nadia F.",
    initials: "NF",
    rating: 4,
    text: "Les séances de kiné respiratoire pour mon fils se sont très bien passées, l'équipe est habituée aux tout-petits.",
    date: "2026-03",
  },
  {
    id: "k-t5",
    name: "Alexandre D.",
    initials: "AD",
    rating: 5,
    text: "Cabinet moderne, prise de rendez-vous simple, et un vrai suivi personnalisé plutôt que des séances à la chaîne.",
    date: "2026-06",
  },
];

export const aggregateRating = {
  ratingValue: 4.8,
  reviewCount: 124,
  bestRating: 5,
};
