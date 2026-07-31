import {
  Home as HomeIcon,
  GraduationCap,
  ShieldCheck,
  PiggyBank,
  Building2,
  Wrench,
  Users,
} from "lucide-react";
import { Benefits, Gallery, Services } from "../interfaces";

export const BENEFITS: Benefits[] = [
  {
    icon: PiggyBank,
    title: "Ahorro Real",
    desc: "Reduce hasta 50% tu gasto en energía al convertir tus equipos a gas natural.",
    color: "text-maak-yellow",
    bg: "bg-maak-yellow/10",
  },
  {
    icon: ShieldCheck,
    title: "Seguridad Certificada",
    desc: "Instalaciones que cumplen todas las normas peruanas de seguridad vigentes.",
    color: "text-maak-cyan",
    bg: "bg-maak-cyan/10",
  },
  {
    icon: GraduationCap,
    title: "Respaldo Profesional",
    desc: "Contamos con un equipo de ingenieros y técnicos altamente calificados.",
    color: "text-maak-magenta",
    bg: "bg-maak-magenta/10",
  },
  {
    icon: Users,
    title: "Atención Personalizada",
    desc: "Asesoría y acompañamiento técnico en cada etapa de tu proyecto.",
    color: "text-maak-yellow",
    bg: "bg-maak-yellow/10",
  },
];

export const SERVICES: Services[] = [
  {
    icon: HomeIcon,
    title: "Gas Natural Residencial",
    desc: "Conversión de cocinas, termas, secadoras y redes internas para tu hogar.",
    href: "/servicios#residencial",
    img: "https://images.pexels.com/photos/6510984/pexels-photo-6510984.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
  },
  {
    icon: Building2,
    title: "Gas Natural Comercial e Industrial",
    desc: "Restaurantes, panaderías, hornos industriales y gabinetes de regulación.",
    href: "/servicios#comercial",
    img: "https://images.pexels.com/photos/15671373/pexels-photo-15671373.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
  },
  {
    icon: Wrench,
    title: "Mantenimiento y Certificación",
    desc: "Detección de fugas, mantenimiento preventivo e inspección técnica.",
    href: "/servicios#mantenimiento",
    img: "https://images.pexels.com/photos/16752780/pexels-photo-16752780.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
  },
];

export const GALLERY: Gallery[] = [
  {
    img: "https://images.pexels.com/photos/9389356/pexels-photo-9389356.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    title: "Instalación de red interna",
    cat: "Residencial",
  },
  {
    img: "https://images.pexels.com/photos/15671373/pexels-photo-15671373.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    title: "Conversión de cocina industrial",
    cat: "Comercial",
  },
  {
    img: "https://images.pexels.com/photos/16752780/pexels-photo-16752780.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    title: "Instalación de medidor",
    cat: "Mantenimiento",
  },
  {
    img: "https://images.pexels.com/photos/6419128/pexels-photo-6419128.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    title: "Red de tuberías certificada",
    cat: "Residencial",
  },
];

export const STATS = [
  { value: "50%", label: "Ahorro en energía" },
  { value: "100%", label: "Seguridad certificada" },
  { value: "+10", label: "Años de experiencia" },
  { value: "24h", label: "Respuesta técnica" },
];
