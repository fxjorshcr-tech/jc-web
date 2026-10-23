import Link from "next/link";
import { Photo } from "@/components/photo";
import type { BlogPost } from "@/data/posts";
import { formatDate } from "@/lib/utils";

export function PostCard({ post }: { post: BlogPost }) {
  return (
    <article className="group relative flex flex-col">
      <Link href={`/blog/${post.slug}`} className="relative block aspect-[3/2] overflow-hidden rounded-lg" aria-label={post.title}>
        <Photo
          src={post.cover}
          alt={post.coverAlt}
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          compact
          className="transition-transform duration-700 group-hover:scale-[1.03]"
        />
      </Link>
      <time dateTime={post.date} className="mt-4 text-xs font-semibold uppercase tracking-[0.16em] text-olive-700">
        {formatDate(post.date)}
      </time>
      <h3 className="mt-2 text-xl leading-snug text-ink group-hover:text-olive-800">
        <Link href={`/blog/${post.slug}`} className="after:absolute after:inset-0 after:content-['']">
          {post.title}
        </Link>
      </h3>
      <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-ink-soft">{post.excerpt}</p>
    </article>
  );
}
