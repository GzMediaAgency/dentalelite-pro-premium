import type { FaqItem } from "@/data/presets/shared-types";

/**
 * data/faq.ts
 * Questions fréquentes. Consommé par la section FAQ de la page d'accueil
 * (un sous-ensemble) et par la page /faq complète (toutes, groupées par
 * catégorie).
 */
export const faqItems: FaqItem[] = [
  {
    id: "f1",
    question: "Comment prendre rendez-vous ?",
    answer:
      "Le plus simple est de réserver directement en ligne via notre page Doctolib, accessible depuis le bouton « Prendre rendez-vous » en haut de chaque page. Vous pouvez aussi nous appeler ou nous écrire par WhatsApp.",
    category: "Rendez-vous",
  },
  {
    id: "f2",
    question: "Le cabinet prend-il en charge les urgences dentaires ?",
    answer:
      "Oui. Nous réservons des créneaux dédiés aux urgences en semaine, ainsi que le samedi matin. En cas de douleur importante, appelez-nous directement : nous priorisons toujours la prise en charge de la douleur.",
    category: "Urgence",
  },
  {
    id: "f3",
    question: "Le cabinet est-il conventionné avec la Sécurité sociale ?",
    answer:
      "Oui, le cabinet est conventionné secteur 1. Les soins courants sont remboursés selon les taux habituels ; pour les actes hors nomenclature (implants, blanchiment, gouttières), un devis détaillé vous est systématiquement remis avant tout traitement.",
    category: "Tarifs",
  },
  {
    id: "f4",
    question: "Combien de temps dure un traitement implantaire ?",
    answer:
      "Le protocole complet s'étale généralement sur 3 à 6 mois entre la pose de l'implant et la couronne définitive, le temps que l'os se consolide autour de l'implant. Un bilan 3D permet d'affiner ce délai selon votre situation.",
    category: "Soins",
  },
  {
    id: "f5",
    question: "Le blanchiment dentaire abîme-t-il l'émail ?",
    answer:
      "Non, lorsqu'il est réalisé sous contrôle professionnel avec des produits dosés et un protocole adapté à votre sensibilité dentaire. C'est justement pour cette raison que nous déconseillons les kits de blanchiment non encadrés.",
    category: "Soins",
  },
  {
    id: "f6",
    question: "Proposez-vous des facilités de paiement ?",
    answer:
      "Oui, pour les traitements les plus importants (implantologie, orthodontie), un paiement échelonné peut être mis en place. Nous en discutons ensemble lors de la remise du devis.",
    category: "Tarifs",
  },
  {
    id: "f7",
    question: "Puis-je amener mes enfants au cabinet ?",
    answer:
      "Bien sûr, notre équipe est habituée à recevoir les enfants dans un cadre rassurant. N'hésitez pas à le préciser lors de la prise de rendez-vous.",
    category: "Général",
  },
  {
    id: "f8",
    question: "Où se garer pour venir au cabinet ?",
    answer:
      "Un parking public se trouve à proximité immédiate, et le cabinet est facilement accessible en transports en commun. Vous trouverez l'itinéraire détaillé sur notre page Contact.",
    category: "Général",
  },
];
