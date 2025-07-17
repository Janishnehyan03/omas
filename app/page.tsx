// We are making this a client component to use hooks for potential future interactivity
"use client";

import { MapPin, Phone } from "lucide-react";
import Image from "next/image";
import AboutSection from "./components/home/AboutSection";
import HeroSection from "./components/home/HeroSection";
import SignatureItemsSection from "./components/home/SignatureItems";
import LocationsSection from "./components/home/LocationSection";
import ReviewsSection from "./components/home/ReviewsSection";
import GallerySection from "./components/home/GallerySection";
import ReservationSection from "./components/home/ReservationSection";

// Main Page Component
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <SignatureItemsSection />
      <LocationsSection />
      <ReviewsSection />
      <GallerySection />
      <ReservationSection />
    </>
  );
}
