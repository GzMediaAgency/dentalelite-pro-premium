import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

/**
 * lib/seo.ts
 * Construit un objet Metadata (Next.js Metadata API) cohérent pour chaque
 * page : title, description, canonical, Open Graph, Twitter Card. Toutes
 * les pages du site l'utilisent plutôt que de dupliquer ces champs.
 */
export function buildPageMetadata({
  title,
  description,
  path,
  ogImage,
  type = "website",
  publishedTime,
  author,
}: {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
  /** "article" pour les pages de blog — active les métadonnées OG article (auteur, date) */
  type?: "website" | "article";
  publishedTime?: string;
  author?: string;
}): Metadata {
  const url = `${siteConfig.seo.siteUrl}${path}`;
  const image = ogImage ?? siteConfig.seo.ogImage;

  return {
    title,
    description,
    keywords: siteConfig.seo.keywords,
    alternates: { canonical: url },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    openGraph:
      type === "article"
        ? {
            title,
            description,
            url,
            siteName: siteConfig.name,
            locale: siteConfig.seo.locale,
            type: "article",
            publishedTime,
            authors: author ? [author] : undefined,
            images: [{ url: image }],
          }
        : {
            title,
            description,
            url,
            siteName: siteConfig.name,
            locale: siteConfig.seo.locale,
            type: "website",
            images: [{ url: image }],
          },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      site: siteConfig.seo.twitterHandle ?? undefined,
    },
  };
}
