"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

/**
 * components/shared/theme-toggle.tsx
 * Bouton de bascule clair/sombre. Composant temporaire de vérification pour
 * l'Étape 2 (Design System) — sera intégré à la Navbar définitive à
 * l'Étape 4.
 */
export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Évite un mismatch d'hydratation : le thème réel n'est connu que côté client.
  // Pattern documenté par next-themes ; exception volontaire à la règle
  // react-hooks/set-state-in-effect (aucun système externe à synchroniser ici,
  // seulement le passage serveur -> client).
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="h-10 w-10" aria-hidden="true" />;
  }

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Activer le mode clair" : "Activer le mode sombre"}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-foreground shadow-soft transition-colors hover:bg-muted"
    >
      {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  );
}
