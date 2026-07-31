import { MILESTONES } from "@/src/data/nosotros";

export default function Timeline() {
  return (
    <section className="py-20 bg-maak-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 reveal">
          <span className="text-maak-yellow font-bold text-sm uppercase tracking-wider">
            Nuestra Trayectoria
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-maak-dark mt-2">
            Hitos que marcan nuestro camino
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {MILESTONES.map((m, i) => (
            <div
              key={m.title}
              className={`reveal delay-${(i + 1) * 100} relative`}
            >
              <div className="bg-white rounded-2xl p-7 border border-gray-100 card-hover h-full">
                <div className="inline-flex items-center gap-2 bg-maak-yellow/10 text-maak-yellow px-3 py-1 rounded-full text-xs font-bold mb-4">
                  {m.year}
                </div>
                <h3 className="font-bold text-lg text-maak-dark mb-2">
                  {m.title}
                </h3>
                <p className="text-sm text-maak-cement leading-relaxed">
                  {m.desc}
                </p>
              </div>
              {i < MILESTONES.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-maak-yellow/30" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
