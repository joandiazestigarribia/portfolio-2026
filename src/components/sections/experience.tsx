import type { Dictionary } from "@/i18n/dictionaries";
import { SectionHeading } from "@/components/ui/section-heading";
import { TagPill } from "@/components/ui/tag-pill";

function formatRange(
  start: string,
  end: string,
  months: string[],
  presentLabel: string
) {
  const label = (value: string) => {
    if (value === "present") return presentLabel;
    const [year, month] = value.split("-");
    return `${months[Number(month) - 1]} ${year}`;
  };
  return `${label(start)} — ${label(end)}`;
}

export function Experience({ dict }: { dict: Dictionary }) {
  const { heading, months, present, entries } = dict.experience;

  return (
    <section
      id="experience"
      className="scroll-mt-20 border-b border-rule px-6 py-24 md:px-24 md:py-32"
    >
      <div className="mx-auto max-w-4xl">
        <SectionHeading title={heading} />

        <ol className="flex flex-col gap-16">
          {entries.map((entry) => (
            <li
              key={entry.id}
              className="grid grid-cols-1 gap-3 md:grid-cols-[9rem_1fr] md:gap-16"
            >
              <p className="font-mono text-xs text-ink-tertiary md:pt-1">
                {formatRange(entry.startDate, entry.endDate, months, present)}
              </p>

              <div>
                <h3 className="font-display text-xl font-extrabold text-ink">
                  {entry.role}
                </h3>
                <p className="mt-1 font-mono text-sm text-accent">
                  {entry.company}
                  <span className="text-ink-tertiary"> · {entry.location}</span>
                </p>
                <ul className="mt-4 max-w-2xl space-y-2.5">
                  {entry.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="relative pl-5 leading-relaxed text-ink-secondary"
                    >
                      <span
                        aria-hidden="true"
                        className="absolute left-0 top-[0.7em] size-1 -translate-y-1/2 rounded-full bg-accent"
                      />
                      {highlight}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-wrap gap-2">
                  {entry.tags.map((tag) => (
                    <TagPill key={tag}>{tag}</TagPill>
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
