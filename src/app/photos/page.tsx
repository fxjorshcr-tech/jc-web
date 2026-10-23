import type { Metadata } from "next";
import { Photo } from "@/components/photo";
import { CtaBand } from "@/components/site/cta-band";
import { PageHero } from "@/components/site/page-hero";
import { albumPhotos } from "@/data/photos";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Photo Album",
  description: "Photos from JC's Journeys tours: birding mornings, Curu Wildlife Refuge, the organic farm in Rio Negro, turtles in Montezuma and more.",
  alternates: { canonical: "/photos" },
  openGraph: { title: "Photo Album | JC's Journeys", description: "Photos from our tours around Montezuma.", url: "/photos" },
};

const aspect = { square: "aspect-square", portrait: "aspect-[3/4]", landscape: "aspect-[4/3]" } as const;

export default function PhotosPage() {
  return (
    <>
      <PageHero
        eyebrow="Photo album"
        title={
          <>
            Moments from the <em className="font-light">journeys</em>
          </>
        }
        intro={<p>A few of the birds, beaches, farms and faces we meet on our tours. Captions name the tour each photo comes from.</p>}
      />
      <section className="container-site py-16 sm:py-24">
        <ul className="columns-2 gap-4 md:columns-3 [&>li]:mb-4 [&>li]:break-inside-avoid">
          {albumPhotos.map((p) => (
            <li key={p.src}>
              <figure>
                <div className={cn("relative overflow-hidden rounded-lg", aspect[p.aspect ?? "landscape"])}>
                  <Photo src={p.src} alt={p.alt} sizes="(min-width: 768px) 33vw, 50vw" compact />
                </div>
                <figcaption className="mt-2 text-xs text-ink-soft">{p.caption}</figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </section>
      <div className="pb-4">
        <CtaBand />
      </div>
    </>
  );
}
