"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

export default function HeroSection() {
  const scrollDown = () => {
    document.getElementById("featured")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      {/* Replace src with real client photo when available */}
      <Image
        src="https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=1600&q=85"
        alt="Lamb biryani — Karachi Kitchen Manchester signature dish"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* Layered overlay: dark gradient for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/60 to-ink/80" />

      {/* Gold decorative line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold to-transparent" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        {/* Eyebrow */}
        <p className="text-gold text-xs md:text-sm font-body tracking-[0.25em] uppercase mb-6">
          Est. 2018 · Wilmslow Road, Manchester
        </p>

        {/* Heading */}
        <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-cream leading-tight mb-6">
          Karachi Kitchen
          <span className="block italic font-normal text-gold mt-1">Manchester</span>
        </h1>

        {/* Tagline */}
        <p className="font-body text-cream/80 text-base md:text-xl leading-relaxed mb-10 max-w-xl mx-auto">
          Authentic Pakistani home cooking in the heart of Manchester — recipes
          passed down through generations, made fresh every day.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/order"
            className="inline-flex items-center justify-center gap-2 bg-maroon text-cream px-8 py-4 rounded-full text-sm font-semibold tracking-wide hover:bg-maroon-dark transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            Order Online
          </Link>
          <Link
            href="/book"
            className="inline-flex items-center justify-center gap-2 border-2 border-cream/60 text-cream px-8 py-4 rounded-full text-sm font-semibold tracking-wide hover:bg-cream/10 transition-all duration-200"
          >
            Book a Table
          </Link>
        </div>

        {/* Trust signals */}
        <div className="mt-12 flex flex-wrap justify-center gap-6 text-cream/50 text-xs font-body">
          <span>✦ Halal Certified</span>
          <span>✦ Family Recipes</span>
          <span>✦ Free Delivery Over £20</span>
          <span>✦ Dine In &amp; Takeaway</span>
        </div>
      </div>

      {/* Scroll cue */}
      <button
        onClick={scrollDown}
        aria-label="Scroll down"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-cream/40 hover:text-gold transition-colors animate-bounce"
      >
        <ChevronDown size={28} />
      </button>
    </section>
  );
}
