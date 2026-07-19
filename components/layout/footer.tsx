import Link from "next/link";
import { Phone, Mail, MapPin, ShieldCheck, BadgeCheck, Lock, Award, type LucideIcon } from "lucide-react";
import { siteConfig } from "@/config/site";
import { mainNav, utilityNav, legalNav } from "@/data/navigation";
import { certificationBadges } from "@/data/certifications";
import type { CertificationBadge } from "@/data/certifications";
import { NewsletterForm } from "@/features/newsletter/newsletter-form";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  YoutubeIcon,
  TiktokIcon,
} from "@/components/shared/social-icons";
import type { SocialPlatform } from "@/config/site";
import type { ComponentType, SVGProps } from "react";

const certificationIconMap: Record<CertificationBadge["icon"], LucideIcon> = {
  ShieldCheck,
  BadgeCheck,
  Lock,
  Award,
};

/**
 * components/layout/footer.tsx
 * -----------------------------------------------------------------------
 * Footer définitif (Étape 10). Newsletter, navigation complète (dérivée de
 * data/navigation.ts, donc toujours synchronisée avec la Navbar), réseaux
 * sociaux et mentions légales.
 * -----------------------------------------------------------------------
 */
const socialIconMap: Record<SocialPlatform, ComponentType<SVGProps<SVGSVGElement>>> = {
  facebook: FacebookIcon,
  instagram: InstagramIcon,
  linkedin: LinkedinIcon,
  youtube: YoutubeIcon,
  tiktok: TiktokIcon,
};

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-primary bg-mesh bg-grain text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="relative z-10 grid grid-cols-1 gap-10 lg:grid-cols-[1.3fr_1fr_1fr_1.2fr]">
          {/* Marque + newsletter */}
          <div>
            <span className="font-display text-xl font-semibold">{siteConfig.shortName}</span>
            <p className="mt-3 max-w-xs text-sm text-primary-foreground/70">
              {siteConfig.tagline}
            </p>

            <div className="mt-6">
              <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-primary-foreground/60">
                Newsletter
              </p>
              <NewsletterForm />
            </div>

            <div className="mt-6 flex gap-3">
              {siteConfig.socials.map((social) => {
                const Icon = socialIconMap[social.platform];
                return (
                  <a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-primary-foreground/20 transition-colors hover:bg-primary-foreground/10"
                  >
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-primary-foreground/60">
              Navigation
            </p>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              {mainNav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-primary-foreground">
                    {item.label}
                  </Link>
                </li>
              ))}
              {utilityNav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-primary-foreground">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Légal */}
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-primary-foreground/60">
              Informations légales
            </p>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              {legalNav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-primary-foreground">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact rapide */}
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-primary-foreground/60">
              Contact
            </p>
            <ul className="space-y-3 text-sm text-primary-foreground/80">
              <li className="flex items-start gap-2">
                <Phone className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                <a href={`tel:${siteConfig.contact.phone}`} className="hover:text-primary-foreground">
                  {siteConfig.contact.phoneDisplay}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-primary-foreground">
                  {siteConfig.contact.email}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                <span>
                  {siteConfig.contact.address.street}, {siteConfig.contact.address.postalCode}{" "}
                  {siteConfig.contact.address.city}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Badges de confiance / certifications */}
        <div className="relative z-10 mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 border-t border-primary-foreground/10 pt-8 sm:justify-between">
          {certificationBadges.map((badge) => {
            const Icon = certificationIconMap[badge.icon];
            return (
              <div
                key={badge.label}
                className="flex items-center gap-2 text-xs text-primary-foreground/70"
              >
                <Icon className="h-4 w-4 text-accent" aria-hidden="true" />
                {badge.label}
              </div>
            );
          })}
        </div>

        <div className="relative z-10 mt-8 flex flex-col items-center justify-between gap-4 border-t border-primary-foreground/10 pt-8 text-xs text-primary-foreground/60 sm:flex-row">
          <p>
            © {year} {siteConfig.legalName}. Tous droits réservés.
          </p>
          <p>Template DentalElite Pro</p>
        </div>
      </div>
    </footer>
  );
}
