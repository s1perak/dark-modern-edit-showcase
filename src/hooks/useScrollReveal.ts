import { useEffect } from "react";

/**
 * Clean, consistent scroll-reveal across the page.
 *
 * Strategy:
 * - Target a curated set of meaningful content blocks (section headers, cards,
 *   list items, footer rows) instead of every descendant.
 * - Apply a consistent fade-up with a small per-group stagger so siblings
 *   animate in sequence rather than all at once.
 */
export function useScrollReveal() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // Selectors for the elements we want to reveal. Kept intentionally tight
    // so animations feel consistent rather than chaotic.
    const groupSelectors = [
      // Section intro blocks (eyebrow + heading + copy wrapper)
      'section[id]:not(#top) > div',
      // Cards / list items inside grids
      'section[id] [class*="grid"] > *',
      // Contact link rows
      'section#contact a',
      // Footer content
      'footer > *',
      // Manual opt-in
      '[data-reveal]',
    ];

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
      { threshold: 0.15, rootMargin: '0px 0px -10% 0px' }
    );

    const attach = () => {
      groupSelectors.forEach((sel) => {
        const nodes = document.querySelectorAll<HTMLElement>(sel);
        // Group siblings by parent so stagger is consistent within a group.
        const byParent = new Map<Element, HTMLElement[]>();
        nodes.forEach((el) => {
          if (observed.has(el)) return;
          const parent = el.parentElement;
          if (!parent) return;
          if (!byParent.has(parent)) byParent.set(parent, []);
          byParent.get(parent)!.push(el);
        });

        byParent.forEach((siblings) => {
          siblings.forEach((el, i) => {
            observed.add(el);
            el.classList.add('reveal');
            el.style.transitionDelay = `${Math.min(i, 5) * 90}ms`;
            observer.observe(el);
          });
        });
      });
    };

    attach();

    // Re-scan when new content mounts (e.g. after the loading screen hides).
    const mo = new MutationObserver(() => attach());
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      mo.disconnect();
      observer.disconnect();
    };
  }, []);
}