const GA_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

export function initGA(): void {
  if (!GA_ID) return;
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(script);
  window.dataLayer = window.dataLayer || [];
  window.gtag = function (...args: unknown[]) { window.dataLayer.push(args); };
  window.gtag('js', new Date());
  window.gtag('config', GA_ID, { send_page_view: false });
}

export function trackPageView(path: string): void {
  if (!GA_ID || typeof window.gtag !== 'function') return;
  window.gtag('event', 'page_view', { page_path: path, send_to: GA_ID });
}

export function trackEvent(
  eventName: string,
  params: Record<string, string | number | boolean> = {}
): void {
  if (!GA_ID || typeof window.gtag !== 'function') return;
  window.gtag('event', eventName, { send_to: GA_ID, ...params });
}

// Returns a stable session-scoped ID used to correlate client and server events.
export function getSessionId(): string {
  const KEY = 'wa_sid';
  let sid = sessionStorage.getItem(KEY);
  if (!sid) {
    sid = Math.random().toString(36).slice(2) + Date.now().toString(36);
    sessionStorage.setItem(KEY, sid);
  }
  return sid;
}

// WhatsApp funnel stages tracked by this module:
//   whatsapp_click    — user clicked a WhatsApp button (click intent, client GA4)
//   whatsapp_opened   — user's browser followed /track/whatsapp → 302 → wa.me
//                       (deterministic open signal, server stdout + GA4 MP)
//   whatsapp_returned — user returned to the page after switching to WhatsApp
//                       (heuristic supplementary signal, client GA4 via visibilitychange)
// "whatsapp_opened" is NOT equivalent to "message sent"; true message-sent
// confirmation requires WhatsApp Business API webhook integration.
//
// Builds a /track/whatsapp redirect URL that logs the open server-side,
// then 302s to the actual wa.me URL. The label/lang/sid params enable
// per-button funnel analysis in GA4 and server logs.
export function buildWhatsAppTrackingUrl(
  waUrl: string,
  label: string,
  language: string
): string {
  const params = new URLSearchParams({
    url: encodeURIComponent(waUrl),
    label,
    lang: language,
    sid: getSessionId(),
  });
  return `/track/whatsapp?${params.toString()}`;
}

// Fires GA4 whatsapp_click (client-side intent signal) and sets up a
// visibilitychange listener that fires whatsapp_returned when the user
// comes back to the page.  whatsapp_returned is a supplementary heuristic
// signal distinct from the server-side whatsapp_opened event (which fires
// when the /track/whatsapp redirect is hit), preventing double-counting.
export function trackWhatsAppClick(
  label: string,
  params: Record<string, string | number | boolean> = {}
): void {
  const sid = getSessionId();
  trackEvent('whatsapp_click', { label, sid, ...params });

  let pageWasHidden = false;
  let timeoutId: ReturnType<typeof setTimeout>;

  const cleanup = () => {
    document.removeEventListener('visibilitychange', handleVisibilityChange);
    clearTimeout(timeoutId);
  };

  const handleVisibilityChange = () => {
    if (document.visibilityState === 'hidden') { pageWasHidden = true; return; }
    if (document.visibilityState === 'visible' && pageWasHidden) {
      trackEvent('whatsapp_returned', { label, sid, ...params });
      cleanup();
    }
  };

  document.addEventListener('visibilitychange', handleVisibilityChange);
  timeoutId = setTimeout(cleanup, 5 * 60 * 1000);
}
