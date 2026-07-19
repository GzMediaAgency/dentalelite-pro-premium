/**
 * components/shared/skip-to-content.tsx
 * Lien "Aller au contenu" — invisible sauf au focus clavier. Requis pour
 * l'accessibilité WCAG AA (permet de contourner la navigation répétitive).
 */
export function SkipToContent() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-primary focus:px-4 focus:py-3 focus:text-sm focus:font-semibold focus:text-primary-foreground focus:shadow-premium"
    >
      Aller au contenu principal
    </a>
  );
}
