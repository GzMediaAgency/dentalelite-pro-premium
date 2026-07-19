import { Phone, Mail, MapPin, Clock, MessageCircle, CalendarCheck } from "lucide-react";
import { siteConfig } from "@/config/site";
import { Magnetic } from "@/components/shared/magnetic";

/**
 * features/contact/contact-info.tsx (Sprint 9)
 * Carte de coordonnées premium : bordure en dégradé, badges d'icônes
 * colorés au lieu d'icônes nues, CTA Doctolib/WhatsApp magnétiques.
 */
export function ContactInfo() {
  const { contact, openingHours, integrations } = siteConfig;

  return (
    <div className="border-gradient rounded-xl p-6 shadow-tinted sm:p-8">
      <h3 className="font-display text-lg font-semibold text-primary">Nous contacter</h3>

      <ul className="mt-6 space-y-4 text-sm">
        <li className="flex items-center gap-3">
          <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-secondary">
            <Phone className="h-4 w-4" aria-hidden="true" />
          </span>
          <a href={`tel:${contact.phone}`} className="hover:text-secondary">
            {contact.phoneDisplay}
          </a>
        </li>
        <li className="flex items-center gap-3">
          <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-secondary">
            <Mail className="h-4 w-4" aria-hidden="true" />
          </span>
          <a href={`mailto:${contact.email}`} className="hover:text-secondary">
            {contact.email}
          </a>
        </li>
        <li className="flex items-start gap-3">
          <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-secondary">
            <MapPin className="h-4 w-4" aria-hidden="true" />
          </span>
          <span className="pt-1.5">
            {contact.address.street}
            <br />
            {contact.address.postalCode} {contact.address.city}, {contact.address.country}
          </span>
        </li>
      </ul>

      <div className="mt-6 border-t border-border pt-6">
        <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-foreground">
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-accent/15 text-accent">
            <Clock className="h-3.5 w-3.5" aria-hidden="true" />
          </span>
          Horaires d&apos;ouverture
        </div>
        <ul className="space-y-1 text-sm text-muted-foreground">
          {openingHours.map((entry) => (
            <li key={entry.day} className="flex justify-between gap-4">
              <span>{entry.day}</span>
              <span>
                {entry.open && entry.close ? `${entry.open} – ${entry.close}` : "Fermé"}
                {entry.note && (
                  <span className="ml-1 text-xs text-muted-foreground/80">
                    ({entry.note})
                  </span>
                )}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-6 flex flex-col gap-3 border-t border-border pt-6">
        {integrations.doctolibUrl && (
          <Magnetic strength={0.2} className="will-change-transform">
            <a
              href={integrations.doctolibUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-md bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground shadow-soft transition-transform hover:scale-[1.01]"
            >
              <CalendarCheck className="h-4 w-4" aria-hidden="true" />
              Prendre rendez-vous sur Doctolib
            </a>
          </Magnetic>
        )}
        {integrations.whatsappNumber && (
          <Magnetic strength={0.2} className="will-change-transform">
            <a
              href={`https://wa.me/${integrations.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-md border border-border px-4 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              Nous écrire sur WhatsApp
            </a>
          </Magnetic>
        )}
      </div>
    </div>
  );
}

/**
 * features/contact/contact-map.tsx (co-localisé ici pour la simplicité)
 * Carte Google Maps intégrée en iframe, cadrage premium cohérent avec le
 * reste du site.
 */
export function ContactMap() {
  return (
    <div className="border-gradient h-full min-h-[320px] overflow-hidden rounded-xl shadow-tinted">
      <iframe
        src={siteConfig.integrations.googleMapsEmbedUrl}
        title={`Localisation de ${siteConfig.name} sur Google Maps`}
        width="100%"
        height="100%"
        style={{ border: 0, minHeight: 320 }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
