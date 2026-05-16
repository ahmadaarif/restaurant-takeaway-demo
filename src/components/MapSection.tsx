import { MapPin, Navigation } from "lucide-react";

export default function MapSection() {
  return (
    <section className="py-20 bg-cream-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-gold text-xs font-body tracking-[0.2em] uppercase mb-2">
            Come Visit Us
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-maroon heading-underline-center">
            Find Karachi Kitchen
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          {/* Map placeholder */}
          {/* SWAP IN: Replace this div with a real Google Maps embed or Next.js dynamic import of a map component */}
          <div className="relative rounded-2xl overflow-hidden min-h-[320px] bg-maroon/5 border-2 border-dashed border-maroon/20 flex flex-col items-center justify-center text-center p-8 group hover:border-maroon/40 transition-colors">
            <MapPin size={48} className="text-maroon/30 mb-4" />
            <p className="font-heading text-lg text-maroon/60 mb-2">Map Embed</p>
            <p className="text-ink-muted/50 text-sm max-w-xs">
              Replace this placeholder with a Google Maps or Mapbox embed. Drop
              pin at 142 Wilmslow Road, Rusholme, Manchester M14 5AN.
            </p>
            <a
              href="https://www.google.com/maps/search/142+Wilmslow+Road+Rusholme+Manchester"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 bg-maroon text-cream text-sm font-medium px-4 py-2 rounded-full hover:bg-maroon-dark transition-colors"
            >
              <Navigation size={14} />
              Get Directions
            </a>
          </div>

          {/* Address & transport info */}
          <div className="bg-card rounded-2xl border border-cream-dark p-8 flex flex-col justify-center space-y-6">
            <div>
              <h3 className="font-heading text-xl font-semibold text-maroon mb-3">
                142 Wilmslow Road
              </h3>
              <p className="text-ink-muted leading-relaxed">
                Rusholme, Manchester
                <br />
                M14 5AN
                <br />
                United Kingdom
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-gold/20 text-gold-dark text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                  🚇
                </span>
                <div>
                  <p className="text-sm font-medium text-ink">By Tram</p>
                  <p className="text-xs text-ink-muted">
                    Piccadilly Gardens Metrolink, then bus 41, 42, 43 towards
                    Wilmslow Road (8 min)
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-gold/20 text-gold-dark text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                  🚌
                </span>
                <div>
                  <p className="text-sm font-medium text-ink">By Bus</p>
                  <p className="text-xs text-ink-muted">
                    Routes 41, 42, 43, 142, 143. Stop: Rusholme (Wilmslow Road)
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-gold/20 text-gold-dark text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                  🅿️
                </span>
                <div>
                  <p className="text-sm font-medium text-ink">Parking</p>
                  <p className="text-xs text-ink-muted">
                    Limited street parking on Wilmslow Road. NCP Piccadilly
                    (0.4 miles) for longer stays.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-cream-dark">
              <p className="text-xs text-ink-muted/60">
                We&apos;re on Manchester&apos;s famous Curry Mile — look for the maroon
                awning between Anson Road and Ladybarn Lane.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
