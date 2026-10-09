import type { Dictionary } from "@/i18n/dictionaries";
import { SectionHeading } from "@/components/ui/section-heading";
import { HighlightedText } from "@/components/ui/highlighted-text";

export function Quotes({ dict }: { dict: Dictionary }) {
  const { heading, entries } = dict.quotes;

  return (
    <section
      id="recommendations"
      className="scroll-mt-20 border-b border-rule px-6 py-24 md:px-24 md:py-32"
    >
      <div className="mx-auto max-w-4xl">
        <SectionHeading title={heading} />

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-8">
          {entries.map(({ id, quote, name, role }) => (
            <figure key={id}>
              <blockquote className="max-w-2xl leading-snug text-ink font-light">
                “<HighlightedText text={quote} />”
              </blockquote>
              <figcaption className="mt-4 font-mono text-xs text-ink-tertiary">
                {name} <span className="text-accent">·</span> {role}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
