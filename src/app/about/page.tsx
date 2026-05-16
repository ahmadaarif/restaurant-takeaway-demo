import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Heart, Flame, Users, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Story",
  description:
    "Karachi Kitchen Manchester is a family-run Pakistani restaurant on Wilmslow Road, Rusholme. Our recipes come from a Karachi grandmother. Open since 2018.",
};

const timeline = [
  {
    year: "1962",
    title: "It starts in Karachi",
    body: "Naseem Begum opens a tiny food stall in Saddar, Karachi. Her Nihari and Haleem feed dock workers and rickshaw drivers. People queue from before dawn.",
  },
  {
    year: "1989",
    title: "Recipes travel",
    body: "Her son Tariq emigrates to Manchester carrying his mother's handwritten recipe book — pages stained with turmeric and ghee.",
  },
  {
    year: "2018",
    title: "Karachi Kitchen opens",
    body: "Tariq and his daughter Sana open Karachi Kitchen on Wilmslow Road. Sana cooks her grandmother's Nihari for the first paying customers. Twelve people show up. They bring twenty more the next week.",
  },
  {
    year: "2021",
    title: "Voted Best Curry Mile Restaurant",
    body: "Manchester Evening News readers' choice. The team frame the certificate above the chai station. It's still there.",
  },
  {
    year: "Today",
    title: "Same family, same recipes",
    body: "Sana still cooks. Tariq still greets every regular by name. Naseem's recipe book still sits in the kitchen — a little more stained each year.",
  },
];

const values = [
  {
    icon: Heart,
    title: "Made with love",
    body: "Cooking is how we say hello, sorry, congratulations and goodbye. We bring that to every plate.",
  },
  {
    icon: Flame,
    title: "Slow, the right way",
    body: "Our Nihari simmers for eight hours. Our Haleem for six. Some things can&apos;t be rushed.",
  },
  {
    icon: Users,
    title: "Family-run, family-feel",
    body: "If you see Tariq pouring chai or Sana plating biryani, that&apos;s normal. We&apos;re always in.",
  },
  {
    icon: MapPin,
    title: "Rooted in Manchester",
    body: "Our suppliers are local. Our team lives within five miles. We&apos;re proud Mancunians serving proper Karachi food.",
  },
];

const team = [
  {
    name: "Sana Khan",
    role: "Head Chef & Co-Owner",
    image:
      "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=600&q=80",
    bio: "Trained by her grandmother. Makes the Nihari that everyone talks about.",
  },
  {
    name: "Tariq Khan",
    role: "Founder & Front of House",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&q=80",
    bio: "Greeter, table-wiper, chai pourer. Built this place with his hands.",
  },
  {
    name: "Imran Ahmed",
    role: "Tandoor Chef",
    image:
      "https://images.unsplash.com/photo-1583394293214-28ded15ee548?w=600&q=80",
    bio: "Twenty years at the tandoor. His naan is the reason regulars order extra.",
  },
  {
    name: "Aisha Patel",
    role: "Pastry & Sweets",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&q=80",
    bio: "Makes the Kheer and Gulab Jamun fresh every morning. Worked here from week one.",
  },
];

export default function AboutPage() {
  return (
    <main className="flex-1 bg-cream pb-24 md:pb-12">
      {/* Hero */}
      <section className="relative pt-28 md:pt-32 pb-20 overflow-hidden">
        {/* SWAP IN: replace with real kitchen photo when client provides */}
        <Image
          src="https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=1600&q=85"
          alt="Hands cooking traditional Pakistani food"
          fill
          sizes="100vw"
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/80 via-ink/60 to-cream" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-gold text-xs font-body tracking-[0.25em] uppercase mb-4">
            Est. 2018 · Manchester
          </p>
          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-cream leading-tight mb-6">
            Three generations,
            <span className="block italic font-normal text-gold mt-2">
              one recipe book
            </span>
          </h1>
        </div>
      </section>

      {/* The story */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden order-2 lg:order-1">
              {/* SWAP IN: replace with photo of the chef/kitchen */}
              <Image
                src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=900&q=85"
                alt="Sana preparing spices in the kitchen"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-cream/95 rounded-xl px-4 py-3 backdrop-blur-sm">
                <p className="text-xs text-ink-muted italic">
                  &ldquo;She used to grind the masala by hand. I do too —
                  it&apos;s slower, but it tastes different.&rdquo;
                </p>
                <p className="text-xs text-maroon font-semibold mt-1">
                  — Sana, Head Chef
                </p>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <p className="text-gold text-xs font-body tracking-[0.25em] uppercase mb-3">
                Our Story
              </p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-maroon mb-6 heading-underline">
                It begins in a Karachi alleyway
              </h2>
              <div className="space-y-4 text-ink/80 leading-relaxed">
                <p>
                  In 1962, in a narrow lane in Saddar, our grandmother Naseem
                  set up a small clay stove and started cooking Nihari for
                  whoever would queue. Dock workers, rickshaw drivers,
                  schoolchildren on the way home. She didn&apos;t open a
                  restaurant — she just cooked, and people came.
                </p>
                <p>
                  Her recipes were never written down at first. They lived in
                  her hands, her tasting spoon, her sense of when the onions
                  had caramelised exactly right. Eventually, when her son
                  Tariq emigrated to Manchester in 1989, she sat with him for
                  three nights and dictated everything — pages and pages,
                  scribbled in Urdu and English, smudged with ghee and
                  turmeric.
                </p>
                <p>
                  In 2018, Tariq and his daughter Sana opened Karachi Kitchen
                  on Wilmslow Road. The recipe book is in our kitchen still.
                  We don&apos;t change much. Why would we?
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 md:py-20 bg-maroon text-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-gold text-xs font-body tracking-[0.25em] uppercase mb-2">
              Our Journey
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-cream heading-underline-center">
              Sixty Years In The Making
            </h2>
          </div>

          <ol className="relative border-l-2 border-gold/30 ml-3 md:ml-6 space-y-10">
            {timeline.map(({ year, title, body }) => (
              <li key={year} className="pl-8 md:pl-12 relative">
                <span className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-gold ring-4 ring-maroon"></span>
                <p className="font-heading text-gold text-sm font-bold tracking-wider mb-1">
                  {year}
                </p>
                <h3 className="font-heading text-xl text-cream font-semibold mb-2">
                  {title}
                </h3>
                <p className="text-cream/70 text-sm leading-relaxed">{body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-20 bg-cream-dark/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-gold text-xs font-body tracking-[0.25em] uppercase mb-2">
              How We Cook
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-maroon heading-underline-center">
              Our Values
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ icon: Icon, title, body }) => (
              <div
                key={title}
                className="bg-card rounded-2xl p-6 border border-cream-dark"
              >
                <div className="w-12 h-12 rounded-full bg-maroon/10 flex items-center justify-center mb-4">
                  <Icon size={20} className="text-maroon" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-ink mb-2">
                  {title}
                </h3>
                <p className="text-sm text-ink-muted leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-gold text-xs font-body tracking-[0.25em] uppercase mb-2">
              The People
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-maroon heading-underline-center">
              Meet the Family
            </h2>
            <p className="text-ink-muted text-sm mt-6 max-w-xl mx-auto">
              Some are blood, some aren&apos;t — but we run this place like a
              kitchen full of cousins.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {team.map(({ name, role, image, bio }) => (
              <div key={name} className="text-center group">
                {/* SWAP IN: replace with real team photo */}
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden mb-4 border border-cream-dark">
                  <Image
                    src={image}
                    alt={name}
                    fill
                    sizes="(max-width: 640px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/40 to-transparent" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-ink">
                  {name}
                </h3>
                <p className="text-gold-dark text-xs uppercase tracking-wider mt-0.5 mb-2">
                  {role}
                </p>
                <p className="text-sm text-ink-muted leading-relaxed">{bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kitchen photos strip */}
      <section className="py-16 md:py-20 bg-cream-dark/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-gold text-xs font-body tracking-[0.25em] uppercase mb-2">
              Behind the Pass
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-maroon heading-underline-center">
              Inside the Kitchen
            </h2>
          </div>

          {/* SWAP IN: replace with real kitchen photos when client provides */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {[
              "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80",
              "https://images.unsplash.com/photo-1583394293214-28ded15ee548?w=600&q=80",
              "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600&q=80",
              "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=600&q=80",
            ].map((src, i) => (
              <div
                key={i}
                className="relative aspect-square rounded-xl overflow-hidden"
              >
                <Image
                  src={src}
                  alt="Inside Karachi Kitchen"
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-maroon text-cream">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-cream mb-4">
            Come and try it for yourself
          </h2>
          <p className="text-cream/70 max-w-xl mx-auto mb-8">
            Words can only do so much. The Nihari is waiting.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/book"
              className="inline-flex items-center justify-center bg-gold text-ink px-8 py-3.5 rounded-full text-sm font-semibold hover:bg-gold-light transition-colors"
            >
              Book a Table
            </Link>
            <Link
              href="/order"
              className="inline-flex items-center justify-center border-2 border-cream/40 text-cream px-8 py-3.5 rounded-full text-sm font-semibold hover:bg-cream/10 transition-colors"
            >
              Order Online
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
