import {
  Home as HomeIcon,
  UtensilsCrossed,
  WashingMachine,
  ShieldCheck,
  ShowerHead,
  Building2,
  FileCheck,
  Factory,
  Wrench,
  Search,
  Gauge,
  Flame,
} from "lucide-react";
import { DetailedServices, Step } from "../interfaces";

export const SERVICES: DetailedServices[] = [
  {
    id: "residencial",
    icon: HomeIcon,
    title: "Gas Natural Residencial",
    subtitle: "Conversión para tu hogar",
    desc: "Convertimos y instalamos redes de gas natural para tu casa, garantizando ahorro real y seguridad para tu familia.",
    img: "https://images.pexels.com/photos/6510984/pexels-photo-6510984.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    features: [
      { icon: Flame, text: "Conversión de cocinas a gas natural" },
      { icon: ShowerHead, text: "Instalación de termas y calentadores" },
      { icon: WashingMachine, text: "Conversión de secadoras" },
      { icon: Gauge, text: "Redes internas de tuberías certificadas" },
    ],
    cta: "Quiero convertir mi hogar",
  },

  {
    id: "comercial",
    icon: Building2,
    title: "Instalaciones comerciales a gas natural o GLP",
    subtitle: "Soluciones para tu negocio",
    desc: "Atendemos restaurantes, panaderías e industrias con instalaciones de alta demanda y gabinetes de regulación profesional.",
    img: "https://images.pexels.com/photos/15671373/pexels-photo-15671373.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    features: [
      { icon: UtensilsCrossed, text: "Restaurantes y cocinas comerciales" },
      { icon: Flame, text: "Panaderías y hornos industriales" },
      { icon: Factory, text: "Instalaciones para industria" },
      { icon: Gauge, text: "Gabinetes de regulación a medida" },
    ],
    cta: "Quiero instalar en mi negocio",
  },

  {
    id: "mantenimiento",
    icon: Wrench,
    title: "Mantenimiento y Certificación",
    subtitle: "Seguridad garantizada",
    desc: "Servicio técnico preventivo y correctivo para asegurar el funcionamiento óptimo y seguro de tus instalaciones de gas.",
    img: "https://images.pexels.com/photos/16752780/pexels-photo-16752780.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    features: [
      { icon: Search, text: "Detección de fugas de gas" },
      { icon: Wrench, text: "Mantenimiento preventivo programado" },
      { icon: ShieldCheck, text: "Inspección técnica de seguridad" },
      { icon: FileCheck, text: "Certificación de instalaciones" },
    ],
    cta: "Quiero un mantenimiento",
  },
];

export const steps: Step[] = [
  {
    num: "01",
    title: "Contacto",
    desc: "Nos escribes por WhatsApp y coordinamos la visita.",
  },
  {
    num: "02",
    title: "Evaluación",
    desc: "Realizamos una inspección técnica de tu espacio.",
  },
  {
    num: "03",
    title: "Cotización",
    desc: "Te enviamos una propuesta clara y personalizada.",
  },
  {
    num: "04",
    title: "Instalación",
    desc: "Ejecutamos el trabajo con seguridad certificada.",
  },
];
