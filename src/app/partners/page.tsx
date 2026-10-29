import type { Metadata } from "next";
import Link from "next/link";
import { Photo } from "@/components/photo";
import { Button } from "@/components/ui/button";
import { CtaBand } from "@/components/site/cta-band";
import { PageHero } from "@/components/site/page-hero";
import { SectionHeading } from "@/components/site/section-heading";
import { partners } from "@/data/content";

export const metadata: Metadata = {
  title: "Partners",
  description: "The local families and small businesses behind JC's Journeys tours, including Finca Integral Didáctica and the Ovares Picado family in Rio Negro.",
  alternates: { canonical: "/partners" },
  openGraph: { title: "Partners | JC's Journeys", description: "Local partners who make each tour authentic.", url: "/partners" },
};

export default function PartnersPage() {
  const farm = partners.organicFarm;
  return (
    <>
      <PageHero
        eyebrow="Partners"
        title={
          <>
            Local people make the <em className="font-light">journey</em>
          </>
        }
        intro={<p>{partners.intro}</p>}
      />
      <section className="container-site grid gap-12 py-20 lg:grid-cols-12 lg:items-center sm:py-28">
        <div className="relative aspect-[4/3] overflow-hidden rounded-xl lg:col-span-6">
          <Photo src={farm.image.src} alt={farm.image.alt} sizes="(min-width: 1024px) 50vw, 100vw" />
        </div>
        <div className="lg:col-span-5 lg:col-start-8">
          <SectionHeading eyebrow={farm.title} title={farm.partner} />
          <p className="prose-site mt-6">{farm.text}</p>
          <Button asChild className="mt-8">
            <Link href={farm.tourHref}>Visit the farm on Let&rsquo;s Get Local</Link>
          </Button>
        </div>
      </section>
      <div className="pb-4">
        <CtaBand title="Work with us" text="Are you a local family, driver or producer who would like to be part of a tour? Write to us and let's talk." />
      </div>
    </>
  );
}
