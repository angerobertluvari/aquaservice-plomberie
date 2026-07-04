# Feuille de route — Aqua Service

Source de vérité de l'avancement. Chaque phase se termine par un (ou plusieurs) commit(s),
puis **arrêt pour validation + push** par le propriétaire du projet avant de passer à la suivante.

Statut : `[ ]` à faire · `[~]` en cours · `[x]` terminé

## Phase 0 — Setup & git ✅
- [x] `git init` (branche `main`)
- [x] Réorganisation des fichiers de design dans `docs/`
- [x] `.gitignore`, `README.md`, `PHASES.md`
- [x] Commandes de phase dans `.claude/commands/`
- [x] Commit initial
> Gate : le propriétaire crée le dépôt GitHub vierge et pousse.

## Phase 1 — Scaffold Next.js  — `/aqua-phase-1-scaffold` ✅
- [x] `create-next-app` (Next 16, App Router, TS, Tailwind v4, ESLint) fusionné dans le dépôt
- [x] Fonts `next/font` : Bricolage Grotesque + Manrope (variables CSS)
- [x] Design tokens (couleurs, radius, ombres, fonts) dans `@theme` de `app/globals.css` (Tailwind v4)
- [x] `app/layout.tsx` (`lang="fr"`, metadata de base, fonts, smooth scroll)
- [x] `app/globals.css` nettoyé, base body/typo + keyframes `pulseRing`/`floatY`
- [x] `.env.example`
- [x] `npm run build` réussit + `npm run lint` propre

## Phase 2 — Sections statiques (pixel-faithful)  — `/aqua-phase-2-sections`
- [ ] `Header` (sticky, logo goutte, bouton téléphone)
- [ ] `Hero` (chip, H1, CTA, stats, colonne visuelle + badge « Devis gratuit ») — carrousel statique 1re image
- [ ] `Services` (cartes Plomberie & Climatisation)
- [ ] `Pourquoi` (bloc sombre, 4 cartes)
- [ ] `Contact` (colonne urgence/coordonnées + squelette formulaire)
- [ ] `Footer`
- [ ] `FloatingEmergency` (bouton flottant global + animation pulseRing)
- [ ] Responsive fluide via `clamp()` (vérifier mobile/desktop)

## Phase 3 — Interactivité  — `/aqua-phase-3-interactive`
- [ ] Carrousel hero client (`useState` + `useEffect`, auto 4,5 s, points, légende, réarmement timer)
- [ ] `next/image` sur les slides (priority sur la 1re)
- [ ] Toggle Devis/Urgence (état + styles actifs)
- [ ] Formulaire : React Hook Form + Zod, états loading/success/error, bandeau succès

## Phase 4 — API contact / email  — `/aqua-phase-4-api`
- [ ] `app/api/contact/route.ts` (validation Zod côté serveur)
- [ ] Intégration Resend + mode dégradé sans clé
- [ ] Branchement du formulaire (POST, gestion erreurs)

## Phase 5 — SEO & finitions  — `/aqua-phase-5-seo`
- [ ] `metadata` complet (title/description « plombier Corse-du-Sud »), OpenGraph
- [ ] JSON-LD `LocalBusiness` (schema.org)
- [ ] `sitemap.ts`, `robots.ts`
- [ ] Favicon / icônes, accessibilité (labels, aria), remplacement icônes texte → Lucide
- [ ] Page mentions légales / RGPD + lien footer (confirmé)

## Phase 6 — Préparation déploiement  — `/aqua-phase-6-deploy`
- [ ] `npm run build` propre, lint OK, pas d'erreurs TS
- [ ] Vérification finale vs screenshots
- [ ] Doc des variables d'env pour Vercel
- [ ] Prêt à déployer (déploiement Vercel fait en dernier, avec le propriétaire)
