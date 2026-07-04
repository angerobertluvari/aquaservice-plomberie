# Aqua Service — Site vitrine

Site vitrine one-page pour **Aqua Service**, entreprise de plomberie & climatisation en
Corse-du-Sud (artisan : Jean-Christian Luvari). Objectifs : générer des demandes de devis
et faciliter les appels d'urgence. Conception **mobile-first**.

## Stack

- **Next.js 14+** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Google Fonts** via `next/font` — Bricolage Grotesque (titres) + Manrope (texte)
- Formulaire : **React Hook Form** + **Zod**, envoi via une Route Handler `/api/contact` (**Resend**)
- Déploiement : **Vercel**

## Développement

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build de production
npm run lint
```

## Variables d'environnement

Copier `.env.example` vers `.env.local` :

```
RESEND_API_KEY=re_xxx          # clé API Resend (formulaire de contact)
CONTACT_TO_EMAIL=...           # email destinataire des demandes
```

En l'absence de `RESEND_API_KEY`, le formulaire fonctionne en mode dégradé
(la demande est journalisée côté serveur, pas d'envoi réel) — pratique en local.

## Structure

- `app/` — App Router (layout, page, route API)
- `components/` — composants React des sections
- `docs/` — **référence de design** (ne pas modifier) : prototype HTML, screenshots, handoff
- `PHASES.md` — feuille de route et suivi d'avancement

## Design de référence

Le design source est dans `docs/` :
- `docs/design-handoff.md` — spécification complète (tokens, layout, interactions)
- `docs/Aqua Service.dc.html` — prototype HTML de référence
- `docs/screenshots/` — captures desktop à reproduire au pixel près

Le site est recréé **fidèlement** en composants React ; le HTML n'est pas copié tel quel.
