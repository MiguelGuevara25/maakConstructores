import { LucideIcon } from "lucide-react";

export interface Project {
  img: string;
  title: string;
  cat: string;
  desc: string;
}

export interface Benefits {
  icon: LucideIcon;
  title: string;
  desc: string;
  color: string;
  bg: string;
}

export interface Services {
  icon: LucideIcon;
  title: string;
  desc: string;
  img: string;
  href?: string;
}

export type DetailedServices = Services & {
  id: string;
  subtitle: string;
  features: { icon: LucideIcon; text: string }[];
  cta: string;
};

export interface Gallery {
  img: string;
  title: string;
  cat: string;
}

export interface Values {
  icon: LucideIcon;
  title: string;
  desc: string;
}

export interface Milestones {
  year: string;
  title: string;
  desc: string;
}
