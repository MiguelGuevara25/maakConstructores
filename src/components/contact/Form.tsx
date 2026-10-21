import { AlertCircle, Loader2, Send } from "lucide-react";

import { DISTRICTS, SERVICE_TYPES } from "@/src/data/contacto";
import type {
  ContactErrors,
  ContactField,
  ContactFormValues,
  ContactStatus,
} from "@/src/libs/contact-form";

interface FormProps {
  form: ContactFormValues;
  errors: ContactErrors;
  status: ContactStatus;
  manualUrl: string | null;
  onSubmit: (event: React.FormEvent) => void;
  onChange: (field: ContactField, value: string) => void;
}

function fieldClasses(hasError: boolean): string {
  const base =
    "w-full px-4 py-3 rounded-lg border outline-none transition-all text-sm bg-white";
  return hasError
    ? `${base} border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-500/20`
    : `${base} border-gray-200 focus:border-maak-yellow focus:ring-2 focus:ring-maak-yellow/20`;
}

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;

  return (
    <p id={id} role="alert" className="mt-1.5 text-xs font-medium text-red-600">
      {message}
    </p>
  );
}

export default function Form({
  form,
  errors,
  status,
  manualUrl,
  onSubmit,
  onChange,
}: FormProps) {
  const isSending = status === "sending";

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5">
      <div>
        <label
          htmlFor="contact-name"
          className="block text-sm font-semibold text-maak-dark mb-1.5"
        >
          Nombre completo
        </label>
        <input
          id="contact-name"
          type="text"
          autoComplete="name"
          required
          value={form.name}
          onChange={(e) => onChange("name", e.target.value)}
          placeholder="Tu nombre"
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? "contact-name-error" : undefined}
          className={fieldClasses(Boolean(errors.name))}
        />
        <FieldError id="contact-name-error" message={errors.name} />
      </div>

      <div>
        <label
          htmlFor="contact-phone"
          className="block text-sm font-semibold text-maak-dark mb-1.5"
        >
          Teléfono / Celular
        </label>
        <input
          id="contact-phone"
          type="tel"
          inputMode="tel"
          autoComplete="tel"
          required
          value={form.phone}
          onChange={(e) => onChange("phone", e.target.value)}
          placeholder="Ej: 999 888 777"
          aria-invalid={Boolean(errors.phone)}
          aria-describedby={errors.phone ? "contact-phone-error" : undefined}
          className={fieldClasses(Boolean(errors.phone))}
        />
        <FieldError id="contact-phone-error" message={errors.phone} />
      </div>

      <div>
        <label
          htmlFor="contact-service"
          className="block text-sm font-semibold text-maak-dark mb-1.5"
        >
          Tipo de servicio
        </label>
        <select
          id="contact-service"
          required
          value={form.service}
          onChange={(e) => onChange("service", e.target.value)}
          aria-invalid={Boolean(errors.service)}
          aria-describedby={errors.service ? "contact-service-error" : undefined}
          className={fieldClasses(Boolean(errors.service))}
        >
          <option value="">Selecciona un servicio</option>
          {SERVICE_TYPES.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
        <FieldError id="contact-service-error" message={errors.service} />
      </div>

      <div>
        <label
          htmlFor="contact-district"
          className="block text-sm font-semibold text-maak-dark mb-1.5"
        >
          Ubicación / Distrito
        </label>
        <select
          id="contact-district"
          required
          value={form.district}
          onChange={(e) => onChange("district", e.target.value)}
          aria-invalid={Boolean(errors.district)}
          aria-describedby={
            errors.district ? "contact-district-error" : undefined
          }
          className={fieldClasses(Boolean(errors.district))}
        >
          <option value="">Selecciona tu distrito</option>
          {DISTRICTS.map((d) => (
            <option key={d} value={d}>
              {d}
            </option>
          ))}
        </select>
        <FieldError id="contact-district-error" message={errors.district} />
      </div>

      <button
        type="submit"
        disabled={isSending}
        className="w-full inline-flex items-center justify-center gap-2 bg-maak-yellow hover:bg-maak-yellow-light text-maak-dark font-bold px-6 py-3.5 rounded-lg text-base transition-all hover:scale-[1.02] disabled:opacity-70 disabled:hover:scale-100"
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
        {status === "error" && (
          <>
            Reintentar envío
            <Send className="w-5 h-5" />
          </>
        )}
      </button>

      <div aria-live="polite">
        {status === "error" && (
          <div
            role="alert"
            className="rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-700"
          >
            <p className="flex items-center gap-2 font-bold">
              <AlertCircle className="w-4 h-4 shrink-0" />
              No pudimos abrir WhatsApp
            </p>
            <p className="mt-1 leading-relaxed">
              Tu navegador bloqueó la ventana emergente. Habilítala para este
              sitio e inténtalo de nuevo.
            </p>
            {manualUrl && (
              <a
                href={manualUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block font-bold underline underline-offset-2 hover:text-red-900"
              >
                Abrir WhatsApp manualmente
              </a>
            )}
          </div>
        )}
      </div>
    </form>
  );
}
