"use client";

import Image from "next/image";
import Link from "next/link";
import { Plus, Flame } from "lucide-react";
import { featuredDishes } from "@/lib/menu-data";
import { useCartStore } from "@/lib/cart-store";
import { Badge } from "@/components/ui/badge";

const spiceLabel = (level?: number) => {
  if (!level) return null;
  return "🌶".repeat(level);
};

export default function FeaturedDishes() {
  const addItem = useCartStore((s) => s.addItem);
  const openCart = useCartStore((s) => s.openCart);

  const handleAdd = (id: string, name: string, price: number) => {
    addItem({ id, name, price });
    openCart();
  };

  return (
    <section id="featured" className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <p className="text-gold text-xs font-body tracking-[0.2em] uppercase mb-2">
            Most Loved
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-maroon heading-underline-center">
            Featured Dishes
          </h2>
          <p className="text-ink-muted text-sm md:text-base mt-6 max-w-xl mx-auto">
            A selection of dishes our regulars come back for week after week.
          </p>
        </div>

        {/* Horizontal scroll on mobile, grid on desktop */}
        <div className="flex gap-5 overflow-x-auto pb-4 md:grid md:grid-cols-3 lg:grid-cols-5 md:overflow-visible snap-x snap-mandatory md:snap-none scrollbar-hide">
          {featuredDishes.map((dish) => (
            <div
              key={dish.id}
              className="group relative bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 min-w-[260px] md:min-w-0 snap-start flex-shrink-0 md:flex-shrink border border-cream-dark"
            >
              {/* Image container */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={dish.image}
                  alt={dish.name}
                  fill
                  sizes="(max-width: 768px) 260px, (max-width: 1200px) 33vw, 20vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Popular badge */}
                <div className="absolute top-3 left-3">
                  <span className="inline-flex items-center gap-1 bg-gold text-ink text-xs font-bold px-2 py-0.5 rounded-full">
                    <Flame size={10} />
                    Popular
                  </span>
                </div>
                {/* Spice level */}
                {dish.spiceLevel && (
                  <div className="absolute top-3 right-3 bg-ink/60 text-white text-xs px-2 py-0.5 rounded-full">
                    {spiceLabel(dish.spiceLevel)}
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="font-heading font-semibold text-ink text-base leading-snug mb-1">
                  {dish.name}
                </h3>
                {dish.urdu && (
                  <p className="text-gold-dark text-xs font-body mb-1.5 direction-rtl">
                    {dish.urdu}
                  </p>
                )}
                <p className="text-ink-muted text-xs line-clamp-2 mb-3 leading-relaxed">
                  {dish.description}
                </p>

                {/* Allergens */}
                <div className="flex flex-wrap gap-1 mb-3">
                  {dish.allergens.slice(0, 3).map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="text-[10px] px-1.5 py-0 bg-cream-dark text-ink-muted border-0"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Price + Add */}
                <div className="flex items-center justify-between">
                  <span className="font-heading text-lg font-bold text-maroon">
                    £{dish.price.toFixed(2)}
                  </span>
                  <button
                    onClick={() => handleAdd(dish.id, dish.name, dish.price)}
                    className="w-8 h-8 bg-maroon text-cream rounded-full flex items-center justify-center hover:bg-maroon-dark active:scale-95 transition-all"
                    aria-label={`Add ${dish.name} to order`}
                  >
                    <Plus size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View full menu CTA */}
        <div className="text-center mt-10">
          <Link
            href="/menu"
            className="inline-flex items-center gap-2 border-2 border-maroon text-maroon px-8 py-3 rounded-full text-sm font-semibold hover:bg-maroon hover:text-cream transition-all duration-200"
          >
            View Full Menu →
          </Link>
        </div>
      </div>
    </section>
  );
}
