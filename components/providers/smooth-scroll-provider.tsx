"use client";

import * as React from "react";
import { useLenis } from "@/hooks/use-lenis";

/**
 * components/providers/smooth-scroll-provider.tsx
 * Active le smooth scroll Lenis pour toute l'application. Composant client
 * séparé (plutôt que d'appeler useLenis directement dans le layout) pour
 * garder app/layout.tsx en Server Component.
 */
export function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  useLenis();
  return <>{children}</>;
}
