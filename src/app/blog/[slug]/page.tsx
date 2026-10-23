import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { PostBody } from "@/components/blog/post-body";
import { Photo } from "@/components/photo";
import { CtaBand } from "@/components/site/cta-band";
import { JsonLd } from "@/components/site/json-ld";
import { getPost, postHasContent, posts } from "@/data/posts";
import { site } from "@/data/site";
import { formatDate } from "@/lib/utils";

interface Params {
  slug: string;
}

export function generateStaticParams(): Params[] {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      url: `/blog/${post.slug}`,
      publishedTime: post.date,
      images: [{ url: `/images/${post.cover}`, alt: post.coverAlt }],
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();
  const index = posts.findIndex((p) => p.slug === post.slug);
  const newer = index > 0 ? posts[index - 1] : null;
  const older = index < posts.length - 1 ? posts[index + 1] : null;

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    image: `${site.url}/images/${post.cover}`,
    url: `${site.url}/blog/${post.slug}`,
    author: { "@type": "Organization", name: site.name, url: site.url },
    publisher: { "@type": "Organization", name: site.name, url: site.url },
    mainEntityOfPage: `${site.url}/blog/${post.slug}`,
  };

  return (
    <>
      <JsonLd data={articleLd} />
      <article>
        <header className="border-b border-border/70">
          <div className="container-site max-w-4xl py-14 sm:py-20">
            <Link href="/blog" className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-olive-700 hover:text-olive-900">
              <ArrowLeft className="size-3.5" /> Travel journal
            </Link>
            <h1 className="mt-6 text-4xl text-ink sm:text-5xl">{post.title}</h1>
            <p className="mt-5 text-sm text-ink-soft">
              <time dateTime={post.date}>{formatDate(post.date)}</time> · {site.name}
            </p>
          </div>
        </header>
        <div className="container-site max-w-4xl">
          <div className="relative -mt-0 aspect-[16/9] overflow-hidden rounded-xl sm:-mt-10">
            <Photo src={post.cover} alt={post.coverAlt} priority sizes="(min-width: 1024px) 896px, 100vw" />
          </div>
        </div>
        <div className="container-site max-w-3xl py-12 sm:py-16">
          {postHasContent(post) ? (
            <PostBody blocks={post.blocks} />
          ) : (
            <div className="rounded-xl border border-dashed border-earth/50 bg-sand/40 p-8 text-center">
              <p className="font-serif text-2xl text-ink">Content coming soon</p>
              <p className="mt-2 text-sm text-ink-soft">We are bringing this story over from our previous site.</p>
            </div>
          )}
        </div>
        <nav aria-label="More posts" className="container-site max-w-4xl border-t border-border/70 py-10">
          <div className="grid gap-6 sm:grid-cols-2">
            {newer ? (
              <Link href={`/blog/${newer.slug}`} className="group">
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-olive-700">
                  <ArrowLeft className="size-3.5" /> Newer
                </span>
                <span className="mt-2 block font-serif text-xl text-ink group-hover:text-olive-800">{newer.title}</span>
              </Link>
            ) : (
              <span />
            )}
            {older && (
              <Link href={`/blog/${older.slug}`} className="group sm:text-right">
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-olive-700">
                  Older <ArrowRight className="size-3.5" />
                </span>
                <span className="mt-2 block font-serif text-xl text-ink group-hover:text-olive-800">{older.title}</span>
              </Link>
            )}
          </div>
        </nav>
      </article>
      <div className="pb-4 pt-10">
        <CtaBand />
      </div>
    </>
  );
}
