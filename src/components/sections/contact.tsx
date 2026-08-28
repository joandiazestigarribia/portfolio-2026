import { profile } from "@/data/profile";
import { SectionHeading } from "@/components/ui/section-heading";

export function Contact() {
  return (
    <section id="contacto" className="scroll-mt-20 px-6 py-24 md:px-24 md:pt-32 pb-75">
      <div className="mx-auto max-w-4xl">
        <SectionHeading title="Contacto" />

        <h2 className="max-w-xl font-display text-3xl font-extrabold leading-tight text-ink md:text-4xl">
          ¿Hablamos?
        </h2>
        <p className="mt-3 max-w-xl text-lg text-ink-secondary">
          Si tenés una idea, un proyecto o querés charlar de código, escribime.
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
