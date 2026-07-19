"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { Loader2, Send } from "lucide-react";

/**
 * features/contact/contact-form.tsx
 * -----------------------------------------------------------------------
 * Formulaire de contact validé par Zod. La soumission est simulée
 * (`simulateSubmit`) : aucune route API n'est fournie par ce template
 * (pas d'infrastructure serveur imposée). Pour brancher un envoi réel,
 * remplace `simulateSubmit` par un appel à /api/contact (Resend, SendGrid,
 * ou le webhook de ton choix) — voir CONTACT_FORM_API_KEY dans .env.example.
 * -----------------------------------------------------------------------
 */
const contactSchema = z.object({
  name: z.string().min(2, "Merci d'indiquer votre nom complet."),
  email: z.string().email("Adresse e-mail invalide."),
  phone: z
    .string()
    .optional()
    .refine((val) => !val || /^[0-9+\s.-]{6,20}$/.test(val), {
      message: "Numéro de téléphone invalide.",
    }),
  message: z.string().min(10, "Votre message doit contenir au moins 10 caractères."),
  consent: z.literal(true, {
    message: "Merci d'accepter le traitement de vos données.",
  }),
});

type ContactFormValues = z.infer<typeof contactSchema>;

async function simulateSubmit(values: ContactFormValues): Promise<void> {
  await new Promise((resolve) => setTimeout(resolve, 900));
  console.log("Contact form submission", values);
}

export function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  async function onSubmit(values: ContactFormValues) {
    try {
      await simulateSubmit(values);
      toast.success("Message envoyé — nous revenons vers vous rapidement.");
      reset();
    } catch {
      toast.error("Une erreur est survenue. Merci de réessayer.");
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-foreground">
            Nom complet
          </label>
          <input
            id="name"
            type="text"
            autoComplete="name"
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
            className="w-full rounded-md border border-input bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-secondary"
            {...register("name")}
          />
          {errors.name && (
            <p id="name-error" className="mt-1.5 text-xs text-destructive">
              {errors.name.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-foreground">
            Téléphone (optionnel)
          </label>
          <input
            id="phone"
            type="tel"
            autoComplete="tel"
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? "phone-error" : undefined}
            className="w-full rounded-md border border-input bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-secondary"
            {...register("phone")}
          />
          {errors.phone && (
            <p id="phone-error" className="mt-1.5 text-xs text-destructive">
              {errors.phone.message}
            </p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-foreground">
          E-mail
        </label>
        <input
          id="email"
          type="email"
          autoComplete="email"
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "email-error" : undefined}
          className="w-full rounded-md border border-input bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-secondary"
          {...register("email")}
        />
        {errors.email && (
          <p id="email-error" className="mt-1.5 text-xs text-destructive">
            {errors.email.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-foreground">
          Message
        </label>
        <textarea
          id="message"
          rows={5}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
          className="w-full resize-none rounded-md border border-input bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-secondary"
          {...register("message")}
        />
        {errors.message && (
          <p id="message-error" className="mt-1.5 text-xs text-destructive">
            {errors.message.message}
          </p>
        )}
      </div>

      <div className="flex items-start gap-2">
        <input
          id="consent"
          type="checkbox"
          aria-invalid={Boolean(errors.consent)}
          aria-describedby={errors.consent ? "consent-error" : undefined}
          className="mt-0.5 h-4 w-4 rounded border-input text-secondary focus:ring-ring"
          {...register("consent")}
        />
        <label htmlFor="consent" className="text-xs text-muted-foreground">
          J&apos;accepte que mes données soient utilisées pour traiter ma demande,
          conformément à la{" "}
          <a href="/politique-de-confidentialite" className="underline hover:text-secondary">
            politique de confidentialité
          </a>
          .
        </label>
      </div>
      {errors.consent && (
        <p id="consent-error" className="text-xs text-destructive">
          {errors.consent.message}
        </p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-soft transition-transform hover:scale-[1.01] disabled:opacity-60 sm:w-auto"
      >
        {isSubmitting ? (
          <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
        ) : (
          <Send className="h-4 w-4" aria-hidden="true" />
        )}
        Envoyer le message
      </button>
    </form>
  );
}
