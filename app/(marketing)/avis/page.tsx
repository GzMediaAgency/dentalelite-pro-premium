import type { Metadata } from "next";
import { PageHeader } from "@/components/shared/page-header";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { TestimonialsCarousel } from "@/features/testimonials/testimonials-carousel";
import { JsonLd } from "@/components/shared/json-ld";
import { buildReviewSchema } from "@/lib/schema";
import { getGoogleReviews } from "@/lib/google-reviews";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Avis patients",
  description: "Découvrez les avis de nos patients sur leur expérience au cabinet.",
  path: "/avis",
});

export default async function AvisPage() {
  const { testimonials, aggregateRating, isLive } = await getGoogleReviews();

  return (
    <>
      <JsonLd data={buildReviewSchema(testimonials, aggregateRating)} />
      <PageHeader
        eyebrow="Avis"
        title="La confiance de nos patients, en toute transparence"
        description={`Note moyenne de ${aggregateRating.ratingValue.toFixed(1)}/5 sur ${aggregateRating.reviewCount} avis${isLive ? " Google" : " (démonstration)"}.`}
      />
      <Breadcrumbs items={[{ label: "Avis", href: "/avis" }]} />
      <TestimonialsCarousel
        testimonials={testimonials}
        aggregateRating={aggregateRating}
        isLive={isLive}
      />
    </>
  );
}
