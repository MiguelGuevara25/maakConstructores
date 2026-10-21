"use client";
import { useScrollReveal } from "@/src/hooks/use-scroll-reveal";

import Header from "@/src/components/Header";
import CTA from "@/src/components/nosotros/CTA";
import Values from "@/src/components/nosotros/Values";
import Timeline from "@/src/components/nosotros/Timeline";
import OurHistory from "@/src/components/nosotros/OurHistory";
import MissionVision from "@/src/components/nosotros/MissionVision";

export default function NosotrosPage() {
  useScrollReveal();

  return (
    <div className="overflow-x-hidden">
      <Header
        src="https://images.pexels.com/photos/8961146/pexels-photo-8961146.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
        title="Sobre Nosotros"
        subtitle="Profesionales en Gas Natural"
        description="Maak Constructores es una empresa especializada en la instalación,
            conversión y mantenimiento de gas natural en Lima, Perú, con
            respaldo técnico profesional."
      />

      <OurHistory />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <MissionVision />
          <Values />
        </div>
      </section>

      <Timeline />
      <CTA />
    </div>
  );
}
