import Link from "next/link";
import { faqItems } from "@/data/active";
import { Accordion } from "@/components/shared/accordion";
import { Reveal } from "@/components/shared/reveal";

/**
 * features/faq/faq-section.tsx
 * Section FAQ de la page d'accueil — 5 questions les plus utiles, avec un
 * lien vers la page /faq complète.
 */
export function FaqSection() {
  const highlighted = faqItems.slice(0, 5);

  return (
    <section className="bg-muted/40 py-section-y" id="faq">
      <div className="mx-auto max-w-3xl px-6">
        <Reveal>
          <div className="text-center">
            <p className="text-eyebrow font-semibold uppercase tracking-widest text-secondary">
              Questions fréquentes
            </p>
            <h2 className="mt-3 text-display-lg text-primary">Vous vous posez des questions ?</h2>
          </div>
        </Reveal>

        <div className="mt-10">
          <Accordion
            items={highlighted.map((item) => ({
              id: item.id,
              question: item.question,
              answer: item.answer,
              icon: item.category,
            }))}
          />
        </div>

        <p className="mt-6 text-center text-sm text-muted-foreground">
          D&apos;autres questions ?{" "}
          <Link href="/faq" className="font-semibold text-secondary hover:underline">
            Consultez notre FAQ complète
          </Link>
        </p>
      </div>
    </section>
  );
}
