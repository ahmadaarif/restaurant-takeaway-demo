"use client";

import Link from "next/link";
import { useCartStore } from "@/lib/cart-store";
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export default function OrderSummaryPanel() {
  const { items, updateQuantity, removeItem, subtotal, deliveryFee, total } =
    useCartStore();

  const sub = subtotal();
  const fee = deliveryFee();
  const tot = total();

  if (items.length === 0) {
    return (
      <div className="bg-card border border-cream-dark rounded-2xl p-8 text-center">
        <ShoppingBag size={36} className="text-ink/20 mx-auto mb-3" />
        <p className="font-heading text-ink-muted mb-1">Your basket is empty</p>
        <p className="text-xs text-ink-muted/70 mb-5">
          Add some delicious dishes from our menu to get started.
        </p>
        <Link
          href="/menu"
          className="inline-flex items-center gap-2 bg-maroon text-cream text-sm font-medium px-5 py-2.5 rounded-full hover:bg-maroon-dark transition-colors"
        >
          Browse Menu →
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-card border border-cream-dark rounded-2xl overflow-hidden">
      {/* Header */}
      <div className="px-5 py-4 bg-cream-dark/50 border-b border-cream-dark">
        <h3 className="font-heading text-lg font-semibold text-maroon">
          Your Order
        </h3>
      </div>

      {/* Items */}
      <ul className="divide-y divide-cream-dark/60 max-h-80 overflow-y-auto">
        {items.map((item) => (
          <li key={item.id} className="px-5 py-3 flex items-center gap-3">
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-ink truncate">
                {item.name}
              </p>
              <p className="text-xs text-ink-muted">
                £{item.price.toFixed(2)} each
              </p>
            </div>

            <div className="flex items-center gap-1.5 shrink-0">
              <button
                type="button"
                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                className="w-6 h-6 rounded-full border border-cream-dark flex items-center justify-center hover:bg-cream-dark"
                aria-label="Decrease quantity"
              >
                <Minus size={11} />
              </button>
              <span className="w-5 text-center text-sm font-medium">
                {item.quantity}
              </span>
              <button
                type="button"
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                className="w-6 h-6 rounded-full bg-maroon text-cream flex items-center justify-center hover:bg-maroon-dark"
                aria-label="Increase quantity"
              >
                <Plus size={11} />
              </button>
            </div>

            <p className="w-14 text-right text-sm font-semibold text-ink shrink-0">
              £{(item.price * item.quantity).toFixed(2)}
            </p>

            <button
              type="button"
              onClick={() => removeItem(item.id)}
              className="text-ink-muted/40 hover:text-red-500 transition-colors"
              aria-label="Remove item"
            >
              <Trash2 size={13} />
            </button>
          </li>
        ))}
      </ul>

      {/* Totals */}
      <div className="px-5 py-4 bg-cream-dark/30 border-t border-cream-dark space-y-1.5 text-sm">
        <div className="flex justify-between">
          <span className="text-ink-muted">Subtotal</span>
          <span>£{sub.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-ink-muted">Delivery</span>
          <span className={fee === 0 ? "text-green-700 font-medium" : ""}>
            {fee === 0 ? "Free" : `£${fee.toFixed(2)}`}
          </span>
        </div>
        <Separator className="my-2" />
        <div className="flex justify-between font-semibold text-base">
          <span>Total</span>
          <span className="text-maroon font-heading">£{tot.toFixed(2)}</span>
        </div>

        {sub < 20 && (
          <p className="mt-3 text-xs text-ink-muted bg-gold/10 border border-gold/20 rounded px-2 py-1.5">
            Add £{(20 - sub).toFixed(2)} more for free delivery
          </p>
        )}

        <Link
          href="/menu"
          className="block text-center mt-3 text-xs text-maroon hover:underline"
        >
          + Add more items
        </Link>
      </div>
    </div>
  );
}
