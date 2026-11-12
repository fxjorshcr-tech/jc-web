import Script from "next/script";
import { AnalyticsEvents } from "@/components/site/analytics-events";
import { site } from "@/data/site";

/**
 * Google Analytics 4, loaded with the Google tag snippet exactly as Analytics hands it out.
 * Renders nothing without an ID (see `site.analytics`), and stays off on Vercel preview
 * deployments so test visits do not pollute the reports.
 * GA4's enhanced measurement records client-side navigations as page views on its own.
 */
export function Analytics() {
  const id = site.analytics.gaId;
  // Newer properties get a "GTM-..." Google tag served from gtm.js; older ones a "G-..." ID that needs a config call.
  const isGoogleTag = /^GTM-[A-Z0-9]+$/.test(id);
  if (!isGoogleTag && !/^G-[A-Z0-9]+$/.test(id)) return null;
  if (process.env.VERCEL_ENV && process.env.VERCEL_ENV !== "production") return null;
  return (
    <>
      <Script src={`https://www.googletagmanager.com/${isGoogleTag ? "gtm.js" : "gtag/js"}?id=${id}`} strategy="afterInteractive" />
      <Script id="ga4-init" strategy="afterInteractive">
        {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());${isGoogleTag ? "" : `gtag('config','${id}');`}`}
      </Script>
      <AnalyticsEvents />
    </>
  );
}
