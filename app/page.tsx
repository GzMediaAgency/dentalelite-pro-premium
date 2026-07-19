import dynamic from "next/dynamic";
import { Hero } from "@/features/hero/hero";
import { SectionDivider } from "@/components/shared/section-divider";
import { WhyUsSection } from "@/features/why-us/why-us-section";
import { ServicesSection } from "@/features/services/services-section";
import { ProcessTimeline } from "@/features/why-us/process-timeline";
import { StatsSection } from "@/features/stats/stats-section";
import { GoogleReviewsSection } from "@/features/testimonials/google-reviews-section";
import { FaqSection } from "@/features/faq/faq-section";
import { ContactSection } from "@/features/contact/contact-section";

/**
 * app/page.tsx
 * -----------------------------------------------------------------------
 * Page d'accueil — assemblage complet (Étapes 5 à 10 + sections
 * additionnelles de la fiche stratégique).
 *
 * BeforeAfterSection est chargée via next/dynamic (Sprint 12) : elle
 * embarque react-compare-image, une dépendance tierce dédiée, alors
 * qu'elle se trouve sous la ligne de flottaison. `ssr: true` (le défaut)
 * garde le contenu rendu côté serveur pour le SEO/crawlers — seul le
 * JavaScript associé part dans un chunk séparé, chargé après le contenu
 * critique du Hero.
 * -----------------------------------------------------------------------
 */
const BeforeAfterSection = dynamic(() =>
  import("@/features/before-after/before-after-section").then((mod) => mod.BeforeAfterSection),
);

/**
 * app/page.tsx
 * Page d'accueil — assemblage complet (Étapes 5 à 10 + sections
 * additionnelles de la fiche stratégique).
 */
export default function HomePage() {
  return (
    <>
      <Hero />
      <SectionDivider fromColor="var(--color-primary)" toColor="var(--color-background)" />
      <WhyUsSection />
      <ServicesSection />
      <BeforeAfterSection />
      <ProcessTimeline />
      <StatsSection />
      <GoogleReviewsSection />
      <FaqSection />
      <ContactSection />
    </>
  );
}
