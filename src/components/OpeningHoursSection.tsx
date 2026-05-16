import { Clock, Phone } from "lucide-react";
import { openingHours } from "@/lib/menu-data";

export default function OpeningHoursSection() {
  return (
    <section className="py-20 bg-cream-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-4xl mx-auto">
          {/* Hours */}
          <div>
            <p className="text-gold text-xs font-body tracking-[0.2em] uppercase mb-2">
              When We&apos;re Open
            </p>
            <h2 className="font-heading text-3xl font-bold text-maroon mb-8 heading-underline">
              Opening Hours
            </h2>

            <ul className="space-y-3">
              {openingHours.map(({ day, hours }) => {
                const closed = hours === "Closed";
                return (
                  <li
                    key={day}
                    className="flex justify-between items-center py-3 border-b border-cream last:border-0"
                  >
                    <span className="text-ink-muted text-sm">{day}</span>
                    <span
                      className={`text-sm font-semibold ${
                        closed ? "text-ink-muted/50 italic" : "text-ink"
                      }`}
                    >
                      {hours}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Quick info panel */}
          <div className="bg-maroon rounded-2xl p-8 text-cream space-y-6">
            <div className="flex items-start gap-4">
              <Clock size={22} className="text-gold shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-cream mb-1">Last Orders</p>
                <p className="text-cream/60 text-sm">
                  Kitchen closes 30 minutes before listed closing time. Online
                  orders close 45 minutes before.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Phone size={22} className="text-gold shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-cream mb-1">Call to Order</p>
                <a
                  href="tel:+441612345678"
                  className="text-gold text-lg font-heading hover:text-gold-light transition-colors"
                >
                  0161 234 5678
                </a>
                <p className="text-cream/60 text-sm mt-1">
                  We also take orders by phone during opening hours.
                </p>
              </div>
            </div>

            <div className="pt-2 border-t border-cream/20">
              <p className="text-cream/50 text-xs leading-relaxed">
                Bank holiday hours may vary. Follow us on Instagram{" "}
                <span className="text-gold">@KarachiKitchenMCR</span> for
                updates.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
