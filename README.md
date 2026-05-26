# Logicform Solutions Website

Premium engineering systems homepage built with Next.js 15, TypeScript, Tailwind CSS v4, and Framer Motion.

## Stack

- Next.js 15 App Router
- TypeScript
- Tailwind CSS v4
- Framer Motion

## Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production Checks

```bash
npm run lint
npm run build
```

## SEO Routes

- `/sitemap.xml` via `app/sitemap.ts`
- `/robots.txt` via `app/robots.ts`
- `/manifest.webmanifest` via `app/manifest.ts`

## Deployment

Deploy on Vercel or any Node-compatible platform:

```bash
npm run build
npm run start
```
