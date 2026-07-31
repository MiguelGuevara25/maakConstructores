import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { COMPANY, WHATSAPP_LINK } from "@/src/libs/company";

export default function InfoContact() {
  return (
    <div className="lg:col-span-2 reveal-right space-y-5">
      <div className="bg-maak-dark rounded-2xl p-7 text-white">
        <h3 className="font-bold text-lg mb-5">Datos de contacto</h3>
        <ul className="space-y-4">
          <li className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-lg bg-maak-yellow/20 flex items-center justify-center shrink-0">
              <Phone className="w-5 h-5 text-maak-yellow" />
            </div>
            <div>
              <p className="text-xs text-gray-400">Teléfono</p>
              <a
                href={`tel:${COMPANY.phoneRaw}`}
                className="text-sm font-semibold hover:text-maak-yellow transition-colors"
              >
                {COMPANY.phone}
              </a>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-lg bg-maak-yellow/20 flex items-center justify-center shrink-0">
              <Mail className="w-5 h-5 text-maak-yellow" />
            </div>
            <div>
              <p className="text-xs text-gray-400">Email</p>
              <a
                href={`mailto:${COMPANY.email}`}
                className="text-sm font-semibold hover:text-maak-yellow transition-colors"
              >
                {COMPANY.email}
              </a>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-lg bg-maak-yellow/20 flex items-center justify-center shrink-0">
              <MapPin className="w-5 h-5 text-maak-yellow" />
            </div>
            <div>
              <p className="text-xs text-gray-400">Ubicación</p>
              <p className="text-sm font-semibold">{COMPANY.location}</p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-lg bg-maak-yellow/20 flex items-center justify-center shrink-0">
              <Clock className="w-5 h-5 text-maak-yellow" />
            </div>
            <div>
              <p className="text-xs text-gray-400">Horario</p>
              <p className="text-sm font-semibold">Lun - Sáb: 8am - 7pm</p>
            </div>
          </li>
        </ul>
      </div>

      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="block bg-[#25D366] hover:bg-[#1faa4f] text-white rounded-2xl p-6 transition-colors group"
      >
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
            <MessageCircle className="w-6 h-6" fill="white" strokeWidth={1.5} />
          </div>
          <div>
            <p className="font-bold text-base">Escríbenos directo</p>
            <p className="text-sm text-white/90">
              Respuesta inmediata por WhatsApp
            </p>
          </div>
        </div>
      </a>

      <div className="bg-white rounded-2xl p-6 border border-gray-100">
        <p className="text-xs text-maak-cement leading-relaxed">
          <strong className="text-maak-dark">Nota:</strong> La visita técnica de
          evaluación es sin costo. La cotización se entrega de forma
          personalizada según las características de tu proyecto.
        </p>
      </div>
    </div>
  );
}
