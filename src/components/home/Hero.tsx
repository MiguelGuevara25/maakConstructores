import Link from 'next/link'
import Image from 'next/image'

import { STATS } from '@/src/data/home'
import { ArrowRight, Star } from 'lucide-react'
import { WHATSAPP_LINK } from '@/src/libs/company'

export default function Hero() {
  return (
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
  )
}
