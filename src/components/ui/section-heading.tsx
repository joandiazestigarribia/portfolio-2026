export function SectionHeading({ title }: { title: string }) {
  return (
    <div className="mb-10 flex items-center gap-3">
      <span className="h-4 w-[3px] rounded-full bg-accent" aria-hidden="true" />
      <span className="font-mono text-sm uppercase tracking-widest text-ink-tertiary">
        {title}
      </span>
    </div>
  );
}
