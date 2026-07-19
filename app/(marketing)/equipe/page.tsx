import type { Metadata } from "next";
import { PageHeader } from "@/components/shared/page-header";
import { Breadcrumbs } from "@/components/shared/breadcrumbs";
import { DoctorCard } from "@/features/team/doctor-card";
import { team } from "@/data/active";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "L'Équipe",
  description:
    "Rencontrez l'équipe de chirurgiens-dentistes du cabinet : diplômes, spécialités et approche de chaque praticien.",
  path: "/equipe",
});

export default function EquipePage() {
  return (
    <>
      <PageHeader
        eyebrow="L'Équipe"
        title="Des praticiens diplômés, à votre écoute"
        description="Chaque membre de l'équipe s'est spécialisé pour vous offrir une prise en charge experte, adaptée à votre situation."
      />
      <Breadcrumbs items={[{ label: "L'Équipe", href: "/equipe" }]} />

      <section className="bg-background py-section-y">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member) => (
              <DoctorCard key={member.slug} member={member} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
