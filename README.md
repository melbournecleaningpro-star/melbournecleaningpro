# Melbourne Cleaning Pro: Website

Next.js (App Router) + TypeScript + Tailwind CSS v4. Pages: homepage (`/`), Services hub (`/services/`), About (`/about/`), Contact (`/contact/`), Privacy Policy (`/privacy-policy/`), Terms & Conditions (`/terms-and-conditions/`), Quote (`/quote/`), FAQ (`/faq/`), Service Areas (`/service-areas/`), End of Lease Cleaning (`/services/end-of-lease-cleaning/`), Commercial Cleaning (`/services/commercial-cleaning/`), Deep Cleaning (`/services/deep-cleaning/`), Office Cleaning (`/services/office-cleaning/`), Airbnb Cleaning (`/services/airbnb-cleaning/`), Move-In Cleaning (`/services/move-in-cleaning/`), Post-Construction Cleaning (`/services/post-construction-cleaning/`), Spring Cleaning (`/services/spring-cleaning/`), Window Cleaning (`/services/window-cleaning/`) and Carpet Cleaning (`/services/carpet-cleaning/`).

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
changes, update `width`/`height` in `lib/end-of-lease.ts` (`showcase`), `lib/commercial.ts`, `lib/deep-cleaning.ts`, `lib/office.ts`, `lib/airbnb.ts`, `lib/move-in.ts`, `lib/post-construction.ts`, `lib/spring-cleaning.ts`, `lib/window-cleaning.ts` or `lib/carpet-cleaning.ts` (`images`).

## Search indexing (currently OFF, pre-launch)

Every page ships with `noindex, nofollow` (meta tag + `X-Robots-Tag` header). To go live:

1. Set `NEXT_PUBLIC_ALLOW_INDEXING=true` in Cloudflare Pages environment variables.
2. Delete the `X-Robots-Tag` block at the top of `public/_headers`.
3. Rebuild and deploy.

## Contact / enquiry form

The form on `/contact/` validates in the browser and then opens the visitor's
email app with the enquiry pre-filled and addressed to the email in
`lib/site.ts`. The site is a static export with no form backend, so nothing is
sent until the visitor presses send, and the success message says so. To use a
hosted form service instead, replace `sendEnquiry` in
`components/contact/EnquiryForm.tsx` and keep any keys server-side. The phone
number is hidden on the contact page while it is still a placeholder.

## Privacy policy

`/privacy-policy/` describes the site as built: mailto-based enquiry form, no
cookies, analytics, storage or third-party scripts, self-hosted fonts, and
Cloudflare hosting. If you add analytics, a form service, embeds or any other
provider, update `components/privacy/Policy.tsx` and its `LAST_UPDATED` date.

## Quote form

`/quote/` is a five-step quote request (service, property, cleaning details,
your details, review). With no backend configured it opens the visitor's email
app with the request pre-filled, and says it's ready to send, not sent. To post
to a hosted form service instead, set `NEXT_PUBLIC_QUOTE_ENDPOINT` at build
time (see `lib/quote.ts`); the page then shows a real "sent" or "couldn't send"
result from that service. Update the privacy policy if you do. Service pages
can pre-select a service with `/quote/?service=<id>`.

## Terms & Conditions

`/terms-and-conditions/` (`components/terms/Terms.tsx`) reflects how the business works today: requests
are confirmed by agreement, the website takes no payments, and no cancellation, fee, deposit or refund
policy is set, so those sections say terms are agreed per service. When you set real policies (and your
legal entity / ABN), update those sections and `LAST_UPDATED`. Have the page reviewed before launch.

## Service areas

`/service-areas/` is one hand-written page. Its regions and suburbs come from what the business already
states (`serviceAreas` in `lib/content.ts`), shown as examples rather than boundaries. There are no
location routes; add any future suburb page manually.
