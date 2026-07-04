---
description: Phase 3 — Interactivité (carrousel hero auto, toggle Devis/Urgence, formulaire React Hook Form + Zod).
---

# Phase 3 — Interactivité

Objectif : rendre le site interactif. Comportements décrits dans `docs/design-handoff.md`
(« Interactions & comportement ») et implémentés dans `docs/Aqua Service.dc.html`.

## Tâches
1. **Carrousel hero** (`"use client"`) :
   - 4 images empilées en absolu, `transition: opacity 1.1s ease`, seule l'active en `opacity:1`.
   - `useState(slide)` + `useEffect` avec `setInterval` **4,5 s** (boucle modulo), nettoyage au démontage.
   - Points de navigation bas-droite : actif = barre `22×7px` blanche, inactif = point `7×7px` translucide.
     Clic → va à la slide **et réarme le timer**. Légende bas-gauche qui suit la slide active.
   - Utiliser `next/image` (`fill`, `object-cover`), `priority` sur la 1re. IDs Unsplash du proto
     (voir handoff « Assets »). Ajouter le domaine `images.unsplash.com` dans `next.config`.
2. **Toggle Devis/Urgence** : état `type: 'devis' | 'urgence'`, styles actifs
   (`#16a3b8` pour Devis, `#f0603a` pour Urgence), inactif fond `#fbfdfe`/bordure `#d6e6ec`.
3. **Formulaire** (`"use client"`) : **React Hook Form + Zod**.
   - Champs : Nom* (requis), Téléphone* (requis), Email (optionnel, format email), Message. Type de demande.
   - États `loading` / `success` / `error`. Bandeau succès (fond `#eafaf3`) affiché après envoi.
   - À ce stade, le submit peut simuler l'envoi (résolu en Phase 4 avec l'API). Garder la validation Zod.

## Validation
- Carrousel défile et réagit au clic ; formulaire valide et affiche le bandeau succès.
- `npm run build` OK. Cocher la Phase 3 dans `PHASES.md`.
- Commit(s), puis **stop** : récap + demander validation & push.
