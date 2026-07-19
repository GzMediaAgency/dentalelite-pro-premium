"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { ThemeProviderProps } from "next-themes";

/**
 * components/shared/theme-provider.tsx
 * Enveloppe next-themes en composant client. Stratégie par classe (`.dark`
 * sur <html>), alignée sur le custom variant défini dans app/globals.css
 * (`@custom-variant dark (&:is(.dark *))`).
 */
export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
