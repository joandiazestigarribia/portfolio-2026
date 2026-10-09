import type { Metadata } from "next";
import { fontVariables } from "@/lib/fonts";
import { profile } from "@/data/profile";
import { siteUrl } from "@/lib/site-config";
import { locales, toLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import "../globals.css";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  const dict = getDictionary(toLocale(lang));
  const title = `${profile.name} — ${profile.role}`;

  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: title,
      template: `%s — ${profile.name}`,
    },
    description: dict.profile.summary,
    openGraph: {
      title,
      description: dict.profile.summary,
      locale: dict.meta.ogLocale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: dict.profile.summary,
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  const dict = getDictionary(toLocale(lang));

  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    url: siteUrl,
    jobTitle: profile.role,
    description: dict.profile.summary,
    sameAs: [profile.social.github, profile.social.linkedin, profile.social.x],
  };

  return (
    <html lang={dict.meta.htmlLang} className={fontVariables}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
