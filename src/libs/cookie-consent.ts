export type CookieConsent = {
  /** The site cannot work without these, so they are always allowed. */
  necessary: true;
  /** Optional analytics cookies. Only loaded when this is `true`. */
  analytics: boolean;
  /** ISO timestamp of the user's decision. */
  updatedAt: string;
};

export const COOKIE_CONSENT_KEY = "maak-cookie-consent-v1";

/** Fired on `window` after the user accepts or rejects. */
export const COOKIE_CONSENT_EVENT = "maak:cookie-consent";

/** Fired on `window` to reopen the banner (e.g. from the footer). */
export const OPEN_COOKIE_BANNER_EVENT = "maak:open-cookie-banner";

export function readCookieConsent(): CookieConsent | null {
  if (typeof window === "undefined") return null;

  try {
    const raw = window.localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!raw) return null;

    const parsed = JSON.parse(raw) as {
      analytics?: unknown;
      updatedAt?: unknown;
    } | null;

    if (!parsed || typeof parsed.analytics !== "boolean") return null;

    return {
      necessary: true,
      analytics: parsed.analytics,
      updatedAt:
        typeof parsed.updatedAt === "string" ? parsed.updatedAt : "",
    };
  } catch {
    return null;
  }
}

export function saveCookieConsent(analytics: boolean): CookieConsent {
  const consent: CookieConsent = {
    necessary: true,
    analytics,
    updatedAt: new Date().toISOString(),
  };

  try {
    window.localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(consent));
  } catch {
    // Private mode or blocked storage: the choice still applies this session.
  }

  window.dispatchEvent(
    new CustomEvent<CookieConsent>(COOKIE_CONSENT_EVENT, { detail: consent }),
  );

  return consent;
}

/** Use this before loading analytics scripts or third-party pixels. */
export function hasAnalyticsConsent(): boolean {
  return readCookieConsent()?.analytics === true;
}

export function openCookieBanner(): void {
  window.dispatchEvent(new Event(OPEN_COOKIE_BANNER_EVENT));
}
