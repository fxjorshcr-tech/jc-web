import type { Metadata } from "next";
import Link from "next/link";
import { Photo } from "@/components/photo";
import { Button } from "@/components/ui/button";
import { CtaBand } from "@/components/site/cta-band";
import { PageHero } from "@/components/site/page-hero";
import { SectionHeading } from "@/components/site/section-heading";
import { about, whyTour } from "@/data/content";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "About JC's Journeys",
  description:
    "The story of JC's Journeys and its founder, licensed ICT guide Juan Carlos 'JC' Aguirre (Lic. #1165). Why tour with us, and our mission, vision and values.",
  alternates: { canonical: "/about" },
  openGraph: { title: "About JC's Journeys", description: "Meet JC Aguirre, licensed local guide in Montezuma, Costa Rica.", url: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title={
          <>
            Journeys that share <em className="font-light">culture and nature</em>
          </>
        }
        intro={<p>{about.story}</p>}
        image={{ src: "about/hero.jpg", alt: "Green forest trail in the southern Nicoya Peninsula" }}
      />

      <section id="guide" className="container-site grid gap-12 py-20 lg:grid-cols-12 lg:items-start sm:py-28">
        <div className="relative aspect-[4/5] overflow-hidden rounded-xl lg:col-span-5 lg:sticky lg:top-24">
          <Photo src={about.meetTheGuide.image.src} alt={about.meetTheGuide.image.alt} sizes="(min-width: 1024px) 40vw, 100vw" />
        </div>
        <div className="lg:col-span-6 lg:col-start-7">
          <SectionHeading eyebrow="Meet the guide" title={site.guide.name} />
          <p className="prose-site mt-6 text-lg">
            {about.meetTheGuide.text.split("ICT (Instituto Costarricense de Turismo)")[0]}
            <a href={about.meetTheGuide.ictUrl} target="_blank" rel="noopener noreferrer">
              ICT (Instituto Costarricense de Turismo)
            </a>
            {about.meetTheGuide.text.split("ICT (Instituto Costarricense de Turismo)")[1]}
          </p>
          <p className="mt-4 font-sans text-sm italic text-ink-soft">{about.meetTheGuide.licenseNote}</p>
          <dl className="mt-8 grid grid-cols-2 gap-6 border-t border-border/70 pt-6 text-sm sm:grid-cols-3">
            <div>
              <dt className="eyebrow">Languages</dt>
              <dd className="mt-1.5 text-ink">English & Spanish</dd>
            </div>
            <div>
              <dt className="eyebrow">Experience</dt>
              <dd className="mt-1.5 text-ink">10+ years in tourism</dd>
            </div>
            <div>
              <dt className="eyebrow">Training</dt>
              <dd className="mt-1.5 text-ink">ICT licensed, first aid</dd>
            </div>
          </dl>
          <Button asChild className="mt-8">
            <Link href="/hire-a-guide">Hire JC as a private guide</Link>
          </Button>
        </div>
      </section>

      <section className="border-y border-border/70 bg-cream-deep/50">
        <div className="container-site grid gap-10 py-20 lg:grid-cols-12 sm:py-28">
          <div className="lg:col-span-4">
            <SectionHeading eyebrow="Our approach" title={whyTour.title} />
          </div>
          <p className="prose-site text-lg lg:col-span-7 lg:col-start-6">{whyTour.text}</p>
        </div>
      </section>

      <section id="mission" className="container-site scroll-mt-24 py-20 sm:py-28">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHeading eyebrow="What guides us" title="Mission, Vision, Values" />
            <div className="relative mt-8 aspect-[4/3] overflow-hidden rounded-xl">
              <Photo src={about.mission.image.src} alt={about.mission.image.alt} sizes="(min-width: 1024px) 30vw, 100vw" />
            </div>
          </div>
          <dl className="grid gap-8 lg:col-span-7 lg:col-start-6">
            {[
              ["Mission", about.mission.mission],
              ["Vision", about.mission.vision],
              ["Values", about.mission.values],
            ].map(([k, v]) => (
              <div key={k} className="border-t border-border/70 pt-6">
                <dt className="font-serif text-2xl text-ink">{k}</dt>
                <dd className="mt-3 text-[1.05rem] leading-relaxed text-ink-soft">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section id="opportunities" className="container-site scroll-mt-24 pb-20 sm:pb-28">
        <div className="rounded-xl border border-border/70 bg-card p-6 sm:p-8">
          <p className="eyebrow">Opportunities</p>
          <p className="mt-3 text-[1.02rem] leading-relaxed text-ink-soft">
            {about.opportunities.split(site.email)[0]}
            <a href={`mailto:${site.email}`} className="font-semibold text-olive-800 underline-offset-4 hover:underline">
              {site.email}
            </a>
            {about.opportunities.split(site.email)[1]}
          </p>
        </div>
      </section>

      <div className="pb-4">
        <CtaBand />
      </div>
    </>
  );
}
