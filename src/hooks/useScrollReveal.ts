import { useEffect } from "react";

/** Animate individual content, never gallery columns or modal containers. */
export function useScrollReveal() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (motionPreference.matches) return;

    const targets = [
      'section:not(#top) .eyebrow',
      'section:not(#top) h2',
      '#work .site-container > div:first-child > p',
      '#about .lg\\:col-span-8 > p',
      '#about .lg\\:col-span-8 > div:last-child',
      '.mosaic-item',
      '.service-item',
      '#contact .site-container > div > p:not(.eyebrow)',
      '#contact .contact-link',
      'footer > *',
      '[data-reveal]',
    ].join(',');

    const observed = new WeakSet<Element>();
    const registered = new Set<HTMLElement>();
    const reveal = (element: HTMLElement) => {
      element.classList.add('in-view');
      observer.unobserve(element);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        const entering = entries.filter((entry) => entry.isIntersecting);
        entering.sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top || a.boundingClientRect.left - b.boundingClientRect.left);
        entering.forEach((entry, index) => {
          const element = entry.target as HTMLElement;
          // Stagger only content entering together, not off-screen siblings.
          element.style.setProperty('--reveal-delay', `${Math.min(index, 4) * 75}ms`);
          reveal(element);
        });
        for (const entry of entries) {
          // Never hide content skipped by a fast scroll or anchor navigation.
          if (!entry.isIntersecting && entry.boundingClientRect.bottom < 0) {
            reveal(entry.target as HTMLElement);
          }
        }
      },
      { threshold: 0, rootMargin: '0px 0px -40px 0px' }
    );

    const attach = () => {
      document.querySelectorAll<HTMLElement>(targets).forEach((element) => {
        if (observed.has(element) || element.closest('[role="dialog"]')) return;
        // Do not stack transforms on explicitly animated parents and children.
        if (element.parentElement?.closest('.reveal, [data-reveal]')) return;
        observed.add(element);
        registered.add(element);
        element.dataset.revealKind = element.matches('.mosaic-item')
          ? 'media'
          : element.matches('h2') ? 'heading' : 'content';
        element.classList.add('reveal');
        observer.observe(element);
      });
    };

    attach();

    const mo = new MutationObserver(() => attach());
    mo.observe(document.body, { childList: true, subtree: true });
    const onFocus = (event: FocusEvent) => {
      if (!(event.target instanceof Element)) return;
      const element = event.target.closest<HTMLElement>('.reveal');
      if (!element) return;
      element.style.setProperty('--reveal-delay', '0ms');
      reveal(element);
    };
    const onMotionChange = () => {
      if (motionPreference.matches) registered.forEach(reveal);
    };
    document.addEventListener('focusin', onFocus);
    motionPreference.addEventListener('change', onMotionChange);

    return () => {
      mo.disconnect();
      observer.disconnect();
      document.removeEventListener('focusin', onFocus);
      motionPreference.removeEventListener('change', onMotionChange);
      registered.forEach((element) => {
        element.classList.remove('reveal', 'in-view');
        element.style.removeProperty('--reveal-delay');
        delete element.dataset.revealKind;
      });
    };
  }, []);
}