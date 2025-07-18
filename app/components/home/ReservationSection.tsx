import { Phone } from "lucide-react";
import React from "react";

function ReservationSection() {
  return (
    <section
      id="reservation"
      className=" text-brand-brown py-24 px-4"
    >
      <div className="container mx-auto flex flex-col items-center justify-center text-center">
        <div className="mb-8">
          <span className="inline-block bg-brand-brown/10 text-brand-brown font-semibold px-4 py-2 rounded-full uppercase tracking-wide text-sm shadow-sm">
            Reserve Now
          </span>
        </div>
        <h2 className="font-serif text-5xl font-extrabold tracking-tight text-brand-brown drop-shadow-sm mb-4">
          Book Your Table
        </h2>
        <p className="mt-2 text-lg md:text-xl max-w-2xl mx-auto text-brand-brown/80 mb-8">
          Ready for an unforgettable dining experience? Call us to make a reservation at your nearest branch and let us take care of the rest.
        </p>
        <a
          href={`tel:9526051554`}
          className="inline-flex items-center gap-3 bg-brand-brown hover:bg-brand-brown-dark transition-colors text-white px-10 py-4 rounded-full font-bold text-lg shadow-lg ring-2 ring-brand-brown/20 focus:ring-4 focus:ring-brand-brown/40 focus:outline-none"
          aria-label="Call to Reserve"
        >
          <Phone className="w-6 h-6" />
          Call to Reserve
        </a>
      </div>
    </section>
  );
}
export default ReservationSection;