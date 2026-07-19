import { ContactForm } from "@/features/contact/contact-form";
import { ContactInfo, ContactMap } from "@/features/contact/contact-info";
import { Reveal } from "@/components/shared/reveal";

/**
 * features/contact/contact-section.tsx (Sprint 9)
 * Assemble formulaire, coordonnées et carte, avec un cadrage premium
 * cohérent (bordure en dégradé, ombre teintée) et une apparition en
 * cascade au scroll.
 */
export function ContactSection({ withHeading = true }: { withHeading?: boolean }) {
  return (
    <section className="bg-background py-section-y-lg" id="contact">
      <div className="mx-auto max-w-7xl px-6">
        {withHeading && (
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-eyebrow font-semibold uppercase tracking-widest text-secondary">
                Contact
              </p>
              <h2 className="mt-3 text-display-lg text-primary">
                Une question ? Parlons-en.
              </h2>
              <p className="mt-4 text-muted-foreground">
                Notre équipe vous répond sous 24h ouvrées. Pour une prise en charge
                plus rapide, privilégiez Doctolib ou le téléphone.
              </p>
            </div>
          </Reveal>
        )}

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-5">
          <Reveal direction="left" className="lg:col-span-3">
            <div className="border-gradient rounded-xl p-6 shadow-tinted sm:p-8">
              <ContactForm />
            </div>
          </Reveal>
          <Reveal direction="right" delay={0.1} className="flex flex-col gap-6 lg:col-span-2">
            <ContactInfo />
            <ContactMap />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
