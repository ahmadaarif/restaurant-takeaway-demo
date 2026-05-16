import type { Metadata } from "next";
import { MapPin, Phone, Mail, Clock, Navigation } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import { openingHours } from "@/lib/menu-data";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Karachi Kitchen Manchester. Find us at 142 Wilmslow Road, Rusholme. Call 0161 234 5678 or use our contact form.",
};

export default function ContactPage() {
  return (
    <main className="flex-1 bg-cream pb-24 md:pb-12">
      {/* Hero */}
      <section className="pt-28 md:pt-32 pb-12 bg-maroon text-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gold text-xs font-body tracking-[0.25em] uppercase mb-3">
            Say Hello
          </p>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-cream leading-tight mb-4">
            Get in Touch
          </h1>
          <p className="text-cream/70 text-base md:text-lg max-w-2xl mx-auto">
            Questions, feedback, large bookings, catering — we&apos;d love to
            hear from you.
          </p>
        </div>
      </section>

      {/* Quick contact tiles */}
      <section className="-mt-8 relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="grid sm:grid-cols-3 gap-4">
          <ContactTile
            icon={<Phone size={22} />}
            label="Call us"
            value="0161 234 5678"
            href="tel:+441612345678"
          />
          <ContactTile
            icon={<Mail size={22} />}
            label="Email"
            value="hello@karachikitchen.co.uk"
            href="mailto:hello@karachikitchen.co.uk"
          />
          <ContactTile
            icon={<MapPin size={22} />}
            label="Visit"
            value="142 Wilmslow Road, M14 5AN"
            href="https://www.google.com/maps/search/142+Wilmslow+Road+Rusholme+Manchester"
          />
        </div>
      </section>

      {/* Two-column: form + info */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1fr_400px] gap-8 lg:gap-12">
          {/* Form */}
          <div className="bg-card border border-cream-dark rounded-2xl p-6 md:p-8">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-maroon mb-2">
              Send us a message
            </h2>
            <p className="text-ink-muted text-sm mb-6">
              Use the form below — or call us directly during opening hours.
            </p>
            <ContactForm />
          </div>

          {/* Side info */}
          <aside className="space-y-6">
            {/* Map placeholder */}
            {/* SWAP IN: Replace this div with a real Google Maps iframe or Mapbox component */}
            <div className="relative rounded-2xl overflow-hidden h-72 bg-cream-dark border-2 border-dashed border-maroon/20 flex flex-col items-center justify-center text-center p-6 group hover:border-maroon/40 transition-colors">
              <MapPin size={42} className="text-maroon/30 mb-3" />
              <p className="font-heading text-base text-maroon/60 mb-1">
                Map Embed
              </p>
              <p className="text-xs text-ink-muted/60 max-w-[240px]">
                Replace with a real embed when client confirms location pin
              </p>
              <a
                href="https://www.google.com/maps/search/142+Wilmslow+Road+Rusholme+Manchester"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-1.5 bg-maroon text-cream text-xs font-medium px-4 py-2 rounded-full hover:bg-maroon-dark"
              >
                <Navigation size={12} />
                Get Directions
              </a>
            </div>

            {/* Address card */}
            <div className="bg-card border border-cream-dark rounded-2xl p-6">
              <h3 className="font-heading text-lg font-semibold text-maroon mb-4 flex items-center gap-2">
                <MapPin size={18} /> Find Us
              </h3>
              <p className="text-sm text-ink leading-relaxed">
                142 Wilmslow Road
                <br />
                Rusholme, Manchester
                <br />
                M14 5AN
              </p>
              <p className="text-xs text-ink-muted mt-3 leading-relaxed">
                On the famous Curry Mile, between Anson Road and Ladybarn Lane.
                Look for the maroon awning.
              </p>
            </div>

            {/* Opening hours */}
            <div className="bg-maroon text-cream rounded-2xl p-6">
              <h3 className="font-heading text-lg font-semibold text-gold mb-4 flex items-center gap-2">
                <Clock size={18} /> Opening Hours
              </h3>
              <ul className="space-y-1.5 text-sm">
                {openingHours.map(({ day, hours }) => (
                  <li key={day} className="flex justify-between gap-3">
                    <span className="text-cream/60">{day}</span>
                    <span
                      className={
                        hours === "Closed"
                          ? "text-red-300 italic"
                          : "text-cream font-medium"
                      }
                    >
                      {hours}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="text-xs text-cream/50 mt-4 pt-4 border-t border-cream/10">
                Bank holiday hours may vary. Follow{" "}
                <span className="text-gold">@KarachiKitchenMCR</span> for
                updates.
              </p>
            </div>
          </aside>
        </div>
      </section>

      {/* FAQ-ish strip */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="bg-cream-dark/40 rounded-2xl p-8 md:p-10">
          <h2 className="font-heading text-2xl font-bold text-maroon mb-6 text-center">
            Quick Answers
          </h2>
          <div className="grid sm:grid-cols-2 gap-6 text-sm">
            <FAQ
              q="Do you cater for events?"
              a="Yes — birthdays, weddings, corporate. Email hello@karachikitchen.co.uk with date and headcount."
            />
            <FAQ
              q="Are you halal?"
              a="100% halal. All meat is sourced from a single trusted halal butcher in Longsight."
            />
            <FAQ
              q="Do you do gluten-free?"
              a="Several of our curries and rice dishes are naturally GF. Look for the GF tag on the menu."
            />
            <FAQ
              q="Can I book the whole restaurant?"
              a="Yes, for parties of 30+. Get in touch through the form and we'll send a private hire pack."
            />
          </div>
        </div>
      </section>
    </main>
  );
}

function ContactTile({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noopener noreferrer"
      className="group bg-card border border-cream-dark rounded-2xl p-5 flex items-center gap-4 hover:border-maroon hover:-translate-y-0.5 transition-all shadow-sm hover:shadow-md"
    >
      <div className="w-12 h-12 rounded-full bg-maroon/10 flex items-center justify-center text-maroon group-hover:bg-maroon group-hover:text-cream transition-colors shrink-0">
        {icon}
      </div>
      <div className="min-w-0">
        <p className="text-xs uppercase tracking-wider text-ink-muted">{label}</p>
        <p className="font-heading text-base text-ink font-semibold truncate">
          {value}
        </p>
      </div>
    </a>
  );
}

function FAQ({ q, a }: { q: string; a: string }) {
  return (
    <div>
      <p className="font-heading font-semibold text-ink mb-1">{q}</p>
      <p className="text-ink-muted leading-relaxed">{a}</p>
    </div>
  );
}
