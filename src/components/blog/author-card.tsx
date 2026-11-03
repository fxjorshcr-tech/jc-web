import Link from "next/link";
import { Photo } from "@/components/photo";
import { about } from "@/data/content";
import { site } from "@/data/site";

/** Author box: who wrote this and why they are qualified (E-E-A-T signal for search and answer engines). */
export function AuthorCard({ updated }: { updated: string }) {
  return (
    <aside aria-label="About the author" className="flex gap-5 rounded-xl border border-border/70 bg-card p-5 sm:p-6">
      <div className="relative size-16 shrink-0 overflow-hidden rounded-full sm:size-20">
        <Photo src={about.meetTheGuide.image.src} alt={about.meetTheGuide.image.alt} sizes="80px" compact />
      </div>
      <div className="min-w-0">
        <p className="eyebrow">Written by</p>
        <p className="mt-1 font-serif text-lg text-ink">{site.guide.name}</p>
        <p className="mt-1 text-sm leading-relaxed text-ink-soft">
          Licensed local guide ({site.guide.license}, {site.guide.licenseBody}), founder of {site.name} and resident of the southern Nicoya Peninsula for more than a
          decade. Every post is based on tours we actually run and reviewed on {new Date(updated + "T00:00:00Z").toLocaleDateString("en-US", { month: "long", year: "numeric", timeZone: "UTC" })}.
        </p>
        <Link href="/about#guide" className="mt-2 inline-block text-sm font-semibold text-olive-800 underline-offset-4 hover:underline">
          More about JC
        </Link>
      </div>
    </aside>
  );
}
