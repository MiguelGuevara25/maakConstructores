import { CheckCircle2 } from "lucide-react";

import { steps } from "@/src/data/servicios";
import { WHATSAPP_LINK } from "@/src/libs/company";

export default function Process() {
  return (
    <section className="py-20 bg-maak-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 reveal">
          <span className="text-maak-yellow font-bold text-sm uppercase tracking-wider">
            Cómo Trabajamos
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2">
            Nuestro proceso en 4 pasos
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <div
              key={step.num}
              className={`reveal delay-${(i + 1) * 100} relative`}
            >
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 h-full">
                <div className="text-4xl font-extrabold text-maak-yellow/30 mb-3">
                  {step.num}
                </div>
                <h3 className="font-bold text-lg text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 reveal">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-maak-yellow hover:bg-maak-yellow-light text-maak-dark font-bold px-7 py-3.5 rounded-lg text-base transition-all hover:scale-105"
          >
            <CheckCircle2 className="w-5 h-5" />
            Comienza tu proyecto hoy
          </a>
        </div>
      </div>
    </section>
  );
}
