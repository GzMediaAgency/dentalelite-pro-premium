/**
 * app/loading.tsx
 * UI de chargement affichée par Next.js pendant le streaming d'une route.
 * Barre de progression simple, cohérente avec le token --color-accent.
 */
export default function Loading() {
  return (
    <div className="flex flex-1 items-center justify-center py-32">
      <div className="h-1 w-40 overflow-hidden rounded-full bg-muted">
        <div className="animate-shimmer h-full w-full bg-gradient-to-r from-transparent via-accent to-transparent" />
      </div>
    </div>
  );
}
