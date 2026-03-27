"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

const SELECTOR = "main section";

export default function ScrollRevealInit() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") return;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    const nodes = Array.from(document.querySelectorAll(SELECTOR));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("reveal-visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.06, rootMargin: "0px 0px -8% 0px" }
    );

    nodes.forEach((el) => {
      if (!el.classList.contains("reveal-scroll-init")) {
        el.classList.add("reveal-scroll-init");
      }
      observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, [pathname]);

  return null;
}
