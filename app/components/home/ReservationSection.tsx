import { Phone } from "lucide-react";
import Image from "next/image";
import React from "react";

function ReservationSection() {
  return (
    <section
      id="reservation"
      className="text-brand-brown py-24 px-4"
    >
      {/* Title */}
      <div className="mb-8 flex flex-col items-center">
        <span className="inline-block bg-brand-brown/10 text-brand-brown font-semibold px-4 py-2 rounded-full uppercase tracking-wide text-sm shadow-sm text-center">
          Reserve Now
        </span>
      </div>
      <h2 className="text-5xl tracking-tight text-brand-brown drop-shadow-sm mb-4 text-center">
        Book Your Party Hall
      </h2>
      <div className="container mx-auto flex flex-col items-center justify-center text-center">
        {/* Party Hall Image */}
        <div className="mb-10 w-full max-w-3xl">
          <Image
            src="/images/party-hall.jpg"
            alt="Party Hall"
            width={1000}
            height={600}
            className="rounded-2xl shadow-lg object-cover"
          />
        </div>


        {/* Description */}
        <p className="mt-2 text-lg md:text-xl max-w-2xl mx-auto text-brand-brown/80 mb-8">
          Ready to host an unforgettable celebration? Call us now to reserve our party hall at your Oma's Panoor.
          Whether it's a birthday, engagement, or special occasion, we’ll take care of everything so you can enjoy the moment.
        </p>

        {/* Call to Action Button */}
        <a
          href="tel:9562051554"
          className="inline-flex items-center gap-3 bg-brand-brown hover:bg-brand-brown-dark transition-colors text-white px-10 py-4 rounded-full font-bold text-lg shadow-lg ring-2 ring-brand-brown/20 focus:ring-4 focus:ring-brand-brown/40 focus:outline-none"
          aria-label="Call to Book Now"
        >
          <Phone className="w-6 h-6" />
          Call to Book Now
        </a>
      </div>
    </section>
  );
}

export default ReservationSection;
