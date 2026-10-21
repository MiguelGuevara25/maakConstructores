import type { MetadataRoute } from "next";

import { SITE_URL } from "@/src/libs/seo";

// Required by `output: 'export'`: generate the file at build time.
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
