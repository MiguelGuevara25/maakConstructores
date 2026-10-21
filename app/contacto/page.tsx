import type { Metadata } from "next";
import { pageMetadata } from "@/src/libs/seo";

import ContactoContent from "./ContactoContent";

export const metadata: Metadata = pageMetadata({
  title: "Contacto",
  description:
    "Solicita tu visita técnica sin costo en Lima. Escríbenos por WhatsApp o completa el formulario y te contactamos a la brevedad.",
  path: "/contacto",
});

export default function ContactoPage() {
  return <ContactoContent />;
}
