import { GraduationCap, ShieldCheck, Award, Heart } from "lucide-react";
import { Milestones, Values } from "../interfaces";

export const VALUES: Values[] = [
  {
    icon: ShieldCheck,
    title: "Seguridad ante todo",
    desc: "Cumplimos estrictamente las normas peruanas de seguridad en cada instalación.",
  },
  {
    icon: GraduationCap,
    title: "Respaldo técnico UNI",
    desc: "Nuestro equipo está formado por ingenieros de la Universidad Nacional de Ingeniería.",
  },
  {
    icon: Award,
    title: "Calidad certificada",
    desc: "Materiales y procesos que garantizan instalaciones duraderas y confiables.",
  },
  {
    icon: Heart,
    title: "Compromiso con el cliente",
    desc: "Acompañamiento técnico personalizado antes, durante y después del proyecto.",
  },
];

export const MILESTONES: Milestones[] = [
  {
    year: "Inicio",
    title: "Fundación",
    desc: "Maak Constructores nace con la misión de brindar instalaciones de gas natural seguras en Lima.",
  },
  {
    year: "Crecimiento",
    title: "Expansión de servicios",
    desc: "Ampliamos nuestra oferta al sector comercial e industrial con gabinetes de regulación.",
  },
  {
    year: "Hoy",
    title: "Referente técnico",
    desc: "Somos un referente en conversión y mantenimiento de gas natural en el cercado de Lima.",
  },
];
