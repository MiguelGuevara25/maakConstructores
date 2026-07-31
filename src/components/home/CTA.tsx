import Image from "next/image";

import { COMPANY, WHATSAPP_LINK } from "@/src/libs/company";
import { ArrowRight, CheckCircle2, Phone } from "lucide-react";

export default function CTA() {
  return (
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
  )
}
