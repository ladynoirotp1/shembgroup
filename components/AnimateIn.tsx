"use client";

import { useEffect, useRef, type ReactNode } from "react";

type AnimateInProps = {
  children: ReactNode;
  className?: string;
  stagger?: boolean;
  rootMargin?: string;
  threshold?: number;
};

export function AnimateIn({
  children,
  className = "",
  stagger = false,
  rootMargin = "0px 0px -5% 0px",
  threshold = 0,
}: AnimateInProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (stagger) {
            const items = el.querySelectorAll(".animate-in-view");
            if (entry.isIntersecting) {
              items.forEach((item, i) => {
                item.classList.add("is-visible");
                item.classList.add(`stagger-${Math.min(i + 1, 6)}`);
              });
            } else {
              items.forEach((item) => {
                item.classList.remove("is-visible");
                item.classList.remove("stagger-1", "stagger-2", "stagger-3", "stagger-4", "stagger-5", "stagger-6");
              });
            }
          } else {
            const target = el.querySelector(".animate-in-view");
            if (target) {
              if (entry.isIntersecting) {
                target.classList.add("is-visible");
              } else {
                target.classList.remove("is-visible");
              }
            }
          }
        });
      },
      { rootMargin, threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [stagger, rootMargin, threshold]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

type AnimateInSectionProps = {
  children: ReactNode;
  className?: string;
};

export function AnimateInSection({ children, className = "" }: AnimateInSectionProps) {
  return (
    <AnimateIn className={className}>
      <div className="animate-in-view">{children}</div>
    </AnimateIn>
  );
}
