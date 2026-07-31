import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

import { GALLERY } from '@/src/data/home'

export default function Gallery() {
  return (
    <section className="py-20 bg-maak-bg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-10 reveal">
            <div>
              <span className="text-maak-yellow font-bold text-sm uppercase tracking-wider">
                Proyectos Destacados
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-maak-dark mt-2">
                Muestra de nuestro trabajo
              </h2>
            </div>
            <Link
              href="/proyectos"
              className="inline-flex items-center gap-2 text-maak-yellow font-bold text-sm hover:gap-3 transition-all mt-4 sm:mt-0"
            >
              Ver galería completa <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {GALLERY.map((item, i) => (
              <div
                key={item.title}
                className={`reveal-scale delay-${(i + 1) * 100} img-overlay-hover rounded-xl overflow-hidden relative aspect-4/3`}
              >
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-maak-dark/80 via-transparent to-transparent z-10" />
                <div className="absolute bottom-3 left-3 z-20">
                  <span className="inline-block bg-maak-yellow text-maak-dark text-[10px] font-bold px-2 py-0.5 rounded-full mb-1.5">
                    {item.cat}
                  </span>
                  <p className="text-white font-semibold text-sm">
                    {item.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}
