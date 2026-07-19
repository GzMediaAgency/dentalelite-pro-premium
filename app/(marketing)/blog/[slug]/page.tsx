import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { CalendarDays, Clock, User } from "lucide-react";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { JsonLd } from "@/components/shared/json-ld";
import { buildArticleSchema } from "@/lib/schema";
import { blogArticles, getArticleBySlug } from "@/data/active";
import { buildPageMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return blogArticles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};

  return buildPageMetadata({
    title: article.title,
    description: article.excerpt,
    path: `/blog/${article.slug}`,
    ogImage: article.coverImage.src,
    type: "article",
    publishedTime: new Date(article.publishedAt).toISOString(),
    author: article.author,
  });
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  return (
    <>
      <JsonLd data={buildArticleSchema(article)} />
      <Breadcrumbs
        items={[
          { label: "Blog", href: "/blog" },
          { label: article.title, href: `/blog/${article.slug}` },
        ]}
      />

      <article className="bg-background py-section-y">
        <div className="mx-auto max-w-3xl px-6">
          <span className="rounded-full bg-secondary/10 px-3 py-1 text-xs font-medium text-secondary">
            {article.category}
          </span>
          <h1 className="mt-4 text-display-lg text-primary">{article.title}</h1>

          <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <User className="h-4 w-4" aria-hidden="true" />
              {article.author}
            </span>
            <span className="flex items-center gap-1.5">
              <CalendarDays className="h-4 w-4" aria-hidden="true" />
              {new Date(article.publishedAt).toLocaleDateString("fr-FR", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-4 w-4" aria-hidden="true" />
              {article.readingTime} de lecture
            </span>
          </div>

          <div className="relative mt-8 aspect-[16/9] overflow-hidden rounded-2xl shadow-premium">
            <Image
              src={article.coverImage.src}
              alt={article.coverImage.alt}
              fill
              sizes="(min-width: 1024px) 768px, 100vw"
              className="object-cover"
              priority
            />
          </div>

          <div className="mt-10 max-w-none">
            {article.content.map((paragraph, index) => (
              <p key={index} className="mb-5 text-base leading-relaxed text-foreground/90">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </article>
    </>
  );
}
