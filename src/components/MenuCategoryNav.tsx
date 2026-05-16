"use client";

import { useEffect, useState } from "react";
import { menuCategories } from "@/lib/menu-data";
import { cn } from "@/lib/utils";

export default function MenuCategoryNav() {
  const [active, setActive] = useState<string>(menuCategories[0].id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    menuCategories.forEach((cat) => {
      const el = document.getElementById(cat.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -120;
      const y = el.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div className="sticky top-16 md:top-20 z-40 bg-cream/95 backdrop-blur-sm border-b border-cream-dark">
      <div className="max-w-7xl mx-auto px-4">
        <nav className="flex gap-1 overflow-x-auto scrollbar-hide py-3">
          {menuCategories.map((cat) => (
            <a
              key={cat.id}
              href={`#${cat.id}`}
              onClick={(e) => handleClick(e, cat.id)}
              className={cn(
                "shrink-0 px-4 py-2 text-sm font-medium rounded-full transition-all whitespace-nowrap",
                active === cat.id
                  ? "bg-maroon text-cream"
                  : "bg-transparent text-ink-muted hover:bg-cream-dark hover:text-ink"
              )}
            >
              {cat.name}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
}
