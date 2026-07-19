import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { JsonLd } from "@/components/shared/json-ld";
import { buildBreadcrumbSchema } from "@/lib/schema";

export interface BreadcrumbEntry {
  label: string;
  href: string;
}

/**
 * components/shared/breadcrumbs.tsx
 * Fil d'Ariane visuel + injection du schema BreadcrumbList correspondant
 * (bon pour le SEO, améliore l'affichage dans les résultats Google).
 */
export function Breadcrumbs({ items }: { items: BreadcrumbEntry[] }) {
  const allItems = [{ label: "Accueil", href: "/" }, ...items];

  return (
    <nav aria-label="Fil d'Ariane" className="border-b border-border bg-background">
      <JsonLd data={buildBreadcrumbSchema(allItems)} />
      <ol className="mx-auto flex max-w-7xl flex-wrap items-center gap-1 px-6 py-3 text-xs text-muted-foreground">
        {allItems.map((item, index) => {
          const isLast = index === allItems.length - 1;
          return (
            <li key={item.href} className="flex items-center gap-1">
              {index > 0 && <ChevronRight className="h-3 w-3" aria-hidden="true" />}
              {isLast ? (
                <span aria-current="page" className="font-medium text-foreground">
                  {item.label}
                </span>
              ) : (
                <Link href={item.href} className="hover:text-secondary">
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
