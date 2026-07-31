import { BENEFITS } from "@/src/data/home";

export default function Benefits() {
  return (
    <section className="py-20 bg-maak-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 reveal">
          <span className="text-maak-yellow font-bold text-sm uppercase tracking-wider">
            ¿Por qué elegirnos?
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-maak-dark mt-2 mb-3">
            Beneficios que nos respaldan
          </h2>
          <p className="text-maak-cement max-w-2xl mx-auto">
            Más que una instalación, te brindamos la tranquilidad de un servicio
            técnico profesional y seguro.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {BENEFITS.map((b, i) => (
            <div key={b.title} className={`reveal delay-${(i + 1) * 100}`}>
              <div className="bg-white rounded-2xl p-7 h-full card-hover border border-gray-100">
                <div
                  className={`w-14 h-14 rounded-xl ${b.bg} flex items-center justify-center mb-5`}
                >
                  <b.icon className={`w-7 h-7 ${b.color}`} strokeWidth={2} />
                </div>
                <h3 className="font-bold text-lg text-maak-dark mb-2">
                  {b.title}
                </h3>
                <p className="text-sm text-maak-cement leading-relaxed">
                  {b.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
