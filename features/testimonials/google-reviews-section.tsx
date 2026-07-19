import { getGoogleReviews } from "@/lib/google-reviews";
import { TestimonialsCarousel } from "@/features/testimonials/testimonials-carousel";

/**
 * features/testimonials/google-reviews-section.tsx
 * Server Component : effectue le fetch Google Places (ou le repli) côté
 * serveur — la clé API n'est jamais exposée au navigateur — puis transmet
 * le résultat au carousel client. C'est le point d'entrée à utiliser dans
 * les pages (homepage, /avis), plutôt que TestimonialsCarousel directement.
 */
export async function GoogleReviewsSection() {
  const { testimonials, aggregateRating, isLive } = await getGoogleReviews();

  return (
    <TestimonialsCarousel
      testimonials={testimonials}
      aggregateRating={aggregateRating}
      isLive={isLive}
    />
  );
}
