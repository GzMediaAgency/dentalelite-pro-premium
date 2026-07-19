import type { Metadata } from "next";
import { PageHeader } from "@/components/shared/page-header";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { siteConfig } from "@/config/site";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Mentions légales",
  description: "Mentions légales du site DentalElite Pro.",
  path: "/mentions-legales",
});

export default function MentionsLegalesPage() {
  return (
    <>
      <PageHeader eyebrow="Informations légales" title="Mentions légales" />
      <Breadcrumbs items={[{ label: "Mentions légales", href: "/mentions-legales" }]} />

      <section className="bg-background py-section-y">
        <div className="mx-auto max-w-3xl space-y-8 px-6 text-sm text-foreground/90">
          <div>
            <h2 className="mb-2 font-display text-lg font-semibold text-primary">Éditeur du site</h2>
            <p>
              {siteConfig.legalName}
              <br />
              {siteConfig.contact.address.street}, {siteConfig.contact.address.postalCode}{" "}
              {siteConfig.contact.address.city}
              <br />
              Téléphone : {siteConfig.contact.phoneDisplay}
              <br />
              E-mail : {siteConfig.contact.email}
            </p>
          </div>

          <div>
            <h2 className="mb-2 font-display text-lg font-semibold text-primary">
              Directeur de la publication
            </h2>
            <p>{siteConfig.legalName}</p>
          </div>

          <div>
            <h2 className="mb-2 font-display text-lg font-semibold text-primary">Hébergement</h2>
            <p>
              Le site est hébergé par un prestataire tiers dont les coordonnées complètes
              sont disponibles sur simple demande auprès de l&apos;éditeur.
            </p>
          </div>

          <div>
            <h2 className="mb-2 font-display text-lg font-semibold text-primary">
              Propriété intellectuelle
            </h2>
            <p>
              L&apos;ensemble des contenus présents sur ce site (textes, images, logos) est
              protégé par le droit de la propriété intellectuelle. Toute reproduction sans
              autorisation préalable est interdite.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
