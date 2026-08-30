import { profile } from "@/data/profile";
import { SectionHeading } from "@/components/ui/section-heading";
import { HighlightedText } from "@/components/ui/highlighted-text";

export function About() {
  return (
    <section
      id="sobre-mi"
      className="scroll-mt-20 border-b border-rule px-6 py-24 md:px-24 md:py-32"
    >
      <div className="mx-auto max-w-4xl">
        <SectionHeading title="Sobre mí" />

        <p className="font-accent text-2xl italic text-ink">Un poco de contexto.</p>

        <div className="mt-6 space-y-6">
          {profile.aboutParagraphs.map((paragraph, i) => (
            <p key={i} className="text-lg text-ink-secondary font-light">
              <HighlightedText text={paragraph} />
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
