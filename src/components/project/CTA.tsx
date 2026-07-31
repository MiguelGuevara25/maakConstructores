import { WHATSAPP_LINK } from "@/src/libs/company";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-16 bg-maak-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center reveal">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
          ¿Quieres ser nuestro próximo proyecto?
        </h2>
        <p className="text-gray-300 mb-8 max-w-xl mx-auto">
          Escríbenos y coordinamos tu visita técnica para una cotización
          personalizada.
        </p>
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-maak-yellow hover:bg-maak-yellow-light text-maak-dark font-bold px-7 py-3.5 rounded-lg text-base transition-all hover:scale-105"
        >
          <CheckCircle2 className="w-5 h-5" />
          Solicitar Cotización
          <ArrowRight className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
}
