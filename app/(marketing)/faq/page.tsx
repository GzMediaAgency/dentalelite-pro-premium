import type { Metadata } from "next";
import { PageHeader } from "@/components/shared/page-header";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { Accordion } from "@/components/shared/accordion";
import { JsonLd } from "@/components/shared/json-ld";
import { buildFaqSchema } from "@/lib/schema";
import { faqItems } from "@/data/active";
import type { FaqItem } from "@/data/presets/shared-types";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Questions fréquentes",
  description: "Toutes les réponses à vos questions sur les rendez-vous, les tarifs, les soins et les urgences.",
  path: "/faq",
});

function groupByCategory(items: FaqItem[]) {
  const groups = new Map<string, FaqItem[]>();
  for (const item of items) {
    const list = groups.get(item.category) ?? [];
    list.push(item);
    groups.set(item.category, list);
  }
  return groups;
}

export default function FaqPage() {
  const groups = groupByCategory(faqItems);

  return (
    <>
      <JsonLd data={buildFaqSchema(faqItems)} />
      <PageHeader
        eyebrow="FAQ"
        title="Toutes les réponses à vos questions"
        description="Vous ne trouvez pas votre réponse ? Contactez-nous directement, nous nous ferons un plaisir de vous aider."
      />
      <Breadcrumbs items={[{ label: "FAQ", href: "/faq" }]} />

      <section className="bg-background py-section-y">
        <div className="mx-auto max-w-3xl space-y-10 px-6">
          {Array.from(groups.entries()).map(([category, items]) => (
            <div key={category}>
              <h2 className="mb-4 text-display-sm text-primary">{category}</h2>
              <Accordion
                items={items.map((item) => ({
                  id: item.id,
                  question: item.question,
                  answer: item.answer,
                  icon: item.category,
                }))}
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
