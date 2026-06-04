import { useEffect } from "react";

/**
 * Adds a subtle fade-up animation to major page blocks as they enter the viewport.
 * Auto-targets direct children of section containers + footer children, so individual
 * section components don't need to be modified.
 */
export function useScrollReveal() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const selector = [
      'section[id]:not(#top) > div > *',
      'section[id]:not(#top) > div',
      'footer > *',
      '[data-reveal]',
    ].join(', ');

    const observed = new WeakSet<Element>();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
    );

    const attach = () => {
      const nodes = document.querySelectorAll<HTMLElement>(selector);
      nodes.forEach((el, i) => {
        if (observed.has(el)) return;
        observed.add(el);
        el.classList.add('reveal');
        // Light stagger for sibling groups
        el.style.transitionDelay = `${Math.min(i % 6, 5) * 80}ms`;
        observer.observe(el);
      });
    };

    attach();

    // Re-scan when new content mounts (e.g. after loading screen)
    const mo = new MutationObserver(() => attach());
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      mo.disconnect();
      observer.disconnect();
    };
  }, []);
}