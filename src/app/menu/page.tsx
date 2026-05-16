import type { Metadata } from "next";
import { menuCategories, ALLERGEN_LABELS } from "@/lib/menu-data";
import MenuCategoryNav from "@/components/MenuCategoryNav";
import MenuItemCard from "@/components/MenuItemCard";

export const metadata: Metadata = {
  title: "Menu — Authentic Pakistani Dishes",
  description:
    "Browse our full Pakistani menu — Nihari, Karahi, Biryani, Haleem, Seekh Kebab, Gulab Jamun and more. All halal, made fresh daily on Wilmslow Road.",
};

export default function MenuPage() {
  return (
    <main className="flex-1 bg-cream pb-24 md:pb-12">
      {/* Page hero */}
      <section className="relative pt-28 md:pt-32 pb-12 bg-maroon text-cream">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_30%_50%,rgba(201,169,97,0.4),transparent_50%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gold text-xs font-body tracking-[0.25em] uppercase mb-3">
            Our Menu
          </p>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-cream leading-tight mb-4">
            From Karachi, with love
          </h1>
          <p className="text-cream/70 text-base md:text-lg max-w-2xl mx-auto">
            Every dish is cooked from scratch using recipes our family has
            served for generations. Spices ground daily, meat from trusted halal
            butchers, vegetables from Rusholme market.
          </p>
        </div>
      </section>

      {/* Sticky category nav */}
      <MenuCategoryNav />

      {/* Allergen legend */}
      <section className="bg-cream-dark/40 border-b border-cream-dark py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-ink-muted">
            <span className="font-semibold uppercase tracking-wider text-ink">
              Allergens
            </span>
            {Object.entries(ALLERGEN_LABELS).map(([tag, label]) => (
              <span key={tag} className="flex items-center gap-1.5">
                <span className="font-bold border border-cream-dark bg-cream px-1.5 py-0.5 rounded text-[10px]">
                  {tag}
                </span>
                {label}
              </span>
            ))}
            <span className="flex items-center gap-1.5">
              <span>🌶</span>Mild
              <span className="ml-2">🌶🌶</span>Medium
              <span className="ml-2">🌶🌶🌶</span>Hot
            </span>
          </div>
        </div>
      </section>

      {/* Menu sections */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 space-y-16">
        {menuCategories.map((category) => (
          <section
            key={category.id}
            id={category.id}
            className="scroll-mt-32 md:scroll-mt-36"
          >
            <header className="mb-8 text-center">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-maroon heading-underline-center mb-3">
                {category.name}
              </h2>
              <p className="text-ink-muted text-sm md:text-base max-w-xl mx-auto mt-4">
                {category.description}
              </p>
            </header>

            <div className="bg-card rounded-2xl border border-cream-dark px-4 sm:px-6">
              {category.items.map((item) => (
                <MenuItemCard key={item.id} item={item} />
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* Bottom note */}
      <section className="max-w-3xl mx-auto px-4 pb-12 text-center">
        <p className="text-xs text-ink-muted/70 leading-relaxed">
          Please inform a member of our team if you have any allergies or
          dietary requirements before ordering. Some dishes may contain trace
          amounts of allergens not listed. All meat is halal certified. Prices
          include VAT.
        </p>
      </section>
    </main>
  );
}
