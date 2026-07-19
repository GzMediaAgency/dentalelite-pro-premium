import type { Metadata } from "next";
import { PageHeader } from "@/components/shared/page-header";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { ContactSection } from "@/features/contact/contact-section";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Contact",
  description: "Contactez le cabinet par téléphone, e-mail, WhatsApp ou via notre formulaire en ligne.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Une question ? Parlons-en."
        description="Notre équipe vous répond sous 24h ouvrées."
      />
      <Breadcrumbs items={[{ label: "Contact", href: "/contact" }]} />
      <ContactSection withHeading={false} />
    </>
  );
}
