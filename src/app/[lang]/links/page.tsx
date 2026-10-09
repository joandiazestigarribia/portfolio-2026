import type { Metadata } from "next";
import Link from "next/link";
import { profile } from "@/data/profile";
import { DownloadIcon } from "@/components/icons/download-icon";
import { GithubIcon } from "@/components/icons/github-icon";
import { LinkedinIcon } from "@/components/icons/linkedin-icon";
import { XIcon } from "@/components/icons/x-icon";
import { toLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { alternatesFor } from "@/i18n/metadata";
import styles from "./page.module.css";

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/links">): Promise<Metadata> {
  const { lang } = await params;
  const locale = toLocale(lang);
  const dict = getDictionary(locale);

  return {
    title: dict.linksPage.metaTitle,
    description: dict.linksPage.metaDescription,
    alternates: alternatesFor("links", locale),
  };
}

function MonogramMark({ className }: { className?: string }) {
  return (
    <span className={`${styles.miniMark} ${className ?? ""}`} aria-hidden="true">
      J<span className={styles.miniMarkStroke} />D
    </span>
  );
}

export default async function LinksPage({
  params,
}: PageProps<"/[lang]/links">) {
  const { lang } = await params;
  const locale = toLocale(lang);
  const dict = getDictionary(locale);
  const t = dict.linksPage;
  const homeHref = locale === "es" ? "/" : "/en";
  const langSwitchHref = locale === "es" ? "/en/links" : "/links";

  const links = [
    {
      title: t.cvTitle,
      subtitle: t.cvSubtitle,
      href: dict.profile.cvHref,
      download: true,
      Icon: DownloadIcon,
    },
    {
      title: "GitHub",
      subtitle: "@joandiazestigarribia",
      href: profile.social.github,
      Icon: GithubIcon,
    },
    {
      title: "LinkedIn",
      subtitle: t.linkedinSubtitle,
      href: profile.social.linkedin,
      Icon: LinkedinIcon,
    },
    {
      title: "X",
      subtitle: "@joandefined",
      href: profile.social.x,
      Icon: XIcon,
    },
  ];

  return (
    <div className={styles.page}>
      <Link
        className={styles.langSwitch}
        href={langSwitchHref}
        aria-label={dict.nav.switchLanguage.ariaLabel}
      >
        {dict.nav.switchLanguage.label}
      </Link>

      <div className={styles.card}>
        <div className={styles.identity}>
          <div className={styles.mark} aria-hidden="true">
            <span>J</span>
            <span className={styles.stroke} />
            <span>D</span>
          </div>
          <h1 className={styles.name}>{profile.name}</h1>
        </div>

        <div className={styles.bioGroup}>
          <p>
            <span className={styles.flourish}>{t.greeting}</span>
            {t.intro}
          </p>
          <p>{t.introLinks}</p>
        </div>

        <nav className={styles.links} aria-label={t.navLabel}>
          <ul>
            <li>
              <a
                className={styles.linkRow}
                href={homeHref}
                target="_blank"
                rel="me noopener noreferrer"
              >
                <MonogramMark className={styles.tag} />
                <span className={styles.rowText}>
                  <span className={styles.rowTitle}>Portfolio</span>
                  <span className={styles.rowSub}>{t.portfolioSubtitle}</span>
                </span>
                <span className={styles.rowArrow} aria-hidden="true">
                  →
                </span>
              </a>
            </li>
            {links.map(({ title, subtitle, href, download, Icon }) => (
              <li key={title}>
                <a
                  className={styles.linkRow}
                  href={href}
                  target="_blank"
                  rel="me noopener noreferrer"
                  download={download}
                >
                  <Icon className={styles.tag} />
                  <span className={styles.rowText}>
                    <span className={styles.rowTitle}>{title}</span>
                    <span className={styles.rowSub}>{subtitle}</span>
                  </span>
                  <span className={styles.rowArrow} aria-hidden="true">
                    →
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}
