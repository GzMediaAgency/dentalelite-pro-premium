/**
 * config/site.ts
 * ---------------------------------------------------------------------------
 * FICHIER DE PERSONNALISATION CENTRAL — DentalElite Pro
 * ---------------------------------------------------------------------------
 * Toutes les informations spécifiques au cabinet (nom, logo, couleurs,
 * coordonnées, horaires, réseaux sociaux, intégrations tierces, SEO...)
 * sont centralisées ici.
 *
 * Objectif : permettre de revendre ce template à des centaines de cabinets
 * (dentaires ou, plus largement, professions de santé) en ne modifiant QUE
 * ce fichier — aucun composant ne doit être touché.
 *
 * Toutes les valeurs textuelles / structurées propres au contenu (services,
 * équipe, avis, FAQ, articles de blog...) vivent dans /data et non ici :
 * ce fichier ne contient que l'identité et la configuration du cabinet.
 * ---------------------------------------------------------------------------
 */

export type SocialPlatform =
  | "facebook"
  | "instagram"
  | "linkedin"
  | "youtube"
  | "tiktok";

export interface SocialLink {
  platform: SocialPlatform;
  url: string;
  label: string;
}

export interface OpeningHoursEntry {
  day:
    | "Lundi"
    | "Mardi"
    | "Mercredi"
    | "Jeudi"
    | "Vendredi"
    | "Samedi"
    | "Dimanche";
  open: string | null; // format "HH:mm", null si fermé
  close: string | null;
  note?: string; // ex: "Urgences uniquement"
}

export interface BrandColors {
  primary: string; // Bleu profond
  secondary: string; // Bleu médical
  accent: string; // Or premium
  background: string; // Fond
  surface: string; // Blanc
  foreground: string; // Texte
}

export interface IntegrationsConfig {
  googleMapsEmbedUrl: string;
  googleMapsPlaceUrl: string;
  doctolibUrl: string | null;
  whatsappNumber: string | null; // format international sans espaces, ex: "33612345678"
  calendlyUrl: string | null;
  googleAnalyticsId: string | null; // ex: "G-XXXXXXX"
  googleTagManagerId: string | null; // ex: "GTM-XXXXXXX"
  metaPixelId: string | null;
  googlePlaceId: string | null; // pour les avis Google
}

export interface SeoConfig {
  defaultTitle: string;
  titleTemplate: string; // ex: "%s | DentalElite Pro"
  defaultDescription: string;
  siteUrl: string;
  locale: string;
  themeColor: string;
  keywords: string[];
  twitterHandle: string | null;
  ogImage: string; // chemin public, ex: "/images/og-cover.jpg"
}

/**
 * Clé du preset de contenu actif (voir /data/presets/). Ajouter un métier :
 * créer data/presets/<clé>/, l'enregistrer dans data/active.ts, puis
 * ajouter la clé ici.
 */
export type PresetKey = "dentiste" | "kine";

/**
 * Type Schema.org le plus adapté au métier, utilisé par lib/schema.ts pour
 * le JSON-LD (meilleur référencement local que le générique "MedicalBusiness").
 * Référence : https://schema.org/MedicalOrganization
 */
export type MedicalSchemaType =
  | "Dentist"
  | "Physician"
  | "Physiotherapist"
  | "Dermatologist"
  | "MedicalBusiness";

export interface SiteConfig {
  /** Identité */
  name: string;
  shortName: string;
  legalName: string;
  tagline: string;
  description: string;
  logo: {
    light: string;
    dark: string;
    icon: string;
    width: number;
    height: number;
  };

  /** Praticien / spécialité — permet une déclinaison multi-spécialités */
  specialtyLabel: string; // ex: "Chirurgien-dentiste", "Médecin généraliste"...

  /** Preset de contenu actif — LE switch multi-spécialités (voir data/active.ts) */
  activePreset: PresetKey;

  /** Type Schema.org utilisé pour le JSON-LD (lib/schema.ts) */
  schemaType: MedicalSchemaType;

  /** Coordonnées */
  contact: {
    phone: string;
    phoneDisplay: string;
    email: string;
    address: {
      street: string;
      postalCode: string;
      city: string;
      country: string;
      countryCode: string;
    };
  };

  /** Horaires */
  openingHours: OpeningHoursEntry[];

  /** Réseaux sociaux */
  socials: SocialLink[];

  /** Couleurs de marque (doivent correspondre aux variables CSS du thème) */
  colors: BrandColors;

  /** Intégrations tierces */
  integrations: IntegrationsConfig;

  /** SEO global */
  seo: SeoConfig;
}

export const siteConfig: SiteConfig = {
  name: "DentalElite Pro",
  shortName: "DentalElite",
  legalName: "Cabinet Dentaire DentalElite Pro SELARL",
  tagline: "L'excellence dentaire, pensée pour vous",
  description:
    "Cabinet dentaire premium à Paris. Implantologie, orthodontie, blanchiment et urgences dentaires, dans un cadre pensé pour votre confort et votre confiance.",
  logo: {
    light: "/images/logo-light.svg",
    dark: "/images/logo-dark.svg",
    icon: "/images/logo-icon.svg",
    width: 160,
    height: 40,
  },

  specialtyLabel: "Chirurgien-dentiste",
  activePreset: "dentiste",
  schemaType: "Dentist",

  contact: {
    phone: "+33142000000",
    phoneDisplay: "01 42 00 00 00",
    email: "contact@dentalelite-pro.fr",
    address: {
      street: "12 avenue de la République",
      postalCode: "75011",
      city: "Paris",
      country: "France",
      countryCode: "FR",
    },
  },

  openingHours: [
    { day: "Lundi", open: "09:00", close: "19:00" },
    { day: "Mardi", open: "09:00", close: "19:00" },
    { day: "Mercredi", open: "09:00", close: "19:00" },
    { day: "Jeudi", open: "09:00", close: "19:00" },
    { day: "Vendredi", open: "09:00", close: "18:00" },
    { day: "Samedi", open: "09:00", close: "13:00", note: "Urgences uniquement" },
    { day: "Dimanche", open: null, close: null },
  ],

  socials: [
    {
      platform: "instagram",
      url: "https://instagram.com/dentalelitepro",
      label: "Instagram",
    },
    {
      platform: "facebook",
      url: "https://facebook.com/dentalelitepro",
      label: "Facebook",
    },
    {
      platform: "linkedin",
      url: "https://linkedin.com/company/dentalelitepro",
      label: "LinkedIn",
    },
  ],

  colors: {
    primary: "#0B2545",
    secondary: "#2F80ED",
    accent: "#D4AF37",
    background: "#F7F9FC",
    surface: "#FFFFFF",
    foreground: "#2D3748",
  },

  integrations: {
    googleMapsEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.999999!2d2.3730!3d48.8630!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1",
    googleMapsPlaceUrl: "https://maps.google.com/?q=12+avenue+de+la+République,+75011+Paris",
    doctolibUrl: "https://www.doctolib.fr/",
    whatsappNumber: "33612345678",
    calendlyUrl: null,
    googleAnalyticsId: null,
    googleTagManagerId: null,
    metaPixelId: null,
    googlePlaceId: null,
  },

  seo: {
    defaultTitle: "DentalElite Pro — Cabinet dentaire premium à Paris",
    titleTemplate: "%s | DentalElite Pro",
    defaultDescription:
      "Cabinet dentaire premium à Paris : implantologie, orthodontie, blanchiment, urgences. Une équipe experte, un cadre haut de gamme, une prise en charge personnalisée.",
    siteUrl: "https://www.dentalelite-pro.fr",
    locale: "fr_FR",
    themeColor: "#0B2545",
    keywords: [
      "dentiste Paris",
      "cabinet dentaire premium",
      "implantologie Paris",
      "blanchiment dentaire",
      "urgence dentaire Paris",
      "orthodontie adulte",
    ],
    twitterHandle: null,
    ogImage: "/images/og-cover.jpg",
  },
};
