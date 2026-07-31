import { VALUES } from "@/src/data/nosotros";

export default function Values() {
  return (
    <>
      <div className="text-center mb-12 reveal">
        <span className="text-maak-yellow font-bold text-sm uppercase tracking-wider">
          Nuestros Valores
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-maak-dark mt-2">
          Lo que nos define
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {VALUES.map((v, i) => (
          <div key={v.title} className={`reveal delay-${(i + 1) * 100}`}>
            <div className="bg-maak-bg rounded-2xl p-6 h-full border border-gray-100 card-hover">
              <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center mb-4 shadow-sm">
                <v.icon className="w-6 h-6 text-maak-yellow" />
              </div>
              <h3 className="font-bold text-base text-maak-dark mb-2">
                {v.title}
              </h3>
              <p className="text-sm text-maak-cement leading-relaxed">
                {v.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
