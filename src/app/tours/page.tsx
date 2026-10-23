import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock, MapPin } from "lucide-react";
import { Photo } from "@/components/photo";
import { Button } from "@/components/ui/button";
import { CtaBand } from "@/components/site/cta-band";
import { PageHero } from "@/components/site/page-hero";
import { home } from "@/data/content";
import { commonTourNotes, tours } from "@/data/tours";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Tours",
  description:
    "Five nature and culture tours from Montezuma, Costa Rica: Nocturno night journey, Bird Lover's Morning, Curu Nature Escape, Let's Get Local organic farm visit and the Finca El Paraíso ATV journey. Request a quote.",
  alternates: { canonical: "/tours" },
  openGraph: { title: "Tours | JC's Journeys", description: "Five nature and culture tours from Montezuma, Costa Rica.", url: "/tours" },
};

export default function ToursPage() {
  return (
    <>
      <PageHero
        eyebrow="Tours"
        title={
          <>
            Five journeys from <em className="font-light">Montezuma</em>
          </>
        }
        intro={<p>{home.toursIntro} Prices are quoted per request: they depend on your pickup point and the size of your group.</p>}
      />

      <section className="container-site">
        <ol className="divide-y divide-border/70">
          {tours.map((tour, i) => (
            <li key={tour.slug} className="grid gap-8 py-14 lg:grid-cols-12 lg:items-center sm:py-20">
              <div className={cn("lg:col-span-6", i % 2 === 1 && "lg:order-2 lg:col-start-7")}>
                <Link href={`/tours/${tour.slug}`} className="relative block aspect-[4/3] overflow-hidden rounded-xl" aria-label={tour.name}>
                  <Photo src={tour.hero.src} alt={tour.hero.alt} sizes="(min-width: 1024px) 50vw, 100vw" />
                </Link>
              </div>
              <div className={cn("lg:col-span-5", i % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : "lg:col-start-8")}>
                <p className="font-mono text-xs tracking-widest text-olive-700">{String(i + 1).padStart(2, "0")}</p>
                <h2 className="mt-3 text-3xl text-ink sm:text-4xl">
                  <Link href={`/tours/${tour.slug}`} className="hover:text-olive-800">
                    {tour.name}
                  </Link>
                </h2>
                <p className="mt-3 font-serif text-lg italic text-olive-800">{tour.tagline}</p>
                <p className="mt-4 text-[1.02rem] leading-relaxed text-ink-soft">{tour.summary}</p>
                <dl className="mt-6 space-y-2 text-sm text-ink-soft">
                  <div className="flex gap-2">
                    <dt className="sr-only">When</dt>
                    <Clock className="mt-0.5 size-4 shrink-0 text-olive-700" />
                    <dd>{tour.when}</dd>
                  </div>
                  <div className="flex gap-2">
                    <dt className="sr-only">Where</dt>
                    <MapPin className="mt-0.5 size-4 shrink-0 text-olive-700" />
                    <dd>{tour.where}</dd>
                  </div>
                </dl>
                <div className="mt-7 flex flex-wrap items-center gap-4">
                  <Button asChild>
                    <Link href={`/tours/${tour.slug}#book`}>Request a quote</Link>
                  </Button>
                  <Link href={`/tours/${tour.slug}`} className="inline-flex items-center gap-1.5 text-sm font-semibold text-olive-800 underline-offset-4 hover:underline">
                    Tour details <ArrowRight className="size-4" />
                  </Link>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="container-site pb-20 sm:pb-28">
        <div className="rounded-xl border border-border/70 bg-card p-6 sm:p-8">
          <p className="eyebrow">Notes for every tour</p>
          <ul className="mt-4 space-y-2 text-sm leading-relaxed text-ink-soft">
            {commonTourNotes.map((n) => (
              <li key={n} className="flex gap-3">
                <span className="text-olive-600">*</span>
                <span>{n}</span>
              </li>
            ))}
            <li className="flex gap-3">
              <span className="text-olive-600">*</span>
              <span>
                All tours are suitable for small children except{" "}
                <Link href="/tours/nocturno-night-journey" className="font-semibold text-olive-800 underline-offset-4 hover:underline">
                  Nocturno
                </Link>
                . See our <Link href="/faq" className="underline underline-offset-4">FAQ</Link> for details.
              </span>
            </li>
          </ul>
        </div>
      </section>

      <div className="pb-4">
        <CtaBand title="Can't decide? Ask JC." text="Tell us how many days you have and what you love: birds, farms, wildlife or the forest at night. We'll suggest the right combination." />
      </div>
    </>
  );
}
