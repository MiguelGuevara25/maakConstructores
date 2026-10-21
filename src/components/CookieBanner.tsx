"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { Cookie, X } from "lucide-react";

import { COMPANY } from "@/src/libs/company";
import {
  COOKIE_CONSENT_EVENT,
  COOKIE_CONSENT_KEY,
  OPEN_COOKIE_BANNER_EVENT,
  saveCookieConsent,
} from "@/src/libs/cookie-consent";

function subscribe(onStoreChange: () => void) {
  window.addEventListener(COOKIE_CONSENT_EVENT, onStoreChange);
  window.addEventListener("storage", onStoreChange);

  return () => {
    window.removeEventListener(COOKIE_CONSENT_EVENT, onStoreChange);
    window.removeEventListener("storage", onStoreChange);
  };
}

function getSnapshot(): string | null {
  try {
    return window.localStorage.getItem(COOKIE_CONSENT_KEY);
  } catch {
    return null;
  }
}

// During SSR there is no storage: pretend the decision exists so the banner is
// not part of the static HTML. It appears after hydration only if needed.
function getServerSnapshot(): string {
  return "server";
}

export default function CookieBanner() {
  const storedConsent = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  );
  // Reopened from the footer: shown again even if a choice was already saved.
  const [reopened, setReopened] = useState(false);

  useEffect(() => {
    const handleOpen = () => setReopened(true);
    window.addEventListener(OPEN_COOKIE_BANNER_EVENT, handleOpen);

    return () =>
      window.removeEventListener(OPEN_COOKIE_BANNER_EVENT, handleOpen);
  }, []);

  const visible = reopened || storedConsent === null;

  const choose = (analytics: boolean) => {
    saveCookieConsent(analytics);
    setReopened(false);
  };

  if (!visible) return null;

  return (
    <aside
      role="region"
      aria-label="Aviso de cookies"
      className="cookie-banner fixed inset-x-4 bottom-24 z-[9998] rounded-2xl border border-gray-200 bg-white p-5 shadow-2xl sm:inset-x-auto sm:bottom-6 sm:left-6 sm:w-96"
    >
      <div className="flex items-start gap-3">
        <div className="w-10 h-10 shrink-0 rounded-lg bg-maak-yellow/15 flex items-center justify-center">
          <Cookie className="w-5 h-5 text-maak-yellow" />
        </div>

        <div className="flex-1">
          <h2 className="text-sm font-extrabold text-maak-dark">
            Usamos cookies
          </h2>
          <p className="mt-1 text-xs leading-relaxed text-maak-cement">
            Las necesarias mantienen el sitio funcionando. Con tu permiso,
            también usamos cookies de análisis para entender cómo se usa y
            mejorarlo.
          </p>
        </div>

        {reopened && (
          <button
            type="button"
            onClick={() => setReopened(false)}
            aria-label="Cerrar aviso de cookies"
            className="shrink-0 -mt-1 -mr-1 p-1.5 rounded-md text-maak-cement hover:text-maak-dark hover:bg-gray-100 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      <details className="mt-3 text-xs text-maak-cement">
        <summary className="cursor-pointer font-semibold text-maak-dark hover:text-maak-yellow transition-colors">
          ¿Qué cookies usamos?
        </summary>
        <ul className="mt-2 space-y-1.5 list-disc pl-4 leading-relaxed">
          <li>
            <strong className="text-maak-dark">Necesarias:</strong> mantienen el
            sitio operativo y guardan tu elección de cookies.
          </li>
          <li>
            <strong className="text-maak-dark">Análisis (opcionales):</strong>{" "}
            solo se activan si aceptas y nos ayudan a medir visitas de forma
            agregada.
          </li>
        </ul>
        <p className="mt-2 leading-relaxed">
          No usamos cookies publicitarias. Si tienes dudas, escríbenos a{" "}
          <a
            href={`mailto:${COMPANY.email}`}
            className="font-semibold text-maak-dark underline underline-offset-2 hover:text-maak-yellow"
          >
            {COMPANY.email}
          </a>
          .
        </p>
      </details>

      <div className="mt-4 grid grid-cols-2 gap-2">
        <button
          type="button"
          onClick={() => choose(false)}
          className="px-3 py-2.5 rounded-lg border border-gray-200 text-xs font-bold text-maak-dark hover:border-maak-yellow hover:text-maak-yellow transition-colors"
        >
          Solo necesarias
        </button>
        <button
          type="button"
          onClick={() => choose(true)}
          className="px-3 py-2.5 rounded-lg bg-maak-yellow hover:bg-maak-yellow-light text-maak-dark text-xs font-bold transition-colors"
        >
          Aceptar todas
        </button>
      </div>
    </aside>
  );
}
