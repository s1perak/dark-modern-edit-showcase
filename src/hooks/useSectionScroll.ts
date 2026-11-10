import { useEffect } from "react";

/** Ease same-page navigation without changing normal wheel or touch scrolling. */
export function useSectionScroll() {
  useEffect(() => {
    let frame = 0;
    let previousBehavior: string | undefined;
    const root = document.documentElement;
    const cancel = () => {
      cancelAnimationFrame(frame);
      if (previousBehavior !== undefined) {
        root.style.scrollBehavior = previousBehavior;
        previousBehavior = undefined;
      }
    };
    const onClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const anchor = event.target instanceof Element ? event.target.closest<HTMLAnchorElement>('a[href^="#"]') : null;
      if (!anchor || anchor.target === "_blank" || anchor.hasAttribute("download")) return;
      const target = document.getElementById(anchor.hash.slice(1));
      if (!target) return;
      event.preventDefault();
      cancel();
      const start = window.scrollY;
      const margin = parseFloat(getComputedStyle(target).scrollMarginTop) || 0;
      const end = Math.max(0, Math.min(start + target.getBoundingClientRect().top - margin, root.scrollHeight - window.innerHeight));
      history.pushState(null, "", anchor.hash);
      previousBehavior = root.style.scrollBehavior;
      root.style.scrollBehavior = "auto";
      const finish = () => {
        cancel();
        const tabindex = target.getAttribute("tabindex");
        if (tabindex === null) target.setAttribute("tabindex", "-1");
        target.focus({ preventScroll: true });
        if (tabindex === null) target.removeAttribute("tabindex");
      };
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        window.scrollTo(0, end);
        finish();
        return;
      }
      const duration = Math.min(1700, 1100 + Math.abs(end - start) * 0.12);
      const began = performance.now();
      const animate = (now: number) => {
        const progress = Math.min(1, (now - began) / duration);
        const eased = progress * progress * progress * (progress * (progress * 6 - 15) + 10);
        window.scrollTo(0, start + (end - start) * eased);
        if (progress < 1) frame = requestAnimationFrame(animate);
        else finish();
      };
      frame = requestAnimationFrame(animate);
    };
    const onKey = (event: KeyboardEvent) => {
      if (["ArrowDown", "ArrowUp", "PageDown", "PageUp", "Home", "End", " ", "Escape"].includes(event.key)) cancel();
    };
    document.addEventListener("click", onClick);
    window.addEventListener("wheel", cancel, { passive: true });
    window.addEventListener("touchstart", cancel, { passive: true });
    window.addEventListener("keydown", onKey);
    return () => {
      cancel();
      document.removeEventListener("click", onClick);
      window.removeEventListener("wheel", cancel);
      window.removeEventListener("touchstart", cancel);
      window.removeEventListener("keydown", onKey);
    };
  }, []);
}