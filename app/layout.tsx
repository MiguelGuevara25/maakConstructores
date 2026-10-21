import Navbar from "@/src/components/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "@/src/components/Footer";
import WhatsAppBtn from "@/src/components/WhatsAppBtn";
import { SITE_URL } from "@/src/libs/seo";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "Maak Constructores | Instalación y Conversión de Gas Natural en Lima",
    template: "%s | Maak Constructores",
  },
  description:
    "Instalación, conversión y mantenimiento de gas natural en Lima, Perú. Ahorra hasta 50% en energía con seguridad certificada y respaldo técnico UNI. Residencial, comercial e industrial.",
  keywords: [
    "gas natural en Lima",
    "conversión de cocina a gas natural",
    "instalación de gas natural",
    "mantenimiento de gas natural",
    "certificación de gas natural",
    "Maak Constructores",
    "gas natural residencial Lima",
    "gas natural comercial Lima",
    "gabinetes de regulación",
    "detección de fugas de gas",
  ],
  authors: [{ name: "Maak Constructores" }],
  creator: "Maak Constructores",
  openGraph: {
    type: "website",
    locale: "es_PE",
    url: "https://maakconstructores.com",
    siteName: "Maak Constructores",
    title:
      "Maak Constructores | Instalación y Conversión de Gas Natural en Lima",
    description:
      "Especialistas en instalación, conversión y mantenimiento de gas natural en Lima. Ahorra hasta 50% en energía con seguridad certificada.",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Maak Constructores — Instalación, conversión y mantenimiento de gas natural en Lima",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Maak Constructores | Gas Natural en Lima",
    description:
      "Instalación, conversión y mantenimiento de gas natural en Lima, Perú.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html data-scroll-behavior="smooth" lang="es">
      <body className={inter.className}>
        <Navbar />
        <main className="pt-16 lg:pt-20">{children}</main>
        <Footer />
        <WhatsAppBtn />
      </body>
    </html>
  );
}
