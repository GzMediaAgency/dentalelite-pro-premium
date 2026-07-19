import type { BlogArticle } from "@/data/presets/shared-types";

/**
 * data/blog.ts
 * Articles de blog. `content` est un tableau de paragraphes (rendu simple,
 * sans dépendance MDX) — suffisant pour la structure du template ; un vrai
 * moteur Markdown/MDX ou un CMS (voir CONTRIBUTING/README) pourra
 * remplacer cette source plus tard sans changer les composants de page.
 */
export const blogArticles: BlogArticle[] = [
  {
    slug: "guide-implant-dentaire",
    title: "Implant dentaire : le guide complet avant de se lancer",
    excerpt:
      "Bilan, pose, cicatrisation, couronne définitive : on démystifie chaque étape du parcours implantaire.",
    content: [
      "Un implant dentaire remplace la racine d'une dent manquante par une vis en titane, sur laquelle vient ensuite se fixer une couronne. C'est aujourd'hui la solution la plus durable pour retrouver un sourire complet.",
      "La première étape est toujours un bilan approfondi, souvent complété par un examen 3D, pour évaluer la qualité et le volume osseux disponible. Cette planification numérique permet de positionner l'implant avec une précision millimétrique.",
      "Après la pose, une période de cicatrisation de plusieurs mois est nécessaire pour que l'os se solidarise avec l'implant — un phénomène appelé ostéo-intégration. C'est seulement une fois cette étape validée que la couronne définitive est mise en place.",
      "Avec un entretien rigoureux, un implant bien posé peut durer plusieurs décennies. Le suivi régulier au cabinet reste néanmoins essentiel pour surveiller la bonne santé des tissus environnants.",
    ],
    coverImage: {
      src: "https://images.unsplash.com/photo-1593022356769-11f762e25ed9?auto=format&fit=crop&w=1600&q=80",
      alt: "Modèle de mâchoire présentant un implant dentaire",
      width: 1600,
      height: 1067,
    },
    publishedAt: "2026-06-02",
    author: "Dr Camille Armand",
    category: "Implantologie",
    readingTime: "5 min",
  },
  {
    slug: "blanchiment-mythes-realites",
    title: "Blanchiment dentaire : mythes et réalités",
    excerpt:
      "Sensibilité, durabilité, kits maison... on fait le tri entre idées reçues et faits établis.",
    content: [
      "Le blanchiment dentaire professionnel n'abîme pas l'émail lorsqu'il est réalisé avec des concentrations adaptées et sous supervision. C'est justement l'absence de contrôle qui rend certains kits vendus en ligne risqués pour la sensibilité dentaire.",
      "Contrairement à une idée reçue, le résultat n'est pas permanent : il s'estompe progressivement avec le temps et les habitudes alimentaires (café, thé, vin rouge). Un kit de maintien à domicile permet de prolonger l'effet plusieurs mois.",
      "Toutes les dents ne réagissent pas de la même façon : les taches liées à certains traitements (comme la tétracycline durant l'enfance) nécessitent une approche différente, parfois combinée à des facettes.",
    ],
    coverImage: {
      src: "https://images.unsplash.com/photo-1660732205495-f65510d8180e?auto=format&fit=crop&w=1600&q=80",
      alt: "Sourire aux dents blanches",
      width: 1600,
      height: 1067,
    },
    publishedAt: "2026-05-14",
    author: "Dr Léa Fontaine",
    category: "Esthétique",
    readingTime: "4 min",
  },
  {
    slug: "urgence-dentaire-que-faire",
    title: "Urgence dentaire : les bons réflexes en attendant votre rendez-vous",
    excerpt:
      "Douleur soudaine, dent cassée, saignement : les gestes à connaître avant d'arriver au cabinet.",
    content: [
      "En cas de douleur dentaire intense, un antalgique adapté peut soulager en attendant la consultation — évitez cependant l'aspirine directement sur la gencive, un réflexe populaire mais inefficace et parfois irritant.",
      "Si une dent est cassée ou tombée à la suite d'un choc, conservez le fragment (idéalement dans du lait ou de la salive) et contactez le cabinet sans attendre : le délai de prise en charge influence directement les chances de conservation de la dent.",
      "Un gonflement associé à de la fièvre peut signaler une infection nécessitant une prise en charge rapide. N'hésitez jamais à appeler directement le cabinet pour évaluer l'urgence de la situation.",
    ],
    coverImage: {
      src: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=1600&q=80",
      alt: "Examen dentaire avec miroir et instrument",
      width: 1600,
      height: 1067,
    },
    publishedAt: "2026-04-22",
    author: "Dr Julien Farel",
    category: "Urgence",
    readingTime: "3 min",
  },
];

export function getArticleBySlug(slug: string): BlogArticle | undefined {
  return blogArticles.find((article) => article.slug === slug);
}
