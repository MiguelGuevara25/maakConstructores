"use client";

import { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Send,
  CheckCircle2,
  Loader2,
  MessageCircle,
  Clock,
} from "lucide-react";
import {
  COMPANY,
  WHATSAPP_LINK,
  WHATSAPP_LINK_CUSTOM,
} from "@/src/libs/company";
import { useScrollReveal } from "@/src/hooks/use-scroll-reveal";
import Header from "@/src/components/Header";
import { DISTRICTS, SERVICE_TYPES } from "@/src/data/contacto";

export default function ContactoPage() {
  useScrollReveal();

  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: "",
    district: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    const msg = `
      Hola Maak Constructores, deseo solicitar una visita técnica y cotización.
      Nombre: ${form.name}
      Teléfono: ${form.phone}
      Tipo de servicio: ${form.service}
      Ubicación/Distrito: ${form.district}
    `;

    setTimeout(() => {
      window.open(WHATSAPP_LINK_CUSTOM(msg), "_blank");
      setStatus("sent");
      setForm({ name: "", phone: "", service: "", district: "" });
      setTimeout(() => setStatus("idle"), 4000);
    }, 800);
  };

  return (
    <div className="overflow-x-hidden">
      {/* HEADER */}
      <Header
        src="https://images.pexels.com/photos/6285146/pexels-photo-6285146.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
        title="Contáctanos"
        subtitle="Solicita tu Visita Técnica"
        description="Completa el formulario y te contactaremos por WhatsApp para
            coordinar tu cotización personalizada."
      />

      {/* CONTACT */}
      <section className="py-20 bg-maak-bg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* Form */}
            <div className="lg:col-span-3 reveal-left">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h2 className="text-2xl font-extrabold text-maak-dark mb-2">
                  Cuéntanos sobre tu proyecto
                </h2>
                <p className="text-sm text-maak-cement mb-6">
                  Al enviar, abriremos WhatsApp con tu mensaje listo para
                  enviar.
                </p>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-semibold text-maak-dark mb-1.5">
                      Nombre completo
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) =>
                        setForm({ ...form, name: e.target.value })
                      }
                      placeholder="Tu nombre"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-maak-yellow focus:ring-2 focus:ring-maak-yellow/20 outline-none transition-all text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-maak-dark mb-1.5">
                      Teléfono / Celular
                    </label>
                    <input
                      type="tel"
                      required
                      value={form.phone}
                      onChange={(e) =>
                        setForm({ ...form, phone: e.target.value })
                      }
                      placeholder="Ej: 999 888 777"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-maak-yellow focus:ring-2 focus:ring-maak-yellow/20 outline-none transition-all text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-maak-dark mb-1.5">
                      Tipo de servicio
                    </label>
                    <select
                      required
                      value={form.service}
                      onChange={(e) =>
                        setForm({ ...form, service: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-maak-yellow focus:ring-2 focus:ring-maak-yellow/20 outline-none transition-all text-sm bg-white"
                    >
                      <option value="">Selecciona un servicio</option>
                      {SERVICE_TYPES.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-maak-dark mb-1.5">
                      Ubicación / Distrito
                    </label>
                    <select
                      required
                      value={form.district}
                      onChange={(e) =>
                        setForm({ ...form, district: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-maak-yellow focus:ring-2 focus:ring-maak-yellow/20 outline-none transition-all text-sm bg-white"
                    >
                      <option value="">Selecciona tu distrito</option>
                      {DISTRICTS.map((d) => (
                        <option key={d} value={d}>
                          {d}
                        </option>
                      ))}
                    </select>
                  </div>

                  <button
                    type="submit"
                    disabled={status !== "idle"}
                    className="w-full inline-flex items-center justify-center gap-2 bg-maak-yellow hover:bg-maak-yellow-light text-maak-dark font-bold px-6 py-3.5 rounded-lg text-base transition-all hover:scale-[1.02] disabled:opacity-70"
                  >
                    {status === "idle" && (
                      <>
                        Enviar por WhatsApp
                        <Send className="w-5 h-5" />
                      </>
                    )}
                    {status === "sending" && (
                      <>
                        Preparando mensaje...
                        <Loader2 className="w-5 h-5 animate-spin" />
                      </>
                    )}
                    {status === "sent" && (
                      <>
                        ¡Mensaje listo!
                        <CheckCircle2 className="w-5 h-5" />
                      </>
                    )}
                  </button>

                  {status === "sent" && (
                    <p className="text-center text-sm text-green-600 font-medium">
                      Se abrió WhatsApp con tu mensaje. Si no se abrió, verifica
                      el bloqueo de ventanas emergentes.
                    </p>
                  )}
                </form>
              </div>
            </div>

            {/* Contact info */}
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
                      <p className="text-sm font-semibold">
                        {COMPANY.location}
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-maak-yellow/20 flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5 text-maak-yellow" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400">Horario</p>
                      <p className="text-sm font-semibold">
                        Lun - Sáb: 8am - 7pm
                      </p>
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
                    <MessageCircle
                      className="w-6 h-6"
                      fill="white"
                      strokeWidth={1.5}
                    />
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
                  <strong className="text-maak-dark">Nota:</strong> La visita
                  técnica de evaluación es sin costo. La cotización se entrega
                  de forma personalizada según las características de tu
                  proyecto.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
