"use client";

import { useState } from "react";
import ReactCompareImage from "react-compare-image";
import { ZoomIn } from "lucide-react";
import { beforeAfterCases } from "@/data/before-after";
import { Reveal } from "@/components/shared/reveal";
import { Modal } from "@/components/shared/modal";
import { cn } from "@/lib/utils";

/**
 * features/before-after/before-after-section.tsx (Sprint 6)
 * -----------------------------------------------------------------------
 * Comparateur Avant/Après "spectaculaire" :
 *  - plusieurs cas sélectionnables (pastilles), plutôt qu'une seule paire
 *    statique ;
 *  - cadrage premium (bordure en dégradé, ombre flottante) ;
 *  - mode zoom en plein écran (Modal réutilisable) pour un examen plus
 *    détaillé ;
 *  - le swipe/glisser tactile et souris est déjà natif à
 *    react-compare-image, aucun ajout nécessaire de ce côté.
 * -----------------------------------------------------------------------
 */
export function BeforeAfterSection() {
  const [activeId, setActiveId] = useState(beforeAfterCases[0]?.id);
  const [zoomOpen, setZoomOpen] = useState(false);
  const active = beforeAfterCases.find((c) => c.id === activeId) ?? beforeAfterCases[0];

  if (!active) return null;

  return (
    <section className="bg-muted/40 py-section-y">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-eyebrow font-semibold uppercase tracking-widest text-secondary">
              Résultats
            </p>
            <h2 className="mt-3 text-display-lg text-primary">Avant / Après</h2>
            <p className="mt-4 text-muted-foreground">
              Faites glisser le curseur pour visualiser la différence. Images de
              démonstration — chaque cas réel fait l&apos;objet d&apos;un suivi
              photographique dédié, présenté avec l&apos;accord du patient.
            </p>
          </div>
        </Reveal>

        {/* Sélecteur de cas */}
        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {beforeAfterCases.map((c) => (
            <button
              key={c.id}
              type="button"
              onClick={() => setActiveId(c.id)}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                c.id === activeId
                  ? "bg-primary text-primary-foreground"
                  : "border border-border bg-card text-foreground hover:bg-muted",
              )}
            >
              {c.label}
            </button>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="border-gradient relative mx-auto mt-8 max-w-3xl overflow-hidden rounded-2xl shadow-float">
            <ReactCompareImage
              key={active.id}
              leftImage={active.beforeImage}
              rightImage={active.afterImage}
              leftImageLabel="Avant"
              rightImageLabel="Après"
              sliderLineColor="#D4AF37"
              sliderPositionPercentage={0.5}
            />
            <button
              type="button"
              onClick={() => setZoomOpen(true)}
              aria-label="Agrandir la comparaison"
              className="glass absolute bottom-4 right-4 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full text-foreground shadow-soft transition-transform hover:scale-105"
            >
              <ZoomIn className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        </Reveal>
      </div>

      <Modal open={zoomOpen} onClose={() => setZoomOpen(false)} title={`Avant/Après — ${active.label}`}>
        <div className="overflow-hidden rounded-xl">
          <ReactCompareImage
            leftImage={active.beforeImage}
            rightImage={active.afterImage}
            leftImageLabel="Avant"
            rightImageLabel="Après"
            sliderLineColor="#D4AF37"
            sliderPositionPercentage={0.5}
          />
        </div>
      </Modal>
    </section>
  );
}
