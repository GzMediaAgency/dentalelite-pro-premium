import type { Metadata } from "next";
import { CalendarCheck, Phone, MessageCircle } from "lucide-react";
import { PageHeader } from "@/components/shared/page-header";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { ContactInfo } from "@/features/contact/contact-info";
import { siteConfig } from "@/config/site";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Prendre rendez-vous",
  description: "Réservez votre rendez-vous en ligne via Doctolib, par téléphone ou par WhatsApp.",
  path: "/rendez-vous",
});

/**
 * app/(marketing)/rendez-vous/page.tsx
 * Page dédiée à la prise de rendez-vous. La réservation elle-même se fait
 * via Doctolib (aucun moteur de réservation n'est réimplémenté ici — c'est
 * le standard du marché en France, avec lequel les patients sont déjà
 * familiers).
 */
export default function RendezVousPage() {
  return (
    <>
      <PageHeader
        eyebrow="Rendez-vous"
        title="Réservez votre rendez-vous en quelques secondes"
        description="Choisissez le créneau qui vous convient directement en ligne, ou contactez-nous pour une prise en charge personnalisée."
      />
      <Breadcrumbs items={[{ label: "Prendre rendez-vous", href: "/rendez-vous" }]} />

      <section className="bg-background py-section-y">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-6 lg:grid-cols-5">
          <div className="flex flex-col justify-center rounded-2xl bg-brand-gradient p-8 text-primary-foreground lg:col-span-3">
            <CalendarCheck className="h-8 w-8 text-accent" aria-hidden="true" />
            <h2 className="mt-4 text-display-md">Réservation en ligne via Doctolib</h2>
            <p className="mt-3 text-primary-foreground/85">
              Consultez les disponibilités en temps réel et confirmez votre rendez-vous
              instantanément, 24h/24.
            </p>
            {siteConfig.integrations.doctolibUrl && (
              <a
                href={siteConfig.integrations.doctolibUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex w-fit items-center gap-2 rounded-md bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground shadow-glow-accent transition-transform hover:scale-[1.02]"
              >
                Voir les créneaux disponibles
              </a>
            )}

            <div className="mt-8 flex flex-col gap-3 border-t border-primary-foreground/15 pt-6 text-sm">
              <a href={`tel:${siteConfig.contact.phone}`} className="flex items-center gap-2 hover:text-accent">
                <Phone className="h-4 w-4" aria-hidden="true" />
                {siteConfig.contact.phoneDisplay}
              </a>
              {siteConfig.integrations.whatsappNumber && (
                <a
                  href={`https://wa.me/${siteConfig.integrations.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-accent"
                >
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  WhatsApp
                </a>
              )}
            </div>
          </div>

          <div className="lg:col-span-2">
            <ContactInfo />
          </div>
        </div>
      </section>
    </>
  );
}
