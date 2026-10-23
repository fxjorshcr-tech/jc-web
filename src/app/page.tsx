import Link from "next/link";
import { ArrowRight, Leaf, MapPinned, ShieldCheck } from "lucide-react";
import { Photo } from "@/components/photo";
import { Button } from "@/components/ui/button";
import { CtaBand } from "@/components/site/cta-band";
import { JsonLd } from "@/components/site/json-ld";
import { SectionHeading } from "@/components/site/section-heading";
import { TestimonialCard } from "@/components/site/testimonial-card";
import { TourCard } from "@/components/site/tour-card";
import { home, whyTour } from "@/data/content";
import { sustainabilityMeasures } from "@/data/faq";
import { site } from "@/data/site";
import { featuredTestimonials } from "@/data/testimonials";
import { tours } from "@/data/tours";

const facts = [
  { icon: ShieldCheck, title: "Licensed local guide", text: `JC Aguirre, ${site.guide.license}, with first aid training and more than a decade guiding the peninsula.` },
  { icon: MapPinned, title: "Small groups, hotel pickup", text: "Flexible, friendly tours that start at your hotel in Montezuma and can be customized for private groups." },
  { icon: Leaf, title: "Considerate by design", text: "Local families, small businesses and reusable bottles instead of plastic. Tours that give back to the places they visit." },
];

export default function HomePage() {
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "TravelAgency"],
    "@id": `${site.url}/#business`,
    name: site.name,
    description: site.description,
    url: site.url,
    email: site.email,
    image: `${site.url}/images/${site.ogImage}`,
    slogan: site.tagline,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressLocality: site.location.locality,
      addressRegion: site.location.region,
      addressCountry: site.location.country,
    },
    geo: { "@type": "GeoCoordinates", latitude: site.location.lat, longitude: site.location.lng },
    areaServed: ["Montezuma", "Cabuya", "Tambor", "Santa Teresa", "Curu Wildlife Refuge", "Cabo Blanco"],
    founder: { "@type": "Person", name: site.guide.name, jobTitle: "Licensed tour guide" },
    sameAs: Object.values(site.social),
    makesOffer: tours.map((t) => ({
      "@type": "Offer",
      itemOffered: { "@type": "TouristTrip", name: t.name, url: `${site.url}/tours/${t.slug}` },
    })),
  };

  return (
    <>
      <JsonLd data={localBusiness} />

      {/* Hero */}
      <section className="relative isolate flex min-h-[86svh] items-end overflow-hidden bg-moss text-cream">
        <Photo src="home/hero.jpg" alt="Sunrise over the Nicoya Gulf seen from the coast near Montezuma" priority sizes="100vw" align="top" />
        <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/35 to-ink/10" />
        <div className="container-site relative pb-16 pt-40 sm:pb-24">
          <p className="eyebrow !text-olive-200">Southern Nicoya Peninsula · Est. 2013</p>
          <h1 className="mt-4 max-w-3xl text-5xl font-light leading-[1.02] text-cream sm:text-6xl lg:text-7xl">
            {home.heroTagline.split(" – ")[0]}
            <span className="block font-serif italic text-olive-200">Montezuma, Costa Rica</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-cream/85 sm:text-lg">{home.heroIntro}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" variant="light">
              <Link href="/tours">
                See the five tours <ArrowRight />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-cream/40 text-cream hover:border-cream hover:bg-cream/10">
              <Link href="/about">Meet your guide</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Facts strip */}
      <section className="border-b border-border/70 bg-cream-deep/60">
        <div className="container-site grid gap-8 py-10 sm:grid-cols-3 sm:gap-10">
          {facts.map((f) => (
            <div key={f.title} className="flex gap-4">
              <f.icon className="mt-1 size-6 shrink-0 text-olive-700" strokeWidth={1.5} />
              <div>
                <h2 className="font-sans text-sm font-semibold uppercase tracking-[0.12em] text-ink">{f.title}</h2>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{f.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Tours */}
      <section className="container-site py-20 sm:py-28">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="The tours"
            title={
              <>
                Five journeys, <em className="font-light">one peninsula</em>
              </>
            }
            intro={<p>{home.toursIntro}</p>}
          />
          <Button asChild variant="link" className="px-0 md:mb-2">
            <Link href="/tours">
              All tour details <ArrowRight />
            </Link>
          </Button>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tours.map((tour, i) => (
            <TourCard key={tour.slug} tour={tour} index={i} featured={i === 0} className={i === 0 ? "sm:col-span-2 lg:col-span-2" : undefined} />
          ))}
          <div className="flex flex-col justify-between rounded-xl bg-olive-100 p-6 sm:p-8">
            <div>
              <p className="eyebrow">Good to know</p>
              <p className="mt-3 font-serif text-xl leading-snug text-ink">Prices depend on where we pick you up, so every tour is quoted individually.</p>
            </div>
            <p className="mt-6 text-sm leading-relaxed text-ink-soft">
              Request a quote on any tour page. We reply within 24 hours with availability, and we send a secure payment link once your date is confirmed.
            </p>
          </div>
        </div>
      </section>

      {/* Why tour */}
      <section className="border-y border-border/70 bg-cream-deep/50">
        <div className="container-site grid gap-12 py-20 lg:grid-cols-12 lg:items-center sm:py-28">
          <div className="relative aspect-[4/5] overflow-hidden rounded-xl lg:col-span-5">
            <Photo src="home/why-tour.jpg" alt="JC sharing coffee with a local family on a tour" sizes="(min-width: 1024px) 40vw, 100vw" />
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <SectionHeading eyebrow="Our approach" title={whyTour.title} />
            <p className="prose-site mt-6 text-lg">{whyTour.text}</p>
            <Button asChild variant="outline" className="mt-8">
              <Link href="/about">About JC&rsquo;s Journeys</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container-site py-20 sm:py-28">
        <SectionHeading
          eyebrow="Our guests"
          align="center"
          title={
            <>
              &ldquo;He turned out to be the <em className="font-light">highlight</em> of our trip.&rdquo;
            </>
          }
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {featuredTestimonials.map((t) => (
            <TestimonialCard key={t.name} testimonial={t} />
          ))}
        </div>
        <div className="mt-10 flex flex-col items-center gap-3 text-sm sm:flex-row sm:justify-center sm:gap-8">
          <Link href="/guests" className="font-semibold text-olive-800 underline-offset-4 hover:underline">
            Read more guest stories
          </Link>
          <a href={site.social.tripadvisor} target="_blank" rel="noopener noreferrer" className="text-ink-soft underline-offset-4 hover:underline">
            Reviews on TripAdvisor
          </a>
        </div>
      </section>

      {/* Sustainability */}
      <section className="bg-moss text-cream">
        <div className="container-site grid gap-12 py-20 lg:grid-cols-12 sm:py-28">
          <div className="lg:col-span-5">
            <SectionHeading
              light
              eyebrow="Responsible travel"
              title={
                <>
                  Tours that are considerate of the <em className="font-light">community and environment</em>
                </>
              }
            />
            <a
              href={site.travelersAgainstPlastic.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-4 rounded-lg border border-cream/15 bg-cream/5 p-4 transition-colors hover:bg-cream/10"
            >
              <span className="relative block size-16 shrink-0 overflow-hidden rounded-md">
                <Photo src="badges/travelers-against-plastic.png" alt="Travelers Against Plastic badge" sizes="64px" compact />
              </span>
              <span className="text-sm leading-snug">
                <span className="block font-semibold">We support {site.travelersAgainstPlastic.name}</span>
                <span className="text-olive-100/80">
                  Montezuma&rsquo;s water is potable, so we don&rsquo;t provide bottled drinks on tours. Bring a refillable bottle.
                </span>
              </span>
            </a>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <p className="text-base leading-relaxed text-olive-100/85">What makes our tours sustainable and responsible:</p>
            <ul className="mt-6 divide-y divide-cream/10 border-y border-cream/10">
              {sustainabilityMeasures.map((m, i) => (
                <li key={m} className="flex gap-5 py-4">
                  <span className="font-mono text-xs text-olive-300">{String(i + 1).padStart(2, "0")}</span>
                  <span className="text-[0.98rem] leading-relaxed text-cream/90">{m}</span>
                </li>
              ))}
            </ul>
            <Link href="/faq#sustainable" className="mt-6 inline-block text-sm font-semibold text-olive-200 underline-offset-4 hover:underline">
              More in our FAQ
            </Link>
          </div>
        </div>
      </section>

      <div className="py-20 sm:py-28">
        <CtaBand />
      </div>
    </>
  );
}
