'use client';

import { useScrollReveal } from '@/src/hooks/use-scroll-reveal';
import { WHATSAPP_LINK, WHATSAPP_LINK_CUSTOM } from '@/src/libs/company';
import {
  Home as HomeIcon,
  Building2,
  Wrench,
  CheckCircle2,
  ArrowRight,
  Flame,
  ShowerHead,
  WashingMachine,
  UtensilsCrossed,
  Factory,
  Gauge,
  Search,
  ShieldCheck,
  FileCheck,
} from 'lucide-react';
import Image from 'next/image';

const SERVICES = [
  {
    id: 'residencial',
    icon: HomeIcon,
    title: 'Gas Natural Residencial',
    subtitle: 'Conversión para tu hogar',
    desc: 'Convertimos y instalamos redes de gas natural para tu casa, garantizando ahorro real y seguridad para tu familia.',
    img: 'https://images.pexels.com/photos/6510984/pexels-photo-6510984.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    features: [
      { icon: Flame, text: 'Conversión de cocinas a gas natural' },
      { icon: ShowerHead, text: 'Instalación de termas y calentadores' },
      { icon: WashingMachine, text: 'Conversión de secadoras' },
      { icon: Gauge, text: 'Redes internas de tuberías certificadas' },
    ],
    cta: 'Quiero convertir mi hogar',
  },
  {
    id: 'comercial',
    icon: Building2,
    title: 'Gas Natural Comercial e Industrial',
    subtitle: 'Soluciones para tu negocio',
    desc: 'Atendemos restaurantes, panaderías e industrias con instalaciones de alta demanda y gabinetes de regulación profesional.',
    img: 'https://images.pexels.com/photos/15671373/pexels-photo-15671373.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    features: [
      { icon: UtensilsCrossed, text: 'Restaurantes y cocinas comerciales' },
      { icon: Flame, text: 'Panaderías y hornos industriales' },
      { icon: Factory, text: 'Instalaciones para industria' },
      { icon: Gauge, text: 'Gabinetes de regulación a medida' },
    ],
    cta: 'Quiero instalar en mi negocio',
  },
  {
    id: 'mantenimiento',
    icon: Wrench,
    title: 'Mantenimiento y Certificación',
    subtitle: 'Seguridad garantizada',
    desc: 'Servicio técnico preventivo y correctivo para asegurar el funcionamiento óptimo y seguro de tus instalaciones de gas.',
    img: 'https://images.pexels.com/photos/16752780/pexels-photo-16752780.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    features: [
      { icon: Search, text: 'Detección de fugas de gas' },
      { icon: Wrench, text: 'Mantenimiento preventivo programado' },
      { icon: ShieldCheck, text: 'Inspección técnica de seguridad' },
      { icon: FileCheck, text: 'Certificación de instalaciones' },
    ],
    cta: 'Quiero un mantenimiento',
  },
];

export default function ServiciosPage() {
  useScrollReveal();

  return (
    <div className="overflow-x-hidden">
      {/* HEADER */}
      <section className="relative py-24 bg-maak-dark">
        <div className="absolute inset-0 opacity-20">
          <Image
            fill
            priority
            src="https://images.pexels.com/photos/6419128/pexels-photo-6419128.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            alt="Servicios de gas natural"
            className="object-cover"
          />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="inline-block text-maak-yellow font-bold text-sm uppercase tracking-wider mb-3 animate-fade-in-up">
            Nuestros Servicios
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4 animate-fade-in-up delay-100">
            Soluciones en Gas Natural
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto animate-fade-in-up delay-200">
            Servicios completos de instalación, conversión y mantenimiento para
            hogares, comercios e industrias en Lima.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      {SERVICES.map((s, idx) => (
        <section
          key={s.id}
          id={s.id}
          className={`py-20 ${idx % 2 === 0 ? 'bg-maak-bg' : 'bg-white'} scroll-mt-24`}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                idx % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Image */}
              <div
                className={`reveal-${
                  idx % 2 === 0 ? 'left' : 'right'
                } ${idx % 2 === 1 ? 'lg:order-2' : ''}`}
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
                    <s.icon className="w-7 h-7 text-maak-dark" strokeWidth={2} />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div
                className={`reveal-${
                  idx % 2 === 0 ? 'right' : 'left'
                } ${idx % 2 === 1 ? 'lg:order-1' : ''}`}
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
                    `Hola Maak Constructores, deseo solicitar una visita técnica y cotización para ${s.title}.`
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
      <section className="py-20 bg-maak-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 reveal">
            <span className="text-maak-yellow font-bold text-sm uppercase tracking-wider">
              Cómo Trabajamos
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2">
              Nuestro proceso en 4 pasos
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { num: '01', title: 'Contacto', desc: 'Nos escribes por WhatsApp y coordinamos la visita.' },
              { num: '02', title: 'Evaluación', desc: 'Realizamos una inspección técnica de tu espacio.' },
              { num: '03', title: 'Cotización', desc: 'Te enviamos una propuesta clara y personalizada.' },
              { num: '04', title: 'Instalación', desc: 'Ejecutamos el trabajo con seguridad certificada.' },
            ].map((step, i) => (
              <div
                key={step.num}
                className={`reveal delay-${(i + 1) * 100} relative`}
              >
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 h-full">
                  <div className="text-4xl font-extrabold text-maak-yellow/30 mb-3">
                    {step.num}
                  </div>
                  <h3 className="font-bold text-lg text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 reveal">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-maak-yellow hover:bg-maak-yellow-light text-maak-dark font-bold px-7 py-3.5 rounded-lg text-base transition-all hover:scale-105"
            >
              <CheckCircle2 className="w-5 h-5" />
              Comienza tu proyecto hoy
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
