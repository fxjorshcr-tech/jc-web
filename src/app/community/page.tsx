import type { Metadata } from "next";
import Link from "next/link";
import { Binoculars } from "lucide-react";
import { Photo } from "@/components/photo";
import { Button } from "@/components/ui/button";
import { CtaBand } from "@/components/site/cta-band";
import { PageHero } from "@/components/site/page-hero";
import { community } from "@/data/content";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Community",
  description: "How JC's Journeys gives back: a youth birding group in Montezuma and Cabuya, binoculars for local kids and outings with the Montezuma School.",
  alternates: { canonical: "/community" },
  openGraph: { title: "Community | JC's Journeys", description: "Building a youth birding group in Montezuma and Cabuya.", url: "/community" },
};

export default function CommunityPage() {
  return (
    <>
      <PageHero
        eyebrow="Contribute"
        title={
          <>
            {community.title.split(" ")[0]} <em className="font-light">{community.title.split(" ").slice(1).join(" ")}</em>
          </>
        }
        intro={<p>{community.text}</p>}
        image={community.images[0]}
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button asChild>
            <Link href={community.blogCta.href}>{community.blogCta.label}</Link>
          </Button>
          <Button asChild variant="outline">
            <a href={`mailto:${site.email}?subject=Contributing%20to%20the%20youth%20birding%20group`}>Ask how to contribute</a>
          </Button>
        </div>
      </PageHero>

      <section className="container-site grid gap-10 py-20 lg:grid-cols-12 sm:py-28">
        <div className="rounded-xl bg-olive-100 p-6 sm:p-8 lg:col-span-4">
          <Binoculars className="size-8 text-olive-700" strokeWidth={1.5} />
          <p className="mt-4 font-serif text-3xl text-ink">10 pairs of binoculars</p>
          <p className="mt-3 text-sm leading-relaxed text-ink-soft">
            Our first goal for the youth birding group in Montezuma and Cabuya. Reusable bags and souvenirs sold on our tours go towards it.
          </p>
          <p className="mt-4 text-sm text-ink-soft">{community.blogLead}</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:col-span-8">
          {community.images.slice(1).map((img) => (
            <div key={img.src} className="relative aspect-[4/3] overflow-hidden rounded-xl">
              <Photo src={img.src} alt={img.alt} sizes="(min-width: 1024px) 33vw, 50vw" />
            </div>
          ))}
        </div>
      </section>

      <div className="pb-4">
        <CtaBand title="Every tour helps" text="Part of what we do on each journey supports the people and places you visit. Book one and come birding with us." />
      </div>
    </>
  );
}
