import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServiceDetailPage } from "@/features/services/service-detail";
import { services, getServiceBySlug } from "@/data/active";
import { buildPageMetadata } from "@/lib/seo";

/**
 * app/(marketing)/soins/[slug]/page.tsx
 * -----------------------------------------------------------------------
 * Route dynamique unique pour toutes les pages de soins. Remplace les 4
 * pages statiques (implantologie, blanchiment, urgence, orthodontie) qui
 * ne fonctionnaient que pour le preset "dentiste" — cette version
 * fonctionne pour n'importe quel preset actif (voir data/active.ts) sans
 * modification.
 * -----------------------------------------------------------------------
 */
export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};

  return buildPageMetadata({
    title: service.name,
    description: service.description,
    path: service.href,
    ogImage: service.image.src,
  });
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  return <ServiceDetailPage slug={slug} />;
}
