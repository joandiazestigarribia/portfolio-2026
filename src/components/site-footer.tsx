import { profile } from "@/data/profile";
import { socialLinks } from "@/data/social-links";
import type { Locale } from "@/i18n/config";
import { LinkIcon } from "@/components/icons/link-icon";

export function SiteFooter({ locale }: { locale: Locale }) {
  const linksHref = locale === "es" ? "/links" : "/en/links";

  return (
    <footer className="border-t border-rule px-6 py-10 md:px-24">
      <div className="mx-auto flex max-w-4xl flex-col-reverse items-center gap-6 md:flex-row md:justify-between">
        <p className="font-mono text-xs text-ink-tertiary">
          © {new Date().getFullYear()} {profile.name}
        </p>

        <div className="flex items-center gap-5">
          {socialLinks.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer me"
              aria-label={label}
              className="p-2 text-ink-tertiary transition-colors hover:text-accent md:p-0"
            >
              <Icon className="size-4" />
            </a>
          ))}
          <a
            href={linksHref}
            aria-label="Linktree"
            className="text-ink-tertiary transition-colors hover:text-accent"
          >
            <LinkIcon className="size-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
