"use client";

import * as React from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import type { Testimonial } from "@/data/presets/shared-types";
import { StarRating } from "@/components/shared/star-rating";
import { VerifiedBadge } from "@/components/shared/verified-badge";
import { AnimatedCounter } from "@/components/shared/animated-counter";
import { useSpotlight } from "@/hooks/use-spotlight";
import { Reveal } from "@/components/shared/reveal";
import { cn } from "@/lib/utils";

interface TestimonialsCarouselProps {
  testimonials: Testimonial[];
  aggregateRating: { ratingValue: number; reviewCount: number; bestRating: number };
  isLive: boolean;
}

/**
 * features/testimonials/testimonials-carousel.tsx (Sprint 7)
 * -----------------------------------------------------------------------
 * Reçoit ses données en props (venant soit de la vraie API Google Places,
 * soit du repli de démonstration — voir lib/google-reviews.ts et le
 * Server Component features/testimonials/google-reviews-section.tsx qui
 * fait le fetch en amont). Ce composant reste "use client" pour Embla,
 * mais ne connaît plus la source des données.
 * -----------------------------------------------------------------------
 */
function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  const { ref, onPointerMove } = useSpotlight<HTMLDivElement>();

  return (
    <div
      ref={ref}
      onPointerMove={onPointerMove}
      className="spotlight-card flex h-full flex-col rounded-xl border border-border bg-card p-6 shadow-soft"
    >
      <Quote className="relative z-10 h-6 w-6 text-accent" aria-hidden="true" />
      <StarRating score={testimonial.rating} className="relative z-10 mt-3" />
      <p className="relative z-10 mt-3 flex-1 text-sm text-foreground/90">{testimonial.text}</p>
      <div className="relative z-10 mt-5 flex items-center gap-3">
        {testimonial.photoUrl ? (
          <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full">
            <Image src={testimonial.photoUrl} alt="" fill sizes="40px" className="object-cover" />
          </div>
        ) : (
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-semibold text-secondary">
            {testimonial.initials}
          </span>
        )}
        <div>
          <p className="text-sm font-semibold text-foreground">{testimonial.name}</p>
          {testimonial.service && (
            <p className="text-xs text-muted-foreground">{testimonial.service}</p>
          )}
        </div>
      </div>
    </div>
  );
}

export function TestimonialsCarousel({
  testimonials,
  aggregateRating,
  isLive,
}: TestimonialsCarouselProps) {
  const [autoplay] = React.useState(() =>
    Autoplay({ delay: 5000, stopOnInteraction: false }),
  );
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" }, [autoplay]);
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  React.useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <section className="bg-background py-section-y-lg" aria-label="Témoignages de patients">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-eyebrow font-semibold uppercase tracking-widest text-secondary">
              Avis patients
            </p>
            <h2 className="mt-3 text-display-lg text-primary">Ce que nos patients en disent</h2>
            <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 shadow-soft">
              <VerifiedBadge />
              <StarRating score={5} />
              <span className="text-sm font-semibold text-foreground">
                {aggregateRating.ratingValue.toFixed(1)}/5
              </span>
              <span className="text-sm text-muted-foreground">
                · <AnimatedCounter value={aggregateRating.reviewCount} suffix="" /> avis
                {isLive ? " Google" : " (démonstration)"}
              </span>
            </div>
          </div>
        </Reveal>

        <div className="relative mt-12">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="-ml-4 flex">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="min-w-0 shrink-0 grow-0 basis-full pl-4 sm:basis-1/2 lg:basis-1/3"
                >
                  <TestimonialCard testimonial={testimonial} />
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => emblaApi?.scrollPrev()}
              aria-label="Témoignage précédent"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border transition-colors hover:bg-muted"
            >
              <ChevronLeft className="h-4 w-4" aria-hidden="true" />
            </button>

            <div className="flex items-center gap-2">
              {testimonials.map((testimonial, index) => (
                <button
                  key={testimonial.id}
                  type="button"
                  onClick={() => emblaApi?.scrollTo(index)}
                  aria-label={`Aller au témoignage ${index + 1}`}
                  className={cn(
                    "h-2 rounded-full transition-all",
                    index === selectedIndex ? "w-6 bg-secondary" : "w-2 bg-border",
                  )}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={() => emblaApi?.scrollNext()}
              aria-label="Témoignage suivant"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border transition-colors hover:bg-muted"
            >
              <ChevronRight className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
