import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "sonner";
import { siteConfig } from "@/config/site";
import { fontDisplay, fontSans } from "@/app/fonts";
import { ThemeProvider } from "@/components/shared/theme-provider";
import { QueryProvider } from "@/components/providers/query-provider";
import { SmoothScrollProvider } from "@/components/providers/smooth-scroll-provider";
import { ScrollProgressBar } from "@/components/shared/scroll-progress-bar";
import { SkipToContent } from "@/components/shared/skip-to-content";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { CookieBanner } from "@/components/shared/cookie-banner";
import { BackToTop } from "@/components/shared/back-to-top";
import { FloatingWhatsapp } from "@/components/shared/floating-whatsapp";
import { CustomCursor } from "@/components/shared/custom-cursor";
import { JsonLd } from "@/components/shared/json-ld";
import { buildDentistSchema } from "@/lib/schema";
import { buildPageMetadata } from "@/lib/seo";

/**
 * app/layout.tsx
 * -----------------------------------------------------------------------
 * Layout racine définitif (Étape 3 - Layout principal).
 *
 * Ordre des providers (de l'extérieur vers l'intérieur) :
 *  1. ThemeProvider      → dark mode disponible partout, y compris Navbar
 *  2. QueryProvider       → cache de données (avis, futur CMS)
 *  3. SmoothScrollProvider → Lenis, respecte prefers-reduced-motion
 *
 * Structure sémantique : skip-link -> header (Navbar) -> main#main-content
 * -> footer, + barre de progression de scroll et notifications (Sonner)
 * en overlay global.
 *
 * Ce fichier ne devrait plus être modifié dans les étapes suivantes : le
 * contenu de <Navbar /> et <Footer /> sera enrichi "de l'intérieur" aux
 * Étapes 4 et 10, sans toucher à cette coquille.
 * -----------------------------------------------------------------------
 */
export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.seo.siteUrl),
  ...buildPageMetadata({
    title: siteConfig.seo.defaultTitle,
    description: siteConfig.seo.defaultDescription,
    path: "/",
  }),
  // Le titre doit rester un objet {default, template} pour que les pages
  // enfants héritent du gabarit "%s | DentalElite Pro" — buildPageMetadata
  // retourne une simple chaîne, donc on le réapplique après le spread.
  title: {
    default: siteConfig.seo.defaultTitle,
    template: siteConfig.seo.titleTemplate,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      suppressHydrationWarning
      className={`${fontSans.variable} ${fontDisplay.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background text-foreground">
        <JsonLd data={buildDentistSchema()} />
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <QueryProvider>
            <SmoothScrollProvider>
              <SkipToContent />
              <CustomCursor />
              <ScrollProgressBar />
              <Navbar />
              <main id="main-content" className="flex flex-1 flex-col">
                {children}
              </main>
              <Footer />
              <CookieBanner />
              <BackToTop />
              <FloatingWhatsapp />
              <Toaster
                position="bottom-right"
                richColors
                closeButton
                toastOptions={{
                  style: {
                    borderRadius: "var(--radius-lg)",
                  },
                }}
              />
            </SmoothScrollProvider>
          </QueryProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
