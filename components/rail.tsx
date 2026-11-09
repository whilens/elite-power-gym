"use client";

import { useRef } from "react";

export function Rail({
  label,
  children,
  className = "",
}: {
  label: string;
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const move = (dir: number) => {
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollBy({
      left: dir * Math.max(280, el.clientWidth * 0.72),
      behavior: reduce ? "auto" : "smooth",
    });
  };

  return (
    <div className={`rail-wrap ${className}`.trim()}>
      <button className="rail-btn prev" type="button" aria-label={`Назад: ${label}`} onClick={() => move(-1)}>
        ←
      </button>
      <div className="rail" ref={ref}>
        {children}
      </div>
      <button className="rail-btn next" type="button" aria-label={`Дальше: ${label}`} onClick={() => move(1)}>
        →
      </button>
    </div>
  );
}
