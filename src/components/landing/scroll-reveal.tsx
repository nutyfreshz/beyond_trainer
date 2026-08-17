"use client";
import { useEffect } from "react";

/**
 * ScrollReveal — IntersectionObserver client component.
 * Observes all elements with .fade-up, .fade-in, .slide-in-left, .scale-in classes
 * and adds .is-visible when they enter the viewport.
 */
export function ScrollReveal() {
  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const selectors = ".fade-up, .fade-in, .slide-in-left, .scale-in";
    const els = document.querySelectorAll(selectors);

    if (reduceMotion) {
      els.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            obs.unobserve(entry.target);
          }
        });
      },
      { root: null, rootMargin: "0px 0px -6% 0px", threshold: 0.1 }
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return null;
}
