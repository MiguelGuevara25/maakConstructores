"use client";

import { useState } from "react";
import { WHATSAPP_LINK_CUSTOM } from "@/src/libs/company";
import { useScrollReveal } from "@/src/hooks/use-scroll-reveal";
import Header from "@/src/components/Header";
import InfoContact from "@/src/components/contact/InfoContact";
import Form from "@/src/components/contact/Form";

export default function ContactoPage() {
  useScrollReveal();

  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: "",
    district: "",
  });

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
      <Header
        src="https://images.pexels.com/photos/6285146/pexels-photo-6285146.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
        title="Contáctanos"
        subtitle="Solicita tu Visita Técnica"
        description="Completa el formulario y te contactaremos por WhatsApp para
            coordinar tu cotización personalizada."
      />

      <section className="py-20 bg-maak-bg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">

            <div className="lg:col-span-3 reveal-left">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h2 className="text-2xl font-extrabold text-maak-dark mb-2">
                  Cuéntanos sobre tu proyecto
                </h2>
                <p className="text-sm text-maak-cement mb-6">
                  Al enviar, abriremos WhatsApp con tu mensaje listo para
                  enviar.
                </p>

                <Form
                  handleSubmit={handleSubmit}
                  form={form}
                  setForm={setForm}
                  status={status}
                />
              </div>
            </div>

            <InfoContact />
          </div>
        </div>
      </section>
    </div>
  );
}
