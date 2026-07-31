"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

import { SERVICES } from "@/src/data/home";
import { useScrollReveal } from "@/src/hooks/use-scroll-reveal";

import CTA from "@/src/components/home/CTA";
import Hero from "@/src/components/home/Hero";
import Gallery from "@/src/components/home/Gallery";
import Benefits from "@/src/components/home/Benefits";

export default function Home() {
  useScrollReveal();

  return (
    <div className="overflow-x-hidden">
      {/* HERO */}
      <Hero />

      {/* BENEFITS */}
      <Benefits />

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
                href={s.href || "/servicios"}
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
      <Gallery />

      {/* CTA BANNER */}
      <CTA />
    </div>
  );
}
