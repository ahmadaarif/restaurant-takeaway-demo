import type { Metadata } from "next";
import Image from "next/image";
import BookingForm from "@/components/BookingForm";
import { openingHours } from "@/lib/menu-data";

export const metadata: Metadata = {
  title: "Book a Table",
  description:
    "Reserve your table at Karachi Kitchen Manchester. Lunch and dinner bookings available on Wilmslow Road, Rusholme.",
};

export default function BookPage() {
  return (
    <main className="flex-1 bg-cream pb-24 md:pb-12">
      {/* Page hero */}
      <section className="relative pt-28 md:pt-32 pb-12 bg-maroon text-cream overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1600&q=80"
          alt="Restaurant interior"
          fill
          sizes="100vw"
          className="object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-maroon-dark via-maroon to-maroon/80" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gold text-xs font-body tracking-[0.25em] uppercase mb-3">
            Reservations
          </p>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-cream leading-tight mb-4">
            Book a Table
          </h1>
          <p className="text-cream/70 text-base md:text-lg max-w-2xl mx-auto">
            Whether it&apos;s a quiet dinner for two or a family gathering of
            ten, we&apos;d love to host you.
          </p>
        </div>
      </section>

      {/* Layout */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-[1fr_320px] gap-8 lg:gap-12 items-start">
          {/* Form */}
          <div className="bg-card border border-cream-dark rounded-2xl p-6 md:p-8 order-2 lg:order-1">
            <BookingForm />
          </div>

          {/* Side info */}
          <aside className="space-y-6 order-1 lg:order-2 lg:sticky lg:top-28">
            <div className="bg-maroon text-cream rounded-2xl p-6">
              <h3 className="font-heading text-lg font-semibold mb-3 text-gold">
                Walk-ins welcome
              </h3>
              <p className="text-sm text-cream/70 leading-relaxed mb-4">
                We hold a few tables for walk-ins, but during peak hours
                (Fri–Sat) we&apos;d strongly recommend booking ahead. The
                kitchen runs to capacity.
              </p>
              <a
                href="tel:+441612345678"
                className="inline-flex items-center gap-2 text-gold hover:text-gold-light font-heading text-base"
              >
                Call: 0161 234 5678
              </a>
            </div>

            <div className="bg-card border border-cream-dark rounded-2xl p-6">
              <h3 className="font-heading text-lg font-semibold text-maroon mb-3">
                Opening Times
              </h3>
              <ul className="space-y-1.5 text-sm">
                {openingHours.map(({ day, hours }) => (
                  <li
                    key={day}
                    className="flex justify-between gap-3"
                  >
                    <span className="text-ink-muted">{day}</span>
                    <span
                      className={
                        hours === "Closed"
                          ? "text-red-600 italic"
                          : "text-ink font-medium"
                      }
                    >
                      {hours}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-cream-dark/50 rounded-2xl p-6 text-sm text-ink-muted leading-relaxed">
              <p className="text-ink font-semibold mb-2">A note on bookings</p>
              <p>
                Tables are held for 15 minutes past the reservation time.
                Parties of 6+ may have a £10 per person deposit applied during
                weekends.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
