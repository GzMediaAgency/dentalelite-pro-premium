import type { Metadata } from "next";
import Image from "next/image";
import { ShieldCheck, Microscope, Sparkle } from "lucide-react";
import { PageHeader } from "@/components/shared/page-header";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { siteConfig } from "@/config/site";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Le Cabinet",
  description:
    "Découvrez le cabinet DentalElite Pro à Paris : un cadre lumineux, des équipements de pointe et une équipe dédiée à votre confort.",
  path: "/cabinet",
});

const highlights = [
  {
    icon: ShieldCheck,
    title: "Normes d'hygiène strictes",
    description: "Stérilisation systématique du matériel, protocoles conformes aux recommandations les plus récentes.",
  },
  {
    icon: Microscope,
    title: "Plateau technique moderne",
    description: "Imagerie 3D, scanner intra-oral, matériel numérique pour un diagnostic précis dès la première visite.",
  },
  {
    icon: Sparkle,
    title: "Un cadre pensé pour vous",
    description: "Salles lumineuses, matériaux nobles, attention portée à chaque détail pour réduire l'appréhension du soin.",
  },
];

export default function CabinetPage() {
  return (
    <>
      <PageHeader
        eyebrow="Le Cabinet"
        title={`Un cabinet pensé pour votre confort, au cœur de ${siteConfig.contact.address.city}`}
        description="Découvrez un lieu où l'excellence médicale rencontre une expérience patient repensée de bout en bout."
        backgroundImage={{
          src: "https://images.unsplash.com/photo-1704455306251-b4634215d98f?auto=format&fit=crop&w=2000&q=80",
          alt: "Intérieur moderne du cabinet dentaire",
        }}
      />
      <Breadcrumbs items={[{ label: "Le Cabinet", href: "/cabinet" }]} />

      <section className="bg-background py-section-y">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 lg:grid-cols-2 lg:items-center">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-premium">
            <Image
              src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=1200&q=80"
              alt="Salle de soins équipée"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-eyebrow font-semibold uppercase tracking-widest text-secondary">
              Notre philosophie
            </p>
            <h2 className="mt-3 text-display-lg text-primary">
              Une médecine dentaire exigeante, une expérience apaisée
            </h2>
            <p className="mt-4 text-muted-foreground">
              {siteConfig.description} Chaque détail — de la prise de rendez-vous en
              ligne à l&apos;accueil en salle d&apos;attente — est pensé pour réduire
              l&apos;appréhension et vous offrir une prise en charge à la hauteur de vos
              attentes.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-muted/40 py-section-y">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {highlights.map((item) => (
              <div key={item.title} className="rounded-xl border border-border bg-card p-6 shadow-soft">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-secondary/10 text-secondary">
                  <item.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold text-primary">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
