export function Footer() {
  return (
    <footer className="border-t border-border/40 px-6 py-10">
      <div className="mx-auto flex max-w-7xl items-center justify-center text-xs text-muted-foreground">
        <p>© {new Date().getFullYear()} Robert — Video Editor. All rights reserved.</p>
      </div>
    </footer>
  );
}