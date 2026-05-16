"use client";

import { Suspense, useEffect, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { CheckCircle2, Clock, MapPin, Phone, ChefHat, Truck, ShoppingBag } from "lucide-react";
import { estimatedTime } from "@/lib/order-utils";

interface OrderSnapshot {
  orderNumber: string;
  mode: "delivery" | "collection";
  items: { id: string; name: string; price: number; quantity: number }[];
  customer: {
    name: string;
    phone: string;
    email: string;
    notes?: string;
    postcode?: string;
    addressLine1?: string;
    addressLine2?: string;
    city?: string;
  };
  placedAt: string;
}

export default function ConfirmationPage() {
  return (
    <Suspense fallback={<main className="flex-1 bg-cream pt-32" />}>
      <ConfirmationContent />
    </Suspense>
  );
}

function ConfirmationContent() {
  const searchParams = useSearchParams();
  const orderId = searchParams.get("id");
  const [order, setOrder] = useState<OrderSnapshot | null>(null);

  useEffect(() => {
    const stored = sessionStorage.getItem("kk-last-order");
    if (stored) {
      const parsed = JSON.parse(stored) as OrderSnapshot;
      if (!orderId || parsed.orderNumber === orderId) {
        setOrder(parsed);
      }
    }
  }, [orderId]);

  if (!order) {
    return (
      <main className="flex-1 bg-cream pt-32 pb-20 px-4 text-center">
        <div className="max-w-md mx-auto">
          <h1 className="font-heading text-2xl text-maroon mb-3">
            No order found
          </h1>
          <p className="text-ink-muted text-sm mb-6">
            We couldn&apos;t find an order to display. Try ordering again?
          </p>
          <Link
            href="/menu"
            className="inline-flex bg-maroon text-cream px-6 py-3 rounded-full text-sm font-semibold hover:bg-maroon-dark"
          >
            Browse Menu
          </Link>
        </div>
      </main>
    );
  }

  const subtotal = order.items.reduce(
    (sum, i) => sum + i.price * i.quantity,
    0
  );
  const deliveryFee =
    order.mode === "delivery" ? (subtotal >= 20 ? 0 : 2.5) : 0;
  const total = subtotal + deliveryFee;
  const eta = estimatedTime(order.mode);

  return (
    <main className="flex-1 bg-cream pb-20">
      {/* Success banner */}
      <section className="pt-28 md:pt-32 pb-12 bg-gradient-to-b from-maroon to-maroon-dark text-cream relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_50%_30%,rgba(201,169,97,0.6),transparent_60%)]" />
        <div className="relative max-w-2xl mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold/20 border-2 border-gold mb-5">
            <CheckCircle2 size={32} className="text-gold" />
          </div>
          <p className="text-gold text-xs font-body tracking-[0.25em] uppercase mb-3">
            Order Received
          </p>
          <h1 className="font-heading text-3xl md:text-5xl font-bold text-cream leading-tight mb-3">
            Shukriya, {order.customer.name.split(" ")[0]}!
          </h1>
          <p className="text-cream/70 text-sm md:text-base mb-6">
            We&apos;re firing up the karahi. Your order is on its way.
          </p>
          <div className="inline-block bg-cream/10 border border-cream/20 rounded-lg px-5 py-2.5">
            <p className="text-cream/60 text-xs uppercase tracking-wider">
              Order Number
            </p>
            <p className="font-heading text-xl text-gold font-bold">
              {order.orderNumber}
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-2xl mx-auto px-4 -mt-8 relative z-10">
        {/* ETA card */}
        <div className="bg-card rounded-2xl border border-cream-dark shadow-lg p-6 mb-8">
          <div className="flex items-center gap-4 mb-5">
            <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center">
              {order.mode === "delivery" ? (
                <Truck size={22} className="text-gold-dark" />
              ) : (
                <ShoppingBag size={22} className="text-gold-dark" />
              )}
            </div>
            <div>
              <p className="text-xs text-ink-muted uppercase tracking-wider">
                {order.mode === "delivery"
                  ? "Estimated Delivery"
                  : "Ready for Collection"}
              </p>
              <p className="font-heading text-2xl text-maroon font-bold">
                {eta}
              </p>
            </div>
          </div>

          {/* Status steps */}
          <div className="grid grid-cols-3 gap-2 text-center text-xs">
            {[
              { icon: CheckCircle2, label: "Received", active: true },
              { icon: ChefHat, label: "Cooking", active: false },
              {
                icon: order.mode === "delivery" ? Truck : ShoppingBag,
                label: order.mode === "delivery" ? "On the way" : "Ready",
                active: false,
              },
            ].map(({ icon: Icon, label, active }) => (
              <div key={label} className="flex flex-col items-center gap-1.5">
                <div
                  className={`w-9 h-9 rounded-full flex items-center justify-center ${
                    active
                      ? "bg-maroon text-cream"
                      : "bg-cream-dark text-ink-muted/50"
                  }`}
                >
                  <Icon size={16} />
                </div>
                <span
                  className={
                    active ? "text-ink font-semibold" : "text-ink-muted/60"
                  }
                >
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Order details */}
        <div className="bg-card rounded-2xl border border-cream-dark p-6 mb-6">
          <h2 className="font-heading text-lg font-semibold text-maroon mb-4">
            Order Summary
          </h2>

          <ul className="space-y-2 mb-4">
            {order.items.map((item) => (
              <li
                key={item.id}
                className="flex justify-between gap-3 text-sm"
              >
                <span className="text-ink">
                  <span className="text-ink-muted">{item.quantity}×</span>{" "}
                  {item.name}
                </span>
                <span className="text-ink font-medium shrink-0">
                  £{(item.price * item.quantity).toFixed(2)}
                </span>
              </li>
            ))}
          </ul>

          <div className="border-t border-cream-dark pt-3 space-y-1 text-sm">
            <div className="flex justify-between text-ink-muted">
              <span>Subtotal</span>
              <span>£{subtotal.toFixed(2)}</span>
            </div>
            {order.mode === "delivery" && (
              <div className="flex justify-between text-ink-muted">
                <span>Delivery</span>
                <span className={deliveryFee === 0 ? "text-green-700" : ""}>
                  {deliveryFee === 0 ? "Free" : `£${deliveryFee.toFixed(2)}`}
                </span>
              </div>
            )}
            <div className="flex justify-between font-semibold text-base pt-2 border-t border-cream-dark mt-2">
              <span>Total Paid</span>
              <span className="text-maroon font-heading">
                £{total.toFixed(2)}
              </span>
            </div>
          </div>
        </div>

        {/* Delivery details */}
        <div className="bg-card rounded-2xl border border-cream-dark p-6 mb-8">
          <h2 className="font-heading text-lg font-semibold text-maroon mb-4">
            {order.mode === "delivery" ? "Delivery to" : "Collection from"}
          </h2>

          {order.mode === "delivery" ? (
            <div className="flex gap-3">
              <MapPin size={18} className="text-gold-dark shrink-0 mt-0.5" />
              <div className="text-sm text-ink leading-relaxed">
                <p className="font-medium">{order.customer.name}</p>
                <p className="text-ink-muted">
                  {order.customer.addressLine1}
                  {order.customer.addressLine2 && (
                    <>, {order.customer.addressLine2}</>
                  )}
                  <br />
                  {order.customer.city}, {order.customer.postcode}
                </p>
              </div>
            </div>
          ) : (
            <div className="flex gap-3">
              <MapPin size={18} className="text-gold-dark shrink-0 mt-0.5" />
              <div className="text-sm text-ink leading-relaxed">
                <p className="font-medium">Karachi Kitchen Manchester</p>
                <p className="text-ink-muted">
                  142 Wilmslow Road
                  <br />
                  Rusholme, Manchester M14 5AN
                </p>
              </div>
            </div>
          )}

          <div className="flex gap-3 mt-3 pt-3 border-t border-cream-dark">
            <Phone size={18} className="text-gold-dark shrink-0 mt-0.5" />
            <div className="text-sm text-ink-muted">
              {order.customer.phone}
            </div>
          </div>

          {order.customer.notes && (
            <div className="mt-3 pt-3 border-t border-cream-dark">
              <p className="text-xs text-ink-muted uppercase tracking-wider mb-1">
                Notes
              </p>
              <p className="text-sm text-ink italic">
                &ldquo;{order.customer.notes}&rdquo;
              </p>
            </div>
          )}
        </div>

        {/* Help */}
        <div className="bg-maroon/5 border border-maroon/10 rounded-2xl p-5 text-center mb-8">
          <Clock size={20} className="text-maroon mx-auto mb-2" />
          <p className="text-sm text-ink mb-1">
            Something not right? Give us a call.
          </p>
          <a
            href="tel:+441612345678"
            className="font-heading text-lg text-maroon font-bold hover:text-maroon-dark"
          >
            0161 234 5678
          </a>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            href="/"
            className="flex-1 text-center bg-cream-dark text-ink px-6 py-3 rounded-full text-sm font-semibold hover:bg-cream-dark/70 transition-colors"
          >
            Back to Home
          </Link>
          <Link
            href="/menu"
            className="flex-1 text-center bg-maroon text-cream px-6 py-3 rounded-full text-sm font-semibold hover:bg-maroon-dark transition-colors"
          >
            Order Again
          </Link>
        </div>

        <p className="text-center text-xs text-ink-muted/60 mt-8">
          A confirmation has been emailed to {order.customer.email}
        </p>
      </div>
    </main>
  );
}
