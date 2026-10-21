"use client";

import { openCookieBanner } from "@/src/libs/cookie-consent";

export default function CookiePreferencesButton() {
  return (
    <button
      type="button"
      onClick={openCookieBanner}
      className="text-xs text-gray-500 hover:text-maak-yellow underline-offset-2 hover:underline transition-colors"
    >
      Preferencias de cookies
    </button>
  );
}
