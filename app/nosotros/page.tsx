"use client";

import { useScrollReveal } from "@/src/hooks/use-scroll-reveal";
import { WHATSAPP_LINK } from "@/src/libs/company";
import {
  GraduationCap,
  ShieldCheck,
  Award,
  Target,
  Eye,
  Heart,
  CheckCircle2,
  Users,
  Building2,
} from "lucide-react";
import Image from "next/image";

const VALUES = [
  {
    icon: ShieldCheck,
    title: "Seguridad ante todo",
    desc: "Cumplimos estrictamente las normas peruanas de seguridad en cada instalación.",
  },
  {
    icon: GraduationCap,
    title: "Respaldo técnico UNI",
    desc: "Nuestro equipo está formado por ingenieros de la Universidad Nacional de Ingeniería.",
  },
  {
    icon: Award,
    title: "Calidad certificada",
    desc: "Materiales y procesos que garantizan instalaciones duraderas y confiables.",
  },
  {
    icon: Heart,
    title: "Compromiso con el cliente",
    desc: "Acompañamiento técnico personalizado antes, durante y después del proyecto.",
  },
];

const MILESTONES = [
  {
    year: "Inicio",
    title: "Fundación",
    desc: "Maak Constructores nace con la misión de brindar instalaciones de gas natural seguras en Lima.",
  },
  {
    year: "Crecimiento",
    title: "Expansión de servicios",
    desc: "Ampliamos nuestra oferta al sector comercial e industrial con gabinetes de regulación.",
  },
  {
    year: "Hoy",
    title: "Referente técnico",
    desc: "Somos un referente en conversión y mantenimiento de gas natural en el cercado de Lima.",
  },
];

export default function NosotrosPage() {
  useScrollReveal();

  return (
    <div className="overflow-x-hidden">
      {/* HEADER */}
      <section className="relative py-24 bg-maak-dark">
        <div className="absolute inset-0 opacity-20">
          <Image
            fill
            src="https://images.pexels.com/photos/8961146/pexels-photo-8961146.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            alt="Equipo de ingeniería"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="inline-block text-maak-yellow font-bold text-sm uppercase tracking-wider mb-3 animate-fade-in-up">
            Sobre Nosotros
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4 animate-fade-in-up delay-100">
            Profesionales en Gas Natural
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto animate-fade-in-up delay-200">
            Maak Constructores es una empresa especializada en la instalación,
            conversión y mantenimiento de gas natural en Lima, Perú, con
            respaldo técnico profesional.
          </p>
        </div>
      </section>

      {/* INTRO + IMAGE */}
      <section className="py-20 bg-maak-bg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="reveal-left">
              <span className="text-maak-yellow font-bold text-sm uppercase tracking-wider">
                Nuestra Historia
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-maak-dark mt-2 mb-5">
                Compromiso con la seguridad y la calidad
              </h2>
              <p className="text-maak-cement leading-relaxed mb-4">
                En Maak Constructores entendemos que la instalación de gas
                natural no es solo un servicio técnico: es una responsabilidad
                con la seguridad de las familias y negocios de Lima. Por eso,
                cada proyecto lo abordamos con el más alto estándar de calidad y
                cumplimiento normativo.
              </p>
              <p className="text-maak-cement leading-relaxed mb-6">
                Nuestro equipo está conformado por profesionales con formación
                en ingeniería de la Universidad Nacional de Ingeniería (UNI), lo
                que nos permite ofrecer un respaldo técnico sólido y soluciones
                adaptadas a cada necesidad.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-maak-yellow/10 flex items-center justify-center">
                    <Users className="w-5 h-5 text-maak-yellow" />
                  </div>
                  <div>
                    <div className="text-xl font-extrabold text-maak-dark">
                      +10
                    </div>
                    <div className="text-xs text-maak-cement">
                      Años de experiencia
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-maak-cyan/10 flex items-center justify-center">
                    <Building2 className="w-5 h-5 text-maak-cyan" />
                  </div>
                  <div>
                    <div className="text-xl font-extrabold text-maak-dark">
                      100%
                    </div>
                    <div className="text-xs text-maak-cement">
                      Proyectos certificados
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="reveal-right">
              <div className="relative h-105 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  src="https://images.pexels.com/photos/6285147/pexels-photo-6285147.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
                  alt="Equipo técnico Maak Constructores"
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-maak-dark/80 to-transparent p-6">
                  <p className="text-white font-bold text-lg">
                    Equipo técnico profesional
                  </p>
                  <p className="text-gray-300 text-sm">
                    Ingenieros con respaldo UNI
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION / VISION */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="reveal-left bg-maak-bg rounded-2xl p-8 border border-gray-100">
              <div className="w-14 h-14 rounded-xl bg-maak-yellow/10 flex items-center justify-center mb-5">
                <Target className="w-7 h-7 text-maak-yellow" />
              </div>
              <h3 className="font-bold text-xl text-maak-dark mb-3">Misión</h3>
              <p className="text-maak-cement leading-relaxed">
                Brindar servicios de instalación, conversión y mantenimiento de
                gas natural con los más altos estándares de seguridad, calidad y
                respaldo técnico, contribuyendo al ahorro energético de hogares
                y empresas en Lima.
              </p>
            </div>
            <div className="reveal-right bg-maak-bg rounded-2xl p-8 border border-gray-100">
              <div className="w-14 h-14 rounded-xl bg-maak-cyan/10 flex items-center justify-center mb-5">
                <Eye className="w-7 h-7 text-maak-cyan" />
              </div>
              <h3 className="font-bold text-xl text-maak-dark mb-3">Visión</h3>
              <p className="text-maak-cement leading-relaxed">
                Ser la empresa líder y referente técnico en instalaciones de gas
                natural en Lima, reconocida por su profesionalismo, seguridad
                certificada y compromiso con la satisfacción del cliente.
              </p>
            </div>
          </div>

          {/* VALUES */}
          <div className="text-center mb-12 reveal">
            <span className="text-maak-yellow font-bold text-sm uppercase tracking-wider">
              Nuestros Valores
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-maak-dark mt-2">
              Lo que nos define
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map((v, i) => (
              <div key={v.title} className={`reveal delay-${(i + 1) * 100}`}>
                <div className="bg-maak-bg rounded-2xl p-6 h-full border border-gray-100 card-hover">
                  <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center mb-4 shadow-sm">
                    <v.icon className="w-6 h-6 text-maak-yellow" />
                  </div>
                  <h3 className="font-bold text-base text-maak-dark mb-2">
                    {v.title}
                  </h3>
                  <p className="text-sm text-maak-cement leading-relaxed">
                    {v.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="py-20 bg-maak-bg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 reveal">
            <span className="text-maak-yellow font-bold text-sm uppercase tracking-wider">
              Nuestra Trayectoria
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-maak-dark mt-2">
              Hitos que marcan nuestro camino
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {MILESTONES.map((m, i) => (
              <div
                key={m.title}
                className={`reveal delay-${(i + 1) * 100} relative`}
              >
                <div className="bg-white rounded-2xl p-7 border border-gray-100 card-hover h-full">
                  <div className="inline-flex items-center gap-2 bg-maak-yellow/10 text-maak-yellow px-3 py-1 rounded-full text-xs font-bold mb-4">
                    {m.year}
                  </div>
                  <h3 className="font-bold text-lg text-maak-dark mb-2">
                    {m.title}
                  </h3>
                  <p className="text-sm text-maak-cement leading-relaxed">
                    {m.desc}
                  </p>
                </div>
                {i < MILESTONES.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-maak-yellow/30" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-maak-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center reveal">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Conoce nuestro trabajo de cerca
          </h2>
          <p className="text-gray-300 mb-8 max-w-xl mx-auto">
            Solicita una visita técnica y descubre por qué somos un referente en
            gas natural en Lima.
          </p>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-maak-yellow hover:bg-maak-yellow-light text-maak-dark font-bold px-7 py-3.5 rounded-lg text-base transition-all hover:scale-105"
          >
            <CheckCircle2 className="w-5 h-5" />
            Solicitar Visita Técnica
          </a>
        </div>
      </section>
    </div>
  );
}
