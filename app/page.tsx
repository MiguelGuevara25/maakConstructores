"use client";

import Link from "next/link";
import Image from "next/image";

import { COMPANY, WHATSAPP_LINK } from "@/src/libs/company";
import { useScrollReveal } from "@/src/hooks/use-scroll-reveal";
import { ArrowRight, Phone, Star, CheckCircle2 } from "lucide-react";
import { BENEFITS, GALLERY, SERVICES, STATS } from "@/src/data/home";

export default function Home() {
  useScrollReveal();

  return (
    <div className="overflow-x-hidden">
      {/* HERO */}
      <section className="relative min-h-[88vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            fill
            priority
            src="https://images.pexels.com/photos/9389356/pexels-photo-9389356.jpeg?auto=compress&cs=tinysrgb&h=900&w=1600"
            alt="Instalación de gas natural en Lima"
            className="object-cover"
          />
          <div className="absolute inset-0 hero-overlay" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-maak-yellow/20 border border-maak-yellow/40 text-maak-yellow px-4 py-1.5 rounded-full text-sm font-semibold mb-6 animate-fade-in-up">
              <Star className="w-4 h-4 fill-maak-yellow" />
              Especialistas en Gas Natural en Lima
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] mb-6 text-balance animate-fade-in-up delay-100">
              Instalación, Conexión y Suministro de{" "}
              <span className="text-gradient-yellow">Gas Natural y GLP</span> en
              todo el Perú
            </h1>
            <p className="text-lg sm:text-xl text-gray-200 leading-relaxed mb-8 max-w-2xl animate-fade-in-up delay-200">
              Impulsamos tus proyectos con energia segura. Expertos en
              instalaciones de gas natural y GLP para los sectores{" "}
              <strong className="text-maak-yellow">
                residencial, comercial, multifamiliar e industrial.
              </strong>{" "}
              Ejecutamos proyectos con altos estándares de seguridad, calidad y
              respaldo ténico profesional.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-300">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-maak-yellow hover:bg-maak-yellow-light text-maak-dark font-bold px-7 py-3.5 rounded-lg text-base transition-all hover:scale-105 hover:shadow-xl animate-pulse-glow"
              >
                Solicitar Visita Técnica
                <ArrowRight className="w-5 h-5" />
              </a>
              <Link
                href="/servicios"
                className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border border-white/30 text-white font-semibold px-7 py-3.5 rounded-lg text-base hover:bg-white/20 transition-all"
              >
                Ver Servicios
              </Link>
            </div>

            {/* Stats inline */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12 animate-fade-in-up delay-500">
              {STATS.map((s) => (
                <div key={s.label}>
                  <div className="text-3xl font-extrabold text-maak-yellow">
                    {s.value}
                  </div>
                  <div className="text-xs text-gray-300 font-medium">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-20 bg-maak-bg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 reveal">
            <span className="text-maak-yellow font-bold text-sm uppercase tracking-wider">
              ¿Por qué elegirnos?
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-maak-dark mt-2 mb-3">
              Beneficios que nos respaldan
            </h2>
            <p className="text-maak-cement max-w-2xl mx-auto">
              Más que una instalación, te brindamos la tranquilidad de un
              servicio técnico profesional y seguro.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {BENEFITS.map((b, i) => (
              <div key={b.title} className={`reveal delay-${(i + 1) * 100}`}>
                <div className="bg-white rounded-2xl p-7 h-full card-hover border border-gray-100">
                  <div
                    className={`w-14 h-14 rounded-xl ${b.bg} flex items-center justify-center mb-5`}
                  >
                    <b.icon className={`w-7 h-7 ${b.color}`} strokeWidth={2} />
                  </div>
                  <h3 className="font-bold text-lg text-maak-dark mb-2">
                    {b.title}
                  </h3>
                  <p className="text-sm text-maak-cement leading-relaxed">
                    {b.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES SUMMARY */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 reveal">
            <span className="text-maak-yellow font-bold text-sm uppercase tracking-wider">
              Nuestros Servicios
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-maak-dark mt-2 mb-3">
              Soluciones completas en gas natural
            </h2>
            <p className="text-maak-cement max-w-2xl mx-auto">
              Atendemos proyectos residenciales, comerciales e industriales con
              el mismo nivel de excelencia técnica.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SERVICES.map((s, i) => (
              <Link
                href={s.href}
                key={s.title}
                className={`reveal delay-${(i + 1) * 100} group`}
              >
                <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 card-hover h-full">
                  <div className="relative h-52 overflow-hidden">
                    <Image
                      src={s.img}
                      alt={s.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-maak-dark/70 to-transparent" />
                    <div className="absolute bottom-4 left-4 w-12 h-12 rounded-xl bg-maak-yellow flex items-center justify-center">
                      <s.icon
                        className="w-6 h-6 text-maak-dark"
                        strokeWidth={2}
                      />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-lg text-maak-dark mb-2">
                      {s.title}
                    </h3>
                    <p className="text-sm text-maak-cement mb-4 leading-relaxed">
                      {s.desc}
                    </p>
                    <span className="inline-flex items-center gap-1.5 text-maak-yellow font-bold text-sm group-hover:gap-3 transition-all">
                      Ver más <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY PREVIEW */}
      <section className="py-20 bg-maak-bg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-10 reveal">
            <div>
              <span className="text-maak-yellow font-bold text-sm uppercase tracking-wider">
                Proyectos Destacados
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-maak-dark mt-2">
                Muestra de nuestro trabajo
              </h2>
            </div>
            <Link
              href="/proyectos"
              className="inline-flex items-center gap-2 text-maak-yellow font-bold text-sm hover:gap-3 transition-all mt-4 sm:mt-0"
            >
              Ver galería completa <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {GALLERY.map((item, i) => (
              <div
                key={item.title}
                className={`reveal-scale delay-${(i + 1) * 100} img-overlay-hover rounded-xl overflow-hidden relative aspect-4/3`}
              >
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-maak-dark/80 via-transparent to-transparent z-10" />
                <div className="absolute bottom-3 left-3 z-20">
                  <span className="inline-block bg-maak-yellow text-maak-dark text-[10px] font-bold px-2 py-0.5 rounded-full mb-1.5">
                    {item.cat}
                  </span>
                  <p className="text-white font-semibold text-sm">
                    {item.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="py-20 bg-maak-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="https://images.pexels.com/photos/6419128/pexels-photo-6419128.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            alt="Fondo gas natural"
            fill
            className="object-cover"
          />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center reveal">
            <div className="inline-flex items-center gap-2 bg-maak-yellow/20 text-maak-yellow px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
              <CheckCircle2 className="w-4 h-4" />
              Agenda sin costo de evaluación
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-5 text-balance">
              ¿Listo para ahorrar con{" "}
              <span className="text-gradient-yellow">gas natural</span>?
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Solicita tu visita técnica y recibe una cotización personalizada
              para tu hogar o negocio en Lima.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-maak-yellow hover:bg-maak-yellow-light text-maak-dark font-bold px-7 py-3.5 rounded-lg text-base transition-all hover:scale-105 hover:shadow-xl"
              >
                Agendar por WhatsApp
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href={`tel:${COMPANY.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border border-white/30 text-white font-semibold px-7 py-3.5 rounded-lg text-base hover:bg-white/20 transition-all"
              >
                <Phone className="w-5 h-5" />
                {COMPANY.phone}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
