export function Footer() {
  return (
    <footer className="pb-10">
      <div className="site-container flex flex-col items-center gap-4 border-t border-border pt-8 text-center text-[11px] uppercase text-muted-foreground">
        <p>© {new Date().getFullYear()} Robert Blazevic — Video Editor</p>
      </div>
    </footer>
  );
}
