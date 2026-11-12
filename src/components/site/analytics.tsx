import Script from "next/script";
import { AnalyticsEvents } from "@/components/site/analytics-events";
import { site } from "@/data/site";

/**
 * Google Analytics 4. Renders nothing until a measurement ID is set (see `site.analytics`),
 * and stays off on Vercel preview deployments so test visits do not pollute the reports.
 * GA4's enhanced measurement records client-side navigations as page views on its own.
 */
export function Analytics() {
  const id = site.analytics.gaId;
  if (!/^G-[A-Z0-9]+$/.test(id)) return null;
  if (process.env.VERCEL_ENV && process.env.VERCEL_ENV !== "production") return null;
  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${id}`} strategy="afterInteractive" />
      <Script id="ga4-init" strategy="afterInteractive">
        {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${id}');`}
      </Script>
      <AnalyticsEvents />
    </>
  );
}
