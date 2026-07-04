---
description: Phase 4 — Route API /api/contact avec Resend (mode dégradé sans clé) et branchement du formulaire.
---

# Phase 4 — API contact / email

Objectif : brancher réellement le formulaire à un backend d'envoi d'email.

## Tâches
1. `app/api/contact/route.ts` (Route Handler POST) :
   - Valider le payload avec **Zod** côté serveur (mêmes règles que le client).
   - Composer un email récapitulatif (type de demande, nom, téléphone, email, message).
   - Envoyer via **Resend** (`RESEND_API_KEY`, destinataire `CONTACT_TO_EMAIL`).
   - **Mode dégradé** : si `RESEND_API_KEY` est absente, ne pas échouer — journaliser la demande
     côté serveur et répondre `200` (pratique en local / avant configuration).
   - Gérer les erreurs (400 validation, 500 envoi) avec messages JSON clairs.
2. Brancher le formulaire (Phase 3) : POST vers `/api/contact`, gestion `loading`/`success`/`error`,
   affichage du bandeau succès sur réponse OK, message d'erreur sinon.
3. Installer `resend`. Documenter les variables dans `.env.example` et le `README.md`.

## Validation
- Test local sans clé (mode dégradé) : soumission → succès, demande journalisée.
- `npm run build` OK. Cocher la Phase 4 dans `PHASES.md`.
- Commit(s), puis **stop** : récap + demander validation & push.
