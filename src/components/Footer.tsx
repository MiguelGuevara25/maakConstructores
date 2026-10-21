import { Flame, MapPin, Phone, Mail } from "lucide-react";
import { COMPANY, WHATSAPP_LINK } from "../libs/company";
import Link from "next/link";
import Instagram from "../assets/icons/Instagram";
import Facebook from "../assets/icons/Facebook";
import CookiePreferencesButton from "./CookiePreferencesButton";

const SERVICES = [
  { label: "Gas Natural Residencial", href: "/servicios#residencial" },
  { label: "Gas Natural Comercial e Industrial", href: "/servicios#comercial" },
  { label: "Mantenimiento y Certificación", href: "/servicios#mantenimiento" },
];

const QUICK_LINKS = [
  { label: "Inicio", href: "/" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Proyectos", href: "/proyectos" },
  { label: "Contacto", href: "/contacto" },
];

export default function Footer() {
  return (
    <footer className="bg-maak-dark text-gray-300 pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-10 h-10 rounded-lg bg-linear-to-br from-maak-yellow to-maak-yellow-light flex items-center justify-center">
                <Flame className="w-5 h-5 text-maak-dark" strokeWidth={2.5} />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-extrabold text-lg text-white">
                  Maak<span className="text-maak-yellow">Constructores</span>
                </span>
                <span className="text-[10px] text-maak-cement font-medium tracking-wider">
                  {COMPANY.handle}
                </span>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mb-4">
              Especialistas en instalación, conversión y mantenimiento de gas
              natural en Lima. Seguridad certificada y respaldo técnico
              profesional.
            </p>
            <div className="flex gap-3">
              <a
                href="https://instagram.com/maakperu"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-maak-yellow hover:text-maak-dark flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram />
              </a>
              
              <a
                href="https://facebook.com/maakperu"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-maak-yellow hover:text-maak-dark flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook />
              </a>

              <a
                href={`mailto:${COMPANY.email}`}
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-maak-yellow hover:text-maak-dark flex items-center justify-center transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-white text-sm uppercase tracking-wider mb-4">
              Servicios
            </h3>
            <ul className="space-y-2.5">
              {SERVICES.map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="text-sm text-gray-400 hover:text-maak-yellow transition-colors"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-bold text-white text-sm uppercase tracking-wider mb-4">
              Enlaces
            </h3>
            <ul className="space-y-2.5">
              {QUICK_LINKS.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-gray-400 hover:text-maak-yellow transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-white text-sm uppercase tracking-wider mb-4">
              Contacto
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5 text-sm text-gray-400">
                <MapPin className="w-4 h-4 text-maak-yellow mt-0.5 shrink-0" />
                <span>{COMPANY.location}</span>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-gray-400">
                <Phone className="w-4 h-4 text-maak-yellow mt-0.5 shrink-0" />
                <a
                  href={`tel:${COMPANY.phoneRaw}`}
                  className="hover:text-maak-yellow transition-colors"
                >
                  {COMPANY.phone}
                </a>
              </li>
            </ul>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 bg-[#25D366] hover:bg-[#1faa4f] text-white font-bold text-sm px-4 py-2.5 rounded-lg transition-colors"
            >
              Escríbenos por WhatsApp
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
            <p className="text-xs text-gray-500">
              © {new Date().getFullYear()} Maak Constructores. Todos los
              derechos reservados.
            </p>
            <Link
              href="/terminos-y-condiciones"
              className="text-xs text-gray-500 hover:text-maak-yellow underline-offset-2 hover:underline transition-colors"
            >
              Términos y condiciones
            </Link>
            <CookiePreferencesButton />
          </div>
          <p className="text-xs text-gray-500">
            Diseñado con estándares de seguridad y calidad técnica.
          </p>
        </div>
      </div>
    </footer>
  );
}
