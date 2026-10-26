import type { Metadata } from "next";
import localFont from "next/font/local";
import { Header } from "@/components/site/header";
import { Footer } from "@/components/site/footer";
import { site } from "@/data/site";
import "./globals.css";

// Self-hosted variable fonts (SIL Open Font License, see src/fonts/LICENSE-*.txt).
// Local files keep the build independent from Google Fonts availability.
const outfit = localFont({
  src: [{ path: "../fonts/outfit-variable.woff2", weight: "100 900", style: "normal" }],
  variable: "--font-outfit",
  display: "swap",
});

const nunitoSans = localFont({
  src: [
    { path: "../fonts/nunito-sans-variable.woff2", weight: "200 1000", style: "normal" },
    { path: "../fonts/nunito-sans-variable-italic.woff2", weight: "200 1000", style: "italic" },
  ],
  variable: "--font-nunito-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | ${site.tagline}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  keywords: [
    "Montezuma tours",
    "Costa Rica nature tours",
    "birdwatching Montezuma",
    "Curu Wildlife Refuge tour",
    "Nicoya Peninsula guide",
    "night hike Montezuma",
    "Cabuya",
    "organic farm tour Costa Rica",
  ],
  openGraph: {
    type: "website",
    siteName: site.name,
    locale: "en_US",
    url: site.url,
    title: `${site.name} | ${site.tagline}`,
    description: site.description,
    images: [{ url: `/images/${site.ogImage}`, width: 1200, height: 630, alt: site.tagline }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | ${site.tagline}`,
    description: site.description,
    images: [`/images/${site.ogImage}`],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${outfit.variable} ${nunitoSans.variable}`}>
      <body className="flex min-h-screen flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:rounded-md focus:bg-ink focus:px-4 focus:py-2 focus:text-cream"
        >
          Skip to content
        </a>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
