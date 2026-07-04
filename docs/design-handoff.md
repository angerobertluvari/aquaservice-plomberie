# Handoff : Site vitrine Aqua Service

## Vue d'ensemble
Site vitrine one-page pour **Aqua Service**, entreprise de plomberie & climatisation en Corse-du-Sud (artisan : Jean-Christian Luvari). Objectifs métier : **générer des demandes de devis** et **faciliter les appels d'urgence**. Conception **mobile-first** — la majorité des visiteurs cherchent un dépanneur depuis leur téléphone. Le site doit inspirer confiance, réactivité et professionnalisme.

## À propos des fichiers de design
Le fichier livré (`Aqua Service.dc.html`) est une **référence de design réalisée en HTML** — un prototype qui montre l'apparence et le comportement attendus, **pas du code de production à copier tel quel**. La mission est de **recréer ce design dans un vrai codebase** en suivant ses conventions. Comme aucun environnement n'existe encore, le choix recommandé est **Next.js (App Router) + React + TypeScript + Tailwind CSS**, ce qui permet un déploiement direct sur Vercel (voir section Déploiement).

> Note technique : le `.dc.html` est un « Design Component » — un format de prototype. Ouvrez-le dans un navigateur pour voir le rendu, mais **réimplémentez le markup en composants React**, ne l'importez pas tel quel.

## Fidélité
**Haute fidélité (hifi).** Couleurs, typographie, espacements et interactions sont définitifs. Recréer l'UI au pixel près avec les composants/bibliothèques du codebase cible.

## Stack recommandée
- **Next.js 14+ (App Router)** — SSR/SSG, SEO local (important pour une entreprise géolocalisée), déploiement Vercel natif.
- **TypeScript**.
- **Tailwind CSS** — mapper les tokens ci-dessous dans `tailwind.config.ts`.
- **Google Fonts** via `next/font` : `Bricolage Grotesque` (titres) + `Manrope` (texte).
- **next/image** pour les photos du carrousel (optimisation + lazy-load).
- Formulaire : **React Hook Form** + validation **Zod**. Envoi via une **Route Handler** (`app/api/contact/route.ts`) qui relaie par email (Resend recommandé, gratuit au démarrage).

---

## Structure de la page (une seule page, ancres de navigation)

Conteneur central `max-width: 1180px`, centré. Padding horizontal fluide `clamp(1.1rem, 5vw, 2.2rem)`. **Aucune media query** dans le proto : tout est responsive via `clamp()`, `grid` auto-fit et `flex-wrap`. À reproduire à l'identique (ou en équivalent Tailwind responsive).

### 1. Header (sticky)
- `position: sticky; top: 0; z-index: 50`. Fond `rgba(255,255,255,.88)` + `backdrop-filter: blur(10px)`. Bordure basse `1px solid #e6f1f5`. Padding `14px clamp(1.1rem,5vw,2.2rem)`.
- **Gauche — logo** : pastille « goutte d'eau » (span 26×26px, `background: linear-gradient(150deg,#16a3b8,#0e7c96)`, `border-radius: 50% 50% 50% 3px`, `transform: rotate(45deg)`, ombre `0 4px 12px rgba(14,124,150,.3)`) + « **Aqua Service** » (Bricolage 19px) + sur-titre « PLOMBERIE · CLIMATISATION » (10.5px, `letter-spacing:.14em`, uppercase, `#16a3b8`, 600).
- **Droite — bouton téléphone** : `tel:+33495102030`, pill `#0f2e46`, texte blanc 700/14px, pastille verte `#3fd6a8` pulsée à gauche, libellé « 04 95 10 20 30 ».

### 2. Hero
- Fond `radial-gradient(120% 130% at 100% 0%, #eef8fb 0%, #ffffff 60%)`. Padding vertical `clamp(2.4rem,6vw,4.4rem)`.
- **Grille 2 colonnes** `repeat(auto-fit, minmax(300px,1fr))`, gap `clamp(1.8rem,4vw,3.2rem)`, `align-items:center`. Passe en 1 colonne sur mobile.
- **Colonne texte** :
  - Chip « Corse-du-Sud · intervention rapide » (fond blanc, bordure `#d6ebf1`, pill, 12.5px, `#0e7c96`, point `#16a3b8`).
  - **H1** `clamp(2.15rem, 6.2vw, 3.7rem)`, poids 800 : « Plomberie & climatisation, » puis en `#0e7c96` : « quand vous en avez besoin. »
  - Paragraphe `clamp(1.02rem,2.2vw,1.22rem)`, `#4d6d80`, `max-width:34ch`.
  - **2 CTA** (flex-wrap, gap 12px) :
    - « ☎ Appel d'urgence » → `tel:+33495102030`. Fond `#f0603a`, texte blanc 700/16px, radius 14px, ombre `0 12px 26px rgba(240,96,58,.32)`, padding `15px 24px`.
    - « Demander un devis → » → ancre `#contact`. Fond blanc, texte `#0f2e46`, bordure `1.5px solid #cfe6ee`, radius 14px.
  - **Rangée de stats** (3 items séparés par filet vertical `#dcebf1`) : « 7j/7 · Urgences », « < 1h · Délai moyen* », « 15 ans · D'expérience ». Chiffres en Bricolage 22px `#0f2e46`, labels 12.5px `#6b8698`. *(Astérisque = valeurs indicatives, à confirmer par le client.)*
- **Colonne visuelle — carrousel** (voir section Interactions) : conteneur `aspect-ratio: 4/5`, `border-radius: 24px`, `overflow: hidden`, fond `#0f2e46`, ombre `0 30px 60px -30px rgba(14,124,150,.4)`.
  - Badge flottant **en haut à droite** (`top:-14px; right:-14px`) : carte blanche, bordure `#e6f1f5`, radius 16px, ombre douce ; pastille verte `#eafaf3`/`#1a9e6f` avec « ✓ » + « **Devis gratuit** / sans engagement » (12.5px). *(Placé en haut à droite exprès pour ne pas masquer les points de navigation du carrousel en bas ni chevaucher le bouton d'urgence flottant.)*

### 3. Services
- Titre centré (`max-width:56ch`) : sur-titre « NOS SERVICES » (`#16a3b8`, .16em), **H2** `clamp(1.7rem,4.4vw,2.6rem)` « Deux métiers, une seule équipe de confiance », paragraphe `#5b7a91`.
- **2 cartes** `repeat(auto-fit, minmax(290px,1fr))`, gap 20px. Chaque carte : bordure `#e2eff4`, radius 22px, fond blanc, ombre `0 20px 40px -34px rgba(15,46,70,.4)`.
  - **Plomberie** : icône goutte (même motif que le logo, 46px). 4 lignes numérotées (fond `#f6fbfd`, radius 13px, numéro `#0e7c96` 800) :
    1. **Dépannage** — Fuites, engorgements, chauffe-eau en panne — intervention rapide.
    2. **Installation** — Cuisine, salle de bain, réseaux d'eau neufs ou en rénovation.
    3. **Recherche de fuites** — Détection non destructive et réparation durable.
    4. **Sanitaires** — Robinetterie, WC, douches — pose et remplacement.
  - **Climatisation** : icône carrée `linear-gradient(150deg,#3fc6d8,#16a3b8)` radius 14px avec « ❄ ». Lignes :
    1. **Installation** — Climatiseurs réversibles mono & multi-split, dimensionnés pour votre logement.
    2. **Entretien** — Contrat annuel, nettoyage et recharge de gaz.
    3. **Réparation** — Diagnostic et remise en service, toutes marques.
    4. (ligne accent, fond `#eef8fb`, bordure `dashed #c9e5ee`) **Confort été comme hiver** — Le réversible chauffe aussi — idéal sous le climat corse.

### 4. Pourquoi nous choisir
- Bloc pleine largeur avec marge latérale `clamp(0.7rem,3vw,1.4rem)`, radius 28px, fond `linear-gradient(160deg,#0f2e46,#123f5e)`, texte blanc.
- Titre centré : sur-titre « POURQUOI NOUS CHOISIR » (`#5fd7e8`), **H2** « Un artisan local sur qui compter ».
- **4 cartes** `repeat(auto-fit, minmax(215px,1fr))`, gap 16px, fond `rgba(255,255,255,.06)`, bordure `rgba(255,255,255,.1)`, radius 18px. Chaque carte : pastille 40px colorée + titre Bricolage 17px + texte 13.5px `#b8ccda` :
  - ⚡ **Réactivité** (pastille `#f0603a`) — Un appel, une réponse rapide, un rendez-vous sans attendre.
  - ☎ **Urgences 7j/7** (pastille `#16a3b8`) — Fuite ou panne le week-end ? Dépannage d'urgence.
  - ◎ **Toute la Corse-du-Sud** (pastille `#e9b872`) — D'Ajaccio à Bonifacio.
  - ✓ **Professionnalisme** (pastille `#3fd6a8`) — Travail soigné, devis transparent, conseils honnêtes.

### 5. Contact (formulaire + urgence)
- Grille 2 colonnes `repeat(auto-fit, minmax(300px,1fr))`, gap `clamp(1.4rem,3vw,2.4rem)`, `align-items:start`.
- **Colonne gauche** :
  - Sur-titre « CONTACT », **H2** « Parlons de votre projet », paragraphe, puis ligne discrète `#0e7c96` 600 : « Vous serez suivi par Jean-Christian Luvari. »
  - **Carte urgence** (lien `tel:`) : fond `linear-gradient(155deg,#f0603a,#d94a28)`, radius 20px, ombre corail. « URGENCE 24/7 » + numéro en Bricolage `clamp(1.7rem,5vw,2.15rem)` 800 « 04 95 10 20 30 » + « Appuyez pour appeler → ».
  - **Carte coordonnées** (blanche, bordure `#e2eff4`, radius 18px) avec 3 lignes séparées par filet `#eef5f8` : ✉ Email `contact@aqua-service.corsica` · ◎ Zone d'intervention « Toute la Corse-du-Sud (2A) » · ◷ Horaires « Lun–Sam 7h30–19h · Urgences 7j/7 ».
- **Colonne droite — formulaire** (carte blanche, bordure `#e2eff4`, radius 22px, ombre) :
  - Bandeau succès (affiché après envoi) : fond `#eafaf3`, bordure `#bfead6`, « ✓ Demande envoyée ! Nous vous recontactons au plus vite. »
  - **Type de demande** : 2 boutons segmentés « Devis » / « Urgence ». Actif = fond plein (`#16a3b8` pour Devis, `#f0603a` pour Urgence) + texte blanc ; inactif = fond `#fbfdfe`, bordure `#d6e6ec`, texte `#5b7a91`.
  - Champs : **Nom*** (text, requis), **Téléphone*** (tel, requis) côte à côte ; **Email** (email) ; **Message** (textarea 4 lignes). Inputs : bordure `#d6e6ec`, radius 11px, fond `#fbfdfe`, 14px.
  - Bouton submit : fond `#0f2e46`, texte blanc 700/15.5px, radius 13px, « Envoyer ma demande ».
  - Mention `#8aa5b3` 11.5px : « Réponse sous 24h ouvrées · Devis gratuit et sans engagement ».

### 6. Footer
- Fond `#0b2438`, texte `#9fbccd`, padding bas 110px (laisse la place au bouton d'urgence flottant). Grille `repeat(auto-fit, minmax(200px,1fr))`, gap 28px.
- Colonnes : **Marque** (logo + baseline + ligne « Jean-Christian Luvari · artisan plombier-chauffagiste » en `#6d8ea1`) · **Coordonnées** (tél `#5fd7e8`, email, « Corse-du-Sud (2A) ») · **Zone d'intervention** (grille 2 col : Ajaccio, Porto-Vecchio, Bonifacio, Propriano, Sartène, Zonza) · **Horaires** (Lun–Sam 7h30–19h · Dimanche sur urgence · « Urgences : 7j/7 · 24h/24 » en `#f0916f`).
- Filet supérieur `rgba(255,255,255,.1)` + « © 2026 Aqua Service · Corse-du-Sud » en `#6d8ea1` 12px.

### Bouton d'urgence flottant (global)
- `position: fixed; left: 50%; transform: translateX(-50%); bottom: 16px; z-index: 80`. Pill `#f0603a`, texte blanc 700/15.5px, « ☎ Appel d'urgence », lien `tel:`. Animation `pulseRing` (halo corail pulsé, 2.6s infinite). Visible en permanence sur toutes tailles d'écran.

---

## Interactions & comportement
- **Carrousel hero** : 4 photos empilées en absolu, `transition: opacity 1.1s ease`, seule l'active en `opacity:1`. **Avance auto toutes les 4,5s** (setInterval, boucle modulo). **Points de navigation** en bas à droite : point actif = barre 22×7px blanche, inactif = point 7×7px `rgba(255,255,255,.5)`. Clic sur un point → va à la slide **et réarme le timer**. Légende en bas à gauche (13px blanc, text-shadow) qui suit la slide active. Dégradé bas `rgba(9,28,44,.8)→transparent` pour la lisibilité. → En Next.js : composant client `"use client"`, `useState(index)` + `useEffect` pour l'intervalle (nettoyage au démontage), `next/image` avec `priority` sur la 1re.
- **Toggle Devis/Urgence** : met à jour l'état ; à pré-remplir/refléter dans le payload du formulaire.
- **Envoi du formulaire** : `preventDefault`, passe en état « soumis » et affiche le bandeau succès. → En prod : validation Zod, POST vers `/api/contact`, envoi email (Resend), gestion des états loading/erreur.
- **Smooth scroll** : `html { scroll-behavior: smooth }` pour les ancres `#contact`, `#services`, etc.
- **Liens `tel:`** partout où un numéro apparaît (crucial mobile).

## Gestion d'état
- `slide: number` (index carrousel actif) + timer d'auto-défilement.
- `type: 'devis' | 'urgence'` (type de demande).
- `submitted: boolean` (+ en prod : `loading`, `error`).

## Design tokens
**Couleurs**
- Encre / texte : `#0f2e46` · texte secondaire `#4d6d80` · muté `#5b7a91` / `#6b8698`
- Aqua/turquoise : `#16a3b8` · aqua profond `#0e7c96` · aqua clair (fond) `#eef8fb` · filet aqua `#d6ebf1` / `#e2eff4`
- Corail (urgence) : `#f0603a` · corail profond `#d94a28`
- Vert validation : `#1a9e6f` / fond `#eafaf3`
- Sable (touche corse) : `#e9b872`
- Marine footer : `#0b2438` · dégradé sombre `#0f2e46 → #123f5e` · accent clair `#5fd7e8`
- Blanc : `#ffffff` · blanc cassé `#fbfdfe` / `#f6fbfd`

**Typographie** — Titres : `Bricolage Grotesque` (500–800), `line-height:1.08`, `letter-spacing:-0.01em`. Texte : `Manrope` (400–700), `line-height:1.5`. Échelle titres fluide via `clamp()` (voir chaque section).

**Rayons** : 11–14px (champs/boutons), 16–22px (cartes), 24–28px (visuels/blocs), 999px (pills).
**Ombres** : cartes `0 20px 40px -34px rgba(15,46,70,.4)` · CTA corail `0 12px 26px rgba(240,96,58,.32)` · visuel hero `0 30px 60px -30px rgba(14,124,150,.4)`.
**Espacement** : padding sections `clamp(2.4rem,6vw,4.6rem)`, gaps 12–28px, conteneur `max-width:1180px`.
**Keyframes** : `floatY` (flottement vertical ±10px, non utilisé sur le carrousel final) · `pulseRing` (halo pulsé du bouton d'urgence).

## Assets
- **Photos du carrousel** : images d'exemple Unsplash (temporaires) — villa/piscine, maisons en bord de mer, salle de bain moderne, villa « fraîcheur ». **À remplacer par les vraies photos du client.** Prévoir 4 emplacements ratio ~4:5, optimisés via `next/image`. IDs actuels : `1613490493576-7fde63acd811`, `1502005229762-cf1b2da7c5d6`, `1584622650111-993a426fbf0a`, `1613977257363-707ba9348227`.
- **Icônes** : dessinées en CSS/caractères (goutte CSS, « ❄ », « ✓ », « ⚡ », « ◎ », « ☎ »). En prod, remplacer par un jeu d'icônes cohérent (ex. Lucide) pour goutte, flocon, éclair, localisation, téléphone, coche.
- **Aucune image bitmap fournie** hors placeholders Unsplash.

## Données à confirmer avec le client (placeholders dans le proto)
- Numéro de téléphone réel (proto : `04 95 10 20 30` / `tel:+33495102030`).
- Email réel (proto : `contact@aqua-service.corsica`).
- Stats « < 1h », « 15 ans » (indicatives).
- Liste exacte des communes desservies + horaires définitifs.
- Mentions légales / RGPD (à ajouter : page mentions légales + consentement formulaire).

## Fichiers
- `Aqua Service.dc.html` — prototype de référence complet (inclus dans ce bundle). Ouvrir dans un navigateur pour voir le rendu et les interactions.
- `screenshots/` — captures desktop de référence, à reproduire au pixel près :
  - `01-hero.png` — header + hero + carrousel + badge « Devis gratuit »
  - `02-services.png` — cartes Plomberie & Climatisation
  - `03-pourquoi.png` — bloc « Pourquoi nous choisir »
  - `04-contact.png` — formulaire + carte urgence + coordonnées
  - `05-footer.png` — footer
  - *(Le rendu mobile s'obtient en réduisant la largeur : layout fluide en 1 colonne, sans media query — voir « Structure de la page ».)*

---

## Déploiement sur Vercel
1. **Créer le projet** : `npx create-next-app@latest aqua-service` (TypeScript + Tailwind + App Router).
2. Implémenter les sections ci-dessus en composants React ; placer les images dans `/public` (ou garder `next/image` distant le temps des placeholders).
3. **Formulaire** : créer `app/api/contact/route.ts`, brancher **Resend** (clé API en variable d'environnement `RESEND_API_KEY`) pour recevoir les demandes par email.
4. **Push sur GitHub** : `git init && git add . && git commit -m "init" && git push`.
5. **Vercel** : créer un compte sur vercel.com → « Add New Project » → importer le dépôt GitHub → Vercel détecte Next.js automatiquement → renseigner les variables d'environnement (`RESEND_API_KEY`, email destinataire) → **Deploy**.
6. **Domaine** : dans Vercel → Settings → Domains, brancher un domaine (ex. `aqua-service.corsica` ou `.fr`).
7. **SEO local** : renseigner `metadata` (title/description avec « plombier Corse-du-Sud »), ajouter des données structurées `LocalBusiness` (schema.org), un `sitemap.ts` et un `robots.ts`.

### Prompt suggéré pour Claude Code
> « Voici un paquet de handoff (README + prototype HTML) pour un site vitrine de plomberie/climatisation. Implémente-le fidèlement en Next.js (App Router) + TypeScript + Tailwind, mobile-first, en respectant les tokens et le layout décrits. Transforme le carrousel et le formulaire en composants React, avec une route API `/api/contact` qui envoie un email via Resend. Prépare le projet pour un déploiement Vercel. Ne copie pas le HTML tel quel : recrée-le proprement en composants. »
