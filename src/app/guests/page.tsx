import type { Metadata } from "next";
import { PageHero } from "@/components/site/page-hero";
import { TestimonialCard } from "@/components/site/testimonial-card";
import { CtaBand } from "@/components/site/cta-band";
import { guests } from "@/data/content";
import { site } from "@/data/site";
import { testimonials } from "@/data/testimonials";

export const metadata: Metadata = {
  title: "Our Guests",
  description: "What travelers say about their tours with JC's Journeys in Montezuma, Costa Rica.",
  alternates: { canonical: "/guests" },
  openGraph: { title: "Our Guests | JC's Journeys", description: "What travelers say about touring with JC.", url: "/guests" },
};

export default function GuestsPage() {
  return (
    <>
      <PageHero
        eyebrow="Our guests"
        title={
          <>
            A warm greeting and a bittersweet <em className="font-light">&ldquo;hasta luego&rdquo;</em>
          </>
        }
        intro={<p>{guests.intro}</p>}
        image={guests.image}
      />
      <section className="container-site py-16 sm:py-24">
        <div className="columns-1 gap-6 md:columns-2 xl:columns-3 [&>*]:mb-6 [&>*]:break-inside-avoid">
          {testimonials.map((t) => (
            <TestimonialCard key={t.name} testimonial={t} />
          ))}
        </div>
        <p className="mt-8 text-sm text-ink-soft">
          Been on a tour with us? We&rsquo;d love to hear from you at{" "}
          <a href={`mailto:${site.email}`} className="font-semibold text-olive-800 underline-offset-4 hover:underline">
            {site.email}
          </a>{" "}
          or on{" "}
          <a href={site.social.tripadvisor} target="_blank" rel="noopener noreferrer" className="font-semibold text-olive-800 underline-offset-4 hover:underline">
            TripAdvisor
          </a>
          .
        </p>
      </section>
      <div className="pb-4">
        <CtaBand />
      </div>
    </>
  );
}
