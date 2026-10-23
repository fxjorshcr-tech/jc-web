import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Photo } from "@/components/photo";
import { CtaBand } from "@/components/site/cta-band";
import { PageHero } from "@/components/site/page-hero";
import { SectionHeading } from "@/components/site/section-heading";
import { accommodations, accommodationsIntro, recommendationsIntro, regions } from "@/data/recommendations";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Recommendations",
  description: "Places we recommend beyond Montezuma: Poas, Arenal, Tenorio and Rio Celeste, Rincon de la Vieja and the Osa Peninsula, plus favorite hotels on the southern Nicoya Peninsula.",
  alternates: { canonical: "/recommendations" },
  openGraph: { title: "Recommendations | JC's Journeys", description: "Regions and hotels we recommend in Costa Rica.", url: "/recommendations" },
};

export default function RecommendationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Recommendations"
        title={
          <>
            Beyond Montezuma, <em className="font-light">places we love</em>
          </>
        }
        intro={
          <p>
            {recommendationsIntro.split("Contact us")[0]}
            <Link href="/hire-a-guide">Contact us</Link>
            {recommendationsIntro.split("Contact us")[1]}
          </p>
        }
      />

      <section className="container-site">
        <ol className="divide-y divide-border/70">
          {regions.map((r, i) => (
            <li key={r.slug} id={r.slug} className="grid gap-8 py-14 lg:grid-cols-12 lg:items-center sm:py-20">
              <div className={cn("grid grid-cols-2 gap-3 lg:col-span-6", i % 2 === 1 && "lg:order-2 lg:col-start-7")}>
                {r.images.map((img, j) => (
                  <div key={img.src} className={cn("relative overflow-hidden rounded-xl", j === 0 ? "aspect-[3/4]" : "aspect-[3/4] mt-8")}>
                    <Photo src={img.src} alt={img.alt} sizes="(min-width: 1024px) 25vw, 50vw" compact />
                  </div>
                ))}
              </div>
              <div className={cn("lg:col-span-5", i % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : "lg:col-start-8")}>
                <p className="font-mono text-xs tracking-widest text-olive-700">{String(i + 1).padStart(2, "0")}</p>
                <h2 className="mt-3 text-3xl text-ink sm:text-4xl">{r.name}</h2>
                <p className="mt-4 text-[1.02rem] leading-relaxed text-ink-soft">{r.text}</p>
                {r.readMore && (
                  <Link href={r.readMore.href} className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-olive-800 underline-offset-4 hover:underline">
                    Read: {r.readMore.label} <ArrowRight className="size-4" />
                  </Link>
                )}
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section id="hotels" className="border-y border-border/70 bg-cream-deep/50">
        <div className="container-site grid gap-10 py-20 lg:grid-cols-12 sm:py-28">
          <div className="lg:col-span-4">
            <SectionHeading eyebrow="Local accommodations" title="Where to stay on the peninsula" intro={<p>{accommodationsIntro}</p>} />
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:col-span-7 lg:col-start-6">
            {accommodations.map((area) => (
              <div key={area.area} className="rounded-xl border border-border/70 bg-card p-6">
                <h3 className="font-sans text-xs font-semibold uppercase tracking-[0.14em] text-olive-700">{area.area}</h3>
                <ul className="mt-4 space-y-2.5">
                  {area.hotels.map((h) => (
                    <li key={h.name}>
                      <a href={h.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 font-serif text-lg text-ink hover:text-olive-800">
                        {h.name} <ExternalLink className="size-3.5 text-ink-soft" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="py-20 sm:py-28">
        <CtaBand title="Want a custom itinerary?" text="JC also guides private trips outside the peninsula. Tell us your dates and interests and we'll plan the route with you." />
      </div>
    </>
  );
}
