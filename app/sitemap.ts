import type { MetadataRoute } from "next";

import { SITE_URL } from "@/src/libs/seo";

// Required by `output: 'export'`: generate the file at build time.
export const dynamic = "force-static";

/**
 * Generated at build time as `/sitemap.xml` (works with `output: 'export'`).
 * Add every public route here when new pages are created.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: SITE_URL,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/servicios`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/proyectos`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/nosotros`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/contacto`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.9,
    },
  ];
}
