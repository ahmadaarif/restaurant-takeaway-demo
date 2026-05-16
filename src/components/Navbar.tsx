"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X, ShoppingBag, Phone } from "lucide-react";
import { useCartStore } from "@/lib/cart-store";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/order", label: "Order Online" },
  { href: "/book", label: "Book a Table" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const itemCount = useCartStore((s) => s.itemCount());
  const openCart = useCartStore((s) => s.openCart);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isHome = pathname === "/";

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled || !isHome
            ? "bg-cream shadow-sm border-b border-cream-dark"
            : "bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex flex-col leading-none group">
              <span
                className={cn(
                  "font-heading text-xl md:text-2xl font-bold tracking-tight transition-colors",
                  scrolled || !isHome ? "text-maroon" : "text-cream"
                )}
              >
                Karachi Kitchen
              </span>
              <span
                className={cn(
                  "text-xs font-body tracking-widest uppercase transition-colors",
                  scrolled || !isHome ? "text-gold-dark" : "text-gold-light"
                )}
              >
                Manchester
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className={cn(
                    "px-3 py-2 text-sm font-body font-medium rounded-md transition-colors",
                    pathname === href
                      ? scrolled || !isHome
                        ? "text-maroon font-semibold"
                        : "text-gold"
                      : scrolled || !isHome
                      ? "text-ink hover:text-maroon"
                      : "text-cream/90 hover:text-cream"
                  )}
                >
                  {label}
                </Link>
              ))}
            </nav>

            {/* Right actions */}
            <div className="flex items-center gap-2">
              {/* Phone (desktop) */}
              <a
                href="tel:+441612345678"
                className={cn(
                  "hidden lg:flex items-center gap-1.5 text-sm font-medium transition-colors",
                  scrolled || !isHome
                    ? "text-ink-muted hover:text-maroon"
                    : "text-cream/80 hover:text-cream"
                )}
              >
                <Phone size={14} />
                0161 234 5678
              </a>

              {/* Cart button */}
              <button
                onClick={openCart}
                className={cn(
                  "relative flex items-center gap-1.5 px-3 py-2 rounded-md text-sm font-medium transition-all",
                  scrolled || !isHome
                    ? "bg-maroon text-cream hover:bg-maroon-dark"
                    : "bg-cream/20 text-cream hover:bg-cream/30 border border-cream/30"
                )}
              >
                <ShoppingBag size={16} />
                <span className="hidden sm:inline">Order</span>
                {itemCount > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-gold text-ink text-xs font-bold flex items-center justify-center">
                    {itemCount}
                  </span>
                )}
              </button>

              {/* Mobile hamburger */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className={cn(
                  "md:hidden p-2 rounded-md transition-colors",
                  scrolled || !isHome
                    ? "text-ink hover:bg-cream-dark"
                    : "text-cream hover:bg-cream/20"
                )}
                aria-label="Toggle menu"
              >
                {menuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden bg-cream border-t border-cream-dark shadow-lg">
            <nav className="max-w-7xl mx-auto px-4 py-3 flex flex-col">
              {navLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className={cn(
                    "px-3 py-3 text-sm font-medium border-b border-cream-dark last:border-0 transition-colors",
                    pathname === href
                      ? "text-maroon font-semibold"
                      : "text-ink hover:text-maroon"
                  )}
                >
                  {label}
                </Link>
              ))}
              <a
                href="tel:+441612345678"
                className="px-3 py-3 text-sm font-medium text-ink-muted flex items-center gap-2"
              >
                <Phone size={14} />
                0161 234 5678
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* Mobile sticky order button */}
      <div className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-40">
        <button
          onClick={openCart}
          className="flex items-center gap-2 bg-maroon text-cream px-6 py-3 rounded-full shadow-xl text-sm font-semibold hover:bg-maroon-dark active:scale-95 transition-all"
        >
          <ShoppingBag size={16} />
          {itemCount > 0 ? `View Order (${itemCount})` : "Order Online"}
          {itemCount > 0 && (
            <span className="bg-gold text-ink text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
              {itemCount}
            </span>
          )}
        </button>
      </div>
    </>
  );
}
