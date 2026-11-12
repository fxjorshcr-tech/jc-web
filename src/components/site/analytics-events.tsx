"use client";

import * as React from "react";
import { track } from "@/lib/analytics";

/** Records taps on WhatsApp, email and Tripadvisor links anywhere on the site as GA4 events. */
export function AnalyticsEvents() {
  React.useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const link = (e.target as Element | null)?.closest?.("a[href]");
      const href = link?.getAttribute("href") ?? "";
      const page = window.location.pathname;
      if (href.startsWith("https://wa.me/")) track("whatsapp_click", { page });
      else if (href.startsWith("mailto:")) track("email_click", { page });
      else if (href.includes("tripadvisor.")) track("tripadvisor_click", { page });
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);
  return null;
}
