import { GraduationCap } from "lucide-react";
import type { TeamMember } from "@/data/presets/shared-types";

/**
 * features/team/doctor-card.tsx
 * Carte membre d'équipe. Avatar en dégradé de marque (voir note dans
 * data/team.ts sur l'absence de photo).
 */
export function DoctorCard({ member }: { member: TeamMember }) {
  return (
    <div className="flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-soft">
      <div className="bg-brand-gradient flex h-40 items-center justify-center">
        <span className="font-display text-4xl font-semibold text-primary-foreground">
          {member.initials}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-lg font-semibold text-primary">{member.name}</h3>
        <p className="text-sm font-medium text-secondary">{member.role}</p>
        <p className="mt-3 text-sm text-muted-foreground">{member.bio}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {member.specialties.map((specialty) => (
            <span
              key={specialty}
              className="rounded-full bg-secondary/10 px-3 py-1 text-xs font-medium text-secondary"
            >
              {specialty}
            </span>
          ))}
        </div>

        <div className="mt-4 border-t border-border pt-4">
          <p className="mb-2 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
            <GraduationCap className="h-3.5 w-3.5" aria-hidden="true" />
            Diplômes
          </p>
          <ul className="space-y-1 text-xs text-muted-foreground">
            {member.diplomas.map((diploma) => (
              <li key={diploma}>{diploma}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
