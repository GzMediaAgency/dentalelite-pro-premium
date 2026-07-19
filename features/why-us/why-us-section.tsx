"use client";

import { ShieldCheck, Clock, HeartHandshake, Microscope, Sparkle, Users, type LucideIcon } from "lucide-react";
import { motion } from "framer-motion";
import { whyUsItems } from "@/data/why-us";
import type { WhyUsItem } from "@/data/why-us";
import { useSpotlight } from "@/hooks/use-spotlight";

const iconMap: Record<WhyUsItem["icon"], LucideIcon> = {
  ShieldCheck,
  Clock,
  HeartHandshake,
  Microscope,
  Sparkle,
  Users,
};

/**
 * features/why-us/why-us-card.tsx (co-localisé)
 * Carte avec bordure en dégradé + spotlight qui suit le curseur — premier
 * usage concret du Design System Sprint 3.
 */
function WhyUsCard({ item, index }: { item: WhyUsItem; index: number }) {
  const Icon = iconMap[item.icon];
  const { ref, onPointerMove } = useSpotlight<HTMLDivElement>();

  return (
    <motion.div
      ref={ref}
      onPointerMove={onPointerMove}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      className="spotlight-card border-gradient rounded-xl p-6 shadow-tinted transition-transform duration-300 hover:-translate-y-1"
    >
      <span className="relative z-10 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-secondary/10 text-secondary">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </span>
      <h3 className="relative z-10 mt-4 font-display text-lg font-semibold text-primary">
        {item.title}
      </h3>
      <p className="relative z-10 mt-2 text-sm text-muted-foreground">{item.description}</p>
    </motion.div>
  );
}

/**
 * features/why-us/why-us-section.tsx
 * Section "Pourquoi nous choisir" — 6 cartes, ajoutée suite à la fiche
 * stratégique uploadée par l'utilisateur.
 */
export function WhyUsSection() {
  return (
    <section className="bg-muted/40 py-section-y">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-eyebrow font-semibold uppercase tracking-widest text-secondary">
            Pourquoi nous choisir
          </p>
          <h2 className="mt-3 text-display-lg text-primary">
            La confiance de milliers de patients, chaque jour
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {whyUsItems.map((item, index) => (
            <WhyUsCard key={item.title} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
