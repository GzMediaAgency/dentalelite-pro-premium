"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Reveal } from "@/components/shared/reveal";
import { getCategoryIcon } from "@/features/faq/category-icon";
import { cn } from "@/lib/utils";

export interface AccordionItemData {
  id: string;
  question: string;
  answer: string;
  /** Nom de catégorie (résolu en icône via getCategoryIcon, en interne — voir la note ci-dessous) */
  icon?: string;
}

/**
 * components/shared/accordion.tsx (Sprint 8)
 * -----------------------------------------------------------------------
 * Accordéon accessible et premium :
 *  - icône optionnelle par item, passée en `icon` sous forme de **chaîne**
 *    (nom de catégorie) plutôt qu'un composant — Accordion étant un Client
 *    Component, il ne peut pas recevoir de référence de composant venant
 *    d'un Server Component parent (erreur de sérialisation React). La
 *    résolution en vraie icône Lucide se fait ici, côté client, via
 *    getCategoryIcon() ;
 *  - la ligne ouverte se distingue par une teinte de fond, pas seulement
 *    par la rotation du chevron — plus lisible en un coup d'œil sur une
 *    longue liste (page /faq complète) ;
 *  - bordure en dégradé de marque, cohérente avec le reste du site ;
 *  - apparition en cascade des items au scroll (Reveal, Sprint 4).
 * -----------------------------------------------------------------------
 */
export function Accordion({
  items,
  allowMultiple = false,
  animateIn = true,
}: {
  items: AccordionItemData[];
  allowMultiple?: boolean;
  animateIn?: boolean;
}) {
  const [openIds, setOpenIds] = React.useState<Set<string>>(new Set());

  function toggle(id: string) {
    setOpenIds((prev) => {
      const next = new Set(allowMultiple ? prev : []);
      if (prev.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  }

  return (
    <div className="border-gradient divide-y divide-border overflow-hidden rounded-xl shadow-tinted">
      {items.map((item, index) => {
        const isOpen = openIds.has(item.id);
        const Icon = item.icon ? getCategoryIcon(item.icon) : undefined;
        const row = (
          <div key={item.id} className={cn("transition-colors", isOpen && "bg-muted/40")}>
            <h3>
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={`accordion-panel-${item.id}`}
                id={`accordion-trigger-${item.id}`}
                onClick={() => toggle(item.id)}
                className="flex w-full items-center gap-4 px-6 py-5 text-left text-sm font-semibold text-foreground"
              >
                {Icon && (
                  <span
                    className={cn(
                      "inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-colors",
                      isOpen
                        ? "bg-brand-gradient text-primary-foreground"
                        : "bg-secondary/10 text-secondary",
                    )}
                  >
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </span>
                )}
                <span className="flex-1">{item.question}</span>
                <ChevronDown
                  className={cn(
                    "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-300",
                    isOpen && "rotate-180 text-secondary",
                  )}
                  aria-hidden="true"
                />
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={`accordion-panel-${item.id}`}
                  role="region"
                  aria-labelledby={`accordion-trigger-${item.id}`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <p
                    className={cn(
                      "px-6 pb-5 text-sm text-muted-foreground",
                      Icon && "pl-[4.75rem]",
                    )}
                  >
                    {item.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );

        return animateIn ? (
          <Reveal key={item.id} delay={Math.min(index * 0.05, 0.3)}>
            {row}
          </Reveal>
        ) : (
          row
        );
      })}
    </div>
  );
}
