import type { Metadata } from "next";
import { defaultLocale, type Locale } from "./config";

type PageKey = "home" | "links";

const pagePaths: Record<PageKey, string> = {
  home: "",
  links: "/links",
};

export function pagePath(page: PageKey, locale: Locale): string {
  const path = pagePaths[page];
  return locale === defaultLocale ? path || "/" : `/${locale}${path}`;
}

export function alternatesFor(
  page: PageKey,
  locale: Locale
): Metadata["alternates"] {
  return {
    canonical: pagePath(page, locale),
    languages: {
      es: pagePath(page, "es"),
      en: pagePath(page, "en"),
      "x-default": pagePath(page, defaultLocale),
    },
  };
}
