import { Eye, Target } from "lucide-react";

export default function MissionVision() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
      <div className="reveal-left bg-maak-bg rounded-2xl p-8 border border-gray-100">
        <div className="w-14 h-14 rounded-xl bg-maak-yellow/10 flex items-center justify-center mb-5">
          <Target className="w-7 h-7 text-maak-yellow" />
        </div>
        <h3 className="font-bold text-xl text-maak-dark mb-3">Misión</h3>
        <p className="text-maak-cement leading-relaxed">
          Brindar servicios de instalación, conversión y mantenimiento de gas
          natural con los más altos estándares de seguridad, calidad y respaldo
          técnico, contribuyendo al ahorro energético de hogares y empresas en
          Lima.
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
  );
}
