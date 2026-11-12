/** Sends a GA4 event. Does nothing until Google Analytics is configured and loaded. */
export function track(event: string, params?: Record<string, string | number | boolean>) {
  if (typeof window === "undefined") return;
  const w = window as Window & { gtag?: (...args: unknown[]) => void };
  w.gtag?.("event", event, params);
}
