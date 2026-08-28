export function TagPill({ children }: { children: string }) {
  return (
    <span className="rounded-full border border-rule px-3 py-1 font-mono text-xs text-ink-secondary">
      {children}
    </span>
  );
}
