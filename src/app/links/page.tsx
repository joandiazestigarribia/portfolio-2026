import type { Metadata } from "next";
import { profile } from "@/data/profile";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Links",
  description: `Enlaces de contacto de ${profile.name}.`,
};

const links = [
  {
    tag: "PF",
    title: "Portfolio",
    subtitle: "Experiencia Profesional",
    href: "/",
  },
  {
    tag: "GH",
    title: "GitHub",
    subtitle: "@joandiazestigarribia",
    href: profile.social.github,
  },
  {
    tag: "IN",
    title: "LinkedIn",
    subtitle: "Perfil profesional",
    href: profile.social.linkedin,
  },
  {
    tag: "X",
    title: "X",
    subtitle: "@joandefined",
    href: profile.social.x,
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
          <span className={styles.status}>
            <span className={styles.dot} />
            {"// escribiendo código"}
          </span>
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
            {links.map(({ tag, title, subtitle, href }) => (
              <li key={tag}>
                <a
                  className={styles.linkRow}
                  href={href}
                  target="_blank"
                  rel="me noopener noreferrer"
                >
                  <span className={styles.tag}>{tag}</span>
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
