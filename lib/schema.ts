import { siteConfig } from "@/config/site";
import type { FaqItem } from "@/data/presets/shared-types";
import type { Testimonial } from "@/data/presets/shared-types";
import type { BreadcrumbEntry } from "@/components/shared/breadcrumbs";

/**
 * lib/schema.ts
 * -----------------------------------------------------------------------
 * Générateurs de données structurées Schema.org (JSON-LD), tirés
 * exclusivement de config/site.ts et /data — aucune donnée codée en dur
 * ici, pour que la personnalisation du cabinet mette aussi à jour le SEO
 * structuré automatiquement.
 * -----------------------------------------------------------------------
 */

const openingHoursSpecification = () =>
  siteConfig.openingHours
    .filter((entry) => entry.open && entry.close)
    .map((entry) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: dayToSchemaDay(entry.day),
      opens: entry.open,
      closes: entry.close,
    }));

function dayToSchemaDay(day: string): string {
  const map: Record<string, string> = {
    Lundi: "Monday",
    Mardi: "Tuesday",
    Mercredi: "Wednesday",
    Jeudi: "Thursday",
    Vendredi: "Friday",
    Samedi: "Saturday",
    Dimanche: "Sunday",
  };
  return map[day] ?? day;
}

/** Schema principal du cabinet — type Dentist (spécialisation de LocalBusiness) */
export function buildDentistSchema() {
  return {
    "@context": "https://schema.org",
    "@type": siteConfig.schemaType,
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    description: siteConfig.description,
    url: siteConfig.seo.siteUrl,
    telephone: siteConfig.contact.phone,
    email: siteConfig.contact.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.contact.address.street,
      postalCode: siteConfig.contact.address.postalCode,
      addressLocality: siteConfig.contact.address.city,
      addressCountry: siteConfig.contact.address.countryCode,
    },
    openingHoursSpecification: openingHoursSpecification(),
    sameAs: siteConfig.socials.map((social) => social.url),
    priceRange: "€€",
  };
}

/** Schema FAQPage — pour la page /faq et la section FAQ homepage */
export function buildFaqSchema(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

/** Schema AggregateRating + Review — pour la page /avis */
export function buildReviewSchema(
  testimonials: Testimonial[],
  aggregate: { ratingValue: number; reviewCount: number; bestRating: number },
) {
  return {
    "@context": "https://schema.org",
    "@type": siteConfig.schemaType,
    name: siteConfig.name,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: aggregate.ratingValue,
      reviewCount: aggregate.reviewCount,
      bestRating: aggregate.bestRating,
    },
    review: testimonials.map((testimonial) => ({
      "@type": "Review",
      author: { "@type": "Person", name: testimonial.name },
      reviewRating: {
        "@type": "Rating",
        ratingValue: testimonial.rating,
        bestRating: 5,
      },
      reviewBody: testimonial.text,
      datePublished: testimonial.date,
    })),
  };
}

/** Schema BlogPosting — pour chaque article de blog */
export function buildArticleSchema(article: {
  title: string;
  excerpt: string;
  slug: string;
  publishedAt: string;
  author: string;
  coverImage: { src: string };
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    description: article.excerpt,
    image: article.coverImage.src,
    datePublished: new Date(article.publishedAt).toISOString(),
    author: { "@type": "Person", name: article.author },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
    },
    mainEntityOfPage: `${siteConfig.seo.siteUrl}/blog/${article.slug}`,
  };
}

/** Schema BreadcrumbList — pour toutes les pages internes */
export function buildBreadcrumbSchema(items: BreadcrumbEntry[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: `${siteConfig.seo.siteUrl}${item.href}`,
    })),
  };
}
