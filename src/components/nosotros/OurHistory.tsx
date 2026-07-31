import { Building2, Users } from "lucide-react";
import Image from "next/image";

export default function OurHistory() {
  return (
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
              En Maak Constructores entendemos que la instalación de gas natural
              no es solo un servicio técnico: es una responsabilidad con la
              seguridad de las familias y negocios de Lima. Por eso, cada
              proyecto lo abordamos con el más alto estándar de calidad y
              cumplimiento normativo.
            </p>
            <p className="text-maak-cement leading-relaxed mb-6">
              Nuestro equipo está conformado por profesionales con formación en
              ingeniería de la Universidad Nacional de Ingeniería (UNI), lo que
              nos permite ofrecer un respaldo técnico sólido y soluciones
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
  );
}
