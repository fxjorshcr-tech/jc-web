import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Baby, CalendarDays, Check, Clock, MapPin } from "lucide-react";
import { BookingForm } from "@/components/booking/booking-form";
import { Photo } from "@/components/photo";
import { Button } from "@/components/ui/button";
import { Gallery } from "@/components/site/gallery";
import { JsonLd } from "@/components/site/json-ld";
import { TripadvisorBadge } from "@/components/site/tripadvisor-badge";
import { WhatsAppIcon } from "@/components/site/whatsapp-icon";
import { booking } from "@/data/content";
import { site } from "@/data/site";
import { whatsappUrl } from "@/lib/whatsapp";
import { commonTourNotes, getTour, tours } from "@/data/tours";
import { getTourGallery } from "@/lib/tour-photos";
import { cn } from "@/lib/utils";

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

/** "PT5H30M" -> "About 5½ hours". */
function formatDuration(iso: string) {
  const m = /PT(?:(\d+)H)?(?:(\d+)M)?/.exec(iso);
  if (!m) return iso;
  const h = Number(m[1] ?? 0);
  const min = Number(m[2] ?? 0);
  if (h === 0) return `About ${min} minutes`;
  const half = min >= 30 ? "½" : "";
  return `About ${h}${half} hour${h > 1 || half ? "s" : ""}`;
}

export default async function TourPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const tour = getTour(slug);
  if (!tour) notFound();
  const index = tours.findIndex((t) => t.slug === tour.slug);
  const notes = [...tour.notes, ...commonTourNotes];
  const { photos } = getTourGallery(tour);
  const glance = [
    { icon: CalendarDays, label: "When", value: tour.when },
    { icon: MapPin, label: "Where", value: tour.where },
    { icon: Clock, label: "Duration", value: tour.duration ? formatDuration(tour.duration) : "Ask us" },
    { icon: Baby, label: "Children", value: tour.suitableForSmallChildren ? "Suitable for all ages" : "Not for small children" },
  ];

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
    provider: {
      "@id": `${site.url}/#business`,
      "@type": ["LocalBusiness", "TravelAgency"],
      name: site.name,
      url: site.url,
      email: site.email,
      telephone: site.whatsapp.international,
    },
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
            <Gallery images={photos} className="mt-6" />
          </div>
        </div>

        <aside className="lg:col-span-5 lg:col-start-8">
          <div className="lg:sticky lg:top-24">
            <div className="overflow-hidden rounded-xl border border-border/70 bg-card">
              {/* At a glance */}
              <dl className="grid grid-cols-2">
                {glance.map((g, i) => (
                  <div key={g.label} className={cn("border-b border-border/70 p-5", i % 2 === 0 && "border-r")}>
                    <dt className="flex items-center gap-1.5 font-sans text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-olive-700">
                      <g.icon className="size-3.5" strokeWidth={1.75} /> {g.label}
                    </dt>
                    <dd className="mt-1.5 text-[0.92rem] leading-snug text-ink">{g.value}</dd>
                  </div>
                ))}
              </dl>

              <div className="space-y-7 border-t border-border/70 p-6 sm:p-7">
                <div>
                  <h3 className="font-sans text-xs font-semibold uppercase tracking-[0.16em] text-olive-700">What&rsquo;s included</h3>
                  <ul className="mt-3 grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-2">
                    {tour.whatsIncluded.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-[0.95rem] text-ink">
                        <Check className="mt-1 size-4 shrink-0 text-olive-600" strokeWidth={2.25} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-sans text-xs font-semibold uppercase tracking-[0.16em] text-olive-700">What to bring</h3>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {tour.whatToBring.map((item) => (
                      <li key={item} className="rounded-full border border-border bg-cream px-3 py-1 text-sm text-ink">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                {notes.length > 0 && (
                  <div>
                    <h3 className="font-sans text-xs font-semibold uppercase tracking-[0.16em] text-olive-700">Good to know</h3>
                    <ul className="mt-3 space-y-2.5">
                      {notes.map((n) => (
                        <li key={n} className="flex gap-2.5 text-sm leading-relaxed text-ink-soft">
                          <span aria-hidden className="mt-[0.45rem] size-1.5 shrink-0 rounded-full bg-olive-400" />
                          <span>{n}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Price / CTA */}
              <div className="border-t border-border/70 bg-olive-100 p-6 sm:p-7">
                <div className="flex items-baseline justify-between gap-4">
                  <p className="eyebrow">Price</p>
                  <p className="font-serif text-xl text-ink">On request</p>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                  Quotes depend on pickup location and group size. We reply within 24 hours with availability and your price; a secure payment link follows once your date is confirmed.
                </p>
                <Button asChild size="lg" className="mt-4 w-full">
                  <a href="#book">Request this tour</a>
                </Button>
                <a
                  href={whatsappUrl(`Hi JC, I'd like to request the ${tour.name}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-md border border-ink/15 bg-white px-5 py-2.5 text-sm font-semibold text-ink hover:border-ink/40"
                >
                  <WhatsAppIcon className="size-4 text-[#25D366]" /> Ask on WhatsApp
                </a>
                <div className="mt-4 flex justify-center">
                  <TripadvisorBadge variant="inline" />
                </div>
              </div>
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
              Prefer to chat? WhatsApp{" "}
              <a
                href={whatsappUrl(`Hi JC, I'd like to request the ${tour.name}.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-olive-800 underline-offset-4 hover:underline"
              >
                {site.whatsapp.display}
              </a>{" "}
              or email{" "}
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
            <BookingForm tour={{ slug: tour.slug, name: tour.name }} />
          </div>
        </div>
      </section>
    </>
  );
}
