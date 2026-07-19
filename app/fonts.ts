import localFont from "next/font/local";

/**
 * app/fonts.ts
 * ---------------------------------------------------------------------------
 * Polices de marque, auto-hébergées (fichiers variables woff2 dans
 * app/fonts/, sourcés via les paquets npm @fontsource-variable).
 *
 * Pourquoi l'auto-hébergement plutôt que next/font/google :
 * - Zéro requête vers fonts.googleapis.com → meilleur score Lighthouse
 *   Performance & Best Practices, meilleure conformité RGPD (pas d'appel
 *   à un tiers pour charger une police).
 * - `next/font/local` conserve les mêmes bénéfices que next/font/google :
 *   auto-hébergement optimisé, préchargement, `font-display: swap`,
 *   variables CSS, aucun layout shift (CLS).
 *
 * - Playfair Display (variable, axe wght 400–900) : typographie de titres,
 *   utilisée avec retenue pour l'élégance parisienne du template.
 * - Inter (variable, axe wght 100–900) : typographie de corps et d'UI.
 * ---------------------------------------------------------------------------
 */

export const fontDisplay = localFont({
  src: "./fonts/playfair-display-variable.woff2",
  variable: "--font-display",
  display: "swap",
  weight: "400 900",
  style: "normal",
  fallback: ["Georgia", "Cambria", "serif"],
});

export const fontSans = localFont({
  src: "./fonts/inter-variable.woff2",
  variable: "--font-sans",
  display: "swap",
  weight: "100 900",
  style: "normal",
  fallback: [
    "-apple-system",
    "BlinkMacSystemFont",
    "Segoe UI",
    "Helvetica Neue",
    "Arial",
    "sans-serif",
  ],
});
