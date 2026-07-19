import Link from "next/link";
import { Home, Search } from "lucide-react";

/**
 * app/not-found.tsx
 * Page 404 personnalisée (convention App Router — utilisée automatiquement
 * quand `notFound()` est appelé ou qu'aucune route ne correspond).
 */
export default function NotFound() {
  return (
    <section className="flex flex-1 items-center justify-center bg-background px-6 py-24">
      <div className="mx-auto max-w-md text-center">
        <p className="font-display text-7xl font-semibold text-primary">404</p>
        <h1 className="mt-4 text-display-sm text-primary">Page introuvable</h1>
        <p className="mt-3 text-muted-foreground">
          La page que vous cherchez n&apos;existe pas ou a été déplacée.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-soft"
          >
            <Home className="h-4 w-4" aria-hidden="true" />
            Retour à l&apos;accueil
          </Link>
          <Link
            href="/soins"
            className="inline-flex items-center gap-2 rounded-md border border-border px-6 py-3 text-sm font-semibold text-foreground hover:bg-muted"
          >
            <Search className="h-4 w-4" aria-hidden="true" />
            Voir nos soins
          </Link>
        </div>
      </div>
    </section>
  );
}
