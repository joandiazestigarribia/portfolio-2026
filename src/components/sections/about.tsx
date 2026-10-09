import type { Dictionary } from "@/i18n/dictionaries";
import { SectionHeading } from "@/components/ui/section-heading";
import { HighlightedText } from "@/components/ui/highlighted-text";

export function About({ dict }: { dict: Dictionary }) {
  const { heading, intro, paragraphs } = dict.profile.about;

  return (
    <section
      id="about"
      className="scroll-mt-20 border-b border-rule px-6 py-24 md:px-24 md:py-32"
    >
      <div className="mx-auto max-w-4xl">
        <SectionHeading title={heading} />

        <p className="font-accent text-2xl italic text-ink">{intro}</p>

        <div className="mt-6 space-y-6">
          {paragraphs.map((paragraph, i) => (
            <p key={i} className="text-lg text-ink-secondary font-light">
              <HighlightedText text={paragraph} />
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
