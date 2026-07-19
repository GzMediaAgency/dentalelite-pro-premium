import type { Metadata } from "next";
import { PageHeader } from "@/components/shared/page-header";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { siteConfig } from "@/config/site";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "RGPD",
  description: "Informations sur le traitement de vos données personnelles conformément au RGPD.",
  path: "/rgpd",
});

const sections = [
  {
    title: "Responsable du traitement",
    body: `${siteConfig.legalName} est responsable du traitement des données personnelles collectées via ce site (formulaire de contact, newsletter, prise de rendez-vous).`,
  },
  {
    title: "Finalités du traitement",
    body: "Vos données sont utilisées pour répondre à vos demandes, gérer les rendez-vous et, si vous y consentez, vous envoyer notre newsletter. Aucune donnée n'est vendue à des tiers.",
  },
  {
    title: "Durée de conservation",
    body: "Les données liées à votre dossier patient sont conservées conformément aux obligations légales du secteur médical. Les données du formulaire de contact sont conservées 3 ans maximum en l'absence de suite donnée.",
  },
  {
    title: "Vos droits",
    body: "Conformément au RGPD, vous disposez d'un droit d'accès, de rectification, d'effacement et de portabilité de vos données, ainsi que d'un droit d'opposition. Vous pouvez exercer ces droits en nous contactant directement.",
  },
  {
    title: "Cookies",
    body: "Le site utilise des cookies de mesure d'audience et, le cas échéant, de suivi publicitaire, uniquement après votre consentement via le bandeau cookies. Voir notre politique de confidentialité pour le détail.",
  },
];

export default function RgpdPage() {
  return (
    <>
      <PageHeader eyebrow="Informations légales" title="RGPD & protection des données" />
      <Breadcrumbs items={[{ label: "RGPD", href: "/rgpd" }]} />

      <section className="bg-background py-section-y">
        <div className="mx-auto max-w-3xl space-y-8 px-6 text-sm text-foreground/90">
          {sections.map((section) => (
            <div key={section.title}>
              <h2 className="mb-2 font-display text-lg font-semibold text-primary">
                {section.title}
              </h2>
              <p>{section.body}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
