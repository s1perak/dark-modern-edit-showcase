export function Footer() {
  return (
    <footer className="px-6 pb-10">
      <div className="mx-auto flex max-w-[84rem] flex-col items-center gap-4 border-t border-border/60 pt-8 text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
        <p>© {new Date().getFullYear()} Robert Blazevic — Video Editor</p>
      </div>
    </footer>
  );
}
