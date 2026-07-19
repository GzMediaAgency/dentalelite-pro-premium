"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AlertTriangle, RotateCw } from "lucide-react";

/**
 * app/error.tsx
 * Error boundary de l'App Router — capte les erreurs runtime des Server et
 * Client Components sous ce layout. Doit être un Client Component.
 */
export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="flex flex-1 items-center justify-center bg-background px-6 py-24">
      <div className="mx-auto max-w-md text-center">
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-destructive/10 text-destructive">
          <AlertTriangle className="h-6 w-6" aria-hidden="true" />
        </span>
        <p className="mt-4 font-display text-5xl font-semibold text-primary">500</p>
        <h1 className="mt-2 text-display-sm text-primary">Une erreur est survenue</h1>
        <p className="mt-3 text-muted-foreground">
          Nos équipes techniques ont été notifiées. Vous pouvez réessayer, ou revenir à
          l&apos;accueil.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <button
            type="button"
            onClick={reset}
            className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-soft"
          >
            <RotateCw className="h-4 w-4" aria-hidden="true" />
            Réessayer
          </button>
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-md border border-border px-6 py-3 text-sm font-semibold text-foreground hover:bg-muted"
          >
            Retour à l&apos;accueil
          </Link>
        </div>
      </div>
    </section>
  );
}
