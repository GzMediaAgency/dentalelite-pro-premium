/**
 * components/shared/json-ld.tsx
 * Injecte un bloc <script type="application/ld+json"> à partir d'un objet
 * de données structurées (Schema.org). Utilisé pour Dentist/LocalBusiness,
 * FAQPage, Review/AggregateRating et BreadcrumbList.
 */
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
