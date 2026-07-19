"use client";

import * as React from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { X, Phone, ChevronRight } from "lucide-react";
import { mainNav, utilityNav } from "@/data/navigation";
import { siteConfig } from "@/config/site";

/**
 * components/layout/mobile-nav.tsx
 * -----------------------------------------------------------------------
 * Drawer plein écran pour mobile/tablette. Verrouille le scroll du body
 * pendant l'ouverture, se ferme à l'Échap, au clic sur le fond, ou à la
 * sélection d'un lien. Les sous-menus ("Nos Soins") sont présentés à plat
 * (pas de mega menu imbriqué) pour rester utilisable au doigt.
 * -----------------------------------------------------------------------
 */
export function MobileNav({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  React.useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
    }
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label="Menu de navigation"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 bg-background lg:hidden"
        >
          <div className="flex h-16 items-center justify-between border-b border-border px-6">
            <span className="font-display text-lg font-semibold text-primary">
              {siteConfig.shortName}
            </span>
            <button
              type="button"
              onClick={onClose}
              aria-label="Fermer le menu"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>

          <nav aria-label="Navigation mobile" className="flex flex-col gap-1 px-6 py-6">
            {mainNav.map((item) => (
              <div key={item.href}>
                <Link
                  href={item.href}
                  onClick={onClose}
                  className="flex items-center justify-between rounded-lg px-2 py-3 text-base font-medium text-foreground"
                >
                  {item.label}
                  <ChevronRight className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
                </Link>
                {item.children && (
                  <div className="ml-3 flex flex-col border-l border-border pl-3">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={onClose}
                        className="rounded-lg px-2 py-2 text-sm text-muted-foreground hover:text-foreground"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <div className="my-4 h-px bg-border" />

            {utilityNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={onClose}
                className="rounded-lg px-2 py-3 text-base font-medium text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="mt-auto flex flex-col gap-3 border-t border-border px-6 py-6">
            <a
              href={`tel:${siteConfig.contact.phone}`}
              className="flex items-center justify-center gap-2 rounded-md border border-border px-4 py-3 text-sm font-semibold text-foreground"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              {siteConfig.contact.phoneDisplay}
            </a>
            {siteConfig.integrations.doctolibUrl && (
              <a
                href={siteConfig.integrations.doctolibUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={onClose}
                className="rounded-md bg-primary px-4 py-3 text-center text-sm font-semibold text-primary-foreground"
              >
                Prendre rendez-vous
              </a>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
