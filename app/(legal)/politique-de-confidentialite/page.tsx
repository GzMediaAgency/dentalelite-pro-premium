import type { Metadata } from "next";
import { PageHeader } from "@/components/shared/page-header";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Politique de confidentialité",
  description: "Comment nous collectons, utilisons et protégeons vos données personnelles.",
  path: "/politique-de-confidentialite",
});

const sections = [
  {
    title: "Données collectées",
    body: "Nom, e-mail, téléphone et message lorsque vous utilisez notre formulaire de contact ; e-mail seul pour l'inscription à la newsletter. Aucune donnée de santé n'est collectée via ce site : celles-ci sont recueillies exclusivement en cabinet, dans votre dossier patient.",
  },
  {
    title: "Cookies utilisés",
    body: "Cookies techniques nécessaires au fonctionnement du site (préférence de thème, consentement cookies) et, si vous l'acceptez via le bandeau, cookies de mesure d'audience (Google Analytics) et de suivi publicitaire (Meta Pixel).",
  },
  {
    title: "Partage des données",
    body: "Vos données ne sont jamais revendues. Elles peuvent être transmises à nos sous-traitants techniques (hébergement, emailing) dans la stricte limite nécessaire à la fourniture du service.",
  },
  {
    title: "Sécurité",
    body: "Des mesures techniques et organisationnelles appropriées sont mises en œuvre pour protéger vos données contre tout accès non autorisé, perte ou divulgation.",
  },
  {
    title: "Contact",
    body: "Pour toute question relative à cette politique ou pour exercer vos droits, contactez-nous via notre page Contact.",
  },
];

export default function PolitiqueConfidentialitePage() {
  return (
    <>
      <PageHeader eyebrow="Informations légales" title="Politique de confidentialité" />
      <Breadcrumbs
        items={[{ label: "Politique de confidentialité", href: "/politique-de-confidentialite" }]}
      />

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
