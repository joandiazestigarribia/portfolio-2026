import { NextResponse, type NextRequest } from "next/server";
import { defaultLocale, locales } from "@/i18n/config";

// Generated metadata assets (og image, icons) keep their locale-prefixed URL
// so crawlers can fetch them without a redirect hop.
const metadataAssetPattern =
  /^\/(?:es|en)\/(?:opengraph-image|twitter-image|icon|apple-icon)(?:\/|$)/;

export default function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const hasLocale = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
  );

  if (hasLocale) {
    // Canonicalize explicit default-locale URLs: /es -> /, /es/links -> /links.
    const isDefaultLocaleUrl =
      pathname === `/${defaultLocale}` ||
      pathname.startsWith(`/${defaultLocale}/`);

    if (isDefaultLocaleUrl && !metadataAssetPattern.test(pathname)) {
      const url = request.nextUrl.clone();
      url.pathname = pathname.slice(`/${defaultLocale}`.length) || "/";
      return NextResponse.redirect(url, 308);
    }

    return NextResponse.next();
  }

  // Serve default-locale pages at clean URLs without a visible prefix.
  const url = request.nextUrl.clone();
  url.pathname =
    pathname === "/" ? `/${defaultLocale}` : `/${defaultLocale}${pathname}`;
  return NextResponse.rewrite(url);
}

export const config = {
  matcher: ["/((?!_next|_vercel|icon|apple-icon|.*\\..*).*)"],
};
