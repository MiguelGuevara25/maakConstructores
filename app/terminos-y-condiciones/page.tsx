import type { Metadata } from "next";
import Link from "next/link";
import { FileText, Mail, Phone } from "lucide-react";

import { COMPANY, WHATSAPP_LINK } from "@/src/libs/company";
import { pageMetadata } from "@/src/libs/seo";

export const metadata: Metadata = pageMetadata({
  title: "Términos y Condiciones",
  description:
    "Condiciones de uso del sitio web de Maak Constructores: servicios, cotizaciones, propiedad intelectual, responsabilidad y legislación aplicable.",
  path: "/terminos-y-condiciones",
});

const LAST_UPDATED = "21 de octubre de 2026";

const SECTIONS = [
  {
    id: "titular",
    title: "Titular del sitio",
    body: (
      <>
        <p>
          Este sitio web (en adelante, el «Sitio») es operado por{" "}
          <strong className="text-maak-dark">Maak Constructores S.A.C.</strong>{" "}
          (en adelante, «Maak Constructores»), empresa dedicada a la
          instalación, conversión y mantenimiento de gas natural en Lima, Perú.
        </p>
        <p>
          Para consultas relacionadas con estos Términos puedes escribirnos a{" "}
          <a
            href={`mailto:${COMPANY.email}`}
            className="font-semibold text-maak-dark underline decoration-maak-yellow underline-offset-2 hover:text-maak-yellow"
          >
            {COMPANY.email}
          </a>{" "}
          o llamarnos al{" "}
          <a
            href={`tel:${COMPANY.phoneRaw}`}
            className="font-semibold text-maak-dark underline decoration-maak-yellow underline-offset-2 hover:text-maak-yellow"
          >
            {COMPANY.phone}
          </a>
          .
        </p>
      </>
    ),
  },
  {
    id: "aceptacion",
    title: "Objeto y aceptación",
    body: (
      <>
        <p>
          Estos Términos regulan el acceso y uso del Sitio. Al navegar por él o
          utilizar sus funcionalidades, aceptas estas condiciones en su
          totalidad. Si no estás de acuerdo, te pedimos no utilizar el Sitio.
        </p>
        <p>
          El Sitio tiene carácter informativo y comercial: presenta nuestros
          servicios, proyectos y canales de contacto.
        </p>
      </>
    ),
  },
  {
    id: "servicios",
    title: "Servicios y cotizaciones",
    body: (
      <>
        <p>
          La información publicada sobre servicios, alcances y tiempos es
          referencial y no constituye una oferta vinculante. Toda cotización se
          emite luego de una evaluación técnica y está sujeta a las condiciones
          del inmueble, la disponibilidad de materiales y la normativa vigente.
        </p>
        <p>
          El envío del formulario o un mensaje por WhatsApp no perfecciona
          ningún contrato: la contratación se formaliza cuando ambas partes
          aceptan la cotización y las condiciones del servicio.
        </p>
      </>
    ),
  },
  {
    id: "uso",
    title: "Uso permitido del Sitio",
    body: (
      <>
        <p>
          Te comprometes a utilizar el Sitio conforme a la ley y a la buena fe.
          Queda prohibido, entre otras conductas:
        </p>
        <ul className="list-disc pl-5 space-y-1.5">
          <li>Vulnerar derechos de Maak Constructores o de terceros.</li>
          <li>
            Introducir virus, código malicioso o realizar acciones que afecten
            el funcionamiento del Sitio.
          </li>
          <li>
            Intentar acceder a áreas restringidas, alterar contenidos o
            suplantar la identidad de otra persona.
          </li>
          <li>
            Extraer información de forma masiva o automatizada (scraping) sin
            autorización.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "propiedad-intelectual",
    title: "Propiedad intelectual",
    body: (
      <>
        <p>
          La marca, el logotipo, los textos, el diseño y los contenidos propios
          del Sitio son titularidad de Maak Constructores o se utilizan con
          autorización. Su reproducción, distribución o modificación no
          autorizada está prohibida.
        </p>
        <p>
          Algunas imágenes de referencia provienen de bancos de imágenes con
          licencia de uso. Puedes consultar el Sitio y compartir sus enlaces,
          pero no reutilizar sus contenidos con fines comerciales sin permiso
          previo por escrito.
        </p>
      </>
    ),
  },
  {
    id: "terceros",
    title: "Enlaces y servicios de terceros",
    body: (
      <>
        <p>
          El Sitio puede incluir enlaces a WhatsApp, redes sociales u otros
          servicios operados por terceros. No controlamos esos servicios y su
          uso se rige por sus propios términos y políticas de privacidad.
        </p>
        <p>
          No somos responsables por el contenido, la disponibilidad o las
          prácticas de los sitios de terceros a los que se acceda desde el
          Sitio.
        </p>
      </>
    ),
  },
  {
    id: "disponibilidad",
    title: "Disponibilidad y cambios",
    body: (
      <>
        <p>
          Procuramos que el Sitio esté disponible y actualizado, pero no
          garantizamos la ausencia de interrupciones, errores o imprecisiones.
          Podemos modificar, suspender o retirar contenidos y funcionalidades
          sin previo aviso.
        </p>
      </>
    ),
  },
  {
    id: "responsabilidad",
    title: "Limitación de responsabilidad",
    body: (
      <>
        <p>
          En la medida permitida por la ley, Maak Constructores no será
          responsable por daños indirectos, lucro cesante o perjuicios derivados
          del uso o de la imposibilidad de usar el Sitio.
        </p>
        <p>
          Nada en estos Términos limita los derechos que la Ley 29571, Código de
          Protección y Defensa del Consumidor, reconoce a los consumidores.
        </p>
      </>
    ),
  },
  {
    id: "datos-personales",
    title: "Datos personales",
    body: (
      <>
        <p>
          El tratamiento de los datos personales que nos proporcionas se rige
          por la Ley 29733, Ley de Protección de Datos Personales, y su
          reglamento. La información detallada se publicará en nuestra Política
          de Privacidad en este mismo Sitio.
        </p>
        <p>
          Mientras tanto, puedes solicitar el acceso, la rectificación, la
          cancelación o la oposición al tratamiento de tus datos escribiendo a{" "}
          <a
            href={`mailto:${COMPANY.email}`}
            className="font-semibold text-maak-dark underline decoration-maak-yellow underline-offset-2 hover:text-maak-yellow"
          >
            {COMPANY.email}
          </a>
          .
        </p>
      </>
    ),
  },
  {
    id: "modificaciones",
    title: "Modificaciones",
    body: (
      <>
        <p>
          Podemos actualizar estos Términos para reflejar cambios en el Sitio,
          en nuestros servicios o en la normativa aplicable. La versión vigente
          será la publicada en esta página, con su fecha de actualización.
        </p>
        <p>
          El uso del Sitio después de una modificación implica la aceptación de
          la versión actualizada.
        </p>
      </>
    ),
  },
  {
    id: "legislacion",
    title: "Legislación aplicable y jurisdicción",
    body: (
      <>
        <p>
          Estos Términos se rigen por las leyes de la República del Perú.
          Cualquier controversia derivada del uso del Sitio se someterá a los
          juzgados competentes de Lima, sin perjuicio de las reglas especiales
          que protegen a los consumidores.
        </p>
      </>
    ),
  },
  {
    id: "contacto",
    title: "Contacto",
    body: (
      <>
        <p>
          Si tienes preguntas sobre estos Términos o sobre nuestros servicios,
          puedes comunicarte con nosotros por cualquiera de estos canales:
        </p>
        <ul className="mt-2 space-y-2">
          <li className="flex items-start gap-2">
            <Mail className="w-4 h-4 text-maak-yellow mt-0.5 shrink-0" />
            <a
              href={`mailto:${COMPANY.email}`}
              className="font-semibold text-maak-dark underline decoration-maak-yellow underline-offset-2 hover:text-maak-yellow"
            >
              {COMPANY.email}
            </a>
          </li>
          <li className="flex items-start gap-2">
            <Phone className="w-4 h-4 text-maak-yellow mt-0.5 shrink-0" />
            <a
              href={`tel:${COMPANY.phoneRaw}`}
              className="font-semibold text-maak-dark underline decoration-maak-yellow underline-offset-2 hover:text-maak-yellow"
            >
              {COMPANY.phone}
            </a>
          </li>
          <li className="flex items-start gap-2">
            <FileText className="w-4 h-4 text-maak-yellow mt-0.5 shrink-0" />
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-maak-dark underline decoration-maak-yellow underline-offset-2 hover:text-maak-yellow"
            >
              WhatsApp de Maak Constructores
            </a>
          </li>
        </ul>
      </>
    ),
  },
];

export default function TerminosPage() {
  return (
    <div className="bg-maak-bg">
      <section className="bg-maak-dark py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <span className="inline-flex items-center gap-2 bg-maak-yellow/15 border border-maak-yellow/40 text-maak-yellow px-4 py-1.5 rounded-full text-sm font-bold">
              Información legal
            </span>
            <h1 className="mt-5 text-3xl sm:text-4xl font-extrabold text-white">
              Términos y Condiciones
            </h1>
            <p className="mt-3 text-gray-300 leading-relaxed max-w-2xl">
              Condiciones que regulan el acceso y uso del sitio web de Maak
              Constructores y la información sobre nuestros servicios.
            </p>
            <p className="mt-4 text-xs text-gray-500">
              Última actualización: {LAST_UPDATED}
            </p>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-[230px_1fr] gap-8 lg:gap-10">
            <nav
              aria-label="Contenido de los términos"
              className="bg-white rounded-xl border border-gray-100 p-5 h-fit lg:sticky lg:top-24"
            >
              <p className="text-xs font-bold uppercase tracking-wider text-maak-cement">
                Contenido
              </p>
              <ol className="mt-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2 text-sm">
                {SECTIONS.map((section, index) => (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      className="text-maak-cement hover:text-maak-dark hover:underline underline-offset-2 transition-colors"
                    >
                      {index + 1}. {section.title}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>

            <article className="bg-white rounded-2xl border border-gray-100 p-6 sm:p-8">
              <div className="space-y-9">
                {SECTIONS.map((section, index) => (
                  <section
                    key={section.id}
                    id={section.id}
                    className="scroll-mt-24"
                  >
                    <h2 className="text-lg font-extrabold text-maak-dark">
                      {index + 1}. {section.title}
                    </h2>
                    <div className="mt-3 text-sm text-gray-600 leading-relaxed space-y-3">
                      {section.body}
                    </div>
                  </section>
                ))}
              </div>

              <div className="mt-10 pt-6 border-t border-gray-100 text-xs text-maak-cement">
                <p>
                  ¿Tienes dudas sobre estos Términos? Escríbenos a{" "}
                  <a
                    href={`mailto:${COMPANY.email}`}
                    className="font-semibold text-maak-dark underline decoration-maak-yellow underline-offset-2 hover:text-maak-yellow"
                  >
                    {COMPANY.email}
                  </a>
                  .
                </p>
                <p className="mt-2">
                  Consulta también nuestras{" "}
                  <Link
                    href="/contacto"
                    className="font-semibold text-maak-dark underline decoration-maak-yellow underline-offset-2 hover:text-maak-yellow"
                  >
                    vías de contacto
                  </Link>
                  .
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
}
