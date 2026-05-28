export function Footer() {
  return (
    <footer className="border-t border-border/40 px-6 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-xs text-muted-foreground sm:flex-row">
        <p>© {new Date().getFullYear()} Robert — Video Editor. All rights reserved.</p>
        <p>Crafted in the dark, exported in 4K.</p>
      </div>
    </footer>
  );
}