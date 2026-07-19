import type { Metadata } from "next";
import { PageHeader } from "@/components/shared/page-header";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { ServicesSection } from "@/features/services/services-section";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Tous nos soins",
  description:
    "Implantologie, blanchiment, orthodontie, urgences : découvrez l'ensemble des soins proposés par le cabinet.",
  path: "/soins",
});

export default function SoinsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Nos soins"
        title="Une prise en charge complète, à chaque étape de votre sourire"
        description="De la prévention aux traitements les plus avancés, découvrez l'ensemble de nos soins."
      />
      <Breadcrumbs items={[{ label: "Nos soins", href: "/soins" }]} />
      <ServicesSection />
    </>
  );
}
