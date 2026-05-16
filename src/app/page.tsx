import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import FeaturedDishes from "@/components/FeaturedDishes";
import WhyUsSection from "@/components/WhyUsSection";
import OpeningHoursSection from "@/components/OpeningHoursSection";
import MapSection from "@/components/MapSection";
import ReviewsSection from "@/components/ReviewsSection";

export const metadata: Metadata = {
  title: "Karachi Kitchen Manchester | Authentic Pakistani Restaurant",
  description:
    "Authentic Pakistani home cooking in the heart of Manchester's Curry Mile. Order online for delivery and collection, or book a table.",
};

export default function HomePage() {
  return (
    <main className="flex-1">
      <HeroSection />
      <FeaturedDishes />
      <WhyUsSection />
      <OpeningHoursSection />
      <ReviewsSection />
      <MapSection />
    </main>
  );
}
