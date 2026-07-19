"use client";

import * as React from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, ArrowRight } from "lucide-react";
import type { NavItem } from "@/types";
import { serviceIconMap } from "@/features/services/icon-map";
import type { Service } from "@/features/services/types";
import { cn } from "@/lib/utils";

/**
 * components/layout/mega-menu.tsx
 * -----------------------------------------------------------------------
 * Panneau "Nos Soins" : ouverture au survol (desktop) ou au clic/Entrée
 * (clavier), fermeture à l'Échap, au clic extérieur, ou quand le focus
 * quitte le composant. Pattern "disclosure" volontairement simple plutôt
 * qu'un rôle ARIA menu complet (moins fragile au clavier, tout aussi
 * conforme WCAG pour ce cas d'usage : une liste de liens de navigation).
 * -----------------------------------------------------------------------
 */
export function MegaMenu({ item }: { item: NavItem }) {
  const [open, setOpen] = React.useState(false);
  const containerRef = React.useRef<HTMLDivElement>(null);
  const closeTimeout = React.useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearCloseTimeout = () => {
    if (closeTimeout.current) {
      clearTimeout(closeTimeout.current);
      closeTimeout.current = null;
    }
  };

  const scheduleClose = () => {
    clearCloseTimeout();
    closeTimeout.current = setTimeout(() => setOpen(false), 120);
  };

  React.useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative"
      onMouseEnter={() => {
        clearCloseTimeout();
        setOpen(true);
      }}
      onMouseLeave={scheduleClose}
      onBlur={(event) => {
        if (!containerRef.current?.contains(event.relatedTarget as Node)) {
          setOpen(false);
        }
      }}
    >
      <button
        type="button"
        aria-expanded={open}
        aria-controls="mega-menu-soins"
        onClick={() => setOpen((prev) => !prev)}
        className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-foreground transition-colors hover:text-secondary"
      >
        {item.label}
        <ChevronDown
          className={cn("h-4 w-4 transition-transform duration-200", open && "rotate-180")}
          aria-hidden="true"
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mega-menu-soins"
            role="group"
            aria-label="Nos soins"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="absolute left-1/2 top-full z-50 mt-3 w-[560px] -translate-x-1/2 rounded-2xl border border-border bg-card p-4 shadow-float"
          >
            <div className="grid grid-cols-2 gap-2">
              {item.children?.map((child) => {
                const Icon = serviceIconMap[child.icon as Service["icon"]];
                return (
                  <Link
                    key={child.href}
                    href={child.href}
                    className="group flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-muted"
                  >
                    <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-secondary/10 text-secondary transition-colors group-hover:bg-secondary group-hover:text-secondary-foreground">
                      {Icon ? <Icon className="h-4 w-4" aria-hidden="true" /> : null}
                    </span>
                    <span>
                      <span className="block text-sm font-semibold text-foreground">
                        {child.label}
                      </span>
                      <span className="mt-0.5 block text-xs text-muted-foreground">
                        {child.description}
                      </span>
                    </span>
                  </Link>
                );
              })}
            </div>
            <Link
              href="/soins"
              className="mt-3 flex items-center justify-between rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.01]"
            >
              Voir tous nos soins
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
