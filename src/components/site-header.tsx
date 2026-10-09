"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import type { Dictionary } from "@/i18n/dictionaries";

type NavDictionary = Dictionary["nav"];

function NavItem({
  id,
  label,
  isActive,
  onNavigate,
  className,
}: {
  id: string;
  label: string;
  isActive: boolean;
  onNavigate?: () => void;
  className?: string;
}) {
  function handleClick(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();
    onNavigate?.();
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      history.pushState(null, "", `#${id}`);
    }, 0);
  }

  return (
    <li>
      <a
        href={`#${id}`}
        onClick={handleClick}
        aria-current={isActive ? "location" : undefined}
        className={`flex items-center gap-2 transition-colors ${
          isActive ? "text-accent" : "text-ink-tertiary hover:text-ink"
        } ${className ?? ""}`}
      >
        <span
          aria-hidden="true"
          className={`h-1.5 w-1.5 rounded-full bg-accent transition-opacity ${
            isActive ? "opacity-100" : "opacity-0"
          }`}
        />
        {label}
      </a>
    </li>
  );
}

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      aria-hidden="true"
      className="size-5"
    >
      {open ? (
        <>
          <line x1="6" y1="6" x2="18" y2="18" />
          <line x1="18" y1="6" x2="6" y2="18" />
        </>
      ) : (
        <>
          <line x1="4" y1="7" x2="20" y2="7" />
          <line x1="4" y1="12" x2="20" y2="12" />
          <line x1="4" y1="17" x2="20" y2="17" />
        </>
      )}
    </svg>
  );
}

export function SiteHeader({
  nav,
  otherLocaleHref,
}: {
  nav: NavDictionary;
  otherLocaleHref: string;
}) {
  const router = useRouter();
  const [activeId, setActiveId] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const sections = nav.sections;

  function handleLocaleClick(e: React.MouseEvent<HTMLAnchorElement>) {
    const hash = window.location.hash;
    if (!hash) return;
    e.preventDefault();
    router.push(`${otherLocaleHref}${hash}`);
  }

  useEffect(() => {
    const elements = sections
      .map(({ id }) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    let ticking = false;

    function updateActive() {
      ticking = false;
      const referenceLine = window.innerHeight * 0.25;
      let current: string | null = null;
      for (const el of elements) {
        if (el.getBoundingClientRect().top <= referenceLine) {
          current = el.id;
        }
      }
      if (current) setActiveId(current);
    }

    function onScroll() {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(updateActive);
      }
    }

    updateActive();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [sections]);

  useEffect(() => {
    if (!isMenuOpen) return;
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setIsMenuOpen(false);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isMenuOpen]);

  return (
    <header className="sticky top-0 z-10 border-b border-rule bg-paper/90 backdrop-blur">
      <div className="mx-auto flex max-w-4xl items-center justify-between gap-4 py-4 px-6 md:px-0">
        <a
          href="#home"
          aria-label={nav.backToTop}
          className="flex h-9 w-9 shrink-0 items-center justify-center gap-0.5 rounded-lg border border-rule bg-surface-2 font-display text-xs font-extrabold text-ink"
        >
          <span>J</span>
          <span className="h-2.5 w-[2px] rounded-full bg-accent" />
          <span>D</span>
        </a>

        <div className="flex items-center gap-4">
          <nav aria-label={nav.ariaLabel} className="hidden md:block">
            <ul className="flex items-center gap-4 font-mono text-sm md:gap-6">
              {sections.map(({ id, label }) => (
                <NavItem
                  key={id}
                  id={id}
                  label={label}
                  isActive={activeId === id}
                />
              ))}
            </ul>
          </nav>

          <Link
            href={otherLocaleHref}
            onClick={handleLocaleClick}
            aria-label={nav.switchLanguage.ariaLabel}
            className="flex h-9 items-center justify-center rounded-full border border-rule px-3 font-mono text-xs text-ink-tertiary transition-colors hover:border-accent hover:text-accent"
          >
            {nav.switchLanguage.label}
          </Link>

          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-nav"
            aria-label={isMenuOpen ? nav.closeMenu : nav.openMenu}
            className="flex h-9 w-9 shrink-0 items-center justify-center text-ink-tertiary transition-colors hover:text-ink md:hidden"
          >
            <MenuIcon open={isMenuOpen} />
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <nav
          aria-label={nav.ariaLabel}
          id="mobile-nav"
          className="absolute inset-x-0 top-full border-t border-rule bg-paper/95 backdrop-blur md:hidden"
        >
          <ul className="flex flex-col font-mono text-sm">
            {sections.map(({ id, label }) => (
              <NavItem
                key={id}
                id={id}
                label={label}
                isActive={activeId === id}
                onNavigate={() => setIsMenuOpen(false)}
                className="px-6 py-3"
              />
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
