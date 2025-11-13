import React from "react";
import { Megaphone, MonitorSmartphone } from "lucide-react";
import Image from "next/image";
import SectionGlow from "./SectionGlow";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section id="home" className="relative w-full bg-linear-to-b from-[#020617] via-[#0a1120] to-black overflow-hidden">
      {/* Background Overlay for Soft Glow */}
      <div className="absolute inset-0 bg-linear-to-b from-cyan-900/10 via-transparent to-cyan-700/10 pointer-events-none"></div>

      <main className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 pt-28 lg:pt-32 pb-10 grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-0 items-center z-10">
        {/* Left Side */}
        <div className="flex flex-col justify-center text-center md:text-left">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
            <span className="text-cyan-400">Elevate</span> Your
            <br />
            Brand&apos;s Digital
            <br />
            Footprint.
          </h1>

          <p className="mt-6 text-base sm:text-lg text-gray-300 max-w-md sm:max-w-lg mx-auto md:mx-0">
            We craft powerful strategies for Google & Meta Ads, build stunning
            static & dynamic websites, and develop intuitive mobile applications
            that drive real growth.
          </p>

          <div className="mt-8 flex flex-col space-y-4 items-center md:items-start">
            <div className="flex items-center space-x-3">
              <Megaphone className="w-6 h-6 text-cyan-400" />
              <span className="text-base sm:text-lg text-gray-200">
                Google & Meta Ads
              </span>
            </div>
            <div className="flex items-center space-x-3">
              <MonitorSmartphone className="w-6 h-6 text-cyan-400" />
              <span className="text-base sm:text-lg text-gray-200">
                Mobile & Dynamic Websites
              </span>
            </div>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center md:justify-start">
            <Link
              href="#contact"
              className="bg-cyan-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-cyan-600 transition-all text-center text-sm sm:text-base"
            >
              Accelerate Your Growth Today
            </Link>
            <Link
              href="/portfolio"
              className="border-2 border-cyan-500 text-cyan-500 font-bold py-3 px-6 rounded-lg hover:bg-cyan-500 hover:text-white transition-all text-center text-sm sm:text-base"
            >
              Explore Our Portfolio
            </Link>
          </div>
        </div>

        {/* Right Side Image (merged with background) */}
        <div className="flex justify-center md:justify-end relative">
          {/* Gradient fade for blending with background */}
          <div className="absolute inset-0 bg-linear-to-l from-[#0a1120] via-transparent to-transparent z-0"></div>

          <Image
            src="/main-image.png"
            alt="Hero background"
            width={800}
            height={800}
            priority
            className="relative z-10 w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-none  object-cover rounded-none md:rounded-l-2xl"
          />
        </div>

        
      </main>
      <SectionGlow />
    </section>
  );
};

export default HeroSection;
