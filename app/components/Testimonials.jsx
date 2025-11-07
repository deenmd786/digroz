"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Image from "next/image";
import Slider from "react-slick";
import SectionGlow from "./SectionGlow";
import { testimonials } from "../data/testimonialsData";
import { clients } from "../data/clientsData";

export default function Testimonials() {
  // --- Carousel Settings ---
  const sliderSettings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 800,
    slidesToShow: 4,
    slidesToScroll: 1,
    pauseOnHover: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1280,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section id="testimonials" className="bg-gray-950 text-gray-300 py-12 sm:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-sm mb-8 font-semibold tracking-wider text-cyan-400 uppercase">
            Testimonials
          </h2>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            TRUSTED BY INDUSTRY LEADERS
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-400">
            See what our partners have to say about their experience.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="flex flex-col items-center p-8 bg-gray-900 border border-cyan-700/30 rounded-lg shadow-lg text-center"
            >
              <div className="w-full flex justify-between items-start">
                <div className="text-left">
                  <h3 className="text-lg font-semibold text-white">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                  <p className="text-sm text-cyan-400">{testimonial.company}</p>
                </div>
                {testimonial.icon && (
                  <testimonial.icon
                    className="h-8 w-8 text-cyan-400 shrink-0"
                    aria-hidden="true"
                  />
                )}
              </div>

              <div className="mt-6">
                <div className="w-32 h-32 rounded-lg bg-white overflow-hidden mx-auto">
                  <Image
                    className="w-full h-full object-cover"
                    src={testimonial.imageUrl}
                    alt={`Profile photo of ${testimonial.name}`}
                    width={100}
                    height={100}
                  />
                </div>
                <blockquote className="mt-6 text-lg leading-7 text-gray-300">
                  {testimonial.quote}
                </blockquote>
              </div>
            </div>
          ))}
        </div>

        {/* Client Logo Carousel */}
        <div className="mt-16 sm:mt-24 bg-gray-900/40 py-10 rounded-xl border border-cyan-700/20">
          <h2 className="text-center text-sm font-semibold uppercase text-gray-400 tracking-wider mb-10">
            Join our growing list of successful clients
          </h2>

          <div className="max-w-6xl mx-auto px-4">
            <Slider {...sliderSettings}>
              {clients.map((client) => (
                  <div key={client.name} className="px-6">
                  <div className="flex flex-col items-center justify-center bg-gray-950/60 border border-cyan-700/20 rounded-lg py-6 shadow-md hover:bg-gray-900 transition">
                    <client.icon
                      className="h-10 w-10 text-cyan-400 mb-3"
                      aria-hidden="true"
                    />
                    <span className="text-base px-3 font-medium text-gray-300 text-center">
                      {client.name}
                    </span>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>

      <SectionGlow />
    </section>
  );
}
