import type { Metadata } from "next";
import { profile } from "@/data/profile";
import { DownloadIcon } from "@/components/icons/download-icon";
import { GithubIcon } from "@/components/icons/github-icon";
import { LinkedinIcon } from "@/components/icons/linkedin-icon";
import { XIcon } from "@/components/icons/x-icon";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Links",
  description: `Enlaces de contacto de ${profile.name}.`,
};

function MonogramMark({ className }: { className?: string }) {
  return (
    <span className={`${styles.miniMark} ${className ?? ""}`} aria-hidden="true">
      J<span className={styles.miniMarkStroke} />D
    </span>
  );
}

const links = [
  {
    title: "CV",
    subtitle: "Descargar PDF",
    href: profile.cvHref,
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
    subtitle: "Perfil profesional",
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

export default function LinksPage() {
  return (
    <div className={styles.page}>
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
            <span className={styles.flourish}>¡Hola! </span>
            Soy Joan, desarrollador fullstack.
          </p>
          <p>Te dejo mis links de contacto:</p>
        </div>

        <nav className={styles.links} aria-label="Redes y contacto">
          <ul>
            <li>
              <a
                className={styles.linkRow}
                href="/"
                target="_blank"
                rel="me noopener noreferrer"
              >
                <MonogramMark className={styles.tag} />
                <span className={styles.rowText}>
                  <span className={styles.rowTitle}>Portfolio</span>
                  <span className={styles.rowSub}>Experiencia Profesional</span>
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

        <p className={styles.meta}>Resistencia, Chaco · Argentina</p>
      </div>
    </div>
  );
}
