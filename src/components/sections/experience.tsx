import { experience } from "@/data/experience";
import { SectionHeading } from "@/components/ui/section-heading";
import { TagPill } from "@/components/ui/tag-pill";

function formatRange(start: string, end: string) {
  const label = (value: string) => {
    if (value === "present") return "hoy";
    const [year, month] = value.split("-");
    const months = [
      "ene", "feb", "mar", "abr", "may", "jun",
      "jul", "ago", "sep", "oct", "nov", "dic",
    ];
    return `${months[Number(month) - 1]} ${year}`;
  };
  return `${label(start)} — ${label(end)}`;
}

export function Experience() {
  return (
    <section
      id="experiencia"
      className="scroll-mt-20 border-b border-rule px-6 py-24 md:px-24 md:py-32"
    >
      <div className="mx-auto max-w-4xl">
        <SectionHeading title="Experiencia" />

        <ol className="flex flex-col gap-16">
          {experience.map((entry) => (
            <li
              key={entry.id}
              className="grid grid-cols-1 gap-3 md:grid-cols-[8rem_1fr] md:gap-16"
            >
              <p className="font-mono text-xs text-ink-tertiary md:pt-1">
                {formatRange(entry.startDate, entry.endDate)}
              </p>

              <div>
                <h3 className="font-display text-xl font-extrabold text-ink">
                  {entry.role}
                </h3>
                <p className="mt-1 font-mono text-sm text-accent">{entry.company}</p>
                <p className="mt-3 max-w-2xl text-ink-secondary">{entry.summary}</p>
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
