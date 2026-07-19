import type { FaqItem } from "@/data/presets/shared-types";

/**
 * data/presets/kine/faq.ts
 */
export const faqItems: FaqItem[] = [
  {
    id: "k1",
    question: "Ai-je besoin d'une ordonnance pour prendre rendez-vous ?",
    answer:
      "Oui, une prescription médicale est nécessaire pour que les séances soient prises en charge par l'Assurance Maladie. Sans ordonnance, une consultation reste possible mais ne sera pas remboursée.",
    category: "Rendez-vous",
  },
  {
    id: "k2",
    question: "Combien de séances sont généralement nécessaires ?",
    answer:
      "Cela dépend entièrement de la pathologie et de votre progression. Une rééducation post-opératoire s'étale souvent sur plusieurs semaines ; un bilan initial permet d'estimer une fourchette réaliste.",
    category: "Soins",
  },
  {
    id: "k3",
    question: "Le cabinet propose-t-il des séances à domicile ?",
    answer:
      "Oui, notamment pour la kinésithérapie respiratoire des patients les moins mobiles. Contactez-nous pour évaluer si votre situation le permet.",
    category: "Général",
  },
  {
    id: "k4",
    question: "La rééducation périnéale est-elle prise en charge ?",
    answer:
      "Oui, sur prescription médicale, notamment dans le cadre d'un suivi post-partum. Les séances se déroulent dans un cadre confidentiel et individuel.",
    category: "Tarifs",
  },
  {
    id: "k5",
    question: "Puis-je consulter sans blessure, à titre préventif ?",
    answer:
      "Tout à fait — de nombreux sportifs viennent pour un bilan fonctionnel préventif afin d'identifier des déséquilibres avant qu'ils ne deviennent des blessures.",
    category: "Soins",
  },
  {
    id: "k6",
    question: "Que dois-je apporter à la première séance ?",
    answer:
      "Votre ordonnance, vos examens d'imagerie éventuels (radio, IRM) et une tenue confortable permettant la mobilité nécessaire à l'examen.",
    category: "Rendez-vous",
  },
  {
    id: "k7",
    question: "Traitez-vous les enfants ?",
    answer:
      "Oui, notamment pour la kinésithérapie respiratoire pédiatrique. N'hésitez pas à le préciser lors de la prise de rendez-vous.",
    category: "Général",
  },
  {
    id: "k8",
    question: "Proposez-vous un accompagnement pour le retour au sport ?",
    answer:
      "Oui, notre kinésithérapie du sport inclut un programme de renforcement progressif spécifiquement pensé pour un retour à la pratique sans rechute.",
    category: "Soins",
  },
];
