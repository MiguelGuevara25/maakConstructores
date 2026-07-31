# 🏢 Maak Constructores - Plataforma Web Oficial

[![Next.js](https://img.shields.io/badge/Next.js-16.2-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2-blue?style=for-the-badge&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)

Plataforma web moderna, rápida y responsiva para **Maak Constructores**, empresa líder especializada en la **instalación, conversión y mantenimiento de gas natural y GLP** para hogares, negocios e industrias en Lima, Perú.

---

## 🌟 Características Principales

- 🚀 **Alto Rendimiento y SEO**: Desarrollado en Next.js (App Router) optimizado para motores de búsqueda y tiempos de carga instantáneos.
- 📱 **Diseño 100% Responsivo**: Interfaz fluida adaptable a dispositivos móviles, tablets y computadoras.
- 🎨 **Estética Moderna y Premium**: Diseñado con paleta corporativa personalizada, animaciones al hacer scroll (*Scroll Reveal*) y efectos visuales de interacción.
- 📲 **Integración Directa con WhatsApp**: Formulario de cotización y botones de acción que generan mensajes dinámicos a WhatsApp.
- 🖼️ **Optimización de Imágenes**: Implementación avanzada de `next/image` con `fill`, `priority`, `sizes` y seguridad mediante `remotePatterns`.
- 📐 **Arquitectura Modular y Tipada**: Estructura de código fuertemente tipada en TypeScript con interfaces reutilizables.

---

## 📱 Secciones del Sitio Web

| Sección | Ruta | Descripción |
| :--- | :--- | :--- |
| **Inicio** | `/` | Hero interactivo, beneficios principales, resumen de servicios, métricas clave y vista previa de proyectos. |
| **Nosotros** | `/nosotros` | Historia de la empresa, respaldo técnico UNI, Misión, Visión, Valores y línea de tiempo de hitos. |
| **Servicios** | `/servicios` | Catálogo detallado de conversiones residenciales, comerciales e industriales y mantenimientos. |
| **Proyectos** | `/proyectos` | Portafolio fotográfico interactivo con filtro dinámico por categoría (*Residencial*, *Comercial*, *Mantenimiento*). |
| **Contacto** | `/contacto` | Formulario de solicitud de visita técnica sin costo con selección de servicio y distrito. |

---

## 🛠️ Tecnologías Utilizadas

- **Framework**: [Next.js 16 (App Router)](https://nextjs.org/)
- **Biblioteca UI**: [React 19](https://react.dev/)
- **Lenguaje**: [TypeScript](https://www.typescriptlang.org/)
- **Estilos**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Iconografía**: [Lucide React](https://lucide.dev/)
- **Animaciones**: CSS animations customizadas + `useScrollReveal` (IntersectionObserver API)

---

## 📁 Estructura del Proyecto

```text
maak-constructores/
├── app/                      # Rutas de la aplicación (App Router)
│   ├── contacto/             # Página de contacto y formulario
│   ├── nosotros/             # Página sobre la empresa e historia
│   ├── proyectos/            # Portafolio interactivo de proyectos
│   ├── servicios/            # Catálogo detallado de servicios
│   ├── globals.css           # Estilos globales y tokens CSS
│   ├── layout.tsx            # Root Layout con Navbar y Footer
│   └── page.tsx              # Página principal (Home)
├── src/                      # Código fuente principal
│   ├── components/           # Componentes UI reutilizables
│   │   ├── Footer.tsx        # Pie de página oficial
│   │   ├── Header.tsx        # Encabezado dinámico para páginas
│   │   ├── Navbar.tsx        # Barra de navegación responsiva
│   │   └── WhatsAppBtn.tsx   # Botón flotante de contacto directo
│   ├── data/                 # Archivos de datos estáticos modularizados
│   │   ├── contacto.ts
│   │   ├── home.ts
│   │   ├── nosotros.ts
│   │   ├── proyectos.ts
│   │   └── servicios.ts
│   ├── hooks/                # Custom React Hooks
│   │   └── use-scroll-reveal.ts # Hook de animación al hacer scroll
│   ├── interfaces/           # Contratos y tipos de TypeScript
│   │   └── index.ts          # Interfaces de datos (BaseService, Services, DetailedServices, etc.)
│   └── libs/                 # Utilidades y constantes globales
│       └── company.ts        # Información corporativa y enlaces de WhatsApp
├── public/                   # Recursos estáticos locales
├── next.config.ts            # Configuración de Next.js (remotePatterns para Pexels)
├── tsconfig.json             # Configuración del compilador de TypeScript
└── package.json              # Dependencias y scripts de ejecución
```

---

## 💻 Instalación y Configuración Local

### Requisitos Previos
- **Node.js**: v18.17.0 o superior
- **npm** o **yarn** / **pnpm** / **bun**

### Pasos para Ejecutar

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/MiguelGuevara25/maakConstructores.git
   cd maak-constructores
   ```

2. **Instalar dependencias:**
   ```bash
   npm install
   ```

3. **Iniciar el servidor de desarrollo:**
   ```bash
   npm run dev
   ```

4. **Abrir en el navegador:**
   Navega a [http://localhost:3000](http://localhost:3000) para ver la aplicación funcionando.

---

## 🛠️ Comandos Disponibles

| Comando | Descripción |
| :--- | :--- |
| `npm run dev` | Inicia el servidor de desarrollo local en `http://localhost:3000`. |
| `npm run build` | Compila la aplicación optimizada para producción. |
| `npm run start` | Inicia el servidor de producción tras la compilación. |
| `npm run lint` | Ejecuta ESLint para auditar la calidad del código. |

---

## 🔒 Configuración de Imágenes Remotas

Para permitir la carga segura de imágenes desde **Pexels**, el archivo `next.config.ts` incluye la siguiente configuración:

```ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
    ],
  },
};

export default nextConfig;
```

---

## 📞 Contacto Corporativo

- **Empresa**: Maak Constructores S.A.C.
- **Especialidad**: Gas Natural Residencial, Comercial e Industrial
- **Teléfono**: [+51 987 654 321](tel:+51987654321)
- **Ubicación**: Lima, Perú

---

*Desarrollado con ❤️ y excelencia técnica para Maak Constructores.*
