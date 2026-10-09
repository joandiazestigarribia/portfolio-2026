import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Hero } from "@/components/sections/hero";
import { Experience } from "@/components/sections/experience";
import { Quotes } from "@/components/sections/quotes";
import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { otherLocale, toLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { alternatesFor, pagePath } from "@/i18n/metadata";

export async function generateMetadata({
  params,
}: PageProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;

  return { alternates: alternatesFor("home", toLocale(lang)) };
}

export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  const locale = toLocale(lang);
  const dict = getDictionary(locale);
  const otherLocaleHref = pagePath("home", otherLocale(locale));

  return (
    <>
      <SiteHeader nav={dict.nav} otherLocaleHref={otherLocaleHref} />
      <main>
        <Hero dict={dict} />
        <Experience dict={dict} />
        <About dict={dict} />
        <Quotes dict={dict} />
        <Contact dict={dict} />
      </main>
      <SiteFooter locale={locale} />
    </>
  );
}
