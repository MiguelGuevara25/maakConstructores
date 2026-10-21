import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Home, SearchX } from "lucide-react";

export const metadata: Metadata = {
  title: "Página no encontrada",
  description:
    "La página que buscas no existe o cambió de dirección. Vuelve al inicio o revisa nuestros servicios de gas natural.",
};

const QUICK_LINKS = [
  {
    href: "/servicios",
    label: "Servicios",
    desc: "Instalación, conversión y mantenimiento",
  },
  {
    href: "/proyectos",
    label: "Proyectos",
    desc: "Trabajos realizados en Lima",
  },
  {
    href: "/nosotros",
    label: "Nosotros",
    desc: "Quiénes somos y cómo trabajamos",
  },
  {
    href: "/contacto",
    label: "Contacto",
    desc: "Solicita tu visita técnica sin costo",
  },
];

export default function NotFound() {
  return (
    <section className="relative bg-maak-bg py-24 sm:py-28 overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-linear-to-b from-maak-yellow/10 to-transparent"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 bg-maak-yellow/15 border border-maak-yellow/40 text-maak-dark px-4 py-1.5 rounded-full text-sm font-bold">
            <SearchX className="w-4 h-4 text-maak-yellow" />
            Error 404
          </span>

          <p
            aria-hidden="true"
            className="mt-6 text-[96px] sm:text-[140px] leading-none font-extrabold text-maak-yellow"
          >
            404
          </p>

          <h1 className="mt-2 text-3xl sm:text-4xl font-extrabold text-maak-dark">
            Página no encontrada
          </h1>

          <p className="mt-4 text-maak-cement leading-relaxed max-w-xl mx-auto">
            La página que buscas no existe, cambió de nombre o fue movida.
            Revisa el enlace o vuelve al inicio para seguir navegando.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/"
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2 bg-maak-yellow hover:bg-maak-yellow-light text-maak-dark font-bold px-6 py-3 rounded-lg text-sm transition-all hover:scale-105 hover:shadow-lg"
            >
              <Home className="w-4 h-4" />
              Volver al inicio
            </Link>
            <Link
              href="/servicios"
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2 bg-white border border-gray-200 text-maak-dark font-bold px-6 py-3 rounded-lg text-sm hover:border-maak-yellow hover:text-maak-yellow transition-colors"
            >
              Ver servicios
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        <div className="mt-14 max-w-4xl mx-auto">
          <p className="text-center text-xs font-bold uppercase tracking-wider text-maak-cement mb-4">
            Quizá buscabas
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {QUICK_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group flex items-start justify-between gap-4 bg-white rounded-xl border border-gray-100 p-5 transition-all hover:border-maak-yellow/60 hover:shadow-md"
              >
                <div>
                  <p className="font-bold text-sm text-maak-dark group-hover:text-maak-yellow transition-colors">
                    {link.label}
                  </p>
                  <p className="mt-1 text-xs text-maak-cement">{link.desc}</p>
                </div>
                <ArrowLeft className="w-4 h-4 mt-1 rotate-180 text-maak-cement group-hover:text-maak-yellow transition-colors shrink-0" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
