# Site Performance Transmission

Next.js 16 + Payload CMS 3 + Postgres. Le site est rendu côté serveur (SEO), le blog et les demandes de contact se gèrent dans `/admin`.

## Ce qui se modifie où

| Quoi | Où |
|---|---|
| Articles du blog, catégories, images | `/admin` (sans toucher au code) |
| Demandes reçues par le formulaire | `/admin` > Demandes de contact |
| Téléphone, email, adresse, numéro IDE | `src/lib/site.ts` |
| Textes des pages services + FAQ | `src/lib/services.ts` |
| Photos des pages | `src/lib/images.ts` |
| Page d'accueil | `src/app/(frontend)/page.tsx` |

## Déploiement sur Railway

1. Créer un projet Railway depuis ce dépôt GitHub.
2. Ajouter un service **Postgres** dans le même projet.
3. Sur le service du site, ajouter un **volume** monté sur `/data`.
4. Variables du service du site :
   - `DATABASE_URL` = `${{Postgres.DATABASE_URL}}`
   - `PAYLOAD_SECRET` = une longue chaîne aléatoire
   - `NEXT_PUBLIC_SITE_URL` = `https://performancetransmission.ch`
   - `MEDIA_DIR` = `/data/media`
   - `ALLOW_INDEXING` = `false` (pour l'instant)
5. Déployer. Les tables se créent automatiquement au premier chargement.
6. Ouvrir `https://<url-railway>/admin` et créer le premier compte administrateur.

## Mise en ligne sur le domaine

1. Railway > Settings > Networking > Custom Domain : ajouter `performancetransmission.ch` (et `www`).
2. Chez le registrar du domaine : créer les enregistrements DNS indiqués par Railway.
3. Une fois le domaine actif : passer `ALLOW_INDEXING` à `true`. Ça active l'indexation Google et redirige en 301 toute autre adresse (URL Railway, www) vers le domaine.
4. Google Search Console : ajouter le domaine et soumettre `https://performancetransmission.ch/sitemap.xml`.
5. Couper ou passer en privé l'ancien site Emergent (`tax-booking-1.preview.emergentagent.com`).

## Notification email (facultatif)

Renseigner `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`. Chaque demande de contact envoie alors un email à `CONTACT_TO`. Sans SMTP, les demandes restent consultables dans l'admin.

## Modifier la structure de la base

Après tout changement d'un fichier dans `src/collections/` : `npm run migrate:create -- nom-du-changement`, puis committer le dossier `src/migrations`.

## En local

```
cp .env.example .env   # remplir DATABASE_URL et PAYLOAD_SECRET
npm install
npm run migrate
npm run dev
```
