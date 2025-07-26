"use client";

import AboutSection from "./components/home/AboutSection";
import GallerySection from "./components/home/GallerySection";
import HeroSection from "./components/home/HeroSection";
import LocationsSection from "./components/home/LocationSection";
import ReservationSection from "./components/home/ReservationSection";
import ReviewsSection from "./components/home/ReviewsSection";
import SignatureItemsSection from "./components/home/SignatureItems";
import WeAreHiring from "./components/home/WeAreHiring";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <SignatureItemsSection />
      <LocationsSection />
      <ReviewsSection />
      {process.env.NEXT_PUBLIC_HIRING_PERIOD === "true" && <WeAreHiring />}
      <GallerySection />
      <ReservationSection />
    </>
  );
}