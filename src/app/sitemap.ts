import type { MetadataRoute } from "next";
import { projectsListing } from "@/data";

const BASE_URL = "https://noemiesaintemarie.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const projectEntries = projectsListing.map(({ slug }) => ({
    url: `${BASE_URL}/projects/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    ...projectEntries,
  ];
}
