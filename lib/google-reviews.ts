import { siteConfig } from "@/config/site";
import { testimonials as fallbackTestimonials, aggregateRating as fallbackAggregate } from "@/data/active";
import type { Testimonial } from "@/data/presets/shared-types";

/**
 * lib/google-reviews.ts
 * -----------------------------------------------------------------------
 * Intégration réelle avec l'API Google Places (Place Details) pour
 * récupérer les vrais avis Google du cabinet. Nécessite deux variables
 * d'environnement (voir .env.example) :
 *   - GOOGLE_PLACES_API_KEY
 *   - NEXT_PUBLIC_GOOGLE_PLACE_ID (ou siteConfig.integrations.googlePlaceId)
 *
 * Comportement sans configuration : retourne les données de démonstration
 * de /data/active — le template reste utilisable "out of the box" sans
 * qu'aucune section ne casse ou n'affiche d'erreur visible au visiteur.
 *
 * Appelée uniquement depuis un Server Component (jamais côté client — la
 * clé API ne doit jamais être exposée au navigateur).
 * -----------------------------------------------------------------------
 */

interface GooglePlaceReview {
  author_name: string;
  profile_photo_url?: string;
  rating: number;
  text: string;
  time: number; // epoch seconds
}

interface GooglePlaceDetailsResponse {
  status: string;
  result?: {
    rating: number;
    user_ratings_total: number;
    reviews?: GooglePlaceReview[];
  };
}

export interface GoogleReviewsResult {
  testimonials: Testimonial[];
  aggregateRating: { ratingValue: number; reviewCount: number; bestRating: number };
  isLive: boolean;
}

function initialsFromName(name: string): string {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");
}

export async function getGoogleReviews(): Promise<GoogleReviewsResult> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.NEXT_PUBLIC_GOOGLE_PLACE_ID ?? siteConfig.integrations.googlePlaceId;

  if (!apiKey || !placeId) {
    return {
      testimonials: fallbackTestimonials,
      aggregateRating: fallbackAggregate,
      isLive: false,
    };
  }

  try {
    const url = new URL("https://maps.googleapis.com/maps/api/place/details/json");
    url.searchParams.set("place_id", placeId);
    url.searchParams.set("fields", "rating,user_ratings_total,reviews");
    url.searchParams.set("language", "fr");
    url.searchParams.set("key", apiKey);

    // Revalidation quotidienne — les avis ne changent pas assez vite pour
    // justifier un fetch à chaque requête.
    const response = await fetch(url.toString(), { next: { revalidate: 86400 } });
    const data = (await response.json()) as GooglePlaceDetailsResponse;

    if (data.status !== "OK" || !data.result) {
      throw new Error(`Google Places API status: ${data.status}`);
    }

    const testimonials: Testimonial[] = (data.result.reviews ?? []).map((review, index) => ({
      id: `google-${review.time}-${index}`,
      name: review.author_name,
      initials: initialsFromName(review.author_name),
      rating: review.rating,
      text: review.text,
      date: new Date(review.time * 1000).toISOString().slice(0, 7),
      photoUrl: review.profile_photo_url,
    }));

    return {
      testimonials: testimonials.length > 0 ? testimonials : fallbackTestimonials,
      aggregateRating: {
        ratingValue: data.result.rating,
        reviewCount: data.result.user_ratings_total,
        bestRating: 5,
      },
      isLive: true,
    };
  } catch {
    // Échec réseau ou clé invalide : on retombe sur la démo plutôt que de
    // casser la section pour le visiteur.
    return {
      testimonials: fallbackTestimonials,
      aggregateRating: fallbackAggregate,
      isLive: false,
    };
  }
}
