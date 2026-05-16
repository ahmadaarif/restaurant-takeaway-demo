import { Star } from "lucide-react";

const reviews = [
  {
    name: "Ayesha R.",
    location: "Fallowfield",
    rating: 5,
    date: "March 2025",
    text: "The Nihari here is the real deal — I've had it in Karachi and this takes me straight back. The bone marrow melts into the gravy. Absolutely outstanding. My whole family now orders here every Friday.",
    dish: "Nihari & Garlic Naan",
  },
  {
    name: "James T.",
    location: "Didsbury",
    rating: 5,
    date: "February 2025",
    text: "Introduced to Pakistani food by a colleague, came in nervous and left a convert. The chicken karahi is unlike any curry I've tried — it's smoky, fresh and not drowning in sauce. Excellent service too.",
    dish: "Chicken Karahi",
  },
  {
    name: "Fatima K.",
    location: "Longsight",
    rating: 5,
    date: "January 2025",
    text: "The Biryani is dum-cooked properly — you can tell the moment the steam hits you. Rice is perfectly separate, lamb is tender. The kheer to finish was exactly like my dadi made it. Proper home cooking.",
    dish: "Lamb Dum Biryani & Kheer",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={14}
          className={i < count ? "fill-gold text-gold" : "text-cream-dark"}
        />
      ))}
    </div>
  );
}

export default function ReviewsSection() {
  return (
    <section className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-gold text-xs font-body tracking-[0.2em] uppercase mb-2">
            What People Say
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-maroon heading-underline-center">
            Customer Reviews
          </h2>
          <p className="text-ink-muted text-sm mt-6">
            4.9 ★ on Google · 4.8 ★ on TripAdvisor · 200+ reviews
          </p>
        </div>

        {/* Review cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map(({ name, location, rating, date, text, dish }) => (
            <div
              key={name}
              className="bg-card rounded-2xl p-6 border border-cream-dark shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Stars + date */}
              <div className="flex items-center justify-between mb-4">
                <Stars count={rating} />
                <span className="text-ink-muted/50 text-xs">{date}</span>
              </div>

              {/* Quote */}
              <p className="text-ink/80 text-sm leading-relaxed mb-5 italic">
                &ldquo;{text}&rdquo;
              </p>

              {/* Reviewer */}
              <div className="border-t border-cream-dark pt-4 flex items-center justify-between">
                <div>
                  <p className="font-semibold text-ink text-sm">{name}</p>
                  <p className="text-ink-muted/60 text-xs">{location}</p>
                </div>
                <div className="text-right">
                  <span className="text-xs bg-cream-dark text-ink-muted px-2 py-1 rounded-full">
                    {dish}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
