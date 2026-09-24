# Melbourne Cleaning Pro: Website

Next.js (App Router) + TypeScript + Tailwind CSS v4. Pages: homepage (`/`), End of Lease Cleaning (`/services/end-of-lease-cleaning/`), Commercial Cleaning (`/services/commercial-cleaning/`), Deep Cleaning (`/services/deep-cleaning/`), Office Cleaning (`/services/office-cleaning/`), Airbnb Cleaning (`/services/airbnb-cleaning/`), Move-In Cleaning (`/services/move-in-cleaning/`), Post-Construction Cleaning (`/services/post-construction-cleaning/`) and Spring Cleaning (`/services/spring-cleaning/`).

## Scripts

```bash
npm run dev        # local dev server
npm run build      # static export to /out
npm run typecheck  # TypeScript check
npm run icons      # regenerate favicon, apple icon, OG/Twitter images from the logo mark
npm run images     # render scripts/art/*.svg illustrations to WebP in public/images
```

## Before launch: replace placeholders

All business details live in `lib/site.ts`:

- `name`: brand name (also update `NAME` in `scripts/generate-icons.mjs`, then run `npm run icons`)
- `contact.phone` / `contact.email`: set real values and `isPlaceholder: false` (they then appear in JSON-LD)
- `social`: add profile URLs (empty entries render as non-link placeholders)
- `NEXT_PUBLIC_SITE_URL`: canonical domain (set as a Cloudflare env var)

## Adding future pages

Links to pages that don't exist yet fall back to on-page anchors via `routeHref()`.
When you build a page (e.g. `/services/house-cleaning/`, with trailing slash), add its path to `LIVE_ROUTES`
in `lib/site.ts` and to `app/sitemap.ts`, and every link to it updates automatically.

## Deploying to Cloudflare Pages

- Build command: `npm run build`
- Output directory: `out`
- Env var: `NEXT_PUBLIC_SITE_URL=https://melbournecleaningpro.com`

`public/_headers` sets cache and security headers. If you later need server features
(e.g. a quote form API), switch to `@opennextjs/cloudflare`.

## Replacing illustrations with real photos

Page images live in `public/images` (e.g. `end-of-lease-cleaning-melbourne.webp`).
Replace them with genuine job photos of the same filename. If the aspect ratio
changes, update `width`/`height` in `lib/end-of-lease.ts` (`showcase`), `lib/commercial.ts`, `lib/deep-cleaning.ts`, `lib/office.ts`, `lib/airbnb.ts`, `lib/move-in.ts`, `lib/post-construction.ts` or `lib/spring-cleaning.ts` (`images`).

## Search indexing (currently OFF, pre-launch)

Every page ships with `noindex, nofollow` (meta tag + `X-Robots-Tag` header). To go live:

1. Set `NEXT_PUBLIC_ALLOW_INDEXING=true` in Cloudflare Pages environment variables.
2. Delete the `X-Robots-Tag` block at the top of `public/_headers`.
3. Rebuild and deploy.
