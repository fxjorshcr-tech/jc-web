import Link from "next/link";
import { Photo } from "@/components/photo";
import { readingTimeMinutes, type BlogPost } from "@/data/posts";
import { formatDate } from "@/lib/utils";
import { cn } from "@/lib/utils";

export function PostCard({ post, featured = false }: { post: BlogPost; featured?: boolean }) {
  return (
    <article className={cn("group relative flex flex-col", featured && "lg:grid lg:grid-cols-12 lg:items-center lg:gap-10")}>
      <Link
        href={`/blog/${post.slug}`}
        className={cn("relative block overflow-hidden rounded-lg", featured ? "aspect-[16/10] lg:col-span-7" : "aspect-[3/2]")}
        aria-label={post.title}
        tabIndex={-1}
      >
        <Photo
          src={post.cover}
          alt={post.coverAlt}
          sizes={featured ? "(min-width: 1024px) 58vw, 100vw" : "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"}
          priority={featured}
          compact
          className={cn("transition-transform duration-700 group-hover:scale-[1.03]", post.coverPosition)}
        />
      </Link>
      <div className={cn(featured && "lg:col-span-5")}>
        <p className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-semibold uppercase tracking-[0.16em] text-olive-700">
          <span>{post.category}</span>
          <span aria-hidden className="text-border">
            ·
          </span>
          <time dateTime={post.updated}>{formatDate(post.updated)}</time>
          <span aria-hidden className="text-border">
            ·
          </span>
          <span className="normal-case tracking-normal text-ink-soft">{readingTimeMinutes(post)} min read</span>
        </p>
        <h3 className={cn("mt-2 leading-snug text-ink group-hover:text-olive-800", featured ? "text-2xl sm:text-3xl lg:text-4xl" : "text-xl")}>
          <Link href={`/blog/${post.slug}`} className="after:absolute after:inset-0 after:content-['']">
            {post.title}
          </Link>
        </h3>
        <p className={cn("mt-2 text-sm leading-relaxed text-ink-soft", featured ? "line-clamp-4 sm:text-base" : "line-clamp-3")}>{featured ? post.quickAnswer : post.excerpt}</p>
      </div>
    </article>
  );
}
