"use client";

import * as React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

/**
 * components/providers/query-provider.tsx
 * Fournit React Query à toute l'application. Utile dès maintenant pour tout
 * fetch client (avis Google, disponibilités Doctolib) et plus tard pour le
 * branchement CMS (Sanity/Contentful/Strapi/Payload).
 *
 * Le QueryClient est créé une seule fois via useState (et non au niveau du
 * module) pour éviter le partage de cache entre requêtes utilisateurs côté
 * serveur — bonne pratique recommandée avec l'App Router.
 */
export function QueryProvider({ children }: { children: React.ReactNode }) {
  const [queryClient] = React.useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 60 * 1000,
            refetchOnWindowFocus: false,
            retry: 1,
          },
        },
      }),
  );

  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}
