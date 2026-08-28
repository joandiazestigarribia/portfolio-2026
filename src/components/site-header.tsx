"use client";

import { useEffect, useState } from "react";

const sections = [
  { id: "inicio", label: "Inicio" },
  { id: "experiencia", label: "Experiencia" },
  { id: "sobre-mi", label: "Sobre mí" },
  { id: "contacto", label: "Contacto" },
];

export function SiteHeader() {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const visibleIds = new Set<string>();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            visibleIds.add(entry.target.id);
          } else {
            visibleIds.delete(entry.target.id);
          }
        }

        const current = sections.find(({ id }) => visibleIds.has(id));
        if (current) {
          setActiveId(current.id);
        }
      },
      { rootMargin: "-15% 0px -60% 0px", threshold: 0 }
    );

    for (const { id } of sections) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-10 border-b border-rule bg-paper/90 backdrop-blur">
      <div className="mx-auto flex max-w-4xl items-center justify-between py-4">
        <a
          href="#inicio"
          aria-label="Volver arriba"
          className="flex h-9 w-9 shrink-0 items-center justify-center gap-0.5 rounded-lg border border-rule bg-surface-2 font-display text-xs font-extrabold text-ink"
        >
          <span>J</span>
          <span className="h-2.5 w-[2px] rounded-full bg-accent" />
          <span>D</span>
        </a>

        <nav aria-label="Secciones">
          <ul className="flex items-center gap-4 font-mono text-sm md:gap-6">
            {sections.map(({ id, label }) => {
              const isActive = activeId === id;
              return (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    aria-current={isActive ? "location" : undefined}
                    className={`flex items-center gap-2 transition-colors ${
                      isActive ? "text-accent" : "text-ink-tertiary hover:text-ink"
                    }`}
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
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
