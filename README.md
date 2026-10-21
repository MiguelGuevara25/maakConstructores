# Maak Constructores — Sitio Web Oficial

[![Next.js](https://img.shields.io/badge/Next.js-16.2-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2-blue?style=for-the-badge&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)

Sitio web estático de **Maak Constructores S.A.C.**, empresa especializada en la **instalación, conversión y mantenimiento de gas natural** para hogares, comercios e industrias en Lima, Perú.

El objetivo del sitio es informar sobre los servicios y **generar solicitudes de visita técnica** por WhatsApp, sin backend ni base de datos.

---

## 📋 Tabla de contenido

- [Características](#-características)
- [Páginas del sitio](#-páginas-del-sitio)
- [Stack tecnológico](#-stack-tecnológico)
- [Requisitos previos](#-requisitos-previos)
- [Instalación y uso local](#-instalación-y-uso-local)
- [Scripts disponibles](#-scripts-disponibles)
- [Compilación estática y despliegue](#-compilación-estática-y-despliegue)
- [Estructura del proyecto](#-estructura-del-proyecto)
- [Arquitectura](#-arquitectura)
- [Configuraciones clave](#-configuraciones-clave)
- [SEO y datos estructurados](#-seo)
- [Cookies y privacidad](#-cookies-y-privacidad)
- [Mantenimiento](#-mantenimiento)
- [Pendientes conocidos](#-pendientes-conocidos)
- [Contacto](#-contacto)

---

## ✨ Características

- ⚡ **Exportación estática (`output: "export"`)**: el sitio se genera como HTML/CSS/JS puro y se puede alojar en cualquier hosting o CDN, sin servidor Node.
- 🖼️ **Imágenes optimizadas sin servidor**: un loader propio reescribe las URL de Pexels para servir la imagen ya redimensionada y comprimida.
- 🔎 **SEO por página**: título, descripción, canonical, Open Graph, Twitter Card, `sitemap.xml` y `robots.txt` generados en el build.
- 📲 **Solicitud de cotización por WhatsApp**: el formulario valida los datos en el cliente y abre WhatsApp con el mensaje prellenado; no requiere backend.
- ✅ **Validación y estados de error**: mensajes por campo, foco en el primer campo inválido y aviso cuando el navegador bloquea la ventana emergente.
- 🍪 **Aviso de cookies con consentimiento**: aceptar o rechazar, con preferencia guardada y reabrible desde el pie de página.
- 🎨 **Diseño responsive con animaciones**: paleta corporativa, *scroll reveal* con `IntersectionObserver` y secciones adaptables a móvil, tablet y escritorio.
- ♿ **Accesibilidad cuidada**: `aria-invalid`, `aria-describedby`, `role="alert"`, `aria-live` y foco gestionado en formularios.
- 📐 **Código tipado y modular**: TypeScript estricto, datos separados de la UI y componentes reutilizables.

---

## 📄 Páginas del sitio

| Ruta | Descripción | Estado |
| :--- | :--- | :--- |
| `/` | Portada: hero, beneficios, resumen de servicios y vista previa de proyectos. | Publicada |
| `/nosotros` | Historia, misión, visión, valores y línea de tiempo. | Publicada |
| `/servicios` | Catálogo de servicios residenciales, comerciales e industriales. | Publicada |
| `/proyectos` | Portafolio con filtro dinámico por categoría. | Publicada |
| `/contacto` | Formulario de solicitud de visita técnica + datos de contacto. | Publicada |
| `/gracias` | Confirmación posterior al envío y explicación de los siguientes pasos. | Publicada (con `noindex`) |
| `/terminos-y-condiciones` | Condiciones de uso del sitio. | Publicada |
| `/politica-de-privacidad` | Política de privacidad (Ley 29733). | ⏳ Pendiente |
| `not-found` | Página 404 personalizada con enlaces de navegación. | Publicada (con `noindex`) |

---

## 🛠 Stack tecnológico

| Área | Tecnología |
| :--- | :--- |
| Framework | [Next.js 16 (App Router)](https://nextjs.org/) con exportación estática |
| UI | [React 19](https://react.dev/) |
| Lenguaje | [TypeScript 5](https://www.typescriptlang.org/) (`strict: true`) |
| Estilos | [Tailwind CSS v4](https://tailwindcss.com/) |
| Íconos | [lucide-react](https://lucide.dev/) |
| Imágenes remotas | [Pexels](https://www.pexels.com/) mediante loader propio |
| Calidad | ESLint 9 con `eslint-config-next` |

---

## ✅ Requisitos previos

- **Node.js** 20 o superior (probado con Node 26).
- **npm** (el proyecto usa `package-lock.json`).

---

## 💻 Instalación y uso local

```bash
# 1. Clonar el repositorio
git clone https://github.com/MiguelGuevara25/maakConstructores.git
cd maak-constructores

# 2. Instalar dependencias
npm install

# 3. Levantar el servidor de desarrollo
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

---

## 🚀 Scripts disponibles

| Comando | Descripción |
| :--- | :--- |
| `npm run dev` | Servidor de desarrollo en `http://localhost:3000`. |
| `npm run build` | Compila y **genera el sitio estático en `out/`**. |
| `npm run start` | Servidor de producción de Next.js (para probar el build sin exportar). |
| `npm run lint` | Ejecuta ESLint sobre todo el proyecto. |
| `npm run og` | Regenera `public/og.png`, la imagen usada en las tarjetas sociales. |

Verificaciones recomendadas antes de publicar:

```bash
npx tsc --noEmit   # comprobación de tipos
npm run lint       # calidad de código
npm run build      # compilación + exportación
```

---

## 📦 Compilación estática y despliegue

El proyecto usa `output: "export"`, por lo que `npm run build` deja el sitio listo en la carpeta **`out/`**:

```text
out/
├── index.html
├── servicios.html
├── proyectos.html
├── nosotros.html
├── contacto.html
├── gracias.html
├── terminos-y-condiciones.html
├── 404.html              # página no encontrada
├── robots.txt            # generado en el build
├── sitemap.xml           # generado en el build
├── og.png
└── _next/                # JS y CSS con hash
```

### Publicar la carpeta `out/`

| Hosting | Configuración |
| :--- | :--- |
| **Netlify / Vercel / Cloudflare Pages** | Build: `npm run build` · Directorio de publicación: `out` |
| **GitHub Pages** | Subir el contenido de `out/` a la rama de publicación. |
| **Nginx** | Servir `out/` y añadir `error_page 404 /404.html;` |
| **Apache** | Servir `out/` y añadir `ErrorDocument 404 /404.html` |

> ⚠️ **Importante:** las variables de entorno se fijan en tiempo de compilación. Si cambias alguna, hay que volver a ejecutar `npm run build` y volver a desplegar.

---

## 📁 Estructura del proyecto

```text
maak-constructores/
├── app/                              # Rutas (App Router)
│   ├── contacto/
│   │   ├── page.tsx                  # Server Component: metadata + render
│   │   └── ContactoContent.tsx       # Client Component: estado del formulario
│   ├── proyectos/
│   │   ├── page.tsx                  # Server Component: metadata
│   │   └── ProyectosContent.tsx      # Client Component: filtro por categoría
│   ├── gracias/page.tsx              # Confirmación post-envío (noindex)
│   ├── terminos-y-condiciones/       # Términos y condiciones
│   ├── nosotros/page.tsx
│   ├── servicios/page.tsx
│   ├── page.tsx                      # Portada
│   ├── not-found.tsx                 # 404 personalizada (noindex)
│   ├── layout.tsx                    # Layout raíz: metadata global, Navbar, Footer
│   ├── sitemap.ts                    # /sitemap.xml (force-static)
│   ├── robots.ts                     # /robots.txt (force-static)
│   └── globals.css                   # Tokens de color, animaciones y utilidades
├── src/
│   ├── assets/icons/                 # Íconos SVG (Instagram, Facebook, WhatsApp)
│   ├── components/
│   │   ├── home/                     # Secciones de la portada
│   │   ├── nosotros/                 # Secciones de "Nosotros"
│   │   ├── project/                  # Galería y CTA de proyectos
│   │   ├── services/                 # Proceso de trabajo
│   │   ├── contact/                  # Formulario e información de contacto
│   │   ├── CookieBanner.tsx          # Aviso de cookies
│   │   ├── CookiePreferencesButton.tsx
│   │   ├── Footer.tsx
│   │   ├── Header.tsx                # Encabezado interno de páginas
│   │   ├── Navbar.tsx
│   │   ├── ScrollReveal.tsx          # Isla cliente para las animaciones
│   │   └── WhatsAppBtn.tsx           # Botón flotante
│   ├── data/                         # Contenido editable (servicios, proyectos…)
│   ├── hooks/use-scroll-reveal.ts    # Hook de animación al hacer scroll
│   ├── interfaces/                   # Tipos compartidos
│   └── libs/
│       ├── company.ts                # Datos corporativos y enlaces de WhatsApp
│       ├── contact-form.ts           # Tipos y validación del formulario
│       ├── cookie-consent.ts         # Lectura/escritura del consentimiento
│       ├── image-loader.ts           # Loader de imágenes para Pexels
│       └── seo.ts                    # Utilidades de metadata (canonical, OG)
├── public/
│   └── og.png                        # Imagen Open Graph (1200×630)
├── scripts/generate-og.mjs           # Generador de la imagen OG
├── next.config.ts
├── tsconfig.json
└── package.json
```

---

## 🏗 Arquitectura

### Server Components + islas cliente

Las páginas son **Server Components** para poder exportar `metadata` (título, canonical, OG). La interactividad vive en componentes pequeños marcados con `"use client"`:

- `ScrollReveal` → activa las animaciones sin volver cliente toda la página.
- `ContactoContent` / `ProyectosContent` → estado del formulario y del filtro.
- `Navbar`, `CookieBanner`, `WhatsAppBtn` → interacción propia de la interfaz.

### Contenido separado de la UI

Los textos, listas de servicios y proyectos están en `src/data/*.ts`, tipados desde `src/interfaces`. Para cambiar contenido no hace falta tocar los componentes.

### Flujo del formulario

```text
Usuario completa el formulario
        ↓
validateContactForm()  →  errors por campo (si hay)  →  enfoca el primer error
        ↓ (datos válidos)
window.open(WhatsApp con el mensaje prellenado)   ← se abre en el mismo clic
        ↓
  ¿se abrió?  ── no ──▶  estado "error" + enlace manual a WhatsApp
        │
       sí
        ↓
  router.push("/gracias")
```

No hay backend: el mensaje se construye en el navegador y se envía desde la app de WhatsApp del usuario.

---

## ⚙️ Configuraciones clave

### `next.config.ts`

```ts
const nextConfig: NextConfig = {
  output: "export",              // sitio estático: no existe /_next/image
  images: {
    loader: "custom",
    loaderFile: "./src/libs/image-loader.ts",
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048], // tope: evita imágenes de más de 1 MB
    remotePatterns: [{ protocol: "https", hostname: "images.pexels.com" }],
  },
};
```

### Datos corporativos — `src/libs/company.ts`

Teléfono, correo, ubicación, handle y mensaje base de WhatsApp. **Es el primer archivo a revisar** si cambia algún dato de contacto.

### SEO — `src/libs/seo.ts`

Expone `SITE_URL` y el helper `pageMetadata()`, que arma de una sola vez título, descripción, canonical y etiquetas Open Graph/Twitter. Las rutas internas nuevas deberían usarlo:

```ts
export const metadata: Metadata = pageMetadata({
  title: "Nombre de la página",
  description: "Descripción de máximo ~160 caracteres.",
  path: "/ruta",
});
```

---

## 🔎 SEO

- **`sitemap.xml`** → `app/sitemap.ts`. Al crear una ruta pública hay que **añadirla a la lista**.
- **`robots.txt`** → `app/robots.ts`, con la referencia al sitemap.
- **Canonical y Open Graph** → se resuelven con `metadataBase` (`SITE_URL`) + `pageMetadata()`.
- **Imagen social** → `public/og.png` (1200×630). Se regenera con `npm run og`; si cambia el texto, edita `scripts/generate-og.mjs`.
- **`noindex`** en `/gracias` y en la página 404, para no competir en resultados de búsqueda.
- Ambos archivos (`sitemap.ts`, `robots.ts`) requieren `export const dynamic = "force-static"` por el modo exportación.

---

## 🍪 Cookies y privacidad

- El aviso de cookies aparece en la primera visita y exige una decisión: **Aceptar todas** o **Solo necesarias**.
- La elección se guarda en `localStorage` bajo la clave `maak-cookie-consent-v1`.
- El pie de página incluye **“Preferencias de cookies”** para cambiar la decisión.
- `src/libs/cookie-consent.ts` expone lo necesario para cargar herramientas de medición **solo con permiso**:

```ts
import { hasAnalyticsConsent, COOKIE_CONSENT_EVENT } from "@/src/libs/cookie-consent";
```

> Este es el punto de integración para Google Analytics 4, Plausible, Umami o cualquier analítica futura.

---

## 🔧 Mantenimiento

| Quiero… | Dónde editar |
| :--- | :--- |
| Cambiar teléfono, correo o redes | `src/libs/company.ts` + `src/components/Footer.tsx` |
| Editar servicios | `src/data/servicios.ts` |
| Editar proyectos del portafolio | `src/data/proyectos.ts` |
| Editar distritos o tipos de servicio del formulario | `src/data/contacto.ts` |
| Cambiar textos legales | `app/terminos-y-condiciones/page.tsx` |
| Ajustar la imagen de compartir en redes | `scripts/generate-og.mjs` → `npm run og` |
| Agregar una página | Crear `app/<ruta>/page.tsx` con `pageMetadata()` y añadirla a `app/sitemap.ts` |

### Reglas de validación del formulario

Definidas en `src/libs/contact-form.ts`:

- **Nombre**: mínimo 3 caracteres.
- **Teléfono**: celular de 9 dígitos, fijo de 7-8 dígitos o fijo con código de área (`01`). Acepta espacios, guiones y el prefijo `+51`.

---

## ⏳ Pendientes conocidos

- [ ] **Política de privacidad** (`/politica-de-privacidad`), a la espera del RUC y el domicilio fiscal.
- [ ] **Dirección física real** en el pie de página y en la sección de contacto.
- [ ] **Analíticas** (Google Analytics 4, Plausible, etc.), condicionadas al consentimiento de cookies.
- [ ] **Favicon** y set de íconos de aplicación.

---

## 📞 Contacto

- **Empresa**: Maak Constructores S.A.C.
- **Especialidad**: gas natural residencial, comercial e industrial
- **Teléfono / WhatsApp**: [+51 917 375 664](tel:+51917375664)
- **Correo**: [contacto@maakconstructores.com](mailto:contacto@maakconstructores.com)
- **Ubicación**: Cercado de Lima, Lima, Perú
- **Sitio**: [maakconstructores.com](https://maakconstructores.com)

---

*Desarrollado para Maak Constructores S.A.C.*
