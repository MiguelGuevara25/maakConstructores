import { DISTRICTS, SERVICE_TYPES } from "@/src/data/contacto";
import { CheckCircle2, Loader2, Send } from "lucide-react";

interface FormProps {
  handleSubmit: (e: React.FormEvent) => void;
  form: { name: string; phone: string; service: string; district: string };
  setForm: React.Dispatch<
    React.SetStateAction<{
      name: string;
      phone: string;
      service: string;
      district: string;
    }>
  >;
  status: "idle" | "sending" | "sent";
}

export default function Form({
  handleSubmit,
  form,
  setForm,
  status,
}: FormProps) {
  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label className="block text-sm font-semibold text-maak-dark mb-1.5">
          Nombre completo
        </label>
        <input
          type="text"
          required
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
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
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
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
          onChange={(e) => setForm({ ...form, service: e.target.value })}
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
          onChange={(e) => setForm({ ...form, district: e.target.value })}
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
          Se abrió WhatsApp con tu mensaje. Si no se abrió, verifica el bloqueo
          de ventanas emergentes.
        </p>
      )}
    </form>
  );
}
