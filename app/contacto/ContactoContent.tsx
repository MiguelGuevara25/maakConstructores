"use client";

import { useState } from "react";
import { WHATSAPP_LINK_CUSTOM } from "@/src/libs/company";
import type {
  ContactErrors,
  ContactField,
  ContactFormValues,
  ContactStatus,
} from "@/src/libs/contact-form";
import {
  EMPTY_CONTACT_FORM,
  validateContactForm,
} from "@/src/libs/contact-form";
import { useScrollReveal } from "@/src/hooks/use-scroll-reveal";
import Header from "@/src/components/Header";
import InfoContact from "@/src/components/contact/InfoContact";
import Form from "@/src/components/contact/Form";

export default function ContactoContent() {
  const [form, setForm] = useState<ContactFormValues>(EMPTY_CONTACT_FORM);
  const [errors, setErrors] = useState<ContactErrors>({});
  const [status, setStatus] = useState<ContactStatus>("idle");
  const [manualUrl, setManualUrl] = useState<string | null>(null);
  useScrollReveal();

  const handleChange = (field: ContactField, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => (prev[field] ? { ...prev, [field]: undefined } : prev));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const nextErrors = validateContactForm(form);
    setErrors(nextErrors);

    const firstInvalid = (Object.keys(nextErrors) as ContactField[])[0];
    if (firstInvalid) {
      document.getElementById(`contact-${firstInvalid}`)?.focus();
      return;
    }

    const message = `
      Hola Maak Constructores, deseo solicitar una visita técnica y cotización.
      Nombre: ${form.name.trim()}
      Teléfono: ${form.phone.trim()}
      Tipo de servicio: ${form.service}
      Ubicación/Distrito: ${form.district}
    `;

    const url = WHATSAPP_LINK_CUSTOM(message);
    setManualUrl(url);

    // Open synchronously inside the click handler so popup blockers allow it.
    const whatsappWindow = window.open(url, "_blank");
    if (whatsappWindow) whatsappWindow.opener = null;

    if (!whatsappWindow) {
      setStatus("error");
      return;
    }

    setStatus("sending");
    setTimeout(() => {
      setStatus("sent");
      setForm(EMPTY_CONTACT_FORM);
      setErrors({});
      setTimeout(() => setStatus("idle"), 5000);
    }, 700);
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
                  form={form}
                  errors={errors}
                  status={status}
                  manualUrl={manualUrl}
                  onSubmit={handleSubmit}
                  onChange={handleChange}
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
