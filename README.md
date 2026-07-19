# DentalElite Pro

Template SaaS premium pour cabinets dentaires (et, plus largement,
professions de santé), conçu pour être revendu à des centaines de cabinets
via une simple configuration — sans jamais toucher au code des composants.

Qualité visée : comparable à Stripe, Linear, Vercel, Apple, Framer et aux
templates premium Webflow.

---

## Stack technique

Next.js 15 (App Router) · React 19 · TypeScript strict · Tailwind CSS v4
(config CSS-first) · shadcn/ui (style *new-york*) · Framer Motion · **GSAP**
(reveal du Hero, parallax au scroll, curseur magnétique) · Lucide React ·
React Hook Form + Zod · next-sitemap · React Query · Lenis (smooth scroll) ·
Embla Carousel · react-compare-image · Sonner · next-themes.

> `next-seo` et `recharts` faisaient partie du périmètre initial mais n'ont
> jamais été réellement utilisés (l'API Metadata native de Next.js couvre
> tout le SEO ; aucune donnée du site ne justifie un graphique). Retirés au
> Sprint 11 plutôt que gardés comme poids mort.

Polices : Playfair Display (titres) + Inter (corps), **auto-hébergées**
(`next/font/local`) — aucune requête vers Google Fonts.

---

## Démarrage rapide

```bash
npm install
cp .env.example .env.local
npm run dev
```

Le site est disponible sur `http://localhost:3000`.

### Scripts disponibles

| Commande               | Description                                     |
| ----------------------- | ------------------------------------------------ |
| `npm run dev`           | Serveur de développement                          |
| `npm run build`         | Build de production + génération du sitemap/robots.txt |
| `npm run start`         | Lance le build de production (nécessite `build` avant) |
| `npm run lint`          | ESLint (strict, `no-explicit-any` en erreur)      |
| `npm run type-check`    | Vérification TypeScript sans émission             |
| `npm run format`        | Formatage Prettier (+ tri automatique des classes Tailwind) |

---

## Architecture

```
app/
  (marketing)/        Pages publiques : cabinet, equipe, soins/*, avis, faq,
                       contact, tarifs, rendez-vous, blog, blog/[slug]
  (legal)/             mentions-legales, rgpd, politique-de-confidentialite
  layout.tsx           Layout racine (providers, Navbar, Footer, SEO global)
  page.tsx             Page d'accueil (assemblage des sections)
  not-found.tsx         404
  error.tsx / global-error.tsx   500 / erreur racine
  fonts.ts / fonts/     Polices auto-hébergées

components/
  ui/                  Primitives shadcn/ui
  layout/               Navbar, Footer
  shared/               Composants transverses (Accordion, Breadcrumbs,
                        PageHeader, JsonLd, CookieBanner, BackToTop...)
  providers/             QueryProvider, SmoothScrollProvider

features/               Un dossier par fonctionnalité (hero, services,
                        testimonials, faq, contact, team, blog, before-after,
                        stats, why-us, newsletter...)

config/site.ts          ⭐ FICHIER UNIQUE de personnalisation du cabinet
data/                    Contenu structuré (services, équipe, avis, FAQ,
                        blog, navigation, tarifs...) — CMS-ready
hooks/                   Hooks React réutilisables (useLenis, useScrolled...)
lib/                     Utilitaires (cn, schema.ts, seo.ts)
types/                   Types TypeScript partagés
styles/                  Tokens CSS complémentaires (keyframes, glassmorphism)
```

---

## Personnalisation pour un nouveau cabinet

**Étape unique dans 95% des cas : `config/site.ts`.**
Nom, logo, couleurs, téléphone, adresse, horaires, réseaux sociaux,
intégrations (Doctolib, WhatsApp, Google Maps, Analytics, GTM, Meta Pixel),
SEO par défaut — tout y est centralisé et strictement typé.

Pour changer le **contenu** (soins proposés, équipe, avis, questions FAQ,
articles de blog, tarifs), modifiez les fichiers correspondants dans
**`/data`** :

| Fichier | Contenu |
|---|---|
| `data/services.ts` | Les soins proposés (nom, description, image, points forts) — alimente automatiquement le Mega Menu, la section Services et les pages /soins/* |
| `data/team.ts` | Membres de l'équipe |
| `data/testimonials.ts` | Avis patients |
| `data/faq.ts` | Questions fréquentes |
| `data/blog.ts` | Articles de blog |
| `data/pricing.ts` | Tarifs indicatifs |
| `data/navigation.ts` | Structure du menu (dérivée en partie de `services.ts`) |

Aucune de ces modifications ne nécessite de toucher aux composants React.

### Palette de marque

Modifiable dans `config/site.ts` (`colors`) **et** dans `app/globals.css`
(`:root` et `.dark`) — les deux doivent rester synchronisés, le premier
sert de source de vérité pour le SEO/JSON-LD, le second pilote réellement
le rendu visuel via les tokens Tailwind v4.

### Images

Toutes les images du template proviennent d'Unsplash (libres de droits,
usage commercial autorisé). Remplacez-les par les photos réelles du
cabinet dans `/data/*.ts` — `next/image` et `next.config.ts` sont déjà
configurés pour `images.unsplash.com` et `images.pexels.com`.

---

## Variables d'environnement

Voir `.env.example` pour la liste complète et les commentaires. Aucune
n'est strictement obligatoire pour un build de démonstration : le template
fonctionne "out of the box" grâce à `config/site.ts`. Elles deviennent
nécessaires pour :
- un envoi réel des formulaires (contact, newsletter) — actuellement
  simulés, voir les commentaires dans `features/contact/contact-form.tsx`
  et `features/newsletter/newsletter-form.tsx` ;
- le branchement d'un CMS (Sanity, Contentful, Strapi, Payload) ;
- Analytics / GTM / Meta Pixel.

---

## Multi-spécialités : vendre le même socle à d'autres professions de santé

Le template n'est pas figé sur le dentaire. Le contenu métier (soins,
équipe, avis, FAQ, blog, tarifs, Hero) est packagé en **presets**
interchangeables dans `data/presets/`.

### Changer de métier pour un client (30 secondes)

Dans `config/site.ts` :

```ts
activePreset: "kine",           // au lieu de "dentiste"
schemaType: "Physiotherapist",  // type Schema.org adapté au métier
specialtyLabel: "Masseur-kinésithérapeute",
```

Tout le site (Hero, Mega Menu, section Soins, pages `/soins/[slug]`,
Équipe, Tarifs, Avis, Blog, JSON-LD) bascule automatiquement sur le
nouveau contenu. **Aucun composant n'a besoin d'être modifié** — c'est le
seul et unique fichier à toucher pour le contenu métier.

Deux presets sont livrés en exemple : `dentiste` (le contenu d'origine)
et `kine` (kinésithérapeute, démontre le mécanisme sur un métier différent).

### Ajouter un nouveau métier (dermatologue, ostéopathe, médecin généraliste...)

1. Dupliquer un dossier existant : `cp -r data/presets/dentiste data/presets/dermatologue`
2. Réécrire le contenu de chaque fichier (`services.ts`, `team.ts`,
   `faq.ts`, `blog.ts`, `pricing.ts`, `testimonials.ts`, `hero.ts`) avec
   des données propres au nouveau métier — la **forme** de chaque fichier
   ne change jamais, seul le contenu change (le contrat est imposé par
   `data/presets/types.ts` et `data/presets/shared-types.ts`).
3. Trouver des images libres de droits adaptées (Unsplash/Pexels) pour
   chaque service.
4. Enregistrer le preset dans `data/active.ts` :
   ```ts
   import dermatologuePreset from "@/data/presets/dermatologue";
   const presets = {
     dentiste: dentistePreset,
     kine: kinePreset,
     dermatologue: dermatologuePreset,
   } satisfies Record<string, SpecialtyPreset>;
   ```
5. Ajouter la clé au type `PresetKey` dans `config/site.ts`.
6. Ajouter le type Schema.org correspondant à `MedicalSchemaType` si besoin
   (`Dermatologist` existe déjà ; sinon utiliser `MedicalBusiness`).

### Ce qui reste commun à tous les métiers (jamais à retoucher)

Design System, Navbar/Footer, animations, formulaire de contact,
newsletter, cookie banner, accessibilité, SEO technique, pages légales —
tout ça est déjà 100% générique et ne dépend d'aucun preset.

---



1. Poussez le projet sur un repository Git (GitHub/GitLab/Bitbucket).
2. Sur [vercel.com](https://vercel.com), cliquez sur **New Project** et
   importez le repository.
3. Vercel détecte automatiquement Next.js — aucune configuration de build
   n'est nécessaire (`next build` est utilisé par défaut).
4. Renseignez les variables d'environnement de `.env.example` dans
   **Project Settings → Environment Variables** (au minimum
   `NEXT_PUBLIC_SITE_URL` avec le domaine final).
5. Déployez. Chaque push sur la branche principale redéploie
   automatiquement.
6. Ajoutez votre domaine personnalisé dans **Project Settings → Domains**.

## Déploiement — VPS Hostinger (ou tout VPS Linux)

1. **Prérequis sur le VPS** : Node.js 20+, npm, et idéalement
   [PM2](https://pm2.keymetrics.io/) pour garder le processus actif, ainsi
   qu'un reverse proxy Nginx pour le HTTPS.

   ```bash
   # Sur le VPS
   curl -fsSL https://deb.nodesource.com/setup_20.x | sudo bash -
   sudo apt install -y nodejs nginx
   sudo npm install -g pm2
   ```

2. **Récupérer le projet** (clone Git ou upload du dossier) puis installer
   et builder :

   ```bash
   cd /var/www/dentalelite-pro
   npm install
   cp .env.example .env.local   # renseigner les valeurs de production
   npm run build
   ```

3. **Démarrer avec PM2** :

   ```bash
   pm2 start npm --name "dentalelite-pro" -- start
   pm2 save
   pm2 startup   # pour un redémarrage automatique au reboot du serveur
   ```

   Par défaut, `next start` écoute sur le port `3000`.

4. **Configurer Nginx en reverse proxy** (`/etc/nginx/sites-available/dentalelite-pro`) :

   ```nginx
   server {
       listen 80;
       server_name votre-domaine.fr www.votre-domaine.fr;

       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

   Puis activez le site et rechargez Nginx :

   ```bash
   sudo ln -s /etc/nginx/sites-available/dentalelite-pro /etc/nginx/sites-enabled/
   sudo nginx -t && sudo systemctl reload nginx
   ```

5. **HTTPS avec Let's Encrypt** :

   ```bash
   sudo apt install -y certbot python3-certbot-nginx
   sudo certbot --nginx -d votre-domaine.fr -d www.votre-domaine.fr
   ```

6. **Mises à jour ultérieures** :

   ```bash
   git pull
   npm install
   npm run build
   pm2 restart dentalelite-pro
   ```

---

## Brancher un CMS (optionnel)

La structure `/data` a été pensée pour être remplacée progressivement par
des appels à un CMS headless (Sanity, Contentful, Strapi ou Payload) sans
toucher aux composants : il suffit de faire retourner aux fonctions
`getServiceBySlug`, `getArticleBySlug`, etc. des données issues d'un fetch
CMS plutôt que d'un tableau statique, en conservant les mêmes types
(`Service`, `BlogArticle`, `TeamMember`...). Les variables d'environnement
correspondantes sont déjà prévues dans `.env.example`.

---

## Statut du projet

Toutes les étapes du cahier des charges sont livrées :

- [x] Initialisation & configuration
- [x] Design System (couleurs, typographie, dark mode, radius, ombres)
- [x] Layout principal (providers, accessibilité, Lenis, React Query, Sonner)
- [x] Navbar (Mega Menu, sticky/blur, drawer mobile)
- [x] Hero (animations, badge, image flottante, CTA)
- [x] Services (cartes premium, tilt 3D léger)
- [x] Pourquoi nous choisir / Avant-Après / Chiffres animés / Déroulement
- [x] Témoignages (carousel Embla + note globale)
- [x] FAQ (accordéon accessible + schema FAQPage)
- [x] Contact (formulaire RHF+Zod, carte, coordonnées)
- [x] Footer (newsletter, navigation, réseaux sociaux)
- [x] Toutes les pages : Cabinet, Équipe, Soins (listing + 4 détails),
      Tarifs, Rendez-vous, Avis, Blog + Article, pages légales, 404, 500
- [x] SEO : Metadata API, Open Graph, Twitter Cards, sitemap/robots,
      JSON-LD (Dentist, FAQPage, Review/AggregateRating, BreadcrumbList)
- [x] Accessibilité : skip-link, focus visible, `prefers-reduced-motion`,
      contrastes, navigation clavier
- [x] Documentation complète (ce fichier)

### Passe premium (12 sprints d'audit et d'amélioration)

Après la livraison initiale, un audit complet (note détaillée par
critère : UI, UX, SEO, animations, architecture, accessibilité,
responsive, code, performance, conversion) a guidé 12 sprints
d'amélioration ciblée :

- [x] Sprint 1 — Audit complet et roadmap
- [x] Sprint 2 — Refonte Hero (GSAP : reveal du titre, parallax, carte docteur)
- [x] Sprint 3 — Design System premium (mesh gradient, grain, bordures en
      dégradé, ombres teintées, spotlight au survol)
- [x] Sprint 4 — Motion Design transversal (curseur personnalisé, tilt 3D
      généralisé, composant `Reveal`, bouton magnétique, transitions de section)
- [x] Sprint 5 — Services (CTA au survol, profondeur, spotlight)
- [x] Sprint 6 — Avant/Après (plusieurs cas, zoom plein écran)
- [x] Sprint 7 — **Vraie intégration Google Reviews** (API Google Places,
      repli automatique sur la démo si aucune clé n'est configurée)
- [x] Sprint 8 — FAQ premium (icônes de catégorie, bordure en dégradé)
- [x] Sprint 9 — Contact (badges d'icônes, CTA magnétiques, cadrage premium)
- [x] Sprint 10 — Footer (badges de certification, fond texturé)
- [x] Sprint 11 — SEO renforcé (schema BlogPosting, robots/keywords sur
      toutes les pages y compris l'accueil) + retrait de `next-seo` et
      `recharts` (jamais utilisés)
- [x] Sprint 12 — Optimisation finale (code-splitting de la section
      Avant/Après via `next/dynamic`, nettoyage du dépôt)

**Une limite honnête à connaître :** aucun score Lighthouse réel n'a été
mesuré (pas de navigateur disponible dans l'environnement de génération).
Les fondations visent le 100/100 partout (polices auto-hébergées, Server
Components par défaut, code-splitting, images optimisées), mais un
passage Lighthouse/PageSpeed après le premier déploiement Vercel reste
nécessaire pour confirmer les scores et ajuster si besoin.
