---
description: Phase 6 — Préparation au déploiement Vercel (build propre, vérif finale, doc des variables d'env).
---

# Phase 6 — Préparation déploiement

Objectif : rendre le projet prêt à déployer sur Vercel. **Le déploiement lui-même se fait en
dernier, avec le propriétaire** — ne pas déployer sans validation.

## Tâches
1. `npm run build` **propre**, `npm run lint` OK, aucune erreur TypeScript.
2. Vérification finale vs `docs/screenshots/` (desktop) + rendu mobile.
3. Vérifier `.env.example` et documenter dans le `README.md` les variables à renseigner sur Vercel
   (`RESEND_API_KEY`, `CONTACT_TO_EMAIL`).
4. Vérifier `next.config` (domaines d'images, etc.) et les métadonnées de prod.
5. Récapitulatif des étapes Vercel (Add New Project → importer le dépôt → variables d'env → Deploy).
   Cible : **URL `.vercel.app` par défaut** (pas de domaine personnalisé pour l'instant).

## Validation
- Build de prod OK et checklist déploiement prête.
- Cocher la Phase 6 dans `PHASES.md`.
- Commit(s), puis **stop** : prévenir le propriétaire que tout est prêt pour le déploiement Vercel.
