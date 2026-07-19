"use client";

import Image from "next/image";
import Link from "next/link";
import type { PointerEvent } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { services } from "@/data/active";
import { serviceIconMap } from "@/features/services/icon-map";
import type { Service } from "@/features/services/types";
import { useTilt } from "@/hooks/use-tilt";
import { useSpotlight } from "@/hooks/use-spotlight";
import { Reveal } from "@/components/shared/reveal";

/**
 * features/services/service-card.tsx (Sprint 5)
 * -----------------------------------------------------------------------
 * Carte service premium :
 *  - tilt 3D (useTilt, Sprint 4) + spotlight au survol (useSpotlight,
 *    Sprint 3) combinés sur le même pointeur ;
 *  - bordure en dégradé de marque (.border-gradient) et ombre teintée
 *    (.shadow-tinted) au lieu d'un simple contour gris ;
 *  - badge icône en dégradé avec reflet "glass" plutôt qu'un aplat de
 *    couleur plat ;
 *  - CTA qui se révèle en glissant depuis le bas de l'image au survol —
 *    pattern carte produit Stripe, plus incitatif qu'un simple lien texte.
 * -----------------------------------------------------------------------
 */
function ServiceCard({ service, index }: { service: Service; index: number }) {
  const { ref: tiltRef, tilt, onPointerMove: onTiltMove, onPointerLeave } = useTilt<HTMLDivElement>();
  const { ref: spotlightRef, onPointerMove: onSpotlightMove } = useSpotlight<HTMLDivElement>();
  const Icon = serviceIconMap[service.icon];

  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
    onTiltMove(event);
    onSpotlightMove(event);
  }

  function setRefs(el: HTMLDivElement | null) {
    tiltRef.current = el;
    spotlightRef.current = el;
  }

  return (
    <Reveal direction="up" delay={index * 0.08}>
      <motion.div
        ref={setRefs}
        onPointerMove={handlePointerMove}
        onPointerLeave={onPointerLeave}
        animate={{ rotateX: tilt.x, rotateY: tilt.y }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        style={{ transformPerspective: 900 }}
        className="spotlight-card border-gradient group relative flex flex-col overflow-hidden rounded-xl shadow-tinted transition-shadow duration-300 hover:shadow-float"
      >
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={service.image.src}
            alt={service.image.alt}
            fill
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-primary/10 to-transparent" />

          <span className="glass absolute left-4 top-4 z-10 inline-flex h-11 w-11 items-center justify-center rounded-full text-secondary shadow-soft">
            {Icon ? <Icon className="h-5 w-5" aria-hidden="true" /> : null}
          </span>

          {/* CTA révélé au survol — glisse depuis le bas de l'image */}
          <Link
            href={service.href}
            className="glass-dark absolute inset-x-3 bottom-3 z-10 flex translate-y-14 items-center justify-between rounded-lg px-4 py-2.5 text-sm font-semibold text-primary-foreground opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
          >
            Découvrir ce soin
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        <div className="relative z-10 flex flex-1 flex-col bg-card p-6">
          <h3 className="text-display-sm text-primary">{service.name}</h3>
          <p className="mt-2 flex-1 text-sm text-muted-foreground">
            {service.shortDescription}
          </p>
          <Link
            href={service.href}
            className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-secondary transition-colors hover:text-accent"
          >
            En savoir plus
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </motion.div>
    </Reveal>
  );
}

/**
 * features/services/services-section.tsx
 * Section "Nos soins" de la page d'accueil.
 */
export function ServicesSection() {
  return (
    <section id="soins" className="bg-background py-section-y-lg">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-eyebrow font-semibold uppercase tracking-widest text-secondary">
              Nos soins
            </p>
            <h2 className="mt-3 text-display-lg text-primary">
              Une prise en charge complète, à chaque étape de votre sourire
            </h2>
            <p className="mt-4 text-muted-foreground">
              De la prévention aux traitements les plus avancés, notre équipe vous
              accompagne avec la même exigence de précision et de confort.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <ServiceCard key={service.slug} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
