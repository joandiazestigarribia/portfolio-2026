import { profile } from "@/data/profile";
import { socialLinks } from "@/data/social-links";

export function Hero() {
  return (
    <section
      id="inicio"
      className="scroll-mt-20 border-b border-rule px-6 py-32 md:px-24 md:py-36"
    >
      <div className="mx-auto max-w-4xl">
        <p
          className="animate-rise-in font-mono text-sm text-ink-tertiary"
          style={{ animationDelay: "0ms" }}
        >
          {profile.role} · {profile.location}
        </p>

        <h1
          className="animate-rise-in mt-3 font-display text-display font-extrabold leading-[0.95] tracking-tight text-ink"
          style={{ animationDelay: "80ms" }}
        >
          Joan Diaz
          <br />
          Estigarribia
        </h1>

        <p
          className="animate-rise-in mt-10 max-w-3xl text-lg text-ink-secondary md:text-xl font-light"
          style={{ animationDelay: "160ms" }}
        >
          {profile.thesis}
        </p>

        <div
          className="animate-rise-in mt-16 flex flex-wrap items-center gap-6"
          style={{ animationDelay: "240ms" }}
        >
          <a
            href="#contacto"
            className="cta-glow rounded-full bg-accent px-10 py-2 font-mono text-sm text-paper"
          >
            Contacto →
          </a>
          <a
            href={profile.cvHref}
            download
            className="rounded-full border border-rule-strong px-10 py-2 font-mono text-sm text-ink transition-colors hover:border-accent hover:text-accent"
          >
            CV ↓
          </a>

          <div className="flex items-center gap-4 border-l border-rule pl-6">
            {socialLinks.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer me"
                aria-label={label}
                className="text-ink-tertiary transition-colors hover:text-accent"
              >
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
