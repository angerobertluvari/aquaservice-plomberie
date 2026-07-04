---
description: Phase 5 — SEO local, JSON-LD LocalBusiness, sitemap/robots, accessibilité, icônes, mentions légales.
---

# Phase 5 — SEO & finitions

Objectif : optimiser le référencement local et peaufiner qualité/accessibilité.

## Tâches
1. **Metadata** complet dans `app/layout.tsx` : title/description orientés « plombier Corse-du-Sud »,
   `metadataBase`, OpenGraph + Twitter, `lang="fr"`, mots-clés locaux (Ajaccio, Porto-Vecchio, Bonifacio…).
2. **JSON-LD `LocalBusiness`** (schema.org) : nom, téléphone, zone desservie, horaires, type d'activité.
3. `app/sitemap.ts` et `app/robots.ts`.
4. **Accessibilité** : `aria-label` sur les liens `tel:` et boutons du carrousel, labels de formulaire liés,
   contrastes, focus visibles, `alt` d'images pertinents.
5. **Icônes** : remplacer les caractères texte (❄ ✓ ⚡ ◎ ☎ ✉ ◷) par un jeu cohérent **Lucide**
   (`lucide-react`) là où pertinent, en conservant le rendu du design. Garder la « goutte » en CSS.
6. **Favicon** / icône d'app.
7. **Page mentions légales / RGPD** (`app/mentions-legales/page.tsx`) + lien discret dans le footer
   (confirmé). Gabarit à compléter par le propriétaire : raison sociale, SIRET, RCS, assurance,
   hébergeur (Vercel), directeur de publication, données personnelles du formulaire.

## Validation
- Lighthouse SEO/A11y corrects, pas de warnings console.
- `npm run build` OK. Cocher la Phase 5 dans `PHASES.md`.
- Commit(s), puis **stop** : récap + demander validation & push.
