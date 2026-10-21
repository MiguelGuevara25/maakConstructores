import type { Metadata } from "next";

interface PageMetadataOptions {
  /** Page title without the site suffix. `layout.tsx` adds it via template. */
  title: string;
  description: string;
  /** Route path, e.g. `/nosotros`. Used for canonical and Open Graph URL. */
  path: string;
}

const SITE_NAME = "Maak Constructores";

export const SITE_URL = "https://maakconstructores.com";

const OG_IMAGE = {
  url: "/og.png",
  width: 1200,
  height: 630,
  alt: "Maak Constructores — Instalación, conversión y mantenimiento de gas natural en Lima",
};

/**
 * Builds the metadata for a route: title, description, canonical URL and the
 * Open Graph / Twitter tags of a shareable page.
 */
export function pageMetadata({
  title,
  description,
  path,
}: PageMetadataOptions): Metadata {
  const fullTitle = `${title} | ${SITE_NAME}`;

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "es_PE",
      url: path,
      siteName: SITE_NAME,
      title: fullTitle,
      description,
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [OG_IMAGE],
    },
  };
}
