import Link from "next/link";
import { ArrowRight, Leaf, MapPinned, ShieldCheck } from "lucide-react";
import { Photo } from "@/components/photo";
import { Button } from "@/components/ui/button";
import { CtaBand } from "@/components/site/cta-band";
import { JsonLd } from "@/components/site/json-ld";
import { SectionHeading } from "@/components/site/section-heading";
import { TestimonialCard } from "@/components/site/testimonial-card";
import { TourCard } from "@/components/site/tour-card";
import { TripadvisorBadge } from "@/components/site/tripadvisor-badge";
import { home, whyTour } from "@/data/content";
import { sustainabilityMeasures } from "@/data/faq";
import { site } from "@/data/site";
import { featuredTestimonials } from "@/data/testimonials";
import { tours } from "@/data/tours";
import { whatsappUrl } from "@/lib/whatsapp";

const facts = [
  { icon: ShieldCheck, title: "Licensed local guide", text: `JC Aguirre, ${site.guide.license}, with first aid training and more than a decade guiding the peninsula.` },
  { icon: MapPinned, title: "Small groups, hotel pickup", text: "Flexible, friendly tours that start at your hotel in Montezuma and can be customized for private groups." },
  { icon: Leaf, title: "Considerate by design", text: "Local families, small businesses and reusable bottles instead of plastic. Tours that give back to the places they visit." },
];

const heroPhoto = {
  src: "photos/waterfall-hike.jpg",
  alt: "JC Aguirre smiling with two guests in front of the Montezuma waterfall",
  caption: "JC with guests at the Montezuma waterfall",
};

export default function HomePage() {
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "TravelAgency"],
    "@id": `${site.url}/#business`,
    name: site.name,
    description: site.description,
    url: site.url,
    email: site.email,
    telephone: site.whatsapp.international,
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "reservations",
        telephone: site.whatsapp.international,
        email: site.email,
        availableLanguage: ["English", "Spanish"],
        url: whatsappUrl(),
      },
    ],
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

      {/* Hero: full-bleed photo of JC, text on a left-side fade */}
      <section className="relative isolate overflow-hidden bg-moss text-cream">
        {/* Phones: the whole photo, uncropped, then the text below */}
        <div className="relative aspect-[4/3] lg:hidden">
          <Photo src={heroPhoto.src} alt={heroPhoto.alt} priority sizes="100vw" />
        </div>
        {/* Desktop: the whole photo, uncropped, anchored right; the moss background fades into its left edge */}
        <div aria-hidden className="absolute inset-y-0 right-0 hidden aspect-[4/3] lg:block">
          <Photo src={heroPhoto.src} alt="" priority sizes="(min-width: 1024px) 70vw, 100vw" />
          <div className="absolute inset-0 bg-gradient-to-r from-moss from-8% via-moss/55 via-32% to-moss/0 to-58%" />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-moss/60 to-transparent" />
          <p className="absolute bottom-5 right-6 rounded-full bg-ink/45 px-3 py-1.5 text-xs text-cream/90 backdrop-blur">{heroPhoto.caption}</p>
        </div>
        <div className="container-site relative flex items-center pb-14 pt-10 lg:min-h-[88svh] lg:py-24">
          <div className="max-w-xl lg:max-w-[32rem] xl:max-w-[36rem]">
            <p className="eyebrow !text-gold-300">Southern Nicoya Peninsula · Est. 2013</p>
            <h1 className="mt-5 text-5xl font-medium leading-[1.02] text-cream sm:text-6xl lg:text-[4.25rem] [text-shadow:0_2px_24px_rgba(0,0,0,0.35)]">
              {home.heroTagline.split(" – ")[0]}
              <span className="block font-normal text-gold-300">Montezuma, Costa Rica</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-cream/90 sm:text-lg [text-shadow:0_1px_12px_rgba(0,0,0,0.35)]">{home.heroIntro}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" variant="light">
                <Link href="/tours">
                  See the five tours <ArrowRight />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-cream/40 text-cream hover:border-cream hover:bg-cream/10">
                <Link href="/about#guide">Meet your guide</Link>
              </Button>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-cream/85">
              <TripadvisorBadge light />
              <span>
                Guided by <span className="font-semibold text-cream">{site.guide.shortName}</span>, {site.guide.license.split(" – ")[0]}
              </span>
            </div>
            <p className="mt-4 text-xs text-cream/60 lg:hidden">{heroPhoto.caption}</p>
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
            <Photo src="home/why-tour.jpg" alt="Guests looking for birds on a forest trail with JC's Journeys" sizes="(min-width: 1024px) 40vw, 100vw" />
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
        <div className="mt-10 flex flex-col items-center gap-5 sm:flex-row sm:justify-center sm:gap-8">
          <TripadvisorBadge variant="card" className="w-full max-w-sm" />
          <Link href="/guests" className="text-sm font-semibold text-olive-800 underline-offset-4 hover:underline">
            Read more guest stories
          </Link>
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
