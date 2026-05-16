"use client";

import Image from "next/image";
import { Plus, Check } from "lucide-react";
import { useState } from "react";
import type { MenuItem } from "@/lib/menu-data";
import { ALLERGEN_LABELS } from "@/lib/menu-data";
import { useCartStore } from "@/lib/cart-store";
import { cn } from "@/lib/utils";

const spiceLabel = (level?: number) => {
  if (!level) return null;
  return "🌶".repeat(level);
};

export default function MenuItemCard({ item }: { item: MenuItem }) {
  const addItem = useCartStore((s) => s.addItem);
  const [added, setAdded] = useState(false);
  const [hovered, setHovered] = useState(false);

  const handleAdd = () => {
    addItem({ id: item.id, name: item.name, price: item.price });
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative flex gap-4 py-5 border-b border-cream-dark last:border-0 hover:bg-cream-dark/30 -mx-3 px-3 rounded-lg transition-colors"
    >
      {/* Thumbnail (mobile + desktop) */}
      <div className="relative w-24 h-24 sm:w-28 sm:h-28 shrink-0 rounded-lg overflow-hidden bg-cream-dark">
        <Image
          src={item.image}
          alt={item.name}
          fill
          sizes="(max-width: 640px) 96px, 112px"
          className="object-cover"
        />
        {item.popular && (
          <span className="absolute top-1.5 left-1.5 bg-gold text-ink text-[9px] font-bold px-1.5 py-0.5 rounded-full uppercase tracking-wide">
            Popular
          </span>
        )}
      </div>

      {/* Hover preview (desktop) */}
      {hovered && (
        <div className="hidden lg:block absolute left-32 top-0 z-30 w-72 h-72 rounded-2xl overflow-hidden shadow-2xl border-4 border-cream pointer-events-none animate-in fade-in zoom-in-95 duration-200">
          <Image
            src={item.image}
            alt={item.name}
            fill
            sizes="288px"
            className="object-cover"
          />
        </div>
      )}

      {/* Content */}
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-3 mb-1">
          <div className="min-w-0">
            <h3 className="font-heading font-semibold text-ink text-base sm:text-lg leading-tight">
              {item.name}
              {item.spiceLevel && (
                <span className="ml-2 text-xs align-middle">
                  {spiceLabel(item.spiceLevel)}
                </span>
              )}
            </h3>
            {item.urdu && (
              <p className="text-gold-dark text-sm font-body mt-0.5">
                {item.urdu}
              </p>
            )}
          </div>
          <span className="font-heading text-lg font-bold text-maroon shrink-0">
            £{item.price.toFixed(2)}
          </span>
        </div>

        <p className="text-ink-muted text-sm leading-relaxed mb-3 line-clamp-3">
          {item.description}
        </p>

        <div className="flex items-center justify-between gap-3 flex-wrap">
          {/* Allergens */}
          <div className="flex flex-wrap gap-1.5">
            {item.allergens.map((tag) => (
              <span
                key={tag}
                title={ALLERGEN_LABELS[tag]}
                className={cn(
                  "text-[10px] font-bold px-1.5 py-0.5 rounded border",
                  tag === "V" || tag === "VG"
                    ? "border-green-700/30 text-green-700 bg-green-50"
                    : tag === "GF"
                    ? "border-blue-700/30 text-blue-700 bg-blue-50"
                    : "border-cream-dark text-ink-muted bg-cream"
                )}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Add button */}
          <button
            onClick={handleAdd}
            className={cn(
              "flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full transition-all",
              added
                ? "bg-green-700 text-cream"
                : "bg-maroon text-cream hover:bg-maroon-dark active:scale-95"
            )}
          >
            {added ? (
              <>
                <Check size={14} /> Added
              </>
            ) : (
              <>
                <Plus size={14} /> Add to Order
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
