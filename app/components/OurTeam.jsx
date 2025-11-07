"use client";
import Image from "next/image";
import Slider from "react-slick";
import { useRef } from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { teamMembers } from "../data/teamData";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import SectionGlow from "./SectionGlow";

export default function OurTeam() {
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    pauseOnHover: true,
    speed: 900,
    cssEase: "ease-in-out",
    appendDots: (dots) => (
      <div className="mt-10">
        {/* Added gap between dots */}
        <ul className="flex justify-center mr-5 gap-4 [&_.slick-active_.dot]:bg-cyan-400 [&_.slick-active_.dot]:w-12">
          {dots}
        </ul>
      </div>
    ),
    customPaging: () => (
      <div className="dot w-10 h-1.5  rounded-full bg-gray-700 transition-all duration-300" />
    ),
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="bg-linear-to-b from-gray-950 via-gray-900 to-gray-950 text-gray-300 py-20 sm:py-12 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.25),transparent_70%)] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-8">
          <h2 className="text-sm mb-8 font-semibold tracking-wider text-cyan-400 uppercase">
            About Us / Our Team
          </h2>
          <h1 className="mt-3 text-4xl md:text-5xl font-bold text-white">
            The <span className="text-cyan-400">Minds</span> Behind Your{" "}
            <span className="text-cyan-400">Digital Success</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-400">
            Meet our passionate experts who transform your vision into reality.
          </p>
          <p className="mt-4 text-lg leading-8 text-gray-400">
            At <span className="text-cyan-400 font-semibold">Digroz</span>
            , we
            unite strategists, designers, developers & marketers — all driven to
            accelerate your brand’s growth.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Left Arrow */}
          <button
            onClick={() => sliderRef.current.slickPrev()}
            className="absolute -left-4 md:-left-4 top-1/2 -translate-y-1/2 shadow-xl hover:text-cyan-500 text-white backdrop-blur-sm transition-all duration-300 hover:scale-110 z-20"
          >
            <FaChevronLeft className="w-6 h-6 " />
          </button>

          {/* Right Arrow */}
          <button
            onClick={() => sliderRef.current.slickNext()}
            className="absolute -right-4 md:-right-4 top-1/2 -translate-y-1/2  shadow-xl hover:text-cyan-500 text-white backdrop-blur-sm transition-all duration-300 hover:scale-110 z-20"
          >
            <FaChevronRight className="w-6 h-6" />
          </button>

          <Slider ref={sliderRef} {...settings}>
            {teamMembers.map((person) => (
              <div key={person.name} className="p-3 md:p-4 mb-4">
                <div className="group relative flex flex-col justify-between items-center text-center bg-gray-900/70 border border-gray-700/40 rounded-2xl shadow-lg h-[430px] p-6 backdrop-blur-sm overflow-hidden transition-all duration-500 -translate-y-2 max-md:shadow-cyan-500/40 border-gray-700/40 hover:-translate-y-2 hover:shadow-cyan-500/40 hover:border-cyan-500/50">
                  {/* Glow overlay */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-linear-to-t from-cyan-400 via-transparent to-transparent transition-opacity duration-300"></div>

                  <div>
                    <div className="relative w-40 h-40 rounded-xl bg-white overflow-hidden mb-6 mx-auto border-2 border-gray-700 group-hover:border-cyan-400 transition-all duration-300">
                      <Image
                        className="w-full h-full object-fill group-hover:scale-105 transition-transform duration-500"
                        src={person.imageUrl}
                        alt={`Profile photo of ${person.name}`}
                        width={400}
                        height={400}
                      />
                    </div>

                    <h3 className="text-xl font-semibold text-white flex items-center gap-2 justify-center">
                      {person.icon}
                      {person.name}
                    </h3>
                    <p className="text-sm font-semibold leading-6 text-cyan-400 mt-1">
                      {person.role}
                    </p>
                    <p className="mt-3 text-base text-gray-400 line-clamp-3">
                      {person.description}
                    </p>
                  </div>

                  <p className="text-sm text-gray-500 italic mt-3">
                    🧰 Tools:{" "}
                    <span className="text-gray-400">{person.tools}</span>
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <SectionGlow />
    </section>
  );
}
