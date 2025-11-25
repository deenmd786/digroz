"use client";

import Link from "next/link";
import { FaCode, FaMobileAlt, FaBullhorn } from "react-icons/fa";
import ServiceButton from "./ServiceButton";

export default function ServicesMain() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-12 font-sans text-gray-300">
      <section className="text-center mb-12">
        <h2 className="text-4xl font-bold text-white">
          Our <span className="text-cyan-400">Core Services</span>
        </h2>
        <p className="text-gray-400 mt-3 text-base md:text-lg">
          Explore how we can grow your business digitally with our expert-led strategies.
        </p>
      </section>

      {/* Service Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        
        {/* Web Development */}
        <Link href="/services/web-development" className="mx-auto">
          <ServiceButton
            icon={FaCode}
            color="cyan"
            title="Web Development"
            className="hover:shadow-cyan-400/30 hover:shadow-lg transition-all duration-300 cursor-pointer"
          />
        </Link>

        {/* App Development */}
        <Link href="/services/app-development" className="mx-auto">
          <ServiceButton
            icon={FaMobileAlt}
            color="cyan"
            title="App Development"
            className="hover:shadow-cyan-400/30 hover:shadow-lg transition-all duration-300 cursor-pointer"
          />
        </Link>

        {/* Paid Ads */}
        <Link href="/services/paid-ads-campaign" className="mx-auto">
          <ServiceButton
            icon={FaBullhorn}
            color="cyan"
            title="Paid Advertisement"
            className="hover:shadow-cyan-400/30 hover:shadow-lg transition-all duration-300 cursor-pointer"
          />
        </Link>

      </div>
    </main>
  );
}
