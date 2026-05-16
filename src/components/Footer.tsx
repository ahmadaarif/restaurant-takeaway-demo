import Link from "next/link";
import { MapPin, Phone, Mail, Clock, Share2, ExternalLink } from "lucide-react";
import { openingHours } from "@/lib/menu-data";

export default function Footer() {
  return (
    <footer className="bg-ink text-cream/80">
      {/* Gold accent line */}
      <div className="h-1 bg-gradient-to-r from-maroon via-gold to-maroon" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h3 className="font-heading text-xl font-bold text-cream mb-2">
              Karachi Kitchen
            </h3>
            <p className="text-xs tracking-widest uppercase text-gold mb-4">
              Manchester
            </p>
            <p className="text-sm leading-relaxed text-cream/60 mb-6">
              Family-run Pakistani restaurant on Wilmslow Road since 2018.
              Serving recipes passed down from a grandmother in Karachi.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full border border-cream/20 flex items-center justify-center hover:border-gold hover:text-gold transition-colors"
              >
                <span className="text-xs font-bold">IG</span>
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full border border-cream/20 flex items-center justify-center hover:border-gold hover:text-gold transition-colors"
              >
                <span className="text-xs font-bold">FB</span>
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-cream font-semibold text-sm mb-4 uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              {[
                { href: "/menu", label: "View Menu" },
                { href: "/order", label: "Order Online" },
                { href: "/book", label: "Book a Table" },
                { href: "/about", label: "About Us" },
                { href: "/contact", label: "Contact" },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="hover:text-gold transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Opening hours */}
          <div>
            <h4 className="text-cream font-semibold text-sm mb-4 uppercase tracking-wider">
              Opening Hours
            </h4>
            <ul className="space-y-2 text-sm">
              {openingHours.map(({ day, hours }) => (
                <li key={day} className="flex justify-between gap-4">
                  <span className="text-cream/60">{day}</span>
                  <span
                    className={
                      hours === "Closed" ? "text-red-400" : "text-cream"
                    }
                  >
                    {hours}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-cream font-semibold text-sm mb-4 uppercase tracking-wider">
              Find Us
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-3">
                <MapPin size={16} className="text-gold shrink-0 mt-0.5" />
                <span className="text-cream/70">
                  142 Wilmslow Road
                  <br />
                  Rusholme, Manchester
                  <br />
                  M14 5AN
                </span>
              </li>
              <li className="flex gap-3 items-center">
                <Phone size={16} className="text-gold shrink-0" />
                <a
                  href="tel:+441612345678"
                  className="hover:text-gold transition-colors"
                >
                  0161 234 5678
                </a>
              </li>
              <li className="flex gap-3 items-center">
                <Mail size={16} className="text-gold shrink-0" />
                <a
                  href="mailto:hello@karachikitchen.co.uk"
                  className="hover:text-gold transition-colors"
                >
                  hello@karachikitchen.co.uk
                </a>
              </li>
              <li className="flex gap-3 items-center">
                <Clock size={16} className="text-gold shrink-0" />
                <span className="text-cream/70">Kitchen closes 30 min before closing</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-cream/10 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-cream/40">
          <p>© {new Date().getFullYear()} Karachi Kitchen Manchester. All rights reserved.</p>
          <p>
            All our meat is halal certified ·{" "}
            <Link href="/contact" className="hover:text-gold transition-colors">
              Allergen info
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
