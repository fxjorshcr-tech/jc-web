# JC's Journeys – website

Nature and culture tours in Montezuma, Costa Rica. Next.js 15 (App Router), TypeScript, Tailwind CSS v4, shadcn/ui-style components, Supabase, Resend, zod + react-hook-form, lucide-react. Deployed on Vercel.

## Run locally

```bash
npm install
cp .env.example .env.local   # fill in the values
npm run dev
```

`npm run build` must pass before deploying. `npm run lint` runs ESLint.

## Where things live

| Path | What |
| --- | --- |
| `src/app` | Routes (one folder per page), `sitemap.ts`, `robots.ts`, server actions in `src/app/actions` |
| `src/components` | UI (`ui/`), site chrome (`site/`), forms, booking, blog |
| `src/data` | All content: `tours.ts`, `posts.ts`, `testimonials.ts`, `faq.ts`, `recommendations.ts`, `photos.ts`, `content.ts`, `site.ts` |
| `src/lib` | Validation schemas, Supabase admin client, mailer, email templates, booking code generator |
| `supabase/schema.sql` | Database schema (run once in the Supabase SQL editor) |
| `public/images` | Photos. See `public/images/README.md` for the full list of expected files |
| `docs/jcsjourneys-contenido.md` | Content rescued from the previous WordPress site |

## Photos

Every image on the site is rendered through the `Photo` component. While a file is missing it shows a labelled placeholder with the expected path; drop the file into `public/images/<path>` and redeploy, no code change needed.

## Booking flow

1. Guest submits the form on a tour page (`/tours/<slug>#book`).
2. Server action validates with zod, generates a `JCJ-XXXXXX` code, inserts a `pending` row in `bookings`.
3. Resend sends a confirmation to the guest and a notification to `BOOKINGS_NOTIFY_EMAIL`.
4. You confirm availability and send the payment link by hand. Update `status`, `quoted_price_usd` and `payment_link` in Supabase as you go.

The site never charges money.
