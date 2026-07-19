import { siteConfig } from "@/config/site";
import { MessageCircle } from "lucide-react";

/**
 * components/shared/floating-whatsapp.tsx
 * Bouton flottant WhatsApp, visible sur toutes les pages si un numéro est
 * configuré dans config/site.ts.
 */
export function FloatingWhatsapp() {
  if (!siteConfig.integrations.whatsappNumber) return null;

  return (
    <a
      href={`https://wa.me/${siteConfig.integrations.whatsappNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Nous contacter sur WhatsApp"
      className="fixed bottom-6 left-6 z-40 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-float transition-transform hover:scale-105"
    >
      <MessageCircle className="h-5 w-5" aria-hidden="true" />
    </a>
  );
}
