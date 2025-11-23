"use client";
import Image from "next/image";
import SectionGlow from "./SectionGlow";
import { caseStudies } from "../data/caseStudiesData";

export default function CaseStudies() {
  return (
    <section id="case-studies" className="bg-gray-950 text-gray-300 py-12 md:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-sm mb-8 font-semibold tracking-wider text-cyan-400 uppercase">
            Case studies
          </h2>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            OUR SUCCESS STORIES.{" "}
            <span className="text-cyan-400">REAL OUTCOMES</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-400">
            Discover how we’ve helped businesses across industries achieve their
            digital goals through strategy, innovation, and measurable results.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="mt-20 grid grid-cols-1 gap-10 md:grid-cols-2">
          {caseStudies.map((study) => (
            <div
              key={study.title}
              className="relative bg-linear-to-br from-gray-900 to-gray-950 border border-cyan-500/20 rounded-2xl overflow-hidden shadow-lg hover:shadow-cyan-500/40 transition-shadow duration-400 "
            >
              <div className="relative z-10 flex flex-col sm:flex-row items-stretch">
                {/* Text Side */}
                <div className="flex-1 p-8 flex flex-col justify-center">
                  <h3 className="text-lg font-semibold text-white">
                    {study.title}
                  </h3>
                  <p className="mt-1 text-sm text-cyan-200/80 uppercase tracking-wider">
                    {study.industry}
                  </p>
                  <h2
                    className={`mt-3 text-4xl sm:text-5xl font-extrabold bg-linear-to-r ${study.color} bg-clip-text text-transparent`}
                  >
                    {study.stat}
                  </h2>
                  <p className="mt-3 text-cyan-100/90 font-medium">
                    {study.description}
                  </p>
                </div>

                {/* Image Side */}
                <div className="relative sm:w-1/3 h-52 sm:h-auto overflow-hidden">
                  <Image
                    src={study.image}
                    alt={study.title}
                    fill
                    unoptimized
                    className="object-contain p-2"
                  />
                  <div className="absolute inset-0 ring-1 ring-cyan-400/30 pointer-events-none"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <SectionGlow />
    </section>
  );
}
