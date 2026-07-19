import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * components/shared/star-rating.tsx
 * Affiche `score` étoiles pleines sur 5. Purement décoratif visuellement,
 * mais annoté pour les lecteurs d'écran via aria-label.
 */
export function StarRating({
  score,
  className,
}: {
  score: number;
  className?: string;
}) {
  return (
    <div
      className={cn("flex items-center gap-0.5", className)}
      role="img"
      aria-label={`Note de ${score} sur 5 étoiles`}
    >
      {Array.from({ length: 5 }).map((_, index) => (
        <Star
          key={index}
          className={cn(
            "h-3.5 w-3.5",
            index < score ? "fill-accent text-accent" : "fill-muted text-muted",
          )}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}
