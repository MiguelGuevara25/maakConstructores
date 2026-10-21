import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Home,
  MessageCircle,
  Phone,
  Send,
  Wrench,
} from "lucide-react";

import { COMPANY, WHATSAPP_LINK } from "@/src/libs/company";

export const metadata: Metadata = {
  title: "¡Gracias por contactarnos!",
  description:
    "Recibimos tu solicitud. Revisa WhatsApp para completar el envío y coordinar tu visita técnica sin costo.",
  // Conversion page: useful for users, but it should not appear in search results.
  robots: { index: false },
};

const STEPS = [
  {
    icon: MessageCircle,
    title: "1. Envía tu mensaje",
    description:
      "Abrimos WhatsApp con tu solicitud lista. Solo pulsa enviar para que nos llegue.",
  },
  {
    icon: Phone,
    title: "2. Te contactamos",
    description:
      "Un asesor revisará tu caso y te responderá en horario de atención.",
  },
  {
    icon: Wrench,
    title: "3. Coordinamos la visita",
    description:
      "Agendamos la visita técnica sin costo y preparamos tu cotización.",
  },
];

export default function GraciasPage() {
  return (
    <section className="relative bg-maak-bg py-24 sm:py-28 overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-linear-to-b from-maak-yellow/10 to-transparent"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 bg-maak-yellow/15 border border-maak-yellow/40 text-maak-dark px-4 py-1.5 rounded-full text-sm font-bold">
            <CheckCircle2 className="w-4 h-4 text-maak-yellow" />
            Solicitud iniciada
          </span>

          <div className="mt-6 flex justify-center">
            <div className="w-24 h-24 rounded-full bg-maak-yellow flex items-center justify-center shadow-lg shadow-maak-yellow/30">
              <CheckCircle2 className="w-12 h-12 text-maak-dark" />
            </div>
          </div>

          <h1 className="mt-6 text-3xl sm:text-4xl font-extrabold text-maak-dark">
            ¡Gracias por contactarnos!
          </h1>

          <p className="mt-4 text-maak-cement leading-relaxed max-w-xl mx-auto">
            Abrimos WhatsApp con tu mensaje listo para enviar. Si aún no lo
            enviaste, complétalo para que podamos atenderte. También puedes
            escribirnos directamente con el botón de abajo.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2 bg-maak-yellow hover:bg-maak-yellow-light text-maak-dark font-bold px-6 py-3 rounded-lg text-sm transition-all hover:scale-105 hover:shadow-lg"
            >
              <Send className="w-4 h-4" />
              Abrir WhatsApp
            </a>
            <Link
              href="/"
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2 bg-white border border-gray-200 text-maak-dark font-bold px-6 py-3 rounded-lg text-sm hover:border-maak-yellow hover:text-maak-yellow transition-colors"
            >
              <Home className="w-4 h-4" />
              Volver al inicio
            </Link>
          </div>

          <p className="mt-4 text-sm text-maak-cement">
            ¿Prefieres llamarnos?{" "}
            <a
              href={`tel:${COMPANY.phoneRaw}`}
              className="font-semibold text-maak-dark hover:text-maak-yellow transition-colors"
            >
              {COMPANY.phone}
            </a>
          </p>
        </div>

        <div className="mt-14 max-w-4xl mx-auto">
          <p className="text-center text-xs font-bold uppercase tracking-wider text-maak-cement mb-4">
            Qué sigue
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {STEPS.map((step) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.title}
                  className="bg-white rounded-xl border border-gray-100 p-6"
                >
                  <div className="w-10 h-10 rounded-lg bg-maak-yellow/15 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-maak-yellow" />
                  </div>
                  <p className="mt-3 font-bold text-sm text-maak-dark">
                    {step.title}
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-maak-cement">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/servicios"
            className="inline-flex items-center gap-2 text-sm font-bold text-maak-dark hover:text-maak-yellow transition-colors"
          >
            Mientras tanto, revisa nuestros servicios
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
