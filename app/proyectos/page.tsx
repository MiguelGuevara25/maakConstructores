import type { Metadata } from "next";
import { pageMetadata } from "@/src/libs/seo";

import ProyectosContent from "./ProyectosContent";

export const metadata: Metadata = pageMetadata({
  title: "Proyectos Realizados",
  description:
    "Galería de instalaciones, conversiones y mantenimientos de gas natural ejecutados en Lima: proyectos residenciales, comerciales e industriales.",
  path: "/proyectos",
});

export default function ProyectosPage() {
  return <ProyectosContent />;
}
