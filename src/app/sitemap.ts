import type { MetadataRoute } from "next";
import { defaultLocale, locales, type Locale } from "@/i18n/config";
import { siteUrl } from "@/lib/site-config";

const routes = [
  { path: "" },
  { path: "/links" },
];

function urlFor(path: string, locale: Locale) {
  const prefix = locale === defaultLocale ? "" : `/${locale}`;
  return `${siteUrl}${prefix}${path}`;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.flatMap(({ path }) => {
    const languages = Object.fromEntries(
      locales.map((locale) => [locale, urlFor(path, locale)])
    );

    return locales.map((locale) => ({
      url: urlFor(path, locale),
      lastModified,
      alternates: { languages },
    }));
  });
}
