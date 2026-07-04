# Déploiement — Aqua Service (Vercel)

Guide de mise en production. **Le déploiement se fait manuellement par le propriétaire**,
une fois les informations client obtenues. Le projet est un site Next.js 16 (App Router)
détecté automatiquement par Vercel — aucune configuration de build spécifique n'est requise.

---

## 1. Variables d'environnement

À renseigner dans **Vercel → Settings → Environment Variables** (et localement dans `.env.local`).
Modèle disponible dans [`.env.example`](.env.example).

| Variable | Requis | Rôle | Exemple |
|---|---|---|---|
| `RESEND_API_KEY` | Recommandé | Clé API [Resend](https://resend.com/api-keys) pour l'envoi des emails du formulaire. **Absente → mode dégradé** (la demande est journalisée, pas d'email envoyé, réponse `200`). | `re_xxxxxxxx` |
| `CONTACT_TO_EMAIL` | Recommandé | Adresse qui **reçoit** les demandes de contact. | `contact@aqua-service.corsica` |
| `CONTACT_FROM_EMAIL` | Optionnel | Expéditeur des emails. **Doit être un domaine vérifié dans Resend.** Défaut : `Aqua Service <onboarding@resend.dev>` (domaine de test Resend). | `Aqua Service <contact@aqua-service.corsica>` |
| `NEXT_PUBLIC_SITE_URL` | Recommandé | URL de production (sans slash final). Utilisée par `metadataBase`, le sitemap, `robots.txt` et les données structurées SEO. **Pour un premier déploiement, mettre l'URL `.vercel.app` fournie par Vercel.** | `https://aqua-service.vercel.app` |

> Sans aucune variable, le site fonctionne quand même : le formulaire passe en **mode dégradé**
> et le SEO utilise l'URL par défaut `https://aqua-service.corsica`.

---

## 2. Étapes Vercel (première mise en ligne)

1. **Pousser le code sur GitHub** : `git push` (dépôt déjà initialisé).
2. Sur [vercel.com](https://vercel.com) → **Add New… → Project**.
3. **Importer** le dépôt GitHub `AquaService-plomberie`.
4. Vercel détecte **Next.js** automatiquement (Framework Preset = Next.js, build `next build`). Ne rien changer.
5. Déplier **Environment Variables** et saisir les variables du tableau ci-dessus
   (au minimum `RESEND_API_KEY` + `CONTACT_TO_EMAIL` pour un formulaire fonctionnel).
6. **Deploy**. À la fin, Vercel fournit une URL `https://<projet>.vercel.app`.
7. Copier cette URL dans `NEXT_PUBLIC_SITE_URL` (Settings → Environment Variables)
   puis **redéployer** (Deployments → … → Redeploy) pour que le SEO pointe sur la bonne URL.

> **Cible actuelle : l'URL `.vercel.app` par défaut.** Le branchement d'un domaine
> personnalisé (`aqua-service.corsica` / `.fr`) se fera plus tard via Settings → Domains.

---

## 3. Configurer Resend (pour recevoir les emails)

1. Créer un compte sur [resend.com](https://resend.com).
2. Générer une **API key** → la mettre dans `RESEND_API_KEY`.
3. Pour envoyer depuis votre propre adresse : **vérifier le domaine** dans Resend
   (ajout d'enregistrements DNS), puis renseigner `CONTACT_FROM_EMAIL`.
   Sans domaine vérifié, laisser l'expéditeur par défaut `onboarding@resend.dev`.
4. Tester le formulaire en ligne : une soumission doit arriver sur `CONTACT_TO_EMAIL`.

---

## 4. Checklist avant/après mise en ligne

**Contenu à confirmer avec le client (placeholders actuels) :**
- [ ] Numéro de téléphone définitif (provisoire : `06 42 31 43 77`) — dans `lib/site.ts`.
- [ ] Email affiché et email destinataire.
- [ ] Stats du hero (« < 1h », « 15 ans » — indicatives).
- [ ] Liste des communes desservies et horaires — dans `lib/site.ts` / `Footer.tsx`.
- [ ] **Mentions légales** : compléter les champs `[entre crochets]` dans
      `app/mentions-legales/page.tsx` (raison sociale, SIRET, RCS/RM, assurance décennale,
      directeur de publication).
- [ ] **Photos** : remplacer les 4 visuels Unsplash temporaires (`lib/slides.ts`)
      par les vraies photos de chantiers.

**Technique (déjà en place) :**
- [x] `npm run build` propre, `npm run lint` OK, aucune erreur TypeScript.
- [x] `next.config.ts` : domaine d'images `images.unsplash.com` autorisé.
- [x] Métadonnées, JSON-LD `LocalBusiness`, `sitemap.xml`, `robots.txt`.

**Après le déploiement (recommandé) :**
- [ ] Vérifier le formulaire en conditions réelles (email bien reçu).
- [ ] Passer un audit **Lighthouse** (perf / SEO / accessibilité) sur l'URL de prod.
- [ ] Soumettre le `sitemap.xml` dans Google Search Console.
