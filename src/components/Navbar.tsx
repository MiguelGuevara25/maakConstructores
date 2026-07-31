"use client";

import { Flame, Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";

import { COMPANY, WHATSAPP_LINK } from "../libs/company";

const NAV_LINKS = [
  { href: "/", label: "Inicio" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/servicios", label: "Servicios" },
  { href: "/proyectos", label: "Proyectos" },
  { href: "/contacto", label: "Contacto" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg py-2"
          : "bg-white/80 backdrop-blur-sm py-3"
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-10 h-10 rounded-lg bg-linear-to-br from-maak-yellow to-maak-yellow-light flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
            <Flame className="w-5 h-5 text-maak-dark" strokeWidth={2.5} />
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-extrabold text-lg text-maak-dark tracking-tight">
              Maak<span className="text-maak-yellow">Constructores</span>
            </span>
            <span className="text-[10px] text-maak-cement font-medium tracking-wider">
              {COMPANY.handle}
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`nav-link text-sm font-semibold transition-colors ${
                  pathname === link.href
                    ? "text-maak-yellow active"
                    : "text-maak-dark hover:text-maak-yellow"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA Desktop */}
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:inline-flex items-center gap-2 bg-maak-yellow hover:bg-maak-yellow-light text-maak-dark font-bold text-sm px-5 py-2.5 rounded-lg transition-all hover:shadow-lg hover:scale-105"
        >
          Solicitar Visita
        </a>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 text-maak-dark"
          aria-label="Menú"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="bg-white px-4 py-4 space-y-1 border-t border-gray-100">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setOpen(false)}
                className={`block px-4 py-3 rounded-lg text-sm font-semibold transition-colors ${
                  pathname === link.href
                    ? "bg-maak-yellow/10 text-maak-yellow"
                    : "text-maak-dark hover:bg-gray-50"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="pt-2">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="block text-center bg-maak-yellow text-maak-dark font-bold text-sm px-5 py-3 rounded-lg"
            >
              Solicitar Visita Técnica
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
