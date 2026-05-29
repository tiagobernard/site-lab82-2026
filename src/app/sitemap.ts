import type { MetadataRoute } from "next";

const BASE = "https://lab82.dev";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: BASE,                       lastModified: new Date(), changeFrequency: "weekly",  priority: 1   },
    { url: `${BASE}/portfolio`,        lastModified: new Date(), changeFrequency: "weekly",  priority: 0.9 },
    { url: `${BASE}/wordpress`,        lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/hospedagem`,       lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/manutencao`,       lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
  ];
}
