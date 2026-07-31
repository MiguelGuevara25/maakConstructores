import { Dispatch, SetStateAction } from "react";
import Image from "next/image";

import { Project } from "@/src/interfaces";
import { CATEGORIES } from "@/src/data/proyectos";

interface GalleryGridProps {
  filtered: Project[];
  active: string;
  setActive: Dispatch<SetStateAction<string>>;
}

export default function GalleryGrid({
  filtered,
  active,
  setActive,
}: GalleryGridProps) {
  return (
    <section className="py-20 bg-maak-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 reveal">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all ${
                active === cat
                  ? "bg-maak-yellow text-maak-dark shadow-lg scale-105"
                  : "bg-white text-maak-cement hover:text-maak-dark border border-gray-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p, i) => (
            <div
              key={p.title}
              className="reveal-scale group bg-white rounded-2xl overflow-hidden border border-gray-100 card-hover"
              style={{ animationDelay: `${(i % 3) * 0.1}s` }}
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  src={p.img}
                  alt={p.title}
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-linear-to-t from-maak-dark/70 via-transparent to-transparent" />
                <span
                  className={`absolute top-3 left-3 text-[11px] font-bold px-2.5 py-1 rounded-full ${
                    p.cat === "Residencial"
                      ? "bg-maak-yellow text-maak-dark"
                      : p.cat === "Comercial"
                        ? "bg-maak-cyan text-white"
                        : "bg-maak-magenta text-white"
                  }`}
                >
                  {p.cat}
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-base text-maak-dark mb-1.5">
                  {p.title}
                </h3>
                <p className="text-sm text-maak-cement leading-relaxed">
                  {p.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
