import { amatuer, asiaAv, uncensored, watchJav } from "@/lib/navsList";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModDate = new Date(
    new Date().getTime() - 12 * 60 * 60 * 1000
  ).toISOString();

  const pages = [...watchJav, ...amatuer, ...uncensored, ...asiaAv].map(
    (route) => {
      return {
        url: `${process.env.NEXT_PUBLIC_BASE_URL}${route.destination}`.replace(
          /&/g,
          "&amp;"
        ),
        lastModified: lastModDate,
        changeFrequency: "daily" as const,
        priority: 0.8,
      };
    }
  );

  console.log(pages);

  return [
    ...pages,
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/`,
      lastModified: lastModDate,
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/dmca`,
      lastModified: lastModDate,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/privacy-and-policy`,
      lastModified: lastModDate,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/watch-later`,
      lastModified: lastModDate,
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ];
}
