"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { Send } from "lucide-react";

const newsletterSchema = z.object({
  email: z.string().email("Adresse e-mail invalide."),
});
type NewsletterValues = z.infer<typeof newsletterSchema>;

/**
 * features/newsletter/newsletter-form.tsx
 * Formulaire d'inscription newsletter (Footer). Soumission simulée — à
 * brancher sur ton fournisseur d'emailing (Brevo, Mailchimp...) via une
 * route API dédiée.
 */
export function NewsletterForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<NewsletterValues>({ resolver: zodResolver(newsletterSchema) });

  async function onSubmit(values: NewsletterValues) {
    await new Promise((resolve) => setTimeout(resolve, 600));
    console.log("Newsletter signup", values);
    toast.success("Merci ! Vous êtes bien inscrit(e) à la newsletter.");
    reset();
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-2">
      <div className="flex gap-2">
        <label htmlFor="newsletter-email" className="sr-only">
          Adresse e-mail
        </label>
        <input
          id="newsletter-email"
          type="email"
          placeholder="votre@email.fr"
          aria-invalid={Boolean(errors.email)}
          className="w-full rounded-md border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-2.5 text-sm text-primary-foreground placeholder:text-primary-foreground/50 outline-none focus:border-accent"
          {...register("email")}
        />
        <button
          type="submit"
          disabled={isSubmitting}
          aria-label="S'inscrire à la newsletter"
          className="inline-flex shrink-0 items-center justify-center rounded-md bg-accent px-4 text-accent-foreground transition-transform hover:scale-105 disabled:opacity-60"
        >
          <Send className="h-4 w-4" aria-hidden="true" />
        </button>
      </div>
      {errors.email && (
        <p className="text-xs text-accent">{errors.email.message}</p>
      )}
    </form>
  );
}
