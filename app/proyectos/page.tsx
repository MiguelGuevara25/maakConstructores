"use client";

import { useState } from "react";
import { useScrollReveal } from "@/src/hooks/use-scroll-reveal";

import Header from "@/src/components/Header";
import CTA from "@/src/components/project/CTA";
import { PROJECTS } from "@/src/data/proyectos";
import GalleryGrid from "@/src/components/project/GalleryGrid";

export default function ProyectosPage() {
  useScrollReveal();
  const [active, setActive] = useState<string>("Todos");

  const filtered =
    active === "Todos" ? PROJECTS : PROJECTS.filter((p) => p.cat === active);

  return (
    <div className="overflow-x-hidden">
      {/* HEADER */}

      <Header
        src="https://images.pexels.com/photos/27354192/pexels-photo-27354192.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
        title="Portafolio"
        subtitle="Nuestros Proyectos"
        description="Una muestra de las instalaciones y mantenimientos de gas natural que
            hemos realizado en Lima."
      />

      {/* FILTER + GRID */}
      <GalleryGrid filtered={filtered} active={active} setActive={setActive} />

      {/* CTA */}
      <CTA />
    </div>
  );
}
