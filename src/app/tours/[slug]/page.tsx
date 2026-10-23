import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Baby, CalendarDays, Check, MapPin, Package, StickyNote } from "lucide-react";
import { BookingForm } from "@/components/booking/booking-form";
import { Photo } from "@/components/photo";
import { Button } from "@/components/ui/button";
import { Gallery } from "@/components/site/gallery";
import { JsonLd } from "@/components/site/json-ld";
import { booking } from "@/data/content";
import { site } from "@/data/site";
import { commonTourNotes, getTour, tours } from "@/data/tours";

interface Params {
  slug: string;
}

export function generateStaticParams(): Params[] {
  return tours.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const tour = getTour(slug);
  if (!tour) return {};
  const description = `${tour.summary} ${tour.when} Request a quote.`.slice(0, 300);
  return {
    title: tour.name,
    description,
    alternates: { canonical: `/tours/${tour.slug}` },
    openGraph: {
      title: `${tour.name} | ${site.name}`,
      description,
      url: `/tours/${tour.slug}`,
      type: "website",
      images: [{ url: `/images/${tour.hero.src}`, alt: tour.hero.alt }],
    },
  };
}

function FactBlock({ icon: Icon, title, children }: { icon: React.ElementType; title: string; children: React.ReactNode }) {
  return (
    <div className="border-t border-border/70 py-5 first:border-t-0 first:pt-0">
      <h3 className="flex items-center gap-2 font-sans text-xs font-semibold uppercase tracking-[0.16em] text-olive-700">
        <Icon className="size-4" strokeWidth={1.75} /> {title}
      </h3>
      <div className="mt-2.5 text-[0.95rem] leading-relaxed text-ink">{children}</div>
    </div>
  );
}

export default async function TourPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const tour = getTour(slug);
  if (!tour) notFound();
  const index = tours.findIndex((t) => t.slug === tour.slug);
  const notes = [...tour.notes, ...commonTourNotes];

  const touristTrip = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: tour.name,
    description: tour.description.filter((p) => !p.startsWith("TODO")).join(" "),
    url: `${site.url}/tours/${tour.slug}`,
    image: `${site.url}/images/${tour.hero.src}`,
    touristType: tour.suitableForSmallChildren ? ["Nature lovers", "Families"] : ["Nature lovers"],
    itinerary: {
      "@type": "ItemList",
      itemListElement: [{ "@type": "ListItem", position: 1, item: { "@type": "TouristDestination", name: tour.where } }],
    },
    provider: { "@id": `${site.url}/#business`, "@type": ["LocalBusiness", "TravelAgency"], name: site.name, url: site.url, email: site.email },
    offers: {
      "@type": "Offer",
      url: `${site.url}/tours/${tour.slug}#book`,
      availability: "https://schema.org/InStock",
      priceCurrency: "USD",
      description: "Price on request. Quotes depend on pickup location and group size.",
    },
    ...(tour.duration ? { duration: tour.duration } : {}),
  };

  return (
    <>
      <JsonLd data={touristTrip} />

      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-moss text-cream">
        <div className="relative aspect-[4/5] sm:aspect-[16/9] lg:aspect-[21/9]">
          <Photo src={tour.hero.src} alt={tour.hero.alt} priority sizes="100vw" align="top" />
          <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/30 to-transparent" />
        </div>
        <div className="container-site absolute inset-x-0 bottom-0 pb-10 sm:pb-14">
          <p className="eyebrow !text-olive-200">
            Tour {String(index + 1).padStart(2, "0")} · {tour.where}
          </p>
          <h1 className="mt-3 max-w-3xl text-4xl text-cream sm:text-5xl lg:text-6xl">{tour.name}</h1>
          <p className="mt-3 max-w-2xl font-serif text-lg text-gold-300 sm:text-xl">{tour.tagline}</p>
        </div>
      </section>

      {/* Body */}
      <section className="container-site grid gap-12 py-14 lg:grid-cols-12 sm:py-20">
        <div className="lg:col-span-7">
          <div className="prose-site text-lg">
            {tour.description.map((p, i) => (
              <p key={i} className={p.startsWith("TODO") ? "rounded-md border border-dashed border-earth/60 bg-sand/40 px-4 py-3 font-mono text-sm text-earth-deep" : undefined}>
                {p}
              </p>
            ))}
          </div>

          {tour.video && (
            <div className="mt-10 overflow-hidden rounded-xl bg-ink">
              <iframe
                src={tour.video.embedUrl}
                title={tour.video.title}
                className="aspect-video w-full"
                loading="lazy"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
              />
            </div>
          )}

          <div className="mt-14">
            <p className="eyebrow">Gallery</p>
            <h2 className="mt-2 text-2xl text-ink sm:text-3xl">Moments from this journey</h2>
            <Gallery images={tour.gallery} className="mt-6" />
          </div>
        </div>

        <aside className="lg:col-span-5 lg:col-start-8">
          <div className="rounded-xl border border-border/70 bg-card p-6 sm:p-8 lg:sticky lg:top-24">
            <FactBlock icon={CalendarDays} title="When">
              {tour.when}
            </FactBlock>
            <FactBlock icon={MapPin} title="Where">
              {tour.where}
            </FactBlock>
            <FactBlock icon={Check} title="What's included">
              <ul className="grid grid-cols-1 gap-1.5 sm:grid-cols-2">
                {tour.whatsIncluded.map((item) => (
                  <li key={item} className="flex gap-2">
                    <Check className="mt-1 size-3.5 shrink-0 text-olive-600" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </FactBlock>
            <FactBlock icon={Package} title="What to bring">
              <ul className="flex flex-wrap gap-2">
                {tour.whatToBring.map((item) => (
                  <li key={item} className="rounded-full border border-border bg-cream px-3 py-1 text-sm">
                    {item}
                  </li>
                ))}
              </ul>
            </FactBlock>
            <FactBlock icon={Baby} title="Children">
              {tour.suitableForSmallChildren
                ? "Suitable for all ages, with easy walking."
                : "Not recommended for small children. See the notes below."}
            </FactBlock>
            <FactBlock icon={StickyNote} title="Notes">
              <ul className="space-y-2 text-sm text-ink-soft">
                {notes.map((n) => (
                  <li key={n} className="flex gap-2">
                    <span className="text-olive-600">*</span>
                    <span>{n}</span>
                  </li>
                ))}
              </ul>
            </FactBlock>
            <div className="mt-6 rounded-lg bg-olive-100 p-5">
              <p className="eyebrow">Price</p>
              <p className="mt-1 font-serif text-2xl text-ink">Request a quote</p>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                We reply within 24 hours with availability and your price. A secure payment link follows once your date is confirmed.
              </p>
              <Button asChild size="lg" className="mt-4 w-full">
                <a href="#book">Request this tour</a>
              </Button>
            </div>
          </div>
        </aside>
      </section>

      {/* Booking */}
      <section id="book" className="scroll-mt-24 border-t border-border/70 bg-cream-deep/50">
        <div className="container-site grid gap-10 py-16 lg:grid-cols-12 sm:py-24">
          <div className="lg:col-span-4">
            <p className="eyebrow">Make a reservation</p>
            <h2 className="mt-3 text-3xl text-ink sm:text-4xl">Request {tour.shortName}</h2>
            <p className="prose-site mt-5">{booking.intro}</p>
            <p className="mt-6 text-sm text-ink-soft">
              Prefer email? Write to{" "}
              <a href={`mailto:${site.email}`} className="font-semibold text-olive-800 underline-offset-4 hover:underline">
                {site.email}
              </a>
              . Looking at other dates or tours?{" "}
              <Link href="/tours" className="underline underline-offset-4">
                See all tours
              </Link>
              .
            </p>
          </div>
          <div className="rounded-xl border border-border/70 bg-card p-6 sm:p-8 lg:col-span-8">
            <BookingForm tours={tours.map((t) => ({ slug: t.slug, name: t.name }))} defaultTourSlug={tour.slug} />
          </div>
        </div>
      </section>
    </>
  );
}
