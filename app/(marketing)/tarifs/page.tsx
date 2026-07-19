import type { Metadata } from "next";
import { PageHeader } from "@/components/shared/page-header";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { pricingCategories } from "@/data/active";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Tarifs",
  description: "Tarifs indicatifs de nos soins — un devis personnalisé est systématiquement remis avant tout traitement.",
  path: "/tarifs",
});

export default function TarifsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Tarifs"
        title="Des tarifs transparents, un devis avant chaque soin"
        description="Les montants ci-dessous sont indicatifs. Un devis détaillé vous est systématiquement remis avant toute intervention, sans surprise."
      />
      <Breadcrumbs items={[{ label: "Tarifs", href: "/tarifs" }]} />

      <section className="bg-background py-section-y">
        <div className="mx-auto max-w-4xl space-y-10 px-6">
          {pricingCategories.map((category) => (
            <div key={category.category}>
              <h2 className="text-display-sm text-primary">{category.category}</h2>
              <p className="mt-1 text-sm text-muted-foreground">{category.description}</p>

              <div className="mt-5 divide-y divide-border rounded-xl border border-border bg-card shadow-soft">
                {category.items.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center justify-between gap-4 px-6 py-4"
                  >
                    <div>
                      <p className="text-sm font-medium text-foreground">{item.label}</p>
                      {item.note && (
                        <p className="text-xs text-muted-foreground">{item.note}</p>
                      )}
                    </div>
                    <p className="whitespace-nowrap text-sm font-semibold text-primary">
                      à partir de {item.priceFrom}
                      {item.unit}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}

          <p className="rounded-xl bg-muted/60 p-5 text-sm text-muted-foreground">
            Ces tarifs sont indicatifs et peuvent varier selon la complexité du soin.
            La plupart des actes courants sont pris en charge par l&apos;Assurance
            Maladie ; pour les actes hors nomenclature, un devis détaillé vous est
            toujours remis avant tout engagement.
          </p>
        </div>
      </section>
    </>
  );
}
