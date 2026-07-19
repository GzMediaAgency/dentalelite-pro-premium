"use client";

import { useEffect } from "react";

/**
 * app/global-error.tsx
 * Filet de sécurité ultime : capte une erreur dans app/layout.tsx lui-même.
 * Doit fournir son propre <html>/<body> (le layout racine est justement
 * celui qui a crashé) — styles volontairement en ligne pour rester
 * fonctionnel même si le pipeline CSS est en cause.
 */
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html lang="fr">
      <body
        style={{
          display: "flex",
          minHeight: "100vh",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "system-ui, sans-serif",
          backgroundColor: "#F7F9FC",
          color: "#2D3748",
          textAlign: "center",
          padding: "2rem",
        }}
      >
        <div>
          <p style={{ fontSize: "3rem", fontWeight: 700, color: "#0B2545" }}>500</p>
          <h1 style={{ fontSize: "1.25rem", fontWeight: 600, color: "#0B2545" }}>
            Une erreur inattendue est survenue
          </h1>
          <p style={{ marginTop: "0.5rem", color: "#64748b" }}>
            Merci de réessayer dans quelques instants.
          </p>
          <button
            type="button"
            onClick={reset}
            style={{
              marginTop: "1.5rem",
              borderRadius: "0.5rem",
              backgroundColor: "#0B2545",
              color: "#FFFFFF",
              padding: "0.75rem 1.5rem",
              fontSize: "0.875rem",
              fontWeight: 600,
              border: "none",
              cursor: "pointer",
            }}
          >
            Réessayer
          </button>
        </div>
      </body>
    </html>
  );
}
