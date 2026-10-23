import type { Metadata } from "next";
import { PostCard } from "@/components/blog/post-card";
import { CtaBand } from "@/components/site/cta-band";
import { PageHero } from "@/components/site/page-hero";
import { posts } from "@/data/posts";

export const metadata: Metadata = {
  title: "Travel Journal",
  description: "Stories and practical tips from Montezuma and the Nicoya Peninsula: getting here, packing light, birding, low season, family travel and more.",
  alternates: { canonical: "/blog" },
  openGraph: { title: "Travel Journal | JC's Journeys", description: "Stories and tips from Montezuma and the Nicoya Peninsula.", url: "/blog" },
};

export default function BlogPage() {
  const [latest, ...rest] = posts;
  return (
    <>
      <PageHero
        eyebrow="Travel journal"
        title={
          <>
            Notes from the <em className="font-light">peninsula</em>
          </>
        }
        intro={<p>Practical tips and stories from our journeys: how to get to Montezuma, what to pack, where to go next, and who we met along the way.</p>}
      />
      <section className="container-site py-16 sm:py-24">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-12">
            <PostCard post={latest} />
          </div>
        </div>
        <div className="mt-16 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </section>
      <div className="pb-4">
        <CtaBand />
      </div>
    </>
  );
}
