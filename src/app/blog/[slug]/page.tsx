import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Clock } from "lucide-react";
import { AuthorCard } from "@/components/blog/author-card";
import { PostBody } from "@/components/blog/post-body";
import { PostFaqSection } from "@/components/blog/post-faq";
import { Photo } from "@/components/photo";
import { CtaBand } from "@/components/site/cta-band";
import { JsonLd } from "@/components/site/json-ld";
import { TourCard } from "@/components/site/tour-card";
import { about } from "@/data/content";
import { getPost, postHeadings, posts, postWordCount, readingTimeMinutes, sortedPosts } from "@/data/posts";
import { site } from "@/data/site";
import { getTour } from "@/data/tours";
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
    title: post.seoTitle ?? post.title,
    description: post.excerpt,
    keywords: post.keywords,
    authors: [{ name: site.guide.name, url: `${site.url}/about#guide` }],
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      url: `/blog/${post.slug}`,
      publishedTime: post.date,
      modifiedTime: post.updated,
      authors: [`${site.url}/about#guide`],
      section: post.category,
      tags: post.keywords,
      images: [{ url: `/images/${post.cover}`, width: 1600, height: 900, alt: post.coverAlt }],
    },
    twitter: { card: "summary_large_image", title: post.title, description: post.excerpt, images: [`/images/${post.cover}`] },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const sorted = sortedPosts();
  const index = sorted.findIndex((p) => p.slug === post.slug);
  const newer = index > 0 ? sorted[index - 1] : null;
  const older = index < sorted.length - 1 ? sorted[index + 1] : null;
  const headings = postHeadings(post);
  const relatedTours = post.relatedTours.map(getTour).filter((t) => t !== undefined);
  const url = `${site.url}/blog/${post.slug}`;

  const author = {
    "@type": "Person",
    "@id": `${site.url}/about#guide`,
    name: site.guide.name,
    alternateName: site.guide.shortName,
    jobTitle: "Licensed tour guide",
    description: `${site.guide.license}, ${site.guide.licenseBody}. Founder of ${site.name}.`,
    url: `${site.url}/about#guide`,
    image: `${site.url}/images/${about.meetTheGuide.image.src}`,
    worksFor: { "@id": `${site.url}/#business` },
    knowsAbout: ["Montezuma, Costa Rica", "Nicoya Peninsula", "Birdwatching", "Curu Wildlife Refuge", "Costa Rican rural culture", "Night hikes"],
    sameAs: Object.values(site.social),
  };

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${url}#article`,
    headline: post.title,
    alternativeHeadline: post.seoTitle,
    description: post.excerpt,
    abstract: post.quickAnswer,
    articleSection: post.category,
    keywords: post.keywords.join(", "),
    wordCount: postWordCount(post),
    inLanguage: "en",
    datePublished: post.date,
    dateModified: post.updated,
    image: { "@type": "ImageObject", url: `${site.url}/images/${post.cover}`, caption: post.coverAlt },
    url,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    isPartOf: { "@id": `${site.url}/blog#blog` },
    author,
    publisher: {
      "@id": `${site.url}/#business`,
      "@type": ["LocalBusiness", "TravelAgency"],
      name: site.name,
      url: site.url,
      logo: { "@type": "ImageObject", url: `${site.url}/images/brand/logo-mark.png` },
    },
    about: [
      { "@type": "Place", name: "Montezuma, Costa Rica", address: { "@type": "PostalAddress", addressLocality: "Montezuma", addressRegion: "Puntarenas", addressCountry: "CR" } },
      ...relatedTours.map((t) => ({ "@type": "TouristTrip", name: t.name, url: `${site.url}/tours/${t.slug}` })),
    ],
    speakable: { "@type": "SpeakableSpecification", cssSelector: ["#quick-answer", "h1"] },
  };

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${url}#faq`,
    mainEntity: post.faq.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1") },
    })),
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: site.url },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${site.url}/blog` },
      { "@type": "ListItem", position: 3, name: post.title, item: url },
    ],
  };

  return (
    <>
      <JsonLd data={articleLd} />
      <JsonLd data={faqLd} />
      <JsonLd data={breadcrumbLd} />
      <article>
        <header className="border-b border-border/70">
          <div className="container-site max-w-4xl py-14 sm:py-20">
            <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-olive-700">
              <Link href="/blog" className="inline-flex items-center gap-1.5 hover:text-olive-900">
                <ArrowLeft className="size-3.5" /> Blog
              </Link>
              <span aria-hidden className="text-border">
                /
              </span>
              <span className="text-ink-soft">{post.category}</span>
            </nav>
            <h1 className="mt-6 text-4xl text-ink sm:text-5xl">{post.title}</h1>
            <p className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-ink-soft">
              <span>
                By{" "}
                <Link href="/about#guide" className="font-semibold text-ink underline-offset-4 hover:underline">
                  {site.guide.shortName}
                </Link>
                , licensed guide
              </span>
              <span>
                Updated <time dateTime={post.updated}>{formatDate(post.updated)}</time>
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock className="size-3.5" /> {readingTimeMinutes(post)} min read
              </span>
            </p>
          </div>
        </header>

        <div className="container-site max-w-4xl">
          <div className="relative aspect-[16/9] overflow-hidden rounded-xl sm:-mt-10">
            <Photo src={post.cover} alt={post.coverAlt} priority sizes="(min-width: 1024px) 896px, 100vw" className={post.coverPosition} />
          </div>
        </div>

        <div className="container-site grid gap-12 py-12 lg:grid-cols-12 sm:py-16">
          <div className="min-w-0 lg:col-span-8">
            {/* Direct answer first: what people and answer engines are looking for */}
            <section id="quick-answer" aria-labelledby="quick-answer-heading" className="rounded-xl bg-olive-100 p-6 sm:p-8">
              <p id="quick-answer-heading" className="eyebrow">
                Short answer
              </p>
              <p className="mt-3 text-lg leading-relaxed text-ink sm:text-xl">{post.quickAnswer}</p>
            </section>

            <dl className="mt-6 grid gap-x-8 gap-y-4 rounded-xl border border-border/70 bg-card p-6 sm:grid-cols-2 sm:p-8">
              {post.keyFacts.map((f) => (
                <div key={f.label}>
                  <dt className="eyebrow">{f.label}</dt>
                  <dd className="mt-1 text-[0.95rem] leading-snug text-ink">{f.value}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-12">
              <PostBody blocks={post.blocks} />
            </div>

            <div className="mt-14">
              <PostFaqSection items={post.faq} />
            </div>

            <div className="mt-14">
              <AuthorCard updated={post.updated} />
            </div>
          </div>

          <aside className="min-w-0 lg:col-span-3 lg:col-start-10">
            <div className="lg:sticky lg:top-24">
              <nav aria-label="On this page" className="rounded-xl border border-border/70 bg-card p-5">
                <p className="eyebrow">On this page</p>
                <ol className="mt-3 space-y-2 text-sm">
                  <li>
                    <a href="#quick-answer" className="text-ink-soft hover:text-olive-800">
                      Short answer
                    </a>
                  </li>
                  {headings.map((h) => (
                    <li key={h.id}>
                      <a href={`#${h.id}`} className="text-ink-soft hover:text-olive-800">
                        {h.text}
                      </a>
                    </li>
                  ))}
                  {post.faq.length > 0 && (
                    <li>
                      <a href="#faq" className="text-ink-soft hover:text-olive-800">
                        Frequently asked questions
                      </a>
                    </li>
                  )}
                </ol>
              </nav>
              <div className="mt-4 rounded-xl bg-moss p-5 text-cream">
                <p className="eyebrow !text-olive-300">Plan with a local</p>
                <p className="mt-2 font-serif text-lg leading-snug">Tell us your dates and we reply within 24 hours.</p>
                <Link href="/tours" className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-gold-300 underline-offset-4 hover:underline">
                  See the tours <ArrowRight className="size-4" />
                </Link>
              </div>
            </div>
          </aside>
        </div>

        {relatedTours.length > 0 && (
          <section aria-labelledby="related-tours" className="border-t border-border/70 bg-cream-deep/50">
            <div className="container-site py-16 sm:py-20">
              <p className="eyebrow">Experience it</p>
              <h2 id="related-tours" className="mt-3 text-3xl text-ink">
                Tours mentioned in this post
              </h2>
              <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {relatedTours.map((t) => (
                  <TourCard key={t.slug} tour={t} />
                ))}
              </div>
            </div>
          </section>
        )}

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
        <CtaBand whatsappMessage={`Hi JC, I read "${post.title}" and I'd like to ask about a tour.`} />
      </div>
    </>
  );
}
