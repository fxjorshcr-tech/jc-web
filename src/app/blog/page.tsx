import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PostCard } from "@/components/blog/post-card";
import { CtaBand } from "@/components/site/cta-band";
import { JsonLd } from "@/components/site/json-ld";
import { PageHero } from "@/components/site/page-hero";
import { sortedPosts } from "@/data/posts";
import { site } from "@/data/site";

const title = "Montezuma Travel Blog: Local Answers from a Licensed Guide";
const description =
  "Practical, local answers about Montezuma and the southern Nicoya Peninsula: how to get here, the best time to visit, birdwatching, Curu Wildlife Refuge, night hikes and farm visits.";

export const metadata: Metadata = {
  title: "Blog",
  description,
  alternates: { canonical: "/blog" },
  openGraph: { title: `${title} | ${site.name}`, description, url: "/blog", type: "website" },
};

export default function BlogPage() {
  const sorted = sortedPosts();
  const [latest, ...rest] = sorted;

  const blogLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": `${site.url}/blog#blog`,
    name: `${site.name} Blog`,
    description,
    url: `${site.url}/blog`,
    inLanguage: "en",
    publisher: { "@id": `${site.url}/#business` },
    blogPost: sorted.map((p) => ({
      "@type": "BlogPosting",
      "@id": `${site.url}/blog/${p.slug}#article`,
      headline: p.title,
      url: `${site.url}/blog/${p.slug}`,
      datePublished: p.date,
      dateModified: p.updated,
      image: `${site.url}/images/${p.cover}`,
      author: { "@type": "Person", name: site.guide.name },
    })),
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: site.url },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${site.url}/blog` },
    ],
  };

  return (
    <>
      <JsonLd data={blogLd} />
      <JsonLd data={breadcrumbLd} />
      <PageHero
        eyebrow="Blog"
        title={
          <>
            Straight answers about <em className="font-light">Montezuma</em>
          </>
        }
        intro={
          <p>
            The questions our guests ask before and during their trip, answered by the guide who lives here: how to get to Montezuma, when to come, what you will
            see in Curu, on a night hike or at sunrise with the birds, and what a morning on a family farm is really like.
          </p>
        }
      />

      <section className="container-site py-16 sm:py-24">
        <PostCard post={latest} featured />
        <div className="mt-16 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </section>

      <section className="border-y border-border/70 bg-cream-deep/50">
        <div className="container-site grid gap-10 py-16 lg:grid-cols-12 sm:py-20">
          <div className="lg:col-span-4">
            <p className="eyebrow">Quick answers</p>
            <h2 className="mt-3 text-3xl text-ink">Questions this blog answers</h2>
            <p className="prose-site mt-4">Each post opens with a short, direct answer. Jump straight to the one you need.</p>
          </div>
          <ul className="divide-y divide-border/70 lg:col-span-7 lg:col-start-6">
            {sorted.map((p) => (
              <li key={p.slug}>
                <Link href={`/blog/${p.slug}`} className="group flex items-start justify-between gap-6 py-4">
                  <span>
                    <span className="block font-serif text-lg leading-snug text-ink group-hover:text-olive-800">{p.title}</span>
                    <span className="mt-1 block text-sm leading-relaxed text-ink-soft line-clamp-2">{p.quickAnswer}</span>
                  </span>
                  <ArrowRight className="mt-1.5 size-4 shrink-0 text-olive-700 transition-transform group-hover:translate-x-1" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <div className="py-20 sm:py-28">
        <CtaBand whatsappMessage="Hi JC, I read your blog and I'd like to ask about a tour." />
      </div>
    </>
  );
}
