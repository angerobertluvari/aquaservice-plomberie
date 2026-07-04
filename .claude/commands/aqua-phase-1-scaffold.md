---
description: Phase 1 — Scaffold Next.js (App Router, TS, Tailwind), fonts et design tokens.
---

# Phase 1 — Scaffold

Objectif : mettre en place le socle Next.js prêt à recevoir les sections. Réfère-toi à
`docs/design-handoff.md` (section « Design tokens ») pour les valeurs exactes.

## Tâches
1. Scaffolder Next.js **dans le dépôt existant** (App Router, TypeScript, Tailwind, ESLint, alias `@/*`).
   Le dossier n'est pas vide : `docs/`, `.git/`, `.claude/`, `README.md`, `PHASES.md`, `.gitignore` existent.
   Utilise `create-next-app` en gérant les conflits éventuels (scaffolder dans un dossier temporaire puis
   fusionner si nécessaire ; **ne pas écraser** `README.md`, `.gitignore`, `docs/`, `PHASES.md`, `.claude/`).
   Choix : App Router, `src/`? → non (garder `app/` à la racine), `next/image`.
2. Configurer les fonts via `next/font/google` : `Bricolage Grotesque` (500–800) pour les titres,
   `Manrope` (400–700) pour le texte. Exposer en variables CSS.
3. Mapper les **design tokens** dans `tailwind.config.ts` : couleurs (ink `#0f2e46`, aqua `#16a3b8`,
   aqua profond `#0e7c96`, corail `#f0603a`, corail profond `#d94a28`, vert `#1a9e6f`, sable `#e9b872`,
   marine `#0b2438`, accents…), radius (11–14 / 16–22 / 24–28 / 999px), ombres personnalisées, fontFamily.
4. `app/layout.tsx` : `<html lang="fr">`, fonts, metadata de base, `scroll-behavior: smooth`.
5. `app/globals.css` : reset minimal, `box-sizing`, body (Manrope, couleur ink, antialiased, line-height 1.5),
   `h1,h2,h3` (Bricolage, line-height 1.08, letter-spacing -0.01em), keyframes `pulseRing`.
6. `app/page.tsx` : page vide avec un placeholder (les sections viennent en Phase 2).
7. Créer `.env.example` (`RESEND_API_KEY`, `CONTACT_TO_EMAIL`).

## Validation
- `npm run build` réussit, `npm run dev` sert la page.
- Cocher les cases de la Phase 1 dans `PHASES.md`.
- Commit(s), puis **stop** : récap + demander validation & push.
