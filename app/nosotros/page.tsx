import type { Metadata } from "next";
import { pageMetadata } from "@/src/libs/seo";

import Header from "@/src/components/Header";
import CTA from "@/src/components/nosotros/CTA";
import Values from "@/src/components/nosotros/Values";
import Timeline from "@/src/components/nosotros/Timeline";
import OurHistory from "@/src/components/nosotros/OurHistory";
import MissionVision from "@/src/components/nosotros/MissionVision";
import ScrollReveal from "@/src/components/ScrollReveal";

export const metadata: Metadata = pageMetadata({
  title: "Nosotros",
  description:
    "Conoce a Maak Constructores: equipo técnico especializado en gas natural en Lima, con respaldo profesional, certificaciones y años de experiencia.",
  path: "/nosotros",
});

export default function NosotrosPage() {
  return (
    <div className="overflow-x-hidden">
      <ScrollReveal />
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
