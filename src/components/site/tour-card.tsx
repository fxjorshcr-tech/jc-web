import Link from "next/link";
import { ArrowUpRight, Clock, MapPin } from "lucide-react";
import { Photo } from "@/components/photo";
import type { Tour } from "@/data/tours";
import { cn } from "@/lib/utils";

interface TourCardProps {
  tour: Tour;
  index?: number;
  className?: string;
  featured?: boolean;
}

export function TourCard({ tour, index, className, featured }: TourCardProps) {
  return (
    <article
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-xl border border-border/70 bg-card transition-shadow hover:shadow-[0_18px_40px_-24px_rgba(34,40,28,0.45)]",
        className,
      )}
    >
      <Link href={`/tours/${tour.slug}`} className="relative block overflow-hidden" aria-label={tour.name}>
        <div className={cn("relative", featured ? "aspect-[16/10]" : "aspect-[4/3]")}>
          <Photo
            src={tour.hero.src}
            alt={tour.hero.alt}
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="transition-transform duration-700 group-hover:scale-[1.03]"
          />
        </div>
        {typeof index === "number" && (
          <span className="absolute top-3 left-3 rounded-full bg-cream/90 px-2.5 py-1 font-mono text-[0.65rem] font-semibold tracking-widest text-ink">
            {String(index + 1).padStart(2, "0")}
          </span>
        )}
      </Link>
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="text-2xl leading-tight text-ink">
          <Link href={`/tours/${tour.slug}`} className="after:absolute after:inset-0 after:content-['']">
            {tour.name}
          </Link>
        </h3>
        <p className="mt-2 font-serif text-base text-teal-700">{tour.tagline}</p>
        <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-ink-soft">{tour.summary}</p>
        <dl className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-xs text-ink-soft">
          <div className="flex items-center gap-1.5">
            <MapPin className="size-3.5 text-olive-700" />
            <dd>{tour.where}</dd>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock className="size-3.5 text-olive-700" />
            <dd className="line-clamp-1">{tour.when.split(".")[0]}</dd>
          </div>
        </dl>
        <div className="mt-auto flex items-center justify-between pt-6">
          <span className="text-xs font-semibold uppercase tracking-[0.16em] text-olive-700">Request a quote</span>
          <ArrowUpRight className="size-5 text-ink transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </div>
      </div>
    </article>
  );
}
