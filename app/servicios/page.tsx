"use client";

import Header from "@/src/components/Header";
import Process from "@/src/components/services/Process";
import { SERVICES } from "@/src/data/servicios";
import { useScrollReveal } from "@/src/hooks/use-scroll-reveal";
import { WHATSAPP_LINK, WHATSAPP_LINK_CUSTOM } from "@/src/libs/company";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import Image from "next/image";

export default function ServiciosPage() {
  useScrollReveal();

  return (
    <div className="overflow-x-hidden">
      {/* HEADER */}
      <Header
        src="https://images.pexels.com/photos/6419128/pexels-photo-6419128.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
        title="Nuestros Servicios"
        subtitle="Soluciones en Gas Natural"
        description="Servicios completos de instalación, conversión y mantenimiento para hogares, comercios e industrias en Lima."
      />

      {/* SERVICES */}
      {SERVICES.map((s, idx) => (
        <section
          key={s.id}
          id={s.id}
          className={`py-20 ${idx % 2 === 0 ? "bg-maak-bg" : "bg-white"} scroll-mt-24`}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                idx % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Image */}
              <div
                className={`reveal-${
                  idx % 2 === 0 ? "left" : "right"
                } ${idx % 2 === 1 ? "lg:order-2" : ""}`}
              >
                <div className="relative h-95 rounded-2xl overflow-hidden shadow-2xl group">
                  <Image
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    src={s.img}
                    alt={s.title}
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-maak-dark/60 to-transparent" />
                  <div className="absolute top-4 left-4 w-14 h-14 rounded-xl bg-maak-yellow flex items-center justify-center shadow-lg">
                    <s.icon
                      className="w-7 h-7 text-maak-dark"
                      strokeWidth={2}
                    />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div
                className={`reveal-${
                  idx % 2 === 0 ? "right" : "left"
                } ${idx % 2 === 1 ? "lg:order-1" : ""}`}
              >
                <span className="text-maak-yellow font-bold text-sm uppercase tracking-wider">
                  {s.subtitle}
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-maak-dark mt-2 mb-4">
                  {s.title}
                </h2>
                <p className="text-maak-cement leading-relaxed mb-6">
                  {s.desc}
                </p>
                <ul className="space-y-3 mb-8">
                  {s.features.map((f) => (
                    <li key={f.text} className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-maak-yellow/10 flex items-center justify-center shrink-0 mt-0.5">
                        <f.icon className="w-4 h-4 text-maak-yellow" />
                      </div>
                      <span className="text-sm text-maak-dark font-medium pt-1">
                        {f.text}
                      </span>
                    </li>
                  ))}
                </ul>
                <a
                  href={WHATSAPP_LINK_CUSTOM(
                    `Hola Maak Constructores, deseo solicitar una visita técnica y cotización para ${s.title}.`,
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-maak-yellow hover:bg-maak-yellow-light text-maak-dark font-bold px-6 py-3 rounded-lg text-sm transition-all hover:scale-105 hover:shadow-lg"
                >
                  {s.cta}
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* PROCESS */}
      <Process />
    </div>
  );
}
