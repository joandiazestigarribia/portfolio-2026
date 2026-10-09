import { profile } from "@/data/profile";
import type { Dictionary } from "@/i18n/dictionaries";
import { SectionHeading } from "@/components/ui/section-heading";

export function Contact({ dict }: { dict: Dictionary }) {
  const { heading, title, body } = dict.contact;

  return (
    <section
      id="contact"
      className="scroll-mt-20 px-6 py-24 md:px-24 md:pt-32 pb-35 2xl:pb-55"
    >
      <div className="mx-auto max-w-4xl">
        <SectionHeading title={heading} />

        <h2 className="max-w-xl font-display text-3xl font-extrabold leading-tight text-ink md:text-4xl">
          {title}
        </h2>
        <p className="mt-3 max-w-xl text-lg text-ink-secondary font-light">
          {body}
        </p>

        <a
          href={`mailto:${profile.email}`}
          className="mt-10 inline-block font-mono text-lg text-accent underline decoration-rule-strong underline-offset-4 transition-colors hover:text-ink"
        >
          {profile.email}
        </a>
      </div>
    </section>
  );
}
