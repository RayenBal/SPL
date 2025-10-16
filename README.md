# Société Le Poids Lourd – Site Next.js

Site vitrine professionnel construit avec Next.js 15 (App Router), React 18, TypeScript et Tailwind CSS.

## Stack
- Next.js 15 (App Router) + React 18 + TypeScript
- Tailwind CSS 4
- Framer Motion (animations)
- React Icons
- EmailJS (formulaire de contact)

## Démarrage local
```bash
npm install
npm run dev
# http://localhost:3000
```

## Variables d’environnement
Copiez ces variables (EmailJS) puis renseignez-les:
```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=
```

Sur Vercel, ajoutez-les dans Project Settings → Environment Variables.

## Build & déploiement
```bash
npm run build
npm start
```
Déploiement recommandé: Vercel (import du repo → Build Command: `npm run build`).

## SEO
- Metadata API (layout + pages)
- Open Graph dynamique pour chaque service
- JSON-LD (Organization global, Service + Breadcrumb par service, WebSite + SearchAction)

## Structure
- `app/(site)/page.tsx`: Accueil
- `app/services/page.tsx` et `app/services/[slug]`: Services
- `app/a-propos/page.tsx`: À propos
- `app/realisations/page.tsx`: Réalisations
- `app/contact/page.tsx`: Contact (EmailJS)
- `app/not-found.tsx`, `app/error.tsx`: UIs d’erreur

## Personnalisation
- Remplacez les images de `/public/` (logo, hero, services, galerie)
- Mettez à jour les témoignages et les données des services dans `data/`

## Licence
Propriété de Société Le Poids Lourd.

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
