import type { Metadata } from "next";
import Link from "next/link";
import { HireForm } from "@/components/forms/hire-form";
import { PageHero } from "@/components/site/page-hero";
import { hireAGuide } from "@/data/content";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Hire a Guide",
  description: "Hire Juan Carlos 'JC' Aguirre, licensed ICT guide, as a freelance guide for Curu, Cabo Blanco, Tambor, Montezuma, Santa Teresa or private customized tours across Costa Rica.",
  alternates: { canonical: "/hire-a-guide" },
  openGraph: { title: "Hire a Guide | JC's Journeys", description: "Private guiding with JC Aguirre, licensed local guide.", url: "/hire-a-guide" },
};

export default function HireAGuidePage() {
  const [before, after] = hireAGuide.intro.split(site.email);
  return (
    <>
      <PageHero
        eyebrow="Hire a guide"
        title={
          <>
            Your own transportation, <em className="font-light">our guide</em>
          </>
        }
        intro={
          <p>
            {before}
            <a href={`mailto:${site.email}`}>{site.email}</a>
            {after} (
            <Link href="/about#guide">More about JC</Link>)
          </p>
        }
        image={hireAGuide.image}
      />
      <section className="container-site grid gap-10 py-16 lg:grid-cols-12 sm:py-24">
        <div className="lg:col-span-4">
          <p className="eyebrow">Request rates</p>
          <h2 className="mt-3 text-3xl text-ink">Tell us about the trip</h2>
          <p className="prose-site mt-4">
            Dates, places and the size of your group are enough to start. We reply with availability and a list of rates. For itineraries outside the
            peninsula, the earlier you write the better.
          </p>
        </div>
        <div className="rounded-xl border border-border/70 bg-card p-6 sm:p-8 lg:col-span-8">
          <HireForm />
        </div>
      </section>
    </>
  );
}
