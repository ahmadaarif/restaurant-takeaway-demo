"use client";

import { useCartStore } from "@/lib/cart-store";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";

export default function CartDrawer() {
  const { items, isOpen, closeCart, updateQuantity, removeItem, subtotal, deliveryFee, total } =
    useCartStore();

  const sub = subtotal();
  const fee = deliveryFee();
  const tot = total();

  return (
    <Sheet open={isOpen} onOpenChange={(open) => !open && closeCart()}>
      <SheetContent className="flex flex-col w-full sm:max-w-md bg-cream border-l border-cream-dark p-0">
        <SheetHeader className="px-6 pt-6 pb-4 border-b border-cream-dark">
          <SheetTitle className="font-heading text-maroon text-xl flex items-center gap-2">
            <ShoppingBag size={20} />
            Your Order
          </SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
            <ShoppingBag size={48} className="text-ink/20 mb-4" />
            <p className="font-heading text-lg text-ink-muted">Your basket is empty</p>
            <p className="text-sm text-ink-muted/70 mt-1 mb-6">
              Browse our menu and add something delicious
            </p>
            <Link
              href="/menu"
              onClick={closeCart}
              className="inline-flex items-center justify-center bg-maroon text-cream hover:bg-maroon-dark px-5 py-2.5 rounded-md text-sm font-medium transition-colors"
            >
              View Menu
            </Link>
          </div>
        ) : (
          <>
            {/* Items list */}
            <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
              {items.map((item) => (
                <div key={item.id} className="flex items-center gap-3">
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-ink truncate">{item.name}</p>
                    <p className="text-xs text-ink-muted">£{item.price.toFixed(2)} each</p>
                  </div>

                  {/* Quantity controls */}
                  <div className="flex items-center gap-1.5 shrink-0">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="w-7 h-7 rounded-full border border-cream-dark flex items-center justify-center hover:bg-cream-dark transition-colors"
                    >
                      <Minus size={12} />
                    </button>
                    <span className="w-6 text-center text-sm font-medium">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="w-7 h-7 rounded-full bg-maroon text-cream flex items-center justify-center hover:bg-maroon-dark transition-colors"
                    >
                      <Plus size={12} />
                    </button>
                  </div>

                  <p className="w-14 text-right text-sm font-semibold text-ink shrink-0">
                    £{(item.price * item.quantity).toFixed(2)}
                  </p>

                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-ink-muted/50 hover:text-red-500 transition-colors"
                    aria-label="Remove item"
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
              ))}
            </div>

            {/* Totals & CTA */}
            <div className="px-6 py-4 border-t border-cream-dark bg-cream-dark/30">
              <div className="space-y-1.5 text-sm mb-4">
                <div className="flex justify-between">
                  <span className="text-ink-muted">Subtotal</span>
                  <span>£{sub.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-ink-muted">
                    Delivery {sub < 20 && sub > 0 && "(free over £20)"}
                  </span>
                  <span className={fee === 0 ? "text-green-700 font-medium" : ""}>
                    {fee === 0 ? "Free" : `£${fee.toFixed(2)}`}
                  </span>
                </div>
                <Separator className="my-2" />
                <div className="flex justify-between font-semibold text-base">
                  <span>Total</span>
                  <span className="text-maroon">£{tot.toFixed(2)}</span>
                </div>
              </div>

              {sub < 20 && (
                <p className="text-xs text-ink-muted/80 bg-gold/10 border border-gold/20 rounded px-3 py-2 mb-4">
                  Add £{(20 - sub).toFixed(2)} more for free delivery
                </p>
              )}

              <Link
                href="/order"
                onClick={closeCart}
                className="w-full inline-flex items-center justify-center bg-maroon text-cream hover:bg-maroon-dark font-semibold py-3 rounded-md transition-colors"
              >
                Checkout →
              </Link>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}
