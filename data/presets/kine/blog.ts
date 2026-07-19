import type { BlogArticle } from "@/data/presets/shared-types";

/**
 * data/presets/kine/blog.ts
 */
export const blogArticles: BlogArticle[] = [
  {
    slug: "reeducation-apres-entorse-cheville",
    title: "Entorse de la cheville : les étapes clés de la rééducation",
    excerpt:
      "De l'immobilisation au retour au sport, on détaille chaque phase de la récupération d'une entorse.",
    content: [
      "Une entorse de cheville se soigne en plusieurs phases distinctes : la phase inflammatoire, où le repos et la glace priment, puis une phase de récupération de la mobilité articulaire.",
      "Vient ensuite le renforcement musculaire, essentiel pour stabiliser l'articulation et éviter les récidives — un point souvent négligé si la rééducation s'arrête trop tôt.",
      "La dernière étape, la réathlétisation, prépare progressivement le retour à l'activité sportive avec des exercices proprioceptifs spécifiques.",
    ],
    coverImage: {
      src: "https://images.unsplash.com/photo-1545463913-5083aa7359a6?auto=format&fit=crop&w=1600&q=80",
      alt: "Massage et manipulation de la cheville",
      width: 1600,
      height: 1067,
    },
    publishedAt: "2026-05-20",
    author: "Thomas Lenoir",
    category: "Kinésithérapie du sport",
    readingTime: "4 min",
  },
  {
    slug: "reeducation-perineale-post-partum",
    title: "Rééducation périnéale : pourquoi et quand commencer après l'accouchement",
    excerpt: "Les réponses aux questions les plus fréquentes sur la rééducation post-partum.",
    content: [
      "La rééducation périnéale est généralement recommandée à partir de 6 à 8 semaines après l'accouchement, une fois la consultation post-natale réalisée.",
      "Elle vise à restaurer le tonus musculaire du périnée, souvent sollicité pendant la grossesse et l'accouchement, pour prévenir des troubles urinaires ultérieurs.",
      "Chaque séance se déroule dans un cadre individuel et confidentiel, à un rythme adapté à la récupération de chaque patiente.",
    ],
    coverImage: {
      src: "https://images.unsplash.com/photo-1540205895360-4ad4cffb3aa8?auto=format&fit=crop&w=1600&q=80",
      alt: "Séance de kinésithérapie en cabinet",
      width: 1600,
      height: 1067,
    },
    publishedAt: "2026-04-10",
    author: "Sarah Benaissa",
    category: "Rééducation périnéale",
    readingTime: "3 min",
  },
  {
    slug: "kinesitherapie-respiratoire-nourrisson",
    title: "Kinésithérapie respiratoire chez le nourrisson : ce que les parents doivent savoir",
    excerpt: "Bronchiolite, désencombrement : les bons réflexes avant la première séance.",
    content: [
      "La kinésithérapie respiratoire aide à désencombrer les voies respiratoires du nourrisson, notamment lors d'épisodes de bronchiolite.",
      "La technique utilisée est douce et adaptée à l'âge de l'enfant — elle peut sembler impressionnante pour les parents, mais reste indolore lorsqu'elle est bien réalisée.",
      "Un accompagnement des parents sur les gestes du quotidien (hydratation, position de sommeil) complète généralement la prise en charge.",
    ],
    coverImage: {
      src: "https://images.unsplash.com/photo-1545463913-5083aa7359a6?auto=format&fit=crop&w=1600&q=80",
      alt: "Praticien accompagnant un patient",
      width: 1600,
      height: 1067,
    },
    publishedAt: "2026-03-02",
    author: "Kevin Morel",
    category: "Kinésithérapie respiratoire",
    readingTime: "3 min",
  },
];

export function getArticleBySlug(slug: string): BlogArticle | undefined {
  return blogArticles.find((article) => article.slug === slug);
}
