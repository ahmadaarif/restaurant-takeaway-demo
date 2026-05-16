import { Flame, Leaf, Clock, Award } from "lucide-react";

const pillars = [
  {
    icon: Flame,
    title: "Cooked From Scratch",
    body: "No shortcuts. Our Nihari simmers overnight. Our Haleem cooks for six hours. Spices are ground fresh each morning.",
  },
  {
    icon: Leaf,
    title: "Halal Certified",
    body: "All meat is sourced from Manchester's trusted halal butchers. We display our certificates — you can always ask to see them.",
  },
  {
    icon: Clock,
    title: "Family Recipes",
    body: "Our menu traces back to a tiny kitchen in Karachi. Nani's Kheer, Abbu's Nihari and Ammi's Karahi — unchanged since 2018.",
  },
  {
    icon: Award,
    title: "Freshness Guaranteed",
    body: "We buy vegetables daily from Rusholme market. If a dish isn't up to scratch, we remake it. That's our promise.",
  },
];

export default function WhyUsSection() {
  return (
    <section className="py-20 bg-maroon text-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-gold text-xs font-body tracking-[0.2em] uppercase mb-2">
            Our Promise
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-cream heading-underline-center">
            Why Karachi Kitchen?
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map(({ icon: Icon, title, body }) => (
            <div key={title} className="text-center">
              <div className="w-14 h-14 rounded-full bg-gold/20 border border-gold/30 flex items-center justify-center mx-auto mb-5">
                <Icon size={24} className="text-gold" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-cream mb-3">{title}</h3>
              <p className="text-cream/60 text-sm leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
