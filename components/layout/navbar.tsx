"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, Phone } from "lucide-react";
import { siteConfig } from "@/config/site";
import { mainNav, utilityNav } from "@/data/navigation";
import { useScrolled } from "@/hooks/use-scrolled";
import { MegaMenu } from "@/components/layout/mega-menu";
import { MobileNav } from "@/components/layout/mobile-nav";
import { ThemeToggle } from "@/components/shared/theme-toggle";
import { Magnetic } from "@/components/shared/magnetic";
import { cn } from "@/lib/utils";

/**
 * components/layout/navbar.tsx
 * -----------------------------------------------------------------------
 * Navbar définitive (Étape 4).
 * - Transparente en haut de page, devient opaque + floutée + ombrée dès
 *   que l'utilisateur défile (comportement "Apple-like").
 * - Mega Menu desktop pour "Nos Soins" (composant dédié).
 * - Drawer plein écran sur mobile/tablette.
 * - CTA téléphone + Doctolib toujours visibles sur desktop.
 * - Bascule dark mode intégrée.
 * -----------------------------------------------------------------------
 */
export function Navbar() {
  const scrolled = useScrolled(24);
  const [mobileOpen, setMobileOpen] = React.useState(false);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full transition-all duration-300",
        scrolled
          ? "border-b border-border bg-background/85 shadow-soft backdrop-blur-lg"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <nav
        aria-label="Navigation principale"
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6"
      >
        <Link
          href="/"
          className="font-display text-xl font-semibold text-primary"
          aria-label={`${siteConfig.name} — Accueil`}
        >
          {siteConfig.shortName}
        </Link>

        {/* Navigation desktop */}
        <div className="hidden items-center gap-1 lg:flex">
          {mainNav.map((item) =>
            item.children ? (
              <MegaMenu key={item.href} item={item} />
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-md px-3 py-2 text-sm font-medium text-foreground transition-colors hover:text-secondary"
              >
                {item.label}
              </Link>
            ),
          )}
          {utilityNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-foreground transition-colors hover:text-secondary"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Actions desktop */}
        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={`tel:${siteConfig.contact.phone}`}
            className="flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-secondary"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            {siteConfig.contact.phoneDisplay}
          </a>
          <ThemeToggle />
          {siteConfig.integrations.doctolibUrl && (
            <Magnetic strength={0.25}>
              <a
                href={siteConfig.integrations.doctolibUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-soft transition-transform hover:scale-[1.02]"
              >
                Prendre rendez-vous
              </a>
            </Magnetic>
          )}
        </div>

        {/* Actions mobile */}
        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            aria-label="Ouvrir le menu"
            aria-expanded={mobileOpen}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border"
          >
            <Menu className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </nav>

      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  );
}
