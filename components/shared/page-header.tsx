import Image from "next/image";
import type { ImageAsset } from "@/types";

/**
 * components/shared/page-header.tsx
 * Bandeau d'en-tête réutilisé par toutes les pages internes (Cabinet,
 * Équipe, Soins, Avis, FAQ, Contact, Blog, pages légales...).
 */
export function PageHeader({
  eyebrow,
  title,
  description,
  backgroundImage,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  backgroundImage?: ImageAsset;
}) {
  return (
    <section className="relative overflow-hidden bg-primary py-20 text-primary-foreground sm:py-28">
      {backgroundImage && (
        <>
          <Image
            src={backgroundImage.src}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/85 to-primary/60" />
        </>
      )}
      <div className="relative mx-auto max-w-4xl px-6 text-center">
        {eyebrow && (
          <p className="text-eyebrow font-semibold uppercase tracking-widest text-primary-foreground/70">
            {eyebrow}
          </p>
        )}
        <h1 className="mt-3 text-display-lg sm:text-display-xl">{title}</h1>
        {description && (
          <p className="mx-auto mt-5 max-w-2xl text-primary-foreground/85">{description}</p>
        )}
      </div>
    </section>
  );
}
