import type { NextConfig } from "next";

/** Old blog slugs (previous WordPress site + first import) mapped to the closest new post. */
const legacyPostRedirects: Record<string, string> = {
  "should-we-go-aaaaall-the-way-to-montezuma": "/blog/getting-to-montezuma",
  "planning-your-trip-to-costa-rica-5-tips-to-reduce-your-planning-stress": "/blog/getting-to-montezuma",
  birding_in_montezuma: "/blog/birdwatching-montezuma-cabuya",
  "counting-birds-in-tambor-bay": "/blog/birdwatching-montezuma-cabuya",
  "montezuma-school-goes-bird-watching": "/blog/birdwatching-montezuma-cabuya",
  "enjoying-nature-in-curu-wildlife-refuge": "/blog/curu-wildlife-refuge-guide",
  "a-good-time-for-nocturno": "/blog/night-hike-montezuma-nocturno",
  "why-nocturno": "/blog/night-hike-montezuma-nocturno",
  "5-reasons-we-love-low-season-in-costa-rica": "/blog/best-time-to-visit-montezuma",
  "what-green-really-means": "/blog/best-time-to-visit-montezuma",
  "a-costa-rican-culinary-treat-chorreadas-con-natilla": "/blog/lets-get-local-family-farm",
  "the-experience-of-living-abroad-in-just-1-day": "/blog/lets-get-local-family-farm",
  "montezuma-for-families": "/blog/lets-get-local-family-farm",
};

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // The Recommendations page (other regions and hotels) was retired: the site only talks about our own journeys now.
      { source: "/recommendations", destination: "/tours", permanent: true },
      { source: "/recommendations/:path*", destination: "/tours", permanent: true },
      ...Object.entries(legacyPostRedirects).map(([slug, destination]) => ({
        source: `/blog/${slug}`,
        destination,
        permanent: true,
      })),
      // Any other retired post lands on the blog index.
      { source: "/blog/:slug((?!getting-to-montezuma|birdwatching-montezuma-cabuya|curu-wildlife-refuge-guide|night-hike-montezuma-nocturno|best-time-to-visit-montezuma|lets-get-local-family-farm).*)", destination: "/blog", permanent: false },
    ];
  },
};

export default nextConfig;
