"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { Cookie } from "lucide-react";

const CONSENT_KEY = "dentalelite-cookie-consent";
type ConsentValue = "accepted" | "declined";

/**
 * components/shared/cookie-banner.tsx
 * -----------------------------------------------------------------------
 * Bandeau de consentement cookies (RGPD). Le choix est stocké en
 * localStorage (uniquement une préférence UI, aucune donnée personnelle).
 * Tant qu'aucun consentement "accepted" n'est enregistré, Google
 * Analytics / GTM / Meta Pixel (voir app/layout.tsx) ne doivent pas être
 * chargés — à toi de conditionner leur injection sur cette valeur si tu
 * actives ces intégrations.
 * -----------------------------------------------------------------------
 */
export function CookieBanner() {
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const stored = window.localStorage.getItem(CONSENT_KEY);
    // eslint-disable-next-line react-hooks/set-state-in-effect -- lecture d'un système externe (localStorage) au montage, pas de synchronisation d'état React
    if (!stored) setVisible(true);
  }, []);

  function setConsent(value: ConsentValue) {
    window.localStorage.setItem(CONSENT_KEY, value);
    setVisible(false);
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          role="dialog"
          aria-label="Consentement aux cookies"
          className="glass fixed inset-x-4 bottom-4 z-50 rounded-2xl p-5 shadow-float sm:inset-x-auto sm:left-4 sm:max-w-md"
        >
          <div className="flex items-start gap-3">
            <Cookie className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
            <div className="text-sm text-foreground">
              <p>
                Nous utilisons des cookies pour améliorer votre expérience et mesurer
                notre audience. Consultez notre{" "}
                <Link href="/politique-de-confidentialite" className="underline hover:text-secondary">
                  politique de confidentialité
                </Link>
                .
              </p>
              <div className="mt-4 flex gap-2">
                <button
                  type="button"
                  onClick={() => setConsent("accepted")}
                  className="rounded-md bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground"
                >
                  Accepter
                </button>
                <button
                  type="button"
                  onClick={() => setConsent("declined")}
                  className="rounded-md border border-border px-4 py-2 text-xs font-semibold text-foreground"
                >
                  Refuser
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
