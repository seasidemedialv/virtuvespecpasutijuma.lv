import type { MetadataRoute } from "next";
import { seoPages } from "@/lib/site-data";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://virtuvespecpasutijuma.lv";
  const staticRoutes = [
    "",
    "/ka-mes-stradajam",
    "/realizetie-projekti",
    "/par-mums",
    "/kontakti",
    "/privatuma-politika",
    "/buj",
  ];

  return [
    ...staticRoutes.map((path) => ({
      url: `${base}${path}/`,
      changeFrequency: path === "" ? ("weekly" as const) : ("monthly" as const),
      priority: path === "" ? 1 : 0.6,
    })),
    ...seoPages.map((page) => ({
      url: `${base}/${page.slug}/`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
