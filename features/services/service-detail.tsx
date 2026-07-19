import Image from "next/image";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import { PageHeader } from "@/components/shared/page-header";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { serviceIconMap } from "@/features/services/icon-map";
import { getServiceBySlug, services } from "@/data/active";
import { siteConfig } from "@/config/site";

/**
 * features/services/service-detail.tsx
 * Template unique pour les 4 pages de soins statiques (/soins/implantologie,
 * /blanchiment, /urgence, /orthodontie) — garantit une structure et un
 * balisage SEO cohérents sans dupliquer le JSX quatre fois.
 */
export function ServiceDetailPage({ slug }: { slug: string }) {
  const service = getServiceBySlug(slug);
  if (!service) return null;

  const Icon = serviceIconMap[service.icon];
  const otherServices = services.filter((s) => s.slug !== slug);

  return (
    <>
      <PageHeader
        eyebrow="Nos soins"
        title={service.name}
        description={service.description}
        backgroundImage={service.image}
      />
      <Breadcrumbs
        items={[
          { label: "Nos soins", href: "/soins" },
          { label: service.name, href: service.href },
        ]}
      />

      <section className="bg-background py-section-y">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 lg:grid-cols-2 lg:items-center">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-premium">
            <Image
              src={service.image.src}
              alt={service.image.alt}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div>
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10 text-secondary">
              {Icon ? <Icon className="h-5 w-5" aria-hidden="true" /> : null}
            </span>
            <h2 className="mt-4 text-display-lg text-primary">{service.name}</h2>
            <p className="mt-4 text-muted-foreground">{service.description}</p>

            <ul className="mt-6 space-y-3">
              {service.highlights.map((highlight) => (
                <li key={highlight} className="flex items-start gap-2 text-sm text-foreground">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-secondary" aria-hidden="true" />
                  {highlight}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap gap-4">
              {siteConfig.integrations.doctolibUrl && (
                <a
                  href={siteConfig.integrations.doctolibUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-soft transition-transform hover:scale-[1.02]"
                >
                  Prendre rendez-vous
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
              )}
              <Link
                href="/tarifs"
                className="inline-flex items-center gap-2 rounded-md border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
              >
                Voir les tarifs
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-muted/40 py-section-y">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-display-sm text-primary">Découvrir aussi</h2>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {otherServices.map((other) => (
              <Link
                key={other.slug}
                href={other.href}
                className="group rounded-xl border border-border bg-card p-6 shadow-soft transition-shadow hover:shadow-premium"
              >
                <h3 className="font-display text-base font-semibold text-primary">
                  {other.name}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {other.shortDescription}
                </p>
                <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-secondary">
                  En savoir plus
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
