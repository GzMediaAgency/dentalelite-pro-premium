"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, ChevronDown } from "lucide-react";
import { heroContent } from "@/data/active";
import { StarRating } from "@/components/shared/star-rating";
import { VerifiedBadge } from "@/components/shared/verified-badge";
import { Magnetic } from "@/components/shared/magnetic";
import { GlowOrbs } from "@/features/hero/glow-orbs";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * features/hero/hero.tsx (v2 — Sprint 2)
 * -----------------------------------------------------------------------
 * Répartition des animations :
 *  - GSAP  : reveal du titre (blur + translation, chorégraphie fine),
 *            parallax du fond au scroll (ScrollTrigger + scrub),
 *            bouton CTA magnétique (via le hook useMagnetic).
 *  - Framer Motion : entrées/sorties de composants React (badge, carte
 *            flottante) — son terrain naturel, pas de raison de le
 *            remplacer par GSAP ici.
 *
 * Note sur la "vidéo 4K" du brief : toujours non incluse pour la même
 * raison qu'au Sprint initial (aucune source vidéo licenciée disponible
 * ici) — le zoom Ken Burns + le parallax scroll donnent un effet de
 * profondeur cinématique équivalent à l'écran, sans dépendre d'un fichier
 * vidéo que je ne peux pas fournir de façon fiable.
 * -----------------------------------------------------------------------
 */

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};

const lineVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

export function Hero() {
  const prefersReducedMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (prefersReducedMotion || !headlineRef.current) return;
    const lines = headlineRef.current.querySelectorAll("[data-reveal-line]");

    const ctx = gsap.context(() => {
      gsap.fromTo(
        lines,
        { opacity: 0, y: 40, filter: "blur(10px)" },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 1,
          stagger: 0.14,
          ease: "power3.out",
          delay: 0.35,
        },
      );
    }, headlineRef);

    return () => ctx.revert();
  }, [prefersReducedMotion]);

  useEffect(() => {
    if (prefersReducedMotion || !sectionRef.current || !bgRef.current) return;

    const ctx = gsap.context(() => {
      gsap.to(bgRef.current, {
        yPercent: 18,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [prefersReducedMotion]);

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-[92vh] items-center overflow-hidden bg-primary"
    >
      <motion.div
        ref={bgRef}
        className="absolute inset-0"
        initial={{ scale: 1 }}
        animate={prefersReducedMotion ? {} : { scale: 1.08 }}
        transition={{ duration: 22, ease: "linear" }}
      >
        <Image
          src={heroContent.backgroundImage.src}
          alt={heroContent.backgroundImage.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>

      <div
        className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-primary/30"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-primary/70 via-transparent to-transparent"
        aria-hidden="true"
      />

      <GlowOrbs />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 gap-12 px-6 py-24 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-primary-foreground"
        >
          <motion.div
            variants={lineVariants}
            className="glass-dark mb-6 inline-flex items-center gap-2 rounded-full px-4 py-2"
          >
            <VerifiedBadge className="text-accent" />
            <StarRating score={heroContent.rating.score} />
            <span className="text-xs font-medium text-primary-foreground/90">
              {heroContent.rating.patientCount} {heroContent.rating.label}
            </span>
          </motion.div>

          <p className="mb-4 text-eyebrow font-semibold uppercase tracking-widest text-primary-foreground/70">
            <motion.span variants={lineVariants} className="inline-block">
              {heroContent.eyebrow}
            </motion.span>
          </p>

          <h1 ref={headlineRef} className="text-display-xl text-primary-foreground sm:text-display-2xl">
            {heroContent.headlineLines.map((line) => (
              <span key={line} data-reveal-line className="block overflow-hidden">
                {line}
              </span>
            ))}
          </h1>

          <motion.p
            variants={lineVariants}
            className="mt-6 max-w-xl text-base text-primary-foreground/85 sm:text-lg"
          >
            {heroContent.description}
          </motion.p>

          <motion.div variants={lineVariants} className="mt-9 flex flex-wrap items-center gap-4">
            <Magnetic strength={0.4}>
              <Link
                href={heroContent.primaryCta.href}
                target={heroContent.primaryCta.external ? "_blank" : undefined}
                rel={heroContent.primaryCta.external ? "noopener noreferrer" : undefined}
                className="group inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3.5 text-sm font-semibold text-accent-foreground shadow-glow-accent transition-transform hover:scale-[1.03]"
              >
                {heroContent.primaryCta.label}
                <ArrowRight
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            </Magnetic>
            <Link
              href={heroContent.secondaryCta.href}
              className="glass-dark inline-flex items-center gap-2 rounded-md px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.03]"
            >
              {heroContent.secondaryCta.label}
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto hidden max-w-sm lg:block"
        >
          <div
            className={`glass overflow-hidden rounded-2xl p-3 ${
              prefersReducedMotion ? "" : "animate-float"
            }`}
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-xl">
              <Image
                src={heroContent.floatingImage.src}
                alt={heroContent.floatingImage.alt}
                fill
                sizes="(min-width: 1024px) 384px, 0px"
                className="object-cover"
              />
            </div>
          </div>

          <div className="glass absolute -bottom-6 -left-6 rounded-2xl px-5 py-4 shadow-float">
            <p className="text-display-sm font-semibold text-primary-foreground">
              {heroContent.floatingStat.value}
            </p>
            <p className="text-xs text-primary-foreground/80">
              {heroContent.floatingStat.label}
            </p>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="absolute inset-x-0 bottom-8 z-10 flex justify-center"
        animate={prefersReducedMotion ? {} : { y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden="true"
      >
        <ChevronDown className="h-6 w-6 text-primary-foreground/60" />
      </motion.div>
    </section>
  );
}
