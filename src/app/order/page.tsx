import type { Metadata } from "next";
import OrderForm from "@/components/OrderForm";
import OrderSummaryPanel from "@/components/OrderSummaryPanel";

export const metadata: Metadata = {
  title: "Order Online — Delivery & Collection",
  description:
    "Order Karachi Kitchen Manchester for delivery or collection. Free delivery on orders over £20 within 3 miles of Wilmslow Road, Rusholme.",
};

export default function OrderPage() {
  return (
    <main className="flex-1 bg-cream pb-24 md:pb-12">
      {/* Page hero */}
      <section className="pt-28 md:pt-32 pb-10 bg-maroon text-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gold text-xs font-body tracking-[0.25em] uppercase mb-3">
            Checkout
          </p>
          <h1 className="font-heading text-3xl md:text-5xl font-bold text-cream leading-tight mb-3">
            Complete Your Order
          </h1>
          <p className="text-cream/70 text-sm md:text-base max-w-2xl mx-auto">
            Just a few details and your meal will be on its way.
          </p>
        </div>
      </section>

      {/* Two column layout */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid lg:grid-cols-[1fr_380px] gap-8 lg:gap-12">
          {/* Form */}
          <div className="bg-card border border-cream-dark rounded-2xl p-6 md:p-8">
            <OrderForm />
          </div>

          {/* Sticky summary */}
          <aside className="lg:sticky lg:top-28 lg:self-start order-first lg:order-last">
            <OrderSummaryPanel />
          </aside>
        </div>
      </div>
    </main>
  );
}
