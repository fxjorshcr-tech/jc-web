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
| `src/components` | UI (`ui/`), site chrome (`site/`), forms, booking, blog (`blog/`: body, card, FAQ, author box) |
| `src/data` | All content: `tours.ts`, `posts.ts`, `testimonials.ts`, `faq.ts`, `photos.ts`, `content.ts`, `site.ts` |
| `src/lib` | Validation schemas, Supabase admin client, mailer, email templates, booking code generator |
| `supabase/schema.sql` | Database schema (run once in the Supabase SQL editor) |
| `public/images` | Photos. See `public/images/README.md` for the full list of expected files |
| `docs/jcsjourneys-contenido.md` | Content rescued from the previous WordPress site |

## Photos

Every image on the site is rendered through the `Photo` component. While a file is missing it shows a placeholder, labelled with the expected path in development only (visitors never see a file name); drop the file into `public/images/<path>` and redeploy, no code change needed.

Still missing: `badges/travelers-against-plastic.png` (an icon stands in) and the three `community/*.jpg` photos (bird photos from our tours stand in; see `community.images` in `src/data/content.ts`).

## Blog

Posts live in `src/data/posts.ts`. Each post has a `quickAnswer` (shown first and marked speakable), `keyFacts`, body `blocks`
(paragraphs, headings, lists, tables, callouts, images) and an `faq` list. The page emits BlogPosting, FAQPage and BreadcrumbList
JSON-LD from that data, so new posts only need content. Update `updated` when you revise a post.

## Contact

Email and WhatsApp live in `src/data/site.ts` (`site.email`, `site.whatsapp`). The floating WhatsApp button, footer, CTA bands,
FAQ, tour pages and structured data all read from there.

## Booking flow

1. Guest submits the form on a tour page (`/tours/<slug>#book`).
2. Server action validates with zod, generates a `JCJ-XXXXXX` code and inserts a `pending` row in `bookings`.
3. Resend sends a confirmation to the guest and a notification to every address in `BOOKINGS_NOTIFY_EMAIL`.
4. The guest sees a "Message sent" dialog with the booking code; the same confirmation stays on the page behind it.
5. You contact the guest with the price and payment details and confirm the hotel pickup and time. Update `status`, `quoted_price_usd` and `payment_link` in Supabase as you go.

The request counts as received when it is stored in Supabase **or** the notification email went out, so an outage of one never loses a booking. The Hire a Guide form works the same way, without a code.

The site never charges money.

## Email (Resend)

All mail goes through `src/lib/mailer.ts`; the templates are in `src/lib/emails.ts`.

The templates are table-based with inline styles, as email clients require. Their images are served by the site: the logo is `public/images/email/logo.png` and each tour's banner is `public/images/email/tours/<slug>.jpg` (1200x520, cropped from the tour's `hero.jpg`). A new tour gets a banner once its file is added there and its slug is listed in `EMAIL_BANNERS`; without one the email simply has no photo.

| Variable | What |
| --- | --- |
| `RESEND_API_KEY` | API key from Resend. Server-only. |
| `RESEND_FROM_EMAIL` | Sender, e.g. `JC's Journeys <bookings@jcsjourneys.com>`. Its domain must be verified in Resend. |
| `BOOKINGS_NOTIFY_EMAIL` | Inboxes that get every request. One address or several separated by commas. |
| `BOOKINGS_REPLY_TO_EMAIL` | Optional. Where a guest's reply to their confirmation goes. Defaults to `BOOKINGS_NOTIFY_EMAIL`. |

Set them in Vercel (Project -> Settings -> Environment Variables) and redeploy. Never commit real values.

- **Notification** (to you): reply-to is the guest, so hitting Reply writes straight to them.
- **Confirmation** (to the guest): reply-to is your inbox, because the from address only sends.

Going live:

1. In Resend, add the domain (Domains -> Add domain) and create the DNS records it shows. They sit on `send.` and `resend._domainkey.`, so they do not touch the mailbox provider's MX records on the root domain.
2. Once the domain shows as verified, set `RESEND_FROM_EMAIL` to an address on it.
3. Add the new mailbox to `BOOKINGS_NOTIFY_EMAIL`.

Before the domain is verified, set `RESEND_FROM_EMAIL="JC's Journeys <onboarding@resend.dev>"`. In that mode Resend only delivers to the address that owns the Resend account: put that single address in `BOOKINGS_NOTIFY_EMAIL` and notifications arrive, while guest confirmations are rejected until step 2 (the forms still succeed and say so honestly).
