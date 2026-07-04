---
description: Phase 2 — Sections statiques du site, pixel-faithful (Header, Hero, Services, Pourquoi, Contact, Footer, bouton flottant).
---

# Phase 2 — Sections statiques

Objectif : recréer toutes les sections **au pixel près** en composants React, en statique
(l'interactivité vient en Phase 3). Source de vérité : `docs/design-handoff.md`,
`docs/Aqua Service.dc.html`, `docs/screenshots/`.

Crée un composant par section dans `components/`. Conteneur central `max-width:1180px`,
padding horizontal `clamp(1.1rem,5vw,2.2rem)`. **Pas de media query** : responsive via `clamp()`,
`grid auto-fit` et `flex-wrap` (équivalents Tailwind autorisés).

## Composants
1. `Header` — sticky, fond `rgba(255,255,255,.88)` + blur, logo « goutte » (span rotate 45°,
   radius `50% 50% 50% 3px`), titre + sur-titre, bouton `tel:` marine avec pastille verte.
2. `Hero` — chip, H1 (`clamp(2.15rem,6.2vw,3.7rem)`, 2e ligne en `#0e7c96`), paragraphe,
   2 CTA (corail « Appel d'urgence » + outline « Demander un devis »), rangée de 3 stats avec filets,
   colonne visuelle (conteneur `aspect-ratio:4/5`, radius 24px) avec **la 1re image en statique**,
   dégradé bas + légende + points (statiques pour l'instant), badge flottant « Devis gratuit ».
3. `Services` — titre centré + 2 cartes (Plomberie : icône goutte 46px + 4 lignes numérotées ;
   Climatisation : icône carrée dégradée « ❄ » + 3 lignes + ligne accent pointillée).
4. `Pourquoi` — bloc pleine largeur marge latérale, radius 28px, dégradé marine, 4 cartes.
5. `Contact` — colonne gauche (titre, ligne « Jean-Christian Luvari », carte urgence corail `tel:`,
   carte coordonnées) + colonne droite = **squelette de formulaire statique** (champs, boutons segmentés,
   submit) — la logique vient en Phase 3.
6. `Footer` — fond `#0b2438`, 4 colonnes (marque, coordonnées, zone d'intervention, horaires), filet + copyright.
7. `FloatingEmergency` — bouton `tel:` fixe centré en bas, animation `pulseRing`.

Assembler le tout dans `app/page.tsx`. Utiliser les tokens Tailwind de la Phase 1.
Reprendre fidèlement textes, couleurs, tailles, espacements et ombres du prototype.

## Validation
- Comparer visuellement avec les 5 screenshots (desktop) + tester en largeur mobile.
- `npm run build` OK. Cocher la Phase 2 dans `PHASES.md`.
- Commit(s), puis **stop** : récap + demander validation & push.
